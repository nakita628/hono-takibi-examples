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

export function getPostV1AppExchangeAppAttestAssertionKey() {
  return ['v1', '/v1/:app:exchangeAppAttestAssertion', 'POST'] as const
}

export function usePostV1AppExchangeAppAttestAssertion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':app:exchangeAppAttestAssertion']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':app:exchangeAppAttestAssertion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppExchangeAppAttestAssertionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)[':app:exchangeAppAttestAssertion']['$post']>
        },
      ) => parseResponse(client.v1[':app:exchangeAppAttestAssertion'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AppExchangeAppAttestAttestationKey() {
  return ['v1', '/v1/:app:exchangeAppAttestAttestation', 'POST'] as const
}

export function usePostV1AppExchangeAppAttestAttestation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':app:exchangeAppAttestAttestation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':app:exchangeAppAttestAttestation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppExchangeAppAttestAttestationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)[':app:exchangeAppAttestAttestation']['$post']>
        },
      ) => parseResponse(client.v1[':app:exchangeAppAttestAttestation'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AppExchangeCustomTokenKey() {
  return ['v1', '/v1/:app:exchangeCustomToken', 'POST'] as const
}

export function usePostV1AppExchangeCustomToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':app:exchangeCustomToken']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':app:exchangeCustomToken']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppExchangeCustomTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)[':app:exchangeCustomToken']['$post']> },
      ) => parseResponse(client.v1[':app:exchangeCustomToken'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AppExchangeDebugTokenKey() {
  return ['v1', '/v1/:app:exchangeDebugToken', 'POST'] as const
}

export function usePostV1AppExchangeDebugToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':app:exchangeDebugToken']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':app:exchangeDebugToken']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppExchangeDebugTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)[':app:exchangeDebugToken']['$post']> },
      ) => parseResponse(client.v1[':app:exchangeDebugToken'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AppExchangeDeviceCheckTokenKey() {
  return ['v1', '/v1/:app:exchangeDeviceCheckToken', 'POST'] as const
}

export function usePostV1AppExchangeDeviceCheckToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':app:exchangeDeviceCheckToken']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':app:exchangeDeviceCheckToken']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppExchangeDeviceCheckTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)[':app:exchangeDeviceCheckToken']['$post']> },
      ) => parseResponse(client.v1[':app:exchangeDeviceCheckToken'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AppExchangePlayIntegrityTokenKey() {
  return ['v1', '/v1/:app:exchangePlayIntegrityToken', 'POST'] as const
}

export function usePostV1AppExchangePlayIntegrityToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':app:exchangePlayIntegrityToken']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':app:exchangePlayIntegrityToken']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppExchangePlayIntegrityTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)[':app:exchangePlayIntegrityToken']['$post']>
        },
      ) => parseResponse(client.v1[':app:exchangePlayIntegrityToken'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AppExchangeRecaptchaEnterpriseTokenKey() {
  return ['v1', '/v1/:app:exchangeRecaptchaEnterpriseToken', 'POST'] as const
}

export function usePostV1AppExchangeRecaptchaEnterpriseToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':app:exchangeRecaptchaEnterpriseToken']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':app:exchangeRecaptchaEnterpriseToken']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppExchangeRecaptchaEnterpriseTokenKey()
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
            (typeof client.v1)[':app:exchangeRecaptchaEnterpriseToken']['$post']
          >
        },
      ) =>
        parseResponse(client.v1[':app:exchangeRecaptchaEnterpriseToken'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AppExchangeRecaptchaV3TokenKey() {
  return ['v1', '/v1/:app:exchangeRecaptchaV3Token', 'POST'] as const
}

export function usePostV1AppExchangeRecaptchaV3Token<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':app:exchangeRecaptchaV3Token']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':app:exchangeRecaptchaV3Token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppExchangeRecaptchaV3TokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)[':app:exchangeRecaptchaV3Token']['$post']> },
      ) => parseResponse(client.v1[':app:exchangeRecaptchaV3Token'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AppExchangeSafetyNetTokenKey() {
  return ['v1', '/v1/:app:exchangeSafetyNetToken', 'POST'] as const
}

export function usePostV1AppExchangeSafetyNetToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':app:exchangeSafetyNetToken']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':app:exchangeSafetyNetToken']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppExchangeSafetyNetTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)[':app:exchangeSafetyNetToken']['$post']> },
      ) => parseResponse(client.v1[':app:exchangeSafetyNetToken'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AppGenerateAppAttestChallengeKey() {
  return ['v1', '/v1/:app:generateAppAttestChallenge', 'POST'] as const
}

export function usePostV1AppGenerateAppAttestChallenge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':app:generateAppAttestChallenge']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':app:generateAppAttestChallenge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppGenerateAppAttestChallengeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)[':app:generateAppAttestChallenge']['$post']>
        },
      ) => parseResponse(client.v1[':app:generateAppAttestChallenge'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AppGeneratePlayIntegrityChallengeKey() {
  return ['v1', '/v1/:app:generatePlayIntegrityChallenge', 'POST'] as const
}

export function usePostV1AppGeneratePlayIntegrityChallenge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':app:generatePlayIntegrityChallenge']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':app:generatePlayIntegrityChallenge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppGeneratePlayIntegrityChallengeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)[':app:generatePlayIntegrityChallenge']['$post']>
        },
      ) =>
        parseResponse(client.v1[':app:generatePlayIntegrityChallenge'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1NameKey(args: InferRequestType<(typeof client.v1)[':name']['$get']>) {
  return ['v1', '/v1/:name', args] as const
}

export function useGetV1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1NameKey() {
  return ['v1', '/v1/:name', 'DELETE'] as const
}

export function useDeleteV1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.v1)[':name']['$delete']> }) =>
        parseResponse(client.v1[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1NameKey() {
  return ['v1', '/v1/:name', 'PATCH'] as const
}

export function usePatchV1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.v1)[':name']['$patch']> }) =>
        parseResponse(client.v1[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ParentAppsDashAppAttestConfigBatchGetKey(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['appAttestConfig:batchGet']['$get']
  >,
) {
  return ['v1', '/v1/:parent/apps/-/appAttestConfig:batchGet', args] as const
}

export function useGetV1ParentAppsDashAppAttestConfigBatchGet<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['appAttestConfig:batchGet']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':parent']['apps']['-']['appAttestConfig:batchGet']['$get']
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
        ? getGetV1ParentAppsDashAppAttestConfigBatchGetKey(args)
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
                (typeof client.v1)[':parent']['apps']['-']['appAttestConfig:batchGet']['$get']
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
          client.v1[':parent'].apps['-']['appAttestConfig:batchGet'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ParentAppsDashAppAttestConfigBatchGet<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['appAttestConfig:batchGet']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':parent']['apps']['-']['appAttestConfig:batchGet']['$get']
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
        ? getGetV1ParentAppsDashAppAttestConfigBatchGetKey(args)
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
                (typeof client.v1)[':parent']['apps']['-']['appAttestConfig:batchGet']['$get']
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
          client.v1[':parent'].apps['-']['appAttestConfig:batchGet'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ParentAppsDashDeviceCheckConfigBatchGetKey(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['deviceCheckConfig:batchGet']['$get']
  >,
) {
  return ['v1', '/v1/:parent/apps/-/deviceCheckConfig:batchGet', args] as const
}

export function useGetV1ParentAppsDashDeviceCheckConfigBatchGet<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['deviceCheckConfig:batchGet']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':parent']['apps']['-']['deviceCheckConfig:batchGet']['$get']
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
        ? getGetV1ParentAppsDashDeviceCheckConfigBatchGetKey(args)
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
                (typeof client.v1)[':parent']['apps']['-']['deviceCheckConfig:batchGet']['$get']
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
          client.v1[':parent'].apps['-']['deviceCheckConfig:batchGet'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ParentAppsDashDeviceCheckConfigBatchGet<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['deviceCheckConfig:batchGet']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':parent']['apps']['-']['deviceCheckConfig:batchGet']['$get']
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
        ? getGetV1ParentAppsDashDeviceCheckConfigBatchGetKey(args)
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
                (typeof client.v1)[':parent']['apps']['-']['deviceCheckConfig:batchGet']['$get']
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
          client.v1[':parent'].apps['-']['deviceCheckConfig:batchGet'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ParentAppsDashPlayIntegrityConfigBatchGetKey(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['playIntegrityConfig:batchGet']['$get']
  >,
) {
  return ['v1', '/v1/:parent/apps/-/playIntegrityConfig:batchGet', args] as const
}

export function useGetV1ParentAppsDashPlayIntegrityConfigBatchGet<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['playIntegrityConfig:batchGet']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':parent']['apps']['-']['playIntegrityConfig:batchGet']['$get']
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
        ? getGetV1ParentAppsDashPlayIntegrityConfigBatchGetKey(args)
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
                (typeof client.v1)[':parent']['apps']['-']['playIntegrityConfig:batchGet']['$get']
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
          client.v1[':parent'].apps['-']['playIntegrityConfig:batchGet'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ParentAppsDashPlayIntegrityConfigBatchGet<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['playIntegrityConfig:batchGet']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':parent']['apps']['-']['playIntegrityConfig:batchGet']['$get']
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
        ? getGetV1ParentAppsDashPlayIntegrityConfigBatchGetKey(args)
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
                (typeof client.v1)[':parent']['apps']['-']['playIntegrityConfig:batchGet']['$get']
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
          client.v1[':parent'].apps['-']['playIntegrityConfig:batchGet'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ParentAppsDashRecaptchaEnterpriseConfigBatchGetKey(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['recaptchaEnterpriseConfig:batchGet']['$get']
  >,
) {
  return ['v1', '/v1/:parent/apps/-/recaptchaEnterpriseConfig:batchGet', args] as const
}

export function useGetV1ParentAppsDashRecaptchaEnterpriseConfigBatchGet<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['recaptchaEnterpriseConfig:batchGet']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':parent']['apps']['-']['recaptchaEnterpriseConfig:batchGet']['$get']
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
        ? getGetV1ParentAppsDashRecaptchaEnterpriseConfigBatchGetKey(args)
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
                (typeof client.v1)[':parent']['apps']['-']['recaptchaEnterpriseConfig:batchGet']['$get']
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
          client.v1[':parent'].apps['-']['recaptchaEnterpriseConfig:batchGet'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ParentAppsDashRecaptchaEnterpriseConfigBatchGet<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['recaptchaEnterpriseConfig:batchGet']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':parent']['apps']['-']['recaptchaEnterpriseConfig:batchGet']['$get']
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
        ? getGetV1ParentAppsDashRecaptchaEnterpriseConfigBatchGetKey(args)
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
                (typeof client.v1)[':parent']['apps']['-']['recaptchaEnterpriseConfig:batchGet']['$get']
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
          client.v1[':parent'].apps['-']['recaptchaEnterpriseConfig:batchGet'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ParentAppsDashRecaptchaV3ConfigBatchGetKey(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['recaptchaV3Config:batchGet']['$get']
  >,
) {
  return ['v1', '/v1/:parent/apps/-/recaptchaV3Config:batchGet', args] as const
}

export function useGetV1ParentAppsDashRecaptchaV3ConfigBatchGet<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['recaptchaV3Config:batchGet']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':parent']['apps']['-']['recaptchaV3Config:batchGet']['$get']
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
        ? getGetV1ParentAppsDashRecaptchaV3ConfigBatchGetKey(args)
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
                (typeof client.v1)[':parent']['apps']['-']['recaptchaV3Config:batchGet']['$get']
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
          client.v1[':parent'].apps['-']['recaptchaV3Config:batchGet'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ParentAppsDashRecaptchaV3ConfigBatchGet<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['recaptchaV3Config:batchGet']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':parent']['apps']['-']['recaptchaV3Config:batchGet']['$get']
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
        ? getGetV1ParentAppsDashRecaptchaV3ConfigBatchGetKey(args)
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
                (typeof client.v1)[':parent']['apps']['-']['recaptchaV3Config:batchGet']['$get']
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
          client.v1[':parent'].apps['-']['recaptchaV3Config:batchGet'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ParentAppsDashSafetyNetConfigBatchGetKey(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['safetyNetConfig:batchGet']['$get']
  >,
) {
  return ['v1', '/v1/:parent/apps/-/safetyNetConfig:batchGet', args] as const
}

export function useGetV1ParentAppsDashSafetyNetConfigBatchGet<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['safetyNetConfig:batchGet']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':parent']['apps']['-']['safetyNetConfig:batchGet']['$get']
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
        ? getGetV1ParentAppsDashSafetyNetConfigBatchGetKey(args)
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
                (typeof client.v1)[':parent']['apps']['-']['safetyNetConfig:batchGet']['$get']
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
          client.v1[':parent'].apps['-']['safetyNetConfig:batchGet'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ParentAppsDashSafetyNetConfigBatchGet<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['safetyNetConfig:batchGet']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':parent']['apps']['-']['safetyNetConfig:batchGet']['$get']
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
        ? getGetV1ParentAppsDashSafetyNetConfigBatchGetKey(args)
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
                (typeof client.v1)[':parent']['apps']['-']['safetyNetConfig:batchGet']['$get']
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
          client.v1[':parent'].apps['-']['safetyNetConfig:batchGet'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ParentDebugTokensKey(
  args: InferRequestType<(typeof client.v1)[':parent']['debugTokens']['$get']>,
) {
  return ['v1', '/v1/:parent/debugTokens', args] as const
}

export function useGetV1ParentDebugTokens<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['debugTokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['debugTokens']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ParentDebugTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['debugTokens']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].debugTokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ParentDebugTokens<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['debugTokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['debugTokens']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ParentDebugTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['debugTokens']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].debugTokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ParentDebugTokensKey() {
  return ['v1', '/v1/:parent/debugTokens', 'POST'] as const
}

export function usePostV1ParentDebugTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['debugTokens']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':parent']['debugTokens']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ParentDebugTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)[':parent']['debugTokens']['$post']> },
      ) => parseResponse(client.v1[':parent'].debugTokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ParentServicesKey(
  args: InferRequestType<(typeof client.v1)[':parent']['services']['$get']>,
) {
  return ['v1', '/v1/:parent/services', args] as const
}

export function useGetV1ParentServices<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['services']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ParentServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ParentServices<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['services']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ParentServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ParentServicesBatchUpdateKey() {
  return ['v1', '/v1/:parent/services:batchUpdate', 'POST'] as const
}

export function usePostV1ParentServicesBatchUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['services:batchUpdate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':parent']['services:batchUpdate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ParentServicesBatchUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)[':parent']['services:batchUpdate']['$post']>
        },
      ) => parseResponse(client.v1[':parent']['services:batchUpdate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
