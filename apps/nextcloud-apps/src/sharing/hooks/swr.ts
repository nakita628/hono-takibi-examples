import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOcsKey() {
  return ['ocs'] as const
}

export function getGetOcsV2PhpAppsSharingApiV1RecipientsKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['recipients']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/recipients', keyArgs] as const
}

export function useGetOcsV2PhpAppsSharingApiV1Recipients<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['recipients']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['recipients']['$get']
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
        ? getGetOcsV2PhpAppsSharingApiV1RecipientsKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['recipients']['$get']
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
          client.ocs['v2.php'].apps.sharing.api.v1.recipients.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSharingApiV1Recipients<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['recipients']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['recipients']['$get']
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
        ? getGetOcsV2PhpAppsSharingApiV1RecipientsKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['recipients']['$get']
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
          client.ocs['v2.php'].apps.sharing.api.v1.recipients.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSharingApiV1SecretKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['secret']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/secret', keyArgs] as const
}

export function useGetOcsV2PhpAppsSharingApiV1Secret<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['secret']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['secret']['$get']
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
        ? getGetOcsV2PhpAppsSharingApiV1SecretKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['secret']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ocs['v2.php'].apps.sharing.api.v1.secret.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSharingApiV1Secret<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['secret']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['secret']['$get']
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
        ? getGetOcsV2PhpAppsSharingApiV1SecretKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['secret']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ocs['v2.php'].apps.sharing.api.v1.secret.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSharingApiV1ShareKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share', 'POST'] as const
}

export function usePostOcsV2PhpAppsSharingApiV1Share<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSharingApiV1ShareKey()
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
            (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share']['$post']
          >
        },
      ) => parseResponse(client.ocs['v2.php'].apps.sharing.api.v1.share.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSharingApiV1ShareIdStateKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share/:id/state', 'PUT'] as const
}

export function usePutOcsV2PhpAppsSharingApiV1ShareIdState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['state']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['state']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSharingApiV1ShareIdStateKey()
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
            (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['state']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].state.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSharingApiV1ShareIdUserStatusKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share/:id/user-status', 'PUT'] as const
}

export function usePutOcsV2PhpAppsSharingApiV1ShareIdUserStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['user-status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['user-status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSharingApiV1ShareIdUserStatusKey()
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
            (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['user-status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.sharing.api.v1.share[':id']['user-status'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSharingApiV1ShareIdSourceKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share/:id/source', 'POST'] as const
}

export function usePostOcsV2PhpAppsSharingApiV1ShareIdSource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['source']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['source']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSharingApiV1ShareIdSourceKey()
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
            (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['source']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].source.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSharingApiV1ShareIdSourceKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share/:id/source', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSharingApiV1ShareIdSource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['source']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['source']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSharingApiV1ShareIdSourceKey()
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
            (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['source']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].source.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSharingApiV1ShareIdRecipientKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share/:id/recipient', 'POST'] as const
}

export function usePostOcsV2PhpAppsSharingApiV1ShareIdRecipient<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSharingApiV1ShareIdRecipientKey()
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
            (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].recipient.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSharingApiV1ShareIdRecipientKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share/:id/recipient', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSharingApiV1ShareIdRecipient<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSharingApiV1ShareIdRecipientKey()
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
            (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].recipient.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSharingApiV1ShareIdRecipientSecretKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share/:id/recipient/secret', 'PUT'] as const
}

export function usePutOcsV2PhpAppsSharingApiV1ShareIdRecipientSecret<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['secret']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['secret']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSharingApiV1ShareIdRecipientSecretKey()
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
            (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['secret']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].recipient.secret.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSharingApiV1ShareIdPropertyKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share/:id/property', 'PUT'] as const
}

export function usePutOcsV2PhpAppsSharingApiV1ShareIdProperty<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['property']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['property']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSharingApiV1ShareIdPropertyKey()
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
            (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['property']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].property.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSharingApiV1ShareIdPermissionKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share/:id/permission', 'PUT'] as const
}

export function usePutOcsV2PhpAppsSharingApiV1ShareIdPermission<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['permission']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['permission']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSharingApiV1ShareIdPermissionKey()
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
            (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['permission']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].permission.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSharingApiV1ShareIdRecipientPermissionKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share/:id/recipient/permission', 'PUT'] as const
}

export function usePutOcsV2PhpAppsSharingApiV1ShareIdRecipientPermission<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['permission']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['permission']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSharingApiV1ShareIdRecipientPermissionKey()
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
            (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['permission']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].recipient.permission.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSharingApiV1ShareIdPermissionPresetKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share/:id/permission/preset', 'PUT'] as const
}

export function usePutOcsV2PhpAppsSharingApiV1ShareIdPermissionPreset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['permission']['preset']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['permission']['preset']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSharingApiV1ShareIdPermissionPresetKey()
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
            (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['permission']['preset']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].permission.preset.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSharingApiV1ShareIdKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share/:id', 'POST'] as const
}

export function usePostOcsV2PhpAppsSharingApiV1ShareId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSharingApiV1ShareIdKey()
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
            (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSharingApiV1ShareIdKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share/:id', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSharingApiV1ShareId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSharingApiV1ShareIdKey()
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
            (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSharingApiV1SharesKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['shares']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/shares', keyArgs] as const
}

export function useGetOcsV2PhpAppsSharingApiV1Shares<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['shares']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['shares']['$get']
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
        ? getGetOcsV2PhpAppsSharingApiV1SharesKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['shares']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ocs['v2.php'].apps.sharing.api.v1.shares.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSharingApiV1Shares<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['shares']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['shares']['$get']
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
        ? getGetOcsV2PhpAppsSharingApiV1SharesKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['shares']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ocs['v2.php'].apps.sharing.api.v1.shares.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
