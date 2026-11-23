import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCrmKey() {
  return ['crm'] as const
}

export function getGetCrmExtensionsCardsDev202609SampleResponseKey() {
  return ['crm', '/crm/extensions/cards-dev/2026-09/sample-response'] as const
}

export function useGetCrmExtensionsCardsDev202609SampleResponse<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.extensions)['cards-dev']['2026-09']['sample-response']['$get']
            >
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrmExtensionsCardsDev202609SampleResponseKey()
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
                (typeof client.crm.extensions)['cards-dev']['2026-09']['sample-response']['$get']
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
          client.crm.extensions['cards-dev']['2026-09']['sample-response'].$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmExtensionsCardsDev202609SampleResponse<
  TError = unknown,
>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.extensions)['cards-dev']['2026-09']['sample-response']['$get']
            >
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrmExtensionsCardsDev202609SampleResponseKey()
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
                (typeof client.crm.extensions)['cards-dev']['2026-09']['sample-response']['$get']
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
          client.crm.extensions['cards-dev']['2026-09']['sample-response'].$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCrmExtensionsCardsDev202609AppIdKey(
  args: InferRequestType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$get']>,
) {
  return ['crm', '/crm/extensions/cards-dev/2026-09/:appId', args] as const
}

export function useGetCrmExtensionsCardsDev202609AppId<TError = unknown>(
  args: InferRequestType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$get']>
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
        ? getGetCrmExtensionsCardsDev202609AppIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.crm.extensions['cards-dev']['2026-09'][':appId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmExtensionsCardsDev202609AppId<TError = unknown>(
  args: InferRequestType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$get']>
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
        ? getGetCrmExtensionsCardsDev202609AppIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.crm.extensions['cards-dev']['2026-09'][':appId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCrmExtensionsCardsDev202609AppIdKey() {
  return ['crm', '/crm/extensions/cards-dev/2026-09/:appId', 'POST'] as const
}

export function usePostCrmExtensionsCardsDev202609AppId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmExtensionsCardsDev202609AppIdKey()
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
            (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.extensions['cards-dev']['2026-09'][':appId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmExtensionsCardsDev202609AppIdViewsMigrateKey() {
  return ['crm', '/crm/extensions/cards-dev/2026-09/:appId/views/migrate', 'POST'] as const
}

export function usePostCrmExtensionsCardsDev202609AppIdViewsMigrate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['views']['migrate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['views']['migrate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmExtensionsCardsDev202609AppIdViewsMigrateKey()
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
            (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['views']['migrate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.extensions['cards-dev']['2026-09'][':appId'].views.migrate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCrmExtensionsCardsDev202609AppIdCardIdKey(
  args: InferRequestType<
    (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$get']
  >,
) {
  return ['crm', '/crm/extensions/cards-dev/2026-09/:appId/:cardId', args] as const
}

export function useGetCrmExtensionsCardsDev202609AppIdCardId<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$get']
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
        ? getGetCrmExtensionsCardsDev202609AppIdCardIdKey(args)
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
                (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$get']
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
          client.crm.extensions['cards-dev']['2026-09'][':appId'][':cardId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmExtensionsCardsDev202609AppIdCardId<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$get']
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
        ? getGetCrmExtensionsCardsDev202609AppIdCardIdKey(args)
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
                (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$get']
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
          client.crm.extensions['cards-dev']['2026-09'][':appId'][':cardId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCrmExtensionsCardsDev202609AppIdCardIdKey() {
  return ['crm', '/crm/extensions/cards-dev/2026-09/:appId/:cardId', 'DELETE'] as const
}

export function useDeleteCrmExtensionsCardsDev202609AppIdCardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrmExtensionsCardsDev202609AppIdCardIdKey()
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
            (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.crm.extensions['cards-dev']['2026-09'][':appId'][':cardId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCrmExtensionsCardsDev202609AppIdCardIdKey() {
  return ['crm', '/crm/extensions/cards-dev/2026-09/:appId/:cardId', 'PATCH'] as const
}

export function usePatchCrmExtensionsCardsDev202609AppIdCardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCrmExtensionsCardsDev202609AppIdCardIdKey()
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
            (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.crm.extensions['cards-dev']['2026-09'][':appId'][':cardId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
