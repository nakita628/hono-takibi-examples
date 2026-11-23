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

export function getGetV1DomainnamesDomainNameApiassociationKey(
  args: InferRequestType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/domainnames/:domainName/apiassociation', keyArgs] as const
}

export function useGetV1DomainnamesDomainNameApiassociation<TError = unknown>(
  args: InferRequestType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DomainnamesDomainNameApiassociationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.domainnames[':domainName'].apiassociation.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DomainnamesDomainNameApiassociation<TError = unknown>(
  args: InferRequestType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DomainnamesDomainNameApiassociationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.domainnames[':domainName'].apiassociation.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1DomainnamesDomainNameApiassociationKey() {
  return ['v1', '/v1/domainnames/:domainName/apiassociation', 'POST'] as const
}

export function usePostV1DomainnamesDomainNameApiassociation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DomainnamesDomainNameApiassociationKey()
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
            (typeof client.v1.domainnames)[':domainName']['apiassociation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.domainnames[':domainName'].apiassociation.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1DomainnamesDomainNameApiassociationKey() {
  return ['v1', '/v1/domainnames/:domainName/apiassociation', 'DELETE'] as const
}

export function useDeleteV1DomainnamesDomainNameApiassociation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DomainnamesDomainNameApiassociationKey()
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
            (typeof client.v1.domainnames)[':domainName']['apiassociation']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.domainnames[':domainName'].apiassociation.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceApisSourceApiIdentifierMergedApiAssociationsKey() {
  return ['v1', '/v1/sourceApis/:sourceApiIdentifier/mergedApiAssociations', 'POST'] as const
}

export function usePostV1SourceApisSourceApiIdentifierMergedApiAssociations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.sourceApis)[':sourceApiIdentifier']['mergedApiAssociations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.sourceApis)[':sourceApiIdentifier']['mergedApiAssociations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceApisSourceApiIdentifierMergedApiAssociationsKey()
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
            (typeof client.v1.sourceApis)[':sourceApiIdentifier']['mergedApiAssociations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.sourceApis[':sourceApiIdentifier'].mergedApiAssociations.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsKey() {
  return ['v1', '/v1/mergedApis/:mergedApiIdentifier/sourceApiAssociations', 'POST'] as const
}

export function usePostV1MergedApisMergedApiIdentifierSourceApiAssociations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsKey()
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
            (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ApisApiIdApiCachesKey(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/ApiCaches', keyArgs] as const
}

export function useGetV1ApisApiIdApiCaches<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ApisApiIdApiCachesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apis[':apiId'].ApiCaches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApisApiIdApiCaches<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ApisApiIdApiCachesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apis[':apiId'].ApiCaches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ApisApiIdApiCachesKey() {
  return ['v1', '/v1/apis/:apiId/ApiCaches', 'POST'] as const
}

export function usePostV1ApisApiIdApiCaches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApisApiIdApiCachesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$post']> },
      ) => parseResponse(client.v1.apis[':apiId'].ApiCaches.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ApisApiIdApiCachesKey() {
  return ['v1', '/v1/apis/:apiId/ApiCaches', 'DELETE'] as const
}

export function useDeleteV1ApisApiIdApiCaches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ApisApiIdApiCachesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$delete']> },
      ) => parseResponse(client.v1.apis[':apiId'].ApiCaches.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ApisApiIdApikeysKey(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/apikeys', keyArgs] as const
}

export function useGetV1ApisApiIdApikeys<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['apikeys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ApisApiIdApikeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['apikeys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apis[':apiId'].apikeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApisApiIdApikeys<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['apikeys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ApisApiIdApikeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['apikeys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apis[':apiId'].apikeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ApisApiIdApikeysKey() {
  return ['v1', '/v1/apis/:apiId/apikeys', 'POST'] as const
}

export function usePostV1ApisApiIdApikeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['apikeys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApisApiIdApikeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys']['$post']> },
      ) => parseResponse(client.v1.apis[':apiId'].apikeys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ApisApiIdDatasourcesKey(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['datasources']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/datasources', keyArgs] as const
}

export function useGetV1ApisApiIdDatasources<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['datasources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ApisApiIdDatasourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apis[':apiId'].datasources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApisApiIdDatasources<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['datasources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ApisApiIdDatasourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apis[':apiId'].datasources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ApisApiIdDatasourcesKey() {
  return ['v1', '/v1/apis/:apiId/datasources', 'POST'] as const
}

export function usePostV1ApisApiIdDatasources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apis)[':apiId']['datasources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApisApiIdDatasourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.apis)[':apiId']['datasources']['$post']> },
      ) => parseResponse(client.v1.apis[':apiId'].datasources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DomainnamesKey(args: InferRequestType<typeof client.v1.domainnames.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/domainnames', keyArgs] as const
}

export function useGetV1Domainnames<TError = unknown>(
  args: InferRequestType<typeof client.v1.domainnames.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domainnames.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DomainnamesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domainnames.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.domainnames.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Domainnames<TError = unknown>(
  args: InferRequestType<typeof client.v1.domainnames.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domainnames.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DomainnamesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domainnames.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.domainnames.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DomainnamesKey() {
  return ['v1', '/v1/domainnames', 'POST'] as const
}

export function usePostV1Domainnames<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domainnames.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.domainnames.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DomainnamesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.domainnames.$post> }) =>
        parseResponse(client.v1.domainnames.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ApisApiIdFunctionsKey(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['functions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/functions', keyArgs] as const
}

export function useGetV1ApisApiIdFunctions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['functions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['functions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ApisApiIdFunctionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['functions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apis[':apiId'].functions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApisApiIdFunctions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['functions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['functions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ApisApiIdFunctionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['functions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apis[':apiId'].functions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ApisApiIdFunctionsKey() {
  return ['v1', '/v1/apis/:apiId/functions', 'POST'] as const
}

export function usePostV1ApisApiIdFunctions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['functions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apis)[':apiId']['functions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApisApiIdFunctionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.apis)[':apiId']['functions']['$post']> },
      ) => parseResponse(client.v1.apis[':apiId'].functions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ApisKey(args: InferRequestType<typeof client.v1.apis.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis', keyArgs] as const
}

export function useGetV1Apis<TError = unknown>(
  args: InferRequestType<typeof client.v1.apis.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apis.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ApisKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apis.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.apis.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV1Apis<TError = unknown>(
  args: InferRequestType<typeof client.v1.apis.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apis.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ApisKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apis.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.apis.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostV1ApisKey() {
  return ['v1', '/v1/apis', 'POST'] as const
}

export function usePostV1Apis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apis.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.apis.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.apis.$post> }) =>
        parseResponse(client.v1.apis.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ApisApiIdTypesTypeNameResolversKey(
  args: InferRequestType<
    (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/types/:typeName/resolvers', keyArgs] as const
}

export function useGetV1ApisApiIdTypesTypeNameResolvers<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$get']
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
        ? getGetV1ApisApiIdTypesTypeNameResolversKey(args)
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
                (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$get']
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
          client.v1.apis[':apiId'].types[':typeName'].resolvers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApisApiIdTypesTypeNameResolvers<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$get']
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
        ? getGetV1ApisApiIdTypesTypeNameResolversKey(args)
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
                (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$get']
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
          client.v1.apis[':apiId'].types[':typeName'].resolvers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ApisApiIdTypesTypeNameResolversKey() {
  return ['v1', '/v1/apis/:apiId/types/:typeName/resolvers', 'POST'] as const
}

export function usePostV1ApisApiIdTypesTypeNameResolvers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApisApiIdTypesTypeNameResolversKey()
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
            (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.apis[':apiId'].types[':typeName'].resolvers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApisApiIdTypesKey() {
  return ['v1', '/v1/apis/:apiId/types', 'POST'] as const
}

export function usePostV1ApisApiIdTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['types']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apis)[':apiId']['types']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApisApiIdTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.apis)[':apiId']['types']['$post']> },
      ) => parseResponse(client.v1.apis[':apiId'].types.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApisApiIdApikeysIdKey() {
  return ['v1', '/v1/apis/:apiId/apikeys/:id', 'POST'] as const
}

export function usePostV1ApisApiIdApikeysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApisApiIdApikeysIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$post']> },
      ) => parseResponse(client.v1.apis[':apiId'].apikeys[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ApisApiIdApikeysIdKey() {
  return ['v1', '/v1/apis/:apiId/apikeys/:id', 'DELETE'] as const
}

export function useDeleteV1ApisApiIdApikeysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ApisApiIdApikeysIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$delete']>
        },
      ) => parseResponse(client.v1.apis[':apiId'].apikeys[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ApisApiIdDatasourcesNameKey(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/datasources/:name', keyArgs] as const
}

export function useGetV1ApisApiIdDatasourcesName<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ApisApiIdDatasourcesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apis[':apiId'].datasources[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApisApiIdDatasourcesName<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ApisApiIdDatasourcesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apis[':apiId'].datasources[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ApisApiIdDatasourcesNameKey() {
  return ['v1', '/v1/apis/:apiId/datasources/:name', 'POST'] as const
}

export function usePostV1ApisApiIdDatasourcesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApisApiIdDatasourcesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$post']>
        },
      ) => parseResponse(client.v1.apis[':apiId'].datasources[':name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ApisApiIdDatasourcesNameKey() {
  return ['v1', '/v1/apis/:apiId/datasources/:name', 'DELETE'] as const
}

export function useDeleteV1ApisApiIdDatasourcesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ApisApiIdDatasourcesNameKey()
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
            (typeof client.v1.apis)[':apiId']['datasources'][':name']['$delete']
          >
        },
      ) => parseResponse(client.v1.apis[':apiId'].datasources[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DomainnamesDomainNameKey(
  args: InferRequestType<(typeof client.v1.domainnames)[':domainName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/domainnames/:domainName', keyArgs] as const
}

export function useGetV1DomainnamesDomainName<TError = unknown>(
  args: InferRequestType<(typeof client.v1.domainnames)[':domainName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domainnames)[':domainName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DomainnamesDomainNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domainnames)[':domainName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.domainnames[':domainName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DomainnamesDomainName<TError = unknown>(
  args: InferRequestType<(typeof client.v1.domainnames)[':domainName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domainnames)[':domainName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DomainnamesDomainNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domainnames)[':domainName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.domainnames[':domainName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DomainnamesDomainNameKey() {
  return ['v1', '/v1/domainnames/:domainName', 'POST'] as const
}

export function usePostV1DomainnamesDomainName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domainnames)[':domainName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.domainnames)[':domainName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DomainnamesDomainNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.domainnames)[':domainName']['$post']> },
      ) => parseResponse(client.v1.domainnames[':domainName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1DomainnamesDomainNameKey() {
  return ['v1', '/v1/domainnames/:domainName', 'DELETE'] as const
}

export function useDeleteV1DomainnamesDomainName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domainnames)[':domainName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.domainnames)[':domainName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DomainnamesDomainNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.domainnames)[':domainName']['$delete']> },
      ) => parseResponse(client.v1.domainnames[':domainName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ApisApiIdFunctionsFunctionIdKey(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/functions/:functionId', keyArgs] as const
}

export function useGetV1ApisApiIdFunctionsFunctionId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ApisApiIdFunctionsFunctionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apis[':apiId'].functions[':functionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApisApiIdFunctionsFunctionId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ApisApiIdFunctionsFunctionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apis[':apiId'].functions[':functionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ApisApiIdFunctionsFunctionIdKey() {
  return ['v1', '/v1/apis/:apiId/functions/:functionId', 'POST'] as const
}

export function usePostV1ApisApiIdFunctionsFunctionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApisApiIdFunctionsFunctionIdKey()
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
            (typeof client.v1.apis)[':apiId']['functions'][':functionId']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.apis[':apiId'].functions[':functionId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ApisApiIdFunctionsFunctionIdKey() {
  return ['v1', '/v1/apis/:apiId/functions/:functionId', 'DELETE'] as const
}

export function useDeleteV1ApisApiIdFunctionsFunctionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ApisApiIdFunctionsFunctionIdKey()
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
            (typeof client.v1.apis)[':apiId']['functions'][':functionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.apis[':apiId'].functions[':functionId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ApisApiIdKey(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId', keyArgs] as const
}

export function useGetV1ApisApiId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ApisApiIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apis[':apiId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApisApiId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ApisApiIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apis[':apiId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ApisApiIdKey() {
  return ['v1', '/v1/apis/:apiId', 'POST'] as const
}

export function usePostV1ApisApiId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apis)[':apiId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApisApiIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.apis)[':apiId']['$post']> },
      ) => parseResponse(client.v1.apis[':apiId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ApisApiIdKey() {
  return ['v1', '/v1/apis/:apiId', 'DELETE'] as const
}

export function useDeleteV1ApisApiId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apis)[':apiId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ApisApiIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.apis)[':apiId']['$delete']> },
      ) => parseResponse(client.v1.apis[':apiId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ApisApiIdTypesTypeNameResolversFieldNameKey(
  args: InferRequestType<
    (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/types/:typeName/resolvers/:fieldName', keyArgs] as const
}

export function useGetV1ApisApiIdTypesTypeNameResolversFieldName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$get']
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
        ? getGetV1ApisApiIdTypesTypeNameResolversFieldNameKey(args)
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
                (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$get']
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
          client.v1.apis[':apiId'].types[':typeName'].resolvers[':fieldName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApisApiIdTypesTypeNameResolversFieldName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$get']
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
        ? getGetV1ApisApiIdTypesTypeNameResolversFieldNameKey(args)
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
                (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$get']
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
          client.v1.apis[':apiId'].types[':typeName'].resolvers[':fieldName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ApisApiIdTypesTypeNameResolversFieldNameKey() {
  return ['v1', '/v1/apis/:apiId/types/:typeName/resolvers/:fieldName', 'POST'] as const
}

export function usePostV1ApisApiIdTypesTypeNameResolversFieldName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApisApiIdTypesTypeNameResolversFieldNameKey()
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
            (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.apis[':apiId'].types[':typeName'].resolvers[':fieldName'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ApisApiIdTypesTypeNameResolversFieldNameKey() {
  return ['v1', '/v1/apis/:apiId/types/:typeName/resolvers/:fieldName', 'DELETE'] as const
}

export function useDeleteV1ApisApiIdTypesTypeNameResolversFieldName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ApisApiIdTypesTypeNameResolversFieldNameKey()
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
            (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.apis[':apiId'].types[':typeName'].resolvers[':fieldName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApisApiIdTypesTypeNameKey() {
  return ['v1', '/v1/apis/:apiId/types/:typeName', 'POST'] as const
}

export function usePostV1ApisApiIdTypesTypeName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApisApiIdTypesTypeNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$post']>
        },
      ) => parseResponse(client.v1.apis[':apiId'].types[':typeName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ApisApiIdTypesTypeNameKey() {
  return ['v1', '/v1/apis/:apiId/types/:typeName', 'DELETE'] as const
}

export function useDeleteV1ApisApiIdTypesTypeName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ApisApiIdTypesTypeNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$delete']>
        },
      ) => parseResponse(client.v1.apis[':apiId'].types[':typeName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1SourceApisSourceApiIdentifierMergedApiAssociationsAssociationIdKey() {
  return [
    'v1',
    '/v1/sourceApis/:sourceApiIdentifier/mergedApiAssociations/:associationId',
    'DELETE',
  ] as const
}

export function useDeleteV1SourceApisSourceApiIdentifierMergedApiAssociationsAssociationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.sourceApis)[':sourceApiIdentifier']['mergedApiAssociations'][':associationId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.sourceApis)[':sourceApiIdentifier']['mergedApiAssociations'][':associationId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1SourceApisSourceApiIdentifierMergedApiAssociationsAssociationIdKey()
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
            (typeof client.v1.sourceApis)[':sourceApiIdentifier']['mergedApiAssociations'][':associationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.sourceApis[':sourceApiIdentifier'].mergedApiAssociations[
            ':associationId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdKey(
  args: InferRequestType<
    (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/mergedApis/:mergedApiIdentifier/sourceApiAssociations/:associationId',
    keyArgs,
  ] as const
}

export function useGetV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$get']
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
        ? getGetV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdKey(args)
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
                (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$get']
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
          client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations[':associationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$get']
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
        ? getGetV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdKey(args)
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
                (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$get']
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
          client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations[':associationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdKey() {
  return [
    'v1',
    '/v1/mergedApis/:mergedApiIdentifier/sourceApiAssociations/:associationId',
    'POST',
  ] as const
}

export function usePostV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdKey()
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
            (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations[
            ':associationId'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdKey() {
  return [
    'v1',
    '/v1/mergedApis/:mergedApiIdentifier/sourceApiAssociations/:associationId',
    'DELETE',
  ] as const
}

export function useDeleteV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdKey()
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
            (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations[
            ':associationId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1DataplaneEvaluatecodeKey() {
  return ['v1', '/v1/dataplane-evaluatecode', 'POST'] as const
}

export function usePostV1DataplaneEvaluatecode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['dataplane-evaluatecode']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['dataplane-evaluatecode']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataplaneEvaluatecodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['dataplane-evaluatecode']['$post']> },
      ) => parseResponse(client.v1['dataplane-evaluatecode'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DataplaneEvaluatetemplateKey() {
  return ['v1', '/v1/dataplane-evaluatetemplate', 'POST'] as const
}

export function usePostV1DataplaneEvaluatetemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['dataplane-evaluatetemplate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['dataplane-evaluatetemplate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataplaneEvaluatetemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['dataplane-evaluatetemplate']['$post']> },
      ) => parseResponse(client.v1['dataplane-evaluatetemplate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ApisApiIdFlushCacheKey() {
  return ['v1', '/v1/apis/:apiId/FlushCache', 'DELETE'] as const
}

export function useDeleteV1ApisApiIdFlushCache<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['FlushCache']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apis)[':apiId']['FlushCache']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ApisApiIdFlushCacheKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.apis)[':apiId']['FlushCache']['$delete']> },
      ) => parseResponse(client.v1.apis[':apiId'].FlushCache.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ApisApiIdSchemaFormatKey(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['schema#format']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/schema#format', keyArgs] as const
}

export function useGetV1ApisApiIdSchemaFormat<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['schema#format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schema#format']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ApisApiIdSchemaFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schema#format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apis[':apiId']['schema#format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApisApiIdSchemaFormat<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['schema#format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schema#format']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ApisApiIdSchemaFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schema#format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apis[':apiId']['schema#format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApisApiIdSchemacreationKey(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['schemacreation']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/schemacreation', keyArgs] as const
}

export function useGetV1ApisApiIdSchemacreation<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['schemacreation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schemacreation']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ApisApiIdSchemacreationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schemacreation']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apis[':apiId'].schemacreation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApisApiIdSchemacreation<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['schemacreation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schemacreation']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ApisApiIdSchemacreationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schemacreation']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apis[':apiId'].schemacreation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ApisApiIdSchemacreationKey() {
  return ['v1', '/v1/apis/:apiId/schemacreation', 'POST'] as const
}

export function usePostV1ApisApiIdSchemacreation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schemacreation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apis)[':apiId']['schemacreation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApisApiIdSchemacreationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.apis)[':apiId']['schemacreation']['$post']> },
      ) => parseResponse(client.v1.apis[':apiId'].schemacreation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ApisApiIdTypesTypeNameFormatKey(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName#format']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/types/:typeName#format', keyArgs] as const
}

export function useGetV1ApisApiIdTypesTypeNameFormat<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName#format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apis)[':apiId']['types'][':typeName#format']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ApisApiIdTypesTypeNameFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apis)[':apiId']['types'][':typeName#format']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apis[':apiId'].types[':typeName#format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApisApiIdTypesTypeNameFormat<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName#format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apis)[':apiId']['types'][':typeName#format']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ApisApiIdTypesTypeNameFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apis)[':apiId']['types'][':typeName#format']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apis[':apiId'].types[':typeName#format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApisApiIdFunctionsFunctionIdResolversKey(
  args: InferRequestType<
    (typeof client.v1.apis)[':apiId']['functions'][':functionId']['resolvers']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/functions/:functionId/resolvers', keyArgs] as const
}

export function useGetV1ApisApiIdFunctionsFunctionIdResolvers<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apis)[':apiId']['functions'][':functionId']['resolvers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apis)[':apiId']['functions'][':functionId']['resolvers']['$get']
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
        ? getGetV1ApisApiIdFunctionsFunctionIdResolversKey(args)
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
                (typeof client.v1.apis)[':apiId']['functions'][':functionId']['resolvers']['$get']
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
          client.v1.apis[':apiId'].functions[':functionId'].resolvers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApisApiIdFunctionsFunctionIdResolvers<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apis)[':apiId']['functions'][':functionId']['resolvers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apis)[':apiId']['functions'][':functionId']['resolvers']['$get']
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
        ? getGetV1ApisApiIdFunctionsFunctionIdResolversKey(args)
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
                (typeof client.v1.apis)[':apiId']['functions'][':functionId']['resolvers']['$get']
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
          client.v1.apis[':apiId'].functions[':functionId'].resolvers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApisApiIdSourceApiAssociationsKey(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['sourceApiAssociations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/sourceApiAssociations', keyArgs] as const
}

export function useGetV1ApisApiIdSourceApiAssociations<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['sourceApiAssociations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['sourceApiAssociations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ApisApiIdSourceApiAssociationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['sourceApiAssociations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apis[':apiId'].sourceApiAssociations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApisApiIdSourceApiAssociations<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['sourceApiAssociations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['sourceApiAssociations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ApisApiIdSourceApiAssociationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['sourceApiAssociations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apis[':apiId'].sourceApiAssociations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TagsResourceArnKey(
  args: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/tags/:resourceArn', keyArgs] as const
}

export function useGetV1TagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TagsResourceArnKey() {
  return ['v1', '/v1/tags/:resourceArn', 'POST'] as const
}

export function usePostV1TagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.tags)[':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$post']> },
      ) => parseResponse(client.v1.tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ApisApiIdTypesFormatKey(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['types#format']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/types#format', keyArgs] as const
}

export function useGetV1ApisApiIdTypesFormat<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['types#format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['types#format']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ApisApiIdTypesFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['types#format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apis[':apiId']['types#format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApisApiIdTypesFormat<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['types#format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['types#format']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ApisApiIdTypesFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['types#format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apis[':apiId']['types#format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdTypesFormatKey(
  args: InferRequestType<
    (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['types#format']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/mergedApis/:mergedApiIdentifier/sourceApiAssociations/:associationId/types#format',
    keyArgs,
  ] as const
}

export function useGetV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdTypesFormat<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['types#format']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['types#format']['$get']
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
        ? getGetV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdTypesFormatKey(
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
                (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['types#format']['$get']
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
          client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations[':associationId'][
            'types#format'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdTypesFormat<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['types#format']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['types#format']['$get']
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
        ? getGetV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdTypesFormatKey(
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
                (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['types#format']['$get']
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
          client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations[':associationId'][
            'types#format'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMergeKey() {
  return [
    'v1',
    '/v1/mergedApis/:mergedApiIdentifier/sourceApiAssociations/:associationId/merge',
    'POST',
  ] as const
}

export function usePostV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMerge<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['merge']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['merge']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMergeKey()
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
            (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['merge']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations[
            ':associationId'
          ].merge.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TagsResourceArnTagKeysKey() {
  return ['v1', '/v1/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteV1TagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.v1.tags[':resourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApisApiIdApiCachesUpdateKey() {
  return ['v1', '/v1/apis/:apiId/ApiCaches/update', 'POST'] as const
}

export function usePostV1ApisApiIdApiCachesUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['ApiCaches']['update']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApisApiIdApiCachesUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['update']['$post']>
        },
      ) => parseResponse(client.v1.apis[':apiId'].ApiCaches.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
