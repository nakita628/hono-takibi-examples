import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountKey() {
  return ['account'] as const
}

export function getApikeysKey() {
  return ['apikeys'] as const
}

export function getApikeysModeImportFormatKey() {
  return ['apikeys#mode=import&format'] as const
}

export function getClientcertificatesKey() {
  return ['clientcertificates'] as const
}

export function getDomainnamesKey() {
  return ['domainnames'] as const
}

export function getRestapisKey() {
  return ['restapis'] as const
}

export function getRestapisModeImportKey() {
  return ['restapis#mode=import'] as const
}

export function getSdktypesKey() {
  return ['sdktypes'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getUsageplansKey() {
  return ['usageplans'] as const
}

export function getVpclinksKey() {
  return ['vpclinks'] as const
}

export function getGetApikeysKey(args: InferRequestType<typeof client.apikeys.$get>) {
  const { header: _, ...keyArgs } = args
  return ['apikeys', '/apikeys', keyArgs] as const
}

export function useGetApikeys<TError = unknown>(
  args: InferRequestType<typeof client.apikeys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apikeys.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApikeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apikeys.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.apikeys.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetApikeys<TError = unknown>(
  args: InferRequestType<typeof client.apikeys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apikeys.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApikeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apikeys.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.apikeys.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostApikeysKey() {
  return ['apikeys', '/apikeys', 'POST'] as const
}

export function usePostApikeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apikeys.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.apikeys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApikeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.apikeys.$post> }) =>
        parseResponse(client.apikeys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestapisRestapiIdAuthorizersKey(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['authorizers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/authorizers', keyArgs] as const
}

export function useGetRestapisRestapiIdAuthorizers<TError = unknown>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['authorizers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['authorizers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestapisRestapiIdAuthorizersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['authorizers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.restapis[':restapi_id'].authorizers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestapisRestapiIdAuthorizers<TError = unknown>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['authorizers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['authorizers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestapisRestapiIdAuthorizersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['authorizers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.restapis[':restapi_id'].authorizers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestapisRestapiIdAuthorizersKey() {
  return ['restapis', '/restapis/:restapi_id/authorizers', 'POST'] as const
}

export function usePostRestapisRestapiIdAuthorizers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['authorizers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.restapis)[':restapi_id']['authorizers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestapisRestapiIdAuthorizersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.restapis)[':restapi_id']['authorizers']['$post']>
        },
      ) => parseResponse(client.restapis[':restapi_id'].authorizers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDomainnamesDomainNameBasepathmappingsKey(
  args: InferRequestType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['domainnames', '/domainnames/:domain_name/basepathmappings', keyArgs] as const
}

export function useGetDomainnamesDomainNameBasepathmappings<TError = unknown>(
  args: InferRequestType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$get']>
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
        ? getGetDomainnamesDomainNameBasepathmappingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.domainnames[':domain_name'].basepathmappings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainnamesDomainNameBasepathmappings<TError = unknown>(
  args: InferRequestType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$get']>
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
        ? getGetDomainnamesDomainNameBasepathmappingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.domainnames[':domain_name'].basepathmappings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDomainnamesDomainNameBasepathmappingsKey() {
  return ['domainnames', '/domainnames/:domain_name/basepathmappings', 'POST'] as const
}

export function usePostDomainnamesDomainNameBasepathmappings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainnamesDomainNameBasepathmappingsKey()
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
            (typeof client.domainnames)[':domain_name']['basepathmappings']['$post']
          >
        },
      ) =>
        parseResponse(
          client.domainnames[':domain_name'].basepathmappings.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestapisRestapiIdDeploymentsKey(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['deployments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/deployments', keyArgs] as const
}

export function useGetRestapisRestapiIdDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['deployments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestapisRestapiIdDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['deployments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.restapis[':restapi_id'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestapisRestapiIdDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['deployments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestapisRestapiIdDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['deployments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.restapis[':restapi_id'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestapisRestapiIdDeploymentsKey() {
  return ['restapis', '/restapis/:restapi_id/deployments', 'POST'] as const
}

export function usePostRestapisRestapiIdDeployments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['deployments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.restapis)[':restapi_id']['deployments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestapisRestapiIdDeploymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.restapis)[':restapi_id']['deployments']['$post']>
        },
      ) => parseResponse(client.restapis[':restapi_id'].deployments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestapisRestapiIdDocumentationPartsKey(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/documentation/parts', keyArgs] as const
}

export function useGetRestapisRestapiIdDocumentationParts<TError = unknown>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$get']>
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
        ? getGetRestapisRestapiIdDocumentationPartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.restapis[':restapi_id'].documentation.parts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestapisRestapiIdDocumentationParts<TError = unknown>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$get']>
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
        ? getGetRestapisRestapiIdDocumentationPartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.restapis[':restapi_id'].documentation.parts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestapisRestapiIdDocumentationPartsKey() {
  return ['restapis', '/restapis/:restapi_id/documentation/parts', 'PUT'] as const
}

export function usePutRestapisRestapiIdDocumentationParts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestapisRestapiIdDocumentationPartsKey()
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
            (typeof client.restapis)[':restapi_id']['documentation']['parts']['$put']
          >
        },
      ) =>
        parseResponse(client.restapis[':restapi_id'].documentation.parts.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestapisRestapiIdDocumentationPartsKey() {
  return ['restapis', '/restapis/:restapi_id/documentation/parts', 'POST'] as const
}

export function usePostRestapisRestapiIdDocumentationParts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestapisRestapiIdDocumentationPartsKey()
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
            (typeof client.restapis)[':restapi_id']['documentation']['parts']['$post']
          >
        },
      ) =>
        parseResponse(client.restapis[':restapi_id'].documentation.parts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestapisRestapiIdDocumentationVersionsKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/documentation/versions', keyArgs] as const
}

export function useGetRestapisRestapiIdDocumentationVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['documentation']['versions']['$get']
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
        ? getGetRestapisRestapiIdDocumentationVersionsKey(args)
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
                (typeof client.restapis)[':restapi_id']['documentation']['versions']['$get']
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
          client.restapis[':restapi_id'].documentation.versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestapisRestapiIdDocumentationVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['documentation']['versions']['$get']
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
        ? getGetRestapisRestapiIdDocumentationVersionsKey(args)
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
                (typeof client.restapis)[':restapi_id']['documentation']['versions']['$get']
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
          client.restapis[':restapi_id'].documentation.versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestapisRestapiIdDocumentationVersionsKey() {
  return ['restapis', '/restapis/:restapi_id/documentation/versions', 'POST'] as const
}

export function usePostRestapisRestapiIdDocumentationVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['documentation']['versions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.restapis)[':restapi_id']['documentation']['versions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestapisRestapiIdDocumentationVersionsKey()
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
            (typeof client.restapis)[':restapi_id']['documentation']['versions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].documentation.versions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDomainnamesKey(args: InferRequestType<typeof client.domainnames.$get>) {
  const { header: _, ...keyArgs } = args
  return ['domainnames', '/domainnames', keyArgs] as const
}

export function useGetDomainnames<TError = unknown>(
  args: InferRequestType<typeof client.domainnames.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domainnames.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDomainnamesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domainnames.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domainnames.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainnames<TError = unknown>(
  args: InferRequestType<typeof client.domainnames.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domainnames.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDomainnamesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domainnames.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domainnames.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDomainnamesKey() {
  return ['domainnames', '/domainnames', 'POST'] as const
}

export function usePostDomainnames<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domainnames.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.domainnames.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainnamesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.domainnames.$post> }) =>
        parseResponse(client.domainnames.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestapisRestapiIdModelsKey(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['models']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/models', keyArgs] as const
}

export function useGetRestapisRestapiIdModels<TError = unknown>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['models']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestapisRestapiIdModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['models']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.restapis[':restapi_id'].models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestapisRestapiIdModels<TError = unknown>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['models']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestapisRestapiIdModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['models']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.restapis[':restapi_id'].models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestapisRestapiIdModelsKey() {
  return ['restapis', '/restapis/:restapi_id/models', 'POST'] as const
}

export function usePostRestapisRestapiIdModels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['models']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.restapis)[':restapi_id']['models']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestapisRestapiIdModelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.restapis)[':restapi_id']['models']['$post']> },
      ) => parseResponse(client.restapis[':restapi_id'].models.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestapisRestapiIdRequestvalidatorsKey(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/requestvalidators', keyArgs] as const
}

export function useGetRestapisRestapiIdRequestvalidators<TError = unknown>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$get']>
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
        ? getGetRestapisRestapiIdRequestvalidatorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.restapis[':restapi_id'].requestvalidators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestapisRestapiIdRequestvalidators<TError = unknown>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$get']>
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
        ? getGetRestapisRestapiIdRequestvalidatorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.restapis[':restapi_id'].requestvalidators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestapisRestapiIdRequestvalidatorsKey() {
  return ['restapis', '/restapis/:restapi_id/requestvalidators', 'POST'] as const
}

export function usePostRestapisRestapiIdRequestvalidators<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestapisRestapiIdRequestvalidatorsKey()
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
            (typeof client.restapis)[':restapi_id']['requestvalidators']['$post']
          >
        },
      ) =>
        parseResponse(client.restapis[':restapi_id'].requestvalidators.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestapisRestapiIdResourcesParentIdKey() {
  return ['restapis', '/restapis/:restapi_id/resources/:parent_id', 'POST'] as const
}

export function usePostRestapisRestapiIdResourcesParentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.restapis)[':restapi_id']['resources'][':parent_id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.restapis)[':restapi_id']['resources'][':parent_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestapisRestapiIdResourcesParentIdKey()
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
            (typeof client.restapis)[':restapi_id']['resources'][':parent_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].resources[':parent_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestapisKey(args: InferRequestType<typeof client.restapis.$get>) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis', keyArgs] as const
}

export function useGetRestapis<TError = unknown>(
  args: InferRequestType<typeof client.restapis.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restapis.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRestapisKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restapis.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.restapis.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRestapis<TError = unknown>(
  args: InferRequestType<typeof client.restapis.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restapis.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRestapisKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restapis.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.restapis.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostRestapisKey() {
  return ['restapis', '/restapis', 'POST'] as const
}

export function usePostRestapis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restapis.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.restapis.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestapisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.restapis.$post> }) =>
        parseResponse(client.restapis.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestapisRestapiIdStagesKey(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['stages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/stages', keyArgs] as const
}

export function useGetRestapisRestapiIdStages<TError = unknown>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['stages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['stages']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestapisRestapiIdStagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['stages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.restapis[':restapi_id'].stages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestapisRestapiIdStages<TError = unknown>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['stages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['stages']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestapisRestapiIdStagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['stages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.restapis[':restapi_id'].stages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestapisRestapiIdStagesKey() {
  return ['restapis', '/restapis/:restapi_id/stages', 'POST'] as const
}

export function usePostRestapisRestapiIdStages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['stages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.restapis)[':restapi_id']['stages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestapisRestapiIdStagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.restapis)[':restapi_id']['stages']['$post']> },
      ) => parseResponse(client.restapis[':restapi_id'].stages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsageplansKey(args: InferRequestType<typeof client.usageplans.$get>) {
  const { header: _, ...keyArgs } = args
  return ['usageplans', '/usageplans', keyArgs] as const
}

export function useGetUsageplans<TError = unknown>(
  args: InferRequestType<typeof client.usageplans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usageplans.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsageplansKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usageplans.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.usageplans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsageplans<TError = unknown>(
  args: InferRequestType<typeof client.usageplans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usageplans.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsageplansKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usageplans.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.usageplans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsageplansKey() {
  return ['usageplans', '/usageplans', 'POST'] as const
}

export function usePostUsageplans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usageplans.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.usageplans.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsageplansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.usageplans.$post> }) =>
        parseResponse(client.usageplans.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsageplansUsageplanIdKeysKey(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['keys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['usageplans', '/usageplans/:usageplanId/keys', keyArgs] as const
}

export function useGetUsageplansUsageplanIdKeys<TError = unknown>(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['keys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsageplansUsageplanIdKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.usageplans[':usageplanId'].keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsageplansUsageplanIdKeys<TError = unknown>(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['keys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsageplansUsageplanIdKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.usageplans[':usageplanId'].keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsageplansUsageplanIdKeysKey() {
  return ['usageplans', '/usageplans/:usageplanId/keys', 'POST'] as const
}

export function usePostUsageplansUsageplanIdKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['keys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.usageplans)[':usageplanId']['keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsageplansUsageplanIdKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.usageplans)[':usageplanId']['keys']['$post']> },
      ) => parseResponse(client.usageplans[':usageplanId'].keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVpclinksKey(args: InferRequestType<typeof client.vpclinks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['vpclinks', '/vpclinks', keyArgs] as const
}

export function useGetVpclinks<TError = unknown>(
  args: InferRequestType<typeof client.vpclinks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpclinks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVpclinksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpclinks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.vpclinks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetVpclinks<TError = unknown>(
  args: InferRequestType<typeof client.vpclinks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpclinks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVpclinksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpclinks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.vpclinks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostVpclinksKey() {
  return ['vpclinks', '/vpclinks', 'POST'] as const
}

export function usePostVpclinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpclinks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.vpclinks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVpclinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.vpclinks.$post> }) =>
        parseResponse(client.vpclinks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApikeysApiKeyKey(
  args: InferRequestType<(typeof client.apikeys)[':api_Key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['apikeys', '/apikeys/:api_Key', keyArgs] as const
}

export function useGetApikeysApiKey<TError = unknown>(
  args: InferRequestType<(typeof client.apikeys)[':api_Key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apikeys)[':api_Key']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApikeysApiKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apikeys)[':api_Key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apikeys[':api_Key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApikeysApiKey<TError = unknown>(
  args: InferRequestType<(typeof client.apikeys)[':api_Key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apikeys)[':api_Key']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApikeysApiKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apikeys)[':api_Key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apikeys[':api_Key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApikeysApiKeyKey() {
  return ['apikeys', '/apikeys/:api_Key', 'DELETE'] as const
}

export function useDeleteApikeysApiKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apikeys)[':api_Key']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apikeys)[':api_Key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApikeysApiKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apikeys)[':api_Key']['$delete']> },
      ) => parseResponse(client.apikeys[':api_Key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApikeysApiKeyKey() {
  return ['apikeys', '/apikeys/:api_Key', 'PATCH'] as const
}

export function usePatchApikeysApiKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apikeys)[':api_Key']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apikeys)[':api_Key']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApikeysApiKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apikeys)[':api_Key']['$patch']> },
      ) => parseResponse(client.apikeys[':api_Key'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestapisRestapiIdAuthorizersAuthorizerIdKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/authorizers/:authorizer_id', keyArgs] as const
}

export function useGetRestapisRestapiIdAuthorizersAuthorizerId<TError = unknown>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$get']
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
        ? getGetRestapisRestapiIdAuthorizersAuthorizerIdKey(args)
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
                (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$get']
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
          client.restapis[':restapi_id'].authorizers[':authorizer_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestapisRestapiIdAuthorizersAuthorizerId<TError = unknown>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$get']
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
        ? getGetRestapisRestapiIdAuthorizersAuthorizerIdKey(args)
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
                (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$get']
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
          client.restapis[':restapi_id'].authorizers[':authorizer_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestapisRestapiIdAuthorizersAuthorizerIdKey() {
  return ['restapis', '/restapis/:restapi_id/authorizers/:authorizer_id', 'POST'] as const
}

export function usePostRestapisRestapiIdAuthorizersAuthorizerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestapisRestapiIdAuthorizersAuthorizerIdKey()
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
            (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].authorizers[':authorizer_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestapisRestapiIdAuthorizersAuthorizerIdKey() {
  return ['restapis', '/restapis/:restapi_id/authorizers/:authorizer_id', 'DELETE'] as const
}

export function useDeleteRestapisRestapiIdAuthorizersAuthorizerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestapisRestapiIdAuthorizersAuthorizerIdKey()
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
            (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].authorizers[':authorizer_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchRestapisRestapiIdAuthorizersAuthorizerIdKey() {
  return ['restapis', '/restapis/:restapi_id/authorizers/:authorizer_id', 'PATCH'] as const
}

export function usePatchRestapisRestapiIdAuthorizersAuthorizerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRestapisRestapiIdAuthorizersAuthorizerIdKey()
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
            (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].authorizers[':authorizer_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDomainnamesDomainNameBasepathmappingsBasePathKey(
  args: InferRequestType<
    (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['domainnames', '/domainnames/:domain_name/basepathmappings/:base_path', keyArgs] as const
}

export function useGetDomainnamesDomainNameBasepathmappingsBasePath<TError = unknown>(
  args: InferRequestType<
    (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$get']
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
        ? getGetDomainnamesDomainNameBasepathmappingsBasePathKey(args)
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
                (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$get']
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
          client.domainnames[':domain_name'].basepathmappings[':base_path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainnamesDomainNameBasepathmappingsBasePath<TError = unknown>(
  args: InferRequestType<
    (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$get']
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
        ? getGetDomainnamesDomainNameBasepathmappingsBasePathKey(args)
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
                (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$get']
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
          client.domainnames[':domain_name'].basepathmappings[':base_path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteDomainnamesDomainNameBasepathmappingsBasePathKey() {
  return ['domainnames', '/domainnames/:domain_name/basepathmappings/:base_path', 'DELETE'] as const
}

export function useDeleteDomainnamesDomainNameBasepathmappingsBasePath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDomainnamesDomainNameBasepathmappingsBasePathKey()
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
            (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.domainnames[':domain_name'].basepathmappings[':base_path'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDomainnamesDomainNameBasepathmappingsBasePathKey() {
  return ['domainnames', '/domainnames/:domain_name/basepathmappings/:base_path', 'PATCH'] as const
}

export function usePatchDomainnamesDomainNameBasepathmappingsBasePath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDomainnamesDomainNameBasepathmappingsBasePathKey()
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
            (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.domainnames[':domain_name'].basepathmappings[':base_path'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetClientcertificatesClientcertificateIdKey(
  args: InferRequestType<(typeof client.clientcertificates)[':clientcertificate_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['clientcertificates', '/clientcertificates/:clientcertificate_id', keyArgs] as const
}

export function useGetClientcertificatesClientcertificateId<TError = unknown>(
  args: InferRequestType<(typeof client.clientcertificates)[':clientcertificate_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clientcertificates)[':clientcertificate_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetClientcertificatesClientcertificateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clientcertificates)[':clientcertificate_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.clientcertificates[':clientcertificate_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClientcertificatesClientcertificateId<TError = unknown>(
  args: InferRequestType<(typeof client.clientcertificates)[':clientcertificate_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clientcertificates)[':clientcertificate_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetClientcertificatesClientcertificateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clientcertificates)[':clientcertificate_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.clientcertificates[':clientcertificate_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteClientcertificatesClientcertificateIdKey() {
  return ['clientcertificates', '/clientcertificates/:clientcertificate_id', 'DELETE'] as const
}

export function useDeleteClientcertificatesClientcertificateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.clientcertificates)[':clientcertificate_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.clientcertificates)[':clientcertificate_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteClientcertificatesClientcertificateIdKey()
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
            (typeof client.clientcertificates)[':clientcertificate_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.clientcertificates[':clientcertificate_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchClientcertificatesClientcertificateIdKey() {
  return ['clientcertificates', '/clientcertificates/:clientcertificate_id', 'PATCH'] as const
}

export function usePatchClientcertificatesClientcertificateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clientcertificates)[':clientcertificate_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.clientcertificates)[':clientcertificate_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchClientcertificatesClientcertificateIdKey()
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
            (typeof client.clientcertificates)[':clientcertificate_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.clientcertificates[':clientcertificate_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestapisRestapiIdDeploymentsDeploymentIdKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/deployments/:deployment_id', keyArgs] as const
}

export function useGetRestapisRestapiIdDeploymentsDeploymentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$get']
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
        ? getGetRestapisRestapiIdDeploymentsDeploymentIdKey(args)
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
                (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$get']
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
          client.restapis[':restapi_id'].deployments[':deployment_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestapisRestapiIdDeploymentsDeploymentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$get']
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
        ? getGetRestapisRestapiIdDeploymentsDeploymentIdKey(args)
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
                (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$get']
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
          client.restapis[':restapi_id'].deployments[':deployment_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteRestapisRestapiIdDeploymentsDeploymentIdKey() {
  return ['restapis', '/restapis/:restapi_id/deployments/:deployment_id', 'DELETE'] as const
}

export function useDeleteRestapisRestapiIdDeploymentsDeploymentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestapisRestapiIdDeploymentsDeploymentIdKey()
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
            (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].deployments[':deployment_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchRestapisRestapiIdDeploymentsDeploymentIdKey() {
  return ['restapis', '/restapis/:restapi_id/deployments/:deployment_id', 'PATCH'] as const
}

export function usePatchRestapisRestapiIdDeploymentsDeploymentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRestapisRestapiIdDeploymentsDeploymentIdKey()
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
            (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].deployments[':deployment_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestapisRestapiIdDocumentationPartsPartIdKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/documentation/parts/:part_id', keyArgs] as const
}

export function useGetRestapisRestapiIdDocumentationPartsPartId<TError = unknown>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$get']
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
        ? getGetRestapisRestapiIdDocumentationPartsPartIdKey(args)
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
                (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$get']
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
          client.restapis[':restapi_id'].documentation.parts[':part_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestapisRestapiIdDocumentationPartsPartId<TError = unknown>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$get']
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
        ? getGetRestapisRestapiIdDocumentationPartsPartIdKey(args)
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
                (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$get']
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
          client.restapis[':restapi_id'].documentation.parts[':part_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteRestapisRestapiIdDocumentationPartsPartIdKey() {
  return ['restapis', '/restapis/:restapi_id/documentation/parts/:part_id', 'DELETE'] as const
}

export function useDeleteRestapisRestapiIdDocumentationPartsPartId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestapisRestapiIdDocumentationPartsPartIdKey()
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
            (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].documentation.parts[':part_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchRestapisRestapiIdDocumentationPartsPartIdKey() {
  return ['restapis', '/restapis/:restapi_id/documentation/parts/:part_id', 'PATCH'] as const
}

export function usePatchRestapisRestapiIdDocumentationPartsPartId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRestapisRestapiIdDocumentationPartsPartIdKey()
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
            (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].documentation.parts[':part_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestapisRestapiIdDocumentationVersionsDocVersionKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/documentation/versions/:doc_version', keyArgs] as const
}

export function useGetRestapisRestapiIdDocumentationVersionsDocVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$get']
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
        ? getGetRestapisRestapiIdDocumentationVersionsDocVersionKey(args)
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
                (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$get']
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
          client.restapis[':restapi_id'].documentation.versions[':doc_version'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestapisRestapiIdDocumentationVersionsDocVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$get']
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
        ? getGetRestapisRestapiIdDocumentationVersionsDocVersionKey(args)
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
                (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$get']
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
          client.restapis[':restapi_id'].documentation.versions[':doc_version'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteRestapisRestapiIdDocumentationVersionsDocVersionKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/documentation/versions/:doc_version',
    'DELETE',
  ] as const
}

export function useDeleteRestapisRestapiIdDocumentationVersionsDocVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestapisRestapiIdDocumentationVersionsDocVersionKey()
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
            (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].documentation.versions[':doc_version'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchRestapisRestapiIdDocumentationVersionsDocVersionKey() {
  return ['restapis', '/restapis/:restapi_id/documentation/versions/:doc_version', 'PATCH'] as const
}

export function usePatchRestapisRestapiIdDocumentationVersionsDocVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRestapisRestapiIdDocumentationVersionsDocVersionKey()
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
            (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].documentation.versions[':doc_version'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDomainnamesDomainNameKey(
  args: InferRequestType<(typeof client.domainnames)[':domain_name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['domainnames', '/domainnames/:domain_name', keyArgs] as const
}

export function useGetDomainnamesDomainName<TError = unknown>(
  args: InferRequestType<(typeof client.domainnames)[':domain_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domainnames)[':domain_name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainnamesDomainNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domainnames)[':domain_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domainnames[':domain_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainnamesDomainName<TError = unknown>(
  args: InferRequestType<(typeof client.domainnames)[':domain_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domainnames)[':domain_name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainnamesDomainNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domainnames)[':domain_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domainnames[':domain_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDomainnamesDomainNameKey() {
  return ['domainnames', '/domainnames/:domain_name', 'DELETE'] as const
}

export function useDeleteDomainnamesDomainName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domainnames)[':domain_name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domainnames)[':domain_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDomainnamesDomainNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.domainnames)[':domain_name']['$delete']> },
      ) => parseResponse(client.domainnames[':domain_name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDomainnamesDomainNameKey() {
  return ['domainnames', '/domainnames/:domain_name', 'PATCH'] as const
}

export function usePatchDomainnamesDomainName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domainnames)[':domain_name']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domainnames)[':domain_name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDomainnamesDomainNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.domainnames)[':domain_name']['$patch']> },
      ) => parseResponse(client.domainnames[':domain_name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestapisRestapiIdGatewayresponsesResponseTypeKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/gatewayresponses/:response_type', keyArgs] as const
}

export function useGetRestapisRestapiIdGatewayresponsesResponseType<TError = unknown>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$get']
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
        ? getGetRestapisRestapiIdGatewayresponsesResponseTypeKey(args)
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
                (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$get']
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
          client.restapis[':restapi_id'].gatewayresponses[':response_type'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestapisRestapiIdGatewayresponsesResponseType<TError = unknown>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$get']
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
        ? getGetRestapisRestapiIdGatewayresponsesResponseTypeKey(args)
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
                (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$get']
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
          client.restapis[':restapi_id'].gatewayresponses[':response_type'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestapisRestapiIdGatewayresponsesResponseTypeKey() {
  return ['restapis', '/restapis/:restapi_id/gatewayresponses/:response_type', 'PUT'] as const
}

export function usePutRestapisRestapiIdGatewayresponsesResponseType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestapisRestapiIdGatewayresponsesResponseTypeKey()
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
            (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$put']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].gatewayresponses[':response_type'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestapisRestapiIdGatewayresponsesResponseTypeKey() {
  return ['restapis', '/restapis/:restapi_id/gatewayresponses/:response_type', 'DELETE'] as const
}

export function useDeleteRestapisRestapiIdGatewayresponsesResponseType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestapisRestapiIdGatewayresponsesResponseTypeKey()
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
            (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].gatewayresponses[':response_type'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchRestapisRestapiIdGatewayresponsesResponseTypeKey() {
  return ['restapis', '/restapis/:restapi_id/gatewayresponses/:response_type', 'PATCH'] as const
}

export function usePatchRestapisRestapiIdGatewayresponsesResponseType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRestapisRestapiIdGatewayresponsesResponseTypeKey()
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
            (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].gatewayresponses[':response_type'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/integration',
    keyArgs,
  ] as const
}

export function useGetRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegration<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$get']
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
        ? getGetRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationKey(args)
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
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$get']
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
          client.restapis[':restapi_id'].resources[':resource_id'].methods[
            ':http_method'
          ].integration.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegration<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$get']
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
        ? getGetRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationKey(args)
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
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$get']
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
          client.restapis[':restapi_id'].resources[':resource_id'].methods[
            ':http_method'
          ].integration.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/integration',
    'PUT',
  ] as const
}

export function usePutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationKey()
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
            (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$put']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].resources[':resource_id'].methods[
            ':http_method'
          ].integration.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/integration',
    'DELETE',
  ] as const
}

export function useDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationKey()
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
            (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].resources[':resource_id'].methods[
            ':http_method'
          ].integration.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/integration',
    'PATCH',
  ] as const
}

export function usePatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationKey()
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
            (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].resources[':resource_id'].methods[
            ':http_method'
          ].integration.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/integration/responses/:status_code',
    keyArgs,
  ] as const
}

export function useGetRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCode<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$get']
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
        ? getGetRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeKey(
            args,
          )
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
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$get']
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
          client.restapis[':restapi_id'].resources[':resource_id'].methods[
            ':http_method'
          ].integration.responses[':status_code'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCode<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$get']
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
        ? getGetRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeKey(
            args,
          )
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
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$get']
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
          client.restapis[':restapi_id'].resources[':resource_id'].methods[
            ':http_method'
          ].integration.responses[':status_code'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/integration/responses/:status_code',
    'PUT',
  ] as const
}

export function usePutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCode<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeKey()
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
            (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$put']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].resources[':resource_id'].methods[
            ':http_method'
          ].integration.responses[':status_code'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/integration/responses/:status_code',
    'DELETE',
  ] as const
}

export function useDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCode<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeKey()
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
            (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].resources[':resource_id'].methods[
            ':http_method'
          ].integration.responses[':status_code'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/integration/responses/:status_code',
    'PATCH',
  ] as const
}

export function usePatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCode<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeKey()
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
            (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].resources[':resource_id'].methods[
            ':http_method'
          ].integration.responses[':status_code'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestapisRestapiIdResourcesResourceIdMethodsHttpMethodKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method',
    keyArgs,
  ] as const
}

export function useGetRestapisRestapiIdResourcesResourceIdMethodsHttpMethod<TError = unknown>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$get']
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
        ? getGetRestapisRestapiIdResourcesResourceIdMethodsHttpMethodKey(args)
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
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$get']
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
          client.restapis[':restapi_id'].resources[':resource_id'].methods[':http_method'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestapisRestapiIdResourcesResourceIdMethodsHttpMethod<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$get']
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
        ? getGetRestapisRestapiIdResourcesResourceIdMethodsHttpMethodKey(args)
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
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$get']
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
          client.restapis[':restapi_id'].resources[':resource_id'].methods[':http_method'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method',
    'PUT',
  ] as const
}

export function usePutRestapisRestapiIdResourcesResourceIdMethodsHttpMethod<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodKey()
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
            (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$put']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].resources[':resource_id'].methods[':http_method'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRestapisRestapiIdResourcesResourceIdMethodsHttpMethodKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method',
    'POST',
  ] as const
}

export function usePostRestapisRestapiIdResourcesResourceIdMethodsHttpMethod<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestapisRestapiIdResourcesResourceIdMethodsHttpMethodKey()
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
            (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$post']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].resources[':resource_id'].methods[':http_method'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method',
    'DELETE',
  ] as const
}

export function useDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethod<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodKey()
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
            (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].resources[':resource_id'].methods[':http_method'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method',
    'PATCH',
  ] as const
}

export function usePatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethod<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodKey()
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
            (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].resources[':resource_id'].methods[':http_method'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/responses/:status_code',
    keyArgs,
  ] as const
}

export function useGetRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCode<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$get']
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
        ? getGetRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeKey(args)
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
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$get']
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
          client.restapis[':restapi_id'].resources[':resource_id'].methods[
            ':http_method'
          ].responses[':status_code'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCode<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$get']
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
        ? getGetRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeKey(args)
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
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$get']
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
          client.restapis[':restapi_id'].resources[':resource_id'].methods[
            ':http_method'
          ].responses[':status_code'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/responses/:status_code',
    'PUT',
  ] as const
}

export function usePutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCode<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeKey()
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
            (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$put']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].resources[':resource_id'].methods[
            ':http_method'
          ].responses[':status_code'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/responses/:status_code',
    'DELETE',
  ] as const
}

export function useDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCode<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeKey()
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
            (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].resources[':resource_id'].methods[
            ':http_method'
          ].responses[':status_code'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/responses/:status_code',
    'PATCH',
  ] as const
}

export function usePatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCode<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeKey()
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
            (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].resources[':resource_id'].methods[
            ':http_method'
          ].responses[':status_code'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestapisRestapiIdModelsModelNameKey(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/models/:model_name', keyArgs] as const
}

export function useGetRestapisRestapiIdModelsModelName<TError = unknown>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$get']>
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
        ? getGetRestapisRestapiIdModelsModelNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restapis[':restapi_id'].models[':model_name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestapisRestapiIdModelsModelName<TError = unknown>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$get']>
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
        ? getGetRestapisRestapiIdModelsModelNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restapis[':restapi_id'].models[':model_name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteRestapisRestapiIdModelsModelNameKey() {
  return ['restapis', '/restapis/:restapi_id/models/:model_name', 'DELETE'] as const
}

export function useDeleteRestapisRestapiIdModelsModelName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestapisRestapiIdModelsModelNameKey()
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
            (typeof client.restapis)[':restapi_id']['models'][':model_name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].models[':model_name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchRestapisRestapiIdModelsModelNameKey() {
  return ['restapis', '/restapis/:restapi_id/models/:model_name', 'PATCH'] as const
}

export function usePatchRestapisRestapiIdModelsModelName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRestapisRestapiIdModelsModelNameKey()
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
            (typeof client.restapis)[':restapi_id']['models'][':model_name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].models[':model_name'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestapisRestapiIdRequestvalidatorsRequestvalidatorIdKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'restapis',
    '/restapis/:restapi_id/requestvalidators/:requestvalidator_id',
    keyArgs,
  ] as const
}

export function useGetRestapisRestapiIdRequestvalidatorsRequestvalidatorId<TError = unknown>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$get']
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
        ? getGetRestapisRestapiIdRequestvalidatorsRequestvalidatorIdKey(args)
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
                (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$get']
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
          client.restapis[':restapi_id'].requestvalidators[':requestvalidator_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestapisRestapiIdRequestvalidatorsRequestvalidatorId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$get']
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
        ? getGetRestapisRestapiIdRequestvalidatorsRequestvalidatorIdKey(args)
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
                (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$get']
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
          client.restapis[':restapi_id'].requestvalidators[':requestvalidator_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteRestapisRestapiIdRequestvalidatorsRequestvalidatorIdKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/requestvalidators/:requestvalidator_id',
    'DELETE',
  ] as const
}

export function useDeleteRestapisRestapiIdRequestvalidatorsRequestvalidatorId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestapisRestapiIdRequestvalidatorsRequestvalidatorIdKey()
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
            (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].requestvalidators[':requestvalidator_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchRestapisRestapiIdRequestvalidatorsRequestvalidatorIdKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/requestvalidators/:requestvalidator_id',
    'PATCH',
  ] as const
}

export function usePatchRestapisRestapiIdRequestvalidatorsRequestvalidatorId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRestapisRestapiIdRequestvalidatorsRequestvalidatorIdKey()
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
            (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].requestvalidators[':requestvalidator_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestapisRestapiIdResourcesResourceIdKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/resources/:resource_id', keyArgs] as const
}

export function useGetRestapisRestapiIdResourcesResourceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$get']
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
        ? getGetRestapisRestapiIdResourcesResourceIdKey(args)
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
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$get']
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
          client.restapis[':restapi_id'].resources[':resource_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestapisRestapiIdResourcesResourceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$get']
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
        ? getGetRestapisRestapiIdResourcesResourceIdKey(args)
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
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$get']
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
          client.restapis[':restapi_id'].resources[':resource_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteRestapisRestapiIdResourcesResourceIdKey() {
  return ['restapis', '/restapis/:restapi_id/resources/:resource_id', 'DELETE'] as const
}

export function useDeleteRestapisRestapiIdResourcesResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestapisRestapiIdResourcesResourceIdKey()
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
            (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].resources[':resource_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchRestapisRestapiIdResourcesResourceIdKey() {
  return ['restapis', '/restapis/:restapi_id/resources/:resource_id', 'PATCH'] as const
}

export function usePatchRestapisRestapiIdResourcesResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRestapisRestapiIdResourcesResourceIdKey()
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
            (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].resources[':resource_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestapisRestapiIdKey(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id', keyArgs] as const
}

export function useGetRestapisRestapiId<TError = unknown>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestapisRestapiIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.restapis[':restapi_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestapisRestapiId<TError = unknown>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestapisRestapiIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.restapis[':restapi_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestapisRestapiIdKey() {
  return ['restapis', '/restapis/:restapi_id', 'PUT'] as const
}

export function usePutRestapisRestapiId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.restapis)[':restapi_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestapisRestapiIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.restapis)[':restapi_id']['$put']> },
      ) => parseResponse(client.restapis[':restapi_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestapisRestapiIdKey() {
  return ['restapis', '/restapis/:restapi_id', 'DELETE'] as const
}

export function useDeleteRestapisRestapiId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.restapis)[':restapi_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestapisRestapiIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.restapis)[':restapi_id']['$delete']> },
      ) => parseResponse(client.restapis[':restapi_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRestapisRestapiIdKey() {
  return ['restapis', '/restapis/:restapi_id', 'PATCH'] as const
}

export function usePatchRestapisRestapiId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.restapis)[':restapi_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRestapisRestapiIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.restapis)[':restapi_id']['$patch']> },
      ) => parseResponse(client.restapis[':restapi_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestapisRestapiIdStagesStageNameKey(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/stages/:stage_name', keyArgs] as const
}

export function useGetRestapisRestapiIdStagesStageName<TError = unknown>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$get']>
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
        ? getGetRestapisRestapiIdStagesStageNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restapis[':restapi_id'].stages[':stage_name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestapisRestapiIdStagesStageName<TError = unknown>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$get']>
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
        ? getGetRestapisRestapiIdStagesStageNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restapis[':restapi_id'].stages[':stage_name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteRestapisRestapiIdStagesStageNameKey() {
  return ['restapis', '/restapis/:restapi_id/stages/:stage_name', 'DELETE'] as const
}

export function useDeleteRestapisRestapiIdStagesStageName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestapisRestapiIdStagesStageNameKey()
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
            (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].stages[':stage_name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchRestapisRestapiIdStagesStageNameKey() {
  return ['restapis', '/restapis/:restapi_id/stages/:stage_name', 'PATCH'] as const
}

export function usePatchRestapisRestapiIdStagesStageName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRestapisRestapiIdStagesStageNameKey()
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
            (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].stages[':stage_name'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsageplansUsageplanIdKey(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['usageplans', '/usageplans/:usageplanId', keyArgs] as const
}

export function useGetUsageplansUsageplanId<TError = unknown>(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsageplansUsageplanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.usageplans[':usageplanId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsageplansUsageplanId<TError = unknown>(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsageplansUsageplanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.usageplans[':usageplanId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsageplansUsageplanIdKey() {
  return ['usageplans', '/usageplans/:usageplanId', 'DELETE'] as const
}

export function useDeleteUsageplansUsageplanId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.usageplans)[':usageplanId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsageplansUsageplanIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.usageplans)[':usageplanId']['$delete']> },
      ) => parseResponse(client.usageplans[':usageplanId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsageplansUsageplanIdKey() {
  return ['usageplans', '/usageplans/:usageplanId', 'PATCH'] as const
}

export function usePatchUsageplansUsageplanId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.usageplans)[':usageplanId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsageplansUsageplanIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.usageplans)[':usageplanId']['$patch']> },
      ) => parseResponse(client.usageplans[':usageplanId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsageplansUsageplanIdKeysKeyIdKey(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['usageplans', '/usageplans/:usageplanId/keys/:keyId', keyArgs] as const
}

export function useGetUsageplansUsageplanIdKeysKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$get']>
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
        ? getGetUsageplansUsageplanIdKeysKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.usageplans[':usageplanId'].keys[':keyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsageplansUsageplanIdKeysKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$get']>
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
        ? getGetUsageplansUsageplanIdKeysKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.usageplans[':usageplanId'].keys[':keyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsageplansUsageplanIdKeysKeyIdKey() {
  return ['usageplans', '/usageplans/:usageplanId/keys/:keyId', 'DELETE'] as const
}

export function useDeleteUsageplansUsageplanIdKeysKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsageplansUsageplanIdKeysKeyIdKey()
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
            (typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$delete']
          >
        },
      ) =>
        parseResponse(client.usageplans[':usageplanId'].keys[':keyId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVpclinksVpclinkIdKey(
  args: InferRequestType<(typeof client.vpclinks)[':vpclink_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['vpclinks', '/vpclinks/:vpclink_id', keyArgs] as const
}

export function useGetVpclinksVpclinkId<TError = unknown>(
  args: InferRequestType<(typeof client.vpclinks)[':vpclink_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vpclinks)[':vpclink_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVpclinksVpclinkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vpclinks)[':vpclink_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vpclinks[':vpclink_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVpclinksVpclinkId<TError = unknown>(
  args: InferRequestType<(typeof client.vpclinks)[':vpclink_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vpclinks)[':vpclink_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVpclinksVpclinkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vpclinks)[':vpclink_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vpclinks[':vpclink_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteVpclinksVpclinkIdKey() {
  return ['vpclinks', '/vpclinks/:vpclink_id', 'DELETE'] as const
}

export function useDeleteVpclinksVpclinkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vpclinks)[':vpclink_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vpclinks)[':vpclink_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVpclinksVpclinkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.vpclinks)[':vpclink_id']['$delete']> },
      ) => parseResponse(client.vpclinks[':vpclink_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchVpclinksVpclinkIdKey() {
  return ['vpclinks', '/vpclinks/:vpclink_id', 'PATCH'] as const
}

export function usePatchVpclinksVpclinkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vpclinks)[':vpclink_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vpclinks)[':vpclink_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchVpclinksVpclinkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.vpclinks)[':vpclink_id']['$patch']> },
      ) => parseResponse(client.vpclinks[':vpclink_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestapisRestapiIdStagesStageNameCacheAuthorizersKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/stages/:stage_name/cache/authorizers',
    'DELETE',
  ] as const
}

export function useDeleteRestapisRestapiIdStagesStageNameCacheAuthorizers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['cache']['authorizers']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['cache']['authorizers']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestapisRestapiIdStagesStageNameCacheAuthorizersKey()
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
            (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['cache']['authorizers']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].stages[':stage_name'].cache.authorizers.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestapisRestapiIdStagesStageNameCacheDataKey() {
  return ['restapis', '/restapis/:restapi_id/stages/:stage_name/cache/data', 'DELETE'] as const
}

export function useDeleteRestapisRestapiIdStagesStageNameCacheData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['cache']['data']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['cache']['data']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestapisRestapiIdStagesStageNameCacheDataKey()
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
            (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['cache']['data']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.restapis[':restapi_id'].stages[':stage_name'].cache.data.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetClientcertificatesKey(
  args: InferRequestType<typeof client.clientcertificates.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['clientcertificates', '/clientcertificates', keyArgs] as const
}

export function useGetClientcertificates<TError = unknown>(
  args: InferRequestType<typeof client.clientcertificates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clientcertificates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetClientcertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clientcertificates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clientcertificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClientcertificates<TError = unknown>(
  args: InferRequestType<typeof client.clientcertificates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clientcertificates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetClientcertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clientcertificates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clientcertificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostClientcertificatesKey() {
  return ['clientcertificates', '/clientcertificates', 'POST'] as const
}

export function usePostClientcertificates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clientcertificates.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.clientcertificates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClientcertificatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.clientcertificates.$post> }) =>
        parseResponse(client.clientcertificates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountKey(args: InferRequestType<typeof client.account.$get>) {
  const { header: _, ...keyArgs } = args
  return ['account', '/account', keyArgs] as const
}

export function useGetAccount<TError = unknown>(
  args: InferRequestType<typeof client.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.account.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAccount<TError = unknown>(
  args: InferRequestType<typeof client.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.account.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPatchAccountKey() {
  return ['account', '/account', 'PATCH'] as const
}

export function usePatchAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$patch>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.account.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.$patch> }) =>
        parseResponse(client.account.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestapisRestapiIdStagesStageNameExportsExportTypeKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['exports'][':export_type']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'restapis',
    '/restapis/:restapi_id/stages/:stage_name/exports/:export_type',
    keyArgs,
  ] as const
}

export function useGetRestapisRestapiIdStagesStageNameExportsExportType<TError = unknown>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['exports'][':export_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['exports'][':export_type']['$get']
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
        ? getGetRestapisRestapiIdStagesStageNameExportsExportTypeKey(args)
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
                (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['exports'][':export_type']['$get']
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
          client.restapis[':restapi_id'].stages[':stage_name'].exports[':export_type'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestapisRestapiIdStagesStageNameExportsExportType<TError = unknown>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['exports'][':export_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['exports'][':export_type']['$get']
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
        ? getGetRestapisRestapiIdStagesStageNameExportsExportTypeKey(args)
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
                (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['exports'][':export_type']['$get']
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
          client.restapis[':restapi_id'].stages[':stage_name'].exports[':export_type'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestapisRestapiIdGatewayresponsesKey(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['gatewayresponses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/gatewayresponses', keyArgs] as const
}

export function useGetRestapisRestapiIdGatewayresponses<TError = unknown>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['gatewayresponses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['gatewayresponses']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestapisRestapiIdGatewayresponsesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['gatewayresponses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.restapis[':restapi_id'].gatewayresponses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestapisRestapiIdGatewayresponses<TError = unknown>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['gatewayresponses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['gatewayresponses']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestapisRestapiIdGatewayresponsesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['gatewayresponses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.restapis[':restapi_id'].gatewayresponses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestapisRestapiIdModelsModelNameDefaultTemplateKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['models'][':model_name']['default_template']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/models/:model_name/default_template', keyArgs] as const
}

export function useGetRestapisRestapiIdModelsModelNameDefaultTemplate<TError = unknown>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['models'][':model_name']['default_template']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['models'][':model_name']['default_template']['$get']
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
        ? getGetRestapisRestapiIdModelsModelNameDefaultTemplateKey(args)
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
                (typeof client.restapis)[':restapi_id']['models'][':model_name']['default_template']['$get']
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
          client.restapis[':restapi_id'].models[':model_name'].default_template.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestapisRestapiIdModelsModelNameDefaultTemplate<TError = unknown>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['models'][':model_name']['default_template']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['models'][':model_name']['default_template']['$get']
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
        ? getGetRestapisRestapiIdModelsModelNameDefaultTemplateKey(args)
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
                (typeof client.restapis)[':restapi_id']['models'][':model_name']['default_template']['$get']
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
          client.restapis[':restapi_id'].models[':model_name'].default_template.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestapisRestapiIdResourcesKey(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['resources']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/resources', keyArgs] as const
}

export function useGetRestapisRestapiIdResources<TError = unknown>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['resources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['resources']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestapisRestapiIdResourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['resources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.restapis[':restapi_id'].resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestapisRestapiIdResources<TError = unknown>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['resources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['resources']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestapisRestapiIdResourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['resources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.restapis[':restapi_id'].resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestapisRestapiIdStagesStageNameSdksSdkTypeKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['sdks'][':sdk_type']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/stages/:stage_name/sdks/:sdk_type', keyArgs] as const
}

export function useGetRestapisRestapiIdStagesStageNameSdksSdkType<TError = unknown>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['sdks'][':sdk_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['sdks'][':sdk_type']['$get']
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
        ? getGetRestapisRestapiIdStagesStageNameSdksSdkTypeKey(args)
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
                (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['sdks'][':sdk_type']['$get']
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
          client.restapis[':restapi_id'].stages[':stage_name'].sdks[':sdk_type'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestapisRestapiIdStagesStageNameSdksSdkType<TError = unknown>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['sdks'][':sdk_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['sdks'][':sdk_type']['$get']
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
        ? getGetRestapisRestapiIdStagesStageNameSdksSdkTypeKey(args)
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
                (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['sdks'][':sdk_type']['$get']
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
          client.restapis[':restapi_id'].stages[':stage_name'].sdks[':sdk_type'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSdktypesSdktypeIdKey(
  args: InferRequestType<(typeof client.sdktypes)[':sdktype_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sdktypes', '/sdktypes/:sdktype_id', keyArgs] as const
}

export function useGetSdktypesSdktypeId<TError = unknown>(
  args: InferRequestType<(typeof client.sdktypes)[':sdktype_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sdktypes)[':sdktype_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSdktypesSdktypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sdktypes)[':sdktype_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sdktypes[':sdktype_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSdktypesSdktypeId<TError = unknown>(
  args: InferRequestType<(typeof client.sdktypes)[':sdktype_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sdktypes)[':sdktype_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSdktypesSdktypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sdktypes)[':sdktype_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sdktypes[':sdktype_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSdktypesKey(args: InferRequestType<typeof client.sdktypes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['sdktypes', '/sdktypes', keyArgs] as const
}

export function useGetSdktypes<TError = unknown>(
  args: InferRequestType<typeof client.sdktypes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sdktypes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSdktypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sdktypes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sdktypes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSdktypes<TError = unknown>(
  args: InferRequestType<typeof client.sdktypes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sdktypes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSdktypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sdktypes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sdktypes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':resource_arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resource_arn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resource_arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource_arn']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource_arn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resource_arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resource_arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource_arn']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource_arn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resource_arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTagsResourceArnKey() {
  return ['tags', '/tags/:resource_arn', 'PUT'] as const
}

export function usePutTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource_arn']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resource_arn']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resource_arn']['$put']> },
      ) => parseResponse(client.tags[':resource_arn'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsageplansUsageplanIdUsageStartDateEndDateKey(
  args: InferRequestType<
    (typeof client.usageplans)[':usageplanId']['usage#startDate&endDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['usageplans', '/usageplans/:usageplanId/usage#startDate&endDate', keyArgs] as const
}

export function useGetUsageplansUsageplanIdUsageStartDateEndDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.usageplans)[':usageplanId']['usage#startDate&endDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.usageplans)[':usageplanId']['usage#startDate&endDate']['$get']
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
        ? getGetUsageplansUsageplanIdUsageStartDateEndDateKey(args)
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
                (typeof client.usageplans)[':usageplanId']['usage#startDate&endDate']['$get']
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
          client.usageplans[':usageplanId']['usage#startDate&endDate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsageplansUsageplanIdUsageStartDateEndDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.usageplans)[':usageplanId']['usage#startDate&endDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.usageplans)[':usageplanId']['usage#startDate&endDate']['$get']
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
        ? getGetUsageplansUsageplanIdUsageStartDateEndDateKey(args)
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
                (typeof client.usageplans)[':usageplanId']['usage#startDate&endDate']['$get']
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
          client.usageplans[':usageplanId']['usage#startDate&endDate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApikeysModeImportFormatKey() {
  return ['apikeys#mode=import&format', '/apikeys#mode=import&format', 'POST'] as const
}

export function usePostApikeysModeImportFormat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['apikeys#mode=import&format']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['apikeys#mode=import&format']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApikeysModeImportFormatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['apikeys#mode=import&format']['$post']> },
      ) => parseResponse(client['apikeys#mode=import&format'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestapisModeImportKey() {
  return ['restapis#mode=import', '/restapis#mode=import', 'POST'] as const
}

export function usePostRestapisModeImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['restapis#mode=import']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['restapis#mode=import']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestapisModeImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['restapis#mode=import']['$post']> },
      ) => parseResponse(client['restapis#mode=import'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:resource_arn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resource_arn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resource_arn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tags)[':resource_arn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resource_arn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsageplansUsageplanIdKeysKeyIdUsageKey() {
  return ['usageplans', '/usageplans/:usageplanId/keys/:keyId/usage', 'PATCH'] as const
}

export function usePatchUsageplansUsageplanIdKeysKeyIdUsage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.usageplans)[':usageplanId']['keys'][':keyId']['usage']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.usageplans)[':usageplanId']['keys'][':keyId']['usage']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsageplansUsageplanIdKeysKeyIdUsageKey()
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
            (typeof client.usageplans)[':usageplanId']['keys'][':keyId']['usage']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.usageplans[':usageplanId'].keys[':keyId'].usage.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
