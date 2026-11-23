import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiV2AftermarketServicesCertificatesKey() {
  return ['api', '/api/v2/AftermarketServices/Certificates'] as const
}

export function useGetApiV2AftermarketServicesCertificates<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.AftermarketServices.Certificates.$get>>
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
        ? getGetApiV2AftermarketServicesCertificatesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.AftermarketServices.Certificates.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.AftermarketServices.Certificates.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AftermarketServicesCertificates<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.AftermarketServices.Certificates.$get>>
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
        ? getGetApiV2AftermarketServicesCertificatesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.AftermarketServices.Certificates.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.AftermarketServices.Certificates.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2AftermarketServicesECUsSerialNumberKey() {
  return ['api', '/api/v2/AftermarketServices/ECUs/:serialNumber', 'PUT'] as const
}

export function usePutApiV2AftermarketServicesECUsSerialNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.AftermarketServices.ECUs)[':serialNumber']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.AftermarketServices.ECUs)[':serialNumber']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2AftermarketServicesECUsSerialNumberKey()
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
            (typeof client.api.v2.AftermarketServices.ECUs)[':serialNumber']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.AftermarketServices.ECUs[':serialNumber'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2AftermarketServicesEnginesSerialNumberIQACodesKey(
  args: InferRequestType<
    (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$get']
  >,
) {
  return ['api', '/api/v2/AftermarketServices/Engines/:serialNumber/IQACodes', args] as const
}

export function useGetApiV2AftermarketServicesEnginesSerialNumberIQACodes<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$get']
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
        ? getGetApiV2AftermarketServicesEnginesSerialNumberIQACodesKey(args)
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
                (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$get']
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
          client.api.v2.AftermarketServices.Engines[':serialNumber'].IQACodes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AftermarketServicesEnginesSerialNumberIQACodes<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$get']
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
        ? getGetApiV2AftermarketServicesEnginesSerialNumberIQACodesKey(args)
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
                (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$get']
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
          client.api.v2.AftermarketServices.Engines[':serialNumber'].IQACodes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2AftermarketServicesEnginesSerialNumberIQACodesKey() {
  return ['api', '/api/v2/AftermarketServices/Engines/:serialNumber/IQACodes', 'PUT'] as const
}

export function usePutApiV2AftermarketServicesEnginesSerialNumberIQACodes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2AftermarketServicesEnginesSerialNumberIQACodesKey()
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
            (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.AftermarketServices.Engines[':serialNumber'].IQACodes.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2AftermarketServicesEnginesSerialNumberProductionDataKey(
  args: InferRequestType<
    (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['ProductionData']['$get']
  >,
) {
  return ['api', '/api/v2/AftermarketServices/Engines/:serialNumber/ProductionData', args] as const
}

export function useGetApiV2AftermarketServicesEnginesSerialNumberProductionData<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['ProductionData']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['ProductionData']['$get']
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
        ? getGetApiV2AftermarketServicesEnginesSerialNumberProductionDataKey(args)
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
                (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['ProductionData']['$get']
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
          client.api.v2.AftermarketServices.Engines[':serialNumber'].ProductionData.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AftermarketServicesEnginesSerialNumberProductionData<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['ProductionData']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['ProductionData']['$get']
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
        ? getGetApiV2AftermarketServicesEnginesSerialNumberProductionDataKey(args)
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
                (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['ProductionData']['$get']
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
          client.api.v2.AftermarketServices.Engines[':serialNumber'].ProductionData.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AftermarketServicesHelloKey() {
  return ['api', '/api/v2/AftermarketServices/Hello'] as const
}

export function useGetApiV2AftermarketServicesHello<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.AftermarketServices.Hello.$get>>
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
        ? getGetApiV2AftermarketServicesHelloKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.AftermarketServices.Hello.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.AftermarketServices.Hello.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AftermarketServicesHello<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.AftermarketServices.Hello.$get>>
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
        ? getGetApiV2AftermarketServicesHelloKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.AftermarketServices.Hello.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.AftermarketServices.Hello.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AftermarketServicesUserStatusesKey(
  args: InferRequestType<typeof client.api.v2.AftermarketServices.UserStatuses.$get>,
) {
  return ['api', '/api/v2/AftermarketServices/UserStatuses', args] as const
}

export function useGetApiV2AftermarketServicesUserStatuses<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.AftermarketServices.UserStatuses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.AftermarketServices.UserStatuses.$get>>
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
        ? getGetApiV2AftermarketServicesUserStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.AftermarketServices.UserStatuses.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.AftermarketServices.UserStatuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AftermarketServicesUserStatuses<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.AftermarketServices.UserStatuses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.AftermarketServices.UserStatuses.$get>>
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
        ? getGetApiV2AftermarketServicesUserStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.AftermarketServices.UserStatuses.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.AftermarketServices.UserStatuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2AftermarketServicesUserStatusesKey() {
  return ['api', '/api/v2/AftermarketServices/UserStatuses', 'PUT'] as const
}

export function usePutApiV2AftermarketServicesUserStatuses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.AftermarketServices.UserStatuses.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.AftermarketServices.UserStatuses.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2AftermarketServicesUserStatusesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.v2.AftermarketServices.UserStatuses.$put> },
      ) => parseResponse(client.api.v2.AftermarketServices.UserStatuses.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiV2AuthenticatedUsersUserIDTokensKey() {
  return ['api', '/api/v2/AuthenticatedUsers/:UserID/Tokens', 'PUT'] as const
}

export function usePutApiV2AuthenticatedUsersUserIDTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.AuthenticatedUsers)[':UserID']['Tokens']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.AuthenticatedUsers)[':UserID']['Tokens']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2AuthenticatedUsersUserIDTokensKey()
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
            (typeof client.api.v2.AuthenticatedUsers)[':UserID']['Tokens']['$put']
          >
        },
      ) =>
        parseResponse(client.api.v2.AuthenticatedUsers[':UserID'].Tokens.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2AuthenticationKey() {
  return ['api', '/api/v2/Authentication', 'POST'] as const
}

export function usePostApiV2Authentication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Authentication.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.Authentication.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2AuthenticationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.Authentication.$post> },
      ) => parseResponse(client.api.v2.Authentication.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2AuthenticationIsAliveKey() {
  return ['api', '/api/v2/Authentication/IsAlive'] as const
}

export function useGetApiV2AuthenticationIsAlive<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Authentication.IsAlive.$get>>>
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
        ? getGetApiV2AuthenticationIsAliveKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Authentication.IsAlive.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.Authentication.IsAlive.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AuthenticationIsAlive<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Authentication.IsAlive.$get>>>
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
        ? getGetApiV2AuthenticationIsAliveKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Authentication.IsAlive.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.Authentication.IsAlive.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2AuthenticationRequestPasswordResetKey() {
  return ['api', '/api/v2/Authentication/RequestPasswordReset', 'POST'] as const
}

export function usePostApiV2AuthenticationRequestPasswordReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Authentication.RequestPasswordReset.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.Authentication.RequestPasswordReset.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2AuthenticationRequestPasswordResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.api.v2.Authentication.RequestPasswordReset.$post>
        },
      ) =>
        parseResponse(client.api.v2.Authentication.RequestPasswordReset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2AuthenticationResetPaswordKey() {
  return ['api', '/api/v2/Authentication/ResetPasword', 'POST'] as const
}

export function usePostApiV2AuthenticationResetPasword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Authentication.ResetPasword.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.Authentication.ResetPasword.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2AuthenticationResetPaswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.Authentication.ResetPasword.$post> },
      ) => parseResponse(client.api.v2.Authentication.ResetPasword.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2AuthorizationCategoriesKey(
  args: InferRequestType<typeof client.api.v2.AuthorizationCategories.$get>,
) {
  return ['api', '/api/v2/AuthorizationCategories', args] as const
}

export function useGetApiV2AuthorizationCategories<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.AuthorizationCategories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.$get>>
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
        ? getGetApiV2AuthorizationCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.AuthorizationCategories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AuthorizationCategories<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.AuthorizationCategories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.$get>>
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
        ? getGetApiV2AuthorizationCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.AuthorizationCategories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2AuthorizationCategoriesKey() {
  return ['api', '/api/v2/AuthorizationCategories', 'POST'] as const
}

export function usePostApiV2AuthorizationCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.AuthorizationCategories.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2AuthorizationCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.AuthorizationCategories.$post> },
      ) => parseResponse(client.api.v2.AuthorizationCategories.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2AuthorizationCategoriesUsersKey(
  args: InferRequestType<typeof client.api.v2.AuthorizationCategories.Users.$get>,
) {
  return ['api', '/api/v2/AuthorizationCategories/Users', args] as const
}

export function useGetApiV2AuthorizationCategoriesUsers<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.AuthorizationCategories.Users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.Users.$get>>
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
        ? getGetApiV2AuthorizationCategoriesUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.Users.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.AuthorizationCategories.Users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AuthorizationCategoriesUsers<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.AuthorizationCategories.Users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.Users.$get>>
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
        ? getGetApiV2AuthorizationCategoriesUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.Users.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.AuthorizationCategories.Users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2AuthorizationCategoriesIdKey() {
  return ['api', '/api/v2/AuthorizationCategories/:id', 'PUT'] as const
}

export function usePutApiV2AuthorizationCategoriesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.AuthorizationCategories)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.AuthorizationCategories)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2AuthorizationCategoriesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.AuthorizationCategories)[':id']['$put']> },
      ) => parseResponse(client.api.v2.AuthorizationCategories[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2AuthorizationCategoriesIdKey() {
  return ['api', '/api/v2/AuthorizationCategories/:id', 'DELETE'] as const
}

export function useDeleteApiV2AuthorizationCategoriesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.AuthorizationCategories)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.AuthorizationCategories)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2AuthorizationCategoriesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.AuthorizationCategories)[':id']['$delete']>
        },
      ) => parseResponse(client.api.v2.AuthorizationCategories[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2AuthorizationCategoriesIdUsersUserIDKey() {
  return ['api', '/api/v2/AuthorizationCategories/:id/Users/:userID', 'POST'] as const
}

export function usePostApiV2AuthorizationCategoriesIdUsersUserID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.AuthorizationCategories)[':id']['Users'][':userID']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.AuthorizationCategories)[':id']['Users'][':userID']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2AuthorizationCategoriesIdUsersUserIDKey()
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
            (typeof client.api.v2.AuthorizationCategories)[':id']['Users'][':userID']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.AuthorizationCategories[':id'].Users[':userID'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2AuthorizationCategoriesIdUsersUserIDKey() {
  return ['api', '/api/v2/AuthorizationCategories/:id/Users/:userID', 'DELETE'] as const
}

export function useDeleteApiV2AuthorizationCategoriesIdUsersUserID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.AuthorizationCategories)[':id']['Users'][':userID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.AuthorizationCategories)[':id']['Users'][':userID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2AuthorizationCategoriesIdUsersUserIDKey()
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
            (typeof client.api.v2.AuthorizationCategories)[':id']['Users'][':userID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.AuthorizationCategories[':id'].Users[':userID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2AuthorizationCodeDefinitionsKey(
  args: InferRequestType<typeof client.api.v2.AuthorizationCodeDefinitions.$get>,
) {
  return ['api', '/api/v2/AuthorizationCodeDefinitions', args] as const
}

export function useGetApiV2AuthorizationCodeDefinitions<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.AuthorizationCodeDefinitions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.AuthorizationCodeDefinitions.$get>>
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
        ? getGetApiV2AuthorizationCodeDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.AuthorizationCodeDefinitions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.AuthorizationCodeDefinitions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AuthorizationCodeDefinitions<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.AuthorizationCodeDefinitions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.AuthorizationCodeDefinitions.$get>>
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
        ? getGetApiV2AuthorizationCodeDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.AuthorizationCodeDefinitions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.AuthorizationCodeDefinitions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2AuthorizationCodeDefinitionsKey() {
  return ['api', '/api/v2/AuthorizationCodeDefinitions', 'POST'] as const
}

export function usePostApiV2AuthorizationCodeDefinitions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.AuthorizationCodeDefinitions.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.AuthorizationCodeDefinitions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2AuthorizationCodeDefinitionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.AuthorizationCodeDefinitions.$post> },
      ) => parseResponse(client.api.v2.AuthorizationCodeDefinitions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDKey() {
  return ['api', '/api/v2/AuthorizationCodeDefinitions/:ID/Categories/:categoryID', 'POST'] as const
}

export function usePostApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.AuthorizationCodeDefinitions)[':ID']['Categories'][':categoryID']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.AuthorizationCodeDefinitions)[':ID']['Categories'][':categoryID']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDKey()
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
            (typeof client.api.v2.AuthorizationCodeDefinitions)[':ID']['Categories'][':categoryID']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.AuthorizationCodeDefinitions[':ID'].Categories[':categoryID'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDKey() {
  return [
    'api',
    '/api/v2/AuthorizationCodeDefinitions/:ID/Categories/:categoryID',
    'DELETE',
  ] as const
}

export function useDeleteApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.AuthorizationCodeDefinitions)[':ID']['Categories'][':categoryID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.AuthorizationCodeDefinitions)[':ID']['Categories'][':categoryID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDKey()
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
            (typeof client.api.v2.AuthorizationCodeDefinitions)[':ID']['Categories'][':categoryID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.AuthorizationCodeDefinitions[':ID'].Categories[':categoryID'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2AuthorizationCodeDefinitionsIdKey(
  args: InferRequestType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$get']>,
) {
  return ['api', '/api/v2/AuthorizationCodeDefinitions/:id', args] as const
}

export function useGetApiV2AuthorizationCodeDefinitionsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$get']>>
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
        ? getGetApiV2AuthorizationCodeDefinitionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.AuthorizationCodeDefinitions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AuthorizationCodeDefinitionsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$get']>>
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
        ? getGetApiV2AuthorizationCodeDefinitionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.AuthorizationCodeDefinitions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2AuthorizationCodeDefinitionsIdKey() {
  return ['api', '/api/v2/AuthorizationCodeDefinitions/:id', 'PUT'] as const
}

export function usePutApiV2AuthorizationCodeDefinitionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2AuthorizationCodeDefinitionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$put']>
        },
      ) =>
        parseResponse(client.api.v2.AuthorizationCodeDefinitions[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2AuthorizationCodeDefinitionsIdKey() {
  return ['api', '/api/v2/AuthorizationCodeDefinitions/:id', 'DELETE'] as const
}

export function useDeleteApiV2AuthorizationCodeDefinitionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2AuthorizationCodeDefinitionsIdKey()
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
            (typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.AuthorizationCodeDefinitions[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2AuthorizationCodesKey(
  args: InferRequestType<typeof client.api.v2.AuthorizationCodes.$get>,
) {
  return ['api', '/api/v2/AuthorizationCodes', args] as const
}

export function useGetApiV2AuthorizationCodes<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.AuthorizationCodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.AuthorizationCodes.$get>>>
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
        ? getGetApiV2AuthorizationCodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.AuthorizationCodes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.AuthorizationCodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AuthorizationCodes<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.AuthorizationCodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.AuthorizationCodes.$get>>>
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
        ? getGetApiV2AuthorizationCodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.AuthorizationCodes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.AuthorizationCodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2AuthorizationCodesKey() {
  return ['api', '/api/v2/AuthorizationCodes', 'POST'] as const
}

export function usePostApiV2AuthorizationCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.AuthorizationCodes.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.AuthorizationCodes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2AuthorizationCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.AuthorizationCodes.$post> },
      ) => parseResponse(client.api.v2.AuthorizationCodes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2AuthorizationCodesIdKey(
  args: InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['$get']>,
) {
  return ['api', '/api/v2/AuthorizationCodes/:id', args] as const
}

export function useGetApiV2AuthorizationCodesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['$get']>>
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
        ? getGetApiV2AuthorizationCodesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.AuthorizationCodes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AuthorizationCodesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['$get']>>
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
        ? getGetApiV2AuthorizationCodesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.AuthorizationCodes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2AuthorizationCodesIdKey() {
  return ['api', '/api/v2/AuthorizationCodes/:id', 'PUT'] as const
}

export function usePutApiV2AuthorizationCodesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2AuthorizationCodesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['$put']> },
      ) => parseResponse(client.api.v2.AuthorizationCodes[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2AuthorizationCodesIdKey() {
  return ['api', '/api/v2/AuthorizationCodes/:id', 'DELETE'] as const
}

export function useDeleteApiV2AuthorizationCodesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2AuthorizationCodesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['$delete']> },
      ) => parseResponse(client.api.v2.AuthorizationCodes[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2AuthorizationCodesIdContactInformationKey(
  args: InferRequestType<
    (typeof client.api.v2.AuthorizationCodes)[':id']['ContactInformation']['$get']
  >,
) {
  return ['api', '/api/v2/AuthorizationCodes/:id/ContactInformation', args] as const
}

export function useGetApiV2AuthorizationCodesIdContactInformation<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.AuthorizationCodes)[':id']['ContactInformation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.AuthorizationCodes)[':id']['ContactInformation']['$get']
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
        ? getGetApiV2AuthorizationCodesIdContactInformationKey(args)
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
                (typeof client.api.v2.AuthorizationCodes)[':id']['ContactInformation']['$get']
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
          client.api.v2.AuthorizationCodes[':id'].ContactInformation.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AuthorizationCodesIdContactInformation<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.AuthorizationCodes)[':id']['ContactInformation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.AuthorizationCodes)[':id']['ContactInformation']['$get']
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
        ? getGetApiV2AuthorizationCodesIdContactInformationKey(args)
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
                (typeof client.api.v2.AuthorizationCodes)[':id']['ContactInformation']['$get']
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
          client.api.v2.AuthorizationCodes[':id'].ContactInformation.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AuthorizationCodesIdValidateKey(
  args: InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['Validate']['$get']>,
) {
  return ['api', '/api/v2/AuthorizationCodes/:id/Validate', args] as const
}

export function useGetApiV2AuthorizationCodesIdValidate<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['Validate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['Validate']['$get']>
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
        ? getGetApiV2AuthorizationCodesIdValidateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['Validate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.AuthorizationCodes[':id'].Validate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AuthorizationCodesIdValidate<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['Validate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['Validate']['$get']>
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
        ? getGetApiV2AuthorizationCodesIdValidateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['Validate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.AuthorizationCodes[':id'].Validate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AuthorizationContactInformationKey(
  args: InferRequestType<typeof client.api.v2.AuthorizationContactInformation.$get>,
) {
  return ['api', '/api/v2/AuthorizationContactInformation', args] as const
}

export function useGetApiV2AuthorizationContactInformation<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.AuthorizationContactInformation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.AuthorizationContactInformation.$get>>
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
        ? getGetApiV2AuthorizationContactInformationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.AuthorizationContactInformation.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.AuthorizationContactInformation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AuthorizationContactInformation<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.AuthorizationContactInformation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.AuthorizationContactInformation.$get>>
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
        ? getGetApiV2AuthorizationContactInformationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.AuthorizationContactInformation.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.AuthorizationContactInformation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2AuthorizationContactInformationKey() {
  return ['api', '/api/v2/AuthorizationContactInformation', 'POST'] as const
}

export function usePostApiV2AuthorizationContactInformation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.AuthorizationContactInformation.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.AuthorizationContactInformation.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2AuthorizationContactInformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.v2.AuthorizationContactInformation.$post> },
      ) => parseResponse(client.api.v2.AuthorizationContactInformation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2BrandsKey() {
  return ['api', '/api/v2/Brands'] as const
}

export function useGetApiV2Brands<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Brands.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2BrandsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Brands.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Brands.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Brands<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Brands.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2BrandsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Brands.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Brands.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2BundlesKey(args: InferRequestType<typeof client.api.v2.Bundles.$get>) {
  return ['api', '/api/v2/Bundles', args] as const
}

export function useGetApiV2Bundles<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Bundles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Bundles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2BundlesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Bundles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Bundles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Bundles<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Bundles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Bundles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2BundlesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Bundles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Bundles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2BundlesKey() {
  return ['api', '/api/v2/Bundles', 'POST'] as const
}

export function usePostApiV2Bundles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Bundles.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.Bundles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2BundlesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.Bundles.$post> }) =>
        parseResponse(client.api.v2.Bundles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2BundlesIDKey(
  args: InferRequestType<(typeof client.api.v2.Bundles)[':ID']['$get']>,
) {
  return ['api', '/api/v2/Bundles/:ID', args] as const
}

export function useGetApiV2BundlesID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Bundles)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Bundles)[':ID']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV2BundlesIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Bundles)[':ID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Bundles[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2BundlesID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Bundles)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Bundles)[':ID']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV2BundlesIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Bundles)[':ID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Bundles[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2BundlesIDKey() {
  return ['api', '/api/v2/Bundles/:ID', 'PUT'] as const
}

export function usePutApiV2BundlesID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Bundles)[':ID']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.Bundles)[':ID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2BundlesIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.Bundles)[':ID']['$put']> },
      ) => parseResponse(client.api.v2.Bundles[':ID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2BundlesIDKey() {
  return ['api', '/api/v2/Bundles/:ID', 'DELETE'] as const
}

export function useDeleteApiV2BundlesID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Bundles)[':ID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.Bundles)[':ID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2BundlesIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.Bundles)[':ID']['$delete']> },
      ) => parseResponse(client.api.v2.Bundles[':ID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ClientsKey(args: InferRequestType<typeof client.api.v2.Clients.$get>) {
  return ['api', '/api/v2/Clients', args] as const
}

export function useGetApiV2Clients<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Clients.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2ClientsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Clients.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Clients<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Clients.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2ClientsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Clients.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ClientsClientIDCachedFilesKey(
  args: InferRequestType<(typeof client.api.v2.Clients)[':ClientID']['CachedFiles']['$get']>,
) {
  return ['api', '/api/v2/Clients/:ClientID/CachedFiles', args] as const
}

export function useGetApiV2ClientsClientIDCachedFiles<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Clients)[':ClientID']['CachedFiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Clients)[':ClientID']['CachedFiles']['$get']>>
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
        ? getGetApiV2ClientsClientIDCachedFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Clients)[':ClientID']['CachedFiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.Clients[':ClientID'].CachedFiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ClientsClientIDCachedFiles<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Clients)[':ClientID']['CachedFiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Clients)[':ClientID']['CachedFiles']['$get']>>
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
        ? getGetApiV2ClientsClientIDCachedFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Clients)[':ClientID']['CachedFiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.Clients[':ClientID'].CachedFiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ClientsClientIDPackageReportsKey(
  args: InferRequestType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$get']>,
) {
  return ['api', '/api/v2/Clients/:ClientID/PackageReports', args] as const
}

export function useGetApiV2ClientsClientIDPackageReports<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$get']>
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
        ? getGetApiV2ClientsClientIDPackageReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.Clients[':ClientID'].PackageReports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ClientsClientIDPackageReports<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$get']>
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
        ? getGetApiV2ClientsClientIDPackageReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.Clients[':ClientID'].PackageReports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2ClientsClientIDPackageReportsKey() {
  return ['api', '/api/v2/Clients/:ClientID/PackageReports', 'PUT'] as const
}

export function usePutApiV2ClientsClientIDPackageReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2ClientsClientIDPackageReportsKey()
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
            (typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$put']
          >
        },
      ) =>
        parseResponse(client.api.v2.Clients[':ClientID'].PackageReports.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiV2ClientsClientIDPackageReportsBatchKey() {
  return ['api', '/api/v2/Clients/:ClientID/PackageReports/Batch', 'PUT'] as const
}

export function usePutApiV2ClientsClientIDPackageReportsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.Clients)[':ClientID']['PackageReports']['Batch']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['Batch']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2ClientsClientIDPackageReportsBatchKey()
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
            (typeof client.api.v2.Clients)[':ClientID']['PackageReports']['Batch']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.Clients[':ClientID'].PackageReports.Batch.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ClientsIDKey(
  args: InferRequestType<(typeof client.api.v2.Clients)[':ID']['$get']>,
) {
  return ['api', '/api/v2/Clients/:ID', args] as const
}

export function useGetApiV2ClientsID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Clients)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Clients)[':ID']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV2ClientsIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Clients)[':ID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Clients[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ClientsID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Clients)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Clients)[':ID']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV2ClientsIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Clients)[':ID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Clients[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2ClientsIDKey() {
  return ['api', '/api/v2/Clients/:ID', 'PUT'] as const
}

export function usePutApiV2ClientsID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Clients)[':ID']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.Clients)[':ID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2ClientsIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.Clients)[':ID']['$put']> },
      ) => parseResponse(client.api.v2.Clients[':ID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ClientsIDAvailableUpdateGroupSubscriptionsKey(
  args: InferRequestType<
    (typeof client.api.v2.Clients)[':ID']['AvailableUpdateGroupSubscriptions']['$get']
  >,
) {
  return ['api', '/api/v2/Clients/:ID/AvailableUpdateGroupSubscriptions', args] as const
}

export function useGetApiV2ClientsIDAvailableUpdateGroupSubscriptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.Clients)[':ID']['AvailableUpdateGroupSubscriptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.Clients)[':ID']['AvailableUpdateGroupSubscriptions']['$get']
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
        ? getGetApiV2ClientsIDAvailableUpdateGroupSubscriptionsKey(args)
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
                (typeof client.api.v2.Clients)[':ID']['AvailableUpdateGroupSubscriptions']['$get']
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
          client.api.v2.Clients[':ID'].AvailableUpdateGroupSubscriptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ClientsIDAvailableUpdateGroupSubscriptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.Clients)[':ID']['AvailableUpdateGroupSubscriptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.Clients)[':ID']['AvailableUpdateGroupSubscriptions']['$get']
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
        ? getGetApiV2ClientsIDAvailableUpdateGroupSubscriptionsKey(args)
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
                (typeof client.api.v2.Clients)[':ID']['AvailableUpdateGroupSubscriptions']['$get']
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
          client.api.v2.Clients[':ID'].AvailableUpdateGroupSubscriptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ClientsIDUpdateGroupSubscriptionsKey(
  args: InferRequestType<(typeof client.api.v2.Clients)[':ID']['UpdateGroupSubscriptions']['$get']>,
) {
  return ['api', '/api/v2/Clients/:ID/UpdateGroupSubscriptions', args] as const
}

export function useGetApiV2ClientsIDUpdateGroupSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Clients)[':ID']['UpdateGroupSubscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.Clients)[':ID']['UpdateGroupSubscriptions']['$get']>
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
        ? getGetApiV2ClientsIDUpdateGroupSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.Clients)[':ID']['UpdateGroupSubscriptions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.Clients[':ID'].UpdateGroupSubscriptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ClientsIDUpdateGroupSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Clients)[':ID']['UpdateGroupSubscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.Clients)[':ID']['UpdateGroupSubscriptions']['$get']>
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
        ? getGetApiV2ClientsIDUpdateGroupSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.Clients)[':ID']['UpdateGroupSubscriptions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.Clients[':ID'].UpdateGroupSubscriptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2ContentDefinitionAttributesBatchKey() {
  return ['api', '/api/v2/ContentDefinitionAttributes/Batch', 'PUT'] as const
}

export function usePutApiV2ContentDefinitionAttributesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.ContentDefinitionAttributes.Batch.$put>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.ContentDefinitionAttributes.Batch.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2ContentDefinitionAttributesBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.v2.ContentDefinitionAttributes.Batch.$put> },
      ) => parseResponse(client.api.v2.ContentDefinitionAttributes.Batch.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiV2ContentDefinitionAttributesContentDefinitionAttributeIDKey() {
  return [
    'api',
    '/api/v2/ContentDefinitionAttributes/:contentDefinitionAttributeID',
    'PUT',
  ] as const
}

export function usePutApiV2ContentDefinitionAttributesContentDefinitionAttributeID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.ContentDefinitionAttributes)[':contentDefinitionAttributeID']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.ContentDefinitionAttributes)[':contentDefinitionAttributeID']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApiV2ContentDefinitionAttributesContentDefinitionAttributeIDKey()
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
            (typeof client.api.v2.ContentDefinitionAttributes)[':contentDefinitionAttributeID']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.ContentDefinitionAttributes[':contentDefinitionAttributeID'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2ContentDefinitionAttributesContentDefinitionAttributeIDKey() {
  return [
    'api',
    '/api/v2/ContentDefinitionAttributes/:contentDefinitionAttributeID',
    'DELETE',
  ] as const
}

export function useDeleteApiV2ContentDefinitionAttributesContentDefinitionAttributeID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.ContentDefinitionAttributes)[':contentDefinitionAttributeID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.ContentDefinitionAttributes)[':contentDefinitionAttributeID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV2ContentDefinitionAttributesContentDefinitionAttributeIDKey()
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
            (typeof client.api.v2.ContentDefinitionAttributes)[':contentDefinitionAttributeID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.ContentDefinitionAttributes[':contentDefinitionAttributeID'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ContentDefinitionsKey(
  args: InferRequestType<typeof client.api.v2.ContentDefinitions.$get>,
) {
  return ['api', '/api/v2/ContentDefinitions', args] as const
}

export function useGetApiV2ContentDefinitions<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.ContentDefinitions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentDefinitions.$get>>>
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
        ? getGetApiV2ContentDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentDefinitions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.ContentDefinitions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ContentDefinitions<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.ContentDefinitions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentDefinitions.$get>>>
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
        ? getGetApiV2ContentDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentDefinitions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.ContentDefinitions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ContentDefinitionsKey() {
  return ['api', '/api/v2/ContentDefinitions', 'POST'] as const
}

export function usePostApiV2ContentDefinitions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentDefinitions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.ContentDefinitions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ContentDefinitionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.ContentDefinitions.$post> },
      ) => parseResponse(client.api.v2.ContentDefinitions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ContentDefinitionsContentDefinitionIDKey(
  args: InferRequestType<(typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$get']>,
) {
  return ['api', '/api/v2/ContentDefinitions/:contentDefinitionID', args] as const
}

export function useGetApiV2ContentDefinitionsContentDefinitionID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$get']>
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
        ? getGetApiV2ContentDefinitionsContentDefinitionIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.ContentDefinitions[':contentDefinitionID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ContentDefinitionsContentDefinitionID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$get']>
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
        ? getGetApiV2ContentDefinitionsContentDefinitionIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.ContentDefinitions[':contentDefinitionID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2ContentDefinitionsContentDefinitionIDKey() {
  return ['api', '/api/v2/ContentDefinitions/:contentDefinitionID', 'PUT'] as const
}

export function usePutApiV2ContentDefinitionsContentDefinitionID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2ContentDefinitionsContentDefinitionIDKey()
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
            (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.ContentDefinitions[':contentDefinitionID'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2ContentDefinitionsContentDefinitionIDKey() {
  return ['api', '/api/v2/ContentDefinitions/:contentDefinitionID', 'DELETE'] as const
}

export function useDeleteApiV2ContentDefinitionsContentDefinitionID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2ContentDefinitionsContentDefinitionIDKey()
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
            (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.ContentDefinitions[':contentDefinitionID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ContentDefinitionsContentDefinitionIDAttributesKey(
  args: InferRequestType<
    (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$get']
  >,
) {
  return ['api', '/api/v2/ContentDefinitions/:contentDefinitionID/Attributes', args] as const
}

export function useGetApiV2ContentDefinitionsContentDefinitionIDAttributes<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$get']
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
        ? getGetApiV2ContentDefinitionsContentDefinitionIDAttributesKey(args)
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
                (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$get']
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
          client.api.v2.ContentDefinitions[':contentDefinitionID'].Attributes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ContentDefinitionsContentDefinitionIDAttributes<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$get']
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
        ? getGetApiV2ContentDefinitionsContentDefinitionIDAttributesKey(args)
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
                (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$get']
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
          client.api.v2.ContentDefinitions[':contentDefinitionID'].Attributes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ContentDefinitionsContentDefinitionIDAttributesKey() {
  return ['api', '/api/v2/ContentDefinitions/:contentDefinitionID/Attributes', 'POST'] as const
}

export function usePostApiV2ContentDefinitionsContentDefinitionIDAttributes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ContentDefinitionsContentDefinitionIDAttributesKey()
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
            (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.ContentDefinitions[':contentDefinitionID'].Attributes.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2ContentDefinitionsContentDefinitionIDAttributesBatchKey() {
  return [
    'api',
    '/api/v2/ContentDefinitions/:contentDefinitionID/Attributes/Batch',
    'POST',
  ] as const
}

export function usePostApiV2ContentDefinitionsContentDefinitionIDAttributesBatch<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['Batch']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['Batch']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ContentDefinitionsContentDefinitionIDAttributesBatchKey()
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
            (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['Batch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.ContentDefinitions[':contentDefinitionID'].Attributes.Batch.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ContentReleasesKey(
  args: InferRequestType<typeof client.api.v2.ContentReleases.$get>,
) {
  return ['api', '/api/v2/ContentReleases', args] as const
}

export function useGetApiV2ContentReleases<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.ContentReleases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentReleases.$get>>>
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
        ? getGetApiV2ContentReleasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentReleases.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.ContentReleases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ContentReleases<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.ContentReleases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentReleases.$get>>>
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
        ? getGetApiV2ContentReleasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentReleases.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.ContentReleases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ContentReleasesKey() {
  return ['api', '/api/v2/ContentReleases', 'POST'] as const
}

export function usePostApiV2ContentReleases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentReleases.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.ContentReleases.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ContentReleasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.ContentReleases.$post> },
      ) => parseResponse(client.api.v2.ContentReleases.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ContentReleasesContentReleaseIdKey(
  args: InferRequestType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$get']>,
) {
  return ['api', '/api/v2/ContentReleases/:ContentReleaseId', args] as const
}

export function useGetApiV2ContentReleasesContentReleaseId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$get']>>
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
        ? getGetApiV2ContentReleasesContentReleaseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.ContentReleases[':ContentReleaseId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ContentReleasesContentReleaseId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$get']>>
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
        ? getGetApiV2ContentReleasesContentReleaseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.ContentReleases[':ContentReleaseId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2ContentReleasesContentReleaseIdKey() {
  return ['api', '/api/v2/ContentReleases/:ContentReleaseId', 'PUT'] as const
}

export function usePutApiV2ContentReleasesContentReleaseId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2ContentReleasesContentReleaseIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$put']>
        },
      ) =>
        parseResponse(client.api.v2.ContentReleases[':ContentReleaseId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2ContentReleasesContentReleaseIdKey() {
  return ['api', '/api/v2/ContentReleases/:ContentReleaseId', 'DELETE'] as const
}

export function useDeleteApiV2ContentReleasesContentReleaseId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2ContentReleasesContentReleaseIdKey()
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
            (typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.ContentReleases[':ContentReleaseId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV2ContentSubmissionAttributesBatchKey() {
  return ['api', '/api/v2/ContentSubmissionAttributes/Batch', 'PUT'] as const
}

export function usePutApiV2ContentSubmissionAttributesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.ContentSubmissionAttributes.Batch.$put>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.ContentSubmissionAttributes.Batch.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2ContentSubmissionAttributesBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.v2.ContentSubmissionAttributes.Batch.$put> },
      ) => parseResponse(client.api.v2.ContentSubmissionAttributes.Batch.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiV2ContentSubmissionAttributesContentSubmissionAttributeIDKey() {
  return [
    'api',
    '/api/v2/ContentSubmissionAttributes/:contentSubmissionAttributeID',
    'PUT',
  ] as const
}

export function usePutApiV2ContentSubmissionAttributesContentSubmissionAttributeID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.ContentSubmissionAttributes)[':contentSubmissionAttributeID']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.ContentSubmissionAttributes)[':contentSubmissionAttributeID']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApiV2ContentSubmissionAttributesContentSubmissionAttributeIDKey()
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
            (typeof client.api.v2.ContentSubmissionAttributes)[':contentSubmissionAttributeID']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.ContentSubmissionAttributes[':contentSubmissionAttributeID'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2ContentSubmissionAttributesContentSubmissionAttributeIDKey() {
  return [
    'api',
    '/api/v2/ContentSubmissionAttributes/:contentSubmissionAttributeID',
    'DELETE',
  ] as const
}

export function useDeleteApiV2ContentSubmissionAttributesContentSubmissionAttributeID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.ContentSubmissionAttributes)[':contentSubmissionAttributeID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.ContentSubmissionAttributes)[':contentSubmissionAttributeID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV2ContentSubmissionAttributesContentSubmissionAttributeIDKey()
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
            (typeof client.api.v2.ContentSubmissionAttributes)[':contentSubmissionAttributeID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.ContentSubmissionAttributes[':contentSubmissionAttributeID'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ContentSubmissionTypesKey(
  args: InferRequestType<typeof client.api.v2.ContentSubmissionTypes.$get>,
) {
  return ['api', '/api/v2/ContentSubmissionTypes', args] as const
}

export function useGetApiV2ContentSubmissionTypes<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.ContentSubmissionTypes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.ContentSubmissionTypes.$get>>
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
        ? getGetApiV2ContentSubmissionTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.ContentSubmissionTypes.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.ContentSubmissionTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ContentSubmissionTypes<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.ContentSubmissionTypes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.ContentSubmissionTypes.$get>>
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
        ? getGetApiV2ContentSubmissionTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.ContentSubmissionTypes.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.ContentSubmissionTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ContentSubmissionTypesKey() {
  return ['api', '/api/v2/ContentSubmissionTypes', 'POST'] as const
}

export function usePostApiV2ContentSubmissionTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentSubmissionTypes.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.ContentSubmissionTypes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ContentSubmissionTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.ContentSubmissionTypes.$post> },
      ) => parseResponse(client.api.v2.ContentSubmissionTypes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ContentSubmissionTypesIdKey(
  args: InferRequestType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$get']>,
) {
  return ['api', '/api/v2/ContentSubmissionTypes/:id', args] as const
}

export function useGetApiV2ContentSubmissionTypesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$get']>>
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
        ? getGetApiV2ContentSubmissionTypesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.ContentSubmissionTypes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ContentSubmissionTypesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$get']>>
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
        ? getGetApiV2ContentSubmissionTypesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.ContentSubmissionTypes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2ContentSubmissionTypesIdKey() {
  return ['api', '/api/v2/ContentSubmissionTypes/:id', 'PUT'] as const
}

export function usePutApiV2ContentSubmissionTypesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2ContentSubmissionTypesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$put']> },
      ) => parseResponse(client.api.v2.ContentSubmissionTypes[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2ContentSubmissionTypesIdKey() {
  return ['api', '/api/v2/ContentSubmissionTypes/:id', 'DELETE'] as const
}

export function useDeleteApiV2ContentSubmissionTypesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2ContentSubmissionTypesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$delete']>
        },
      ) => parseResponse(client.api.v2.ContentSubmissionTypes[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ContentSubmissionsKey(
  args: InferRequestType<typeof client.api.v2.ContentSubmissions.$get>,
) {
  return ['api', '/api/v2/ContentSubmissions', args] as const
}

export function useGetApiV2ContentSubmissions<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.ContentSubmissions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentSubmissions.$get>>>
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
        ? getGetApiV2ContentSubmissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentSubmissions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.ContentSubmissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ContentSubmissions<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.ContentSubmissions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentSubmissions.$get>>>
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
        ? getGetApiV2ContentSubmissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentSubmissions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.ContentSubmissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ContentSubmissionsKey() {
  return ['api', '/api/v2/ContentSubmissions', 'POST'] as const
}

export function usePostApiV2ContentSubmissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentSubmissions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.ContentSubmissions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ContentSubmissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.ContentSubmissions.$post> },
      ) => parseResponse(client.api.v2.ContentSubmissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ContentSubmissionsContentSubmissionIDKey(
  args: InferRequestType<(typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$get']>,
) {
  return ['api', '/api/v2/ContentSubmissions/:contentSubmissionID', args] as const
}

export function useGetApiV2ContentSubmissionsContentSubmissionID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$get']>
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
        ? getGetApiV2ContentSubmissionsContentSubmissionIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.ContentSubmissions[':contentSubmissionID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ContentSubmissionsContentSubmissionID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$get']>
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
        ? getGetApiV2ContentSubmissionsContentSubmissionIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.ContentSubmissions[':contentSubmissionID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2ContentSubmissionsContentSubmissionIDKey() {
  return ['api', '/api/v2/ContentSubmissions/:contentSubmissionID', 'PUT'] as const
}

export function usePutApiV2ContentSubmissionsContentSubmissionID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2ContentSubmissionsContentSubmissionIDKey()
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
            (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.ContentSubmissions[':contentSubmissionID'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2ContentSubmissionsContentSubmissionIDKey() {
  return ['api', '/api/v2/ContentSubmissions/:contentSubmissionID', 'DELETE'] as const
}

export function useDeleteApiV2ContentSubmissionsContentSubmissionID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2ContentSubmissionsContentSubmissionIDKey()
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
            (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.ContentSubmissions[':contentSubmissionID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ContentSubmissionsContentSubmissionIDAttributesKey(
  args: InferRequestType<
    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$get']
  >,
) {
  return ['api', '/api/v2/ContentSubmissions/:contentSubmissionID/Attributes', args] as const
}

export function useGetApiV2ContentSubmissionsContentSubmissionIDAttributes<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$get']
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
        ? getGetApiV2ContentSubmissionsContentSubmissionIDAttributesKey(args)
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
                (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$get']
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
          client.api.v2.ContentSubmissions[':contentSubmissionID'].Attributes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ContentSubmissionsContentSubmissionIDAttributes<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$get']
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
        ? getGetApiV2ContentSubmissionsContentSubmissionIDAttributesKey(args)
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
                (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$get']
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
          client.api.v2.ContentSubmissions[':contentSubmissionID'].Attributes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ContentSubmissionsContentSubmissionIDAttributesKey() {
  return ['api', '/api/v2/ContentSubmissions/:contentSubmissionID/Attributes', 'POST'] as const
}

export function usePostApiV2ContentSubmissionsContentSubmissionIDAttributes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ContentSubmissionsContentSubmissionIDAttributesKey()
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
            (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.ContentSubmissions[':contentSubmissionID'].Attributes.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2ContentSubmissionsContentSubmissionIDAttributesBatchKey() {
  return [
    'api',
    '/api/v2/ContentSubmissions/:contentSubmissionID/Attributes/Batch',
    'POST',
  ] as const
}

export function usePostApiV2ContentSubmissionsContentSubmissionIDAttributesBatch<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['Batch']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['Batch']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ContentSubmissionsContentSubmissionIDAttributesBatchKey()
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
            (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['Batch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.ContentSubmissions[':contentSubmissionID'].Attributes.Batch.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ContentSubmissionsContentSubmissionIDStatusKey(
  args: InferRequestType<
    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Status']['$get']
  >,
) {
  return ['api', '/api/v2/ContentSubmissions/:contentSubmissionID/Status', args] as const
}

export function useGetApiV2ContentSubmissionsContentSubmissionIDStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Status']['$get']
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
        ? getGetApiV2ContentSubmissionsContentSubmissionIDStatusKey(args)
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
                (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Status']['$get']
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
          client.api.v2.ContentSubmissions[':contentSubmissionID'].Status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ContentSubmissionsContentSubmissionIDStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Status']['$get']
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
        ? getGetApiV2ContentSubmissionsContentSubmissionIDStatusKey(args)
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
                (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Status']['$get']
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
          client.api.v2.ContentSubmissions[':contentSubmissionID'].Status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2DealerByCountryKey(
  args: InferRequestType<typeof client.api.v2.DealerByCountry.$get>,
) {
  return ['api', '/api/v2/DealerByCountry', args] as const
}

export function useGetApiV2DealerByCountry<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.DealerByCountry.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.DealerByCountry.$get>>>
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
        ? getGetApiV2DealerByCountryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.DealerByCountry.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.DealerByCountry.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DealerByCountry<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.DealerByCountry.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.DealerByCountry.$get>>>
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
        ? getGetApiV2DealerByCountryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.DealerByCountry.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.DealerByCountry.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2DealersKey(args: InferRequestType<typeof client.api.v2.Dealers.$get>) {
  return ['api', '/api/v2/Dealers', args] as const
}

export function useGetApiV2Dealers<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Dealers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Dealers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2DealersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Dealers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Dealers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Dealers<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Dealers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Dealers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2DealersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Dealers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Dealers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2DealersDealerCodeKey(
  args: InferRequestType<(typeof client.api.v2.Dealers)[':DealerCode']['$get']>,
) {
  return ['api', '/api/v2/Dealers/:DealerCode', args] as const
}

export function useGetApiV2DealersDealerCode<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Dealers)[':DealerCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Dealers)[':DealerCode']['$get']>>
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
        ? getGetApiV2DealersDealerCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Dealers)[':DealerCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Dealers[':DealerCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DealersDealerCode<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Dealers)[':DealerCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Dealers)[':DealerCode']['$get']>>
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
        ? getGetApiV2DealersDealerCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Dealers)[':DealerCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Dealers[':DealerCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2FilesKey(args: InferRequestType<typeof client.api.v2.Files.$get>) {
  return ['api', '/api/v2/Files', args] as const
}

export function useGetApiV2Files<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Files.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Files.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2FilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Files.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Files<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Files.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Files.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2FilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Files.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2FilesKey() {
  return ['api', '/api/v2/Files', 'POST'] as const
}

export function usePostApiV2Files<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Files.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.Files.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2FilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.Files.$post> }) =>
        parseResponse(client.api.v2.Files.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2FilesIDKey(
  args: InferRequestType<(typeof client.api.v2.Files)[':ID']['$get']>,
) {
  return ['api', '/api/v2/Files/:ID', args] as const
}

export function useGetApiV2FilesID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Files)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV2FilesIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Files[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2FilesID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Files)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV2FilesIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Files[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2FilesIDKey() {
  return ['api', '/api/v2/Files/:ID', 'PUT'] as const
}

export function usePutApiV2FilesID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.Files)[':ID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2FilesIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.Files)[':ID']['$put']> },
      ) => parseResponse(client.api.v2.Files[':ID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2FilesIDKey() {
  return ['api', '/api/v2/Files/:ID', 'DELETE'] as const
}

export function useDeleteApiV2FilesID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.Files)[':ID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2FilesIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.Files)[':ID']['$delete']> },
      ) => parseResponse(client.api.v2.Files[':ID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2FilesIDFileContentsKey(
  args: InferRequestType<(typeof client.api.v2.Files)[':ID']['FileContents']['$get']>,
) {
  return ['api', '/api/v2/Files/:ID/FileContents', args] as const
}

export function useGetApiV2FilesIDFileContents<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Files)[':ID']['FileContents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['FileContents']['$get']>>
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
        ? getGetApiV2FilesIDFileContentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['FileContents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Files[':ID'].FileContents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2FilesIDFileContents<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Files)[':ID']['FileContents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['FileContents']['$get']>>
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
        ? getGetApiV2FilesIDFileContentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['FileContents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Files[':ID'].FileContents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2FilesIDFileContentsKey() {
  return ['api', '/api/v2/Files/:ID/FileContents', 'PUT'] as const
}

export function usePutApiV2FilesIDFileContents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['FileContents']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.Files)[':ID']['FileContents']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2FilesIDFileContentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.Files)[':ID']['FileContents']['$put']> },
      ) => parseResponse(client.api.v2.Files[':ID'].FileContents.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2GlobalImageCategoriesKey(
  args: InferRequestType<typeof client.api.v2.GlobalImageCategories.$get>,
) {
  return ['api', '/api/v2/GlobalImageCategories', args] as const
}

export function useGetApiV2GlobalImageCategories<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.GlobalImageCategories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.GlobalImageCategories.$get>>>
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
        ? getGetApiV2GlobalImageCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.GlobalImageCategories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.GlobalImageCategories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2GlobalImageCategories<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.GlobalImageCategories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.GlobalImageCategories.$get>>>
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
        ? getGetApiV2GlobalImageCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.GlobalImageCategories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.GlobalImageCategories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2GlobalImageCategoriesKey() {
  return ['api', '/api/v2/GlobalImageCategories', 'POST'] as const
}

export function usePostApiV2GlobalImageCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.GlobalImageCategories.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.GlobalImageCategories.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2GlobalImageCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.GlobalImageCategories.$post> },
      ) => parseResponse(client.api.v2.GlobalImageCategories.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2GlobalImageCategoriesIDKey(
  args: InferRequestType<(typeof client.api.v2.GlobalImageCategories)[':ID']['$get']>,
) {
  return ['api', '/api/v2/GlobalImageCategories/:ID', args] as const
}

export function useGetApiV2GlobalImageCategoriesID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.GlobalImageCategories)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.GlobalImageCategories)[':ID']['$get']>>
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
        ? getGetApiV2GlobalImageCategoriesIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.GlobalImageCategories)[':ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.GlobalImageCategories[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2GlobalImageCategoriesID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.GlobalImageCategories)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.GlobalImageCategories)[':ID']['$get']>>
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
        ? getGetApiV2GlobalImageCategoriesIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.GlobalImageCategories)[':ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.GlobalImageCategories[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2GlobalImagesKey(
  args: InferRequestType<typeof client.api.v2.GlobalImages.$get>,
) {
  return ['api', '/api/v2/GlobalImages', args] as const
}

export function useGetApiV2GlobalImages<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.GlobalImages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.GlobalImages.$get>>>
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
        ? getGetApiV2GlobalImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.GlobalImages.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.GlobalImages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2GlobalImages<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.GlobalImages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.GlobalImages.$get>>>
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
        ? getGetApiV2GlobalImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.GlobalImages.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.GlobalImages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2GlobalImagesKey() {
  return ['api', '/api/v2/GlobalImages', 'POST'] as const
}

export function usePostApiV2GlobalImages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.GlobalImages.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.GlobalImages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2GlobalImagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.GlobalImages.$post> }) =>
        parseResponse(client.api.v2.GlobalImages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2GlobalImagesIDKey(
  args: InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['$get']>,
) {
  return ['api', '/api/v2/GlobalImages/:ID', args] as const
}

export function useGetApiV2GlobalImagesID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['$get']>>
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
        ? getGetApiV2GlobalImagesIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.GlobalImages[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2GlobalImagesID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['$get']>>
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
        ? getGetApiV2GlobalImagesIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.GlobalImages[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2GlobalImagesIDKey() {
  return ['api', '/api/v2/GlobalImages/:ID', 'PUT'] as const
}

export function usePutApiV2GlobalImagesID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2GlobalImagesIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['$put']> },
      ) => parseResponse(client.api.v2.GlobalImages[':ID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2GlobalImagesIDKey() {
  return ['api', '/api/v2/GlobalImages/:ID', 'DELETE'] as const
}

export function useDeleteApiV2GlobalImagesID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2GlobalImagesIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['$delete']> },
      ) => parseResponse(client.api.v2.GlobalImages[':ID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2GlobalImagesIDImageContentsKey(
  args: InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$get']>,
) {
  return ['api', '/api/v2/GlobalImages/:ID/ImageContents', args] as const
}

export function useGetApiV2GlobalImagesIDImageContents<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$get']>>
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
        ? getGetApiV2GlobalImagesIDImageContentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.GlobalImages[':ID'].ImageContents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2GlobalImagesIDImageContents<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$get']>>
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
        ? getGetApiV2GlobalImagesIDImageContentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.GlobalImages[':ID'].ImageContents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2GlobalImagesIDImageContentsKey() {
  return ['api', '/api/v2/GlobalImages/:ID/ImageContents', 'PUT'] as const
}

export function usePutApiV2GlobalImagesIDImageContents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2GlobalImagesIDImageContentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$put']>
        },
      ) => parseResponse(client.api.v2.GlobalImages[':ID'].ImageContents.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2LanguagesKey(
  args: InferRequestType<typeof client.api.v2.Languages.$get>,
) {
  return ['api', '/api/v2/Languages', args] as const
}

export function useGetApiV2Languages<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Languages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Languages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2LanguagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Languages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Languages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Languages<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Languages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Languages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2LanguagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Languages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Languages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2LanguagesKey() {
  return ['api', '/api/v2/Languages', 'POST'] as const
}

export function usePostApiV2Languages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Languages.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.Languages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2LanguagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.Languages.$post> }) =>
        parseResponse(client.api.v2.Languages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2LanguagesLocaleIDKey(
  args: InferRequestType<(typeof client.api.v2.Languages)[':LocaleID']['$get']>,
) {
  return ['api', '/api/v2/Languages/:LocaleID', args] as const
}

export function useGetApiV2LanguagesLocaleID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Languages)[':LocaleID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Languages)[':LocaleID']['$get']>>
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
        ? getGetApiV2LanguagesLocaleIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Languages)[':LocaleID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Languages[':LocaleID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2LanguagesLocaleID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Languages)[':LocaleID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Languages)[':LocaleID']['$get']>>
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
        ? getGetApiV2LanguagesLocaleIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Languages)[':LocaleID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Languages[':LocaleID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2LanguagesLocaleIDKey() {
  return ['api', '/api/v2/Languages/:LocaleID', 'PUT'] as const
}

export function usePutApiV2LanguagesLocaleID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Languages)[':LocaleID']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.Languages)[':LocaleID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2LanguagesLocaleIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.Languages)[':LocaleID']['$put']> },
      ) => parseResponse(client.api.v2.Languages[':LocaleID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2LanguagesLocaleIDKey() {
  return ['api', '/api/v2/Languages/:LocaleID', 'DELETE'] as const
}

export function useDeleteApiV2LanguagesLocaleID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Languages)[':LocaleID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.Languages)[':LocaleID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2LanguagesLocaleIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.Languages)[':LocaleID']['$delete']> },
      ) => parseResponse(client.api.v2.Languages[':LocaleID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2LicenseActivationsKey() {
  return ['api', '/api/v2/LicenseActivations', 'POST'] as const
}

export function usePostApiV2LicenseActivations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.LicenseActivations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.LicenseActivations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2LicenseActivationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.LicenseActivations.$post> },
      ) => parseResponse(client.api.v2.LicenseActivations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2LicenseActivationsRegisterEDTLiteKey() {
  return ['api', '/api/v2/LicenseActivations/RegisterEDTLite', 'POST'] as const
}

export function usePostApiV2LicenseActivationsRegisterEDTLite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.LicenseActivations.RegisterEDTLite.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.LicenseActivations.RegisterEDTLite.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2LicenseActivationsRegisterEDTLiteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.v2.LicenseActivations.RegisterEDTLite.$post> },
      ) =>
        parseResponse(client.api.v2.LicenseActivations.RegisterEDTLite.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiV2LicenseActivationsIDKey() {
  return ['api', '/api/v2/LicenseActivations/:ID', 'PUT'] as const
}

export function usePutApiV2LicenseActivationsID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.LicenseActivations)[':ID']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.LicenseActivations)[':ID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2LicenseActivationsIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.LicenseActivations)[':ID']['$put']> },
      ) => parseResponse(client.api.v2.LicenseActivations[':ID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiV2LicenseActivationsIDConfirmKey() {
  return ['api', '/api/v2/LicenseActivations/:ID/Confirm', 'PUT'] as const
}

export function usePutApiV2LicenseActivationsIDConfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.LicenseActivations)[':ID']['Confirm']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.LicenseActivations)[':ID']['Confirm']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2LicenseActivationsIDConfirmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.LicenseActivations)[':ID']['Confirm']['$put']>
        },
      ) => parseResponse(client.api.v2.LicenseActivations[':ID'].Confirm.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2LicensesKey(args: InferRequestType<typeof client.api.v2.Licenses.$get>) {
  return ['api', '/api/v2/Licenses', args] as const
}

export function useGetApiV2Licenses<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Licenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Licenses.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2LicensesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Licenses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Licenses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Licenses<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Licenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Licenses.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2LicensesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Licenses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Licenses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2LicensesIDKey(
  args: InferRequestType<(typeof client.api.v2.Licenses)[':ID']['$get']>,
) {
  return ['api', '/api/v2/Licenses/:ID', args] as const
}

export function useGetApiV2LicensesID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Licenses)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Licenses)[':ID']['$get']>>>
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
        ? getGetApiV2LicensesIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Licenses)[':ID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Licenses[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2LicensesID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Licenses)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Licenses)[':ID']['$get']>>>
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
        ? getGetApiV2LicensesIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Licenses)[':ID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Licenses[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2LogsKey(args: InferRequestType<typeof client.api.v2.Logs.$get>) {
  return ['api', '/api/v2/Logs', args] as const
}

export function useGetApiV2Logs<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Logs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2LogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Logs<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Logs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2LogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2LogsKey() {
  return ['api', '/api/v2/Logs', 'POST'] as const
}

export function usePostApiV2Logs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Logs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.Logs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2LogsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.Logs.$post> }) =>
        parseResponse(client.api.v2.Logs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2LogsIDKey(
  args: InferRequestType<(typeof client.api.v2.Logs)[':ID']['$get']>,
) {
  return ['api', '/api/v2/Logs/:ID', args] as const
}

export function useGetApiV2LogsID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Logs)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Logs)[':ID']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV2LogsIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Logs)[':ID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Logs[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2LogsID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Logs)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Logs)[':ID']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV2LogsIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Logs)[':ID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Logs[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2NotificationsKey() {
  return ['api', '/api/v2/Notifications', 'POST'] as const
}

export function usePostApiV2Notifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Notifications.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.Notifications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2NotificationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.Notifications.$post> },
      ) => parseResponse(client.api.v2.Notifications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2PackageTypesKey(
  args: InferRequestType<typeof client.api.v2.PackageTypes.$get>,
) {
  return ['api', '/api/v2/PackageTypes', args] as const
}

export function useGetApiV2PackageTypes<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.PackageTypes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypes.$get>>>
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
        ? getGetApiV2PackageTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.PackageTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2PackageTypes<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.PackageTypes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypes.$get>>>
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
        ? getGetApiV2PackageTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.PackageTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2PackageTypesKey() {
  return ['api', '/api/v2/PackageTypes', 'POST'] as const
}

export function usePostApiV2PackageTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.PackageTypes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2PackageTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.PackageTypes.$post> }) =>
        parseResponse(client.api.v2.PackageTypes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2PackageTypesIDKey(
  args: InferRequestType<(typeof client.api.v2.PackageTypes)[':ID']['$get']>,
) {
  return ['api', '/api/v2/PackageTypes/:ID', args] as const
}

export function useGetApiV2PackageTypesID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.PackageTypes)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.PackageTypes)[':ID']['$get']>>
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
        ? getGetApiV2PackageTypesIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.PackageTypes)[':ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.PackageTypes[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2PackageTypesID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.PackageTypes)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.PackageTypes)[':ID']['$get']>>
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
        ? getGetApiV2PackageTypesIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.PackageTypes)[':ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.PackageTypes[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2PackageTypesIDKey() {
  return ['api', '/api/v2/PackageTypes/:ID', 'PUT'] as const
}

export function usePutApiV2PackageTypesID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.PackageTypes)[':ID']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.PackageTypes)[':ID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2PackageTypesIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.PackageTypes)[':ID']['$put']> },
      ) => parseResponse(client.api.v2.PackageTypes[':ID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2PackageTypesIDKey() {
  return ['api', '/api/v2/PackageTypes/:ID', 'DELETE'] as const
}

export function useDeleteApiV2PackageTypesID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.PackageTypes)[':ID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.PackageTypes)[':ID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2PackageTypesIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.PackageTypes)[':ID']['$delete']> },
      ) => parseResponse(client.api.v2.PackageTypes[':ID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2PackageTypesIdUsersUserIDKey() {
  return ['api', '/api/v2/PackageTypes/:id/Users/:userID', 'POST'] as const
}

export function usePostApiV2PackageTypesIdUsersUserID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.PackageTypes)[':id']['Users'][':userID']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.PackageTypes)[':id']['Users'][':userID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2PackageTypesIdUsersUserIDKey()
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
            (typeof client.api.v2.PackageTypes)[':id']['Users'][':userID']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v2.PackageTypes[':id'].Users[':userID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2PackageTypesIdUsersUserIDKey() {
  return ['api', '/api/v2/PackageTypes/:id/Users/:userID', 'DELETE'] as const
}

export function useDeleteApiV2PackageTypesIdUsersUserID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.PackageTypes)[':id']['Users'][':userID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.PackageTypes)[':id']['Users'][':userID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2PackageTypesIdUsersUserIDKey()
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
            (typeof client.api.v2.PackageTypes)[':id']['Users'][':userID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.PackageTypes[':id'].Users[':userID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2PackageTypetoBundlesKey(
  args: InferRequestType<typeof client.api.v2.PackageTypetoBundles.$get>,
) {
  return ['api', '/api/v2/PackageTypetoBundles', args] as const
}

export function useGetApiV2PackageTypetoBundles<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.PackageTypetoBundles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypetoBundles.$get>>>
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
        ? getGetApiV2PackageTypetoBundlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypetoBundles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.PackageTypetoBundles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2PackageTypetoBundles<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.PackageTypetoBundles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypetoBundles.$get>>>
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
        ? getGetApiV2PackageTypetoBundlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypetoBundles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.PackageTypetoBundles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2PackageTypetoBundlesKey() {
  return ['api', '/api/v2/PackageTypetoBundles', 'PUT'] as const
}

export function usePutApiV2PackageTypetoBundles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypetoBundles.$put>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.PackageTypetoBundles.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2PackageTypetoBundlesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.PackageTypetoBundles.$put> },
      ) => parseResponse(client.api.v2.PackageTypetoBundles.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2PackageTypetoBundlesKey() {
  return ['api', '/api/v2/PackageTypetoBundles', 'POST'] as const
}

export function usePostApiV2PackageTypetoBundles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypetoBundles.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.PackageTypetoBundles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2PackageTypetoBundlesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.PackageTypetoBundles.$post> },
      ) => parseResponse(client.api.v2.PackageTypetoBundles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2PackageTypetoBundlesKey() {
  return ['api', '/api/v2/PackageTypetoBundles', 'DELETE'] as const
}

export function useDeleteApiV2PackageTypetoBundles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.PackageTypetoBundles.$delete>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.PackageTypetoBundles.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2PackageTypetoBundlesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.PackageTypetoBundles.$delete> },
      ) => parseResponse(client.api.v2.PackageTypetoBundles.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2PackagesKey(args: InferRequestType<typeof client.api.v2.Packages.$get>) {
  return ['api', '/api/v2/Packages', args] as const
}

export function useGetApiV2Packages<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Packages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Packages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2PackagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Packages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Packages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Packages<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Packages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Packages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2PackagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Packages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Packages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2PackagesKey() {
  return ['api', '/api/v2/Packages', 'POST'] as const
}

export function usePostApiV2Packages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Packages.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.Packages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2PackagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.Packages.$post> }) =>
        parseResponse(client.api.v2.Packages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2PackagesIDKey(
  args: InferRequestType<(typeof client.api.v2.Packages)[':ID']['$get']>,
) {
  return ['api', '/api/v2/Packages/:ID', args] as const
}

export function useGetApiV2PackagesID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Packages)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Packages)[':ID']['$get']>>>
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
        ? getGetApiV2PackagesIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Packages)[':ID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Packages[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2PackagesID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Packages)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Packages)[':ID']['$get']>>>
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
        ? getGetApiV2PackagesIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Packages)[':ID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Packages[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2PackagesIDKey() {
  return ['api', '/api/v2/Packages/:ID', 'PUT'] as const
}

export function usePutApiV2PackagesID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Packages)[':ID']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.Packages)[':ID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2PackagesIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.Packages)[':ID']['$put']> },
      ) => parseResponse(client.api.v2.Packages[':ID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2PackagesIDKey() {
  return ['api', '/api/v2/Packages/:ID', 'DELETE'] as const
}

export function useDeleteApiV2PackagesID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Packages)[':ID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.Packages)[':ID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2PackagesIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.Packages)[':ID']['$delete']> },
      ) => parseResponse(client.api.v2.Packages[':ID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2PermissionsKey(
  args: InferRequestType<typeof client.api.v2.Permissions.$get>,
) {
  return ['api', '/api/v2/Permissions', args] as const
}

export function useGetApiV2Permissions<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Permissions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Permissions.$get>>>>
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
        ? getGetApiV2PermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Permissions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Permissions<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Permissions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Permissions.$get>>>>
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
        ? getGetApiV2PermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Permissions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2PermissionsKey() {
  return ['api', '/api/v2/Permissions', 'POST'] as const
}

export function usePostApiV2Permissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Permissions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.Permissions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2PermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.Permissions.$post> }) =>
        parseResponse(client.api.v2.Permissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2PermissionsIdKey(
  args: InferRequestType<(typeof client.api.v2.Permissions)[':id']['$get']>,
) {
  return ['api', '/api/v2/Permissions/:id', args] as const
}

export function useGetApiV2PermissionsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Permissions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Permissions)[':id']['$get']>>
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
        ? getGetApiV2PermissionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Permissions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Permissions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2PermissionsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Permissions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Permissions)[':id']['$get']>>
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
        ? getGetApiV2PermissionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Permissions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Permissions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2PermissionsIdKey() {
  return ['api', '/api/v2/Permissions/:id', 'PUT'] as const
}

export function usePutApiV2PermissionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Permissions)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.Permissions)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2PermissionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.Permissions)[':id']['$put']> },
      ) => parseResponse(client.api.v2.Permissions[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2PermissionsIdKey() {
  return ['api', '/api/v2/Permissions/:id', 'DELETE'] as const
}

export function useDeleteApiV2PermissionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Permissions)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.Permissions)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2PermissionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.Permissions)[':id']['$delete']> },
      ) => parseResponse(client.api.v2.Permissions[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2PriorityPackagesKey(
  args: InferRequestType<typeof client.api.v2.PriorityPackages.$get>,
) {
  return ['api', '/api/v2/PriorityPackages', args] as const
}

export function useGetApiV2PriorityPackages<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.PriorityPackages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PriorityPackages.$get>>>
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
        ? getGetApiV2PriorityPackagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PriorityPackages.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.PriorityPackages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2PriorityPackages<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.PriorityPackages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PriorityPackages.$get>>>
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
        ? getGetApiV2PriorityPackagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PriorityPackages.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.PriorityPackages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2PriorityPackagesKey() {
  return ['api', '/api/v2/PriorityPackages', 'POST'] as const
}

export function usePostApiV2PriorityPackages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PriorityPackages.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.PriorityPackages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2PriorityPackagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.PriorityPackages.$post> },
      ) => parseResponse(client.api.v2.PriorityPackages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2PriorityPackagesIDKey(
  args: InferRequestType<(typeof client.api.v2.PriorityPackages)[':ID']['$get']>,
) {
  return ['api', '/api/v2/PriorityPackages/:ID', args] as const
}

export function useGetApiV2PriorityPackagesID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.PriorityPackages)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.PriorityPackages)[':ID']['$get']>>
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
        ? getGetApiV2PriorityPackagesIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.PriorityPackages)[':ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.PriorityPackages[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2PriorityPackagesID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.PriorityPackages)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.PriorityPackages)[':ID']['$get']>>
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
        ? getGetApiV2PriorityPackagesIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.PriorityPackages)[':ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.PriorityPackages[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2PriorityPackagesIDKey() {
  return ['api', '/api/v2/PriorityPackages/:ID', 'DELETE'] as const
}

export function useDeleteApiV2PriorityPackagesID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.PriorityPackages)[':ID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.PriorityPackages)[':ID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2PriorityPackagesIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.PriorityPackages)[':ID']['$delete']> },
      ) => parseResponse(client.api.v2.PriorityPackages[':ID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ReleasesKey(args: InferRequestType<typeof client.api.v2.Releases.$get>) {
  return ['api', '/api/v2/Releases', args] as const
}

export function useGetApiV2Releases<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Releases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Releases.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2ReleasesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Releases.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Releases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Releases<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Releases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Releases.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2ReleasesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Releases.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Releases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ReleasesKey() {
  return ['api', '/api/v2/Releases', 'POST'] as const
}

export function usePostApiV2Releases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Releases.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.Releases.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ReleasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.Releases.$post> }) =>
        parseResponse(client.api.v2.Releases.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ReleasesReleaseIdKey(
  args: InferRequestType<(typeof client.api.v2.Releases)[':ReleaseId']['$get']>,
) {
  return ['api', '/api/v2/Releases/:ReleaseId', args] as const
}

export function useGetApiV2ReleasesReleaseId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Releases)[':ReleaseId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Releases)[':ReleaseId']['$get']>>
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
        ? getGetApiV2ReleasesReleaseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Releases)[':ReleaseId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Releases[':ReleaseId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ReleasesReleaseId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Releases)[':ReleaseId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Releases)[':ReleaseId']['$get']>>
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
        ? getGetApiV2ReleasesReleaseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Releases)[':ReleaseId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Releases[':ReleaseId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ReleasesReleaseIdBundleBundleIdKey() {
  return ['api', '/api/v2/Releases/:ReleaseId/Bundle/:BundleId', 'POST'] as const
}

export function usePostApiV2ReleasesReleaseIdBundleBundleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.Releases)[':ReleaseId']['Bundle'][':BundleId']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.Releases)[':ReleaseId']['Bundle'][':BundleId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ReleasesReleaseIdBundleBundleIdKey()
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
            (typeof client.api.v2.Releases)[':ReleaseId']['Bundle'][':BundleId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.Releases[':ReleaseId'].Bundle[':BundleId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2ReleasesReleaseIdBundleBundleIdKey() {
  return ['api', '/api/v2/Releases/:ReleaseId/Bundle/:BundleId', 'DELETE'] as const
}

export function useDeleteApiV2ReleasesReleaseIdBundleBundleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.Releases)[':ReleaseId']['Bundle'][':BundleId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.Releases)[':ReleaseId']['Bundle'][':BundleId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2ReleasesReleaseIdBundleBundleIdKey()
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
            (typeof client.api.v2.Releases)[':ReleaseId']['Bundle'][':BundleId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.Releases[':ReleaseId'].Bundle[':BundleId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV2ReleasesReleaseId2Key() {
  return ['api', '/api/v2/Releases/:releaseId', 'PUT'] as const
}

export function usePutApiV2ReleasesReleaseId2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Releases)[':releaseId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.Releases)[':releaseId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2ReleasesReleaseId2Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.Releases)[':releaseId']['$put']> },
      ) => parseResponse(client.api.v2.Releases[':releaseId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ReportingBundleStatusSummaryKey(
  args: InferRequestType<typeof client.api.v2.Reporting.BundleStatusSummary.$get>,
) {
  return ['api', '/api/v2/Reporting/BundleStatusSummary', args] as const
}

export function useGetApiV2ReportingBundleStatusSummary<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Reporting.BundleStatusSummary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.BundleStatusSummary.$get>>
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
        ? getGetApiV2ReportingBundleStatusSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.BundleStatusSummary.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.Reporting.BundleStatusSummary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ReportingBundleStatusSummary<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Reporting.BundleStatusSummary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.BundleStatusSummary.$get>>
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
        ? getGetApiV2ReportingBundleStatusSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.BundleStatusSummary.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.Reporting.BundleStatusSummary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ReportingBundlesInUpdateGroupKey(
  args: InferRequestType<typeof client.api.v2.Reporting.BundlesInUpdateGroup.$get>,
) {
  return ['api', '/api/v2/Reporting/BundlesInUpdateGroup', args] as const
}

export function useGetApiV2ReportingBundlesInUpdateGroup<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Reporting.BundlesInUpdateGroup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.BundlesInUpdateGroup.$get>>
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
        ? getGetApiV2ReportingBundlesInUpdateGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.BundlesInUpdateGroup.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.Reporting.BundlesInUpdateGroup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ReportingBundlesInUpdateGroup<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Reporting.BundlesInUpdateGroup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.BundlesInUpdateGroup.$get>>
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
        ? getGetApiV2ReportingBundlesInUpdateGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.BundlesInUpdateGroup.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.Reporting.BundlesInUpdateGroup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ReportingClientInfoKey(
  args: InferRequestType<typeof client.api.v2.Reporting.ClientInfo.$get>,
) {
  return ['api', '/api/v2/Reporting/ClientInfo', args] as const
}

export function useGetApiV2ReportingClientInfo<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Reporting.ClientInfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.ClientInfo.$get>>>
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
        ? getGetApiV2ReportingClientInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.ClientInfo.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Reporting.ClientInfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ReportingClientInfo<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Reporting.ClientInfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.ClientInfo.$get>>>
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
        ? getGetApiV2ReportingClientInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.ClientInfo.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Reporting.ClientInfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ReportingCurrentPackagesInUpdateGroupKey(
  args: InferRequestType<typeof client.api.v2.Reporting.CurrentPackagesInUpdateGroup.$get>,
) {
  return ['api', '/api/v2/Reporting/CurrentPackagesInUpdateGroup', args] as const
}

export function useGetApiV2ReportingCurrentPackagesInUpdateGroup<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Reporting.CurrentPackagesInUpdateGroup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.CurrentPackagesInUpdateGroup.$get>>
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
        ? getGetApiV2ReportingCurrentPackagesInUpdateGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.CurrentPackagesInUpdateGroup.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.Reporting.CurrentPackagesInUpdateGroup.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ReportingCurrentPackagesInUpdateGroup<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Reporting.CurrentPackagesInUpdateGroup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.CurrentPackagesInUpdateGroup.$get>>
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
        ? getGetApiV2ReportingCurrentPackagesInUpdateGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.CurrentPackagesInUpdateGroup.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.Reporting.CurrentPackagesInUpdateGroup.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ReportingGetClientKey(
  args: InferRequestType<typeof client.api.v2.Reporting.GetClient.$get>,
) {
  return ['api', '/api/v2/Reporting/GetClient', args] as const
}

export function useGetApiV2ReportingGetClient<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Reporting.GetClient.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.GetClient.$get>>>
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
        ? getGetApiV2ReportingGetClientKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.GetClient.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Reporting.GetClient.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ReportingGetClient<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Reporting.GetClient.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.GetClient.$get>>>
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
        ? getGetApiV2ReportingGetClientKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.GetClient.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Reporting.GetClient.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ReportingGetSubscriptionsKey(
  args: InferRequestType<typeof client.api.v2.Reporting.GetSubscriptions.$get>,
) {
  return ['api', '/api/v2/Reporting/GetSubscriptions', args] as const
}

export function useGetApiV2ReportingGetSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Reporting.GetSubscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.GetSubscriptions.$get>>
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
        ? getGetApiV2ReportingGetSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.GetSubscriptions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Reporting.GetSubscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ReportingGetSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Reporting.GetSubscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.GetSubscriptions.$get>>
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
        ? getGetApiV2ReportingGetSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.GetSubscriptions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Reporting.GetSubscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ReportingPackageStatusSummaryKey(
  args: InferRequestType<typeof client.api.v2.Reporting.PackageStatusSummary.$get>,
) {
  return ['api', '/api/v2/Reporting/PackageStatusSummary', args] as const
}

export function useGetApiV2ReportingPackageStatusSummary<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Reporting.PackageStatusSummary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.PackageStatusSummary.$get>>
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
        ? getGetApiV2ReportingPackageStatusSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.PackageStatusSummary.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.Reporting.PackageStatusSummary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ReportingPackageStatusSummary<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Reporting.PackageStatusSummary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.PackageStatusSummary.$get>>
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
        ? getGetApiV2ReportingPackageStatusSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.PackageStatusSummary.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.Reporting.PackageStatusSummary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ReportingRegisteredClientsKey(
  args: InferRequestType<typeof client.api.v2.Reporting.RegisteredClients.$get>,
) {
  return ['api', '/api/v2/Reporting/RegisteredClients', args] as const
}

export function useGetApiV2ReportingRegisteredClients<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Reporting.RegisteredClients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.RegisteredClients.$get>>
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
        ? getGetApiV2ReportingRegisteredClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.RegisteredClients.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.Reporting.RegisteredClients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ReportingRegisteredClients<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Reporting.RegisteredClients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.RegisteredClients.$get>>
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
        ? getGetApiV2ReportingRegisteredClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.RegisteredClients.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.Reporting.RegisteredClients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ReportingUpdateGroupsKey(
  args: InferRequestType<typeof client.api.v2.Reporting.UpdateGroups.$get>,
) {
  return ['api', '/api/v2/Reporting/UpdateGroups', args] as const
}

export function useGetApiV2ReportingUpdateGroups<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Reporting.UpdateGroups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.UpdateGroups.$get>>
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
        ? getGetApiV2ReportingUpdateGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.UpdateGroups.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Reporting.UpdateGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ReportingUpdateGroups<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Reporting.UpdateGroups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.UpdateGroups.$get>>
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
        ? getGetApiV2ReportingUpdateGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.UpdateGroups.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Reporting.UpdateGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ReportingUpdateMetricsKey(
  args: InferRequestType<typeof client.api.v2.Reporting.UpdateMetrics.$get>,
) {
  return ['api', '/api/v2/Reporting/UpdateMetrics', args] as const
}

export function useGetApiV2ReportingUpdateMetrics<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Reporting.UpdateMetrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.UpdateMetrics.$get>>
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
        ? getGetApiV2ReportingUpdateMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.UpdateMetrics.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Reporting.UpdateMetrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ReportingUpdateMetrics<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Reporting.UpdateMetrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.UpdateMetrics.$get>>
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
        ? getGetApiV2ReportingUpdateMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Reporting.UpdateMetrics.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Reporting.UpdateMetrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2RolesKey(args: InferRequestType<typeof client.api.v2.Roles.$get>) {
  return ['api', '/api/v2/Roles', args] as const
}

export function useGetApiV2Roles<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Roles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Roles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2RolesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Roles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Roles<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Roles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Roles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2RolesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Roles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2RolesKey() {
  return ['api', '/api/v2/Roles', 'POST'] as const
}

export function usePostApiV2Roles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Roles.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.Roles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2RolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.Roles.$post> }) =>
        parseResponse(client.api.v2.Roles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2RolesIdKey(
  args: InferRequestType<(typeof client.api.v2.Roles)[':id']['$get']>,
) {
  return ['api', '/api/v2/Roles/:id', args] as const
}

export function useGetApiV2RolesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Roles)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV2RolesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Roles[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2RolesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Roles)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV2RolesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Roles[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2RolesIdKey() {
  return ['api', '/api/v2/Roles/:id', 'PUT'] as const
}

export function usePutApiV2RolesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.Roles)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2RolesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.Roles)[':id']['$put']> },
      ) => parseResponse(client.api.v2.Roles[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2RolesIdKey() {
  return ['api', '/api/v2/Roles/:id', 'DELETE'] as const
}

export function useDeleteApiV2RolesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.Roles)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2RolesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.Roles)[':id']['$delete']> },
      ) => parseResponse(client.api.v2.Roles[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2RolesIdPermissionsKey(
  args: InferRequestType<(typeof client.api.v2.Roles)[':id']['Permissions']['$get']>,
) {
  return ['api', '/api/v2/Roles/:id/Permissions', args] as const
}

export function useGetApiV2RolesIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Roles)[':id']['Permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Permissions']['$get']>>
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
        ? getGetApiV2RolesIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Roles[':id'].Permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2RolesIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Roles)[':id']['Permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Permissions']['$get']>>
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
        ? getGetApiV2RolesIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Roles[':id'].Permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2RolesIdPermissionsKey() {
  return ['api', '/api/v2/Roles/:id/Permissions', 'PUT'] as const
}

export function usePutApiV2RolesIdPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Permissions']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.Roles)[':id']['Permissions']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2RolesIdPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.Roles)[':id']['Permissions']['$put']> },
      ) => parseResponse(client.api.v2.Roles[':id'].Permissions.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2RolesIdUsersKey(
  args: InferRequestType<(typeof client.api.v2.Roles)[':id']['Users']['$get']>,
) {
  return ['api', '/api/v2/Roles/:id/Users', args] as const
}

export function useGetApiV2RolesIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Roles)[':id']['Users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Users']['$get']>>
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
        ? getGetApiV2RolesIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Roles[':id'].Users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2RolesIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Roles)[':id']['Users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Users']['$get']>>
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
        ? getGetApiV2RolesIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Roles[':id'].Users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2RolesIdUsersKey() {
  return ['api', '/api/v2/Roles/:id/Users', 'PUT'] as const
}

export function usePutApiV2RolesIdUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Users']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.Roles)[':id']['Users']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2RolesIdUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.Roles)[':id']['Users']['$put']> },
      ) => parseResponse(client.api.v2.Roles[':id'].Users.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2StringDefinitionsKey(
  args: InferRequestType<typeof client.api.v2.StringDefinitions.$get>,
) {
  return ['api', '/api/v2/StringDefinitions', args] as const
}

export function useGetApiV2StringDefinitions<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.StringDefinitions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.StringDefinitions.$get>>>
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
        ? getGetApiV2StringDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.StringDefinitions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.StringDefinitions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2StringDefinitions<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.StringDefinitions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.StringDefinitions.$get>>>
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
        ? getGetApiV2StringDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.StringDefinitions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.StringDefinitions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2StringDefinitionsBatchKey() {
  return ['api', '/api/v2/StringDefinitions/Batch', 'PUT'] as const
}

export function usePutApiV2StringDefinitionsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.StringDefinitions.Batch.$put>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.StringDefinitions.Batch.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2StringDefinitionsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.StringDefinitions.Batch.$put> },
      ) => parseResponse(client.api.v2.StringDefinitions.Batch.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2StringDefinitionsBatchKey() {
  return ['api', '/api/v2/StringDefinitions/Batch', 'POST'] as const
}

export function usePostApiV2StringDefinitionsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.StringDefinitions.Batch.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.StringDefinitions.Batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2StringDefinitionsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.StringDefinitions.Batch.$post> },
      ) => parseResponse(client.api.v2.StringDefinitions.Batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2StringDefinitionsIDKey(
  args: InferRequestType<(typeof client.api.v2.StringDefinitions)[':ID']['$get']>,
) {
  return ['api', '/api/v2/StringDefinitions/:ID', args] as const
}

export function useGetApiV2StringDefinitionsID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.StringDefinitions)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.StringDefinitions)[':ID']['$get']>>
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
        ? getGetApiV2StringDefinitionsIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.StringDefinitions)[':ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.StringDefinitions[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2StringDefinitionsID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.StringDefinitions)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.StringDefinitions)[':ID']['$get']>>
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
        ? getGetApiV2StringDefinitionsIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.StringDefinitions)[':ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.StringDefinitions[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2StringTranslationsKey(
  args: InferRequestType<typeof client.api.v2.StringTranslations.$get>,
) {
  return ['api', '/api/v2/StringTranslations', args] as const
}

export function useGetApiV2StringTranslations<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.StringTranslations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.StringTranslations.$get>>>
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
        ? getGetApiV2StringTranslationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.StringTranslations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.StringTranslations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2StringTranslations<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.StringTranslations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.StringTranslations.$get>>>
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
        ? getGetApiV2StringTranslationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.StringTranslations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.StringTranslations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2StringTranslationsBatchKey() {
  return ['api', '/api/v2/StringTranslations/Batch', 'PUT'] as const
}

export function usePutApiV2StringTranslationsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.StringTranslations.Batch.$put>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.StringTranslations.Batch.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2StringTranslationsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.StringTranslations.Batch.$put> },
      ) => parseResponse(client.api.v2.StringTranslations.Batch.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2StringTranslationsStringIdLanguageIdKey(
  args: InferRequestType<
    (typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$get']
  >,
) {
  return ['api', '/api/v2/StringTranslations/:stringId/:languageId', args] as const
}

export function useGetApiV2StringTranslationsStringIdLanguageId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$get']
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
        ? getGetApiV2StringTranslationsStringIdLanguageIdKey(args)
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
                (typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$get']
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
          client.api.v2.StringTranslations[':stringId'][':languageId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2StringTranslationsStringIdLanguageId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$get']
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
        ? getGetApiV2StringTranslationsStringIdLanguageIdKey(args)
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
                (typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$get']
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
          client.api.v2.StringTranslations[':stringId'][':languageId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2StringTranslationsStringIdLanguageIdKey() {
  return ['api', '/api/v2/StringTranslations/:stringId/:languageId', 'PUT'] as const
}

export function usePutApiV2StringTranslationsStringIdLanguageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2StringTranslationsStringIdLanguageIdKey()
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
            (typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.StringTranslations[':stringId'][':languageId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2TranslationKeysKey(
  args: InferRequestType<typeof client.api.v2.TranslationKeys.$get>,
) {
  return ['api', '/api/v2/TranslationKeys', args] as const
}

export function useGetApiV2TranslationKeys<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.TranslationKeys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationKeys.$get>>>
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
        ? getGetApiV2TranslationKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationKeys.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.TranslationKeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2TranslationKeys<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.TranslationKeys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationKeys.$get>>>
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
        ? getGetApiV2TranslationKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationKeys.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.TranslationKeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2TranslationKeysKey() {
  return ['api', '/api/v2/TranslationKeys', 'POST'] as const
}

export function usePostApiV2TranslationKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationKeys.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.TranslationKeys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2TranslationKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.TranslationKeys.$post> },
      ) => parseResponse(client.api.v2.TranslationKeys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2TranslationKeysIDKey(
  args: InferRequestType<(typeof client.api.v2.TranslationKeys)[':ID']['$get']>,
) {
  return ['api', '/api/v2/TranslationKeys/:ID', args] as const
}

export function useGetApiV2TranslationKeysID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.TranslationKeys)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationKeys)[':ID']['$get']>>
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
        ? getGetApiV2TranslationKeysIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationKeys)[':ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.TranslationKeys[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2TranslationKeysID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.TranslationKeys)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationKeys)[':ID']['$get']>>
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
        ? getGetApiV2TranslationKeysIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationKeys)[':ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.TranslationKeys[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2TranslationKeysIDKey() {
  return ['api', '/api/v2/TranslationKeys/:ID', 'PUT'] as const
}

export function usePutApiV2TranslationKeysID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationKeys)[':ID']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.TranslationKeys)[':ID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2TranslationKeysIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.TranslationKeys)[':ID']['$put']> },
      ) => parseResponse(client.api.v2.TranslationKeys[':ID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2TranslationRequestsKey(
  args: InferRequestType<typeof client.api.v2.TranslationRequests.$get>,
) {
  return ['api', '/api/v2/TranslationRequests', args] as const
}

export function useGetApiV2TranslationRequests<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.TranslationRequests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationRequests.$get>>>
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
        ? getGetApiV2TranslationRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationRequests.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.TranslationRequests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2TranslationRequests<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.TranslationRequests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationRequests.$get>>>
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
        ? getGetApiV2TranslationRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationRequests.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.TranslationRequests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2TranslationRequestsKey() {
  return ['api', '/api/v2/TranslationRequests', 'POST'] as const
}

export function usePostApiV2TranslationRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationRequests.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.TranslationRequests.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2TranslationRequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.TranslationRequests.$post> },
      ) => parseResponse(client.api.v2.TranslationRequests.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2TranslationRequestsIdKey(
  args: InferRequestType<(typeof client.api.v2.TranslationRequests)[':Id']['$get']>,
) {
  return ['api', '/api/v2/TranslationRequests/:Id', args] as const
}

export function useGetApiV2TranslationRequestsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.TranslationRequests)[':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationRequests)[':Id']['$get']>>
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
        ? getGetApiV2TranslationRequestsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationRequests)[':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.TranslationRequests[':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2TranslationRequestsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.TranslationRequests)[':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationRequests)[':Id']['$get']>>
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
        ? getGetApiV2TranslationRequestsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationRequests)[':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.TranslationRequests[':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2TranslationRequestsIdKey() {
  return ['api', '/api/v2/TranslationRequests/:Id', 'PUT'] as const
}

export function usePutApiV2TranslationRequestsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationRequests)[':Id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.TranslationRequests)[':Id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2TranslationRequestsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.TranslationRequests)[':Id']['$put']> },
      ) => parseResponse(client.api.v2.TranslationRequests[':Id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiV2TranslationRequestsIdStringsKey() {
  return ['api', '/api/v2/TranslationRequests/:Id/Strings', 'PUT'] as const
}

export function usePutApiV2TranslationRequestsIdStrings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.TranslationRequests)[':Id']['Strings']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.TranslationRequests)[':Id']['Strings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2TranslationRequestsIdStringsKey()
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
            (typeof client.api.v2.TranslationRequests)[':Id']['Strings']['$put']
          >
        },
      ) => parseResponse(client.api.v2.TranslationRequests[':Id'].Strings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiV2TranslationSetAttributesBatchKey() {
  return ['api', '/api/v2/TranslationSetAttributes/Batch', 'PUT'] as const
}

export function usePutApiV2TranslationSetAttributesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.TranslationSetAttributes.Batch.$put>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.TranslationSetAttributes.Batch.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2TranslationSetAttributesBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.v2.TranslationSetAttributes.Batch.$put> },
      ) => parseResponse(client.api.v2.TranslationSetAttributes.Batch.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiV2TranslationSetAttributesIDKey() {
  return ['api', '/api/v2/TranslationSetAttributes/:ID', 'PUT'] as const
}

export function usePutApiV2TranslationSetAttributesID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationSetAttributes)[':ID']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.TranslationSetAttributes)[':ID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2TranslationSetAttributesIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.TranslationSetAttributes)[':ID']['$put']>
        },
      ) => parseResponse(client.api.v2.TranslationSetAttributes[':ID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2TranslationSetAttributesIDKey() {
  return ['api', '/api/v2/TranslationSetAttributes/:ID', 'DELETE'] as const
}

export function useDeleteApiV2TranslationSetAttributesID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationSetAttributes)[':ID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.TranslationSetAttributes)[':ID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2TranslationSetAttributesIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.TranslationSetAttributes)[':ID']['$delete']>
        },
      ) => parseResponse(client.api.v2.TranslationSetAttributes[':ID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2TranslationSetsKey(
  args: InferRequestType<typeof client.api.v2.TranslationSets.$get>,
) {
  return ['api', '/api/v2/TranslationSets', args] as const
}

export function useGetApiV2TranslationSets<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.TranslationSets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationSets.$get>>>
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
        ? getGetApiV2TranslationSetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationSets.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.TranslationSets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2TranslationSets<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.TranslationSets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationSets.$get>>>
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
        ? getGetApiV2TranslationSetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationSets.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.TranslationSets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2TranslationSetsIDKey(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['$get']>,
) {
  return ['api', '/api/v2/TranslationSets/:ID', args] as const
}

export function useGetApiV2TranslationSetsID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['$get']>>
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
        ? getGetApiV2TranslationSetsIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.TranslationSets[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2TranslationSetsID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['$get']>>
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
        ? getGetApiV2TranslationSetsIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.TranslationSets[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2TranslationSetsIDKey() {
  return ['api', '/api/v2/TranslationSets/:ID', 'PUT'] as const
}

export function usePutApiV2TranslationSetsID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2TranslationSetsIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['$put']> },
      ) => parseResponse(client.api.v2.TranslationSets[':ID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2TranslationSetsIDAttributesKey(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$get']>,
) {
  return ['api', '/api/v2/TranslationSets/:ID/Attributes', args] as const
}

export function useGetApiV2TranslationSetsIDAttributes<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$get']>>
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
        ? getGetApiV2TranslationSetsIDAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.TranslationSets[':ID'].Attributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2TranslationSetsIDAttributes<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$get']>>
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
        ? getGetApiV2TranslationSetsIDAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.TranslationSets[':ID'].Attributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2TranslationSetsIDAttributesKey() {
  return ['api', '/api/v2/TranslationSets/:ID/Attributes', 'POST'] as const
}

export function usePostApiV2TranslationSetsIDAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2TranslationSetsIDAttributesKey()
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
            (typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$post']
          >
        },
      ) => parseResponse(client.api.v2.TranslationSets[':ID'].Attributes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2TranslationSetsIDAttributesBatchKey() {
  return ['api', '/api/v2/TranslationSets/:ID/Attributes/Batch', 'POST'] as const
}

export function usePostApiV2TranslationSetsIDAttributesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.TranslationSets)[':ID']['Attributes']['Batch']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['Batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2TranslationSetsIDAttributesBatchKey()
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
            (typeof client.api.v2.TranslationSets)[':ID']['Attributes']['Batch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.TranslationSets[':ID'].Attributes.Batch.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2TranslationSetsIDSourceStringsKey(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['SourceStrings']['$get']>,
) {
  return ['api', '/api/v2/TranslationSets/:ID/SourceStrings', args] as const
}

export function useGetApiV2TranslationSetsIDSourceStrings<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['SourceStrings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['SourceStrings']['$get']>
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
        ? getGetApiV2TranslationSetsIDSourceStringsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['SourceStrings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.TranslationSets[':ID'].SourceStrings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2TranslationSetsIDSourceStrings<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['SourceStrings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['SourceStrings']['$get']>
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
        ? getGetApiV2TranslationSetsIDSourceStringsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['SourceStrings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.TranslationSets[':ID'].SourceStrings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2TranslationSetsIDStatisticsKey(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Statistics']['$get']>,
) {
  return ['api', '/api/v2/TranslationSets/:ID/Statistics', args] as const
}

export function useGetApiV2TranslationSetsIDStatistics<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Statistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Statistics']['$get']>>
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
        ? getGetApiV2TranslationSetsIDStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Statistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.TranslationSets[':ID'].Statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2TranslationSetsIDStatistics<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Statistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Statistics']['$get']>>
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
        ? getGetApiV2TranslationSetsIDStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Statistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.TranslationSets[':ID'].Statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2TranslationSetsIDStringsKey(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$get']>,
) {
  return ['api', '/api/v2/TranslationSets/:ID/Strings', args] as const
}

export function useGetApiV2TranslationSetsIDStrings<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$get']>>
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
        ? getGetApiV2TranslationSetsIDStringsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.TranslationSets[':ID'].Strings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2TranslationSetsIDStrings<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$get']>>
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
        ? getGetApiV2TranslationSetsIDStringsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.TranslationSets[':ID'].Strings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2TranslationSetsIDStringsKey() {
  return ['api', '/api/v2/TranslationSets/:ID/Strings', 'PUT'] as const
}

export function usePutApiV2TranslationSetsIDStrings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2TranslationSetsIDStringsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$put']>
        },
      ) => parseResponse(client.api.v2.TranslationSets[':ID'].Strings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2UpdateGroupClientRelationshipsKey(
  args: InferRequestType<typeof client.api.v2.UpdateGroupClientRelationships.$get>,
) {
  return ['api', '/api/v2/UpdateGroupClientRelationships', args] as const
}

export function useGetApiV2UpdateGroupClientRelationships<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.UpdateGroupClientRelationships.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.UpdateGroupClientRelationships.$get>>
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
        ? getGetApiV2UpdateGroupClientRelationshipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.UpdateGroupClientRelationships.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.UpdateGroupClientRelationships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UpdateGroupClientRelationships<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.UpdateGroupClientRelationships.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.UpdateGroupClientRelationships.$get>>
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
        ? getGetApiV2UpdateGroupClientRelationshipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.UpdateGroupClientRelationships.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.UpdateGroupClientRelationships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2UpdateGroupClientRelationshipsKey() {
  return ['api', '/api/v2/UpdateGroupClientRelationships', 'PUT'] as const
}

export function usePutApiV2UpdateGroupClientRelationships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.UpdateGroupClientRelationships.$put>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.UpdateGroupClientRelationships.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2UpdateGroupClientRelationshipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.v2.UpdateGroupClientRelationships.$put> },
      ) => parseResponse(client.api.v2.UpdateGroupClientRelationships.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2UpdateGroupClientRelationshipsKey() {
  return ['api', '/api/v2/UpdateGroupClientRelationships', 'POST'] as const
}

export function usePostApiV2UpdateGroupClientRelationships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.UpdateGroupClientRelationships.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.UpdateGroupClientRelationships.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2UpdateGroupClientRelationshipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.v2.UpdateGroupClientRelationships.$post> },
      ) => parseResponse(client.api.v2.UpdateGroupClientRelationships.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2UpdateGroupClientRelationshipsRelationshipIDKey(
  args: InferRequestType<
    (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$get']
  >,
) {
  return ['api', '/api/v2/UpdateGroupClientRelationships/:RelationshipID', args] as const
}

export function useGetApiV2UpdateGroupClientRelationshipsRelationshipID<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$get']
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
        ? getGetApiV2UpdateGroupClientRelationshipsRelationshipIDKey(args)
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
                (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$get']
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
          client.api.v2.UpdateGroupClientRelationships[':RelationshipID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UpdateGroupClientRelationshipsRelationshipID<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$get']
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
        ? getGetApiV2UpdateGroupClientRelationshipsRelationshipIDKey(args)
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
                (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$get']
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
          client.api.v2.UpdateGroupClientRelationships[':RelationshipID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2UpdateGroupClientRelationshipsRelationshipIDKey() {
  return ['api', '/api/v2/UpdateGroupClientRelationships/:RelationshipID', 'PUT'] as const
}

export function usePutApiV2UpdateGroupClientRelationshipsRelationshipID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2UpdateGroupClientRelationshipsRelationshipIDKey()
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
            (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.UpdateGroupClientRelationships[':RelationshipID'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2UpdateGroupSubscriptionsKey(
  args: InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.$get>,
) {
  return ['api', '/api/v2/UpdateGroupSubscriptions', args] as const
}

export function useGetApiV2UpdateGroupSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.UpdateGroupSubscriptions.$get>>
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
        ? getGetApiV2UpdateGroupSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.UpdateGroupSubscriptions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.UpdateGroupSubscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UpdateGroupSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.UpdateGroupSubscriptions.$get>>
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
        ? getGetApiV2UpdateGroupSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.UpdateGroupSubscriptions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.UpdateGroupSubscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2UpdateGroupSubscriptionsKey() {
  return ['api', '/api/v2/UpdateGroupSubscriptions', 'POST'] as const
}

export function usePostApiV2UpdateGroupSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.UpdateGroupSubscriptions.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2UpdateGroupSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.$post> },
      ) => parseResponse(client.api.v2.UpdateGroupSubscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiV2UpdateGroupSubscriptionsBatchKey() {
  return ['api', '/api/v2/UpdateGroupSubscriptions/Batch', 'PUT'] as const
}

export function usePutApiV2UpdateGroupSubscriptionsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.UpdateGroupSubscriptions.Batch.$put>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.Batch.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2UpdateGroupSubscriptionsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.Batch.$put> },
      ) => parseResponse(client.api.v2.UpdateGroupSubscriptions.Batch.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2UpdateGroupSubscriptionsBatchKey() {
  return ['api', '/api/v2/UpdateGroupSubscriptions/Batch', 'POST'] as const
}

export function usePostApiV2UpdateGroupSubscriptionsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.UpdateGroupSubscriptions.Batch.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.Batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2UpdateGroupSubscriptionsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.Batch.$post> },
      ) => parseResponse(client.api.v2.UpdateGroupSubscriptions.Batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDKey(
  args: InferRequestType<
    (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$get']
  >,
) {
  return ['api', '/api/v2/UpdateGroupSubscriptions/:UpdateGroupSubscriptionID', args] as const
}

export function useGetApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionID<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$get']
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
        ? getGetApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDKey(args)
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
                (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$get']
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
          client.api.v2.UpdateGroupSubscriptions[':UpdateGroupSubscriptionID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionID<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$get']
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
        ? getGetApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDKey(args)
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
                (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$get']
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
          client.api.v2.UpdateGroupSubscriptions[':UpdateGroupSubscriptionID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDKey() {
  return ['api', '/api/v2/UpdateGroupSubscriptions/:UpdateGroupSubscriptionID', 'PUT'] as const
}

export function usePutApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDKey()
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
            (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.UpdateGroupSubscriptions[':UpdateGroupSubscriptionID'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDKey() {
  return ['api', '/api/v2/UpdateGroupSubscriptions/:UpdateGroupSubscriptionID', 'DELETE'] as const
}

export function useDeleteApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDKey()
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
            (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.UpdateGroupSubscriptions[':UpdateGroupSubscriptionID'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2UpdateGroupsKey(
  args: InferRequestType<typeof client.api.v2.UpdateGroups.$get>,
) {
  return ['api', '/api/v2/UpdateGroups', args] as const
}

export function useGetApiV2UpdateGroups<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.UpdateGroups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateGroups.$get>>>
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
        ? getGetApiV2UpdateGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateGroups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.UpdateGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UpdateGroups<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.UpdateGroups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateGroups.$get>>>
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
        ? getGetApiV2UpdateGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateGroups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.UpdateGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2UpdateGroupsKey() {
  return ['api', '/api/v2/UpdateGroups', 'POST'] as const
}

export function usePostApiV2UpdateGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateGroups.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.UpdateGroups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2UpdateGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.UpdateGroups.$post> }) =>
        parseResponse(client.api.v2.UpdateGroups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2UpdateGroupsIDKey(
  args: InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['$get']>,
) {
  return ['api', '/api/v2/UpdateGroups/:ID', args] as const
}

export function useGetApiV2UpdateGroupsID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['$get']>>
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
        ? getGetApiV2UpdateGroupsIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.UpdateGroups[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UpdateGroupsID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['$get']>>
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
        ? getGetApiV2UpdateGroupsIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.UpdateGroups[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2UpdateGroupsIDKey() {
  return ['api', '/api/v2/UpdateGroups/:ID', 'PUT'] as const
}

export function usePutApiV2UpdateGroupsID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2UpdateGroupsIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['$put']> },
      ) => parseResponse(client.api.v2.UpdateGroups[':ID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2UpdateGroupsIDKey() {
  return ['api', '/api/v2/UpdateGroups/:ID', 'DELETE'] as const
}

export function useDeleteApiV2UpdateGroupsID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2UpdateGroupsIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['$delete']> },
      ) => parseResponse(client.api.v2.UpdateGroups[':ID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2UpdateGroupsIDBundlesKey(
  args: InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['Bundles']['$get']>,
) {
  return ['api', '/api/v2/UpdateGroups/:ID/Bundles', args] as const
}

export function useGetApiV2UpdateGroupsIDBundles<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['Bundles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['Bundles']['$get']>>
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
        ? getGetApiV2UpdateGroupsIDBundlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['Bundles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.UpdateGroups[':ID'].Bundles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UpdateGroupsIDBundles<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['Bundles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['Bundles']['$get']>>
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
        ? getGetApiV2UpdateGroupsIDBundlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['Bundles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.UpdateGroups[':ID'].Bundles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2UpdateGroupsIdUsersUserIDKey() {
  return ['api', '/api/v2/UpdateGroups/:id/Users/:userID', 'POST'] as const
}

export function usePostApiV2UpdateGroupsIdUsersUserID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.UpdateGroups)[':id']['Users'][':userID']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.UpdateGroups)[':id']['Users'][':userID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2UpdateGroupsIdUsersUserIDKey()
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
            (typeof client.api.v2.UpdateGroups)[':id']['Users'][':userID']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v2.UpdateGroups[':id'].Users[':userID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2UpdateGroupsIdUsersUserIDKey() {
  return ['api', '/api/v2/UpdateGroups/:id/Users/:userID', 'DELETE'] as const
}

export function useDeleteApiV2UpdateGroupsIdUsersUserID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.UpdateGroups)[':id']['Users'][':userID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.UpdateGroups)[':id']['Users'][':userID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2UpdateGroupsIdUsersUserIDKey()
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
            (typeof client.api.v2.UpdateGroups)[':id']['Users'][':userID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.UpdateGroups[':id'].Users[':userID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2UpdateSystemKey(
  args: InferRequestType<typeof client.api.v2.UpdateSystem.$get>,
) {
  return ['api', '/api/v2/UpdateSystem', args] as const
}

export function useGetApiV2UpdateSystem<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.UpdateSystem.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateSystem.$get>>>
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
        ? getGetApiV2UpdateSystemKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateSystem.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.UpdateSystem.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UpdateSystem<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.UpdateSystem.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateSystem.$get>>>
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
        ? getGetApiV2UpdateSystemKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateSystem.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.UpdateSystem.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UserContentDefinitionsKey(
  args: InferRequestType<typeof client.api.v2.UserContentDefinitions.$get>,
) {
  return ['api', '/api/v2/UserContentDefinitions', args] as const
}

export function useGetApiV2UserContentDefinitions<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.UserContentDefinitions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.UserContentDefinitions.$get>>
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
        ? getGetApiV2UserContentDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.UserContentDefinitions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.UserContentDefinitions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UserContentDefinitions<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.UserContentDefinitions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.UserContentDefinitions.$get>>
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
        ? getGetApiV2UserContentDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.UserContentDefinitions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.UserContentDefinitions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2UserContentDefinitionsKey() {
  return ['api', '/api/v2/UserContentDefinitions', 'POST'] as const
}

export function usePostApiV2UserContentDefinitions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UserContentDefinitions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.UserContentDefinitions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2UserContentDefinitionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.UserContentDefinitions.$post> },
      ) => parseResponse(client.api.v2.UserContentDefinitions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2UserContentDefinitionsUserContentDefinitionIDKey(
  args: InferRequestType<
    (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$get']
  >,
) {
  return ['api', '/api/v2/UserContentDefinitions/:userContentDefinitionID', args] as const
}

export function useGetApiV2UserContentDefinitionsUserContentDefinitionID<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$get']
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
        ? getGetApiV2UserContentDefinitionsUserContentDefinitionIDKey(args)
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
                (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$get']
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
          client.api.v2.UserContentDefinitions[':userContentDefinitionID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UserContentDefinitionsUserContentDefinitionID<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$get']
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
        ? getGetApiV2UserContentDefinitionsUserContentDefinitionIDKey(args)
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
                (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$get']
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
          client.api.v2.UserContentDefinitions[':userContentDefinitionID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2UserContentDefinitionsUserContentDefinitionIDKey() {
  return ['api', '/api/v2/UserContentDefinitions/:userContentDefinitionID', 'DELETE'] as const
}

export function useDeleteApiV2UserContentDefinitionsUserContentDefinitionID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2UserContentDefinitionsUserContentDefinitionIDKey()
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
            (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.UserContentDefinitions[':userContentDefinitionID'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2UsersKey(args: InferRequestType<typeof client.api.v2.Users.$get>) {
  return ['api', '/api/v2/Users', args] as const
}

export function useGetApiV2Users<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2UsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Users<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2UsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2UsersKey() {
  return ['api', '/api/v2/Users', 'POST'] as const
}

export function usePostApiV2Users<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.Users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2UsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.Users.$post> }) =>
        parseResponse(client.api.v2.Users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2UsersCurrentKey() {
  return ['api', '/api/v2/Users/Current'] as const
}

export function useGetApiV2UsersCurrent<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2UsersCurrentKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Users.Current.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsersCurrent<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2UsersCurrentKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Users.Current.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2UsersCurrentKey() {
  return ['api', '/api/v2/Users/Current', 'PUT'] as const
}

export function usePutApiV2UsersCurrent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.$put>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.Users.Current.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2UsersCurrentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.Users.Current.$put> }) =>
        parseResponse(client.api.v2.Users.Current.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2UsersCurrentPermissionsKey(
  args: InferRequestType<typeof client.api.v2.Users.Current.Permissions.$get>,
) {
  return ['api', '/api/v2/Users/Current/Permissions', args] as const
}

export function useGetApiV2UsersCurrentPermissions<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Users.Current.Permissions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Users.Current.Permissions.$get>>
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
        ? getGetApiV2UsersCurrentPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Users.Current.Permissions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Users.Current.Permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsersCurrentPermissions<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Users.Current.Permissions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Users.Current.Permissions.$get>>
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
        ? getGetApiV2UsersCurrentPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Users.Current.Permissions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Users.Current.Permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsersCurrentRolesKey(
  args: InferRequestType<typeof client.api.v2.Users.Current.Roles.$get>,
) {
  return ['api', '/api/v2/Users/Current/Roles', args] as const
}

export function useGetApiV2UsersCurrentRoles<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Users.Current.Roles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.Roles.$get>>>
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
        ? getGetApiV2UsersCurrentRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.Roles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Users.Current.Roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsersCurrentRoles<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Users.Current.Roles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.Roles.$get>>>
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
        ? getGetApiV2UsersCurrentRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.Roles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Users.Current.Roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsersIdKey(
  args: InferRequestType<(typeof client.api.v2.Users)[':id']['$get']>,
) {
  return ['api', '/api/v2/Users/:id', args] as const
}

export function useGetApiV2UsersId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV2UsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsersId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV2UsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2UsersIdKey() {
  return ['api', '/api/v2/Users/:id', 'PUT'] as const
}

export function usePutApiV2UsersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.Users)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2UsersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.Users)[':id']['$put']> },
      ) => parseResponse(client.api.v2.Users[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2UsersIdKey() {
  return ['api', '/api/v2/Users/:id', 'DELETE'] as const
}

export function useDeleteApiV2UsersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.Users)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2UsersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.Users)[':id']['$delete']> },
      ) => parseResponse(client.api.v2.Users[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2UsersIdPermissionsKey(
  args: InferRequestType<(typeof client.api.v2.Users)[':id']['Permissions']['$get']>,
) {
  return ['api', '/api/v2/Users/:id/Permissions', args] as const
}

export function useGetApiV2UsersIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Users)[':id']['Permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['Permissions']['$get']>>
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
        ? getGetApiV2UsersIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['Permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Users[':id'].Permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsersIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Users)[':id']['Permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['Permissions']['$get']>>
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
        ? getGetApiV2UsersIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['Permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Users[':id'].Permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsersIdRolesKey(
  args: InferRequestType<(typeof client.api.v2.Users)[':id']['Roles']['$get']>,
) {
  return ['api', '/api/v2/Users/:id/Roles', args] as const
}

export function useGetApiV2UsersIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Users)[':id']['Roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['Roles']['$get']>>
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
        ? getGetApiV2UsersIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['Roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Users[':id'].Roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsersIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Users)[':id']['Roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['Roles']['$get']>>
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
        ? getGetApiV2UsersIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['Roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Users[':id'].Roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2UsersIdRolesKey() {
  return ['api', '/api/v2/Users/:id/Roles', 'PUT'] as const
}

export function usePutApiV2UsersIdRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['Roles']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.Users)[':id']['Roles']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2UsersIdRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.Users)[':id']['Roles']['$put']> },
      ) => parseResponse(client.api.v2.Users[':id'].Roles.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2VoucherHistoryKey(
  args: InferRequestType<typeof client.api.v2.VoucherHistory.$get>,
) {
  return ['api', '/api/v2/VoucherHistory', args] as const
}

export function useGetApiV2VoucherHistory<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.VoucherHistory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.VoucherHistory.$get>>>
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
        ? getGetApiV2VoucherHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.VoucherHistory.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.VoucherHistory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2VoucherHistory<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.VoucherHistory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.VoucherHistory.$get>>>
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
        ? getGetApiV2VoucherHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.VoucherHistory.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.VoucherHistory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2VouchersKey(args: InferRequestType<typeof client.api.v2.Vouchers.$get>) {
  return ['api', '/api/v2/Vouchers', args] as const
}

export function useGetApiV2Vouchers<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Vouchers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Vouchers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2VouchersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Vouchers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Vouchers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Vouchers<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.Vouchers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Vouchers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2VouchersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Vouchers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Vouchers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2VouchersKey() {
  return ['api', '/api/v2/Vouchers', 'POST'] as const
}

export function usePostApiV2Vouchers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Vouchers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.Vouchers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2VouchersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.Vouchers.$post> }) =>
        parseResponse(client.api.v2.Vouchers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2VouchersVoucherCodeKey(
  args: InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$get']>,
) {
  return ['api', '/api/v2/Vouchers/:VoucherCode', args] as const
}

export function useGetApiV2VouchersVoucherCode<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$get']>>
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
        ? getGetApiV2VouchersVoucherCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Vouchers[':VoucherCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2VouchersVoucherCode<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$get']>>
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
        ? getGetApiV2VouchersVoucherCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.Vouchers[':VoucherCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2VouchersVoucherCodeKey() {
  return ['api', '/api/v2/Vouchers/:VoucherCode', 'PUT'] as const
}

export function usePutApiV2VouchersVoucherCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2VouchersVoucherCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$put']> },
      ) => parseResponse(client.api.v2.Vouchers[':VoucherCode'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2VouchersVoucherCodeKey() {
  return ['api', '/api/v2/Vouchers/:VoucherCode', 'DELETE'] as const
}

export function useDeleteApiV2VouchersVoucherCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2VouchersVoucherCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$delete']> },
      ) => parseResponse(client.api.v2.Vouchers[':VoucherCode'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2VouchersVoucherCodeVoucherHistoryKey(
  args: InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['VoucherHistory']['$get']>,
) {
  return ['api', '/api/v2/Vouchers/:VoucherCode/VoucherHistory', args] as const
}

export function useGetApiV2VouchersVoucherCodeVoucherHistory<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['VoucherHistory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.Vouchers)[':VoucherCode']['VoucherHistory']['$get']>
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
        ? getGetApiV2VouchersVoucherCodeVoucherHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.Vouchers)[':VoucherCode']['VoucherHistory']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.Vouchers[':VoucherCode'].VoucherHistory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2VouchersVoucherCodeVoucherHistory<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['VoucherHistory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.Vouchers)[':VoucherCode']['VoucherHistory']['$get']>
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
        ? getGetApiV2VouchersVoucherCodeVoucherHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.Vouchers)[':VoucherCode']['VoucherHistory']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.Vouchers[':VoucherCode'].VoucherHistory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ActivitiesKey(
  args: InferRequestType<typeof client.api.v2.activities.$get>,
) {
  return ['api', '/api/v2/activities', args] as const
}

export function useGetApiV2Activities<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activities.$get>>>>
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
        ? getGetApiV2ActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Activities<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activities.$get>>>>
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
        ? getGetApiV2ActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ActivitiesKey() {
  return ['api', '/api/v2/activities', 'POST'] as const
}

export function usePostApiV2Activities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activities.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.activities.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ActivitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.activities.$post> }) =>
        parseResponse(client.api.v2.activities.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ActivitiesActivityIDKey(
  args: InferRequestType<(typeof client.api.v2.activities)[':activityID']['$get']>,
) {
  return ['api', '/api/v2/activities/:activityID', args] as const
}

export function useGetApiV2ActivitiesActivityID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.activities)[':activityID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.activities)[':activityID']['$get']>>
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
        ? getGetApiV2ActivitiesActivityIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.activities)[':activityID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.activities[':activityID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ActivitiesActivityID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.activities)[':activityID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.activities)[':activityID']['$get']>>
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
        ? getGetApiV2ActivitiesActivityIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.activities)[':activityID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.activities[':activityID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2ActivitiesActivityIDKey() {
  return ['api', '/api/v2/activities/:activityID', 'PUT'] as const
}

export function usePutApiV2ActivitiesActivityID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.activities)[':activityID']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.activities)[':activityID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2ActivitiesActivityIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.activities)[':activityID']['$put']> },
      ) => parseResponse(client.api.v2.activities[':activityID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2ActivitiesActivityIDKey() {
  return ['api', '/api/v2/activities/:activityID', 'DELETE'] as const
}

export function useDeleteApiV2ActivitiesActivityID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.activities)[':activityID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.activities)[':activityID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2ActivitiesActivityIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.activities)[':activityID']['$delete']> },
      ) => parseResponse(client.api.v2.activities[':activityID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ActivityRunsKey(
  args: InferRequestType<typeof client.api.v2.activityRuns.$get>,
) {
  return ['api', '/api/v2/activityRuns', args] as const
}

export function useGetApiV2ActivityRuns<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.activityRuns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activityRuns.$get>>>
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
        ? getGetApiV2ActivityRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activityRuns.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.activityRuns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ActivityRuns<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.activityRuns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activityRuns.$get>>>
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
        ? getGetApiV2ActivityRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activityRuns.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.activityRuns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ActivityRunsActivityRunIDKey(
  args: InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['$get']>,
) {
  return ['api', '/api/v2/activityRuns/:activityRunID', args] as const
}

export function useGetApiV2ActivityRunsActivityRunID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.activityRuns)[':activityRunID']['$get']>>
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
        ? getGetApiV2ActivityRunsActivityRunIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.activityRuns)[':activityRunID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.activityRuns[':activityRunID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ActivityRunsActivityRunID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.activityRuns)[':activityRunID']['$get']>>
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
        ? getGetApiV2ActivityRunsActivityRunIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.activityRuns)[':activityRunID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.activityRuns[':activityRunID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2ActivityRunsActivityRunIDKey() {
  return ['api', '/api/v2/activityRuns/:activityRunID', 'PUT'] as const
}

export function usePutApiV2ActivityRunsActivityRunID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.activityRuns)[':activityRunID']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2ActivityRunsActivityRunIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['$put']> },
      ) => parseResponse(client.api.v2.activityRuns[':activityRunID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ActivityRunsActivityRunIDStatusKey(
  args: InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['status']['$get']>,
) {
  return ['api', '/api/v2/activityRuns/:activityRunID/status', args] as const
}

export function useGetApiV2ActivityRunsActivityRunIDStatus<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.activityRuns)[':activityRunID']['status']['$get']>
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
        ? getGetApiV2ActivityRunsActivityRunIDStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.activityRuns)[':activityRunID']['status']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.activityRuns[':activityRunID'].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ActivityRunsActivityRunIDStatus<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.activityRuns)[':activityRunID']['status']['$get']>
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
        ? getGetApiV2ActivityRunsActivityRunIDStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.activityRuns)[':activityRunID']['status']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.activityRuns[':activityRunID'].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2ActivityRunsActivityRunIDStatusKey() {
  return ['api', '/api/v2/activityRuns/:activityRunID/status', 'PUT'] as const
}

export function usePutApiV2ActivityRunsActivityRunIDStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.activityRuns)[':activityRunID']['status']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2ActivityRunsActivityRunIDStatusKey()
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
            (typeof client.api.v2.activityRuns)[':activityRunID']['status']['$put']
          >
        },
      ) =>
        parseResponse(client.api.v2.activityRuns[':activityRunID'].status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2AgentsKey(args: InferRequestType<typeof client.api.v2.agents.$get>) {
  return ['api', '/api/v2/agents', args] as const
}

export function useGetApiV2Agents<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.agents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2AgentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.agents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Agents<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.agents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2AgentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.agents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2AgentsKey() {
  return ['api', '/api/v2/agents', 'POST'] as const
}

export function usePostApiV2Agents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.agents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2AgentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.agents.$post> }) =>
        parseResponse(client.api.v2.agents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2AgentsCurrentKey() {
  return ['api', '/api/v2/agents/Current'] as const
}

export function useGetApiV2AgentsCurrent<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.Current.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2AgentsCurrentKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.Current.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.agents.Current.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AgentsCurrent<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.Current.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2AgentsCurrentKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.Current.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.agents.Current.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AgentsCurrentActivityRunKey() {
  return ['api', '/api/v2/agents/Current/ActivityRun'] as const
}

export function useGetApiV2AgentsCurrentActivityRun<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.agents.Current.ActivityRun.$get>>
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
        ? getGetApiV2AgentsCurrentActivityRunKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.agents.Current.ActivityRun.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.agents.Current.ActivityRun.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AgentsCurrentActivityRun<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.agents.Current.ActivityRun.$get>>
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
        ? getGetApiV2AgentsCurrentActivityRunKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.agents.Current.ActivityRun.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.agents.Current.ActivityRun.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AgentsAgentIDKey(
  args: InferRequestType<(typeof client.api.v2.agents)[':agentID']['$get']>,
) {
  return ['api', '/api/v2/agents/:agentID', args] as const
}

export function useGetApiV2AgentsAgentID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.agents)[':agentID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['$get']>>
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
        ? getGetApiV2AgentsAgentIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.agents[':agentID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AgentsAgentID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.agents)[':agentID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['$get']>>
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
        ? getGetApiV2AgentsAgentIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.agents[':agentID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2AgentsAgentIDKey() {
  return ['api', '/api/v2/agents/:agentID', 'PUT'] as const
}

export function usePutApiV2AgentsAgentID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.agents)[':agentID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2AgentsAgentIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.agents)[':agentID']['$put']> },
      ) => parseResponse(client.api.v2.agents[':agentID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2AgentsAgentIDKey() {
  return ['api', '/api/v2/agents/:agentID', 'DELETE'] as const
}

export function useDeleteApiV2AgentsAgentID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.agents)[':agentID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2AgentsAgentIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.agents)[':agentID']['$delete']> },
      ) => parseResponse(client.api.v2.agents[':agentID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2AgentsAgentIDActivityRunKey(
  args: InferRequestType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$get']>,
) {
  return ['api', '/api/v2/agents/:agentID/ActivityRun', args] as const
}

export function useGetApiV2AgentsAgentIDActivityRun<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$get']>>
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
        ? getGetApiV2AgentsAgentIDActivityRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.agents[':agentID'].ActivityRun.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AgentsAgentIDActivityRun<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$get']>>
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
        ? getGetApiV2AgentsAgentIDActivityRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.agents[':agentID'].ActivityRun.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2AgentsAgentIDActivityRunKey() {
  return ['api', '/api/v2/agents/:agentID/ActivityRun', 'PUT'] as const
}

export function usePutApiV2AgentsAgentIDActivityRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2AgentsAgentIDActivityRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$put']>
        },
      ) => parseResponse(client.api.v2.agents[':agentID'].ActivityRun.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiV2AgentsAgentIDStatusKey() {
  return ['api', '/api/v2/agents/:agentID/Status', 'PUT'] as const
}

export function usePutApiV2AgentsAgentIDStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['Status']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.agents)[':agentID']['Status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2AgentsAgentIDStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.agents)[':agentID']['Status']['$put']> },
      ) => parseResponse(client.api.v2.agents[':agentID'].Status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2JobRunsKey(args: InferRequestType<typeof client.api.v2.jobRuns.$get>) {
  return ['api', '/api/v2/jobRuns', args] as const
}

export function useGetApiV2JobRuns<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.jobRuns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobRuns.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2JobRunsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobRuns.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.jobRuns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2JobRuns<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.jobRuns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobRuns.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2JobRunsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobRuns.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.jobRuns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2JobRunsKey() {
  return ['api', '/api/v2/jobRuns', 'POST'] as const
}

export function usePostApiV2JobRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobRuns.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.jobRuns.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2JobRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.jobRuns.$post> }) =>
        parseResponse(client.api.v2.jobRuns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2JobRunsJobRunIDKey(
  args: InferRequestType<(typeof client.api.v2.jobRuns)[':jobRunID']['$get']>,
) {
  return ['api', '/api/v2/jobRuns/:jobRunID', args] as const
}

export function useGetApiV2JobRunsJobRunID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.jobRuns)[':jobRunID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.jobRuns)[':jobRunID']['$get']>>
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
        ? getGetApiV2JobRunsJobRunIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.jobRuns)[':jobRunID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.jobRuns[':jobRunID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2JobRunsJobRunID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.jobRuns)[':jobRunID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.jobRuns)[':jobRunID']['$get']>>
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
        ? getGetApiV2JobRunsJobRunIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.jobRuns)[':jobRunID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.jobRuns[':jobRunID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2JobRunsJobRunIDKey() {
  return ['api', '/api/v2/jobRuns/:jobRunID', 'PUT'] as const
}

export function usePutApiV2JobRunsJobRunID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.jobRuns)[':jobRunID']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.jobRuns)[':jobRunID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2JobRunsJobRunIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.jobRuns)[':jobRunID']['$put']> },
      ) => parseResponse(client.api.v2.jobRuns[':jobRunID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2JobRunsJobRunIDKey() {
  return ['api', '/api/v2/jobRuns/:jobRunID', 'DELETE'] as const
}

export function useDeleteApiV2JobRunsJobRunID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.jobRuns)[':jobRunID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.jobRuns)[':jobRunID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2JobRunsJobRunIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.jobRuns)[':jobRunID']['$delete']> },
      ) => parseResponse(client.api.v2.jobRuns[':jobRunID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2JobsKey(args: InferRequestType<typeof client.api.v2.jobs.$get>) {
  return ['api', '/api/v2/jobs', args] as const
}

export function useGetApiV2Jobs<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2JobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Jobs<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2JobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2JobsKey() {
  return ['api', '/api/v2/jobs', 'POST'] as const
}

export function usePostApiV2Jobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.jobs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2JobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.jobs.$post> }) =>
        parseResponse(client.api.v2.jobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2JobsJobIDKey(
  args: InferRequestType<(typeof client.api.v2.jobs)[':jobID']['$get']>,
) {
  return ['api', '/api/v2/jobs/:jobID', args] as const
}

export function useGetApiV2JobsJobID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.jobs)[':jobID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.jobs)[':jobID']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV2JobsJobIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.jobs)[':jobID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.jobs[':jobID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2JobsJobID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.jobs)[':jobID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.jobs)[':jobID']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV2JobsJobIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.jobs)[':jobID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.jobs[':jobID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2JobsJobIDKey() {
  return ['api', '/api/v2/jobs/:jobID', 'PUT'] as const
}

export function usePutApiV2JobsJobID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.jobs)[':jobID']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.jobs)[':jobID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2JobsJobIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.jobs)[':jobID']['$put']> },
      ) => parseResponse(client.api.v2.jobs[':jobID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2JobsJobIDKey() {
  return ['api', '/api/v2/jobs/:jobID', 'DELETE'] as const
}

export function useDeleteApiV2JobsJobID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.jobs)[':jobID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.jobs)[':jobID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2JobsJobIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.jobs)[':jobID']['$delete']> },
      ) => parseResponse(client.api.v2.jobs[':jobID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2StepsKey(args: InferRequestType<typeof client.api.v2.steps.$get>) {
  return ['api', '/api/v2/steps', args] as const
}

export function useGetApiV2Steps<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.steps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.steps.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2StepsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.steps.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.steps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Steps<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.steps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.steps.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2StepsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.steps.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.steps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2StepsKey() {
  return ['api', '/api/v2/steps', 'POST'] as const
}

export function usePostApiV2Steps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.steps.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.steps.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2StepsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.steps.$post> }) =>
        parseResponse(client.api.v2.steps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2StepsStepIDKey(
  args: InferRequestType<(typeof client.api.v2.steps)[':stepID']['$get']>,
) {
  return ['api', '/api/v2/steps/:stepID', args] as const
}

export function useGetApiV2StepsStepID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.steps)[':stepID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.steps)[':stepID']['$get']>>>
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
        ? getGetApiV2StepsStepIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.steps)[':stepID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.steps[':stepID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2StepsStepID<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.steps)[':stepID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.steps)[':stepID']['$get']>>>
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
        ? getGetApiV2StepsStepIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.steps)[':stepID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.steps[':stepID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2StepsStepIDKey() {
  return ['api', '/api/v2/steps/:stepID', 'PUT'] as const
}

export function usePutApiV2StepsStepID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.steps)[':stepID']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.steps)[':stepID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2StepsStepIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.steps)[':stepID']['$put']> },
      ) => parseResponse(client.api.v2.steps[':stepID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
