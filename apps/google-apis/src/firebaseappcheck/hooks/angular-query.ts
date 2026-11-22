import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1AppExchangeAppAttestAssertionMutationKey() {
  return ['v1', '/v1/:app:exchangeAppAttestAssertion', 'POST'] as const
}

export function getPostV1AppExchangeAppAttestAssertionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':app:exchangeAppAttestAssertion']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':app:exchangeAppAttestAssertion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppExchangeAppAttestAssertionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':app:exchangeAppAttestAssertion']['$post']>,
    ) {
      return parseResponse(client.v1[':app:exchangeAppAttestAssertion'].$post(args, options))
    },
  })
}

export function injectPostV1AppExchangeAppAttestAssertion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':app:exchangeAppAttestAssertion']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':app:exchangeAppAttestAssertion']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AppExchangeAppAttestAssertionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1AppExchangeAppAttestAttestationMutationKey() {
  return ['v1', '/v1/:app:exchangeAppAttestAttestation', 'POST'] as const
}

export function getPostV1AppExchangeAppAttestAttestationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':app:exchangeAppAttestAttestation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':app:exchangeAppAttestAttestation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppExchangeAppAttestAttestationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':app:exchangeAppAttestAttestation']['$post']>,
    ) {
      return parseResponse(client.v1[':app:exchangeAppAttestAttestation'].$post(args, options))
    },
  })
}

export function injectPostV1AppExchangeAppAttestAttestation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':app:exchangeAppAttestAttestation']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':app:exchangeAppAttestAttestation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AppExchangeAppAttestAttestationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1AppExchangeCustomTokenMutationKey() {
  return ['v1', '/v1/:app:exchangeCustomToken', 'POST'] as const
}

export function getPostV1AppExchangeCustomTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':app:exchangeCustomToken']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':app:exchangeCustomToken']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppExchangeCustomTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':app:exchangeCustomToken']['$post']>,
    ) {
      return parseResponse(client.v1[':app:exchangeCustomToken'].$post(args, options))
    },
  })
}

export function injectPostV1AppExchangeCustomToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':app:exchangeCustomToken']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':app:exchangeCustomToken']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AppExchangeCustomTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1AppExchangeDebugTokenMutationKey() {
  return ['v1', '/v1/:app:exchangeDebugToken', 'POST'] as const
}

export function getPostV1AppExchangeDebugTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':app:exchangeDebugToken']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':app:exchangeDebugToken']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppExchangeDebugTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':app:exchangeDebugToken']['$post']>,
    ) {
      return parseResponse(client.v1[':app:exchangeDebugToken'].$post(args, options))
    },
  })
}

export function injectPostV1AppExchangeDebugToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':app:exchangeDebugToken']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':app:exchangeDebugToken']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AppExchangeDebugTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1AppExchangeDeviceCheckTokenMutationKey() {
  return ['v1', '/v1/:app:exchangeDeviceCheckToken', 'POST'] as const
}

export function getPostV1AppExchangeDeviceCheckTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':app:exchangeDeviceCheckToken']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':app:exchangeDeviceCheckToken']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppExchangeDeviceCheckTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':app:exchangeDeviceCheckToken']['$post']>,
    ) {
      return parseResponse(client.v1[':app:exchangeDeviceCheckToken'].$post(args, options))
    },
  })
}

export function injectPostV1AppExchangeDeviceCheckToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':app:exchangeDeviceCheckToken']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':app:exchangeDeviceCheckToken']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AppExchangeDeviceCheckTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1AppExchangePlayIntegrityTokenMutationKey() {
  return ['v1', '/v1/:app:exchangePlayIntegrityToken', 'POST'] as const
}

export function getPostV1AppExchangePlayIntegrityTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':app:exchangePlayIntegrityToken']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':app:exchangePlayIntegrityToken']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppExchangePlayIntegrityTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':app:exchangePlayIntegrityToken']['$post']>,
    ) {
      return parseResponse(client.v1[':app:exchangePlayIntegrityToken'].$post(args, options))
    },
  })
}

export function injectPostV1AppExchangePlayIntegrityToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':app:exchangePlayIntegrityToken']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':app:exchangePlayIntegrityToken']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AppExchangePlayIntegrityTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1AppExchangeRecaptchaEnterpriseTokenMutationKey() {
  return ['v1', '/v1/:app:exchangeRecaptchaEnterpriseToken', 'POST'] as const
}

export function getPostV1AppExchangeRecaptchaEnterpriseTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':app:exchangeRecaptchaEnterpriseToken']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':app:exchangeRecaptchaEnterpriseToken']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppExchangeRecaptchaEnterpriseTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':app:exchangeRecaptchaEnterpriseToken']['$post']>,
    ) {
      return parseResponse(client.v1[':app:exchangeRecaptchaEnterpriseToken'].$post(args, options))
    },
  })
}

export function injectPostV1AppExchangeRecaptchaEnterpriseToken<
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
                ReturnType<(typeof client.v1)[':app:exchangeRecaptchaEnterpriseToken']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':app:exchangeRecaptchaEnterpriseToken']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AppExchangeRecaptchaEnterpriseTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1AppExchangeRecaptchaV3TokenMutationKey() {
  return ['v1', '/v1/:app:exchangeRecaptchaV3Token', 'POST'] as const
}

export function getPostV1AppExchangeRecaptchaV3TokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':app:exchangeRecaptchaV3Token']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':app:exchangeRecaptchaV3Token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppExchangeRecaptchaV3TokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':app:exchangeRecaptchaV3Token']['$post']>,
    ) {
      return parseResponse(client.v1[':app:exchangeRecaptchaV3Token'].$post(args, options))
    },
  })
}

export function injectPostV1AppExchangeRecaptchaV3Token<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':app:exchangeRecaptchaV3Token']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':app:exchangeRecaptchaV3Token']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AppExchangeRecaptchaV3TokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1AppExchangeSafetyNetTokenMutationKey() {
  return ['v1', '/v1/:app:exchangeSafetyNetToken', 'POST'] as const
}

export function getPostV1AppExchangeSafetyNetTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':app:exchangeSafetyNetToken']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':app:exchangeSafetyNetToken']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppExchangeSafetyNetTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':app:exchangeSafetyNetToken']['$post']>,
    ) {
      return parseResponse(client.v1[':app:exchangeSafetyNetToken'].$post(args, options))
    },
  })
}

export function injectPostV1AppExchangeSafetyNetToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':app:exchangeSafetyNetToken']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':app:exchangeSafetyNetToken']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AppExchangeSafetyNetTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1AppGenerateAppAttestChallengeMutationKey() {
  return ['v1', '/v1/:app:generateAppAttestChallenge', 'POST'] as const
}

export function getPostV1AppGenerateAppAttestChallengeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':app:generateAppAttestChallenge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':app:generateAppAttestChallenge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppGenerateAppAttestChallengeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':app:generateAppAttestChallenge']['$post']>,
    ) {
      return parseResponse(client.v1[':app:generateAppAttestChallenge'].$post(args, options))
    },
  })
}

export function injectPostV1AppGenerateAppAttestChallenge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':app:generateAppAttestChallenge']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':app:generateAppAttestChallenge']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AppGenerateAppAttestChallengeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1AppGeneratePlayIntegrityChallengeMutationKey() {
  return ['v1', '/v1/:app:generatePlayIntegrityChallenge', 'POST'] as const
}

export function getPostV1AppGeneratePlayIntegrityChallengeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':app:generatePlayIntegrityChallenge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':app:generatePlayIntegrityChallenge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppGeneratePlayIntegrityChallengeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':app:generatePlayIntegrityChallenge']['$post']>,
    ) {
      return parseResponse(client.v1[':app:generatePlayIntegrityChallenge'].$post(args, options))
    },
  })
}

export function injectPostV1AppGeneratePlayIntegrityChallenge<
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
                ReturnType<(typeof client.v1)[':app:generatePlayIntegrityChallenge']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':app:generatePlayIntegrityChallenge']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AppGeneratePlayIntegrityChallengeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1NameQueryKey(args: InferRequestType<(typeof client.v1)[':name']['$get']>) {
  return ['v1', '/v1/:name', args] as const
}

export function getV1NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameQueryKey>
  >({
    queryKey: getV1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1NameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteV1NameMutationKey() {
  return ['v1', '/v1/:name', 'DELETE'] as const
}

export function getDeleteV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$delete']>) {
      return parseResponse(client.v1[':name'].$delete(args, options))
    },
  })
}

export function injectDeleteV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchV1NameMutationKey() {
  return ['v1', '/v1/:name', 'PATCH'] as const
}

export function getPatchV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$patch']>) {
      return parseResponse(client.v1[':name'].$patch(args, options))
    },
  })
}

export function injectPatchV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ParentAppsDashAppAttestConfigBatchGetQueryKey(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['appAttestConfig:batchGet']['$get']
  >,
) {
  return ['v1', '/v1/:parent/apps/-/appAttestConfig:batchGet', args] as const
}

export function getV1ParentAppsDashAppAttestConfigBatchGetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1)[':parent']['apps']['-']['appAttestConfig:batchGet']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['appAttestConfig:batchGet']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ParentAppsDashAppAttestConfigBatchGetQueryKey>
  >({
    queryKey: getV1ParentAppsDashAppAttestConfigBatchGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].apps['-']['appAttestConfig:batchGet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ParentAppsDashAppAttestConfigBatchGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1)[':parent']['apps']['-']['appAttestConfig:batchGet']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['appAttestConfig:batchGet']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ParentAppsDashAppAttestConfigBatchGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ParentAppsDashAppAttestConfigBatchGetQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1ParentAppsDashDeviceCheckConfigBatchGetQueryKey(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['deviceCheckConfig:batchGet']['$get']
  >,
) {
  return ['v1', '/v1/:parent/apps/-/deviceCheckConfig:batchGet', args] as const
}

export function getV1ParentAppsDashDeviceCheckConfigBatchGetQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['deviceCheckConfig:batchGet']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ParentAppsDashDeviceCheckConfigBatchGetQueryKey>
  >({
    queryKey: getV1ParentAppsDashDeviceCheckConfigBatchGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].apps['-']['deviceCheckConfig:batchGet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ParentAppsDashDeviceCheckConfigBatchGet<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['deviceCheckConfig:batchGet']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ParentAppsDashDeviceCheckConfigBatchGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ParentAppsDashDeviceCheckConfigBatchGetQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1ParentAppsDashPlayIntegrityConfigBatchGetQueryKey(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['playIntegrityConfig:batchGet']['$get']
  >,
) {
  return ['v1', '/v1/:parent/apps/-/playIntegrityConfig:batchGet', args] as const
}

export function getV1ParentAppsDashPlayIntegrityConfigBatchGetQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['playIntegrityConfig:batchGet']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ParentAppsDashPlayIntegrityConfigBatchGetQueryKey>
  >({
    queryKey: getV1ParentAppsDashPlayIntegrityConfigBatchGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].apps['-']['playIntegrityConfig:batchGet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ParentAppsDashPlayIntegrityConfigBatchGet<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['playIntegrityConfig:batchGet']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ParentAppsDashPlayIntegrityConfigBatchGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ParentAppsDashPlayIntegrityConfigBatchGetQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1ParentAppsDashRecaptchaEnterpriseConfigBatchGetQueryKey(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['recaptchaEnterpriseConfig:batchGet']['$get']
  >,
) {
  return ['v1', '/v1/:parent/apps/-/recaptchaEnterpriseConfig:batchGet', args] as const
}

export function getV1ParentAppsDashRecaptchaEnterpriseConfigBatchGetQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['recaptchaEnterpriseConfig:batchGet']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ParentAppsDashRecaptchaEnterpriseConfigBatchGetQueryKey>
  >({
    queryKey: getV1ParentAppsDashRecaptchaEnterpriseConfigBatchGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].apps['-']['recaptchaEnterpriseConfig:batchGet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ParentAppsDashRecaptchaEnterpriseConfigBatchGet<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['recaptchaEnterpriseConfig:batchGet']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ParentAppsDashRecaptchaEnterpriseConfigBatchGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ParentAppsDashRecaptchaEnterpriseConfigBatchGetQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1ParentAppsDashRecaptchaV3ConfigBatchGetQueryKey(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['recaptchaV3Config:batchGet']['$get']
  >,
) {
  return ['v1', '/v1/:parent/apps/-/recaptchaV3Config:batchGet', args] as const
}

export function getV1ParentAppsDashRecaptchaV3ConfigBatchGetQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['recaptchaV3Config:batchGet']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ParentAppsDashRecaptchaV3ConfigBatchGetQueryKey>
  >({
    queryKey: getV1ParentAppsDashRecaptchaV3ConfigBatchGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].apps['-']['recaptchaV3Config:batchGet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ParentAppsDashRecaptchaV3ConfigBatchGet<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['recaptchaV3Config:batchGet']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ParentAppsDashRecaptchaV3ConfigBatchGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ParentAppsDashRecaptchaV3ConfigBatchGetQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1ParentAppsDashSafetyNetConfigBatchGetQueryKey(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['safetyNetConfig:batchGet']['$get']
  >,
) {
  return ['v1', '/v1/:parent/apps/-/safetyNetConfig:batchGet', args] as const
}

export function getV1ParentAppsDashSafetyNetConfigBatchGetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1)[':parent']['apps']['-']['safetyNetConfig:batchGet']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['safetyNetConfig:batchGet']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ParentAppsDashSafetyNetConfigBatchGetQueryKey>
  >({
    queryKey: getV1ParentAppsDashSafetyNetConfigBatchGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].apps['-']['safetyNetConfig:batchGet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ParentAppsDashSafetyNetConfigBatchGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1)[':parent']['apps']['-']['safetyNetConfig:batchGet']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['safetyNetConfig:batchGet']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ParentAppsDashSafetyNetConfigBatchGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ParentAppsDashSafetyNetConfigBatchGetQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1ParentDebugTokensQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['debugTokens']['$get']>,
) {
  return ['v1', '/v1/:parent/debugTokens', args] as const
}

export function getV1ParentDebugTokensQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['debugTokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['debugTokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['debugTokens']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentDebugTokensQueryKey>
  >({
    queryKey: getV1ParentDebugTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].debugTokens.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ParentDebugTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['debugTokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['debugTokens']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['debugTokens']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentDebugTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentDebugTokensQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1ParentDebugTokensMutationKey() {
  return ['v1', '/v1/:parent/debugTokens', 'POST'] as const
}

export function getPostV1ParentDebugTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['debugTokens']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['debugTokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentDebugTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['debugTokens']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].debugTokens.$post(args, options))
    },
  })
}

export function injectPostV1ParentDebugTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['debugTokens']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['debugTokens']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ParentDebugTokensMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ParentServicesQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['services']['$get']>,
) {
  return ['v1', '/v1/:parent/services', args] as const
}

export function getV1ParentServicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['services']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['services']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentServicesQueryKey>
  >({
    queryKey: getV1ParentServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].services.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ParentServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['services']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['services']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['services']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentServicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1ParentServicesBatchUpdateMutationKey() {
  return ['v1', '/v1/:parent/services:batchUpdate', 'POST'] as const
}

export function getPostV1ParentServicesBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['services:batchUpdate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['services:batchUpdate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentServicesBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['services:batchUpdate']['$post']>,
    ) {
      return parseResponse(client.v1[':parent']['services:batchUpdate'].$post(args, options))
    },
  })
}

export function injectPostV1ParentServicesBatchUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['services:batchUpdate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['services:batchUpdate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ParentServicesBatchUpdateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
