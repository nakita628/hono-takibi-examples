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

export function getKKey() {
  return ['k'] as const
}

export function getKGuestGuestSpaceIdV1AppJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app.json']['$get']>
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1AppJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1AppJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1['app.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1AppJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['app.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['app.json']['$get']>
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
                  ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['app.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1AppJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['app.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1AppJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1AppJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1['app.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKGuestGuestSpaceIdV1AppAclJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$get']>
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/acl.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1AppAclJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1AppAclJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app['acl.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1AppAclJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$get']>
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1AppAclJsonQueryKey>
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
            ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1AppAclJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1AppAclJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.app['acl.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKGuestGuestSpaceIdV1AppAclJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/app/acl.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1AppAclJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1AppAclJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$put']
      >,
    ) {
      return parseResponse(client.k.guest[':guestSpaceId'].v1.app['acl.json'].$put(args, options))
    },
  })
}

export function usePutKGuestGuestSpaceIdV1AppAclJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$put']
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
  const mutationDefaults = getPutKGuestGuestSpaceIdV1AppAclJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1AppActionsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['actions.json']['$get']>
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/actions.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1AppActionsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['actions.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1AppActionsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app['actions.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1AppActionsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['actions.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['actions.json']['$get']>
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['actions.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['actions.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1AppActionsJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['app']['actions.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1AppActionsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1AppActionsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.app['actions.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKGuestGuestSpaceIdV1AppAdminNotesJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['app']['adminNotes.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/adminNotes.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1AppAdminNotesJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['app']['adminNotes.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1AppAdminNotesJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app['adminNotes.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1AppAdminNotesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['app']['adminNotes.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['app']['adminNotes.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['adminNotes.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['adminNotes.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1AppAdminNotesJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['app']['adminNotes.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1AppAdminNotesJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1AppAdminNotesJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.app['adminNotes.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKGuestGuestSpaceIdV1AppCustomizeJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['app']['customize.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/customize.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1AppCustomizeJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['app']['customize.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1AppCustomizeJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app['customize.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1AppCustomizeJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['app']['customize.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['app']['customize.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['customize.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['customize.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1AppCustomizeJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['app']['customize.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1AppCustomizeJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1AppCustomizeJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.app['customize.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKGuestGuestSpaceIdV1AppFormFieldsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['fields.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/form/fields.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1AppFormFieldsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['fields.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1AppFormFieldsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app.form['fields.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1AppFormFieldsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['fields.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['fields.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['fields.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['fields.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1AppFormFieldsJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['fields.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1AppFormFieldsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1AppFormFieldsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.app.form['fields.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKGuestGuestSpaceIdV1AppFormLayoutJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['layout.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/form/layout.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1AppFormLayoutJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['layout.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1AppFormLayoutJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app.form['layout.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1AppFormLayoutJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['layout.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['layout.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['layout.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['layout.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1AppFormLayoutJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['layout.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1AppFormLayoutJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1AppFormLayoutJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.app.form['layout.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKGuestGuestSpaceIdV1AppMoveJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/app/move.json', 'POST'] as const
}

export function getPostKGuestGuestSpaceIdV1AppMoveJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['move.json']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['move.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKGuestGuestSpaceIdV1AppMoveJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['app']['move.json']['$post']
      >,
    ) {
      return parseResponse(client.k.guest[':guestSpaceId'].v1.app['move.json'].$post(args, options))
    },
  })
}

export function usePostKGuestGuestSpaceIdV1AppMoveJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['move.json']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['app']['move.json']['$post']
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
  const mutationDefaults = getPostKGuestGuestSpaceIdV1AppMoveJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1AppNotificationsGeneralJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['general.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/notifications/general.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1AppNotificationsGeneralJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['general.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1AppNotificationsGeneralJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app.notifications['general.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1AppNotificationsGeneralJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['general.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['general.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['general.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['general.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1AppNotificationsGeneralJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['general.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1AppNotificationsGeneralJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1AppNotificationsGeneralJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.app.notifications['general.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKGuestGuestSpaceIdV1AppNotificationsPerRecordJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['perRecord.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/notifications/perRecord.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1AppNotificationsPerRecordJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['perRecord.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1AppNotificationsPerRecordJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app.notifications['perRecord.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1AppNotificationsPerRecordJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['perRecord.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['perRecord.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['perRecord.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['perRecord.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1AppNotificationsPerRecordJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['perRecord.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1AppNotificationsPerRecordJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1AppNotificationsPerRecordJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.app.notifications['perRecord.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getKGuestGuestSpaceIdV1AppNotificationsReminderJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['reminder.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/notifications/reminder.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1AppNotificationsReminderJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['reminder.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1AppNotificationsReminderJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app.notifications['reminder.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1AppNotificationsReminderJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['reminder.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['reminder.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['reminder.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['reminder.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1AppNotificationsReminderJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['reminder.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1AppNotificationsReminderJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1AppNotificationsReminderJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.app.notifications['reminder.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getKGuestGuestSpaceIdV1AppPluginsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['plugins.json']['$get']>
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/plugins.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1AppPluginsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['plugins.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1AppPluginsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app['plugins.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1AppPluginsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['plugins.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['plugins.json']['$get']>
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['plugins.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['plugins.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1AppPluginsJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['app']['plugins.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1AppPluginsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1AppPluginsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.app['plugins.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKGuestGuestSpaceIdV1AppReportsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['reports.json']['$get']>
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/reports.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1AppReportsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['reports.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1AppReportsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app['reports.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1AppReportsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['reports.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['reports.json']['$get']>
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['reports.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['reports.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1AppReportsJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['app']['reports.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1AppReportsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1AppReportsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.app['reports.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKGuestGuestSpaceIdV1AppSettingsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['settings.json']['$get']>
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/settings.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1AppSettingsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['settings.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1AppSettingsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app['settings.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1AppSettingsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['settings.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['settings.json']['$get']>
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['settings.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['settings.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1AppSettingsJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['app']['settings.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1AppSettingsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1AppSettingsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.app['settings.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKGuestGuestSpaceIdV1AppStatusJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['status.json']['$get']>
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/status.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1AppStatusJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['status.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1AppStatusJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app['status.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1AppStatusJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['status.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['status.json']['$get']>
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['status.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['status.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1AppStatusJsonQueryKey>
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
            ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['status.json']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1AppStatusJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1AppStatusJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.app['status.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKGuestGuestSpaceIdV1AppViewsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['views.json']['$get']>
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/views.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1AppViewsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['views.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1AppViewsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app['views.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1AppViewsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['views.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['views.json']['$get']>
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['views.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['views.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1AppViewsJsonQueryKey>
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
            ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['views.json']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1AppViewsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1AppViewsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.app['views.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKGuestGuestSpaceIdV1AppsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['apps.json']['$get']>
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/apps.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1AppsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['apps.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1AppsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1['apps.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1AppsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['apps.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['apps.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['apps.json']['$get']>
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
                  ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['apps.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1AppsJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['apps.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1AppsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1AppsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1['apps.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKGuestGuestSpaceIdV1AppsStatisticsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['apps']['statistics.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/apps/statistics.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1AppsStatisticsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['apps']['statistics.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1AppsStatisticsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.apps['statistics.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1AppsStatisticsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['apps']['statistics.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['apps']['statistics.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['apps']['statistics.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['apps']['statistics.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1AppsStatisticsJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['apps']['statistics.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1AppsStatisticsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1AppsStatisticsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.apps['statistics.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKGuestGuestSpaceIdV1BulkRequestJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/bulkRequest.json', 'POST'] as const
}

export function getPostKGuestGuestSpaceIdV1BulkRequestJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['bulkRequest.json']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['bulkRequest.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKGuestGuestSpaceIdV1BulkRequestJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['bulkRequest.json']['$post']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1['bulkRequest.json'].$post(args, options),
      )
    },
  })
}

export function usePostKGuestGuestSpaceIdV1BulkRequestJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['bulkRequest.json']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['bulkRequest.json']['$post']
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
  const mutationDefaults = getPostKGuestGuestSpaceIdV1BulkRequestJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1FieldAclJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['field']['acl.json']['$get']>
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/field/acl.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1FieldAclJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['field']['acl.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1FieldAclJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.field['acl.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1FieldAclJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['field']['acl.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['field']['acl.json']['$get']>
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['field']['acl.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['field']['acl.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1FieldAclJsonQueryKey>
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
            ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['field']['acl.json']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1FieldAclJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1FieldAclJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.field['acl.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKGuestGuestSpaceIdV1FieldAclJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/field/acl.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1FieldAclJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['field']['acl.json']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['field']['acl.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1FieldAclJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['field']['acl.json']['$put']
      >,
    ) {
      return parseResponse(client.k.guest[':guestSpaceId'].v1.field['acl.json'].$put(args, options))
    },
  })
}

export function usePutKGuestGuestSpaceIdV1FieldAclJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['field']['acl.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['field']['acl.json']['$put']
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
  const mutationDefaults = getPutKGuestGuestSpaceIdV1FieldAclJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1FileJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$get']>
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/file.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1FileJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1FileJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1['file.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1FileJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$get']>
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
                  ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1FileJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1FileJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1FileJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1['file.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKGuestGuestSpaceIdV1FileJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/file.json', 'POST'] as const
}

export function getPostKGuestGuestSpaceIdV1FileJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKGuestGuestSpaceIdV1FileJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$post']>,
    ) {
      return parseResponse(client.k.guest[':guestSpaceId'].v1['file.json'].$post(args, options))
    },
  })
}

export function usePostKGuestGuestSpaceIdV1FileJson<
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
                  ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$post']>,
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
  const mutationDefaults = getPostKGuestGuestSpaceIdV1FileJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1FormJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['form.json']['$get']>
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/form.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1FormJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['form.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1FormJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1['form.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1FormJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['form.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['form.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['form.json']['$get']>
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
                  ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['form.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1FormJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['form.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1FormJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1FormJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1['form.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKGuestGuestSpaceIdV1GuestsJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/guests.json', 'POST'] as const
}

export function getPostKGuestGuestSpaceIdV1GuestsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['guests.json']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['guests.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKGuestGuestSpaceIdV1GuestsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['guests.json']['$post']
      >,
    ) {
      return parseResponse(client.k.guest[':guestSpaceId'].v1['guests.json'].$post(args, options))
    },
  })
}

export function usePostKGuestGuestSpaceIdV1GuestsJson<
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
                  ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['guests.json']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['guests.json']['$post']>,
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
  const mutationDefaults = getPostKGuestGuestSpaceIdV1GuestsJsonMutationOptions<
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

export function getDeleteKGuestGuestSpaceIdV1GuestsJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/guests.json', 'DELETE'] as const
}

export function getDeleteKGuestGuestSpaceIdV1GuestsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['guests.json']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['guests.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKGuestGuestSpaceIdV1GuestsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['guests.json']['$delete']
      >,
    ) {
      return parseResponse(client.k.guest[':guestSpaceId'].v1['guests.json'].$delete(args, options))
    },
  })
}

export function useDeleteKGuestGuestSpaceIdV1GuestsJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['guests.json']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['guests.json']['$delete']
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
  const mutationDefaults = getDeleteKGuestGuestSpaceIdV1GuestsJsonMutationOptions<
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

export function getPutKGuestGuestSpaceIdV1PluginJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/plugin.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1PluginJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1PluginJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$put']>,
    ) {
      return parseResponse(client.k.guest[':guestSpaceId'].v1['plugin.json'].$put(args, options))
    },
  })
}

export function usePutKGuestGuestSpaceIdV1PluginJson<
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
                  ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$put']>,
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
  const mutationDefaults = getPutKGuestGuestSpaceIdV1PluginJsonMutationOptions<
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

export function getPostKGuestGuestSpaceIdV1PluginJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/plugin.json', 'POST'] as const
}

export function getPostKGuestGuestSpaceIdV1PluginJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKGuestGuestSpaceIdV1PluginJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$post']
      >,
    ) {
      return parseResponse(client.k.guest[':guestSpaceId'].v1['plugin.json'].$post(args, options))
    },
  })
}

export function usePostKGuestGuestSpaceIdV1PluginJson<
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
                  ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$post']>,
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
  const mutationDefaults = getPostKGuestGuestSpaceIdV1PluginJsonMutationOptions<
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

export function getDeleteKGuestGuestSpaceIdV1PluginJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/plugin.json', 'DELETE'] as const
}

export function getDeleteKGuestGuestSpaceIdV1PluginJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKGuestGuestSpaceIdV1PluginJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$delete']
      >,
    ) {
      return parseResponse(client.k.guest[':guestSpaceId'].v1['plugin.json'].$delete(args, options))
    },
  })
}

export function useDeleteKGuestGuestSpaceIdV1PluginJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$delete']
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
  const mutationDefaults = getDeleteKGuestGuestSpaceIdV1PluginJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PluginAppsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin']['apps.json']['$get']>
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/plugin/apps.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1PluginAppsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin']['apps.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1PluginAppsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.plugin['apps.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1PluginAppsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin']['apps.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin']['apps.json']['$get']>
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['plugin']['apps.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['plugin']['apps.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1PluginAppsJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['plugin']['apps.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1PluginAppsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1PluginAppsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.plugin['apps.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKGuestGuestSpaceIdV1PluginsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugins.json']['$get']>
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/plugins.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1PluginsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugins.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1PluginsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1['plugins.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1PluginsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugins.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugins.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugins.json']['$get']>
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
                  ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugins.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1PluginsJsonQueryKey>
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
            ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugins.json']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1PluginsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1PluginsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1['plugins.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKGuestGuestSpaceIdV1PluginsRequiredJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['plugins']['required.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/plugins/required.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1PluginsRequiredJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['plugins']['required.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1PluginsRequiredJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.plugins['required.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1PluginsRequiredJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['plugins']['required.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['plugins']['required.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['plugins']['required.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['plugins']['required.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1PluginsRequiredJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['plugins']['required.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1PluginsRequiredJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1PluginsRequiredJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.plugins['required.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKGuestGuestSpaceIdV1PreviewAppJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app.json', 'POST'] as const
}

export function getPostKGuestGuestSpaceIdV1PreviewAppJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostKGuestGuestSpaceIdV1PreviewAppJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app.json']['$post']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview['app.json'].$post(args, options),
      )
    },
  })
}

export function usePostKGuestGuestSpaceIdV1PreviewAppJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app.json']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app.json']['$post']
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
  const mutationDefaults = getPostKGuestGuestSpaceIdV1PreviewAppJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppAclJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['acl.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/acl.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppAclJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['acl.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewAppAclJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['acl.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1PreviewAppAclJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['acl.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['acl.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['acl.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['acl.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppAclJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['acl.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppAclJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewAppAclJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app['acl.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKGuestGuestSpaceIdV1PreviewAppAclJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/acl.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1PreviewAppAclJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['acl.json']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['acl.json']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1PreviewAppAclJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['acl.json']['$put']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['acl.json'].$put(args, options),
      )
    },
  })
}

export function usePutKGuestGuestSpaceIdV1PreviewAppAclJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['acl.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['acl.json']['$put']
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
  const mutationDefaults = getPutKGuestGuestSpaceIdV1PreviewAppAclJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppActionsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['actions.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/actions.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppActionsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['actions.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewAppActionsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['actions.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1PreviewAppActionsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['actions.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['actions.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['actions.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['actions.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppActionsJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['actions.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppActionsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewAppActionsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app['actions.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKGuestGuestSpaceIdV1PreviewAppActionsJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/actions.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1PreviewAppActionsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['actions.json']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['actions.json']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1PreviewAppActionsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['actions.json']['$put']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['actions.json'].$put(args, options),
      )
    },
  })
}

export function usePutKGuestGuestSpaceIdV1PreviewAppActionsJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['actions.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['actions.json']['$put']
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
  const mutationDefaults = getPutKGuestGuestSpaceIdV1PreviewAppActionsJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['adminNotes.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/adminNotes.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['adminNotes.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['adminNotes.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1PreviewAppAdminNotesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['adminNotes.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['adminNotes.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['adminNotes.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['adminNotes.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['adminNotes.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app['adminNotes.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/adminNotes.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['adminNotes.json']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['adminNotes.json']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['adminNotes.json']['$put']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['adminNotes.json'].$put(args, options),
      )
    },
  })
}

export function usePutKGuestGuestSpaceIdV1PreviewAppAdminNotesJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['adminNotes.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['adminNotes.json']['$put']
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
  const mutationDefaults = getPutKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppCustomizeJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['customize.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/customize.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppCustomizeJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['customize.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewAppCustomizeJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['customize.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1PreviewAppCustomizeJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['customize.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['customize.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['customize.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['customize.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppCustomizeJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['customize.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppCustomizeJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewAppCustomizeJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app['customize.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKGuestGuestSpaceIdV1PreviewAppCustomizeJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/customize.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1PreviewAppCustomizeJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['customize.json']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['customize.json']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1PreviewAppCustomizeJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['customize.json']['$put']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['customize.json'].$put(args, options),
      )
    },
  })
}

export function usePutKGuestGuestSpaceIdV1PreviewAppCustomizeJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['customize.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['customize.json']['$put']
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
  const mutationDefaults = getPutKGuestGuestSpaceIdV1PreviewAppCustomizeJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppDeployJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['deploy.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/deploy.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppDeployJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['deploy.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewAppDeployJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['deploy.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1PreviewAppDeployJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['deploy.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['deploy.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['deploy.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['deploy.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppDeployJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['deploy.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppDeployJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewAppDeployJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app['deploy.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKGuestGuestSpaceIdV1PreviewAppDeployJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/deploy.json', 'POST'] as const
}

export function getPostKGuestGuestSpaceIdV1PreviewAppDeployJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['deploy.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['deploy.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostKGuestGuestSpaceIdV1PreviewAppDeployJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['deploy.json']['$post']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['deploy.json'].$post(args, options),
      )
    },
  })
}

export function usePostKGuestGuestSpaceIdV1PreviewAppDeployJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['deploy.json']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['deploy.json']['$post']
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
  const mutationDefaults = getPostKGuestGuestSpaceIdV1PreviewAppDeployJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/form/fields.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app.form['fields.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1PreviewAppFormFieldsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app.form['fields.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/form/fields.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$put']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app.form['fields.json'].$put(args, options),
      )
    },
  })
}

export function usePutKGuestGuestSpaceIdV1PreviewAppFormFieldsJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$put']
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
  const mutationDefaults = getPutKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonMutationOptions<
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

export function getPostKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/form/fields.json', 'POST'] as const
}

export function getPostKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$post']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app.form['fields.json'].$post(args, options),
      )
    },
  })
}

export function usePostKGuestGuestSpaceIdV1PreviewAppFormFieldsJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$post']
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
  const mutationDefaults = getPostKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonMutationOptions<
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

export function getDeleteKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/form/fields.json', 'DELETE'] as const
}

export function getDeleteKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$delete']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app.form['fields.json'].$delete(args, options),
      )
    },
  })
}

export function useDeleteKGuestGuestSpaceIdV1PreviewAppFormFieldsJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$delete']
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
  const mutationDefaults = getDeleteKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['layout.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/form/layout.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['layout.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app.form['layout.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1PreviewAppFormLayoutJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['layout.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['layout.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['layout.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['layout.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['layout.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app.form['layout.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/form/layout.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['layout.json']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['layout.json']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['layout.json']['$put']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app.form['layout.json'].$put(args, options),
      )
    },
  })
}

export function usePutKGuestGuestSpaceIdV1PreviewAppFormLayoutJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['layout.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['layout.json']['$put']
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
  const mutationDefaults = getPutKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['general.json']['$get']
    >
  >,
) {
  return [
    'k',
    '/k/guest/:guestSpaceId/v1/preview/app/notifications/general.json',
    toValue(args),
  ] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['general.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app.notifications['general.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['general.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['general.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['general.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['general.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['general.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app.notifications['general.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/notifications/general.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['general.json']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['general.json']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['general.json']['$put']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app.notifications['general.json'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['general.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['general.json']['$put']
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
    getPutKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['perRecord.json']['$get']
    >
  >,
) {
  return [
    'k',
    '/k/guest/:guestSpaceId/v1/preview/app/notifications/perRecord.json',
    toValue(args),
  ] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['perRecord.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app.notifications['perRecord.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['perRecord.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['perRecord.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['perRecord.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['perRecord.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['perRecord.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app.notifications['perRecord.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/notifications/perRecord.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['perRecord.json']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['perRecord.json']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['perRecord.json']['$put']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app.notifications['perRecord.json'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['perRecord.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['perRecord.json']['$put']
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
    getPutKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['reminder.json']['$get']
    >
  >,
) {
  return [
    'k',
    '/k/guest/:guestSpaceId/v1/preview/app/notifications/reminder.json',
    toValue(args),
  ] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['reminder.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app.notifications['reminder.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['reminder.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['reminder.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['reminder.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['reminder.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['reminder.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app.notifications['reminder.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/notifications/reminder.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['reminder.json']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['reminder.json']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['reminder.json']['$put']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app.notifications['reminder.json'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['reminder.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['reminder.json']['$put']
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
    getPutKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppPluginsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['plugins.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/plugins.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppPluginsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['plugins.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewAppPluginsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['plugins.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1PreviewAppPluginsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['plugins.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['plugins.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['plugins.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['plugins.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppPluginsJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['plugins.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppPluginsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewAppPluginsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app['plugins.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKGuestGuestSpaceIdV1PreviewAppPluginsJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/plugins.json', 'POST'] as const
}

export function getPostKGuestGuestSpaceIdV1PreviewAppPluginsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['plugins.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['plugins.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostKGuestGuestSpaceIdV1PreviewAppPluginsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['plugins.json']['$post']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['plugins.json'].$post(args, options),
      )
    },
  })
}

export function usePostKGuestGuestSpaceIdV1PreviewAppPluginsJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['plugins.json']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['plugins.json']['$post']
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
  const mutationDefaults = getPostKGuestGuestSpaceIdV1PreviewAppPluginsJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppReportsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['reports.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/reports.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppReportsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['reports.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewAppReportsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['reports.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1PreviewAppReportsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['reports.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['reports.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['reports.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['reports.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppReportsJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['reports.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppReportsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewAppReportsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app['reports.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKGuestGuestSpaceIdV1PreviewAppReportsJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/reports.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1PreviewAppReportsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['reports.json']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['reports.json']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1PreviewAppReportsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['reports.json']['$put']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['reports.json'].$put(args, options),
      )
    },
  })
}

export function usePutKGuestGuestSpaceIdV1PreviewAppReportsJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['reports.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['reports.json']['$put']
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
  const mutationDefaults = getPutKGuestGuestSpaceIdV1PreviewAppReportsJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppSettingsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['settings.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/settings.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppSettingsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['settings.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewAppSettingsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['settings.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1PreviewAppSettingsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['settings.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['settings.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['settings.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['settings.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppSettingsJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['settings.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppSettingsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewAppSettingsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app['settings.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKGuestGuestSpaceIdV1PreviewAppSettingsJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/settings.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1PreviewAppSettingsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['settings.json']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['settings.json']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1PreviewAppSettingsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['settings.json']['$put']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['settings.json'].$put(args, options),
      )
    },
  })
}

export function usePutKGuestGuestSpaceIdV1PreviewAppSettingsJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['settings.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['settings.json']['$put']
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
  const mutationDefaults = getPutKGuestGuestSpaceIdV1PreviewAppSettingsJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppStatusJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['status.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/status.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppStatusJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['status.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewAppStatusJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['status.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1PreviewAppStatusJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['status.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['status.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['status.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['status.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppStatusJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['status.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppStatusJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewAppStatusJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app['status.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKGuestGuestSpaceIdV1PreviewAppStatusJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/status.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1PreviewAppStatusJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['status.json']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['status.json']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1PreviewAppStatusJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['status.json']['$put']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['status.json'].$put(args, options),
      )
    },
  })
}

export function usePutKGuestGuestSpaceIdV1PreviewAppStatusJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['status.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['status.json']['$put']
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
  const mutationDefaults = getPutKGuestGuestSpaceIdV1PreviewAppStatusJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppViewsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['views.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/views.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppViewsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['views.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewAppViewsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['views.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1PreviewAppViewsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['views.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['views.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['views.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['views.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppViewsJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['views.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1PreviewAppViewsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewAppViewsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app['views.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKGuestGuestSpaceIdV1PreviewAppViewsJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/views.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1PreviewAppViewsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['views.json']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['views.json']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1PreviewAppViewsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['views.json']['$put']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['views.json'].$put(args, options),
      )
    },
  })
}

export function usePutKGuestGuestSpaceIdV1PreviewAppViewsJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['views.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['views.json']['$put']
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
  const mutationDefaults = getPutKGuestGuestSpaceIdV1PreviewAppViewsJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewFieldAclJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['field']['acl.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/field/acl.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1PreviewFieldAclJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['field']['acl.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewFieldAclJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.field['acl.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1PreviewFieldAclJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['field']['acl.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['field']['acl.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['field']['acl.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['field']['acl.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1PreviewFieldAclJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['field']['acl.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1PreviewFieldAclJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewFieldAclJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.field['acl.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKGuestGuestSpaceIdV1PreviewFieldAclJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/field/acl.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1PreviewFieldAclJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['field']['acl.json']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['field']['acl.json']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1PreviewFieldAclJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['field']['acl.json']['$put']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.field['acl.json'].$put(args, options),
      )
    },
  })
}

export function usePutKGuestGuestSpaceIdV1PreviewFieldAclJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['field']['acl.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['field']['acl.json']['$put']
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
  const mutationDefaults = getPutKGuestGuestSpaceIdV1PreviewFieldAclJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewFormJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['preview']['form.json']['$get']>
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/form.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1PreviewFormJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['preview']['form.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewFormJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview['form.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1PreviewFormJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['preview']['form.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['preview']['form.json']['$get']>
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['form.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['form.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1PreviewFormJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['form.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1PreviewFormJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewFormJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview['form.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKGuestGuestSpaceIdV1PreviewRecordAclJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['record']['acl.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/record/acl.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1PreviewRecordAclJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['record']['acl.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewRecordAclJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.record['acl.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1PreviewRecordAclJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['record']['acl.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['record']['acl.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['record']['acl.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['record']['acl.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1PreviewRecordAclJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['record']['acl.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1PreviewRecordAclJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1PreviewRecordAclJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.record['acl.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKGuestGuestSpaceIdV1PreviewRecordAclJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/record/acl.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1PreviewRecordAclJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['record']['acl.json']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['record']['acl.json']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1PreviewRecordAclJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['record']['acl.json']['$put']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.record['acl.json'].$put(args, options),
      )
    },
  })
}

export function usePutKGuestGuestSpaceIdV1PreviewRecordAclJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['record']['acl.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['record']['acl.json']['$put']
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
  const mutationDefaults = getPutKGuestGuestSpaceIdV1PreviewRecordAclJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1RecordJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$get']>
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/record.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1RecordJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1RecordJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1['record.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1RecordJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$get']>
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
                  ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1RecordJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1RecordJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1RecordJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1['record.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKGuestGuestSpaceIdV1RecordJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/record.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1RecordJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1RecordJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$put']>,
    ) {
      return parseResponse(client.k.guest[':guestSpaceId'].v1['record.json'].$put(args, options))
    },
  })
}

export function usePutKGuestGuestSpaceIdV1RecordJson<
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
                  ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$put']>,
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
  const mutationDefaults = getPutKGuestGuestSpaceIdV1RecordJsonMutationOptions<
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

export function getPostKGuestGuestSpaceIdV1RecordJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/record.json', 'POST'] as const
}

export function getPostKGuestGuestSpaceIdV1RecordJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKGuestGuestSpaceIdV1RecordJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$post']
      >,
    ) {
      return parseResponse(client.k.guest[':guestSpaceId'].v1['record.json'].$post(args, options))
    },
  })
}

export function usePostKGuestGuestSpaceIdV1RecordJson<
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
                  ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$post']>,
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
  const mutationDefaults = getPostKGuestGuestSpaceIdV1RecordJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1RecordAclJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['record']['acl.json']['$get']>
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/record/acl.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1RecordAclJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['record']['acl.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1RecordAclJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.record['acl.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1RecordAclJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['record']['acl.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['record']['acl.json']['$get']>
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['acl.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['acl.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1RecordAclJsonQueryKey>
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
            ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['record']['acl.json']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1RecordAclJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1RecordAclJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.record['acl.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKGuestGuestSpaceIdV1RecordAclJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/record/acl.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1RecordAclJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['record']['acl.json']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['record']['acl.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1RecordAclJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['record']['acl.json']['$put']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.record['acl.json'].$put(args, options),
      )
    },
  })
}

export function usePutKGuestGuestSpaceIdV1RecordAclJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['acl.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['record']['acl.json']['$put']
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
  const mutationDefaults = getPutKGuestGuestSpaceIdV1RecordAclJsonMutationOptions<
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

export function getPutKGuestGuestSpaceIdV1RecordAssigneesJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/record/assignees.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1RecordAssigneesJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['record']['assignees.json']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['record']['assignees.json']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1RecordAssigneesJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['record']['assignees.json']['$put']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.record['assignees.json'].$put(args, options),
      )
    },
  })
}

export function usePutKGuestGuestSpaceIdV1RecordAssigneesJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['assignees.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['record']['assignees.json']['$put']
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
  const mutationDefaults = getPutKGuestGuestSpaceIdV1RecordAssigneesJsonMutationOptions<
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

export function getPostKGuestGuestSpaceIdV1RecordCommentJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/record/comment.json', 'POST'] as const
}

export function getPostKGuestGuestSpaceIdV1RecordCommentJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comment.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comment.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostKGuestGuestSpaceIdV1RecordCommentJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comment.json']['$post']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.record['comment.json'].$post(args, options),
      )
    },
  })
}

export function usePostKGuestGuestSpaceIdV1RecordCommentJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comment.json']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comment.json']['$post']
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
  const mutationDefaults = getPostKGuestGuestSpaceIdV1RecordCommentJsonMutationOptions<
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

export function getDeleteKGuestGuestSpaceIdV1RecordCommentJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/record/comment.json', 'DELETE'] as const
}

export function getDeleteKGuestGuestSpaceIdV1RecordCommentJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comment.json']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comment.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteKGuestGuestSpaceIdV1RecordCommentJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comment.json']['$delete']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.record['comment.json'].$delete(args, options),
      )
    },
  })
}

export function useDeleteKGuestGuestSpaceIdV1RecordCommentJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comment.json']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comment.json']['$delete']
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
  const mutationDefaults = getDeleteKGuestGuestSpaceIdV1RecordCommentJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1RecordCommentsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comments.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/record/comments.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1RecordCommentsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comments.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1RecordCommentsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.record['comments.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1RecordCommentsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comments.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comments.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comments.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comments.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1RecordCommentsJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comments.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1RecordCommentsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1RecordCommentsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.record['comments.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKGuestGuestSpaceIdV1RecordStatusJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/record/status.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1RecordStatusJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['record']['status.json']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['record']['status.json']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1RecordStatusJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['record']['status.json']['$put']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.record['status.json'].$put(args, options),
      )
    },
  })
}

export function usePutKGuestGuestSpaceIdV1RecordStatusJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['status.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['record']['status.json']['$put']
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
  const mutationDefaults = getPutKGuestGuestSpaceIdV1RecordStatusJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1RecordsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$get']>
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/records.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1RecordsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1RecordsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1['records.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1RecordsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$get']>
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
                  ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1RecordsJsonQueryKey>
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
            ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1RecordsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1RecordsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1['records.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKGuestGuestSpaceIdV1RecordsJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/records.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1RecordsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1RecordsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$put']
      >,
    ) {
      return parseResponse(client.k.guest[':guestSpaceId'].v1['records.json'].$put(args, options))
    },
  })
}

export function usePutKGuestGuestSpaceIdV1RecordsJson<
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
                  ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$put']>,
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
  const mutationDefaults = getPutKGuestGuestSpaceIdV1RecordsJsonMutationOptions<
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

export function getPostKGuestGuestSpaceIdV1RecordsJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/records.json', 'POST'] as const
}

export function getPostKGuestGuestSpaceIdV1RecordsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKGuestGuestSpaceIdV1RecordsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$post']
      >,
    ) {
      return parseResponse(client.k.guest[':guestSpaceId'].v1['records.json'].$post(args, options))
    },
  })
}

export function usePostKGuestGuestSpaceIdV1RecordsJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$post']>,
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
  const mutationDefaults = getPostKGuestGuestSpaceIdV1RecordsJsonMutationOptions<
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

export function getDeleteKGuestGuestSpaceIdV1RecordsJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/records.json', 'DELETE'] as const
}

export function getDeleteKGuestGuestSpaceIdV1RecordsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKGuestGuestSpaceIdV1RecordsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$delete']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1['records.json'].$delete(args, options),
      )
    },
  })
}

export function useDeleteKGuestGuestSpaceIdV1RecordsJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$delete']
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
  const mutationDefaults = getDeleteKGuestGuestSpaceIdV1RecordsJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1RecordsAclEvaluateJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['records']['acl']['evaluate.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/records/acl/evaluate.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1RecordsAclEvaluateJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['records']['acl']['evaluate.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1RecordsAclEvaluateJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.records.acl['evaluate.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1RecordsAclEvaluateJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['records']['acl']['evaluate.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['records']['acl']['evaluate.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['records']['acl']['evaluate.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['records']['acl']['evaluate.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1RecordsAclEvaluateJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['records']['acl']['evaluate.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1RecordsAclEvaluateJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1RecordsAclEvaluateJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.records.acl['evaluate.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKGuestGuestSpaceIdV1RecordsCursorJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/records/cursor.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1RecordsCursorJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1RecordsCursorJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.records['cursor.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1RecordsCursorJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1RecordsCursorJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1RecordsCursorJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1RecordsCursorJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.records['cursor.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKGuestGuestSpaceIdV1RecordsCursorJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/records/cursor.json', 'POST'] as const
}

export function getPostKGuestGuestSpaceIdV1RecordsCursorJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostKGuestGuestSpaceIdV1RecordsCursorJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$post']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.records['cursor.json'].$post(args, options),
      )
    },
  })
}

export function usePostKGuestGuestSpaceIdV1RecordsCursorJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$post']
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
  const mutationDefaults = getPostKGuestGuestSpaceIdV1RecordsCursorJsonMutationOptions<
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

export function getDeleteKGuestGuestSpaceIdV1RecordsCursorJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/records/cursor.json', 'DELETE'] as const
}

export function getDeleteKGuestGuestSpaceIdV1RecordsCursorJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteKGuestGuestSpaceIdV1RecordsCursorJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$delete']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.records['cursor.json'].$delete(args, options),
      )
    },
  })
}

export function useDeleteKGuestGuestSpaceIdV1RecordsCursorJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$delete']
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
  const mutationDefaults = getDeleteKGuestGuestSpaceIdV1RecordsCursorJsonMutationOptions<
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

export function getPutKGuestGuestSpaceIdV1RecordsStatusJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/records/status.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1RecordsStatusJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['records']['status.json']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['records']['status.json']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1RecordsStatusJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['records']['status.json']['$put']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.records['status.json'].$put(args, options),
      )
    },
  })
}

export function usePutKGuestGuestSpaceIdV1RecordsStatusJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['records']['status.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['records']['status.json']['$put']
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
  const mutationDefaults = getPutKGuestGuestSpaceIdV1RecordsStatusJsonMutationOptions<
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

export function getPostKGuestGuestSpaceIdV1SearchJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/search.json', 'POST'] as const
}

export function getPostKGuestGuestSpaceIdV1SearchJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['search.json']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['search.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKGuestGuestSpaceIdV1SearchJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['search.json']['$post']
      >,
    ) {
      return parseResponse(client.k.guest[':guestSpaceId'].v1['search.json'].$post(args, options))
    },
  })
}

export function usePostKGuestGuestSpaceIdV1SearchJson<
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
                  ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['search.json']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['search.json']['$post']>,
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
  const mutationDefaults = getPostKGuestGuestSpaceIdV1SearchJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1SpaceJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$get']>
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/space.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1SpaceJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1SpaceJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1['space.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1SpaceJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$get']>
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
                  ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1SpaceJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1SpaceJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1SpaceJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1['space.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKGuestGuestSpaceIdV1SpaceJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/space.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1SpaceJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1SpaceJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$put']>,
    ) {
      return parseResponse(client.k.guest[':guestSpaceId'].v1['space.json'].$put(args, options))
    },
  })
}

export function usePutKGuestGuestSpaceIdV1SpaceJson<
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
                  ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$put']>,
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
  const mutationDefaults = getPutKGuestGuestSpaceIdV1SpaceJsonMutationOptions<
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

export function getDeleteKGuestGuestSpaceIdV1SpaceJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/space.json', 'DELETE'] as const
}

export function getDeleteKGuestGuestSpaceIdV1SpaceJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKGuestGuestSpaceIdV1SpaceJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$delete']
      >,
    ) {
      return parseResponse(client.k.guest[':guestSpaceId'].v1['space.json'].$delete(args, options))
    },
  })
}

export function useDeleteKGuestGuestSpaceIdV1SpaceJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$delete']>,
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
  const mutationDefaults = getDeleteKGuestGuestSpaceIdV1SpaceJsonMutationOptions<
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

export function getPutKGuestGuestSpaceIdV1SpaceBodyJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/space/body.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1SpaceBodyJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['space']['body.json']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['space']['body.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1SpaceBodyJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['space']['body.json']['$put']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.space['body.json'].$put(args, options),
      )
    },
  })
}

export function usePutKGuestGuestSpaceIdV1SpaceBodyJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['space']['body.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['space']['body.json']['$put']
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
  const mutationDefaults = getPutKGuestGuestSpaceIdV1SpaceBodyJsonMutationOptions<
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

export function getPutKGuestGuestSpaceIdV1SpaceGuestsJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/space/guests.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1SpaceGuestsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['space']['guests.json']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['space']['guests.json']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1SpaceGuestsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['space']['guests.json']['$put']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.space['guests.json'].$put(args, options),
      )
    },
  })
}

export function usePutKGuestGuestSpaceIdV1SpaceGuestsJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['space']['guests.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['space']['guests.json']['$put']
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
  const mutationDefaults = getPutKGuestGuestSpaceIdV1SpaceGuestsJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1SpaceMembersJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['space']['members.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/space/members.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1SpaceMembersJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['space']['members.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1SpaceMembersJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.space['members.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1SpaceMembersJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['space']['members.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['space']['members.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['space']['members.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['space']['members.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1SpaceMembersJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['space']['members.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1SpaceMembersJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1SpaceMembersJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.space['members.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKGuestGuestSpaceIdV1SpaceMembersJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/space/members.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1SpaceMembersJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['space']['members.json']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['space']['members.json']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1SpaceMembersJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['space']['members.json']['$put']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.space['members.json'].$put(args, options),
      )
    },
  })
}

export function usePutKGuestGuestSpaceIdV1SpaceMembersJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['space']['members.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['space']['members.json']['$put']
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
  const mutationDefaults = getPutKGuestGuestSpaceIdV1SpaceMembersJsonMutationOptions<
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

export function getPutKGuestGuestSpaceIdV1SpaceThreadJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/space/thread.json', 'PUT'] as const
}

export function getPutKGuestGuestSpaceIdV1SpaceThreadJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['space']['thread.json']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['space']['thread.json']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKGuestGuestSpaceIdV1SpaceThreadJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['space']['thread.json']['$put']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.space['thread.json'].$put(args, options),
      )
    },
  })
}

export function usePutKGuestGuestSpaceIdV1SpaceThreadJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['space']['thread.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['space']['thread.json']['$put']
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
  const mutationDefaults = getPutKGuestGuestSpaceIdV1SpaceThreadJsonMutationOptions<
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

export function getPostKGuestGuestSpaceIdV1SpaceThreadJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/space/thread.json', 'POST'] as const
}

export function getPostKGuestGuestSpaceIdV1SpaceThreadJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['space']['thread.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['space']['thread.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostKGuestGuestSpaceIdV1SpaceThreadJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['space']['thread.json']['$post']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.space['thread.json'].$post(args, options),
      )
    },
  })
}

export function usePostKGuestGuestSpaceIdV1SpaceThreadJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['space']['thread.json']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['space']['thread.json']['$post']
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
  const mutationDefaults = getPostKGuestGuestSpaceIdV1SpaceThreadJsonMutationOptions<
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

export function getPostKGuestGuestSpaceIdV1SpaceThreadCommentJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/space/thread/comment.json', 'POST'] as const
}

export function getPostKGuestGuestSpaceIdV1SpaceThreadCommentJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['space']['thread']['comment.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['space']['thread']['comment.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostKGuestGuestSpaceIdV1SpaceThreadCommentJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['space']['thread']['comment.json']['$post']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.space.thread['comment.json'].$post(args, options),
      )
    },
  })
}

export function usePostKGuestGuestSpaceIdV1SpaceThreadCommentJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['space']['thread']['comment.json']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['space']['thread']['comment.json']['$post']
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
  const mutationDefaults = getPostKGuestGuestSpaceIdV1SpaceThreadCommentJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1SpacesStatisticsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['spaces']['statistics.json']['$get']
    >
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/spaces/statistics.json', toValue(args)] as const
}

export function getKGuestGuestSpaceIdV1SpacesStatisticsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['spaces']['statistics.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKGuestGuestSpaceIdV1SpacesStatisticsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.spaces['statistics.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKGuestGuestSpaceIdV1SpacesStatisticsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['spaces']['statistics.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['spaces']['statistics.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['spaces']['statistics.json']['$get']
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['spaces']['statistics.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKGuestGuestSpaceIdV1SpacesStatisticsJsonQueryKey>
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
              (typeof client.k.guest)[':guestSpaceId']['v1']['spaces']['statistics.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKGuestGuestSpaceIdV1SpacesStatisticsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKGuestGuestSpaceIdV1SpacesStatisticsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.guest[':guestSpaceId'].v1.spaces['statistics.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKGuestGuestSpaceIdV1TemplateSpaceJsonMutationKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/template/space.json', 'POST'] as const
}

export function getPostKGuestGuestSpaceIdV1TemplateSpaceJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.k.guest)[':guestSpaceId']['v1']['template']['space.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['template']['space.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostKGuestGuestSpaceIdV1TemplateSpaceJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.guest)[':guestSpaceId']['v1']['template']['space.json']['$post']
      >,
    ) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.template['space.json'].$post(args, options),
      )
    },
  })
}

export function usePostKGuestGuestSpaceIdV1TemplateSpaceJson<
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
                    (typeof client.k.guest)[':guestSpaceId']['v1']['template']['space.json']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.guest)[':guestSpaceId']['v1']['template']['space.json']['$post']
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
  const mutationDefaults = getPostKGuestGuestSpaceIdV1TemplateSpaceJsonMutationOptions<
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

export function getPostKGuestV1SearchJsonMutationKey() {
  return ['k', '/k/guest/v1/search.json', 'POST'] as const
}

export function getPostKGuestV1SearchJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.guest.v1)['search.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.guest.v1)['search.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKGuestV1SearchJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.guest.v1)['search.json']['$post']>) {
      return parseResponse(client.k.guest.v1['search.json'].$post(args, options))
    },
  })
}

export function usePostKGuestV1SearchJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.guest.v1)['search.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.guest.v1)['search.json']['$post']>,
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
  const mutationDefaults = getPostKGuestV1SearchJsonMutationOptions<TError, TOnMutateResult>(
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

export function getKV1AppJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1)['app.json']['$get']>>,
) {
  return ['k', '/k/v1/app.json', toValue(args)] as const
}

export function getKV1AppJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1)['app.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1AppJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1['app.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1AppJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['app.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1)['app.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['app.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['app.json']['$get']>>>
            >
          >,
          ReturnType<typeof getKV1AppJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['app.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1AppJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1AppJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1['app.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKV1AppAclJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app)['acl.json']['$get']>>,
) {
  return ['k', '/k/v1/app/acl.json', toValue(args)] as const
}

export function getKV1AppAclJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app)['acl.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1AppAclJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.app['acl.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1AppAclJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['acl.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app)['acl.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app)['acl.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app)['acl.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1AppAclJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['acl.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1AppAclJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1AppAclJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.app['acl.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKV1AppAclJsonMutationKey() {
  return ['k', '/k/v1/app/acl.json', 'PUT'] as const
}

export function getPutKV1AppAclJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['acl.json']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.app)['acl.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1AppAclJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1.app)['acl.json']['$put']>) {
      return parseResponse(client.k.v1.app['acl.json'].$put(args, options))
    },
  })
}

export function usePutKV1AppAclJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app)['acl.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.app)['acl.json']['$put']>,
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
  const mutationDefaults = getPutKV1AppAclJsonMutationOptions<TError, TOnMutateResult>(
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

export function getKV1AppActionsJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app)['actions.json']['$get']>>,
) {
  return ['k', '/k/v1/app/actions.json', toValue(args)] as const
}

export function getKV1AppActionsJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app)['actions.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1AppActionsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.app['actions.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1AppActionsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['actions.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app)['actions.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app)['actions.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app)['actions.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1AppActionsJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['actions.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1AppActionsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1AppActionsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.app['actions.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKV1AppAdminNotesJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app)['adminNotes.json']['$get']>>,
) {
  return ['k', '/k/v1/app/adminNotes.json', toValue(args)] as const
}

export function getKV1AppAdminNotesJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app)['adminNotes.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1AppAdminNotesJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.app['adminNotes.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1AppAdminNotesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['adminNotes.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app)['adminNotes.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app)['adminNotes.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app)['adminNotes.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1AppAdminNotesJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.app)['adminNotes.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1AppAdminNotesJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1AppAdminNotesJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.app['adminNotes.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKV1AppCustomizeJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app)['customize.json']['$get']>>,
) {
  return ['k', '/k/v1/app/customize.json', toValue(args)] as const
}

export function getKV1AppCustomizeJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app)['customize.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1AppCustomizeJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.app['customize.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1AppCustomizeJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['customize.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app)['customize.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app)['customize.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app)['customize.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1AppCustomizeJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.app)['customize.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1AppCustomizeJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1AppCustomizeJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.app['customize.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKV1AppFormFieldsJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app.form)['fields.json']['$get']>>,
) {
  return ['k', '/k/v1/app/form/fields.json', toValue(args)] as const
}

export function getKV1AppFormFieldsJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app.form)['fields.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1AppFormFieldsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.app.form['fields.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1AppFormFieldsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.app.form)['fields.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app.form)['fields.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app.form)['fields.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app.form)['fields.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1AppFormFieldsJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.app.form)['fields.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1AppFormFieldsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1AppFormFieldsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.app.form['fields.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKV1AppFormLayoutJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app.form)['layout.json']['$get']>>,
) {
  return ['k', '/k/v1/app/form/layout.json', toValue(args)] as const
}

export function getKV1AppFormLayoutJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app.form)['layout.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1AppFormLayoutJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.app.form['layout.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1AppFormLayoutJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.app.form)['layout.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app.form)['layout.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app.form)['layout.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app.form)['layout.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1AppFormLayoutJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.app.form)['layout.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1AppFormLayoutJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1AppFormLayoutJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.app.form['layout.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKV1AppMoveJsonMutationKey() {
  return ['k', '/k/v1/app/move.json', 'POST'] as const
}

export function getPostKV1AppMoveJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['move.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.app)['move.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKV1AppMoveJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1.app)['move.json']['$post']>) {
      return parseResponse(client.k.v1.app['move.json'].$post(args, options))
    },
  })
}

export function usePostKV1AppMoveJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app)['move.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.app)['move.json']['$post']>,
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
  const mutationDefaults = getPostKV1AppMoveJsonMutationOptions<TError, TOnMutateResult>(
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

export function getKV1AppNotificationsGeneralJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.app.notifications)['general.json']['$get']>
  >,
) {
  return ['k', '/k/v1/app/notifications/general.json', toValue(args)] as const
}

export function getKV1AppNotificationsGeneralJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.app.notifications)['general.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1AppNotificationsGeneralJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.app.notifications['general.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1AppNotificationsGeneralJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.app.notifications)['general.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.app.notifications)['general.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app.notifications)['general.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app.notifications)['general.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1AppNotificationsGeneralJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.app.notifications)['general.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1AppNotificationsGeneralJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1AppNotificationsGeneralJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.app.notifications['general.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKV1AppNotificationsPerRecordJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.app.notifications)['perRecord.json']['$get']>
  >,
) {
  return ['k', '/k/v1/app/notifications/perRecord.json', toValue(args)] as const
}

export function getKV1AppNotificationsPerRecordJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.app.notifications)['perRecord.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1AppNotificationsPerRecordJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.app.notifications['perRecord.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1AppNotificationsPerRecordJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.app.notifications)['perRecord.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.app.notifications)['perRecord.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.k.v1.app.notifications)['perRecord.json']['$get']>
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
                  ReturnType<(typeof client.k.v1.app.notifications)['perRecord.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getKV1AppNotificationsPerRecordJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.app.notifications)['perRecord.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1AppNotificationsPerRecordJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1AppNotificationsPerRecordJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.app.notifications['perRecord.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKV1AppNotificationsReminderJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.app.notifications)['reminder.json']['$get']>
  >,
) {
  return ['k', '/k/v1/app/notifications/reminder.json', toValue(args)] as const
}

export function getKV1AppNotificationsReminderJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.app.notifications)['reminder.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1AppNotificationsReminderJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.app.notifications['reminder.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1AppNotificationsReminderJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.app.notifications)['reminder.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.app.notifications)['reminder.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app.notifications)['reminder.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app.notifications)['reminder.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1AppNotificationsReminderJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.app.notifications)['reminder.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1AppNotificationsReminderJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1AppNotificationsReminderJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.app.notifications['reminder.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKV1AppPluginsJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app)['plugins.json']['$get']>>,
) {
  return ['k', '/k/v1/app/plugins.json', toValue(args)] as const
}

export function getKV1AppPluginsJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app)['plugins.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1AppPluginsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.app['plugins.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1AppPluginsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['plugins.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app)['plugins.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app)['plugins.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app)['plugins.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1AppPluginsJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['plugins.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1AppPluginsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1AppPluginsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.app['plugins.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKV1AppReportsJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app)['reports.json']['$get']>>,
) {
  return ['k', '/k/v1/app/reports.json', toValue(args)] as const
}

export function getKV1AppReportsJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app)['reports.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1AppReportsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.app['reports.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1AppReportsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['reports.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app)['reports.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app)['reports.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app)['reports.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1AppReportsJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['reports.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1AppReportsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1AppReportsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.app['reports.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKV1AppSettingsJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app)['settings.json']['$get']>>,
) {
  return ['k', '/k/v1/app/settings.json', toValue(args)] as const
}

export function getKV1AppSettingsJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app)['settings.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1AppSettingsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.app['settings.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1AppSettingsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['settings.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app)['settings.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app)['settings.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app)['settings.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1AppSettingsJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['settings.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1AppSettingsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1AppSettingsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.app['settings.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKV1AppStatusJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app)['status.json']['$get']>>,
) {
  return ['k', '/k/v1/app/status.json', toValue(args)] as const
}

export function getKV1AppStatusJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app)['status.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1AppStatusJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.app['status.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1AppStatusJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['status.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app)['status.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app)['status.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app)['status.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1AppStatusJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['status.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1AppStatusJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1AppStatusJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.app['status.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKV1AppViewsJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app)['views.json']['$get']>>,
) {
  return ['k', '/k/v1/app/views.json', toValue(args)] as const
}

export function getKV1AppViewsJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app)['views.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1AppViewsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.app['views.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1AppViewsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['views.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.app)['views.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app)['views.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.app)['views.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1AppViewsJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['views.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1AppViewsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1AppViewsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.app['views.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKV1AppsJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1)['apps.json']['$get']>>,
) {
  return ['k', '/k/v1/apps.json', toValue(args)] as const
}

export function getKV1AppsJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1)['apps.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1AppsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1['apps.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1AppsJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['apps.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1)['apps.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['apps.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['apps.json']['$get']>>>
            >
          >,
          ReturnType<typeof getKV1AppsJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['apps.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1AppsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1AppsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1['apps.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKV1AppsStatisticsJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.apps)['statistics.json']['$get']>>,
) {
  return ['k', '/k/v1/apps/statistics.json', toValue(args)] as const
}

export function getKV1AppsStatisticsJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.apps)['statistics.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1AppsStatisticsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.apps['statistics.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1AppsStatisticsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.apps)['statistics.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.apps)['statistics.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.apps)['statistics.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.apps)['statistics.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1AppsStatisticsJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.apps)['statistics.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1AppsStatisticsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1AppsStatisticsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.apps['statistics.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKV1BulkRequestJsonMutationKey() {
  return ['k', '/k/v1/bulkRequest.json', 'POST'] as const
}

export function getPostKV1BulkRequestJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['bulkRequest.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1)['bulkRequest.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKV1BulkRequestJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1)['bulkRequest.json']['$post']>) {
      return parseResponse(client.k.v1['bulkRequest.json'].$post(args, options))
    },
  })
}

export function usePostKV1BulkRequestJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1)['bulkRequest.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1)['bulkRequest.json']['$post']>,
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
  const mutationDefaults = getPostKV1BulkRequestJsonMutationOptions<TError, TOnMutateResult>(
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

export function getKV1FieldAclJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.field)['acl.json']['$get']>>,
) {
  return ['k', '/k/v1/field/acl.json', toValue(args)] as const
}

export function getKV1FieldAclJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.field)['acl.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1FieldAclJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.field['acl.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1FieldAclJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.field)['acl.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.field)['acl.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.field)['acl.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.field)['acl.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1FieldAclJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.field)['acl.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1FieldAclJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1FieldAclJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.field['acl.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKV1FieldAclJsonMutationKey() {
  return ['k', '/k/v1/field/acl.json', 'PUT'] as const
}

export function getPutKV1FieldAclJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.field)['acl.json']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.field)['acl.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1FieldAclJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1.field)['acl.json']['$put']>) {
      return parseResponse(client.k.v1.field['acl.json'].$put(args, options))
    },
  })
}

export function usePutKV1FieldAclJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.field)['acl.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.field)['acl.json']['$put']>,
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
  const mutationDefaults = getPutKV1FieldAclJsonMutationOptions<TError, TOnMutateResult>(
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

export function getKV1FileJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1)['file.json']['$get']>>,
) {
  return ['k', '/k/v1/file.json', toValue(args)] as const
}

export function getKV1FileJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1)['file.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1FileJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1['file.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1FileJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['file.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1)['file.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['file.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['file.json']['$get']>>>
            >
          >,
          ReturnType<typeof getKV1FileJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['file.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1FileJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1FileJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1['file.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKV1FileJsonMutationKey() {
  return ['k', '/k/v1/file.json', 'POST'] as const
}

export function getPostKV1FileJsonMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['file.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1)['file.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKV1FileJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1)['file.json']['$post']>) {
      return parseResponse(client.k.v1['file.json'].$post(args, options))
    },
  })
}

export function usePostKV1FileJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['file.json']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1)['file.json']['$post']>,
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
  const mutationDefaults = getPostKV1FileJsonMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getKV1FormJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1)['form.json']['$get']>>,
) {
  return ['k', '/k/v1/form.json', toValue(args)] as const
}

export function getKV1FormJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1)['form.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1FormJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1['form.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1FormJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['form.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1)['form.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['form.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['form.json']['$get']>>>
            >
          >,
          ReturnType<typeof getKV1FormJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['form.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1FormJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1FormJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1['form.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKV1GuestsJsonMutationKey() {
  return ['k', '/k/v1/guests.json', 'POST'] as const
}

export function getPostKV1GuestsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['guests.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1)['guests.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKV1GuestsJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1)['guests.json']['$post']>) {
      return parseResponse(client.k.v1['guests.json'].$post(args, options))
    },
  })
}

export function usePostKV1GuestsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1)['guests.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1)['guests.json']['$post']>,
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
  const mutationDefaults = getPostKV1GuestsJsonMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteKV1GuestsJsonMutationKey() {
  return ['k', '/k/v1/guests.json', 'DELETE'] as const
}

export function getDeleteKV1GuestsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['guests.json']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1)['guests.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKV1GuestsJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1)['guests.json']['$delete']>) {
      return parseResponse(client.k.v1['guests.json'].$delete(args, options))
    },
  })
}

export function useDeleteKV1GuestsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1)['guests.json']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1)['guests.json']['$delete']>,
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
  const mutationDefaults = getDeleteKV1GuestsJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPutKV1PluginJsonMutationKey() {
  return ['k', '/k/v1/plugin.json', 'PUT'] as const
}

export function getPutKV1PluginJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['plugin.json']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1)['plugin.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1PluginJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1)['plugin.json']['$put']>) {
      return parseResponse(client.k.v1['plugin.json'].$put(args, options))
    },
  })
}

export function usePutKV1PluginJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['plugin.json']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1)['plugin.json']['$put']>,
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
  const mutationDefaults = getPutKV1PluginJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPostKV1PluginJsonMutationKey() {
  return ['k', '/k/v1/plugin.json', 'POST'] as const
}

export function getPostKV1PluginJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['plugin.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1)['plugin.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKV1PluginJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1)['plugin.json']['$post']>) {
      return parseResponse(client.k.v1['plugin.json'].$post(args, options))
    },
  })
}

export function usePostKV1PluginJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1)['plugin.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1)['plugin.json']['$post']>,
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
  const mutationDefaults = getPostKV1PluginJsonMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteKV1PluginJsonMutationKey() {
  return ['k', '/k/v1/plugin.json', 'DELETE'] as const
}

export function getDeleteKV1PluginJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['plugin.json']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1)['plugin.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKV1PluginJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1)['plugin.json']['$delete']>) {
      return parseResponse(client.k.v1['plugin.json'].$delete(args, options))
    },
  })
}

export function useDeleteKV1PluginJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1)['plugin.json']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1)['plugin.json']['$delete']>,
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
  const mutationDefaults = getDeleteKV1PluginJsonMutationOptions<TError, TOnMutateResult>(
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

export function getKV1PluginAppsJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.plugin)['apps.json']['$get']>>,
) {
  return ['k', '/k/v1/plugin/apps.json', toValue(args)] as const
}

export function getKV1PluginAppsJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.plugin)['apps.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1PluginAppsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.plugin['apps.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1PluginAppsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.plugin)['apps.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.plugin)['apps.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.plugin)['apps.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.plugin)['apps.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1PluginAppsJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.plugin)['apps.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1PluginAppsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1PluginAppsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.plugin['apps.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKV1PluginsJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1)['plugins.json']['$get']>>,
) {
  return ['k', '/k/v1/plugins.json', toValue(args)] as const
}

export function getKV1PluginsJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1)['plugins.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1PluginsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1['plugins.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1PluginsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['plugins.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1)['plugins.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1)['plugins.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1)['plugins.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1PluginsJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['plugins.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1PluginsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1PluginsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1['plugins.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKV1PluginsRequiredJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.plugins)['required.json']['$get']>>,
) {
  return ['k', '/k/v1/plugins/required.json', toValue(args)] as const
}

export function getKV1PluginsRequiredJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.plugins)['required.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1PluginsRequiredJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.plugins['required.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1PluginsRequiredJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.plugins)['required.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.plugins)['required.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.plugins)['required.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.plugins)['required.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1PluginsRequiredJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.plugins)['required.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1PluginsRequiredJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1PluginsRequiredJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.plugins['required.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKV1PreviewAppJsonMutationKey() {
  return ['k', '/k/v1/preview/app.json', 'POST'] as const
}

export function getPostKV1PreviewAppJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.preview)['app.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.preview)['app.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKV1PreviewAppJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1.preview)['app.json']['$post']>) {
      return parseResponse(client.k.v1.preview['app.json'].$post(args, options))
    },
  })
}

export function usePostKV1PreviewAppJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview)['app.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.preview)['app.json']['$post']>,
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
  const mutationDefaults = getPostKV1PreviewAppJsonMutationOptions<TError, TOnMutateResult>(
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

export function getKV1PreviewAppAclJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.preview.app)['acl.json']['$get']>>,
) {
  return ['k', '/k/v1/preview/app/acl.json', toValue(args)] as const
}

export function getKV1PreviewAppAclJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.preview.app)['acl.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1PreviewAppAclJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.preview.app['acl.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1PreviewAppAclJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['acl.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.preview.app)['acl.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['acl.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['acl.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1PreviewAppAclJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['acl.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1PreviewAppAclJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1PreviewAppAclJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.preview.app['acl.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKV1PreviewAppAclJsonMutationKey() {
  return ['k', '/k/v1/preview/app/acl.json', 'PUT'] as const
}

export function getPutKV1PreviewAppAclJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['acl.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.preview.app)['acl.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1PreviewAppAclJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1.preview.app)['acl.json']['$put']>) {
      return parseResponse(client.k.v1.preview.app['acl.json'].$put(args, options))
    },
  })
}

export function usePutKV1PreviewAppAclJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['acl.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.preview.app)['acl.json']['$put']>,
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
  const mutationDefaults = getPutKV1PreviewAppAclJsonMutationOptions<TError, TOnMutateResult>(
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

export function getKV1PreviewAppActionsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app)['actions.json']['$get']>
  >,
) {
  return ['k', '/k/v1/preview/app/actions.json', toValue(args)] as const
}

export function getKV1PreviewAppActionsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app)['actions.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1PreviewAppActionsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.preview.app['actions.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1PreviewAppActionsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['actions.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app)['actions.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['actions.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['actions.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1PreviewAppActionsJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['actions.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1PreviewAppActionsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1PreviewAppActionsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.preview.app['actions.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKV1PreviewAppActionsJsonMutationKey() {
  return ['k', '/k/v1/preview/app/actions.json', 'PUT'] as const
}

export function getPutKV1PreviewAppActionsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['actions.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.preview.app)['actions.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1PreviewAppActionsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.k.v1.preview.app)['actions.json']['$put']>,
    ) {
      return parseResponse(client.k.v1.preview.app['actions.json'].$put(args, options))
    },
  })
}

export function usePutKV1PreviewAppActionsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['actions.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.preview.app)['actions.json']['$put']>,
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
  const mutationDefaults = getPutKV1PreviewAppActionsJsonMutationOptions<TError, TOnMutateResult>(
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

export function getKV1PreviewAppAdminNotesJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app)['adminNotes.json']['$get']>
  >,
) {
  return ['k', '/k/v1/preview/app/adminNotes.json', toValue(args)] as const
}

export function getKV1PreviewAppAdminNotesJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app)['adminNotes.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1PreviewAppAdminNotesJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.preview.app['adminNotes.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1PreviewAppAdminNotesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['adminNotes.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app)['adminNotes.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['adminNotes.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['adminNotes.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1PreviewAppAdminNotesJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['adminNotes.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1PreviewAppAdminNotesJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1PreviewAppAdminNotesJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.preview.app['adminNotes.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKV1PreviewAppAdminNotesJsonMutationKey() {
  return ['k', '/k/v1/preview/app/adminNotes.json', 'PUT'] as const
}

export function getPutKV1PreviewAppAdminNotesJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['adminNotes.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.preview.app)['adminNotes.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1PreviewAppAdminNotesJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.k.v1.preview.app)['adminNotes.json']['$put']>,
    ) {
      return parseResponse(client.k.v1.preview.app['adminNotes.json'].$put(args, options))
    },
  })
}

export function usePutKV1PreviewAppAdminNotesJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['adminNotes.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.preview.app)['adminNotes.json']['$put']>,
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
  const mutationDefaults = getPutKV1PreviewAppAdminNotesJsonMutationOptions<
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

export function getKV1PreviewAppCustomizeJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app)['customize.json']['$get']>
  >,
) {
  return ['k', '/k/v1/preview/app/customize.json', toValue(args)] as const
}

export function getKV1PreviewAppCustomizeJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app)['customize.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1PreviewAppCustomizeJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.preview.app['customize.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1PreviewAppCustomizeJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['customize.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app)['customize.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['customize.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['customize.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1PreviewAppCustomizeJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['customize.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1PreviewAppCustomizeJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1PreviewAppCustomizeJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.preview.app['customize.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKV1PreviewAppCustomizeJsonMutationKey() {
  return ['k', '/k/v1/preview/app/customize.json', 'PUT'] as const
}

export function getPutKV1PreviewAppCustomizeJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['customize.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.preview.app)['customize.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1PreviewAppCustomizeJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.k.v1.preview.app)['customize.json']['$put']>,
    ) {
      return parseResponse(client.k.v1.preview.app['customize.json'].$put(args, options))
    },
  })
}

export function usePutKV1PreviewAppCustomizeJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['customize.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.preview.app)['customize.json']['$put']>,
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
  const mutationDefaults = getPutKV1PreviewAppCustomizeJsonMutationOptions<TError, TOnMutateResult>(
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

export function getKV1PreviewAppDeployJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.preview.app)['deploy.json']['$get']>>,
) {
  return ['k', '/k/v1/preview/app/deploy.json', toValue(args)] as const
}

export function getKV1PreviewAppDeployJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.preview.app)['deploy.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1PreviewAppDeployJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.preview.app['deploy.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1PreviewAppDeployJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['deploy.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.preview.app)['deploy.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['deploy.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['deploy.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1PreviewAppDeployJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['deploy.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1PreviewAppDeployJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1PreviewAppDeployJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.preview.app['deploy.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKV1PreviewAppDeployJsonMutationKey() {
  return ['k', '/k/v1/preview/app/deploy.json', 'POST'] as const
}

export function getPostKV1PreviewAppDeployJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['deploy.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.preview.app)['deploy.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKV1PreviewAppDeployJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.k.v1.preview.app)['deploy.json']['$post']>,
    ) {
      return parseResponse(client.k.v1.preview.app['deploy.json'].$post(args, options))
    },
  })
}

export function usePostKV1PreviewAppDeployJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['deploy.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.preview.app)['deploy.json']['$post']>,
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
  const mutationDefaults = getPostKV1PreviewAppDeployJsonMutationOptions<TError, TOnMutateResult>(
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

export function getKV1PreviewAppFormFieldsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$get']>
  >,
) {
  return ['k', '/k/v1/preview/app/form/fields.json', toValue(args)] as const
}

export function getKV1PreviewAppFormFieldsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1PreviewAppFormFieldsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.preview.app.form['fields.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1PreviewAppFormFieldsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['fields.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['fields.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['fields.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1PreviewAppFormFieldsJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['fields.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1PreviewAppFormFieldsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1PreviewAppFormFieldsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.preview.app.form['fields.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKV1PreviewAppFormFieldsJsonMutationKey() {
  return ['k', '/k/v1/preview/app/form/fields.json', 'PUT'] as const
}

export function getPutKV1PreviewAppFormFieldsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['fields.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1PreviewAppFormFieldsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$put']>,
    ) {
      return parseResponse(client.k.v1.preview.app.form['fields.json'].$put(args, options))
    },
  })
}

export function usePutKV1PreviewAppFormFieldsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['fields.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$put']>,
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
  const mutationDefaults = getPutKV1PreviewAppFormFieldsJsonMutationOptions<
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

export function getPostKV1PreviewAppFormFieldsJsonMutationKey() {
  return ['k', '/k/v1/preview/app/form/fields.json', 'POST'] as const
}

export function getPostKV1PreviewAppFormFieldsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['fields.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKV1PreviewAppFormFieldsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$post']>,
    ) {
      return parseResponse(client.k.v1.preview.app.form['fields.json'].$post(args, options))
    },
  })
}

export function usePostKV1PreviewAppFormFieldsJson<
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
                Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['fields.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$post']>,
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
  const mutationDefaults = getPostKV1PreviewAppFormFieldsJsonMutationOptions<
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

export function getDeleteKV1PreviewAppFormFieldsJsonMutationKey() {
  return ['k', '/k/v1/preview/app/form/fields.json', 'DELETE'] as const
}

export function getDeleteKV1PreviewAppFormFieldsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['fields.json']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKV1PreviewAppFormFieldsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$delete']>,
    ) {
      return parseResponse(client.k.v1.preview.app.form['fields.json'].$delete(args, options))
    },
  })
}

export function useDeleteKV1PreviewAppFormFieldsJson<
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
                Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['fields.json']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$delete']>,
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
  const mutationDefaults = getDeleteKV1PreviewAppFormFieldsJsonMutationOptions<
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

export function getKV1PreviewAppFormLayoutJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app.form)['layout.json']['$get']>
  >,
) {
  return ['k', '/k/v1/preview/app/form/layout.json', toValue(args)] as const
}

export function getKV1PreviewAppFormLayoutJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app.form)['layout.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1PreviewAppFormLayoutJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.preview.app.form['layout.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1PreviewAppFormLayoutJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['layout.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app.form)['layout.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['layout.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['layout.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1PreviewAppFormLayoutJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['layout.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1PreviewAppFormLayoutJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1PreviewAppFormLayoutJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.preview.app.form['layout.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKV1PreviewAppFormLayoutJsonMutationKey() {
  return ['k', '/k/v1/preview/app/form/layout.json', 'PUT'] as const
}

export function getPutKV1PreviewAppFormLayoutJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['layout.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.preview.app.form)['layout.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1PreviewAppFormLayoutJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.k.v1.preview.app.form)['layout.json']['$put']>,
    ) {
      return parseResponse(client.k.v1.preview.app.form['layout.json'].$put(args, options))
    },
  })
}

export function usePutKV1PreviewAppFormLayoutJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['layout.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.preview.app.form)['layout.json']['$put']>,
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
  const mutationDefaults = getPutKV1PreviewAppFormLayoutJsonMutationOptions<
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

export function getKV1PreviewAppNotificationsGeneralJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app.notifications)['general.json']['$get']>
  >,
) {
  return ['k', '/k/v1/preview/app/notifications/general.json', toValue(args)] as const
}

export function getKV1PreviewAppNotificationsGeneralJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app.notifications)['general.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1PreviewAppNotificationsGeneralJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.preview.app.notifications['general.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1PreviewAppNotificationsGeneralJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app.notifications)['general.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app.notifications)['general.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.k.v1.preview.app.notifications)['general.json']['$get']>
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
                  ReturnType<(typeof client.k.v1.preview.app.notifications)['general.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getKV1PreviewAppNotificationsGeneralJsonQueryKey>
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
            ReturnType<(typeof client.k.v1.preview.app.notifications)['general.json']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1PreviewAppNotificationsGeneralJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1PreviewAppNotificationsGeneralJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.preview.app.notifications['general.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKV1PreviewAppNotificationsGeneralJsonMutationKey() {
  return ['k', '/k/v1/preview/app/notifications/general.json', 'PUT'] as const
}

export function getPutKV1PreviewAppNotificationsGeneralJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.k.v1.preview.app.notifications)['general.json']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.preview.app.notifications)['general.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1PreviewAppNotificationsGeneralJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.v1.preview.app.notifications)['general.json']['$put']
      >,
    ) {
      return parseResponse(
        client.k.v1.preview.app.notifications['general.json'].$put(args, options),
      )
    },
  })
}

export function usePutKV1PreviewAppNotificationsGeneralJson<
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
                  ReturnType<(typeof client.k.v1.preview.app.notifications)['general.json']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.preview.app.notifications)['general.json']['$put']>,
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
  const mutationDefaults = getPutKV1PreviewAppNotificationsGeneralJsonMutationOptions<
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

export function getKV1PreviewAppNotificationsPerRecordJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app.notifications)['perRecord.json']['$get']>
  >,
) {
  return ['k', '/k/v1/preview/app/notifications/perRecord.json', toValue(args)] as const
}

export function getKV1PreviewAppNotificationsPerRecordJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app.notifications)['perRecord.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1PreviewAppNotificationsPerRecordJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.preview.app.notifications['perRecord.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1PreviewAppNotificationsPerRecordJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.k.v1.preview.app.notifications)['perRecord.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app.notifications)['perRecord.json']['$get']>
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
                    (typeof client.k.v1.preview.app.notifications)['perRecord.json']['$get']
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
                    (typeof client.k.v1.preview.app.notifications)['perRecord.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKV1PreviewAppNotificationsPerRecordJsonQueryKey>
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
            ReturnType<(typeof client.k.v1.preview.app.notifications)['perRecord.json']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1PreviewAppNotificationsPerRecordJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1PreviewAppNotificationsPerRecordJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.preview.app.notifications['perRecord.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKV1PreviewAppNotificationsPerRecordJsonMutationKey() {
  return ['k', '/k/v1/preview/app/notifications/perRecord.json', 'PUT'] as const
}

export function getPutKV1PreviewAppNotificationsPerRecordJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.k.v1.preview.app.notifications)['perRecord.json']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.preview.app.notifications)['perRecord.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1PreviewAppNotificationsPerRecordJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.v1.preview.app.notifications)['perRecord.json']['$put']
      >,
    ) {
      return parseResponse(
        client.k.v1.preview.app.notifications['perRecord.json'].$put(args, options),
      )
    },
  })
}

export function usePutKV1PreviewAppNotificationsPerRecordJson<
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
                    (typeof client.k.v1.preview.app.notifications)['perRecord.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.k.v1.preview.app.notifications)['perRecord.json']['$put']
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
  const mutationDefaults = getPutKV1PreviewAppNotificationsPerRecordJsonMutationOptions<
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

export function getKV1PreviewAppNotificationsReminderJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app.notifications)['reminder.json']['$get']>
  >,
) {
  return ['k', '/k/v1/preview/app/notifications/reminder.json', toValue(args)] as const
}

export function getKV1PreviewAppNotificationsReminderJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app.notifications)['reminder.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1PreviewAppNotificationsReminderJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.preview.app.notifications['reminder.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1PreviewAppNotificationsReminderJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app.notifications)['reminder.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app.notifications)['reminder.json']['$get']>
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
                    (typeof client.k.v1.preview.app.notifications)['reminder.json']['$get']
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
                    (typeof client.k.v1.preview.app.notifications)['reminder.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKV1PreviewAppNotificationsReminderJsonQueryKey>
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
            ReturnType<(typeof client.k.v1.preview.app.notifications)['reminder.json']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1PreviewAppNotificationsReminderJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1PreviewAppNotificationsReminderJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.preview.app.notifications['reminder.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKV1PreviewAppNotificationsReminderJsonMutationKey() {
  return ['k', '/k/v1/preview/app/notifications/reminder.json', 'PUT'] as const
}

export function getPutKV1PreviewAppNotificationsReminderJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.k.v1.preview.app.notifications)['reminder.json']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.preview.app.notifications)['reminder.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1PreviewAppNotificationsReminderJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.k.v1.preview.app.notifications)['reminder.json']['$put']
      >,
    ) {
      return parseResponse(
        client.k.v1.preview.app.notifications['reminder.json'].$put(args, options),
      )
    },
  })
}

export function usePutKV1PreviewAppNotificationsReminderJson<
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
                    (typeof client.k.v1.preview.app.notifications)['reminder.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.preview.app.notifications)['reminder.json']['$put']>,
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
  const mutationDefaults = getPutKV1PreviewAppNotificationsReminderJsonMutationOptions<
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

export function getKV1PreviewAppPluginsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app)['plugins.json']['$get']>
  >,
) {
  return ['k', '/k/v1/preview/app/plugins.json', toValue(args)] as const
}

export function getKV1PreviewAppPluginsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app)['plugins.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1PreviewAppPluginsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.preview.app['plugins.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1PreviewAppPluginsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['plugins.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app)['plugins.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['plugins.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['plugins.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1PreviewAppPluginsJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['plugins.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1PreviewAppPluginsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1PreviewAppPluginsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.preview.app['plugins.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKV1PreviewAppPluginsJsonMutationKey() {
  return ['k', '/k/v1/preview/app/plugins.json', 'POST'] as const
}

export function getPostKV1PreviewAppPluginsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['plugins.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.preview.app)['plugins.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKV1PreviewAppPluginsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.k.v1.preview.app)['plugins.json']['$post']>,
    ) {
      return parseResponse(client.k.v1.preview.app['plugins.json'].$post(args, options))
    },
  })
}

export function usePostKV1PreviewAppPluginsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['plugins.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.preview.app)['plugins.json']['$post']>,
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
  const mutationDefaults = getPostKV1PreviewAppPluginsJsonMutationOptions<TError, TOnMutateResult>(
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

export function getKV1PreviewAppReportsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app)['reports.json']['$get']>
  >,
) {
  return ['k', '/k/v1/preview/app/reports.json', toValue(args)] as const
}

export function getKV1PreviewAppReportsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app)['reports.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1PreviewAppReportsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.preview.app['reports.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1PreviewAppReportsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['reports.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app)['reports.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['reports.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['reports.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1PreviewAppReportsJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['reports.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1PreviewAppReportsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1PreviewAppReportsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.preview.app['reports.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKV1PreviewAppReportsJsonMutationKey() {
  return ['k', '/k/v1/preview/app/reports.json', 'PUT'] as const
}

export function getPutKV1PreviewAppReportsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['reports.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.preview.app)['reports.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1PreviewAppReportsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.k.v1.preview.app)['reports.json']['$put']>,
    ) {
      return parseResponse(client.k.v1.preview.app['reports.json'].$put(args, options))
    },
  })
}

export function usePutKV1PreviewAppReportsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['reports.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.preview.app)['reports.json']['$put']>,
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
  const mutationDefaults = getPutKV1PreviewAppReportsJsonMutationOptions<TError, TOnMutateResult>(
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

export function getKV1PreviewAppSettingsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app)['settings.json']['$get']>
  >,
) {
  return ['k', '/k/v1/preview/app/settings.json', toValue(args)] as const
}

export function getKV1PreviewAppSettingsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app)['settings.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1PreviewAppSettingsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.preview.app['settings.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1PreviewAppSettingsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['settings.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.preview.app)['settings.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['settings.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['settings.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1PreviewAppSettingsJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['settings.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1PreviewAppSettingsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1PreviewAppSettingsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.preview.app['settings.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKV1PreviewAppSettingsJsonMutationKey() {
  return ['k', '/k/v1/preview/app/settings.json', 'PUT'] as const
}

export function getPutKV1PreviewAppSettingsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['settings.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.preview.app)['settings.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1PreviewAppSettingsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.k.v1.preview.app)['settings.json']['$put']>,
    ) {
      return parseResponse(client.k.v1.preview.app['settings.json'].$put(args, options))
    },
  })
}

export function usePutKV1PreviewAppSettingsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['settings.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.preview.app)['settings.json']['$put']>,
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
  const mutationDefaults = getPutKV1PreviewAppSettingsJsonMutationOptions<TError, TOnMutateResult>(
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

export function getKV1PreviewAppStatusJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.preview.app)['status.json']['$get']>>,
) {
  return ['k', '/k/v1/preview/app/status.json', toValue(args)] as const
}

export function getKV1PreviewAppStatusJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.preview.app)['status.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1PreviewAppStatusJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.preview.app['status.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1PreviewAppStatusJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['status.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.preview.app)['status.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['status.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['status.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1PreviewAppStatusJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['status.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1PreviewAppStatusJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1PreviewAppStatusJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.preview.app['status.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKV1PreviewAppStatusJsonMutationKey() {
  return ['k', '/k/v1/preview/app/status.json', 'PUT'] as const
}

export function getPutKV1PreviewAppStatusJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['status.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.preview.app)['status.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1PreviewAppStatusJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.k.v1.preview.app)['status.json']['$put']>,
    ) {
      return parseResponse(client.k.v1.preview.app['status.json'].$put(args, options))
    },
  })
}

export function usePutKV1PreviewAppStatusJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['status.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.preview.app)['status.json']['$put']>,
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
  const mutationDefaults = getPutKV1PreviewAppStatusJsonMutationOptions<TError, TOnMutateResult>(
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

export function getKV1PreviewAppViewsJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.preview.app)['views.json']['$get']>>,
) {
  return ['k', '/k/v1/preview/app/views.json', toValue(args)] as const
}

export function getKV1PreviewAppViewsJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.preview.app)['views.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1PreviewAppViewsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.preview.app['views.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1PreviewAppViewsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['views.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.preview.app)['views.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['views.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['views.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1PreviewAppViewsJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['views.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1PreviewAppViewsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1PreviewAppViewsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.preview.app['views.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKV1PreviewAppViewsJsonMutationKey() {
  return ['k', '/k/v1/preview/app/views.json', 'PUT'] as const
}

export function getPutKV1PreviewAppViewsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['views.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.preview.app)['views.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1PreviewAppViewsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.k.v1.preview.app)['views.json']['$put']>,
    ) {
      return parseResponse(client.k.v1.preview.app['views.json'].$put(args, options))
    },
  })
}

export function usePutKV1PreviewAppViewsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.app)['views.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.preview.app)['views.json']['$put']>,
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
  const mutationDefaults = getPutKV1PreviewAppViewsJsonMutationOptions<TError, TOnMutateResult>(
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

export function getKV1PreviewFieldAclJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.preview.field)['acl.json']['$get']>>,
) {
  return ['k', '/k/v1/preview/field/acl.json', toValue(args)] as const
}

export function getKV1PreviewFieldAclJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.preview.field)['acl.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1PreviewFieldAclJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.preview.field['acl.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1PreviewFieldAclJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.field)['acl.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.preview.field)['acl.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.field)['acl.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.field)['acl.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1PreviewFieldAclJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.preview.field)['acl.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1PreviewFieldAclJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1PreviewFieldAclJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.preview.field['acl.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKV1PreviewFieldAclJsonMutationKey() {
  return ['k', '/k/v1/preview/field/acl.json', 'PUT'] as const
}

export function getPutKV1PreviewFieldAclJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.field)['acl.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.preview.field)['acl.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1PreviewFieldAclJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.k.v1.preview.field)['acl.json']['$put']>,
    ) {
      return parseResponse(client.k.v1.preview.field['acl.json'].$put(args, options))
    },
  })
}

export function usePutKV1PreviewFieldAclJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.field)['acl.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.preview.field)['acl.json']['$put']>,
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
  const mutationDefaults = getPutKV1PreviewFieldAclJsonMutationOptions<TError, TOnMutateResult>(
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

export function getKV1PreviewFormJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.preview)['form.json']['$get']>>,
) {
  return ['k', '/k/v1/preview/form.json', toValue(args)] as const
}

export function getKV1PreviewFormJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.preview)['form.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1PreviewFormJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.preview['form.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1PreviewFormJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.preview)['form.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.preview)['form.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview)['form.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview)['form.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1PreviewFormJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.preview)['form.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1PreviewFormJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1PreviewFormJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.preview['form.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKV1PreviewRecordAclJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.preview.record)['acl.json']['$get']>>,
) {
  return ['k', '/k/v1/preview/record/acl.json', toValue(args)] as const
}

export function getKV1PreviewRecordAclJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.preview.record)['acl.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1PreviewRecordAclJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.preview.record['acl.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1PreviewRecordAclJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.record)['acl.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.preview.record)['acl.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.record)['acl.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.record)['acl.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1PreviewRecordAclJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.preview.record)['acl.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1PreviewRecordAclJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1PreviewRecordAclJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.preview.record['acl.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKV1PreviewRecordAclJsonMutationKey() {
  return ['k', '/k/v1/preview/record/acl.json', 'PUT'] as const
}

export function getPutKV1PreviewRecordAclJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.record)['acl.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.preview.record)['acl.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1PreviewRecordAclJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.k.v1.preview.record)['acl.json']['$put']>,
    ) {
      return parseResponse(client.k.v1.preview.record['acl.json'].$put(args, options))
    },
  })
}

export function usePutKV1PreviewRecordAclJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.preview.record)['acl.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.preview.record)['acl.json']['$put']>,
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
  const mutationDefaults = getPutKV1PreviewRecordAclJsonMutationOptions<TError, TOnMutateResult>(
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

export function getKV1RecordJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1)['record.json']['$get']>>,
) {
  return ['k', '/k/v1/record.json', toValue(args)] as const
}

export function getKV1RecordJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1)['record.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1RecordJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1['record.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1RecordJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['record.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1)['record.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['record.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['record.json']['$get']>>>
            >
          >,
          ReturnType<typeof getKV1RecordJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['record.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1RecordJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1RecordJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1['record.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKV1RecordJsonMutationKey() {
  return ['k', '/k/v1/record.json', 'PUT'] as const
}

export function getPutKV1RecordJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['record.json']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1)['record.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1RecordJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1)['record.json']['$put']>) {
      return parseResponse(client.k.v1['record.json'].$put(args, options))
    },
  })
}

export function usePutKV1RecordJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['record.json']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1)['record.json']['$put']>,
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
  const mutationDefaults = getPutKV1RecordJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPostKV1RecordJsonMutationKey() {
  return ['k', '/k/v1/record.json', 'POST'] as const
}

export function getPostKV1RecordJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['record.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1)['record.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKV1RecordJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1)['record.json']['$post']>) {
      return parseResponse(client.k.v1['record.json'].$post(args, options))
    },
  })
}

export function usePostKV1RecordJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1)['record.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1)['record.json']['$post']>,
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
  const mutationDefaults = getPostKV1RecordJsonMutationOptions<TError, TOnMutateResult>(
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

export function getKV1RecordAclJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.record)['acl.json']['$get']>>,
) {
  return ['k', '/k/v1/record/acl.json', toValue(args)] as const
}

export function getKV1RecordAclJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.record)['acl.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1RecordAclJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.record['acl.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1RecordAclJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.record)['acl.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.record)['acl.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.record)['acl.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.record)['acl.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1RecordAclJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.record)['acl.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1RecordAclJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1RecordAclJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.record['acl.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKV1RecordAclJsonMutationKey() {
  return ['k', '/k/v1/record/acl.json', 'PUT'] as const
}

export function getPutKV1RecordAclJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.record)['acl.json']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.record)['acl.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1RecordAclJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1.record)['acl.json']['$put']>) {
      return parseResponse(client.k.v1.record['acl.json'].$put(args, options))
    },
  })
}

export function usePutKV1RecordAclJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.record)['acl.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.record)['acl.json']['$put']>,
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
  const mutationDefaults = getPutKV1RecordAclJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPutKV1RecordAssigneesJsonMutationKey() {
  return ['k', '/k/v1/record/assignees.json', 'PUT'] as const
}

export function getPutKV1RecordAssigneesJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.record)['assignees.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.record)['assignees.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1RecordAssigneesJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.k.v1.record)['assignees.json']['$put']>,
    ) {
      return parseResponse(client.k.v1.record['assignees.json'].$put(args, options))
    },
  })
}

export function usePutKV1RecordAssigneesJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.record)['assignees.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.record)['assignees.json']['$put']>,
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
  const mutationDefaults = getPutKV1RecordAssigneesJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPostKV1RecordAsyncTokenJsonMutationKey() {
  return ['k', '/k/v1/record/async/token.json', 'POST'] as const
}

export function getPostKV1RecordAsyncTokenJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.record.async)['token.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.record.async)['token.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKV1RecordAsyncTokenJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.k.v1.record.async)['token.json']['$post']>,
    ) {
      return parseResponse(client.k.v1.record.async['token.json'].$post(args, options))
    },
  })
}

export function usePostKV1RecordAsyncTokenJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.record.async)['token.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.record.async)['token.json']['$post']>,
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
  const mutationDefaults = getPostKV1RecordAsyncTokenJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPostKV1RecordCommentJsonMutationKey() {
  return ['k', '/k/v1/record/comment.json', 'POST'] as const
}

export function getPostKV1RecordCommentJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.record)['comment.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.record)['comment.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKV1RecordCommentJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1.record)['comment.json']['$post']>) {
      return parseResponse(client.k.v1.record['comment.json'].$post(args, options))
    },
  })
}

export function usePostKV1RecordCommentJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.record)['comment.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.record)['comment.json']['$post']>,
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
  const mutationDefaults = getPostKV1RecordCommentJsonMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteKV1RecordCommentJsonMutationKey() {
  return ['k', '/k/v1/record/comment.json', 'DELETE'] as const
}

export function getDeleteKV1RecordCommentJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.record)['comment.json']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.record)['comment.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKV1RecordCommentJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.k.v1.record)['comment.json']['$delete']>,
    ) {
      return parseResponse(client.k.v1.record['comment.json'].$delete(args, options))
    },
  })
}

export function useDeleteKV1RecordCommentJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.record)['comment.json']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.record)['comment.json']['$delete']>,
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
  const mutationDefaults = getDeleteKV1RecordCommentJsonMutationOptions<TError, TOnMutateResult>(
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

export function getKV1RecordCommentsJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.record)['comments.json']['$get']>>,
) {
  return ['k', '/k/v1/record/comments.json', toValue(args)] as const
}

export function getKV1RecordCommentsJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.record)['comments.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1RecordCommentsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.record['comments.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1RecordCommentsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.record)['comments.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.record)['comments.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.record)['comments.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.record)['comments.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1RecordCommentsJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.record)['comments.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1RecordCommentsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1RecordCommentsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.record['comments.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKV1RecordStatusJsonMutationKey() {
  return ['k', '/k/v1/record/status.json', 'PUT'] as const
}

export function getPutKV1RecordStatusJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.record)['status.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.record)['status.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1RecordStatusJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1.record)['status.json']['$put']>) {
      return parseResponse(client.k.v1.record['status.json'].$put(args, options))
    },
  })
}

export function usePutKV1RecordStatusJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.record)['status.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.record)['status.json']['$put']>,
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
  const mutationDefaults = getPutKV1RecordStatusJsonMutationOptions<TError, TOnMutateResult>(
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

export function getKV1RecordsJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1)['records.json']['$get']>>,
) {
  return ['k', '/k/v1/records.json', toValue(args)] as const
}

export function getKV1RecordsJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1)['records.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1RecordsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1['records.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1RecordsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['records.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1)['records.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1)['records.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1)['records.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1RecordsJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['records.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1RecordsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1RecordsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1['records.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKV1RecordsJsonMutationKey() {
  return ['k', '/k/v1/records.json', 'PUT'] as const
}

export function getPutKV1RecordsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['records.json']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1)['records.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1RecordsJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1)['records.json']['$put']>) {
      return parseResponse(client.k.v1['records.json'].$put(args, options))
    },
  })
}

export function usePutKV1RecordsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1)['records.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1)['records.json']['$put']>,
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
  const mutationDefaults = getPutKV1RecordsJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPostKV1RecordsJsonMutationKey() {
  return ['k', '/k/v1/records.json', 'POST'] as const
}

export function getPostKV1RecordsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['records.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1)['records.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKV1RecordsJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1)['records.json']['$post']>) {
      return parseResponse(client.k.v1['records.json'].$post(args, options))
    },
  })
}

export function usePostKV1RecordsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1)['records.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1)['records.json']['$post']>,
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
  const mutationDefaults = getPostKV1RecordsJsonMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteKV1RecordsJsonMutationKey() {
  return ['k', '/k/v1/records.json', 'DELETE'] as const
}

export function getDeleteKV1RecordsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['records.json']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1)['records.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKV1RecordsJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1)['records.json']['$delete']>) {
      return parseResponse(client.k.v1['records.json'].$delete(args, options))
    },
  })
}

export function useDeleteKV1RecordsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1)['records.json']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1)['records.json']['$delete']>,
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
  const mutationDefaults = getDeleteKV1RecordsJsonMutationOptions<TError, TOnMutateResult>(
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

export function getKV1RecordsAclEvaluateJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.records.acl)['evaluate.json']['$get']>
  >,
) {
  return ['k', '/k/v1/records/acl/evaluate.json', toValue(args)] as const
}

export function getKV1RecordsAclEvaluateJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.records.acl)['evaluate.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1RecordsAclEvaluateJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.records.acl['evaluate.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1RecordsAclEvaluateJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.records.acl)['evaluate.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.k.v1.records.acl)['evaluate.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.records.acl)['evaluate.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.records.acl)['evaluate.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1RecordsAclEvaluateJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.records.acl)['evaluate.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1RecordsAclEvaluateJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1RecordsAclEvaluateJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.records.acl['evaluate.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKV1RecordsCursorJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.records)['cursor.json']['$get']>>,
) {
  return ['k', '/k/v1/records/cursor.json', toValue(args)] as const
}

export function getKV1RecordsCursorJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.records)['cursor.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1RecordsCursorJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.records['cursor.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1RecordsCursorJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.records)['cursor.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.records)['cursor.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.records)['cursor.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.records)['cursor.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1RecordsCursorJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.records)['cursor.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1RecordsCursorJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1RecordsCursorJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.records['cursor.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKV1RecordsCursorJsonMutationKey() {
  return ['k', '/k/v1/records/cursor.json', 'POST'] as const
}

export function getPostKV1RecordsCursorJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.records)['cursor.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.records)['cursor.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKV1RecordsCursorJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1.records)['cursor.json']['$post']>) {
      return parseResponse(client.k.v1.records['cursor.json'].$post(args, options))
    },
  })
}

export function usePostKV1RecordsCursorJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.records)['cursor.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.records)['cursor.json']['$post']>,
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
  const mutationDefaults = getPostKV1RecordsCursorJsonMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteKV1RecordsCursorJsonMutationKey() {
  return ['k', '/k/v1/records/cursor.json', 'DELETE'] as const
}

export function getDeleteKV1RecordsCursorJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.records)['cursor.json']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.records)['cursor.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKV1RecordsCursorJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.k.v1.records)['cursor.json']['$delete']>,
    ) {
      return parseResponse(client.k.v1.records['cursor.json'].$delete(args, options))
    },
  })
}

export function useDeleteKV1RecordsCursorJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.records)['cursor.json']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.records)['cursor.json']['$delete']>,
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
  const mutationDefaults = getDeleteKV1RecordsCursorJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPutKV1RecordsStatusJsonMutationKey() {
  return ['k', '/k/v1/records/status.json', 'PUT'] as const
}

export function getPutKV1RecordsStatusJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.records)['status.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.records)['status.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1RecordsStatusJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1.records)['status.json']['$put']>) {
      return parseResponse(client.k.v1.records['status.json'].$put(args, options))
    },
  })
}

export function usePutKV1RecordsStatusJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.records)['status.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.records)['status.json']['$put']>,
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
  const mutationDefaults = getPutKV1RecordsStatusJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPostKV1SearchJsonMutationKey() {
  return ['k', '/k/v1/search.json', 'POST'] as const
}

export function getPostKV1SearchJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['search.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1)['search.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKV1SearchJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1)['search.json']['$post']>) {
      return parseResponse(client.k.v1['search.json'].$post(args, options))
    },
  })
}

export function usePostKV1SearchJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1)['search.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1)['search.json']['$post']>,
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
  const mutationDefaults = getPostKV1SearchJsonMutationOptions<TError, TOnMutateResult>(
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

export function getKV1SpaceJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1)['space.json']['$get']>>,
) {
  return ['k', '/k/v1/space.json', toValue(args)] as const
}

export function getKV1SpaceJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1)['space.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1SpaceJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1['space.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1SpaceJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['space.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1)['space.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['space.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['space.json']['$get']>>>
            >
          >,
          ReturnType<typeof getKV1SpaceJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['space.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1SpaceJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1SpaceJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1['space.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKV1SpaceJsonMutationKey() {
  return ['k', '/k/v1/space.json', 'PUT'] as const
}

export function getPutKV1SpaceJsonMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['space.json']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1)['space.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1SpaceJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1)['space.json']['$put']>) {
      return parseResponse(client.k.v1['space.json'].$put(args, options))
    },
  })
}

export function usePutKV1SpaceJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['space.json']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1)['space.json']['$put']>,
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
  const mutationDefaults = getPutKV1SpaceJsonMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteKV1SpaceJsonMutationKey() {
  return ['k', '/k/v1/space.json', 'DELETE'] as const
}

export function getDeleteKV1SpaceJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['space.json']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1)['space.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKV1SpaceJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1)['space.json']['$delete']>) {
      return parseResponse(client.k.v1['space.json'].$delete(args, options))
    },
  })
}

export function useDeleteKV1SpaceJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1)['space.json']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1)['space.json']['$delete']>,
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
  const mutationDefaults = getDeleteKV1SpaceJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPutKV1SpaceBodyJsonMutationKey() {
  return ['k', '/k/v1/space/body.json', 'PUT'] as const
}

export function getPutKV1SpaceBodyJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.space)['body.json']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.space)['body.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1SpaceBodyJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1.space)['body.json']['$put']>) {
      return parseResponse(client.k.v1.space['body.json'].$put(args, options))
    },
  })
}

export function usePutKV1SpaceBodyJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.space)['body.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.space)['body.json']['$put']>,
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
  const mutationDefaults = getPutKV1SpaceBodyJsonMutationOptions<TError, TOnMutateResult>(
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

export function getKV1SpaceMembersJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.space)['members.json']['$get']>>,
) {
  return ['k', '/k/v1/space/members.json', toValue(args)] as const
}

export function getKV1SpaceMembersJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.space)['members.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1SpaceMembersJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.space['members.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1SpaceMembersJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.space)['members.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.space)['members.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.space)['members.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.space)['members.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1SpaceMembersJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.space)['members.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1SpaceMembersJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1SpaceMembersJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.space['members.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKV1SpaceMembersJsonMutationKey() {
  return ['k', '/k/v1/space/members.json', 'PUT'] as const
}

export function getPutKV1SpaceMembersJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.space)['members.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.space)['members.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1SpaceMembersJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1.space)['members.json']['$put']>) {
      return parseResponse(client.k.v1.space['members.json'].$put(args, options))
    },
  })
}

export function usePutKV1SpaceMembersJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.space)['members.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.space)['members.json']['$put']>,
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
  const mutationDefaults = getPutKV1SpaceMembersJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPutKV1SpaceThreadJsonMutationKey() {
  return ['k', '/k/v1/space/thread.json', 'PUT'] as const
}

export function getPutKV1SpaceThreadJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.space)['thread.json']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.space)['thread.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKV1SpaceThreadJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1.space)['thread.json']['$put']>) {
      return parseResponse(client.k.v1.space['thread.json'].$put(args, options))
    },
  })
}

export function usePutKV1SpaceThreadJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.space)['thread.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.space)['thread.json']['$put']>,
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
  const mutationDefaults = getPutKV1SpaceThreadJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPostKV1SpaceThreadJsonMutationKey() {
  return ['k', '/k/v1/space/thread.json', 'POST'] as const
}

export function getPostKV1SpaceThreadJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.space)['thread.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.space)['thread.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKV1SpaceThreadJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1.space)['thread.json']['$post']>) {
      return parseResponse(client.k.v1.space['thread.json'].$post(args, options))
    },
  })
}

export function usePostKV1SpaceThreadJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.space)['thread.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.space)['thread.json']['$post']>,
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
  const mutationDefaults = getPostKV1SpaceThreadJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPostKV1SpaceThreadCommentJsonMutationKey() {
  return ['k', '/k/v1/space/thread/comment.json', 'POST'] as const
}

export function getPostKV1SpaceThreadCommentJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.space.thread)['comment.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.space.thread)['comment.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKV1SpaceThreadCommentJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.k.v1.space.thread)['comment.json']['$post']>,
    ) {
      return parseResponse(client.k.v1.space.thread['comment.json'].$post(args, options))
    },
  })
}

export function usePostKV1SpaceThreadCommentJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.space.thread)['comment.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.space.thread)['comment.json']['$post']>,
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
  const mutationDefaults = getPostKV1SpaceThreadCommentJsonMutationOptions<TError, TOnMutateResult>(
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

export function getKV1SpacesStatisticsJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.spaces)['statistics.json']['$get']>>,
) {
  return ['k', '/k/v1/spaces/statistics.json', toValue(args)] as const
}

export function getKV1SpacesStatisticsJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.spaces)['statistics.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKV1SpacesStatisticsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.k.v1.spaces['statistics.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKV1SpacesStatisticsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.spaces)['statistics.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.k.v1.spaces)['statistics.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.spaces)['statistics.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.spaces)['statistics.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKV1SpacesStatisticsJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.k.v1.spaces)['statistics.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1SpacesStatisticsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKV1SpacesStatisticsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.k.v1.spaces['statistics.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKV1TemplateSpaceJsonMutationKey() {
  return ['k', '/k/v1/template/space.json', 'POST'] as const
}

export function getPostKV1TemplateSpaceJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.template)['space.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.k.v1.template)['space.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKV1TemplateSpaceJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.k.v1.template)['space.json']['$post']>) {
      return parseResponse(client.k.v1.template['space.json'].$post(args, options))
    },
  })
}

export function usePostKV1TemplateSpaceJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.k.v1.template)['space.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.k.v1.template)['space.json']['$post']>,
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
  const mutationDefaults = getPostKV1TemplateSpaceJsonMutationOptions<TError, TOnMutateResult>(
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
