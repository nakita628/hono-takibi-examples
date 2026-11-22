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

export function getKKey() {
  return ['k'] as const
}

export function getKGuestGuestSpaceIdV1AppJsonQueryKey(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app.json']['$get']>,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app.json', args] as const
}

export function getKGuestGuestSpaceIdV1AppJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['app.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1AppJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1['app.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1AppJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['app.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getKGuestGuestSpaceIdV1AppJsonQueryKey>
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
      ...getKGuestGuestSpaceIdV1AppJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getKGuestGuestSpaceIdV1AppAclJsonQueryKey(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$get']>,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/acl.json', args] as const
}

export function getKGuestGuestSpaceIdV1AppAclJsonQueryOptions<
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
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1AppAclJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app['acl.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1AppAclJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getKGuestGuestSpaceIdV1AppAclJsonQueryKey>
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
      ...getKGuestGuestSpaceIdV1AppAclJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutKGuestGuestSpaceIdV1AppAclJson<
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
                  (typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$put']>,
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
    const mutationDefaults = getPutKGuestGuestSpaceIdV1AppAclJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1AppActionsJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['actions.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/actions.json', args] as const
}

export function getKGuestGuestSpaceIdV1AppActionsJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['actions.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1AppActionsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app['actions.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1AppActionsJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['actions.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1AppActionsJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getKGuestGuestSpaceIdV1AppAdminNotesJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['adminNotes.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/adminNotes.json', args] as const
}

export function getKGuestGuestSpaceIdV1AppAdminNotesJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['adminNotes.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1AppAdminNotesJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app['adminNotes.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1AppAdminNotesJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['adminNotes.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1AppAdminNotesJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getKGuestGuestSpaceIdV1AppCustomizeJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['customize.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/customize.json', args] as const
}

export function getKGuestGuestSpaceIdV1AppCustomizeJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['customize.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1AppCustomizeJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app['customize.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1AppCustomizeJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['customize.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1AppCustomizeJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getKGuestGuestSpaceIdV1AppFormFieldsJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['fields.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/form/fields.json', args] as const
}

export function getKGuestGuestSpaceIdV1AppFormFieldsJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['fields.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1AppFormFieldsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app.form['fields.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1AppFormFieldsJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['fields.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1AppFormFieldsJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getKGuestGuestSpaceIdV1AppFormLayoutJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['layout.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/form/layout.json', args] as const
}

export function getKGuestGuestSpaceIdV1AppFormLayoutJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['layout.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1AppFormLayoutJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app.form['layout.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1AppFormLayoutJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['layout.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1AppFormLayoutJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostKGuestGuestSpaceIdV1AppMoveJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKGuestGuestSpaceIdV1AppMoveJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1AppNotificationsGeneralJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['general.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/notifications/general.json', args] as const
}

export function getKGuestGuestSpaceIdV1AppNotificationsGeneralJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['general.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1AppNotificationsGeneralJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app.notifications['general.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1AppNotificationsGeneralJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['general.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1AppNotificationsGeneralJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getKGuestGuestSpaceIdV1AppNotificationsPerRecordJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['perRecord.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/notifications/perRecord.json', args] as const
}

export function getKGuestGuestSpaceIdV1AppNotificationsPerRecordJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['perRecord.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1AppNotificationsPerRecordJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app.notifications['perRecord.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1AppNotificationsPerRecordJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['perRecord.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1AppNotificationsPerRecordJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getKGuestGuestSpaceIdV1AppNotificationsReminderJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['reminder.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/notifications/reminder.json', args] as const
}

export function getKGuestGuestSpaceIdV1AppNotificationsReminderJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['reminder.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1AppNotificationsReminderJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app.notifications['reminder.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1AppNotificationsReminderJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['reminder.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1AppNotificationsReminderJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getKGuestGuestSpaceIdV1AppPluginsJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['plugins.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/plugins.json', args] as const
}

export function getKGuestGuestSpaceIdV1AppPluginsJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['plugins.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1AppPluginsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app['plugins.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1AppPluginsJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['plugins.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1AppPluginsJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getKGuestGuestSpaceIdV1AppReportsJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['reports.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/reports.json', args] as const
}

export function getKGuestGuestSpaceIdV1AppReportsJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['reports.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1AppReportsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app['reports.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1AppReportsJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['reports.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1AppReportsJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getKGuestGuestSpaceIdV1AppSettingsJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['settings.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/settings.json', args] as const
}

export function getKGuestGuestSpaceIdV1AppSettingsJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['settings.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1AppSettingsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app['settings.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1AppSettingsJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['settings.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1AppSettingsJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getKGuestGuestSpaceIdV1AppStatusJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['status.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/status.json', args] as const
}

export function getKGuestGuestSpaceIdV1AppStatusJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['status.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1AppStatusJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app['status.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1AppStatusJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['status.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getKGuestGuestSpaceIdV1AppStatusJsonQueryKey>
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
      ...getKGuestGuestSpaceIdV1AppStatusJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getKGuestGuestSpaceIdV1AppViewsJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['views.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/views.json', args] as const
}

export function getKGuestGuestSpaceIdV1AppViewsJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['views.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1AppViewsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.app['views.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1AppViewsJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['views.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getKGuestGuestSpaceIdV1AppViewsJsonQueryKey>
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
      ...getKGuestGuestSpaceIdV1AppViewsJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getKGuestGuestSpaceIdV1AppsJsonQueryKey(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['apps.json']['$get']>,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/apps.json', args] as const
}

export function getKGuestGuestSpaceIdV1AppsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['apps.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['apps.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1AppsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1['apps.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1AppsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['apps.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['apps.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getKGuestGuestSpaceIdV1AppsJsonQueryKey>
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
      ...getKGuestGuestSpaceIdV1AppsJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getKGuestGuestSpaceIdV1AppsStatisticsJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['apps']['statistics.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/apps/statistics.json', args] as const
}

export function getKGuestGuestSpaceIdV1AppsStatisticsJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['apps']['statistics.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1AppsStatisticsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.apps['statistics.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1AppsStatisticsJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['apps']['statistics.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1AppsStatisticsJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostKGuestGuestSpaceIdV1BulkRequestJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKGuestGuestSpaceIdV1BulkRequestJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1FieldAclJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['field']['acl.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/field/acl.json', args] as const
}

export function getKGuestGuestSpaceIdV1FieldAclJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['field']['acl.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1FieldAclJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.field['acl.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1FieldAclJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['field']['acl.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getKGuestGuestSpaceIdV1FieldAclJsonQueryKey>
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
      ...getKGuestGuestSpaceIdV1FieldAclJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutKGuestGuestSpaceIdV1FieldAclJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKGuestGuestSpaceIdV1FieldAclJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1FileJsonQueryKey(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$get']>,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/file.json', args] as const
}

export function getKGuestGuestSpaceIdV1FileJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1FileJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1['file.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1FileJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getKGuestGuestSpaceIdV1FileJsonQueryKey>
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
      ...getKGuestGuestSpaceIdV1FileJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostKGuestGuestSpaceIdV1FileJson<
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
                ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$post']>,
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
    const mutationDefaults = getPostKGuestGuestSpaceIdV1FileJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1FormJsonQueryKey(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['form.json']['$get']>,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/form.json', args] as const
}

export function getKGuestGuestSpaceIdV1FormJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['form.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['form.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1FormJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1['form.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1FormJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['form.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['form.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getKGuestGuestSpaceIdV1FormJsonQueryKey>
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
      ...getKGuestGuestSpaceIdV1FormJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostKGuestGuestSpaceIdV1GuestsJson<
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
                ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['guests.json']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['guests.json']['$post']>,
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
    const mutationDefaults = getPostKGuestGuestSpaceIdV1GuestsJsonMutationOptions<
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

export function createDeleteKGuestGuestSpaceIdV1GuestsJson<
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
                ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['guests.json']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['guests.json']['$delete']>,
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
    const mutationDefaults = getDeleteKGuestGuestSpaceIdV1GuestsJsonMutationOptions<
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

export function createPutKGuestGuestSpaceIdV1PluginJson<
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
                ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$put']>,
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
    const mutationDefaults = getPutKGuestGuestSpaceIdV1PluginJsonMutationOptions<
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

export function createPostKGuestGuestSpaceIdV1PluginJson<
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
                ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$post']>,
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
    const mutationDefaults = getPostKGuestGuestSpaceIdV1PluginJsonMutationOptions<
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

export function createDeleteKGuestGuestSpaceIdV1PluginJson<
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
                ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$delete']>,
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
    const mutationDefaults = getDeleteKGuestGuestSpaceIdV1PluginJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PluginAppsJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['plugin']['apps.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/plugin/apps.json', args] as const
}

export function getKGuestGuestSpaceIdV1PluginAppsJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['plugin']['apps.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1PluginAppsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.plugin['apps.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1PluginAppsJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['plugin']['apps.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1PluginAppsJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getKGuestGuestSpaceIdV1PluginsJsonQueryKey(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugins.json']['$get']>,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/plugins.json', args] as const
}

export function getKGuestGuestSpaceIdV1PluginsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugins.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugins.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1PluginsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1['plugins.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1PluginsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugins.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['plugins.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1PluginsJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getKGuestGuestSpaceIdV1PluginsRequiredJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['plugins']['required.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/plugins/required.json', args] as const
}

export function getKGuestGuestSpaceIdV1PluginsRequiredJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['plugins']['required.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1PluginsRequiredJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.plugins['required.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1PluginsRequiredJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['plugins']['required.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1PluginsRequiredJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostKGuestGuestSpaceIdV1PreviewAppJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKGuestGuestSpaceIdV1PreviewAppJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppAclJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['acl.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/acl.json', args] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppAclJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['acl.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1PreviewAppAclJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['acl.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1PreviewAppAclJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['acl.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1PreviewAppAclJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutKGuestGuestSpaceIdV1PreviewAppAclJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKGuestGuestSpaceIdV1PreviewAppAclJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppActionsJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['actions.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/actions.json', args] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppActionsJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['actions.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1PreviewAppActionsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['actions.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1PreviewAppActionsJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['actions.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1PreviewAppActionsJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutKGuestGuestSpaceIdV1PreviewAppActionsJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKGuestGuestSpaceIdV1PreviewAppActionsJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['adminNotes.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/adminNotes.json', args] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['adminNotes.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['adminNotes.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1PreviewAppAdminNotesJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['adminNotes.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutKGuestGuestSpaceIdV1PreviewAppAdminNotesJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppCustomizeJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['customize.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/customize.json', args] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppCustomizeJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['customize.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1PreviewAppCustomizeJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['customize.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1PreviewAppCustomizeJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['customize.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1PreviewAppCustomizeJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutKGuestGuestSpaceIdV1PreviewAppCustomizeJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKGuestGuestSpaceIdV1PreviewAppCustomizeJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppDeployJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['deploy.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/deploy.json', args] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppDeployJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['deploy.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1PreviewAppDeployJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['deploy.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1PreviewAppDeployJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['deploy.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1PreviewAppDeployJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostKGuestGuestSpaceIdV1PreviewAppDeployJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKGuestGuestSpaceIdV1PreviewAppDeployJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/form/fields.json', args] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app.form['fields.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1PreviewAppFormFieldsJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutKGuestGuestSpaceIdV1PreviewAppFormFieldsJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonMutationOptions<
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

export function createPostKGuestGuestSpaceIdV1PreviewAppFormFieldsJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonMutationOptions<
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

export function createDeleteKGuestGuestSpaceIdV1PreviewAppFormFieldsJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['layout.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/form/layout.json', args] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['layout.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app.form['layout.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1PreviewAppFormLayoutJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['layout.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutKGuestGuestSpaceIdV1PreviewAppFormLayoutJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['general.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/notifications/general.json', args] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['general.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app.notifications['general.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['general.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['perRecord.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/notifications/perRecord.json', args] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['perRecord.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app.notifications['perRecord.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['perRecord.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['reminder.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/notifications/reminder.json', args] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['reminder.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app.notifications['reminder.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['reminder.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppPluginsJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['plugins.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/plugins.json', args] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppPluginsJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['plugins.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1PreviewAppPluginsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['plugins.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1PreviewAppPluginsJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['plugins.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1PreviewAppPluginsJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostKGuestGuestSpaceIdV1PreviewAppPluginsJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKGuestGuestSpaceIdV1PreviewAppPluginsJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppReportsJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['reports.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/reports.json', args] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppReportsJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['reports.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1PreviewAppReportsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['reports.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1PreviewAppReportsJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['reports.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1PreviewAppReportsJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutKGuestGuestSpaceIdV1PreviewAppReportsJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKGuestGuestSpaceIdV1PreviewAppReportsJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppSettingsJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['settings.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/settings.json', args] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppSettingsJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['settings.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1PreviewAppSettingsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['settings.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1PreviewAppSettingsJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['settings.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1PreviewAppSettingsJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutKGuestGuestSpaceIdV1PreviewAppSettingsJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKGuestGuestSpaceIdV1PreviewAppSettingsJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppStatusJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['status.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/status.json', args] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppStatusJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['status.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1PreviewAppStatusJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['status.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1PreviewAppStatusJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['status.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1PreviewAppStatusJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutKGuestGuestSpaceIdV1PreviewAppStatusJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKGuestGuestSpaceIdV1PreviewAppStatusJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewAppViewsJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['views.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/views.json', args] as const
}

export function getKGuestGuestSpaceIdV1PreviewAppViewsJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['views.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1PreviewAppViewsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.app['views.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1PreviewAppViewsJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['views.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1PreviewAppViewsJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutKGuestGuestSpaceIdV1PreviewAppViewsJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKGuestGuestSpaceIdV1PreviewAppViewsJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewFieldAclJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['field']['acl.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/field/acl.json', args] as const
}

export function getKGuestGuestSpaceIdV1PreviewFieldAclJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['field']['acl.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1PreviewFieldAclJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.field['acl.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1PreviewFieldAclJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['field']['acl.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1PreviewFieldAclJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutKGuestGuestSpaceIdV1PreviewFieldAclJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKGuestGuestSpaceIdV1PreviewFieldAclJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1PreviewFormJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['form.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/form.json', args] as const
}

export function getKGuestGuestSpaceIdV1PreviewFormJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['form.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1PreviewFormJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview['form.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1PreviewFormJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['form.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1PreviewFormJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getKGuestGuestSpaceIdV1PreviewRecordAclJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['record']['acl.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/record/acl.json', args] as const
}

export function getKGuestGuestSpaceIdV1PreviewRecordAclJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['record']['acl.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1PreviewRecordAclJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.preview.record['acl.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1PreviewRecordAclJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['record']['acl.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1PreviewRecordAclJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutKGuestGuestSpaceIdV1PreviewRecordAclJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKGuestGuestSpaceIdV1PreviewRecordAclJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1RecordJsonQueryKey(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$get']>,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/record.json', args] as const
}

export function getKGuestGuestSpaceIdV1RecordJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1RecordJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1['record.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1RecordJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getKGuestGuestSpaceIdV1RecordJsonQueryKey>
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
      ...getKGuestGuestSpaceIdV1RecordJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutKGuestGuestSpaceIdV1RecordJson<
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
                ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$put']>,
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
    const mutationDefaults = getPutKGuestGuestSpaceIdV1RecordJsonMutationOptions<
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

export function createPostKGuestGuestSpaceIdV1RecordJson<
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
                ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$post']>,
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
    const mutationDefaults = getPostKGuestGuestSpaceIdV1RecordJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1RecordAclJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['acl.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/record/acl.json', args] as const
}

export function getKGuestGuestSpaceIdV1RecordAclJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['acl.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1RecordAclJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.record['acl.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1RecordAclJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['acl.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getKGuestGuestSpaceIdV1RecordAclJsonQueryKey>
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
      ...getKGuestGuestSpaceIdV1RecordAclJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutKGuestGuestSpaceIdV1RecordAclJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKGuestGuestSpaceIdV1RecordAclJsonMutationOptions<
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

export function createPutKGuestGuestSpaceIdV1RecordAssigneesJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKGuestGuestSpaceIdV1RecordAssigneesJsonMutationOptions<
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

export function createPostKGuestGuestSpaceIdV1RecordCommentJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKGuestGuestSpaceIdV1RecordCommentJsonMutationOptions<
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

export function createDeleteKGuestGuestSpaceIdV1RecordCommentJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteKGuestGuestSpaceIdV1RecordCommentJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1RecordCommentsJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comments.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/record/comments.json', args] as const
}

export function getKGuestGuestSpaceIdV1RecordCommentsJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comments.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1RecordCommentsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.record['comments.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1RecordCommentsJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comments.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1RecordCommentsJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutKGuestGuestSpaceIdV1RecordStatusJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKGuestGuestSpaceIdV1RecordStatusJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1RecordsJsonQueryKey(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$get']>,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/records.json', args] as const
}

export function getKGuestGuestSpaceIdV1RecordsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1RecordsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1['records.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1RecordsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1RecordsJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutKGuestGuestSpaceIdV1RecordsJson<
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
                ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$put']>,
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
    const mutationDefaults = getPutKGuestGuestSpaceIdV1RecordsJsonMutationOptions<
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

export function createPostKGuestGuestSpaceIdV1RecordsJson<
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
                ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$post']>,
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
    const mutationDefaults = getPostKGuestGuestSpaceIdV1RecordsJsonMutationOptions<
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

export function createDeleteKGuestGuestSpaceIdV1RecordsJson<
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
                  (typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$delete']>,
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
    const mutationDefaults = getDeleteKGuestGuestSpaceIdV1RecordsJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1RecordsAclEvaluateJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['records']['acl']['evaluate.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/records/acl/evaluate.json', args] as const
}

export function getKGuestGuestSpaceIdV1RecordsAclEvaluateJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['records']['acl']['evaluate.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1RecordsAclEvaluateJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.records.acl['evaluate.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1RecordsAclEvaluateJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['records']['acl']['evaluate.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1RecordsAclEvaluateJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getKGuestGuestSpaceIdV1RecordsCursorJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/records/cursor.json', args] as const
}

export function getKGuestGuestSpaceIdV1RecordsCursorJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1RecordsCursorJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.records['cursor.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1RecordsCursorJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1RecordsCursorJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostKGuestGuestSpaceIdV1RecordsCursorJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKGuestGuestSpaceIdV1RecordsCursorJsonMutationOptions<
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

export function createDeleteKGuestGuestSpaceIdV1RecordsCursorJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteKGuestGuestSpaceIdV1RecordsCursorJsonMutationOptions<
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

export function createPutKGuestGuestSpaceIdV1RecordsStatusJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKGuestGuestSpaceIdV1RecordsStatusJsonMutationOptions<
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

export function createPostKGuestGuestSpaceIdV1SearchJson<
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
                ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['search.json']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['search.json']['$post']>,
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
    const mutationDefaults = getPostKGuestGuestSpaceIdV1SearchJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1SpaceJsonQueryKey(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$get']>,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/space.json', args] as const
}

export function getKGuestGuestSpaceIdV1SpaceJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1SpaceJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1['space.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1SpaceJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getKGuestGuestSpaceIdV1SpaceJsonQueryKey>
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
      ...getKGuestGuestSpaceIdV1SpaceJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutKGuestGuestSpaceIdV1SpaceJson<
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
                ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$put']>,
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
    const mutationDefaults = getPutKGuestGuestSpaceIdV1SpaceJsonMutationOptions<
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

export function createDeleteKGuestGuestSpaceIdV1SpaceJson<
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
                ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$delete']>,
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
    const mutationDefaults = getDeleteKGuestGuestSpaceIdV1SpaceJsonMutationOptions<
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

export function createPutKGuestGuestSpaceIdV1SpaceBodyJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKGuestGuestSpaceIdV1SpaceBodyJsonMutationOptions<
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

export function createPutKGuestGuestSpaceIdV1SpaceGuestsJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKGuestGuestSpaceIdV1SpaceGuestsJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1SpaceMembersJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['space']['members.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/space/members.json', args] as const
}

export function getKGuestGuestSpaceIdV1SpaceMembersJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['space']['members.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1SpaceMembersJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.space['members.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1SpaceMembersJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['space']['members.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1SpaceMembersJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutKGuestGuestSpaceIdV1SpaceMembersJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKGuestGuestSpaceIdV1SpaceMembersJsonMutationOptions<
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

export function createPutKGuestGuestSpaceIdV1SpaceThreadJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKGuestGuestSpaceIdV1SpaceThreadJsonMutationOptions<
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

export function createPostKGuestGuestSpaceIdV1SpaceThreadJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKGuestGuestSpaceIdV1SpaceThreadJsonMutationOptions<
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

export function createPostKGuestGuestSpaceIdV1SpaceThreadCommentJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKGuestGuestSpaceIdV1SpaceThreadCommentJsonMutationOptions<
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

export function getKGuestGuestSpaceIdV1SpacesStatisticsJsonQueryKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['spaces']['statistics.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/spaces/statistics.json', args] as const
}

export function getKGuestGuestSpaceIdV1SpacesStatisticsJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['spaces']['statistics.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKGuestGuestSpaceIdV1SpacesStatisticsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.guest[':guestSpaceId'].v1.spaces['statistics.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKGuestGuestSpaceIdV1SpacesStatisticsJson<
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
  args: () => InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['spaces']['statistics.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKGuestGuestSpaceIdV1SpacesStatisticsJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostKGuestGuestSpaceIdV1TemplateSpaceJson<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKGuestGuestSpaceIdV1TemplateSpaceJsonMutationOptions<
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

export function createPostKGuestV1SearchJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKGuestV1SearchJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKV1AppJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1)['app.json']['$get']>,
) {
  return ['k', '/k/v1/app.json', args] as const
}

export function getKV1AppJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['app.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1)['app.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['app.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1AppJsonQueryKey>
  >({
    queryKey: getKV1AppJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1['app.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createKV1AppJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['app.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1)['app.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['app.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKV1AppJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKV1AppJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getKV1AppAclJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.app)['acl.json']['$get']>,
) {
  return ['k', '/k/v1/app/acl.json', args] as const
}

export function getKV1AppAclJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['acl.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.app)['acl.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['acl.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1AppAclJsonQueryKey>
  >({
    queryKey: getKV1AppAclJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.app['acl.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createKV1AppAclJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['acl.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.app)['acl.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['acl.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKV1AppAclJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKV1AppAclJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutKV1AppAclJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['acl.json']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.k.v1.app)['acl.json']['$put']>,
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
    const mutationDefaults = getPutKV1AppAclJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKV1AppActionsJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.app)['actions.json']['$get']>,
) {
  return ['k', '/k/v1/app/actions.json', args] as const
}

export function getKV1AppActionsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['actions.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.app)['actions.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['actions.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1AppActionsJsonQueryKey>
  >({
    queryKey: getKV1AppActionsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.app['actions.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1AppActionsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['actions.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.app)['actions.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.k.v1.app)['actions.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKV1AppActionsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKV1AppActionsJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getKV1AppAdminNotesJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.app)['adminNotes.json']['$get']>,
) {
  return ['k', '/k/v1/app/adminNotes.json', args] as const
}

export function getKV1AppAdminNotesJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['adminNotes.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.app)['adminNotes.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1AppAdminNotesJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.app['adminNotes.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1AppAdminNotesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['adminNotes.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.app)['adminNotes.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1AppAdminNotesJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getKV1AppCustomizeJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.app)['customize.json']['$get']>,
) {
  return ['k', '/k/v1/app/customize.json', args] as const
}

export function getKV1AppCustomizeJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['customize.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.app)['customize.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1AppCustomizeJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.app['customize.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1AppCustomizeJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['customize.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.app)['customize.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKV1AppCustomizeJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getKV1AppFormFieldsJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.app.form)['fields.json']['$get']>,
) {
  return ['k', '/k/v1/app/form/fields.json', args] as const
}

export function getKV1AppFormFieldsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.app.form)['fields.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.app.form)['fields.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1AppFormFieldsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.app.form['fields.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1AppFormFieldsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.app.form)['fields.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.app.form)['fields.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1AppFormFieldsJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getKV1AppFormLayoutJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.app.form)['layout.json']['$get']>,
) {
  return ['k', '/k/v1/app/form/layout.json', args] as const
}

export function getKV1AppFormLayoutJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.app.form)['layout.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.app.form)['layout.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1AppFormLayoutJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.app.form['layout.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1AppFormLayoutJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.app.form)['layout.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.app.form)['layout.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1AppFormLayoutJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostKV1AppMoveJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKV1AppMoveJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKV1AppNotificationsGeneralJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.app.notifications)['general.json']['$get']>,
) {
  return ['k', '/k/v1/app/notifications/general.json', args] as const
}

export function getKV1AppNotificationsGeneralJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.app.notifications)['general.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.app.notifications)['general.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1AppNotificationsGeneralJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.app.notifications['general.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1AppNotificationsGeneralJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.app.notifications)['general.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.app.notifications)['general.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1AppNotificationsGeneralJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getKV1AppNotificationsPerRecordJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.app.notifications)['perRecord.json']['$get']>,
) {
  return ['k', '/k/v1/app/notifications/perRecord.json', args] as const
}

export function getKV1AppNotificationsPerRecordJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.app.notifications)['perRecord.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.app.notifications)['perRecord.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1AppNotificationsPerRecordJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.app.notifications['perRecord.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1AppNotificationsPerRecordJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.app.notifications)['perRecord.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.app.notifications)['perRecord.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1AppNotificationsPerRecordJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getKV1AppNotificationsReminderJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.app.notifications)['reminder.json']['$get']>,
) {
  return ['k', '/k/v1/app/notifications/reminder.json', args] as const
}

export function getKV1AppNotificationsReminderJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.app.notifications)['reminder.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.app.notifications)['reminder.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1AppNotificationsReminderJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.app.notifications['reminder.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1AppNotificationsReminderJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.app.notifications)['reminder.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.app.notifications)['reminder.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1AppNotificationsReminderJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getKV1AppPluginsJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.app)['plugins.json']['$get']>,
) {
  return ['k', '/k/v1/app/plugins.json', args] as const
}

export function getKV1AppPluginsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['plugins.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.app)['plugins.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['plugins.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1AppPluginsJsonQueryKey>
  >({
    queryKey: getKV1AppPluginsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.app['plugins.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1AppPluginsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['plugins.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.app)['plugins.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.k.v1.app)['plugins.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKV1AppPluginsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKV1AppPluginsJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getKV1AppReportsJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.app)['reports.json']['$get']>,
) {
  return ['k', '/k/v1/app/reports.json', args] as const
}

export function getKV1AppReportsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['reports.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.app)['reports.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['reports.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1AppReportsJsonQueryKey>
  >({
    queryKey: getKV1AppReportsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.app['reports.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1AppReportsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['reports.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.app)['reports.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.k.v1.app)['reports.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKV1AppReportsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKV1AppReportsJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getKV1AppSettingsJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.app)['settings.json']['$get']>,
) {
  return ['k', '/k/v1/app/settings.json', args] as const
}

export function getKV1AppSettingsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['settings.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.app)['settings.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['settings.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1AppSettingsJsonQueryKey>
  >({
    queryKey: getKV1AppSettingsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.app['settings.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1AppSettingsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['settings.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.app)['settings.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.k.v1.app)['settings.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKV1AppSettingsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKV1AppSettingsJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getKV1AppStatusJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.app)['status.json']['$get']>,
) {
  return ['k', '/k/v1/app/status.json', args] as const
}

export function getKV1AppStatusJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['status.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.app)['status.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['status.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1AppStatusJsonQueryKey>
  >({
    queryKey: getKV1AppStatusJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.app['status.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1AppStatusJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['status.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.app)['status.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.k.v1.app)['status.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKV1AppStatusJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKV1AppStatusJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getKV1AppViewsJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.app)['views.json']['$get']>,
) {
  return ['k', '/k/v1/app/views.json', args] as const
}

export function getKV1AppViewsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['views.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.app)['views.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['views.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1AppViewsJsonQueryKey>
  >({
    queryKey: getKV1AppViewsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.app['views.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1AppViewsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['views.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.app)['views.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.k.v1.app)['views.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKV1AppViewsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKV1AppViewsJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getKV1AppsJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1)['apps.json']['$get']>,
) {
  return ['k', '/k/v1/apps.json', args] as const
}

export function getKV1AppsJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['apps.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1)['apps.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['apps.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1AppsJsonQueryKey>
  >({
    queryKey: getKV1AppsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1['apps.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createKV1AppsJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['apps.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1)['apps.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['apps.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKV1AppsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKV1AppsJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getKV1AppsStatisticsJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.apps)['statistics.json']['$get']>,
) {
  return ['k', '/k/v1/apps/statistics.json', args] as const
}

export function getKV1AppsStatisticsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.apps)['statistics.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.apps)['statistics.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1AppsStatisticsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.apps['statistics.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1AppsStatisticsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.apps)['statistics.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.apps)['statistics.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1AppsStatisticsJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostKV1BulkRequestJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKV1BulkRequestJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKV1FieldAclJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.field)['acl.json']['$get']>,
) {
  return ['k', '/k/v1/field/acl.json', args] as const
}

export function getKV1FieldAclJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.field)['acl.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.field)['acl.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.field)['acl.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1FieldAclJsonQueryKey>
  >({
    queryKey: getKV1FieldAclJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.field['acl.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1FieldAclJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.field)['acl.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.field)['acl.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.k.v1.field)['acl.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKV1FieldAclJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKV1FieldAclJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutKV1FieldAclJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKV1FieldAclJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKV1FileJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1)['file.json']['$get']>,
) {
  return ['k', '/k/v1/file.json', args] as const
}

export function getKV1FileJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['file.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1)['file.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['file.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1FileJsonQueryKey>
  >({
    queryKey: getKV1FileJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1['file.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createKV1FileJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['file.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1)['file.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['file.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKV1FileJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKV1FileJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostKV1FileJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['file.json']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.k.v1)['file.json']['$post']>,
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
    const mutationDefaults = getPostKV1FileJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKV1FormJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1)['form.json']['$get']>,
) {
  return ['k', '/k/v1/form.json', args] as const
}

export function getKV1FormJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['form.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1)['form.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['form.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1FormJsonQueryKey>
  >({
    queryKey: getKV1FormJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1['form.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createKV1FormJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['form.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1)['form.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['form.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKV1FormJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKV1FormJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostKV1GuestsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['guests.json']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.k.v1)['guests.json']['$post']>,
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
    const mutationDefaults = getPostKV1GuestsJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteKV1GuestsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteKV1GuestsJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutKV1PluginJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['plugin.json']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.k.v1)['plugin.json']['$put']>,
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
    const mutationDefaults = getPutKV1PluginJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostKV1PluginJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['plugin.json']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.k.v1)['plugin.json']['$post']>,
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
    const mutationDefaults = getPostKV1PluginJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteKV1PluginJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteKV1PluginJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKV1PluginAppsJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.plugin)['apps.json']['$get']>,
) {
  return ['k', '/k/v1/plugin/apps.json', args] as const
}

export function getKV1PluginAppsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.plugin)['apps.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.plugin)['apps.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.plugin)['apps.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1PluginAppsJsonQueryKey>
  >({
    queryKey: getKV1PluginAppsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.plugin['apps.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1PluginAppsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.plugin)['apps.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.plugin)['apps.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.k.v1.plugin)['apps.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKV1PluginAppsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKV1PluginAppsJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getKV1PluginsJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1)['plugins.json']['$get']>,
) {
  return ['k', '/k/v1/plugins.json', args] as const
}

export function getKV1PluginsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['plugins.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1)['plugins.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['plugins.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1PluginsJsonQueryKey>
  >({
    queryKey: getKV1PluginsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1['plugins.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createKV1PluginsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['plugins.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1)['plugins.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['plugins.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKV1PluginsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKV1PluginsJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getKV1PluginsRequiredJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.plugins)['required.json']['$get']>,
) {
  return ['k', '/k/v1/plugins/required.json', args] as const
}

export function getKV1PluginsRequiredJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.plugins)['required.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.plugins)['required.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1PluginsRequiredJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.plugins['required.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1PluginsRequiredJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.plugins)['required.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.plugins)['required.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1PluginsRequiredJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostKV1PreviewAppJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKV1PreviewAppJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKV1PreviewAppAclJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.preview.app)['acl.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/acl.json', args] as const
}

export function getKV1PreviewAppAclJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['acl.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['acl.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1PreviewAppAclJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.preview.app['acl.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1PreviewAppAclJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['acl.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.preview.app)['acl.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1PreviewAppAclJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutKV1PreviewAppAclJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKV1PreviewAppAclJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKV1PreviewAppActionsJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.preview.app)['actions.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/actions.json', args] as const
}

export function getKV1PreviewAppActionsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['actions.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['actions.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1PreviewAppActionsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.preview.app['actions.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1PreviewAppActionsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['actions.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.preview.app)['actions.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1PreviewAppActionsJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutKV1PreviewAppActionsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKV1PreviewAppActionsJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKV1PreviewAppAdminNotesJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.preview.app)['adminNotes.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/adminNotes.json', args] as const
}

export function getKV1PreviewAppAdminNotesJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['adminNotes.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['adminNotes.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1PreviewAppAdminNotesJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.preview.app['adminNotes.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1PreviewAppAdminNotesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['adminNotes.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.preview.app)['adminNotes.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1PreviewAppAdminNotesJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutKV1PreviewAppAdminNotesJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKV1PreviewAppAdminNotesJsonMutationOptions<
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

export function getKV1PreviewAppCustomizeJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.preview.app)['customize.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/customize.json', args] as const
}

export function getKV1PreviewAppCustomizeJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['customize.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['customize.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1PreviewAppCustomizeJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.preview.app['customize.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1PreviewAppCustomizeJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['customize.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.preview.app)['customize.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1PreviewAppCustomizeJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutKV1PreviewAppCustomizeJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKV1PreviewAppCustomizeJsonMutationOptions<
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

export function getKV1PreviewAppDeployJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.preview.app)['deploy.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/deploy.json', args] as const
}

export function getKV1PreviewAppDeployJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['deploy.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['deploy.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1PreviewAppDeployJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.preview.app['deploy.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1PreviewAppDeployJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['deploy.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.preview.app)['deploy.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1PreviewAppDeployJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostKV1PreviewAppDeployJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKV1PreviewAppDeployJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKV1PreviewAppFormFieldsJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/form/fields.json', args] as const
}

export function getKV1PreviewAppFormFieldsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['fields.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1PreviewAppFormFieldsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.preview.app.form['fields.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1PreviewAppFormFieldsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['fields.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1PreviewAppFormFieldsJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutKV1PreviewAppFormFieldsJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKV1PreviewAppFormFieldsJsonMutationOptions<
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

export function createPostKV1PreviewAppFormFieldsJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKV1PreviewAppFormFieldsJsonMutationOptions<
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

export function createDeleteKV1PreviewAppFormFieldsJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteKV1PreviewAppFormFieldsJsonMutationOptions<
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

export function getKV1PreviewAppFormLayoutJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.preview.app.form)['layout.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/form/layout.json', args] as const
}

export function getKV1PreviewAppFormLayoutJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['layout.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.preview.app.form)['layout.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1PreviewAppFormLayoutJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.preview.app.form['layout.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1PreviewAppFormLayoutJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['layout.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.preview.app.form)['layout.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1PreviewAppFormLayoutJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutKV1PreviewAppFormLayoutJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKV1PreviewAppFormLayoutJsonMutationOptions<
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

export function getKV1PreviewAppNotificationsGeneralJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.preview.app.notifications)['general.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/notifications/general.json', args] as const
}

export function getKV1PreviewAppNotificationsGeneralJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app.notifications)['general.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.preview.app.notifications)['general.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1PreviewAppNotificationsGeneralJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.preview.app.notifications['general.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1PreviewAppNotificationsGeneralJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app.notifications)['general.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.k.v1.preview.app.notifications)['general.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1PreviewAppNotificationsGeneralJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutKV1PreviewAppNotificationsGeneralJson<
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
                ReturnType<(typeof client.k.v1.preview.app.notifications)['general.json']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.k.v1.preview.app.notifications)['general.json']['$put']>,
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
    const mutationDefaults = getPutKV1PreviewAppNotificationsGeneralJsonMutationOptions<
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

export function getKV1PreviewAppNotificationsPerRecordJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.preview.app.notifications)['perRecord.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/notifications/perRecord.json', args] as const
}

export function getKV1PreviewAppNotificationsPerRecordJsonQueryOptions<
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
  args: InferRequestType<(typeof client.k.v1.preview.app.notifications)['perRecord.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1PreviewAppNotificationsPerRecordJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.preview.app.notifications['perRecord.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1PreviewAppNotificationsPerRecordJson<
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
  args: () => InferRequestType<
    (typeof client.k.v1.preview.app.notifications)['perRecord.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1PreviewAppNotificationsPerRecordJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutKV1PreviewAppNotificationsPerRecordJson<
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
                ReturnType<(typeof client.k.v1.preview.app.notifications)['perRecord.json']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.k.v1.preview.app.notifications)['perRecord.json']['$put']>,
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
    const mutationDefaults = getPutKV1PreviewAppNotificationsPerRecordJsonMutationOptions<
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

export function getKV1PreviewAppNotificationsReminderJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.preview.app.notifications)['reminder.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/notifications/reminder.json', args] as const
}

export function getKV1PreviewAppNotificationsReminderJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app.notifications)['reminder.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.preview.app.notifications)['reminder.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1PreviewAppNotificationsReminderJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.preview.app.notifications['reminder.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1PreviewAppNotificationsReminderJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app.notifications)['reminder.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.k.v1.preview.app.notifications)['reminder.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1PreviewAppNotificationsReminderJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutKV1PreviewAppNotificationsReminderJson<
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
                ReturnType<(typeof client.k.v1.preview.app.notifications)['reminder.json']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.k.v1.preview.app.notifications)['reminder.json']['$put']>,
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
    const mutationDefaults = getPutKV1PreviewAppNotificationsReminderJsonMutationOptions<
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

export function getKV1PreviewAppPluginsJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.preview.app)['plugins.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/plugins.json', args] as const
}

export function getKV1PreviewAppPluginsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['plugins.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['plugins.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1PreviewAppPluginsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.preview.app['plugins.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1PreviewAppPluginsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['plugins.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.preview.app)['plugins.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1PreviewAppPluginsJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostKV1PreviewAppPluginsJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKV1PreviewAppPluginsJsonMutationOptions<
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

export function getKV1PreviewAppReportsJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.preview.app)['reports.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/reports.json', args] as const
}

export function getKV1PreviewAppReportsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['reports.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['reports.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1PreviewAppReportsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.preview.app['reports.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1PreviewAppReportsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['reports.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.preview.app)['reports.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1PreviewAppReportsJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutKV1PreviewAppReportsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKV1PreviewAppReportsJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKV1PreviewAppSettingsJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.preview.app)['settings.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/settings.json', args] as const
}

export function getKV1PreviewAppSettingsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['settings.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['settings.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1PreviewAppSettingsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.preview.app['settings.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1PreviewAppSettingsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['settings.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.preview.app)['settings.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1PreviewAppSettingsJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutKV1PreviewAppSettingsJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKV1PreviewAppSettingsJsonMutationOptions<
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

export function getKV1PreviewAppStatusJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.preview.app)['status.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/status.json', args] as const
}

export function getKV1PreviewAppStatusJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['status.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['status.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1PreviewAppStatusJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.preview.app['status.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1PreviewAppStatusJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['status.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.preview.app)['status.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1PreviewAppStatusJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutKV1PreviewAppStatusJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKV1PreviewAppStatusJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKV1PreviewAppViewsJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.preview.app)['views.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/views.json', args] as const
}

export function getKV1PreviewAppViewsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['views.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['views.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1PreviewAppViewsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.preview.app['views.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1PreviewAppViewsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.app)['views.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.preview.app)['views.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1PreviewAppViewsJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutKV1PreviewAppViewsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKV1PreviewAppViewsJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKV1PreviewFieldAclJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.preview.field)['acl.json']['$get']>,
) {
  return ['k', '/k/v1/preview/field/acl.json', args] as const
}

export function getKV1PreviewFieldAclJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.field)['acl.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.preview.field)['acl.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1PreviewFieldAclJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.preview.field['acl.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1PreviewFieldAclJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.field)['acl.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.preview.field)['acl.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1PreviewFieldAclJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutKV1PreviewFieldAclJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKV1PreviewFieldAclJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKV1PreviewFormJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.preview)['form.json']['$get']>,
) {
  return ['k', '/k/v1/preview/form.json', args] as const
}

export function getKV1PreviewFormJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.preview)['form.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.preview)['form.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.preview)['form.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1PreviewFormJsonQueryKey>
  >({
    queryKey: getKV1PreviewFormJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.preview['form.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1PreviewFormJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.preview)['form.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.preview)['form.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.k.v1.preview)['form.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKV1PreviewFormJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKV1PreviewFormJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getKV1PreviewRecordAclJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.preview.record)['acl.json']['$get']>,
) {
  return ['k', '/k/v1/preview/record/acl.json', args] as const
}

export function getKV1PreviewRecordAclJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.record)['acl.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.preview.record)['acl.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1PreviewRecordAclJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.preview.record['acl.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1PreviewRecordAclJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.preview.record)['acl.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.preview.record)['acl.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1PreviewRecordAclJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutKV1PreviewRecordAclJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKV1PreviewRecordAclJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKV1RecordJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1)['record.json']['$get']>,
) {
  return ['k', '/k/v1/record.json', args] as const
}

export function getKV1RecordJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['record.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1)['record.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['record.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1RecordJsonQueryKey>
  >({
    queryKey: getKV1RecordJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1['record.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createKV1RecordJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['record.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1)['record.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['record.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKV1RecordJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKV1RecordJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutKV1RecordJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['record.json']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.k.v1)['record.json']['$put']>,
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
    const mutationDefaults = getPutKV1RecordJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostKV1RecordJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['record.json']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.k.v1)['record.json']['$post']>,
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
    const mutationDefaults = getPostKV1RecordJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKV1RecordAclJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.record)['acl.json']['$get']>,
) {
  return ['k', '/k/v1/record/acl.json', args] as const
}

export function getKV1RecordAclJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.record)['acl.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.record)['acl.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.record)['acl.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1RecordAclJsonQueryKey>
  >({
    queryKey: getKV1RecordAclJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.record['acl.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1RecordAclJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.record)['acl.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.record)['acl.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.k.v1.record)['acl.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKV1RecordAclJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKV1RecordAclJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutKV1RecordAclJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKV1RecordAclJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutKV1RecordAssigneesJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKV1RecordAssigneesJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostKV1RecordAsyncTokenJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKV1RecordAsyncTokenJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostKV1RecordCommentJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKV1RecordCommentJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteKV1RecordCommentJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteKV1RecordCommentJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKV1RecordCommentsJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.record)['comments.json']['$get']>,
) {
  return ['k', '/k/v1/record/comments.json', args] as const
}

export function getKV1RecordCommentsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.record)['comments.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.record)['comments.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1RecordCommentsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.record['comments.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1RecordCommentsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.record)['comments.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.record)['comments.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1RecordCommentsJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutKV1RecordStatusJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKV1RecordStatusJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKV1RecordsJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1)['records.json']['$get']>,
) {
  return ['k', '/k/v1/records.json', args] as const
}

export function getKV1RecordsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['records.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1)['records.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['records.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1RecordsJsonQueryKey>
  >({
    queryKey: getKV1RecordsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1['records.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createKV1RecordsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['records.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1)['records.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['records.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKV1RecordsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKV1RecordsJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutKV1RecordsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['records.json']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.k.v1)['records.json']['$put']>,
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
    const mutationDefaults = getPutKV1RecordsJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostKV1RecordsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['records.json']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.k.v1)['records.json']['$post']>,
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
    const mutationDefaults = getPostKV1RecordsJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteKV1RecordsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteKV1RecordsJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKV1RecordsAclEvaluateJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.records.acl)['evaluate.json']['$get']>,
) {
  return ['k', '/k/v1/records/acl/evaluate.json', args] as const
}

export function getKV1RecordsAclEvaluateJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.records.acl)['evaluate.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.records.acl)['evaluate.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1RecordsAclEvaluateJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.records.acl['evaluate.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1RecordsAclEvaluateJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.records.acl)['evaluate.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.records.acl)['evaluate.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1RecordsAclEvaluateJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getKV1RecordsCursorJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.records)['cursor.json']['$get']>,
) {
  return ['k', '/k/v1/records/cursor.json', args] as const
}

export function getKV1RecordsCursorJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.records)['cursor.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.records)['cursor.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1RecordsCursorJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.records['cursor.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1RecordsCursorJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.records)['cursor.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.records)['cursor.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1RecordsCursorJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostKV1RecordsCursorJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKV1RecordsCursorJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteKV1RecordsCursorJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteKV1RecordsCursorJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutKV1RecordsStatusJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKV1RecordsStatusJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostKV1SearchJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['search.json']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.k.v1)['search.json']['$post']>,
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
    const mutationDefaults = getPostKV1SearchJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKV1SpaceJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1)['space.json']['$get']>,
) {
  return ['k', '/k/v1/space.json', args] as const
}

export function getKV1SpaceJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['space.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1)['space.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['space.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKV1SpaceJsonQueryKey>
  >({
    queryKey: getKV1SpaceJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1['space.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createKV1SpaceJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['space.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1)['space.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['space.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKV1SpaceJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKV1SpaceJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutKV1SpaceJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['space.json']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.k.v1)['space.json']['$put']>,
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
    const mutationDefaults = getPutKV1SpaceJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteKV1SpaceJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['space.json']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.k.v1)['space.json']['$delete']>,
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
    const mutationDefaults = getDeleteKV1SpaceJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutKV1SpaceBodyJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKV1SpaceBodyJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKV1SpaceMembersJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.space)['members.json']['$get']>,
) {
  return ['k', '/k/v1/space/members.json', args] as const
}

export function getKV1SpaceMembersJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.space)['members.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.space)['members.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1SpaceMembersJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.space['members.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1SpaceMembersJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.space)['members.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.space)['members.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKV1SpaceMembersJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutKV1SpaceMembersJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKV1SpaceMembersJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutKV1SpaceThreadJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKV1SpaceThreadJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostKV1SpaceThreadJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKV1SpaceThreadJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostKV1SpaceThreadCommentJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKV1SpaceThreadCommentJsonMutationOptions<
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

export function getKV1SpacesStatisticsJsonQueryKey(
  args: InferRequestType<(typeof client.k.v1.spaces)['statistics.json']['$get']>,
) {
  return ['k', '/k/v1/spaces/statistics.json', args] as const
}

export function getKV1SpacesStatisticsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.spaces)['statistics.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.k.v1.spaces)['statistics.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKV1SpacesStatisticsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.k.v1.spaces['statistics.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKV1SpacesStatisticsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.k.v1.spaces)['statistics.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.k.v1.spaces)['statistics.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKV1SpacesStatisticsJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostKV1TemplateSpaceJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKV1TemplateSpaceJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
