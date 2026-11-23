import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1PaymentExperienceWebProfilesKey() {
  return ['v1', '/v1/payment-experience/web-profiles'] as const
}

export function useGetV1PaymentExperienceWebProfiles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['payment-experience']['web-profiles']['$get']>>
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
        ? getGetV1PaymentExperienceWebProfilesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['payment-experience']['web-profiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['payment-experience']['web-profiles'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentExperienceWebProfiles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['payment-experience']['web-profiles']['$get']>>
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
        ? getGetV1PaymentExperienceWebProfilesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['payment-experience']['web-profiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['payment-experience']['web-profiles'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1PaymentExperienceWebProfilesKey() {
  return ['v1', '/v1/payment-experience/web-profiles', 'POST'] as const
}

export function usePostV1PaymentExperienceWebProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['payment-experience']['web-profiles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['payment-experience']['web-profiles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentExperienceWebProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['payment-experience']['web-profiles']['$post']>
        },
      ) => parseResponse(client.v1['payment-experience']['web-profiles'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PaymentExperienceWebProfilesIdKey(
  args: InferRequestType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$get']>,
) {
  return ['v1', '/v1/payment-experience/web-profiles/:id', args] as const
}

export function useGetV1PaymentExperienceWebProfilesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$get']>
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
        ? getGetV1PaymentExperienceWebProfilesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['payment-experience']['web-profiles'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentExperienceWebProfilesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$get']>
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
        ? getGetV1PaymentExperienceWebProfilesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['payment-experience']['web-profiles'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1PaymentExperienceWebProfilesIdKey() {
  return ['v1', '/v1/payment-experience/web-profiles/:id', 'PUT'] as const
}

export function usePutV1PaymentExperienceWebProfilesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PaymentExperienceWebProfilesIdKey()
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
            (typeof client.v1)['payment-experience']['web-profiles'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['payment-experience']['web-profiles'][':id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1PaymentExperienceWebProfilesIdKey() {
  return ['v1', '/v1/payment-experience/web-profiles/:id', 'DELETE'] as const
}

export function useDeleteV1PaymentExperienceWebProfilesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PaymentExperienceWebProfilesIdKey()
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
            (typeof client.v1)['payment-experience']['web-profiles'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1['payment-experience']['web-profiles'][':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1PaymentExperienceWebProfilesIdKey() {
  return ['v1', '/v1/payment-experience/web-profiles/:id', 'PATCH'] as const
}

export function usePatchV1PaymentExperienceWebProfilesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PaymentExperienceWebProfilesIdKey()
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
            (typeof client.v1)['payment-experience']['web-profiles'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1['payment-experience']['web-profiles'][':id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
