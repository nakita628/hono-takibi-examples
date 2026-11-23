import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCompaniesKey() {
  return ['companies'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getMerchantsKey() {
  return ['merchants'] as const
}

export function getStoresKey() {
  return ['stores'] as const
}

export function getTerminalsKey() {
  return ['terminals'] as const
}

export function getGetCompaniesKey(args: InferRequestType<typeof client.companies.$get>) {
  return ['companies', '/companies', args] as const
}

export function useGetCompanies<TError = unknown>(
  args: InferRequestType<typeof client.companies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCompaniesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.companies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompanies<TError = unknown>(
  args: InferRequestType<typeof client.companies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCompaniesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.companies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['$get']>,
) {
  return ['companies', '/companies/:companyId', args] as const
}

export function useGetCompaniesCompanyId<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':companyId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':companyId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.companies[':companyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyId<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':companyId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':companyId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.companies[':companyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdAndroidAppsKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['androidApps']['$get']>,
) {
  return ['companies', '/companies/:companyId/androidApps', args] as const
}

export function useGetCompaniesCompanyIdAndroidApps<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['androidApps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['androidApps']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdAndroidAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['androidApps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].androidApps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdAndroidApps<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['androidApps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['androidApps']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdAndroidAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['androidApps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].androidApps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdAndroidAppsKey() {
  return ['companies', '/companies/:companyId/androidApps', 'POST'] as const
}

export function usePostCompaniesCompanyIdAndroidApps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['androidApps']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.companies)[':companyId']['androidApps']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesCompanyIdAndroidAppsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.companies)[':companyId']['androidApps']['$post']>
        },
      ) => parseResponse(client.companies[':companyId'].androidApps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdAndroidAppsIdKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['androidApps'][':id']['$get']>,
) {
  return ['companies', '/companies/:companyId/androidApps/:id', args] as const
}

export function useGetCompaniesCompanyIdAndroidAppsId<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['androidApps'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.companies)[':companyId']['androidApps'][':id']['$get']>
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
        ? getGetCompaniesCompanyIdAndroidAppsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.companies)[':companyId']['androidApps'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].androidApps[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdAndroidAppsId<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['androidApps'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.companies)[':companyId']['androidApps'][':id']['$get']>
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
        ? getGetCompaniesCompanyIdAndroidAppsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.companies)[':companyId']['androidApps'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].androidApps[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchCompaniesCompanyIdAndroidAppsIdKey() {
  return ['companies', '/companies/:companyId/androidApps/:id', 'PATCH'] as const
}

export function usePatchCompaniesCompanyIdAndroidAppsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.companies)[':companyId']['androidApps'][':id']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.companies)[':companyId']['androidApps'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCompaniesCompanyIdAndroidAppsIdKey()
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
            (typeof client.companies)[':companyId']['androidApps'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(client.companies[':companyId'].androidApps[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdAndroidCertificatesKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['androidCertificates']['$get']>,
) {
  return ['companies', '/companies/:companyId/androidCertificates', args] as const
}

export function useGetCompaniesCompanyIdAndroidCertificates<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['androidCertificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.companies)[':companyId']['androidCertificates']['$get']>
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
        ? getGetCompaniesCompanyIdAndroidCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.companies)[':companyId']['androidCertificates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].androidCertificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdAndroidCertificates<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['androidCertificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.companies)[':companyId']['androidCertificates']['$get']>
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
        ? getGetCompaniesCompanyIdAndroidCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.companies)[':companyId']['androidCertificates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].androidCertificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdAndroidCertificatesKey() {
  return ['companies', '/companies/:companyId/androidCertificates', 'POST'] as const
}

export function usePostCompaniesCompanyIdAndroidCertificates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.companies)[':companyId']['androidCertificates']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.companies)[':companyId']['androidCertificates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesCompanyIdAndroidCertificatesKey()
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
            (typeof client.companies)[':companyId']['androidCertificates']['$post']
          >
        },
      ) =>
        parseResponse(client.companies[':companyId'].androidCertificates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdApiCredentialsKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['apiCredentials']['$get']>,
) {
  return ['companies', '/companies/:companyId/apiCredentials', args] as const
}

export function useGetCompaniesCompanyIdApiCredentials<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['apiCredentials']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['apiCredentials']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdApiCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['apiCredentials']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].apiCredentials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdApiCredentials<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['apiCredentials']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['apiCredentials']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdApiCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['apiCredentials']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].apiCredentials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdApiCredentialsKey() {
  return ['companies', '/companies/:companyId/apiCredentials', 'POST'] as const
}

export function usePostCompaniesCompanyIdApiCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['apiCredentials']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.companies)[':companyId']['apiCredentials']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesCompanyIdApiCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.companies)[':companyId']['apiCredentials']['$post']>
        },
      ) => parseResponse(client.companies[':companyId'].apiCredentials.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdApiCredentialsApiCredentialIdKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/apiCredentials/:apiCredentialId', args] as const
}

export function useGetCompaniesCompanyIdApiCredentialsApiCredentialId<TError = unknown>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['$get']
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
        ? getGetCompaniesCompanyIdApiCredentialsApiCredentialIdKey(args)
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
                (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['$get']
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
          client.companies[':companyId'].apiCredentials[':apiCredentialId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdApiCredentialsApiCredentialId<TError = unknown>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['$get']
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
        ? getGetCompaniesCompanyIdApiCredentialsApiCredentialIdKey(args)
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
                (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['$get']
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
          client.companies[':companyId'].apiCredentials[':apiCredentialId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchCompaniesCompanyIdApiCredentialsApiCredentialIdKey() {
  return ['companies', '/companies/:companyId/apiCredentials/:apiCredentialId', 'PATCH'] as const
}

export function usePatchCompaniesCompanyIdApiCredentialsApiCredentialId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCompaniesCompanyIdApiCredentialsApiCredentialIdKey()
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
            (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].apiCredentials[':apiCredentialId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/apiCredentials/:apiCredentialId/allowedOrigins',
    args,
  ] as const
}

export function useGetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
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
        ? getGetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsKey(args)
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
                (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
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
          client.companies[':companyId'].apiCredentials[':apiCredentialId'].allowedOrigins.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
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
        ? getGetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsKey(args)
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
                (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
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
          client.companies[':companyId'].apiCredentials[':apiCredentialId'].allowedOrigins.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsKey() {
  return [
    'companies',
    '/companies/:companyId/apiCredentials/:apiCredentialId/allowedOrigins',
    'POST',
  ] as const
}

export function usePostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsKey()
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
            (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$post']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].apiCredentials[':apiCredentialId'].allowedOrigins.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/apiCredentials/:apiCredentialId/allowedOrigins/:originId',
    args,
  ] as const
}

export function useGetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
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
        ? getGetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdKey(args)
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
                (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
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
          client.companies[':companyId'].apiCredentials[':apiCredentialId'].allowedOrigins[
            ':originId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
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
        ? getGetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdKey(args)
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
                (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
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
          client.companies[':companyId'].apiCredentials[':apiCredentialId'].allowedOrigins[
            ':originId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdKey() {
  return [
    'companies',
    '/companies/:companyId/apiCredentials/:apiCredentialId/allowedOrigins/:originId',
    'DELETE',
  ] as const
}

export function useDeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdKey()
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
            (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].apiCredentials[':apiCredentialId'].allowedOrigins[
            ':originId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyKey() {
  return [
    'companies',
    '/companies/:companyId/apiCredentials/:apiCredentialId/generateApiKey',
    'POST',
  ] as const
}

export function usePostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['generateApiKey']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['generateApiKey']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyKey()
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
            (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['generateApiKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].apiCredentials[':apiCredentialId'].generateApiKey.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyKey() {
  return [
    'companies',
    '/companies/:companyId/apiCredentials/:apiCredentialId/generateClientKey',
    'POST',
  ] as const
}

export function usePostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['generateClientKey']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['generateClientKey']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyKey()
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
            (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['generateClientKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].apiCredentials[':apiCredentialId'].generateClientKey.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdBillingEntitiesKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['billingEntities']['$get']>,
) {
  return ['companies', '/companies/:companyId/billingEntities', args] as const
}

export function useGetCompaniesCompanyIdBillingEntities<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['billingEntities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['billingEntities']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdBillingEntitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['billingEntities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].billingEntities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdBillingEntities<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['billingEntities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['billingEntities']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdBillingEntitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['billingEntities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].billingEntities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdMerchantsKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['merchants']['$get']>,
) {
  return ['companies', '/companies/:companyId/merchants', args] as const
}

export function useGetCompaniesCompanyIdMerchants<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['merchants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['merchants']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdMerchantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['merchants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.companies[':companyId'].merchants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdMerchants<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['merchants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['merchants']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdMerchantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['merchants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.companies[':companyId'].merchants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdShippingLocationsKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['shippingLocations']['$get']>,
) {
  return ['companies', '/companies/:companyId/shippingLocations', args] as const
}

export function useGetCompaniesCompanyIdShippingLocations<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['shippingLocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.companies)[':companyId']['shippingLocations']['$get']>
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
        ? getGetCompaniesCompanyIdShippingLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.companies)[':companyId']['shippingLocations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].shippingLocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdShippingLocations<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['shippingLocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.companies)[':companyId']['shippingLocations']['$get']>
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
        ? getGetCompaniesCompanyIdShippingLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.companies)[':companyId']['shippingLocations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].shippingLocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdShippingLocationsKey() {
  return ['companies', '/companies/:companyId/shippingLocations', 'POST'] as const
}

export function usePostCompaniesCompanyIdShippingLocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['shippingLocations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.companies)[':companyId']['shippingLocations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesCompanyIdShippingLocationsKey()
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
            (typeof client.companies)[':companyId']['shippingLocations']['$post']
          >
        },
      ) =>
        parseResponse(client.companies[':companyId'].shippingLocations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdTerminalActionsKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalActions']['$get']>,
) {
  return ['companies', '/companies/:companyId/terminalActions', args] as const
}

export function useGetCompaniesCompanyIdTerminalActions<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalActions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalActions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdTerminalActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalActions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].terminalActions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdTerminalActions<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalActions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalActions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdTerminalActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalActions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].terminalActions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdTerminalActionsActionIdKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['terminalActions'][':actionId']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/terminalActions/:actionId', args] as const
}

export function useGetCompaniesCompanyIdTerminalActionsActionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['terminalActions'][':actionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['terminalActions'][':actionId']['$get']
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
        ? getGetCompaniesCompanyIdTerminalActionsActionIdKey(args)
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
                (typeof client.companies)[':companyId']['terminalActions'][':actionId']['$get']
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
          client.companies[':companyId'].terminalActions[':actionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdTerminalActionsActionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['terminalActions'][':actionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['terminalActions'][':actionId']['$get']
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
        ? getGetCompaniesCompanyIdTerminalActionsActionIdKey(args)
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
                (typeof client.companies)[':companyId']['terminalActions'][':actionId']['$get']
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
          client.companies[':companyId'].terminalActions[':actionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdTerminalLogosKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalLogos']['$get']>,
) {
  return ['companies', '/companies/:companyId/terminalLogos', args] as const
}

export function useGetCompaniesCompanyIdTerminalLogos<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalLogos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalLogos']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdTerminalLogosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalLogos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].terminalLogos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdTerminalLogos<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalLogos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalLogos']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdTerminalLogosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalLogos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].terminalLogos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchCompaniesCompanyIdTerminalLogosKey() {
  return ['companies', '/companies/:companyId/terminalLogos', 'PATCH'] as const
}

export function usePatchCompaniesCompanyIdTerminalLogos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalLogos']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.companies)[':companyId']['terminalLogos']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCompaniesCompanyIdTerminalLogosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.companies)[':companyId']['terminalLogos']['$patch']>
        },
      ) => parseResponse(client.companies[':companyId'].terminalLogos.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdTerminalModelsKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalModels']['$get']>,
) {
  return ['companies', '/companies/:companyId/terminalModels', args] as const
}

export function useGetCompaniesCompanyIdTerminalModels<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalModels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalModels']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdTerminalModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalModels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].terminalModels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdTerminalModels<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalModels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalModels']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdTerminalModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalModels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].terminalModels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdTerminalOrdersKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalOrders']['$get']>,
) {
  return ['companies', '/companies/:companyId/terminalOrders', args] as const
}

export function useGetCompaniesCompanyIdTerminalOrders<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalOrders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalOrders']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdTerminalOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalOrders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].terminalOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdTerminalOrders<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalOrders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalOrders']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdTerminalOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalOrders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].terminalOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdTerminalOrdersKey() {
  return ['companies', '/companies/:companyId/terminalOrders', 'POST'] as const
}

export function usePostCompaniesCompanyIdTerminalOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalOrders']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.companies)[':companyId']['terminalOrders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesCompanyIdTerminalOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.companies)[':companyId']['terminalOrders']['$post']>
        },
      ) => parseResponse(client.companies[':companyId'].terminalOrders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdTerminalOrdersOrderIdKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/terminalOrders/:orderId', args] as const
}

export function useGetCompaniesCompanyIdTerminalOrdersOrderId<TError = unknown>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['$get']
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
        ? getGetCompaniesCompanyIdTerminalOrdersOrderIdKey(args)
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
                (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['$get']
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
          client.companies[':companyId'].terminalOrders[':orderId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdTerminalOrdersOrderId<TError = unknown>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['$get']
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
        ? getGetCompaniesCompanyIdTerminalOrdersOrderIdKey(args)
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
                (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['$get']
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
          client.companies[':companyId'].terminalOrders[':orderId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchCompaniesCompanyIdTerminalOrdersOrderIdKey() {
  return ['companies', '/companies/:companyId/terminalOrders/:orderId', 'PATCH'] as const
}

export function usePatchCompaniesCompanyIdTerminalOrdersOrderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCompaniesCompanyIdTerminalOrdersOrderIdKey()
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
            (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].terminalOrders[':orderId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdTerminalOrdersOrderIdCancelKey() {
  return ['companies', '/companies/:companyId/terminalOrders/:orderId/cancel', 'POST'] as const
}

export function usePostCompaniesCompanyIdTerminalOrdersOrderIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesCompanyIdTerminalOrdersOrderIdCancelKey()
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
            (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].terminalOrders[':orderId'].cancel.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdTerminalProductsKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalProducts']['$get']>,
) {
  return ['companies', '/companies/:companyId/terminalProducts', args] as const
}

export function useGetCompaniesCompanyIdTerminalProducts<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalProducts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalProducts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdTerminalProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalProducts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].terminalProducts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdTerminalProducts<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalProducts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalProducts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdTerminalProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalProducts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].terminalProducts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdTerminalSettingsKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalSettings']['$get']>,
) {
  return ['companies', '/companies/:companyId/terminalSettings', args] as const
}

export function useGetCompaniesCompanyIdTerminalSettings<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalSettings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdTerminalSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalSettings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].terminalSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdTerminalSettings<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalSettings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdTerminalSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalSettings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].terminalSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchCompaniesCompanyIdTerminalSettingsKey() {
  return ['companies', '/companies/:companyId/terminalSettings', 'PATCH'] as const
}

export function usePatchCompaniesCompanyIdTerminalSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalSettings']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.companies)[':companyId']['terminalSettings']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCompaniesCompanyIdTerminalSettingsKey()
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
            (typeof client.companies)[':companyId']['terminalSettings']['$patch']
          >
        },
      ) =>
        parseResponse(client.companies[':companyId'].terminalSettings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdUsersKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['users']['$get']>,
) {
  return ['companies', '/companies/:companyId/users', args] as const
}

export function useGetCompaniesCompanyIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.companies[':companyId'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.companies[':companyId'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdUsersKey() {
  return ['companies', '/companies/:companyId/users', 'POST'] as const
}

export function usePostCompaniesCompanyIdUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['users']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.companies)[':companyId']['users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesCompanyIdUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.companies)[':companyId']['users']['$post']> },
      ) => parseResponse(client.companies[':companyId'].users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdUsersUserIdKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['users'][':userId']['$get']>,
) {
  return ['companies', '/companies/:companyId/users/:userId', args] as const
}

export function useGetCompaniesCompanyIdUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['users'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['users'][':userId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['users'][':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['users'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['users'][':userId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['users'][':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchCompaniesCompanyIdUsersUserIdKey() {
  return ['companies', '/companies/:companyId/users/:userId', 'PATCH'] as const
}

export function usePatchCompaniesCompanyIdUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['users'][':userId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.companies)[':companyId']['users'][':userId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCompaniesCompanyIdUsersUserIdKey()
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
            (typeof client.companies)[':companyId']['users'][':userId']['$patch']
          >
        },
      ) =>
        parseResponse(client.companies[':companyId'].users[':userId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdWebhooksKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['webhooks']['$get']>,
) {
  return ['companies', '/companies/:companyId/webhooks', args] as const
}

export function useGetCompaniesCompanyIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['webhooks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.companies[':companyId'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['webhooks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.companies[':companyId'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdWebhooksKey() {
  return ['companies', '/companies/:companyId/webhooks', 'POST'] as const
}

export function usePostCompaniesCompanyIdWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.companies)[':companyId']['webhooks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesCompanyIdWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.companies)[':companyId']['webhooks']['$post']> },
      ) => parseResponse(client.companies[':companyId'].webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdWebhooksWebhookIdKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['webhooks'][':webhookId']['$get']>,
) {
  return ['companies', '/companies/:companyId/webhooks/:webhookId', args] as const
}

export function useGetCompaniesCompanyIdWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['webhooks'][':webhookId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.companies)[':companyId']['webhooks'][':webhookId']['$get']>
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
        ? getGetCompaniesCompanyIdWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.companies)[':companyId']['webhooks'][':webhookId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.companies[':companyId'].webhooks[':webhookId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['webhooks'][':webhookId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.companies)[':companyId']['webhooks'][':webhookId']['$get']>
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
        ? getGetCompaniesCompanyIdWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.companies)[':companyId']['webhooks'][':webhookId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.companies[':companyId'].webhooks[':webhookId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCompaniesCompanyIdWebhooksWebhookIdKey() {
  return ['companies', '/companies/:companyId/webhooks/:webhookId', 'DELETE'] as const
}

export function useDeleteCompaniesCompanyIdWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['webhooks'][':webhookId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.companies)[':companyId']['webhooks'][':webhookId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCompaniesCompanyIdWebhooksWebhookIdKey()
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
            (typeof client.companies)[':companyId']['webhooks'][':webhookId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].webhooks[':webhookId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCompaniesCompanyIdWebhooksWebhookIdKey() {
  return ['companies', '/companies/:companyId/webhooks/:webhookId', 'PATCH'] as const
}

export function usePatchCompaniesCompanyIdWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.companies)[':companyId']['webhooks'][':webhookId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.companies)[':companyId']['webhooks'][':webhookId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCompaniesCompanyIdWebhooksWebhookIdKey()
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
            (typeof client.companies)[':companyId']['webhooks'][':webhookId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].webhooks[':webhookId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacKey() {
  return ['companies', '/companies/:companyId/webhooks/:webhookId/generateHmac', 'POST'] as const
}

export function usePostCompaniesCompanyIdWebhooksWebhookIdGenerateHmac<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['webhooks'][':webhookId']['generateHmac']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.companies)[':companyId']['webhooks'][':webhookId']['generateHmac']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacKey()
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
            (typeof client.companies)[':companyId']['webhooks'][':webhookId']['generateHmac']['$post']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].webhooks[':webhookId'].generateHmac.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdWebhooksWebhookIdTestKey() {
  return ['companies', '/companies/:companyId/webhooks/:webhookId/test', 'POST'] as const
}

export function usePostCompaniesCompanyIdWebhooksWebhookIdTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['webhooks'][':webhookId']['test']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.companies)[':companyId']['webhooks'][':webhookId']['test']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesCompanyIdWebhooksWebhookIdTestKey()
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
            (typeof client.companies)[':companyId']['webhooks'][':webhookId']['test']['$post']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].webhooks[':webhookId'].test.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMeKey() {
  return ['me', '/me'] as const
}

export function useGetMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function getGetMeAllowedOriginsKey() {
  return ['me', '/me/allowedOrigins'] as const
}

export function useGetMeAllowedOrigins<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.allowedOrigins.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeAllowedOriginsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.allowedOrigins.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.allowedOrigins.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeAllowedOrigins<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.allowedOrigins.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeAllowedOriginsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.allowedOrigins.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.allowedOrigins.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMeAllowedOriginsKey() {
  return ['me', '/me/allowedOrigins', 'POST'] as const
}

export function usePostMeAllowedOrigins<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.allowedOrigins.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.me.allowedOrigins.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeAllowedOriginsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.allowedOrigins.$post> }) =>
        parseResponse(client.me.allowedOrigins.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeAllowedOriginsOriginIdKey(
  args: InferRequestType<(typeof client.me.allowedOrigins)[':originId']['$get']>,
) {
  return ['me', '/me/allowedOrigins/:originId', args] as const
}

export function useGetMeAllowedOriginsOriginId<TError = unknown>(
  args: InferRequestType<(typeof client.me.allowedOrigins)[':originId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.allowedOrigins)[':originId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMeAllowedOriginsOriginIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.allowedOrigins)[':originId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.allowedOrigins[':originId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeAllowedOriginsOriginId<TError = unknown>(
  args: InferRequestType<(typeof client.me.allowedOrigins)[':originId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.allowedOrigins)[':originId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMeAllowedOriginsOriginIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.allowedOrigins)[':originId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.allowedOrigins[':originId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMeAllowedOriginsOriginIdKey() {
  return ['me', '/me/allowedOrigins/:originId', 'DELETE'] as const
}

export function useDeleteMeAllowedOriginsOriginId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.allowedOrigins)[':originId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.me.allowedOrigins)[':originId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeAllowedOriginsOriginIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.me.allowedOrigins)[':originId']['$delete']> },
      ) => parseResponse(client.me.allowedOrigins[':originId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMeGenerateClientKeyKey() {
  return ['me', '/me/generateClientKey', 'POST'] as const
}

export function usePostMeGenerateClientKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.me.generateClientKey.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeGenerateClientKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.me.generateClientKey.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsKey(args: InferRequestType<typeof client.merchants.$get>) {
  return ['merchants', '/merchants', args] as const
}

export function useGetMerchants<TError = unknown>(
  args: InferRequestType<typeof client.merchants.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.merchants.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMerchantsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.merchants.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.merchants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchants<TError = unknown>(
  args: InferRequestType<typeof client.merchants.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.merchants.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMerchantsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.merchants.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.merchants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantsKey() {
  return ['merchants', '/merchants', 'POST'] as const
}

export function usePostMerchants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.merchants.$post>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.merchants.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.merchants.$post> }) =>
        parseResponse(client.merchants.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId', args] as const
}

export function useGetMerchantsMerchantId<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantsMerchantIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.merchants[':merchantId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantId<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantsMerchantIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.merchants[':merchantId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantsMerchantIdActivateKey() {
  return ['merchants', '/merchants/:merchantId/activate', 'POST'] as const
}

export function usePostMerchantsMerchantIdActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['activate']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.merchants)[':merchantId']['activate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantsMerchantIdActivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.merchants)[':merchantId']['activate']['$post']> },
      ) => parseResponse(client.merchants[':merchantId'].activate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdApiCredentialsKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['apiCredentials']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/apiCredentials', args] as const
}

export function useGetMerchantsMerchantIdApiCredentials<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['apiCredentials']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['apiCredentials']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantsMerchantIdApiCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['apiCredentials']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.merchants[':merchantId'].apiCredentials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdApiCredentials<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['apiCredentials']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['apiCredentials']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantsMerchantIdApiCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['apiCredentials']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.merchants[':merchantId'].apiCredentials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantsMerchantIdApiCredentialsKey() {
  return ['merchants', '/merchants/:merchantId/apiCredentials', 'POST'] as const
}

export function usePostMerchantsMerchantIdApiCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['apiCredentials']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.merchants)[':merchantId']['apiCredentials']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantsMerchantIdApiCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.merchants)[':merchantId']['apiCredentials']['$post']>
        },
      ) => parseResponse(client.merchants[':merchantId'].apiCredentials.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdApiCredentialsApiCredentialIdKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['$get']
  >,
) {
  return ['merchants', '/merchants/:merchantId/apiCredentials/:apiCredentialId', args] as const
}

export function useGetMerchantsMerchantIdApiCredentialsApiCredentialId<TError = unknown>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['$get']
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
        ? getGetMerchantsMerchantIdApiCredentialsApiCredentialIdKey(args)
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
                (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['$get']
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
          client.merchants[':merchantId'].apiCredentials[':apiCredentialId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdApiCredentialsApiCredentialId<TError = unknown>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['$get']
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
        ? getGetMerchantsMerchantIdApiCredentialsApiCredentialIdKey(args)
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
                (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['$get']
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
          client.merchants[':merchantId'].apiCredentials[':apiCredentialId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchMerchantsMerchantIdApiCredentialsApiCredentialIdKey() {
  return ['merchants', '/merchants/:merchantId/apiCredentials/:apiCredentialId', 'PATCH'] as const
}

export function usePatchMerchantsMerchantIdApiCredentialsApiCredentialId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMerchantsMerchantIdApiCredentialsApiCredentialIdKey()
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
            (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].apiCredentials[':apiCredentialId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
  >,
) {
  return [
    'merchants',
    '/merchants/:merchantId/apiCredentials/:apiCredentialId/allowedOrigins',
    args,
  ] as const
}

export function useGetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
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
        ? getGetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsKey(args)
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
                (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
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
          client.merchants[':merchantId'].apiCredentials[':apiCredentialId'].allowedOrigins.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
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
        ? getGetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsKey(args)
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
                (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
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
          client.merchants[':merchantId'].apiCredentials[':apiCredentialId'].allowedOrigins.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsKey() {
  return [
    'merchants',
    '/merchants/:merchantId/apiCredentials/:apiCredentialId/allowedOrigins',
    'POST',
  ] as const
}

export function usePostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsKey()
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
            (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$post']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].apiCredentials[':apiCredentialId'].allowedOrigins.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
  >,
) {
  return [
    'merchants',
    '/merchants/:merchantId/apiCredentials/:apiCredentialId/allowedOrigins/:originId',
    args,
  ] as const
}

export function useGetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
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
        ? getGetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdKey(args)
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
                (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
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
          client.merchants[':merchantId'].apiCredentials[':apiCredentialId'].allowedOrigins[
            ':originId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
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
        ? getGetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdKey(args)
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
                (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
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
          client.merchants[':merchantId'].apiCredentials[':apiCredentialId'].allowedOrigins[
            ':originId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdKey() {
  return [
    'merchants',
    '/merchants/:merchantId/apiCredentials/:apiCredentialId/allowedOrigins/:originId',
    'DELETE',
  ] as const
}

export function useDeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdKey()
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
            (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].apiCredentials[':apiCredentialId'].allowedOrigins[
            ':originId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyKey() {
  return [
    'merchants',
    '/merchants/:merchantId/apiCredentials/:apiCredentialId/generateApiKey',
    'POST',
  ] as const
}

export function usePostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['generateApiKey']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['generateApiKey']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyKey()
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
            (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['generateApiKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].apiCredentials[':apiCredentialId'].generateApiKey.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKeyKey() {
  return [
    'merchants',
    '/merchants/:merchantId/apiCredentials/:apiCredentialId/generateClientKey',
    'POST',
  ] as const
}

export function usePostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['generateClientKey']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['generateClientKey']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKeyKey()
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
            (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['generateClientKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].apiCredentials[
            ':apiCredentialId'
          ].generateClientKey.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdBillingEntitiesKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['billingEntities']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/billingEntities', args] as const
}

export function useGetMerchantsMerchantIdBillingEntities<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['billingEntities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['billingEntities']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantsMerchantIdBillingEntitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['billingEntities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.merchants[':merchantId'].billingEntities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdBillingEntities<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['billingEntities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['billingEntities']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantsMerchantIdBillingEntitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['billingEntities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.merchants[':merchantId'].billingEntities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdPaymentMethodSettingsKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['paymentMethodSettings']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/paymentMethodSettings', args] as const
}

export function useGetMerchantsMerchantIdPaymentMethodSettings<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['paymentMethodSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['paymentMethodSettings']['$get']>
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
        ? getGetMerchantsMerchantIdPaymentMethodSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['paymentMethodSettings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.merchants[':merchantId'].paymentMethodSettings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdPaymentMethodSettings<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['paymentMethodSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['paymentMethodSettings']['$get']>
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
        ? getGetMerchantsMerchantIdPaymentMethodSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['paymentMethodSettings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.merchants[':merchantId'].paymentMethodSettings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantsMerchantIdPaymentMethodSettingsKey() {
  return ['merchants', '/merchants/:merchantId/paymentMethodSettings', 'POST'] as const
}

export function usePostMerchantsMerchantIdPaymentMethodSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['paymentMethodSettings']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.merchants)[':merchantId']['paymentMethodSettings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantsMerchantIdPaymentMethodSettingsKey()
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
            (typeof client.merchants)[':merchantId']['paymentMethodSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].paymentMethodSettings.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['$get']
  >,
) {
  return [
    'merchants',
    '/merchants/:merchantId/paymentMethodSettings/:paymentMethodId',
    args,
  ] as const
}

export function useGetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId<TError = unknown>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['$get']
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
        ? getGetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdKey(args)
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
                (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['$get']
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
          client.merchants[':merchantId'].paymentMethodSettings[':paymentMethodId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['$get']
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
        ? getGetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdKey(args)
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
                (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['$get']
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
          client.merchants[':merchantId'].paymentMethodSettings[':paymentMethodId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdKey() {
  return [
    'merchants',
    '/merchants/:merchantId/paymentMethodSettings/:paymentMethodId',
    'PATCH',
  ] as const
}

export function usePatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdKey()
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
            (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].paymentMethodSettings[':paymentMethodId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsKey() {
  return [
    'merchants',
    '/merchants/:merchantId/paymentMethodSettings/:paymentMethodId/addApplePayDomains',
    'POST',
  ] as const
}

export function usePostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomains<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['addApplePayDomains']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['addApplePayDomains']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsKey()
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
            (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['addApplePayDomains']['$post']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].paymentMethodSettings[
            ':paymentMethodId'
          ].addApplePayDomains.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['getApplePayDomains']['$get']
  >,
) {
  return [
    'merchants',
    '/merchants/:merchantId/paymentMethodSettings/:paymentMethodId/getApplePayDomains',
    args,
  ] as const
}

export function useGetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomains<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['getApplePayDomains']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['getApplePayDomains']['$get']
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
        ? getGetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsKey(args)
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
                (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['getApplePayDomains']['$get']
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
          client.merchants[':merchantId'].paymentMethodSettings[
            ':paymentMethodId'
          ].getApplePayDomains.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomains<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['getApplePayDomains']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['getApplePayDomains']['$get']
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
        ? getGetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsKey(args)
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
                (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['getApplePayDomains']['$get']
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
          client.merchants[':merchantId'].paymentMethodSettings[
            ':paymentMethodId'
          ].getApplePayDomains.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdPayoutSettingsKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['payoutSettings']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/payoutSettings', args] as const
}

export function useGetMerchantsMerchantIdPayoutSettings<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['payoutSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['payoutSettings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantsMerchantIdPayoutSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['payoutSettings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.merchants[':merchantId'].payoutSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdPayoutSettings<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['payoutSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['payoutSettings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantsMerchantIdPayoutSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['payoutSettings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.merchants[':merchantId'].payoutSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantsMerchantIdPayoutSettingsKey() {
  return ['merchants', '/merchants/:merchantId/payoutSettings', 'POST'] as const
}

export function usePostMerchantsMerchantIdPayoutSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['payoutSettings']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.merchants)[':merchantId']['payoutSettings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantsMerchantIdPayoutSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.merchants)[':merchantId']['payoutSettings']['$post']>
        },
      ) => parseResponse(client.merchants[':merchantId'].payoutSettings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$get']
  >,
) {
  return ['merchants', '/merchants/:merchantId/payoutSettings/:payoutSettingsId', args] as const
}

export function useGetMerchantsMerchantIdPayoutSettingsPayoutSettingsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$get']
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
        ? getGetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdKey(args)
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
                (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$get']
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
          client.merchants[':merchantId'].payoutSettings[':payoutSettingsId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdPayoutSettingsPayoutSettingsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$get']
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
        ? getGetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdKey(args)
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
                (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$get']
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
          client.merchants[':merchantId'].payoutSettings[':payoutSettingsId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdKey() {
  return ['merchants', '/merchants/:merchantId/payoutSettings/:payoutSettingsId', 'DELETE'] as const
}

export function useDeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdKey()
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
            (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].payoutSettings[':payoutSettingsId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdKey() {
  return ['merchants', '/merchants/:merchantId/payoutSettings/:payoutSettingsId', 'PATCH'] as const
}

export function usePatchMerchantsMerchantIdPayoutSettingsPayoutSettingsId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdKey()
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
            (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].payoutSettings[':payoutSettingsId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdShippingLocationsKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['shippingLocations']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/shippingLocations', args] as const
}

export function useGetMerchantsMerchantIdShippingLocations<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['shippingLocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['shippingLocations']['$get']>
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
        ? getGetMerchantsMerchantIdShippingLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['shippingLocations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.merchants[':merchantId'].shippingLocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdShippingLocations<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['shippingLocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['shippingLocations']['$get']>
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
        ? getGetMerchantsMerchantIdShippingLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['shippingLocations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.merchants[':merchantId'].shippingLocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantsMerchantIdShippingLocationsKey() {
  return ['merchants', '/merchants/:merchantId/shippingLocations', 'POST'] as const
}

export function usePostMerchantsMerchantIdShippingLocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['shippingLocations']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.merchants)[':merchantId']['shippingLocations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantsMerchantIdShippingLocationsKey()
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
            (typeof client.merchants)[':merchantId']['shippingLocations']['$post']
          >
        },
      ) =>
        parseResponse(client.merchants[':merchantId'].shippingLocations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdSplitConfigurationsKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['splitConfigurations']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/splitConfigurations', args] as const
}

export function useGetMerchantsMerchantIdSplitConfigurations<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['splitConfigurations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['splitConfigurations']['$get']>
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
        ? getGetMerchantsMerchantIdSplitConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['splitConfigurations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.merchants[':merchantId'].splitConfigurations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdSplitConfigurations<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['splitConfigurations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['splitConfigurations']['$get']>
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
        ? getGetMerchantsMerchantIdSplitConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['splitConfigurations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.merchants[':merchantId'].splitConfigurations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantsMerchantIdSplitConfigurationsKey() {
  return ['merchants', '/merchants/:merchantId/splitConfigurations', 'POST'] as const
}

export function usePostMerchantsMerchantIdSplitConfigurations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['splitConfigurations']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.merchants)[':merchantId']['splitConfigurations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantsMerchantIdSplitConfigurationsKey()
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
            (typeof client.merchants)[':merchantId']['splitConfigurations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].splitConfigurations.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$get']
  >,
) {
  return [
    'merchants',
    '/merchants/:merchantId/splitConfigurations/:splitConfigurationId',
    args,
  ] as const
}

export function useGetMerchantsMerchantIdSplitConfigurationsSplitConfigurationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$get']
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
        ? getGetMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdKey(args)
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
                (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$get']
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
          client.merchants[':merchantId'].splitConfigurations[':splitConfigurationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdSplitConfigurationsSplitConfigurationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$get']
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
        ? getGetMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdKey(args)
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
                (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$get']
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
          client.merchants[':merchantId'].splitConfigurations[':splitConfigurationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdKey() {
  return [
    'merchants',
    '/merchants/:merchantId/splitConfigurations/:splitConfigurationId',
    'POST',
  ] as const
}

export function usePostMerchantsMerchantIdSplitConfigurationsSplitConfigurationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdKey()
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
            (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].splitConfigurations[':splitConfigurationId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdKey() {
  return [
    'merchants',
    '/merchants/:merchantId/splitConfigurations/:splitConfigurationId',
    'DELETE',
  ] as const
}

export function useDeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdKey()
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
            (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].splitConfigurations[':splitConfigurationId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdKey() {
  return [
    'merchants',
    '/merchants/:merchantId/splitConfigurations/:splitConfigurationId',
    'PATCH',
  ] as const
}

export function usePatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdKey()
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
            (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].splitConfigurations[':splitConfigurationId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdKey() {
  return [
    'merchants',
    '/merchants/:merchantId/splitConfigurations/:splitConfigurationId/rules/:ruleId',
    'DELETE',
  ] as const
}

export function useDeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['rules'][':ruleId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['rules'][':ruleId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdKey()
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
            (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['rules'][':ruleId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].splitConfigurations[':splitConfigurationId'].rules[
            ':ruleId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdKey() {
  return [
    'merchants',
    '/merchants/:merchantId/splitConfigurations/:splitConfigurationId/rules/:ruleId',
    'PATCH',
  ] as const
}

export function usePatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['rules'][':ruleId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['rules'][':ruleId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdKey()
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
            (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['rules'][':ruleId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].splitConfigurations[':splitConfigurationId'].rules[
            ':ruleId'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdSplitLogicSplitLogicIdKey() {
  return [
    'merchants',
    '/merchants/:merchantId/splitConfigurations/:splitConfigurationId/rules/:ruleId/splitLogic/:splitLogicId',
    'PATCH',
  ] as const
}

export function usePatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdSplitLogicSplitLogicId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['rules'][':ruleId']['splitLogic'][':splitLogicId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['rules'][':ruleId']['splitLogic'][':splitLogicId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdSplitLogicSplitLogicIdKey()
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
            (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['rules'][':ruleId']['splitLogic'][':splitLogicId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].splitConfigurations[':splitConfigurationId'].rules[
            ':ruleId'
          ].splitLogic[':splitLogicId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdStoresKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['stores']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/stores', args] as const
}

export function useGetMerchantsMerchantIdStores<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['stores']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['stores']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantsMerchantIdStoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['stores']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.merchants[':merchantId'].stores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdStores<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['stores']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['stores']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantsMerchantIdStoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['stores']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.merchants[':merchantId'].stores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantsMerchantIdStoresKey() {
  return ['merchants', '/merchants/:merchantId/stores', 'POST'] as const
}

export function usePostMerchantsMerchantIdStores<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['stores']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.merchants)[':merchantId']['stores']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantsMerchantIdStoresKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.merchants)[':merchantId']['stores']['$post']> },
      ) => parseResponse(client.merchants[':merchantId'].stores.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdStoresReferenceTerminalLogosKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalLogos']['$get']
  >,
) {
  return ['merchants', '/merchants/:merchantId/stores/:reference/terminalLogos', args] as const
}

export function useGetMerchantsMerchantIdStoresReferenceTerminalLogos<TError = unknown>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalLogos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalLogos']['$get']
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
        ? getGetMerchantsMerchantIdStoresReferenceTerminalLogosKey(args)
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
                (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalLogos']['$get']
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
          client.merchants[':merchantId'].stores[':reference'].terminalLogos.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdStoresReferenceTerminalLogos<TError = unknown>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalLogos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalLogos']['$get']
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
        ? getGetMerchantsMerchantIdStoresReferenceTerminalLogosKey(args)
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
                (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalLogos']['$get']
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
          client.merchants[':merchantId'].stores[':reference'].terminalLogos.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchMerchantsMerchantIdStoresReferenceTerminalLogosKey() {
  return ['merchants', '/merchants/:merchantId/stores/:reference/terminalLogos', 'PATCH'] as const
}

export function usePatchMerchantsMerchantIdStoresReferenceTerminalLogos<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalLogos']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalLogos']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMerchantsMerchantIdStoresReferenceTerminalLogosKey()
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
            (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalLogos']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].stores[':reference'].terminalLogos.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdStoresReferenceTerminalSettingsKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalSettings']['$get']
  >,
) {
  return ['merchants', '/merchants/:merchantId/stores/:reference/terminalSettings', args] as const
}

export function useGetMerchantsMerchantIdStoresReferenceTerminalSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalSettings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalSettings']['$get']
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
        ? getGetMerchantsMerchantIdStoresReferenceTerminalSettingsKey(args)
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
                (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalSettings']['$get']
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
          client.merchants[':merchantId'].stores[':reference'].terminalSettings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdStoresReferenceTerminalSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalSettings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalSettings']['$get']
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
        ? getGetMerchantsMerchantIdStoresReferenceTerminalSettingsKey(args)
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
                (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalSettings']['$get']
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
          client.merchants[':merchantId'].stores[':reference'].terminalSettings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchMerchantsMerchantIdStoresReferenceTerminalSettingsKey() {
  return [
    'merchants',
    '/merchants/:merchantId/stores/:reference/terminalSettings',
    'PATCH',
  ] as const
}

export function usePatchMerchantsMerchantIdStoresReferenceTerminalSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalSettings']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalSettings']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMerchantsMerchantIdStoresReferenceTerminalSettingsKey()
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
            (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalSettings']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].stores[':reference'].terminalSettings.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdStoresStoreIdKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['stores'][':storeId']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/stores/:storeId', args] as const
}

export function useGetMerchantsMerchantIdStoresStoreId<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['stores'][':storeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['stores'][':storeId']['$get']>
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
        ? getGetMerchantsMerchantIdStoresStoreIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['stores'][':storeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.merchants[':merchantId'].stores[':storeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdStoresStoreId<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['stores'][':storeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['stores'][':storeId']['$get']>
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
        ? getGetMerchantsMerchantIdStoresStoreIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['stores'][':storeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.merchants[':merchantId'].stores[':storeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchMerchantsMerchantIdStoresStoreIdKey() {
  return ['merchants', '/merchants/:merchantId/stores/:storeId', 'PATCH'] as const
}

export function usePatchMerchantsMerchantIdStoresStoreId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['stores'][':storeId']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.merchants)[':merchantId']['stores'][':storeId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMerchantsMerchantIdStoresStoreIdKey()
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
            (typeof client.merchants)[':merchantId']['stores'][':storeId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].stores[':storeId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdTerminalLogosKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalLogos']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/terminalLogos', args] as const
}

export function useGetMerchantsMerchantIdTerminalLogos<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalLogos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalLogos']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantsMerchantIdTerminalLogosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalLogos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.merchants[':merchantId'].terminalLogos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdTerminalLogos<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalLogos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalLogos']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantsMerchantIdTerminalLogosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalLogos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.merchants[':merchantId'].terminalLogos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchMerchantsMerchantIdTerminalLogosKey() {
  return ['merchants', '/merchants/:merchantId/terminalLogos', 'PATCH'] as const
}

export function usePatchMerchantsMerchantIdTerminalLogos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalLogos']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.merchants)[':merchantId']['terminalLogos']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMerchantsMerchantIdTerminalLogosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.merchants)[':merchantId']['terminalLogos']['$patch']>
        },
      ) => parseResponse(client.merchants[':merchantId'].terminalLogos.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdTerminalModelsKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalModels']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/terminalModels', args] as const
}

export function useGetMerchantsMerchantIdTerminalModels<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalModels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalModels']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantsMerchantIdTerminalModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalModels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.merchants[':merchantId'].terminalModels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdTerminalModels<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalModels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalModels']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantsMerchantIdTerminalModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalModels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.merchants[':merchantId'].terminalModels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdTerminalOrdersKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalOrders']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/terminalOrders', args] as const
}

export function useGetMerchantsMerchantIdTerminalOrders<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalOrders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalOrders']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantsMerchantIdTerminalOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalOrders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.merchants[':merchantId'].terminalOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdTerminalOrders<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalOrders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalOrders']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantsMerchantIdTerminalOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalOrders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.merchants[':merchantId'].terminalOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantsMerchantIdTerminalOrdersKey() {
  return ['merchants', '/merchants/:merchantId/terminalOrders', 'POST'] as const
}

export function usePostMerchantsMerchantIdTerminalOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalOrders']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.merchants)[':merchantId']['terminalOrders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantsMerchantIdTerminalOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.merchants)[':merchantId']['terminalOrders']['$post']>
        },
      ) => parseResponse(client.merchants[':merchantId'].terminalOrders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdTerminalOrdersOrderIdKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['$get']
  >,
) {
  return ['merchants', '/merchants/:merchantId/terminalOrders/:orderId', args] as const
}

export function useGetMerchantsMerchantIdTerminalOrdersOrderId<TError = unknown>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['$get']
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
        ? getGetMerchantsMerchantIdTerminalOrdersOrderIdKey(args)
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
                (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['$get']
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
          client.merchants[':merchantId'].terminalOrders[':orderId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdTerminalOrdersOrderId<TError = unknown>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['$get']
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
        ? getGetMerchantsMerchantIdTerminalOrdersOrderIdKey(args)
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
                (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['$get']
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
          client.merchants[':merchantId'].terminalOrders[':orderId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchMerchantsMerchantIdTerminalOrdersOrderIdKey() {
  return ['merchants', '/merchants/:merchantId/terminalOrders/:orderId', 'PATCH'] as const
}

export function usePatchMerchantsMerchantIdTerminalOrdersOrderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMerchantsMerchantIdTerminalOrdersOrderIdKey()
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
            (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].terminalOrders[':orderId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantsMerchantIdTerminalOrdersOrderIdCancelKey() {
  return ['merchants', '/merchants/:merchantId/terminalOrders/:orderId/cancel', 'POST'] as const
}

export function usePostMerchantsMerchantIdTerminalOrdersOrderIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['cancel']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantsMerchantIdTerminalOrdersOrderIdCancelKey()
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
            (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].terminalOrders[':orderId'].cancel.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdTerminalProductsKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalProducts']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/terminalProducts', args] as const
}

export function useGetMerchantsMerchantIdTerminalProducts<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalProducts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['terminalProducts']['$get']>
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
        ? getGetMerchantsMerchantIdTerminalProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['terminalProducts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.merchants[':merchantId'].terminalProducts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdTerminalProducts<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalProducts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['terminalProducts']['$get']>
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
        ? getGetMerchantsMerchantIdTerminalProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['terminalProducts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.merchants[':merchantId'].terminalProducts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdTerminalSettingsKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalSettings']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/terminalSettings', args] as const
}

export function useGetMerchantsMerchantIdTerminalSettings<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['terminalSettings']['$get']>
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
        ? getGetMerchantsMerchantIdTerminalSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['terminalSettings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.merchants[':merchantId'].terminalSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdTerminalSettings<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['terminalSettings']['$get']>
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
        ? getGetMerchantsMerchantIdTerminalSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['terminalSettings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.merchants[':merchantId'].terminalSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchMerchantsMerchantIdTerminalSettingsKey() {
  return ['merchants', '/merchants/:merchantId/terminalSettings', 'PATCH'] as const
}

export function usePatchMerchantsMerchantIdTerminalSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['terminalSettings']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.merchants)[':merchantId']['terminalSettings']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMerchantsMerchantIdTerminalSettingsKey()
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
            (typeof client.merchants)[':merchantId']['terminalSettings']['$patch']
          >
        },
      ) =>
        parseResponse(client.merchants[':merchantId'].terminalSettings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdUsersKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['users']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/users', args] as const
}

export function useGetMerchantsMerchantIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantsMerchantIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.merchants[':merchantId'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantsMerchantIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.merchants[':merchantId'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantsMerchantIdUsersKey() {
  return ['merchants', '/merchants/:merchantId/users', 'POST'] as const
}

export function usePostMerchantsMerchantIdUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['users']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.merchants)[':merchantId']['users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantsMerchantIdUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.merchants)[':merchantId']['users']['$post']> },
      ) => parseResponse(client.merchants[':merchantId'].users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdUsersUserIdKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['users'][':userId']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/users/:userId', args] as const
}

export function useGetMerchantsMerchantIdUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['users'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['users'][':userId']['$get']>
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
        ? getGetMerchantsMerchantIdUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['users'][':userId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.merchants[':merchantId'].users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['users'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['users'][':userId']['$get']>
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
        ? getGetMerchantsMerchantIdUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['users'][':userId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.merchants[':merchantId'].users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchMerchantsMerchantIdUsersUserIdKey() {
  return ['merchants', '/merchants/:merchantId/users/:userId', 'PATCH'] as const
}

export function usePatchMerchantsMerchantIdUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['users'][':userId']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.merchants)[':merchantId']['users'][':userId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMerchantsMerchantIdUsersUserIdKey()
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
            (typeof client.merchants)[':merchantId']['users'][':userId']['$patch']
          >
        },
      ) =>
        parseResponse(client.merchants[':merchantId'].users[':userId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdWebhooksKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['webhooks']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/webhooks', args] as const
}

export function useGetMerchantsMerchantIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['webhooks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantsMerchantIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.merchants[':merchantId'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['webhooks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantsMerchantIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.merchants[':merchantId'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantsMerchantIdWebhooksKey() {
  return ['merchants', '/merchants/:merchantId/webhooks', 'POST'] as const
}

export function usePostMerchantsMerchantIdWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['webhooks']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.merchants)[':merchantId']['webhooks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantsMerchantIdWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.merchants)[':merchantId']['webhooks']['$post']> },
      ) => parseResponse(client.merchants[':merchantId'].webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdWebhooksWebhookIdKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$get']
  >,
) {
  return ['merchants', '/merchants/:merchantId/webhooks/:webhookId', args] as const
}

export function useGetMerchantsMerchantIdWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$get']>
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
        ? getGetMerchantsMerchantIdWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.merchants[':merchantId'].webhooks[':webhookId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$get']>
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
        ? getGetMerchantsMerchantIdWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.merchants[':merchantId'].webhooks[':webhookId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteMerchantsMerchantIdWebhooksWebhookIdKey() {
  return ['merchants', '/merchants/:merchantId/webhooks/:webhookId', 'DELETE'] as const
}

export function useDeleteMerchantsMerchantIdWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMerchantsMerchantIdWebhooksWebhookIdKey()
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
            (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].webhooks[':webhookId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchMerchantsMerchantIdWebhooksWebhookIdKey() {
  return ['merchants', '/merchants/:merchantId/webhooks/:webhookId', 'PATCH'] as const
}

export function usePatchMerchantsMerchantIdWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMerchantsMerchantIdWebhooksWebhookIdKey()
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
            (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].webhooks[':webhookId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacKey() {
  return ['merchants', '/merchants/:merchantId/webhooks/:webhookId/generateHmac', 'POST'] as const
}

export function usePostMerchantsMerchantIdWebhooksWebhookIdGenerateHmac<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['generateHmac']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['generateHmac']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacKey()
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
            (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['generateHmac']['$post']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].webhooks[':webhookId'].generateHmac.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantsMerchantIdWebhooksWebhookIdTestKey() {
  return ['merchants', '/merchants/:merchantId/webhooks/:webhookId/test', 'POST'] as const
}

export function usePostMerchantsMerchantIdWebhooksWebhookIdTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['test']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['test']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantsMerchantIdWebhooksWebhookIdTestKey()
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
            (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['test']['$post']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].webhooks[':webhookId'].test.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetStoresKey(args: InferRequestType<typeof client.stores.$get>) {
  return ['stores', '/stores', args] as const
}

export function useGetStores<TError = unknown>(
  args: InferRequestType<typeof client.stores.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stores.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStoresKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stores.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.stores.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetStores<TError = unknown>(
  args: InferRequestType<typeof client.stores.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stores.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStoresKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stores.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.stores.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostStoresKey() {
  return ['stores', '/stores', 'POST'] as const
}

export function usePostStores<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stores.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.stores.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoresKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.stores.$post> }) =>
        parseResponse(client.stores.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStoresStoreIdKey(
  args: InferRequestType<(typeof client.stores)[':storeId']['$get']>,
) {
  return ['stores', '/stores/:storeId', args] as const
}

export function useGetStoresStoreId<TError = unknown>(
  args: InferRequestType<(typeof client.stores)[':storeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stores)[':storeId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStoresStoreIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stores)[':storeId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stores[':storeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoresStoreId<TError = unknown>(
  args: InferRequestType<(typeof client.stores)[':storeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stores)[':storeId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStoresStoreIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stores)[':storeId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stores[':storeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchStoresStoreIdKey() {
  return ['stores', '/stores/:storeId', 'PATCH'] as const
}

export function usePatchStoresStoreId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stores)[':storeId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.stores)[':storeId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchStoresStoreIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.stores)[':storeId']['$patch']> },
      ) => parseResponse(client.stores[':storeId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStoresStoreIdTerminalLogosKey(
  args: InferRequestType<(typeof client.stores)[':storeId']['terminalLogos']['$get']>,
) {
  return ['stores', '/stores/:storeId/terminalLogos', args] as const
}

export function useGetStoresStoreIdTerminalLogos<TError = unknown>(
  args: InferRequestType<(typeof client.stores)[':storeId']['terminalLogos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stores)[':storeId']['terminalLogos']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoresStoreIdTerminalLogosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stores)[':storeId']['terminalLogos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stores[':storeId'].terminalLogos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoresStoreIdTerminalLogos<TError = unknown>(
  args: InferRequestType<(typeof client.stores)[':storeId']['terminalLogos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stores)[':storeId']['terminalLogos']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoresStoreIdTerminalLogosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stores)[':storeId']['terminalLogos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stores[':storeId'].terminalLogos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchStoresStoreIdTerminalLogosKey() {
  return ['stores', '/stores/:storeId/terminalLogos', 'PATCH'] as const
}

export function usePatchStoresStoreIdTerminalLogos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stores)[':storeId']['terminalLogos']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.stores)[':storeId']['terminalLogos']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchStoresStoreIdTerminalLogosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.stores)[':storeId']['terminalLogos']['$patch']> },
      ) => parseResponse(client.stores[':storeId'].terminalLogos.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStoresStoreIdTerminalSettingsKey(
  args: InferRequestType<(typeof client.stores)[':storeId']['terminalSettings']['$get']>,
) {
  return ['stores', '/stores/:storeId/terminalSettings', args] as const
}

export function useGetStoresStoreIdTerminalSettings<TError = unknown>(
  args: InferRequestType<(typeof client.stores)[':storeId']['terminalSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stores)[':storeId']['terminalSettings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoresStoreIdTerminalSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stores)[':storeId']['terminalSettings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stores[':storeId'].terminalSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoresStoreIdTerminalSettings<TError = unknown>(
  args: InferRequestType<(typeof client.stores)[':storeId']['terminalSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stores)[':storeId']['terminalSettings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoresStoreIdTerminalSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stores)[':storeId']['terminalSettings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stores[':storeId'].terminalSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchStoresStoreIdTerminalSettingsKey() {
  return ['stores', '/stores/:storeId/terminalSettings', 'PATCH'] as const
}

export function usePatchStoresStoreIdTerminalSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stores)[':storeId']['terminalSettings']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.stores)[':storeId']['terminalSettings']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchStoresStoreIdTerminalSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.stores)[':storeId']['terminalSettings']['$patch']>
        },
      ) => parseResponse(client.stores[':storeId'].terminalSettings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTerminalsKey(args: InferRequestType<typeof client.terminals.$get>) {
  return ['terminals', '/terminals', args] as const
}

export function useGetTerminals<TError = unknown>(
  args: InferRequestType<typeof client.terminals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terminals.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTerminalsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terminals.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.terminals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTerminals<TError = unknown>(
  args: InferRequestType<typeof client.terminals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terminals.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTerminalsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terminals.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.terminals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTerminalsScheduleActionsKey() {
  return ['terminals', '/terminals/scheduleActions', 'POST'] as const
}

export function usePostTerminalsScheduleActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.terminals.scheduleActions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.terminals.scheduleActions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTerminalsScheduleActionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.terminals.scheduleActions.$post> },
      ) => parseResponse(client.terminals.scheduleActions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTerminalsTerminalIdReassignKey() {
  return ['terminals', '/terminals/:terminalId/reassign', 'POST'] as const
}

export function usePostTerminalsTerminalIdReassign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.terminals)[':terminalId']['reassign']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.terminals)[':terminalId']['reassign']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTerminalsTerminalIdReassignKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.terminals)[':terminalId']['reassign']['$post']> },
      ) => parseResponse(client.terminals[':terminalId'].reassign.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTerminalsTerminalIdTerminalLogosKey(
  args: InferRequestType<(typeof client.terminals)[':terminalId']['terminalLogos']['$get']>,
) {
  return ['terminals', '/terminals/:terminalId/terminalLogos', args] as const
}

export function useGetTerminalsTerminalIdTerminalLogos<TError = unknown>(
  args: InferRequestType<(typeof client.terminals)[':terminalId']['terminalLogos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.terminals)[':terminalId']['terminalLogos']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTerminalsTerminalIdTerminalLogosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.terminals)[':terminalId']['terminalLogos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.terminals[':terminalId'].terminalLogos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTerminalsTerminalIdTerminalLogos<TError = unknown>(
  args: InferRequestType<(typeof client.terminals)[':terminalId']['terminalLogos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.terminals)[':terminalId']['terminalLogos']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTerminalsTerminalIdTerminalLogosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.terminals)[':terminalId']['terminalLogos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.terminals[':terminalId'].terminalLogos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchTerminalsTerminalIdTerminalLogosKey() {
  return ['terminals', '/terminals/:terminalId/terminalLogos', 'PATCH'] as const
}

export function usePatchTerminalsTerminalIdTerminalLogos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.terminals)[':terminalId']['terminalLogos']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.terminals)[':terminalId']['terminalLogos']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTerminalsTerminalIdTerminalLogosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.terminals)[':terminalId']['terminalLogos']['$patch']>
        },
      ) => parseResponse(client.terminals[':terminalId'].terminalLogos.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTerminalsTerminalIdTerminalSettingsKey(
  args: InferRequestType<(typeof client.terminals)[':terminalId']['terminalSettings']['$get']>,
) {
  return ['terminals', '/terminals/:terminalId/terminalSettings', args] as const
}

export function useGetTerminalsTerminalIdTerminalSettings<TError = unknown>(
  args: InferRequestType<(typeof client.terminals)[':terminalId']['terminalSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.terminals)[':terminalId']['terminalSettings']['$get']>
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
        ? getGetTerminalsTerminalIdTerminalSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.terminals)[':terminalId']['terminalSettings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.terminals[':terminalId'].terminalSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTerminalsTerminalIdTerminalSettings<TError = unknown>(
  args: InferRequestType<(typeof client.terminals)[':terminalId']['terminalSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.terminals)[':terminalId']['terminalSettings']['$get']>
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
        ? getGetTerminalsTerminalIdTerminalSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.terminals)[':terminalId']['terminalSettings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.terminals[':terminalId'].terminalSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchTerminalsTerminalIdTerminalSettingsKey() {
  return ['terminals', '/terminals/:terminalId/terminalSettings', 'PATCH'] as const
}

export function usePatchTerminalsTerminalIdTerminalSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.terminals)[':terminalId']['terminalSettings']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.terminals)[':terminalId']['terminalSettings']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTerminalsTerminalIdTerminalSettingsKey()
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
            (typeof client.terminals)[':terminalId']['terminalSettings']['$patch']
          >
        },
      ) =>
        parseResponse(client.terminals[':terminalId'].terminalSettings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdCampaignManagementKey() {
  return ['companies', '/companies/:companyId/campaignManagement', 'POST'] as const
}

export function usePostCompaniesCompanyIdCampaignManagement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.companies)[':companyId']['campaignManagement']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.companies)[':companyId']['campaignManagement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesCompanyIdCampaignManagementKey()
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
            (typeof client.companies)[':companyId']['campaignManagement']['$post']
          >
        },
      ) =>
        parseResponse(client.companies[':companyId'].campaignManagement.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['campaignManagement']['accountHolders'][':accountHolderId']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/campaignManagement/accountHolders/:accountHolderId',
    args,
  ] as const
}

export function useGetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['campaignManagement']['accountHolders'][':accountHolderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['campaignManagement']['accountHolders'][':accountHolderId']['$get']
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
        ? getGetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdKey(args)
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
                (typeof client.companies)[':companyId']['campaignManagement']['accountHolders'][':accountHolderId']['$get']
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
          client.companies[':companyId'].campaignManagement.accountHolders[':accountHolderId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['campaignManagement']['accountHolders'][':accountHolderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['campaignManagement']['accountHolders'][':accountHolderId']['$get']
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
        ? getGetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdKey(args)
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
                (typeof client.companies)[':companyId']['campaignManagement']['accountHolders'][':accountHolderId']['$get']
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
          client.companies[':companyId'].campaignManagement.accountHolders[':accountHolderId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdKey() {
  return [
    'companies',
    '/companies/:companyId/campaignManagement/:donationCampaignId',
    'DELETE',
  ] as const
}

export function useDeleteCompaniesCompanyIdCampaignManagementDonationCampaignId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['campaignManagement'][':donationCampaignId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.companies)[':companyId']['campaignManagement'][':donationCampaignId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdKey()
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
            (typeof client.companies)[':companyId']['campaignManagement'][':donationCampaignId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].campaignManagement[':donationCampaignId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCompaniesCompanyIdCampaignManagementDonationCampaignIdKey() {
  return [
    'companies',
    '/companies/:companyId/campaignManagement/:donationCampaignId',
    'PATCH',
  ] as const
}

export function usePatchCompaniesCompanyIdCampaignManagementDonationCampaignId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['campaignManagement'][':donationCampaignId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.companies)[':companyId']['campaignManagement'][':donationCampaignId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCompaniesCompanyIdCampaignManagementDonationCampaignIdKey()
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
            (typeof client.companies)[':companyId']['campaignManagement'][':donationCampaignId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].campaignManagement[':donationCampaignId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusKey() {
  return [
    'companies',
    '/companies/:companyId/campaignManagement/:donationCampaignId/status/:status',
    'POST',
  ] as const
}

export function usePostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['campaignManagement'][':donationCampaignId']['status'][':status']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.companies)[':companyId']['campaignManagement'][':donationCampaignId']['status'][':status']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusKey()
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
            (typeof client.companies)[':companyId']['campaignManagement'][':donationCampaignId']['status'][':status']['$post']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].campaignManagement[':donationCampaignId'].status[
            ':status'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdClientCertificatesKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['clientCertificates']['$get']>,
) {
  return ['companies', '/companies/:companyId/clientCertificates', args] as const
}

export function useGetCompaniesCompanyIdClientCertificates<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['clientCertificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.companies)[':companyId']['clientCertificates']['$get']>
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
        ? getGetCompaniesCompanyIdClientCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.companies)[':companyId']['clientCertificates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].clientCertificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdClientCertificates<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['clientCertificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.companies)[':companyId']['clientCertificates']['$get']>
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
        ? getGetCompaniesCompanyIdClientCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.companies)[':companyId']['clientCertificates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].clientCertificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdClientCertificatesKey() {
  return ['companies', '/companies/:companyId/clientCertificates', 'POST'] as const
}

export function usePostCompaniesCompanyIdClientCertificates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.companies)[':companyId']['clientCertificates']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.companies)[':companyId']['clientCertificates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesCompanyIdClientCertificatesKey()
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
            (typeof client.companies)[':companyId']['clientCertificates']['$post']
          >
        },
      ) =>
        parseResponse(client.companies[':companyId'].clientCertificates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdNonprofitsKey() {
  return ['companies', '/companies/:companyId/nonprofits', 'POST'] as const
}

export function usePostCompaniesCompanyIdNonprofits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['nonprofits']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.companies)[':companyId']['nonprofits']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesCompanyIdNonprofitsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.companies)[':companyId']['nonprofits']['$post']>
        },
      ) => parseResponse(client.companies[':companyId'].nonprofits.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdTerminalThemesKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalThemes']['$get']>,
) {
  return ['companies', '/companies/:companyId/terminalThemes', args] as const
}

export function useGetCompaniesCompanyIdTerminalThemes<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalThemes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalThemes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdTerminalThemesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalThemes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].terminalThemes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdTerminalThemes<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalThemes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalThemes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdTerminalThemesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalThemes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.companies[':companyId'].terminalThemes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdTerminalThemesKey() {
  return ['companies', '/companies/:companyId/terminalThemes', 'POST'] as const
}

export function usePostCompaniesCompanyIdTerminalThemes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalThemes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.companies)[':companyId']['terminalThemes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesCompanyIdTerminalThemesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.companies)[':companyId']['terminalThemes']['$post']>
        },
      ) => parseResponse(client.companies[':companyId'].terminalThemes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdTerminalThemesUnapplyKey() {
  return ['companies', '/companies/:companyId/terminalThemes/unapply', 'POST'] as const
}

export function usePostCompaniesCompanyIdTerminalThemesUnapply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['terminalThemes']['unapply']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.companies)[':companyId']['terminalThemes']['unapply']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesCompanyIdTerminalThemesUnapplyKey()
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
            (typeof client.companies)[':companyId']['terminalThemes']['unapply']['$post']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].terminalThemes.unapply.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdTerminalThemesIdKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalThemes'][':id']['$get']>,
) {
  return ['companies', '/companies/:companyId/terminalThemes/:id', args] as const
}

export function useGetCompaniesCompanyIdTerminalThemesId<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalThemes'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.companies)[':companyId']['terminalThemes'][':id']['$get']>
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
        ? getGetCompaniesCompanyIdTerminalThemesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.companies)[':companyId']['terminalThemes'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.companies[':companyId'].terminalThemes[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdTerminalThemesId<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalThemes'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.companies)[':companyId']['terminalThemes'][':id']['$get']>
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
        ? getGetCompaniesCompanyIdTerminalThemesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.companies)[':companyId']['terminalThemes'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.companies[':companyId'].terminalThemes[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCompaniesCompanyIdTerminalThemesIdKey() {
  return ['companies', '/companies/:companyId/terminalThemes/:id', 'DELETE'] as const
}

export function useDeleteCompaniesCompanyIdTerminalThemesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['terminalThemes'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.companies)[':companyId']['terminalThemes'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCompaniesCompanyIdTerminalThemesIdKey()
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
            (typeof client.companies)[':companyId']['terminalThemes'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].terminalThemes[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCompaniesCompanyIdTerminalThemesIdKey() {
  return ['companies', '/companies/:companyId/terminalThemes/:id', 'PATCH'] as const
}

export function usePatchCompaniesCompanyIdTerminalThemesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.companies)[':companyId']['terminalThemes'][':id']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.companies)[':companyId']['terminalThemes'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCompaniesCompanyIdTerminalThemesIdKey()
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
            (typeof client.companies)[':companyId']['terminalThemes'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].terminalThemes[':id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdTerminalThemesIdApplyKey() {
  return ['companies', '/companies/:companyId/terminalThemes/:id/apply', 'POST'] as const
}

export function usePostCompaniesCompanyIdTerminalThemesIdApply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['terminalThemes'][':id']['apply']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.companies)[':companyId']['terminalThemes'][':id']['apply']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesCompanyIdTerminalThemesIdApplyKey()
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
            (typeof client.companies)[':companyId']['terminalThemes'][':id']['apply']['$post']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].terminalThemes[':id'].apply.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdTerminalThemesIdAssetsKey() {
  return ['companies', '/companies/:companyId/terminalThemes/:id/assets', 'POST'] as const
}

export function usePostCompaniesCompanyIdTerminalThemesIdAssets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['terminalThemes'][':id']['assets']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.companies)[':companyId']['terminalThemes'][':id']['assets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesCompanyIdTerminalThemesIdAssetsKey()
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
            (typeof client.companies)[':companyId']['terminalThemes'][':id']['assets']['$post']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].terminalThemes[':id'].assets.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCompaniesCompanyIdTerminalThemesIdAssetsKey() {
  return ['companies', '/companies/:companyId/terminalThemes/:id/assets', 'DELETE'] as const
}

export function useDeleteCompaniesCompanyIdTerminalThemesIdAssets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['terminalThemes'][':id']['assets']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.companies)[':companyId']['terminalThemes'][':id']['assets']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCompaniesCompanyIdTerminalThemesIdAssetsKey()
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
            (typeof client.companies)[':companyId']['terminalThemes'][':id']['assets']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].terminalThemes[':id'].assets.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdTerminalThemesIdAssetsReplaceKey() {
  return ['companies', '/companies/:companyId/terminalThemes/:id/assets/replace', 'POST'] as const
}

export function usePostCompaniesCompanyIdTerminalThemesIdAssetsReplace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['terminalThemes'][':id']['assets']['replace']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.companies)[':companyId']['terminalThemes'][':id']['assets']['replace']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesCompanyIdTerminalThemesIdAssetsReplaceKey()
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
            (typeof client.companies)[':companyId']['terminalThemes'][':id']['assets']['replace']['$post']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].terminalThemes[':id'].assets.replace.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdTerminalThemesKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalThemes']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/terminalThemes', args] as const
}

export function useGetMerchantsMerchantIdTerminalThemes<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalThemes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalThemes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantsMerchantIdTerminalThemesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalThemes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.merchants[':merchantId'].terminalThemes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdTerminalThemes<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalThemes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalThemes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantsMerchantIdTerminalThemesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalThemes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.merchants[':merchantId'].terminalThemes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantsMerchantIdTerminalThemesKey() {
  return ['merchants', '/merchants/:merchantId/terminalThemes', 'POST'] as const
}

export function usePostMerchantsMerchantIdTerminalThemes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalThemes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.merchants)[':merchantId']['terminalThemes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantsMerchantIdTerminalThemesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.merchants)[':merchantId']['terminalThemes']['$post']>
        },
      ) => parseResponse(client.merchants[':merchantId'].terminalThemes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantsMerchantIdTerminalThemesUnapplyKey() {
  return ['merchants', '/merchants/:merchantId/terminalThemes/unapply', 'POST'] as const
}

export function usePostMerchantsMerchantIdTerminalThemesUnapply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.merchants)[':merchantId']['terminalThemes']['unapply']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.merchants)[':merchantId']['terminalThemes']['unapply']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantsMerchantIdTerminalThemesUnapplyKey()
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
            (typeof client.merchants)[':merchantId']['terminalThemes']['unapply']['$post']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].terminalThemes.unapply.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdTerminalThemesIdKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/terminalThemes/:id', args] as const
}

export function useGetMerchantsMerchantIdTerminalThemesId<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$get']>
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
        ? getGetMerchantsMerchantIdTerminalThemesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.merchants[':merchantId'].terminalThemes[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdTerminalThemesId<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$get']>
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
        ? getGetMerchantsMerchantIdTerminalThemesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.merchants[':merchantId'].terminalThemes[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteMerchantsMerchantIdTerminalThemesIdKey() {
  return ['merchants', '/merchants/:merchantId/terminalThemes/:id', 'DELETE'] as const
}

export function useDeleteMerchantsMerchantIdTerminalThemesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMerchantsMerchantIdTerminalThemesIdKey()
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
            (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].terminalThemes[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchMerchantsMerchantIdTerminalThemesIdKey() {
  return ['merchants', '/merchants/:merchantId/terminalThemes/:id', 'PATCH'] as const
}

export function usePatchMerchantsMerchantIdTerminalThemesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMerchantsMerchantIdTerminalThemesIdKey()
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
            (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].terminalThemes[':id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantsMerchantIdTerminalThemesIdApplyKey() {
  return ['merchants', '/merchants/:merchantId/terminalThemes/:id/apply', 'POST'] as const
}

export function usePostMerchantsMerchantIdTerminalThemesIdApply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['apply']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['apply']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantsMerchantIdTerminalThemesIdApplyKey()
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
            (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['apply']['$post']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].terminalThemes[':id'].apply.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantsMerchantIdTerminalThemesIdAssetsKey() {
  return ['merchants', '/merchants/:merchantId/terminalThemes/:id/assets', 'POST'] as const
}

export function usePostMerchantsMerchantIdTerminalThemesIdAssets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['assets']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['assets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantsMerchantIdTerminalThemesIdAssetsKey()
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
            (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['assets']['$post']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].terminalThemes[':id'].assets.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMerchantsMerchantIdTerminalThemesIdAssetsKey() {
  return ['merchants', '/merchants/:merchantId/terminalThemes/:id/assets', 'DELETE'] as const
}

export function useDeleteMerchantsMerchantIdTerminalThemesIdAssets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['assets']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['assets']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMerchantsMerchantIdTerminalThemesIdAssetsKey()
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
            (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['assets']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].terminalThemes[':id'].assets.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantsMerchantIdTerminalThemesIdAssetsReplaceKey() {
  return ['merchants', '/merchants/:merchantId/terminalThemes/:id/assets/replace', 'POST'] as const
}

export function usePostMerchantsMerchantIdTerminalThemesIdAssetsReplace<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['assets']['replace']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['assets']['replace']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantsMerchantIdTerminalThemesIdAssetsReplaceKey()
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
            (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['assets']['replace']['$post']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].terminalThemes[':id'].assets.replace.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostStoresStoreIdTerminalThemesUnapplyKey() {
  return ['stores', '/stores/:storeId/terminalThemes/unapply', 'POST'] as const
}

export function usePostStoresStoreIdTerminalThemesUnapply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.stores)[':storeId']['terminalThemes']['unapply']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.stores)[':storeId']['terminalThemes']['unapply']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoresStoreIdTerminalThemesUnapplyKey()
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
            (typeof client.stores)[':storeId']['terminalThemes']['unapply']['$post']
          >
        },
      ) =>
        parseResponse(client.stores[':storeId'].terminalThemes.unapply.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStoresStoreIdTerminalThemesIdApplyKey() {
  return ['stores', '/stores/:storeId/terminalThemes/:id/apply', 'POST'] as const
}

export function usePostStoresStoreIdTerminalThemesIdApply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.stores)[':storeId']['terminalThemes'][':id']['apply']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.stores)[':storeId']['terminalThemes'][':id']['apply']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoresStoreIdTerminalThemesIdApplyKey()
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
            (typeof client.stores)[':storeId']['terminalThemes'][':id']['apply']['$post']
          >
        },
      ) =>
        parseResponse(
          client.stores[':storeId'].terminalThemes[':id'].apply.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTerminalsTerminalIdTerminalThemesUnapplyKey() {
  return ['terminals', '/terminals/:terminalId/terminalThemes/unapply', 'POST'] as const
}

export function usePostTerminalsTerminalIdTerminalThemesUnapply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.terminals)[':terminalId']['terminalThemes']['unapply']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.terminals)[':terminalId']['terminalThemes']['unapply']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTerminalsTerminalIdTerminalThemesUnapplyKey()
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
            (typeof client.terminals)[':terminalId']['terminalThemes']['unapply']['$post']
          >
        },
      ) =>
        parseResponse(
          client.terminals[':terminalId'].terminalThemes.unapply.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTerminalsTerminalIdTerminalThemesIdApplyKey() {
  return ['terminals', '/terminals/:terminalId/terminalThemes/:id/apply', 'POST'] as const
}

export function usePostTerminalsTerminalIdTerminalThemesIdApply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.terminals)[':terminalId']['terminalThemes'][':id']['apply']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.terminals)[':terminalId']['terminalThemes'][':id']['apply']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTerminalsTerminalIdTerminalThemesIdApplyKey()
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
            (typeof client.terminals)[':terminalId']['terminalThemes'][':id']['apply']['$post']
          >
        },
      ) =>
        parseResponse(
          client.terminals[':terminalId'].terminalThemes[':id'].apply.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
