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

export function getGetCrmImports202609Key(
  args: InferRequestType<(typeof client.crm.imports)['2026-09']['$get']>,
) {
  return ['crm', '/crm/imports/2026-09', args] as const
}

export function useGetCrmImports202609<TError = unknown>(
  args: InferRequestType<(typeof client.crm.imports)['2026-09']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.imports)['2026-09']['$get']>>>
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
        ? getGetCrmImports202609Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.imports)['2026-09']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.imports['2026-09'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmImports202609<TError = unknown>(
  args: InferRequestType<(typeof client.crm.imports)['2026-09']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.imports)['2026-09']['$get']>>>
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
        ? getGetCrmImports202609Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.imports)['2026-09']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.imports['2026-09'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCrmImports202609Key() {
  return ['crm', '/crm/imports/2026-09', 'POST'] as const
}

export function usePostCrmImports202609<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.imports)['2026-09']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.imports)['2026-09']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmImports202609Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.crm.imports)['2026-09']['$post']> },
      ) => parseResponse(client.crm.imports['2026-09'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrmImports202609ImportIdKey(
  args: InferRequestType<(typeof client.crm.imports)['2026-09'][':importId']['$get']>,
) {
  return ['crm', '/crm/imports/2026-09/:importId', args] as const
}

export function useGetCrmImports202609ImportId<TError = unknown>(
  args: InferRequestType<(typeof client.crm.imports)['2026-09'][':importId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['$get']>>
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
        ? getGetCrmImports202609ImportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crm.imports['2026-09'][':importId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmImports202609ImportId<TError = unknown>(
  args: InferRequestType<(typeof client.crm.imports)['2026-09'][':importId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['$get']>>
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
        ? getGetCrmImports202609ImportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crm.imports['2026-09'][':importId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCrmImports202609ImportIdCancelKey() {
  return ['crm', '/crm/imports/2026-09/:importId/cancel', 'POST'] as const
}

export function usePostCrmImports202609ImportIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.imports)['2026-09'][':importId']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmImports202609ImportIdCancelKey()
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
            (typeof client.crm.imports)['2026-09'][':importId']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(client.crm.imports['2026-09'][':importId'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrmImports202609ImportIdErrorsKey(
  args: InferRequestType<(typeof client.crm.imports)['2026-09'][':importId']['errors']['$get']>,
) {
  return ['crm', '/crm/imports/2026-09/:importId/errors', args] as const
}

export function useGetCrmImports202609ImportIdErrors<TError = unknown>(
  args: InferRequestType<(typeof client.crm.imports)['2026-09'][':importId']['errors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['errors']['$get']>
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
        ? getGetCrmImports202609ImportIdErrorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['errors']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crm.imports['2026-09'][':importId'].errors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmImports202609ImportIdErrors<TError = unknown>(
  args: InferRequestType<(typeof client.crm.imports)['2026-09'][':importId']['errors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['errors']['$get']>
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
        ? getGetCrmImports202609ImportIdErrorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['errors']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crm.imports['2026-09'][':importId'].errors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
