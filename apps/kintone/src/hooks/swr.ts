import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getKKey() {
  return ['k'] as const
}

export function getGetKGuestGuestSpaceIdV1AppJsonKey(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app.json']['$get']>,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1AppJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['app.json']['$get']>>
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
        ? getGetKGuestGuestSpaceIdV1AppJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['app.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.guest[':guestSpaceId'].v1['app.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1AppJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['app.json']['$get']>>
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
        ? getGetKGuestGuestSpaceIdV1AppJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['app.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.guest[':guestSpaceId'].v1['app.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1AppAclJsonKey(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$get']>,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/acl.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1AppAclJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$get']>
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
        ? getGetKGuestGuestSpaceIdV1AppAclJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.guest[':guestSpaceId'].v1.app['acl.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1AppAclJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$get']>
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
        ? getGetKGuestGuestSpaceIdV1AppAclJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.guest[':guestSpaceId'].v1.app['acl.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1AppAclJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/app/acl.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1AppAclJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1AppAclJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$put']
          >
        },
      ) =>
        parseResponse(client.k.guest[':guestSpaceId'].v1.app['acl.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1AppActionsJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['actions.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/actions.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1AppActionsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['actions.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppActionsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['app']['actions.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.app['actions.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1AppActionsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['actions.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppActionsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['app']['actions.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.app['actions.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1AppAdminNotesJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['adminNotes.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/adminNotes.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1AppAdminNotesJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['adminNotes.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppAdminNotesJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['app']['adminNotes.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.app['adminNotes.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1AppAdminNotesJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['adminNotes.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppAdminNotesJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['app']['adminNotes.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.app['adminNotes.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1AppCustomizeJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['customize.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/customize.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1AppCustomizeJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['customize.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppCustomizeJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['app']['customize.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.app['customize.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1AppCustomizeJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['customize.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppCustomizeJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['app']['customize.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.app['customize.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1AppFormFieldsJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['fields.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/form/fields.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1AppFormFieldsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['fields.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppFormFieldsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['fields.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.app.form['fields.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1AppFormFieldsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['fields.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppFormFieldsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['fields.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.app.form['fields.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1AppFormLayoutJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['layout.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/form/layout.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1AppFormLayoutJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['layout.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppFormLayoutJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['layout.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.app.form['layout.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1AppFormLayoutJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['layout.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppFormLayoutJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['layout.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.app.form['layout.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostKGuestGuestSpaceIdV1AppMoveJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/app/move.json', 'POST'] as const
}

export function usePostKGuestGuestSpaceIdV1AppMoveJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['move.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKGuestGuestSpaceIdV1AppMoveJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['app']['move.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.app['move.json'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1AppNotificationsGeneralJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['general.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/notifications/general.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1AppNotificationsGeneralJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['general.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppNotificationsGeneralJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['general.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.app.notifications['general.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1AppNotificationsGeneralJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['general.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppNotificationsGeneralJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['general.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.app.notifications['general.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1AppNotificationsPerRecordJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['perRecord.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/notifications/perRecord.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1AppNotificationsPerRecordJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['perRecord.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppNotificationsPerRecordJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['perRecord.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.app.notifications['perRecord.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1AppNotificationsPerRecordJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['perRecord.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppNotificationsPerRecordJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['perRecord.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.app.notifications['perRecord.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1AppNotificationsReminderJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['reminder.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/notifications/reminder.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1AppNotificationsReminderJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['reminder.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppNotificationsReminderJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['reminder.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.app.notifications['reminder.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1AppNotificationsReminderJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['reminder.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppNotificationsReminderJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['reminder.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.app.notifications['reminder.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1AppPluginsJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['plugins.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/plugins.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1AppPluginsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['plugins.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppPluginsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['app']['plugins.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.app['plugins.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1AppPluginsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['plugins.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppPluginsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['app']['plugins.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.app['plugins.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1AppReportsJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['reports.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/reports.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1AppReportsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['reports.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppReportsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['app']['reports.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.app['reports.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1AppReportsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['reports.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppReportsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['app']['reports.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.app['reports.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1AppSettingsJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['settings.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/settings.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1AppSettingsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['settings.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppSettingsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['app']['settings.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.app['settings.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1AppSettingsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['settings.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppSettingsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['app']['settings.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.app['settings.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1AppStatusJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['status.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/status.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1AppStatusJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['status.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppStatusJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['app']['status.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.app['status.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1AppStatusJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['status.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppStatusJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['app']['status.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.app['status.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1AppViewsJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['views.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/app/views.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1AppViewsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['views.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppViewsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['app']['views.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.app['views.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1AppViewsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['views.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppViewsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['app']['views.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.app['views.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1AppsJsonKey(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['apps.json']['$get']>,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/apps.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1AppsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['apps.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['apps.json']['$get']>>
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
        ? getGetKGuestGuestSpaceIdV1AppsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['apps.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.guest[':guestSpaceId'].v1['apps.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1AppsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['apps.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['apps.json']['$get']>>
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
        ? getGetKGuestGuestSpaceIdV1AppsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['apps.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.guest[':guestSpaceId'].v1['apps.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1AppsStatisticsJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['apps']['statistics.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/apps/statistics.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1AppsStatisticsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['apps']['statistics.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppsStatisticsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['apps']['statistics.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.apps['statistics.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1AppsStatisticsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['apps']['statistics.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1AppsStatisticsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['apps']['statistics.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.apps['statistics.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostKGuestGuestSpaceIdV1BulkRequestJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/bulkRequest.json', 'POST'] as const
}

export function usePostKGuestGuestSpaceIdV1BulkRequestJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['bulkRequest.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKGuestGuestSpaceIdV1BulkRequestJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['bulkRequest.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1['bulkRequest.json'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1FieldAclJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['field']['acl.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/field/acl.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1FieldAclJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['field']['acl.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1FieldAclJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['field']['acl.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.field['acl.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1FieldAclJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['field']['acl.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1FieldAclJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['field']['acl.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.field['acl.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1FieldAclJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/field/acl.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1FieldAclJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['field']['acl.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1FieldAclJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['field']['acl.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.field['acl.json'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1FileJsonKey(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$get']>,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/file.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1FileJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$get']>>
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
        ? getGetKGuestGuestSpaceIdV1FileJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.guest[':guestSpaceId'].v1['file.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1FileJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$get']>>
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
        ? getGetKGuestGuestSpaceIdV1FileJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.guest[':guestSpaceId'].v1['file.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKGuestGuestSpaceIdV1FileJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/file.json', 'POST'] as const
}

export function usePostKGuestGuestSpaceIdV1FileJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKGuestGuestSpaceIdV1FileJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$post']
          >
        },
      ) => parseResponse(client.k.guest[':guestSpaceId'].v1['file.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1FormJsonKey(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['form.json']['$get']>,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/form.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1FormJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['form.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['form.json']['$get']>>
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
        ? getGetKGuestGuestSpaceIdV1FormJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['form.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.guest[':guestSpaceId'].v1['form.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1FormJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['form.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['form.json']['$get']>>
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
        ? getGetKGuestGuestSpaceIdV1FormJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['form.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.guest[':guestSpaceId'].v1['form.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKGuestGuestSpaceIdV1GuestsJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/guests.json', 'POST'] as const
}

export function usePostKGuestGuestSpaceIdV1GuestsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['guests.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKGuestGuestSpaceIdV1GuestsJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['guests.json']['$post']
          >
        },
      ) =>
        parseResponse(client.k.guest[':guestSpaceId'].v1['guests.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteKGuestGuestSpaceIdV1GuestsJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/guests.json', 'DELETE'] as const
}

export function useDeleteKGuestGuestSpaceIdV1GuestsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['guests.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKGuestGuestSpaceIdV1GuestsJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['guests.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1['guests.json'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1PluginJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/plugin.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1PluginJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1PluginJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$put']
          >
        },
      ) =>
        parseResponse(client.k.guest[':guestSpaceId'].v1['plugin.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKGuestGuestSpaceIdV1PluginJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/plugin.json', 'POST'] as const
}

export function usePostKGuestGuestSpaceIdV1PluginJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKGuestGuestSpaceIdV1PluginJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$post']
          >
        },
      ) =>
        parseResponse(client.k.guest[':guestSpaceId'].v1['plugin.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteKGuestGuestSpaceIdV1PluginJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/plugin.json', 'DELETE'] as const
}

export function useDeleteKGuestGuestSpaceIdV1PluginJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKGuestGuestSpaceIdV1PluginJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1['plugin.json'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1PluginAppsJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['plugin']['apps.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/plugin/apps.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1PluginAppsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['plugin']['apps.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PluginAppsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['plugin']['apps.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.plugin['apps.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1PluginAppsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['plugin']['apps.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PluginAppsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['plugin']['apps.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.plugin['apps.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1PluginsJsonKey(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugins.json']['$get']>,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/plugins.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1PluginsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugins.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugins.json']['$get']>
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
        ? getGetKGuestGuestSpaceIdV1PluginsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugins.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.guest[':guestSpaceId'].v1['plugins.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1PluginsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugins.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugins.json']['$get']>
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
        ? getGetKGuestGuestSpaceIdV1PluginsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugins.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.guest[':guestSpaceId'].v1['plugins.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1PluginsRequiredJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['plugins']['required.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/plugins/required.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1PluginsRequiredJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['plugins']['required.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PluginsRequiredJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['plugins']['required.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.plugins['required.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1PluginsRequiredJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['plugins']['required.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PluginsRequiredJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['plugins']['required.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.plugins['required.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostKGuestGuestSpaceIdV1PreviewAppJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app.json', 'POST'] as const
}

export function usePostKGuestGuestSpaceIdV1PreviewAppJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKGuestGuestSpaceIdV1PreviewAppJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview['app.json'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1PreviewAppAclJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['acl.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/acl.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1PreviewAppAclJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['acl.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppAclJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['acl.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app['acl.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1PreviewAppAclJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['acl.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppAclJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['acl.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app['acl.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1PreviewAppAclJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/acl.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1PreviewAppAclJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['acl.json']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1PreviewAppAclJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['acl.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app['acl.json'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1PreviewAppActionsJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['actions.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/actions.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1PreviewAppActionsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['actions.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppActionsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['actions.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app['actions.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1PreviewAppActionsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['actions.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppActionsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['actions.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app['actions.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1PreviewAppActionsJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/actions.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1PreviewAppActionsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['actions.json']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1PreviewAppActionsJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['actions.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app['actions.json'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['adminNotes.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/adminNotes.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1PreviewAppAdminNotesJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['adminNotes.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['adminNotes.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app['adminNotes.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1PreviewAppAdminNotesJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['adminNotes.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['adminNotes.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app['adminNotes.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/adminNotes.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1PreviewAppAdminNotesJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['adminNotes.json']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['adminNotes.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app['adminNotes.json'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1PreviewAppCustomizeJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['customize.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/customize.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1PreviewAppCustomizeJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['customize.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppCustomizeJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['customize.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app['customize.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1PreviewAppCustomizeJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['customize.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppCustomizeJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['customize.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app['customize.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1PreviewAppCustomizeJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/customize.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1PreviewAppCustomizeJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['customize.json']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1PreviewAppCustomizeJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['customize.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app['customize.json'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1PreviewAppDeployJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['deploy.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/deploy.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1PreviewAppDeployJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['deploy.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppDeployJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['deploy.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app['deploy.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1PreviewAppDeployJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['deploy.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppDeployJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['deploy.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app['deploy.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostKGuestGuestSpaceIdV1PreviewAppDeployJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/deploy.json', 'POST'] as const
}

export function usePostKGuestGuestSpaceIdV1PreviewAppDeployJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['deploy.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKGuestGuestSpaceIdV1PreviewAppDeployJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['deploy.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app['deploy.json'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/form/fields.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1PreviewAppFormFieldsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app.form['fields.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1PreviewAppFormFieldsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app.form['fields.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/form/fields.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1PreviewAppFormFieldsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app.form['fields.json'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/form/fields.json', 'POST'] as const
}

export function usePostKGuestGuestSpaceIdV1PreviewAppFormFieldsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app.form['fields.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/form/fields.json', 'DELETE'] as const
}

export function useDeleteKGuestGuestSpaceIdV1PreviewAppFormFieldsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app.form['fields.json'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['layout.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/form/layout.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1PreviewAppFormLayoutJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['layout.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['layout.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app.form['layout.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1PreviewAppFormLayoutJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['layout.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['layout.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app.form['layout.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/form/layout.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1PreviewAppFormLayoutJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['layout.json']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['layout.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app.form['layout.json'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['general.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/notifications/general.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['general.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['general.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app.notifications['general.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['general.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['general.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app.notifications['general.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/notifications/general.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['general.json']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['general.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app.notifications['general.json'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['perRecord.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/notifications/perRecord.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['perRecord.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['perRecord.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app.notifications['perRecord.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['perRecord.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['perRecord.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app.notifications['perRecord.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/notifications/perRecord.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['perRecord.json']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['perRecord.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app.notifications['perRecord.json'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['reminder.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/notifications/reminder.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['reminder.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['reminder.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app.notifications['reminder.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['reminder.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['reminder.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app.notifications['reminder.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/notifications/reminder.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['reminder.json']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['reminder.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app.notifications['reminder.json'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1PreviewAppPluginsJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['plugins.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/plugins.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1PreviewAppPluginsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['plugins.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppPluginsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['plugins.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app['plugins.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1PreviewAppPluginsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['plugins.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppPluginsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['plugins.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app['plugins.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostKGuestGuestSpaceIdV1PreviewAppPluginsJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/plugins.json', 'POST'] as const
}

export function usePostKGuestGuestSpaceIdV1PreviewAppPluginsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['plugins.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKGuestGuestSpaceIdV1PreviewAppPluginsJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['plugins.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app['plugins.json'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1PreviewAppReportsJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['reports.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/reports.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1PreviewAppReportsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['reports.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppReportsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['reports.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app['reports.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1PreviewAppReportsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['reports.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppReportsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['reports.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app['reports.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1PreviewAppReportsJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/reports.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1PreviewAppReportsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['reports.json']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1PreviewAppReportsJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['reports.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app['reports.json'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1PreviewAppSettingsJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['settings.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/settings.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1PreviewAppSettingsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['settings.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppSettingsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['settings.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app['settings.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1PreviewAppSettingsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['settings.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppSettingsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['settings.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app['settings.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1PreviewAppSettingsJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/settings.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1PreviewAppSettingsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['settings.json']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1PreviewAppSettingsJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['settings.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app['settings.json'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1PreviewAppStatusJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['status.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/status.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1PreviewAppStatusJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['status.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppStatusJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['status.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app['status.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1PreviewAppStatusJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['status.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppStatusJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['status.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app['status.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1PreviewAppStatusJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/status.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1PreviewAppStatusJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['status.json']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1PreviewAppStatusJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['status.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app['status.json'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1PreviewAppViewsJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['views.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/views.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1PreviewAppViewsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['views.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppViewsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['views.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app['views.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1PreviewAppViewsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['views.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewAppViewsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['views.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.app['views.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1PreviewAppViewsJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/app/views.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1PreviewAppViewsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['views.json']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1PreviewAppViewsJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['views.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.app['views.json'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1PreviewFieldAclJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['field']['acl.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/field/acl.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1PreviewFieldAclJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['field']['acl.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewFieldAclJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['field']['acl.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.field['acl.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1PreviewFieldAclJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['field']['acl.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewFieldAclJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['field']['acl.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.field['acl.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1PreviewFieldAclJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/field/acl.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1PreviewFieldAclJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['field']['acl.json']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1PreviewFieldAclJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['field']['acl.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.field['acl.json'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1PreviewFormJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['form.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/form.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1PreviewFormJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['form.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewFormJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['form.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview['form.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1PreviewFormJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['form.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewFormJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['form.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview['form.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1PreviewRecordAclJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['record']['acl.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/record/acl.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1PreviewRecordAclJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['record']['acl.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewRecordAclJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['record']['acl.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.record['acl.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1PreviewRecordAclJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['record']['acl.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1PreviewRecordAclJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['record']['acl.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.preview.record['acl.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1PreviewRecordAclJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/preview/record/acl.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1PreviewRecordAclJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['record']['acl.json']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1PreviewRecordAclJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['record']['acl.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.preview.record['acl.json'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1RecordJsonKey(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$get']>,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/record.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1RecordJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$get']>
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
        ? getGetKGuestGuestSpaceIdV1RecordJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.guest[':guestSpaceId'].v1['record.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1RecordJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$get']>
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
        ? getGetKGuestGuestSpaceIdV1RecordJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.guest[':guestSpaceId'].v1['record.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1RecordJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/record.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1RecordJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1RecordJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$put']
          >
        },
      ) =>
        parseResponse(client.k.guest[':guestSpaceId'].v1['record.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKGuestGuestSpaceIdV1RecordJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/record.json', 'POST'] as const
}

export function usePostKGuestGuestSpaceIdV1RecordJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKGuestGuestSpaceIdV1RecordJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$post']
          >
        },
      ) =>
        parseResponse(client.k.guest[':guestSpaceId'].v1['record.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1RecordAclJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['acl.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/record/acl.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1RecordAclJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['acl.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1RecordAclJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['record']['acl.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.record['acl.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1RecordAclJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['acl.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1RecordAclJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['record']['acl.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.record['acl.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1RecordAclJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/record/acl.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1RecordAclJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['record']['acl.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1RecordAclJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['record']['acl.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.record['acl.json'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1RecordAssigneesJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/record/assignees.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1RecordAssigneesJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['record']['assignees.json']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1RecordAssigneesJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['record']['assignees.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.record['assignees.json'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostKGuestGuestSpaceIdV1RecordCommentJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/record/comment.json', 'POST'] as const
}

export function usePostKGuestGuestSpaceIdV1RecordCommentJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comment.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKGuestGuestSpaceIdV1RecordCommentJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comment.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.record['comment.json'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteKGuestGuestSpaceIdV1RecordCommentJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/record/comment.json', 'DELETE'] as const
}

export function useDeleteKGuestGuestSpaceIdV1RecordCommentJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comment.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKGuestGuestSpaceIdV1RecordCommentJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comment.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.record['comment.json'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1RecordCommentsJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comments.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/record/comments.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1RecordCommentsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comments.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1RecordCommentsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comments.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.record['comments.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1RecordCommentsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comments.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1RecordCommentsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comments.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.record['comments.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1RecordStatusJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/record/status.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1RecordStatusJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['record']['status.json']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1RecordStatusJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['record']['status.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.record['status.json'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1RecordsJsonKey(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$get']>,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/records.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1RecordsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$get']>
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
        ? getGetKGuestGuestSpaceIdV1RecordsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.guest[':guestSpaceId'].v1['records.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1RecordsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$get']>
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
        ? getGetKGuestGuestSpaceIdV1RecordsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.guest[':guestSpaceId'].v1['records.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1RecordsJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/records.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1RecordsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1RecordsJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$put']
          >
        },
      ) =>
        parseResponse(client.k.guest[':guestSpaceId'].v1['records.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKGuestGuestSpaceIdV1RecordsJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/records.json', 'POST'] as const
}

export function usePostKGuestGuestSpaceIdV1RecordsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKGuestGuestSpaceIdV1RecordsJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$post']
          >
        },
      ) =>
        parseResponse(client.k.guest[':guestSpaceId'].v1['records.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteKGuestGuestSpaceIdV1RecordsJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/records.json', 'DELETE'] as const
}

export function useDeleteKGuestGuestSpaceIdV1RecordsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKGuestGuestSpaceIdV1RecordsJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1['records.json'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1RecordsAclEvaluateJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['records']['acl']['evaluate.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/records/acl/evaluate.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1RecordsAclEvaluateJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['records']['acl']['evaluate.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1RecordsAclEvaluateJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['records']['acl']['evaluate.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.records.acl['evaluate.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1RecordsAclEvaluateJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['records']['acl']['evaluate.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1RecordsAclEvaluateJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['records']['acl']['evaluate.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.records.acl['evaluate.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1RecordsCursorJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/records/cursor.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1RecordsCursorJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1RecordsCursorJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.records['cursor.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1RecordsCursorJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1RecordsCursorJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.records['cursor.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostKGuestGuestSpaceIdV1RecordsCursorJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/records/cursor.json', 'POST'] as const
}

export function usePostKGuestGuestSpaceIdV1RecordsCursorJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKGuestGuestSpaceIdV1RecordsCursorJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.records['cursor.json'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteKGuestGuestSpaceIdV1RecordsCursorJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/records/cursor.json', 'DELETE'] as const
}

export function useDeleteKGuestGuestSpaceIdV1RecordsCursorJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKGuestGuestSpaceIdV1RecordsCursorJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.records['cursor.json'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1RecordsStatusJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/records/status.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1RecordsStatusJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['records']['status.json']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1RecordsStatusJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['records']['status.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.records['status.json'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostKGuestGuestSpaceIdV1SearchJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/search.json', 'POST'] as const
}

export function usePostKGuestGuestSpaceIdV1SearchJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['search.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKGuestGuestSpaceIdV1SearchJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['search.json']['$post']
          >
        },
      ) =>
        parseResponse(client.k.guest[':guestSpaceId'].v1['search.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1SpaceJsonKey(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$get']>,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/space.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1SpaceJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$get']>
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
        ? getGetKGuestGuestSpaceIdV1SpaceJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.guest[':guestSpaceId'].v1['space.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1SpaceJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$get']>
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
        ? getGetKGuestGuestSpaceIdV1SpaceJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.guest[':guestSpaceId'].v1['space.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1SpaceJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/space.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1SpaceJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1SpaceJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$put']
          >
        },
      ) => parseResponse(client.k.guest[':guestSpaceId'].v1['space.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteKGuestGuestSpaceIdV1SpaceJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/space.json', 'DELETE'] as const
}

export function useDeleteKGuestGuestSpaceIdV1SpaceJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKGuestGuestSpaceIdV1SpaceJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$delete']
          >
        },
      ) =>
        parseResponse(client.k.guest[':guestSpaceId'].v1['space.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1SpaceBodyJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/space/body.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1SpaceBodyJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['space']['body.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1SpaceBodyJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['space']['body.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.space['body.json'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1SpaceGuestsJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/space/guests.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1SpaceGuestsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['space']['guests.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1SpaceGuestsJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['space']['guests.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.space['guests.json'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1SpaceMembersJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['space']['members.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/space/members.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1SpaceMembersJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['space']['members.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1SpaceMembersJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['space']['members.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.space['members.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1SpaceMembersJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['space']['members.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1SpaceMembersJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['space']['members.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.space['members.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1SpaceMembersJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/space/members.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1SpaceMembersJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['space']['members.json']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1SpaceMembersJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['space']['members.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.space['members.json'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutKGuestGuestSpaceIdV1SpaceThreadJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/space/thread.json', 'PUT'] as const
}

export function usePutKGuestGuestSpaceIdV1SpaceThreadJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['space']['thread.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKGuestGuestSpaceIdV1SpaceThreadJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['space']['thread.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.space['thread.json'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostKGuestGuestSpaceIdV1SpaceThreadJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/space/thread.json', 'POST'] as const
}

export function usePostKGuestGuestSpaceIdV1SpaceThreadJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['space']['thread.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKGuestGuestSpaceIdV1SpaceThreadJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['space']['thread.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.space['thread.json'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostKGuestGuestSpaceIdV1SpaceThreadCommentJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/space/thread/comment.json', 'POST'] as const
}

export function usePostKGuestGuestSpaceIdV1SpaceThreadCommentJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['space']['thread']['comment.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKGuestGuestSpaceIdV1SpaceThreadCommentJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['space']['thread']['comment.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.space.thread['comment.json'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKGuestGuestSpaceIdV1SpacesStatisticsJsonKey(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['spaces']['statistics.json']['$get']
  >,
) {
  return ['k', '/k/guest/:guestSpaceId/v1/spaces/statistics.json', args] as const
}

export function useGetKGuestGuestSpaceIdV1SpacesStatisticsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['spaces']['statistics.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1SpacesStatisticsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['spaces']['statistics.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.spaces['statistics.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKGuestGuestSpaceIdV1SpacesStatisticsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['spaces']['statistics.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetKGuestGuestSpaceIdV1SpacesStatisticsJsonKey(args)
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
                (typeof client.k.guest)[':guestSpaceId']['v1']['spaces']['statistics.json']['$get']
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
          client.k.guest[':guestSpaceId'].v1.spaces['statistics.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostKGuestGuestSpaceIdV1TemplateSpaceJsonKey() {
  return ['k', '/k/guest/:guestSpaceId/v1/template/space.json', 'POST'] as const
}

export function usePostKGuestGuestSpaceIdV1TemplateSpaceJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.k.guest)[':guestSpaceId']['v1']['template']['space.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKGuestGuestSpaceIdV1TemplateSpaceJsonKey()
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
            (typeof client.k.guest)[':guestSpaceId']['v1']['template']['space.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client.k.guest[':guestSpaceId'].v1.template['space.json'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostKGuestV1SearchJsonKey() {
  return ['k', '/k/guest/v1/search.json', 'POST'] as const
}

export function usePostKGuestV1SearchJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.guest.v1)['search.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.guest.v1)['search.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKGuestV1SearchJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.guest.v1)['search.json']['$post']> },
      ) => parseResponse(client.k.guest.v1['search.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1AppJsonKey(
  args: InferRequestType<(typeof client.k.v1)['app.json']['$get']>,
) {
  return ['k', '/k/v1/app.json', args] as const
}

export function useGetKV1AppJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1)['app.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['app.json']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKV1AppJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['app.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1['app.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1AppJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1)['app.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['app.json']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKV1AppJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['app.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1['app.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKV1AppAclJsonKey(
  args: InferRequestType<(typeof client.k.v1.app)['acl.json']['$get']>,
) {
  return ['k', '/k/v1/app/acl.json', args] as const
}

export function useGetKV1AppAclJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app)['acl.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['acl.json']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKV1AppAclJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['acl.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.app['acl.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1AppAclJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app)['acl.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['acl.json']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKV1AppAclJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['acl.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.app['acl.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKV1AppAclJsonKey() {
  return ['k', '/k/v1/app/acl.json', 'PUT'] as const
}

export function usePutKV1AppAclJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['acl.json']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.app)['acl.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1AppAclJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1.app)['acl.json']['$put']> },
      ) => parseResponse(client.k.v1.app['acl.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1AppActionsJsonKey(
  args: InferRequestType<(typeof client.k.v1.app)['actions.json']['$get']>,
) {
  return ['k', '/k/v1/app/actions.json', args] as const
}

export function useGetKV1AppActionsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app)['actions.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app)['actions.json']['$get']>>
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
        ? getGetKV1AppActionsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app)['actions.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.app['actions.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1AppActionsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app)['actions.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app)['actions.json']['$get']>>
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
        ? getGetKV1AppActionsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app)['actions.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.app['actions.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKV1AppAdminNotesJsonKey(
  args: InferRequestType<(typeof client.k.v1.app)['adminNotes.json']['$get']>,
) {
  return ['k', '/k/v1/app/adminNotes.json', args] as const
}

export function useGetKV1AppAdminNotesJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app)['adminNotes.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app)['adminNotes.json']['$get']>>
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
        ? getGetKV1AppAdminNotesJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app)['adminNotes.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.app['adminNotes.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1AppAdminNotesJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app)['adminNotes.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app)['adminNotes.json']['$get']>>
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
        ? getGetKV1AppAdminNotesJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app)['adminNotes.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.app['adminNotes.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKV1AppCustomizeJsonKey(
  args: InferRequestType<(typeof client.k.v1.app)['customize.json']['$get']>,
) {
  return ['k', '/k/v1/app/customize.json', args] as const
}

export function useGetKV1AppCustomizeJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app)['customize.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app)['customize.json']['$get']>>
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
        ? getGetKV1AppCustomizeJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app)['customize.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.app['customize.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1AppCustomizeJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app)['customize.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app)['customize.json']['$get']>>
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
        ? getGetKV1AppCustomizeJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app)['customize.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.app['customize.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKV1AppFormFieldsJsonKey(
  args: InferRequestType<(typeof client.k.v1.app.form)['fields.json']['$get']>,
) {
  return ['k', '/k/v1/app/form/fields.json', args] as const
}

export function useGetKV1AppFormFieldsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app.form)['fields.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app.form)['fields.json']['$get']>>
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
        ? getGetKV1AppFormFieldsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app.form)['fields.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.app.form['fields.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1AppFormFieldsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app.form)['fields.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app.form)['fields.json']['$get']>>
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
        ? getGetKV1AppFormFieldsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app.form)['fields.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.app.form['fields.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKV1AppFormLayoutJsonKey(
  args: InferRequestType<(typeof client.k.v1.app.form)['layout.json']['$get']>,
) {
  return ['k', '/k/v1/app/form/layout.json', args] as const
}

export function useGetKV1AppFormLayoutJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app.form)['layout.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app.form)['layout.json']['$get']>>
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
        ? getGetKV1AppFormLayoutJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app.form)['layout.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.app.form['layout.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1AppFormLayoutJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app.form)['layout.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app.form)['layout.json']['$get']>>
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
        ? getGetKV1AppFormLayoutJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app.form)['layout.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.app.form['layout.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKV1AppMoveJsonKey() {
  return ['k', '/k/v1/app/move.json', 'POST'] as const
}

export function usePostKV1AppMoveJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['move.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.app)['move.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKV1AppMoveJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1.app)['move.json']['$post']> },
      ) => parseResponse(client.k.v1.app['move.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1AppNotificationsGeneralJsonKey(
  args: InferRequestType<(typeof client.k.v1.app.notifications)['general.json']['$get']>,
) {
  return ['k', '/k/v1/app/notifications/general.json', args] as const
}

export function useGetKV1AppNotificationsGeneralJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app.notifications)['general.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app.notifications)['general.json']['$get']>>
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
        ? getGetKV1AppNotificationsGeneralJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app.notifications)['general.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.v1.app.notifications['general.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1AppNotificationsGeneralJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app.notifications)['general.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app.notifications)['general.json']['$get']>>
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
        ? getGetKV1AppNotificationsGeneralJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app.notifications)['general.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.v1.app.notifications['general.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKV1AppNotificationsPerRecordJsonKey(
  args: InferRequestType<(typeof client.k.v1.app.notifications)['perRecord.json']['$get']>,
) {
  return ['k', '/k/v1/app/notifications/perRecord.json', args] as const
}

export function useGetKV1AppNotificationsPerRecordJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app.notifications)['perRecord.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app.notifications)['perRecord.json']['$get']>>
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
        ? getGetKV1AppNotificationsPerRecordJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app.notifications)['perRecord.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.v1.app.notifications['perRecord.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1AppNotificationsPerRecordJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app.notifications)['perRecord.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app.notifications)['perRecord.json']['$get']>>
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
        ? getGetKV1AppNotificationsPerRecordJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app.notifications)['perRecord.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.v1.app.notifications['perRecord.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKV1AppNotificationsReminderJsonKey(
  args: InferRequestType<(typeof client.k.v1.app.notifications)['reminder.json']['$get']>,
) {
  return ['k', '/k/v1/app/notifications/reminder.json', args] as const
}

export function useGetKV1AppNotificationsReminderJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app.notifications)['reminder.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app.notifications)['reminder.json']['$get']>>
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
        ? getGetKV1AppNotificationsReminderJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app.notifications)['reminder.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.v1.app.notifications['reminder.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1AppNotificationsReminderJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app.notifications)['reminder.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app.notifications)['reminder.json']['$get']>>
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
        ? getGetKV1AppNotificationsReminderJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app.notifications)['reminder.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.v1.app.notifications['reminder.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKV1AppPluginsJsonKey(
  args: InferRequestType<(typeof client.k.v1.app)['plugins.json']['$get']>,
) {
  return ['k', '/k/v1/app/plugins.json', args] as const
}

export function useGetKV1AppPluginsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app)['plugins.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app)['plugins.json']['$get']>>
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
        ? getGetKV1AppPluginsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app)['plugins.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.app['plugins.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1AppPluginsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app)['plugins.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app)['plugins.json']['$get']>>
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
        ? getGetKV1AppPluginsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app)['plugins.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.app['plugins.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKV1AppReportsJsonKey(
  args: InferRequestType<(typeof client.k.v1.app)['reports.json']['$get']>,
) {
  return ['k', '/k/v1/app/reports.json', args] as const
}

export function useGetKV1AppReportsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app)['reports.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app)['reports.json']['$get']>>
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
        ? getGetKV1AppReportsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app)['reports.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.app['reports.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1AppReportsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app)['reports.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app)['reports.json']['$get']>>
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
        ? getGetKV1AppReportsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app)['reports.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.app['reports.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKV1AppSettingsJsonKey(
  args: InferRequestType<(typeof client.k.v1.app)['settings.json']['$get']>,
) {
  return ['k', '/k/v1/app/settings.json', args] as const
}

export function useGetKV1AppSettingsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app)['settings.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app)['settings.json']['$get']>>
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
        ? getGetKV1AppSettingsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app)['settings.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.app['settings.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1AppSettingsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app)['settings.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app)['settings.json']['$get']>>
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
        ? getGetKV1AppSettingsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.app)['settings.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.app['settings.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKV1AppStatusJsonKey(
  args: InferRequestType<(typeof client.k.v1.app)['status.json']['$get']>,
) {
  return ['k', '/k/v1/app/status.json', args] as const
}

export function useGetKV1AppStatusJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app)['status.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['status.json']['$get']>>>
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
        ? getGetKV1AppStatusJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['status.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.app['status.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1AppStatusJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app)['status.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['status.json']['$get']>>>
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
        ? getGetKV1AppStatusJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['status.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.app['status.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKV1AppViewsJsonKey(
  args: InferRequestType<(typeof client.k.v1.app)['views.json']['$get']>,
) {
  return ['k', '/k/v1/app/views.json', args] as const
}

export function useGetKV1AppViewsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app)['views.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['views.json']['$get']>>>
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
        ? getGetKV1AppViewsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['views.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.app['views.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1AppViewsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.app)['views.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['views.json']['$get']>>>
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
        ? getGetKV1AppViewsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.app)['views.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.app['views.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKV1AppsJsonKey(
  args: InferRequestType<(typeof client.k.v1)['apps.json']['$get']>,
) {
  return ['k', '/k/v1/apps.json', args] as const
}

export function useGetKV1AppsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1)['apps.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['apps.json']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKV1AppsJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['apps.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1['apps.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1AppsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1)['apps.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['apps.json']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKV1AppsJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['apps.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1['apps.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKV1AppsStatisticsJsonKey(
  args: InferRequestType<(typeof client.k.v1.apps)['statistics.json']['$get']>,
) {
  return ['k', '/k/v1/apps/statistics.json', args] as const
}

export function useGetKV1AppsStatisticsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.apps)['statistics.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.apps)['statistics.json']['$get']>>
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
        ? getGetKV1AppsStatisticsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.apps)['statistics.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.apps['statistics.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1AppsStatisticsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.apps)['statistics.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.apps)['statistics.json']['$get']>>
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
        ? getGetKV1AppsStatisticsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.apps)['statistics.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.apps['statistics.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKV1BulkRequestJsonKey() {
  return ['k', '/k/v1/bulkRequest.json', 'POST'] as const
}

export function usePostKV1BulkRequestJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['bulkRequest.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1)['bulkRequest.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKV1BulkRequestJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1)['bulkRequest.json']['$post']> },
      ) => parseResponse(client.k.v1['bulkRequest.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1FieldAclJsonKey(
  args: InferRequestType<(typeof client.k.v1.field)['acl.json']['$get']>,
) {
  return ['k', '/k/v1/field/acl.json', args] as const
}

export function useGetKV1FieldAclJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.field)['acl.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.field)['acl.json']['$get']>>>
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
        ? getGetKV1FieldAclJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.field)['acl.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.field['acl.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1FieldAclJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.field)['acl.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.field)['acl.json']['$get']>>>
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
        ? getGetKV1FieldAclJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.field)['acl.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.field['acl.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKV1FieldAclJsonKey() {
  return ['k', '/k/v1/field/acl.json', 'PUT'] as const
}

export function usePutKV1FieldAclJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.field)['acl.json']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.field)['acl.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1FieldAclJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1.field)['acl.json']['$put']> },
      ) => parseResponse(client.k.v1.field['acl.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1FileJsonKey(
  args: InferRequestType<(typeof client.k.v1)['file.json']['$get']>,
) {
  return ['k', '/k/v1/file.json', args] as const
}

export function useGetKV1FileJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1)['file.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['file.json']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKV1FileJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['file.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1['file.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1FileJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1)['file.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['file.json']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKV1FileJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['file.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1['file.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKV1FileJsonKey() {
  return ['k', '/k/v1/file.json', 'POST'] as const
}

export function usePostKV1FileJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['file.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1)['file.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKV1FileJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1)['file.json']['$post']> },
      ) => parseResponse(client.k.v1['file.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1FormJsonKey(
  args: InferRequestType<(typeof client.k.v1)['form.json']['$get']>,
) {
  return ['k', '/k/v1/form.json', args] as const
}

export function useGetKV1FormJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1)['form.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['form.json']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKV1FormJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['form.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1['form.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1FormJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1)['form.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['form.json']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKV1FormJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['form.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1['form.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKV1GuestsJsonKey() {
  return ['k', '/k/v1/guests.json', 'POST'] as const
}

export function usePostKV1GuestsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['guests.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1)['guests.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKV1GuestsJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1)['guests.json']['$post']> },
      ) => parseResponse(client.k.v1['guests.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteKV1GuestsJsonKey() {
  return ['k', '/k/v1/guests.json', 'DELETE'] as const
}

export function useDeleteKV1GuestsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['guests.json']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1)['guests.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKV1GuestsJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1)['guests.json']['$delete']> },
      ) => parseResponse(client.k.v1['guests.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutKV1PluginJsonKey() {
  return ['k', '/k/v1/plugin.json', 'PUT'] as const
}

export function usePutKV1PluginJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['plugin.json']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1)['plugin.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1PluginJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1)['plugin.json']['$put']> },
      ) => parseResponse(client.k.v1['plugin.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKV1PluginJsonKey() {
  return ['k', '/k/v1/plugin.json', 'POST'] as const
}

export function usePostKV1PluginJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['plugin.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1)['plugin.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKV1PluginJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1)['plugin.json']['$post']> },
      ) => parseResponse(client.k.v1['plugin.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteKV1PluginJsonKey() {
  return ['k', '/k/v1/plugin.json', 'DELETE'] as const
}

export function useDeleteKV1PluginJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['plugin.json']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1)['plugin.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKV1PluginJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1)['plugin.json']['$delete']> },
      ) => parseResponse(client.k.v1['plugin.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1PluginAppsJsonKey(
  args: InferRequestType<(typeof client.k.v1.plugin)['apps.json']['$get']>,
) {
  return ['k', '/k/v1/plugin/apps.json', args] as const
}

export function useGetKV1PluginAppsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.plugin)['apps.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.plugin)['apps.json']['$get']>>
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
        ? getGetKV1PluginAppsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.plugin)['apps.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.plugin['apps.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1PluginAppsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.plugin)['apps.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.plugin)['apps.json']['$get']>>
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
        ? getGetKV1PluginAppsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.plugin)['apps.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.plugin['apps.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKV1PluginsJsonKey(
  args: InferRequestType<(typeof client.k.v1)['plugins.json']['$get']>,
) {
  return ['k', '/k/v1/plugins.json', args] as const
}

export function useGetKV1PluginsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1)['plugins.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['plugins.json']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKV1PluginsJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['plugins.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1['plugins.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1PluginsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1)['plugins.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['plugins.json']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKV1PluginsJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['plugins.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1['plugins.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKV1PluginsRequiredJsonKey(
  args: InferRequestType<(typeof client.k.v1.plugins)['required.json']['$get']>,
) {
  return ['k', '/k/v1/plugins/required.json', args] as const
}

export function useGetKV1PluginsRequiredJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.plugins)['required.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.plugins)['required.json']['$get']>>
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
        ? getGetKV1PluginsRequiredJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.plugins)['required.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.plugins['required.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1PluginsRequiredJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.plugins)['required.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.plugins)['required.json']['$get']>>
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
        ? getGetKV1PluginsRequiredJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.plugins)['required.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.plugins['required.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKV1PreviewAppJsonKey() {
  return ['k', '/k/v1/preview/app.json', 'POST'] as const
}

export function usePostKV1PreviewAppJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.preview)['app.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.preview)['app.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKV1PreviewAppJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1.preview)['app.json']['$post']> },
      ) => parseResponse(client.k.v1.preview['app.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1PreviewAppAclJsonKey(
  args: InferRequestType<(typeof client.k.v1.preview.app)['acl.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/acl.json', args] as const
}

export function useGetKV1PreviewAppAclJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['acl.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['acl.json']['$get']>>
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
        ? getGetKV1PreviewAppAclJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['acl.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.preview.app['acl.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1PreviewAppAclJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['acl.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['acl.json']['$get']>>
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
        ? getGetKV1PreviewAppAclJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['acl.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.preview.app['acl.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKV1PreviewAppAclJsonKey() {
  return ['k', '/k/v1/preview/app/acl.json', 'PUT'] as const
}

export function usePutKV1PreviewAppAclJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['acl.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.preview.app)['acl.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1PreviewAppAclJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1.preview.app)['acl.json']['$put']> },
      ) => parseResponse(client.k.v1.preview.app['acl.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1PreviewAppActionsJsonKey(
  args: InferRequestType<(typeof client.k.v1.preview.app)['actions.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/actions.json', args] as const
}

export function useGetKV1PreviewAppActionsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['actions.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['actions.json']['$get']>>
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
        ? getGetKV1PreviewAppActionsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['actions.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.preview.app['actions.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1PreviewAppActionsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['actions.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['actions.json']['$get']>>
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
        ? getGetKV1PreviewAppActionsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['actions.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.preview.app['actions.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKV1PreviewAppActionsJsonKey() {
  return ['k', '/k/v1/preview/app/actions.json', 'PUT'] as const
}

export function usePutKV1PreviewAppActionsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['actions.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.preview.app)['actions.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1PreviewAppActionsJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.k.v1.preview.app)['actions.json']['$put']> },
      ) => parseResponse(client.k.v1.preview.app['actions.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1PreviewAppAdminNotesJsonKey(
  args: InferRequestType<(typeof client.k.v1.preview.app)['adminNotes.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/adminNotes.json', args] as const
}

export function useGetKV1PreviewAppAdminNotesJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['adminNotes.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['adminNotes.json']['$get']>>
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
        ? getGetKV1PreviewAppAdminNotesJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['adminNotes.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.v1.preview.app['adminNotes.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1PreviewAppAdminNotesJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['adminNotes.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['adminNotes.json']['$get']>>
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
        ? getGetKV1PreviewAppAdminNotesJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['adminNotes.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.v1.preview.app['adminNotes.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKV1PreviewAppAdminNotesJsonKey() {
  return ['k', '/k/v1/preview/app/adminNotes.json', 'PUT'] as const
}

export function usePutKV1PreviewAppAdminNotesJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['adminNotes.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.preview.app)['adminNotes.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1PreviewAppAdminNotesJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.k.v1.preview.app)['adminNotes.json']['$put']> },
      ) => parseResponse(client.k.v1.preview.app['adminNotes.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1PreviewAppCustomizeJsonKey(
  args: InferRequestType<(typeof client.k.v1.preview.app)['customize.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/customize.json', args] as const
}

export function useGetKV1PreviewAppCustomizeJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['customize.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['customize.json']['$get']>>
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
        ? getGetKV1PreviewAppCustomizeJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['customize.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.v1.preview.app['customize.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1PreviewAppCustomizeJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['customize.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['customize.json']['$get']>>
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
        ? getGetKV1PreviewAppCustomizeJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['customize.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.v1.preview.app['customize.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKV1PreviewAppCustomizeJsonKey() {
  return ['k', '/k/v1/preview/app/customize.json', 'PUT'] as const
}

export function usePutKV1PreviewAppCustomizeJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['customize.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.preview.app)['customize.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1PreviewAppCustomizeJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.k.v1.preview.app)['customize.json']['$put']> },
      ) => parseResponse(client.k.v1.preview.app['customize.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1PreviewAppDeployJsonKey(
  args: InferRequestType<(typeof client.k.v1.preview.app)['deploy.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/deploy.json', args] as const
}

export function useGetKV1PreviewAppDeployJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['deploy.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['deploy.json']['$get']>>
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
        ? getGetKV1PreviewAppDeployJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['deploy.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.preview.app['deploy.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1PreviewAppDeployJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['deploy.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['deploy.json']['$get']>>
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
        ? getGetKV1PreviewAppDeployJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['deploy.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.preview.app['deploy.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKV1PreviewAppDeployJsonKey() {
  return ['k', '/k/v1/preview/app/deploy.json', 'POST'] as const
}

export function usePostKV1PreviewAppDeployJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['deploy.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.preview.app)['deploy.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKV1PreviewAppDeployJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.k.v1.preview.app)['deploy.json']['$post']> },
      ) => parseResponse(client.k.v1.preview.app['deploy.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1PreviewAppFormFieldsJsonKey(
  args: InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/form/fields.json', args] as const
}

export function useGetKV1PreviewAppFormFieldsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['fields.json']['$get']>>
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
        ? getGetKV1PreviewAppFormFieldsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['fields.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.v1.preview.app.form['fields.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1PreviewAppFormFieldsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['fields.json']['$get']>>
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
        ? getGetKV1PreviewAppFormFieldsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['fields.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.v1.preview.app.form['fields.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKV1PreviewAppFormFieldsJsonKey() {
  return ['k', '/k/v1/preview/app/form/fields.json', 'PUT'] as const
}

export function usePutKV1PreviewAppFormFieldsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['fields.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1PreviewAppFormFieldsJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$put']> },
      ) => parseResponse(client.k.v1.preview.app.form['fields.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKV1PreviewAppFormFieldsJsonKey() {
  return ['k', '/k/v1/preview/app/form/fields.json', 'POST'] as const
}

export function usePostKV1PreviewAppFormFieldsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['fields.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKV1PreviewAppFormFieldsJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$post']> },
      ) => parseResponse(client.k.v1.preview.app.form['fields.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteKV1PreviewAppFormFieldsJsonKey() {
  return ['k', '/k/v1/preview/app/form/fields.json', 'DELETE'] as const
}

export function useDeleteKV1PreviewAppFormFieldsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['fields.json']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKV1PreviewAppFormFieldsJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$delete']>
        },
      ) => parseResponse(client.k.v1.preview.app.form['fields.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1PreviewAppFormLayoutJsonKey(
  args: InferRequestType<(typeof client.k.v1.preview.app.form)['layout.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/form/layout.json', args] as const
}

export function useGetKV1PreviewAppFormLayoutJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app.form)['layout.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['layout.json']['$get']>>
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
        ? getGetKV1PreviewAppFormLayoutJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['layout.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.v1.preview.app.form['layout.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1PreviewAppFormLayoutJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app.form)['layout.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['layout.json']['$get']>>
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
        ? getGetKV1PreviewAppFormLayoutJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['layout.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.k.v1.preview.app.form['layout.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKV1PreviewAppFormLayoutJsonKey() {
  return ['k', '/k/v1/preview/app/form/layout.json', 'PUT'] as const
}

export function usePutKV1PreviewAppFormLayoutJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app.form)['layout.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.preview.app.form)['layout.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1PreviewAppFormLayoutJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.k.v1.preview.app.form)['layout.json']['$put']> },
      ) => parseResponse(client.k.v1.preview.app.form['layout.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1PreviewAppNotificationsGeneralJsonKey(
  args: InferRequestType<(typeof client.k.v1.preview.app.notifications)['general.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/notifications/general.json', args] as const
}

export function useGetKV1PreviewAppNotificationsGeneralJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app.notifications)['general.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.v1.preview.app.notifications)['general.json']['$get']>
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
        ? getGetKV1PreviewAppNotificationsGeneralJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.v1.preview.app.notifications)['general.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.k.v1.preview.app.notifications['general.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1PreviewAppNotificationsGeneralJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app.notifications)['general.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.v1.preview.app.notifications)['general.json']['$get']>
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
        ? getGetKV1PreviewAppNotificationsGeneralJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.v1.preview.app.notifications)['general.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.k.v1.preview.app.notifications['general.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKV1PreviewAppNotificationsGeneralJsonKey() {
  return ['k', '/k/v1/preview/app/notifications/general.json', 'PUT'] as const
}

export function usePutKV1PreviewAppNotificationsGeneralJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.k.v1.preview.app.notifications)['general.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1PreviewAppNotificationsGeneralJsonKey()
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
            (typeof client.k.v1.preview.app.notifications)['general.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.k.v1.preview.app.notifications['general.json'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKV1PreviewAppNotificationsPerRecordJsonKey(
  args: InferRequestType<(typeof client.k.v1.preview.app.notifications)['perRecord.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/notifications/perRecord.json', args] as const
}

export function useGetKV1PreviewAppNotificationsPerRecordJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app.notifications)['perRecord.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.v1.preview.app.notifications)['perRecord.json']['$get']>
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
        ? getGetKV1PreviewAppNotificationsPerRecordJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.v1.preview.app.notifications)['perRecord.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.k.v1.preview.app.notifications['perRecord.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1PreviewAppNotificationsPerRecordJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app.notifications)['perRecord.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.v1.preview.app.notifications)['perRecord.json']['$get']>
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
        ? getGetKV1PreviewAppNotificationsPerRecordJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.v1.preview.app.notifications)['perRecord.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.k.v1.preview.app.notifications['perRecord.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKV1PreviewAppNotificationsPerRecordJsonKey() {
  return ['k', '/k/v1/preview/app/notifications/perRecord.json', 'PUT'] as const
}

export function usePutKV1PreviewAppNotificationsPerRecordJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.k.v1.preview.app.notifications)['perRecord.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1PreviewAppNotificationsPerRecordJsonKey()
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
            (typeof client.k.v1.preview.app.notifications)['perRecord.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.k.v1.preview.app.notifications['perRecord.json'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKV1PreviewAppNotificationsReminderJsonKey(
  args: InferRequestType<(typeof client.k.v1.preview.app.notifications)['reminder.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/notifications/reminder.json', args] as const
}

export function useGetKV1PreviewAppNotificationsReminderJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app.notifications)['reminder.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.v1.preview.app.notifications)['reminder.json']['$get']>
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
        ? getGetKV1PreviewAppNotificationsReminderJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.v1.preview.app.notifications)['reminder.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.k.v1.preview.app.notifications['reminder.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1PreviewAppNotificationsReminderJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app.notifications)['reminder.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.v1.preview.app.notifications)['reminder.json']['$get']>
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
        ? getGetKV1PreviewAppNotificationsReminderJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.k.v1.preview.app.notifications)['reminder.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.k.v1.preview.app.notifications['reminder.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKV1PreviewAppNotificationsReminderJsonKey() {
  return ['k', '/k/v1/preview/app/notifications/reminder.json', 'PUT'] as const
}

export function usePutKV1PreviewAppNotificationsReminderJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.k.v1.preview.app.notifications)['reminder.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1PreviewAppNotificationsReminderJsonKey()
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
            (typeof client.k.v1.preview.app.notifications)['reminder.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.k.v1.preview.app.notifications['reminder.json'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKV1PreviewAppPluginsJsonKey(
  args: InferRequestType<(typeof client.k.v1.preview.app)['plugins.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/plugins.json', args] as const
}

export function useGetKV1PreviewAppPluginsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['plugins.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['plugins.json']['$get']>>
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
        ? getGetKV1PreviewAppPluginsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['plugins.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.preview.app['plugins.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1PreviewAppPluginsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['plugins.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['plugins.json']['$get']>>
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
        ? getGetKV1PreviewAppPluginsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['plugins.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.preview.app['plugins.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKV1PreviewAppPluginsJsonKey() {
  return ['k', '/k/v1/preview/app/plugins.json', 'POST'] as const
}

export function usePostKV1PreviewAppPluginsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['plugins.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.preview.app)['plugins.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKV1PreviewAppPluginsJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.k.v1.preview.app)['plugins.json']['$post']> },
      ) => parseResponse(client.k.v1.preview.app['plugins.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1PreviewAppReportsJsonKey(
  args: InferRequestType<(typeof client.k.v1.preview.app)['reports.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/reports.json', args] as const
}

export function useGetKV1PreviewAppReportsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['reports.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['reports.json']['$get']>>
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
        ? getGetKV1PreviewAppReportsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['reports.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.preview.app['reports.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1PreviewAppReportsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['reports.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['reports.json']['$get']>>
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
        ? getGetKV1PreviewAppReportsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['reports.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.preview.app['reports.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKV1PreviewAppReportsJsonKey() {
  return ['k', '/k/v1/preview/app/reports.json', 'PUT'] as const
}

export function usePutKV1PreviewAppReportsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['reports.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.preview.app)['reports.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1PreviewAppReportsJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.k.v1.preview.app)['reports.json']['$put']> },
      ) => parseResponse(client.k.v1.preview.app['reports.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1PreviewAppSettingsJsonKey(
  args: InferRequestType<(typeof client.k.v1.preview.app)['settings.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/settings.json', args] as const
}

export function useGetKV1PreviewAppSettingsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['settings.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['settings.json']['$get']>>
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
        ? getGetKV1PreviewAppSettingsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['settings.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.preview.app['settings.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1PreviewAppSettingsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['settings.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['settings.json']['$get']>>
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
        ? getGetKV1PreviewAppSettingsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['settings.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.preview.app['settings.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKV1PreviewAppSettingsJsonKey() {
  return ['k', '/k/v1/preview/app/settings.json', 'PUT'] as const
}

export function usePutKV1PreviewAppSettingsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['settings.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.preview.app)['settings.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1PreviewAppSettingsJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.k.v1.preview.app)['settings.json']['$put']> },
      ) => parseResponse(client.k.v1.preview.app['settings.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1PreviewAppStatusJsonKey(
  args: InferRequestType<(typeof client.k.v1.preview.app)['status.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/status.json', args] as const
}

export function useGetKV1PreviewAppStatusJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['status.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['status.json']['$get']>>
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
        ? getGetKV1PreviewAppStatusJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['status.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.preview.app['status.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1PreviewAppStatusJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['status.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['status.json']['$get']>>
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
        ? getGetKV1PreviewAppStatusJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['status.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.preview.app['status.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKV1PreviewAppStatusJsonKey() {
  return ['k', '/k/v1/preview/app/status.json', 'PUT'] as const
}

export function usePutKV1PreviewAppStatusJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['status.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.preview.app)['status.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1PreviewAppStatusJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1.preview.app)['status.json']['$put']> },
      ) => parseResponse(client.k.v1.preview.app['status.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1PreviewAppViewsJsonKey(
  args: InferRequestType<(typeof client.k.v1.preview.app)['views.json']['$get']>,
) {
  return ['k', '/k/v1/preview/app/views.json', args] as const
}

export function useGetKV1PreviewAppViewsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['views.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['views.json']['$get']>>
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
        ? getGetKV1PreviewAppViewsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['views.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.preview.app['views.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1PreviewAppViewsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.app)['views.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['views.json']['$get']>>
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
        ? getGetKV1PreviewAppViewsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.app)['views.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.preview.app['views.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKV1PreviewAppViewsJsonKey() {
  return ['k', '/k/v1/preview/app/views.json', 'PUT'] as const
}

export function usePutKV1PreviewAppViewsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.app)['views.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.preview.app)['views.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1PreviewAppViewsJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1.preview.app)['views.json']['$put']> },
      ) => parseResponse(client.k.v1.preview.app['views.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1PreviewFieldAclJsonKey(
  args: InferRequestType<(typeof client.k.v1.preview.field)['acl.json']['$get']>,
) {
  return ['k', '/k/v1/preview/field/acl.json', args] as const
}

export function useGetKV1PreviewFieldAclJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.field)['acl.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.field)['acl.json']['$get']>>
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
        ? getGetKV1PreviewFieldAclJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.field)['acl.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.preview.field['acl.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1PreviewFieldAclJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.field)['acl.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.field)['acl.json']['$get']>>
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
        ? getGetKV1PreviewFieldAclJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.field)['acl.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.preview.field['acl.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKV1PreviewFieldAclJsonKey() {
  return ['k', '/k/v1/preview/field/acl.json', 'PUT'] as const
}

export function usePutKV1PreviewFieldAclJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.field)['acl.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.preview.field)['acl.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1PreviewFieldAclJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1.preview.field)['acl.json']['$put']> },
      ) => parseResponse(client.k.v1.preview.field['acl.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1PreviewFormJsonKey(
  args: InferRequestType<(typeof client.k.v1.preview)['form.json']['$get']>,
) {
  return ['k', '/k/v1/preview/form.json', args] as const
}

export function useGetKV1PreviewFormJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview)['form.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview)['form.json']['$get']>>
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
        ? getGetKV1PreviewFormJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview)['form.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.preview['form.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1PreviewFormJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview)['form.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview)['form.json']['$get']>>
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
        ? getGetKV1PreviewFormJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview)['form.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.preview['form.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKV1PreviewRecordAclJsonKey(
  args: InferRequestType<(typeof client.k.v1.preview.record)['acl.json']['$get']>,
) {
  return ['k', '/k/v1/preview/record/acl.json', args] as const
}

export function useGetKV1PreviewRecordAclJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.record)['acl.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.record)['acl.json']['$get']>>
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
        ? getGetKV1PreviewRecordAclJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.record)['acl.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.preview.record['acl.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1PreviewRecordAclJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.preview.record)['acl.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.record)['acl.json']['$get']>>
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
        ? getGetKV1PreviewRecordAclJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.preview.record)['acl.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.preview.record['acl.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKV1PreviewRecordAclJsonKey() {
  return ['k', '/k/v1/preview/record/acl.json', 'PUT'] as const
}

export function usePutKV1PreviewRecordAclJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.preview.record)['acl.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.preview.record)['acl.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1PreviewRecordAclJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1.preview.record)['acl.json']['$put']> },
      ) => parseResponse(client.k.v1.preview.record['acl.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1RecordJsonKey(
  args: InferRequestType<(typeof client.k.v1)['record.json']['$get']>,
) {
  return ['k', '/k/v1/record.json', args] as const
}

export function useGetKV1RecordJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1)['record.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['record.json']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKV1RecordJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['record.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1['record.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1RecordJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1)['record.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['record.json']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKV1RecordJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['record.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1['record.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKV1RecordJsonKey() {
  return ['k', '/k/v1/record.json', 'PUT'] as const
}

export function usePutKV1RecordJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['record.json']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1)['record.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1RecordJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1)['record.json']['$put']> },
      ) => parseResponse(client.k.v1['record.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKV1RecordJsonKey() {
  return ['k', '/k/v1/record.json', 'POST'] as const
}

export function usePostKV1RecordJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['record.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1)['record.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKV1RecordJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1)['record.json']['$post']> },
      ) => parseResponse(client.k.v1['record.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1RecordAclJsonKey(
  args: InferRequestType<(typeof client.k.v1.record)['acl.json']['$get']>,
) {
  return ['k', '/k/v1/record/acl.json', args] as const
}

export function useGetKV1RecordAclJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.record)['acl.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.record)['acl.json']['$get']>>>
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
        ? getGetKV1RecordAclJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.record)['acl.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.record['acl.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1RecordAclJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.record)['acl.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.record)['acl.json']['$get']>>>
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
        ? getGetKV1RecordAclJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.record)['acl.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.record['acl.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKV1RecordAclJsonKey() {
  return ['k', '/k/v1/record/acl.json', 'PUT'] as const
}

export function usePutKV1RecordAclJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.record)['acl.json']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.record)['acl.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1RecordAclJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1.record)['acl.json']['$put']> },
      ) => parseResponse(client.k.v1.record['acl.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutKV1RecordAssigneesJsonKey() {
  return ['k', '/k/v1/record/assignees.json', 'PUT'] as const
}

export function usePutKV1RecordAssigneesJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.record)['assignees.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.record)['assignees.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1RecordAssigneesJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1.record)['assignees.json']['$put']> },
      ) => parseResponse(client.k.v1.record['assignees.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKV1RecordAsyncTokenJsonKey() {
  return ['k', '/k/v1/record/async/token.json', 'POST'] as const
}

export function usePostKV1RecordAsyncTokenJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.record.async)['token.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.record.async)['token.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKV1RecordAsyncTokenJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.k.v1.record.async)['token.json']['$post']> },
      ) => parseResponse(client.k.v1.record.async['token.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKV1RecordCommentJsonKey() {
  return ['k', '/k/v1/record/comment.json', 'POST'] as const
}

export function usePostKV1RecordCommentJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.record)['comment.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.record)['comment.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKV1RecordCommentJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1.record)['comment.json']['$post']> },
      ) => parseResponse(client.k.v1.record['comment.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteKV1RecordCommentJsonKey() {
  return ['k', '/k/v1/record/comment.json', 'DELETE'] as const
}

export function useDeleteKV1RecordCommentJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.record)['comment.json']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.record)['comment.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKV1RecordCommentJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1.record)['comment.json']['$delete']> },
      ) => parseResponse(client.k.v1.record['comment.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1RecordCommentsJsonKey(
  args: InferRequestType<(typeof client.k.v1.record)['comments.json']['$get']>,
) {
  return ['k', '/k/v1/record/comments.json', args] as const
}

export function useGetKV1RecordCommentsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.record)['comments.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.record)['comments.json']['$get']>>
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
        ? getGetKV1RecordCommentsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.record)['comments.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.record['comments.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1RecordCommentsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.record)['comments.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.record)['comments.json']['$get']>>
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
        ? getGetKV1RecordCommentsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.record)['comments.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.record['comments.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKV1RecordStatusJsonKey() {
  return ['k', '/k/v1/record/status.json', 'PUT'] as const
}

export function usePutKV1RecordStatusJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.record)['status.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.record)['status.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1RecordStatusJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1.record)['status.json']['$put']> },
      ) => parseResponse(client.k.v1.record['status.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1RecordsJsonKey(
  args: InferRequestType<(typeof client.k.v1)['records.json']['$get']>,
) {
  return ['k', '/k/v1/records.json', args] as const
}

export function useGetKV1RecordsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1)['records.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['records.json']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKV1RecordsJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['records.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1['records.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1RecordsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1)['records.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['records.json']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKV1RecordsJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['records.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1['records.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKV1RecordsJsonKey() {
  return ['k', '/k/v1/records.json', 'PUT'] as const
}

export function usePutKV1RecordsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['records.json']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1)['records.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1RecordsJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1)['records.json']['$put']> },
      ) => parseResponse(client.k.v1['records.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKV1RecordsJsonKey() {
  return ['k', '/k/v1/records.json', 'POST'] as const
}

export function usePostKV1RecordsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['records.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1)['records.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKV1RecordsJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1)['records.json']['$post']> },
      ) => parseResponse(client.k.v1['records.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteKV1RecordsJsonKey() {
  return ['k', '/k/v1/records.json', 'DELETE'] as const
}

export function useDeleteKV1RecordsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['records.json']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1)['records.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKV1RecordsJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1)['records.json']['$delete']> },
      ) => parseResponse(client.k.v1['records.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1RecordsAclEvaluateJsonKey(
  args: InferRequestType<(typeof client.k.v1.records.acl)['evaluate.json']['$get']>,
) {
  return ['k', '/k/v1/records/acl/evaluate.json', args] as const
}

export function useGetKV1RecordsAclEvaluateJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.records.acl)['evaluate.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.records.acl)['evaluate.json']['$get']>>
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
        ? getGetKV1RecordsAclEvaluateJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.records.acl)['evaluate.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.records.acl['evaluate.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1RecordsAclEvaluateJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.records.acl)['evaluate.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.records.acl)['evaluate.json']['$get']>>
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
        ? getGetKV1RecordsAclEvaluateJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.records.acl)['evaluate.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.records.acl['evaluate.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKV1RecordsCursorJsonKey(
  args: InferRequestType<(typeof client.k.v1.records)['cursor.json']['$get']>,
) {
  return ['k', '/k/v1/records/cursor.json', args] as const
}

export function useGetKV1RecordsCursorJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.records)['cursor.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.records)['cursor.json']['$get']>>
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
        ? getGetKV1RecordsCursorJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.records)['cursor.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.records['cursor.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1RecordsCursorJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.records)['cursor.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.records)['cursor.json']['$get']>>
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
        ? getGetKV1RecordsCursorJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.records)['cursor.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.records['cursor.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKV1RecordsCursorJsonKey() {
  return ['k', '/k/v1/records/cursor.json', 'POST'] as const
}

export function usePostKV1RecordsCursorJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.records)['cursor.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.records)['cursor.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKV1RecordsCursorJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1.records)['cursor.json']['$post']> },
      ) => parseResponse(client.k.v1.records['cursor.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteKV1RecordsCursorJsonKey() {
  return ['k', '/k/v1/records/cursor.json', 'DELETE'] as const
}

export function useDeleteKV1RecordsCursorJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.records)['cursor.json']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.records)['cursor.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKV1RecordsCursorJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1.records)['cursor.json']['$delete']> },
      ) => parseResponse(client.k.v1.records['cursor.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutKV1RecordsStatusJsonKey() {
  return ['k', '/k/v1/records/status.json', 'PUT'] as const
}

export function usePutKV1RecordsStatusJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.records)['status.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.records)['status.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1RecordsStatusJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1.records)['status.json']['$put']> },
      ) => parseResponse(client.k.v1.records['status.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKV1SearchJsonKey() {
  return ['k', '/k/v1/search.json', 'POST'] as const
}

export function usePostKV1SearchJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['search.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1)['search.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKV1SearchJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1)['search.json']['$post']> },
      ) => parseResponse(client.k.v1['search.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1SpaceJsonKey(
  args: InferRequestType<(typeof client.k.v1)['space.json']['$get']>,
) {
  return ['k', '/k/v1/space.json', args] as const
}

export function useGetKV1SpaceJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1)['space.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['space.json']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKV1SpaceJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['space.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1['space.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1SpaceJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1)['space.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['space.json']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKV1SpaceJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['space.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1['space.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKV1SpaceJsonKey() {
  return ['k', '/k/v1/space.json', 'PUT'] as const
}

export function usePutKV1SpaceJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['space.json']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1)['space.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1SpaceJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1)['space.json']['$put']> },
      ) => parseResponse(client.k.v1['space.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteKV1SpaceJsonKey() {
  return ['k', '/k/v1/space.json', 'DELETE'] as const
}

export function useDeleteKV1SpaceJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1)['space.json']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1)['space.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKV1SpaceJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1)['space.json']['$delete']> },
      ) => parseResponse(client.k.v1['space.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutKV1SpaceBodyJsonKey() {
  return ['k', '/k/v1/space/body.json', 'PUT'] as const
}

export function usePutKV1SpaceBodyJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.space)['body.json']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.space)['body.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1SpaceBodyJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1.space)['body.json']['$put']> },
      ) => parseResponse(client.k.v1.space['body.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1SpaceMembersJsonKey(
  args: InferRequestType<(typeof client.k.v1.space)['members.json']['$get']>,
) {
  return ['k', '/k/v1/space/members.json', args] as const
}

export function useGetKV1SpaceMembersJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.space)['members.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.space)['members.json']['$get']>>
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
        ? getGetKV1SpaceMembersJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.space)['members.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.space['members.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1SpaceMembersJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.space)['members.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.space)['members.json']['$get']>>
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
        ? getGetKV1SpaceMembersJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.space)['members.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.space['members.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKV1SpaceMembersJsonKey() {
  return ['k', '/k/v1/space/members.json', 'PUT'] as const
}

export function usePutKV1SpaceMembersJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.space)['members.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.space)['members.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1SpaceMembersJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1.space)['members.json']['$put']> },
      ) => parseResponse(client.k.v1.space['members.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutKV1SpaceThreadJsonKey() {
  return ['k', '/k/v1/space/thread.json', 'PUT'] as const
}

export function usePutKV1SpaceThreadJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.k.v1.space)['thread.json']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.space)['thread.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKV1SpaceThreadJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1.space)['thread.json']['$put']> },
      ) => parseResponse(client.k.v1.space['thread.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKV1SpaceThreadJsonKey() {
  return ['k', '/k/v1/space/thread.json', 'POST'] as const
}

export function usePostKV1SpaceThreadJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.space)['thread.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.space)['thread.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKV1SpaceThreadJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1.space)['thread.json']['$post']> },
      ) => parseResponse(client.k.v1.space['thread.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKV1SpaceThreadCommentJsonKey() {
  return ['k', '/k/v1/space/thread/comment.json', 'POST'] as const
}

export function usePostKV1SpaceThreadCommentJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.space.thread)['comment.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.space.thread)['comment.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKV1SpaceThreadCommentJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.k.v1.space.thread)['comment.json']['$post']> },
      ) => parseResponse(client.k.v1.space.thread['comment.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKV1SpacesStatisticsJsonKey(
  args: InferRequestType<(typeof client.k.v1.spaces)['statistics.json']['$get']>,
) {
  return ['k', '/k/v1/spaces/statistics.json', args] as const
}

export function useGetKV1SpacesStatisticsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.spaces)['statistics.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.spaces)['statistics.json']['$get']>>
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
        ? getGetKV1SpacesStatisticsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.spaces)['statistics.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.spaces['statistics.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKV1SpacesStatisticsJson<TError = unknown>(
  args: InferRequestType<(typeof client.k.v1.spaces)['statistics.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.spaces)['statistics.json']['$get']>>
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
        ? getGetKV1SpacesStatisticsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.k.v1.spaces)['statistics.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.k.v1.spaces['statistics.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKV1TemplateSpaceJsonKey() {
  return ['k', '/k/v1/template/space.json', 'POST'] as const
}

export function usePostKV1TemplateSpaceJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.k.v1.template)['space.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.k.v1.template)['space.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKV1TemplateSpaceJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.k.v1.template)['space.json']['$post']> },
      ) => parseResponse(client.k.v1.template['space.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
