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

export function getV1DomainnamesDomainNameApiassociationQueryKey(
  args: InferRequestType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/domainnames/:domainName/apiassociation', keyArgs] as const
}

export function getV1DomainnamesDomainNameApiassociationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DomainnamesDomainNameApiassociationQueryKey>
  >({
    queryKey: getV1DomainnamesDomainNameApiassociationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.domainnames[':domainName'].apiassociation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1DomainnamesDomainNameApiassociation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.domainnames)[':domainName']['apiassociation']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DomainnamesDomainNameApiassociationQueryKey>
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
      ...getV1DomainnamesDomainNameApiassociationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1DomainnamesDomainNameApiassociationMutationKey() {
  return ['v1', '/v1/domainnames/:domainName/apiassociation', 'POST'] as const
}

export function getPostV1DomainnamesDomainNameApiassociationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainnamesDomainNameApiassociationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.domainnames)[':domainName']['apiassociation']['$post']
      >,
    ) {
      return parseResponse(client.v1.domainnames[':domainName'].apiassociation.$post(args, options))
    },
  })
}

export function injectPostV1DomainnamesDomainNameApiassociation<
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
                ReturnType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$post']>,
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
    const mutationDefaults = getPostV1DomainnamesDomainNameApiassociationMutationOptions<
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

export function getDeleteV1DomainnamesDomainNameApiassociationMutationKey() {
  return ['v1', '/v1/domainnames/:domainName/apiassociation', 'DELETE'] as const
}

export function getDeleteV1DomainnamesDomainNameApiassociationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DomainnamesDomainNameApiassociationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.domainnames)[':domainName']['apiassociation']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.domainnames[':domainName'].apiassociation.$delete(args, options),
      )
    },
  })
}

export function injectDeleteV1DomainnamesDomainNameApiassociation<
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
                ReturnType<
                  (typeof client.v1.domainnames)[':domainName']['apiassociation']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.domainnames)[':domainName']['apiassociation']['$delete']
        >,
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
    const mutationDefaults = getDeleteV1DomainnamesDomainNameApiassociationMutationOptions<
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

export function getPostV1SourceApisSourceApiIdentifierMergedApiAssociationsMutationKey() {
  return ['v1', '/v1/sourceApis/:sourceApiIdentifier/mergedApiAssociations', 'POST'] as const
}

export function getPostV1SourceApisSourceApiIdentifierMergedApiAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.sourceApis)[':sourceApiIdentifier']['mergedApiAssociations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceApisSourceApiIdentifierMergedApiAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.sourceApis)[':sourceApiIdentifier']['mergedApiAssociations']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.sourceApis[':sourceApiIdentifier'].mergedApiAssociations.$post(args, options),
      )
    },
  })
}

export function injectPostV1SourceApisSourceApiIdentifierMergedApiAssociations<
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
                ReturnType<
                  (typeof client.v1.sourceApis)[':sourceApiIdentifier']['mergedApiAssociations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.sourceApis)[':sourceApiIdentifier']['mergedApiAssociations']['$post']
        >,
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
    const mutationDefaults =
      getPostV1SourceApisSourceApiIdentifierMergedApiAssociationsMutationOptions<
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

export function getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsMutationKey() {
  return ['v1', '/v1/mergedApis/:mergedApiIdentifier/sourceApiAssociations', 'POST'] as const
}

export function getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations.$post(args, options),
      )
    },
  })
}

export function injectPostV1MergedApisMergedApiIdentifierSourceApiAssociations<
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
                ReturnType<
                  (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations']['$post']
        >,
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
    const mutationDefaults =
      getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsMutationOptions<
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

export function getV1ApisApiIdApiCachesQueryKey(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/ApiCaches', keyArgs] as const
}

export function getV1ApisApiIdApiCachesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdApiCachesQueryKey>
  >({
    queryKey: getV1ApisApiIdApiCachesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apis[':apiId'].ApiCaches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ApisApiIdApiCaches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApisApiIdApiCachesQueryKey>
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
      ...getV1ApisApiIdApiCachesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1ApisApiIdApiCachesMutationKey() {
  return ['v1', '/v1/apis/:apiId/ApiCaches', 'POST'] as const
}

export function getPostV1ApisApiIdApiCachesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdApiCachesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$post']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].ApiCaches.$post(args, options))
    },
  })
}

export function injectPostV1ApisApiIdApiCaches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$post']>,
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
    const mutationDefaults = getPostV1ApisApiIdApiCachesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV1ApisApiIdApiCachesMutationKey() {
  return ['v1', '/v1/apis/:apiId/ApiCaches', 'DELETE'] as const
}

export function getDeleteV1ApisApiIdApiCachesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ApisApiIdApiCachesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$delete']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].ApiCaches.$delete(args, options))
    },
  })
}

export function injectDeleteV1ApisApiIdApiCaches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$delete']>,
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
    const mutationDefaults = getDeleteV1ApisApiIdApiCachesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ApisApiIdApikeysQueryKey(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/apikeys', keyArgs] as const
}

export function getV1ApisApiIdApikeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['apikeys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['apikeys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdApikeysQueryKey>
  >({
    queryKey: getV1ApisApiIdApikeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apis[':apiId'].apikeys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ApisApiIdApikeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['apikeys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['apikeys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApisApiIdApikeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ApisApiIdApikeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1ApisApiIdApikeysMutationKey() {
  return ['v1', '/v1/apis/:apiId/apikeys', 'POST'] as const
}

export function getPostV1ApisApiIdApikeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['apikeys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdApikeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys']['$post']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].apikeys.$post(args, options))
    },
  })
}

export function injectPostV1ApisApiIdApikeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['apikeys']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys']['$post']>,
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
    const mutationDefaults = getPostV1ApisApiIdApikeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ApisApiIdDatasourcesQueryKey(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['datasources']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/datasources', keyArgs] as const
}

export function getV1ApisApiIdDatasourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['datasources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdDatasourcesQueryKey>
  >({
    queryKey: getV1ApisApiIdDatasourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apis[':apiId'].datasources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ApisApiIdDatasources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.apis)[':apiId']['datasources']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApisApiIdDatasourcesQueryKey>
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
      ...getV1ApisApiIdDatasourcesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1ApisApiIdDatasourcesMutationKey() {
  return ['v1', '/v1/apis/:apiId/datasources', 'POST'] as const
}

export function getPostV1ApisApiIdDatasourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['datasources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdDatasourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['datasources']['$post']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].datasources.$post(args, options))
    },
  })
}

export function injectPostV1ApisApiIdDatasources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.apis)[':apiId']['datasources']['$post']>,
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
    const mutationDefaults = getPostV1ApisApiIdDatasourcesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1DomainnamesQueryKey(
  args: InferRequestType<typeof client.v1.domainnames.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/domainnames', keyArgs] as const
}

export function getV1DomainnamesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domainnames.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.domainnames.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domainnames.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1DomainnamesQueryKey>
  >({
    queryKey: getV1DomainnamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.domainnames.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Domainnames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domainnames.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.domainnames.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domainnames.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1DomainnamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1DomainnamesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1DomainnamesMutationKey() {
  return ['v1', '/v1/domainnames', 'POST'] as const
}

export function getPostV1DomainnamesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domainnames.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.domainnames.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainnamesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.domainnames.$post>) {
      return parseResponse(client.v1.domainnames.$post(args, options))
    },
  })
}

export function injectPostV1Domainnames<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domainnames.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.domainnames.$post>,
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
    const mutationDefaults = getPostV1DomainnamesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ApisApiIdFunctionsQueryKey(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['functions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/functions', keyArgs] as const
}

export function getV1ApisApiIdFunctionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['functions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['functions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['functions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdFunctionsQueryKey>
  >({
    queryKey: getV1ApisApiIdFunctionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apis[':apiId'].functions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ApisApiIdFunctions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['functions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.apis)[':apiId']['functions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['functions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApisApiIdFunctionsQueryKey>
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
      ...getV1ApisApiIdFunctionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1ApisApiIdFunctionsMutationKey() {
  return ['v1', '/v1/apis/:apiId/functions', 'POST'] as const
}

export function getPostV1ApisApiIdFunctionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['functions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['functions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdFunctionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['functions']['$post']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].functions.$post(args, options))
    },
  })
}

export function injectPostV1ApisApiIdFunctions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['functions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.apis)[':apiId']['functions']['$post']>,
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
    const mutationDefaults = getPostV1ApisApiIdFunctionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ApisQueryKey(args: InferRequestType<typeof client.v1.apis.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis', keyArgs] as const
}

export function getV1ApisQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apis.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.apis.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apis.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ApisQueryKey>
  >({
    queryKey: getV1ApisQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apis.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Apis<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apis.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.apis.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apis.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1ApisQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ApisQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1ApisMutationKey() {
  return ['v1', '/v1/apis', 'POST'] as const
}

export function getPostV1ApisMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apis.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.apis.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.apis.$post>) {
      return parseResponse(client.v1.apis.$post(args, options))
    },
  })
}

export function injectPostV1Apis<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apis.$post>>>>>,
        TError,
        InferRequestType<typeof client.v1.apis.$post>,
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
    const mutationDefaults = getPostV1ApisMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ApisApiIdTypesTypeNameResolversQueryKey(
  args: InferRequestType<
    (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/types/:typeName/resolvers', keyArgs] as const
}

export function getV1ApisApiIdTypesTypeNameResolversQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdTypesTypeNameResolversQueryKey>
  >({
    queryKey: getV1ApisApiIdTypesTypeNameResolversQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apis[':apiId'].types[':typeName'].resolvers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ApisApiIdTypesTypeNameResolvers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ApisApiIdTypesTypeNameResolversQueryKey>
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
      ...getV1ApisApiIdTypesTypeNameResolversQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1ApisApiIdTypesTypeNameResolversMutationKey() {
  return ['v1', '/v1/apis/:apiId/types/:typeName/resolvers', 'POST'] as const
}

export function getPostV1ApisApiIdTypesTypeNameResolversMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdTypesTypeNameResolversMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.apis[':apiId'].types[':typeName'].resolvers.$post(args, options),
      )
    },
  })
}

export function injectPostV1ApisApiIdTypesTypeNameResolvers<
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
                ReturnType<
                  (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$post']
        >,
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
    const mutationDefaults = getPostV1ApisApiIdTypesTypeNameResolversMutationOptions<
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

export function getPostV1ApisApiIdTypesMutationKey() {
  return ['v1', '/v1/apis/:apiId/types', 'POST'] as const
}

export function getPostV1ApisApiIdTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['types']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['types']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdTypesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.apis)[':apiId']['types']['$post']>) {
      return parseResponse(client.v1.apis[':apiId'].types.$post(args, options))
    },
  })
}

export function injectPostV1ApisApiIdTypes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['types']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.apis)[':apiId']['types']['$post']>,
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
    const mutationDefaults = getPostV1ApisApiIdTypesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ApisApiIdApikeysIdMutationKey() {
  return ['v1', '/v1/apis/:apiId/apikeys/:id', 'POST'] as const
}

export function getPostV1ApisApiIdApikeysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdApikeysIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$post']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].apikeys[':id'].$post(args, options))
    },
  })
}

export function injectPostV1ApisApiIdApikeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$post']>,
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
    const mutationDefaults = getPostV1ApisApiIdApikeysIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV1ApisApiIdApikeysIdMutationKey() {
  return ['v1', '/v1/apis/:apiId/apikeys/:id', 'DELETE'] as const
}

export function getDeleteV1ApisApiIdApikeysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ApisApiIdApikeysIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].apikeys[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteV1ApisApiIdApikeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteV1ApisApiIdApikeysIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ApisApiIdDatasourcesNameQueryKey(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/datasources/:name', keyArgs] as const
}

export function getV1ApisApiIdDatasourcesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdDatasourcesNameQueryKey>
  >({
    queryKey: getV1ApisApiIdDatasourcesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apis[':apiId'].datasources[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ApisApiIdDatasourcesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApisApiIdDatasourcesNameQueryKey>
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
      ...getV1ApisApiIdDatasourcesNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1ApisApiIdDatasourcesNameMutationKey() {
  return ['v1', '/v1/apis/:apiId/datasources/:name', 'POST'] as const
}

export function getPostV1ApisApiIdDatasourcesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdDatasourcesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$post']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].datasources[':name'].$post(args, options))
    },
  })
}

export function injectPostV1ApisApiIdDatasourcesName<
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
                ReturnType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$post']>,
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
    const mutationDefaults = getPostV1ApisApiIdDatasourcesNameMutationOptions<
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

export function getDeleteV1ApisApiIdDatasourcesNameMutationKey() {
  return ['v1', '/v1/apis/:apiId/datasources/:name', 'DELETE'] as const
}

export function getDeleteV1ApisApiIdDatasourcesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ApisApiIdDatasourcesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$delete']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].datasources[':name'].$delete(args, options))
    },
  })
}

export function injectDeleteV1ApisApiIdDatasourcesName<
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
                ReturnType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$delete']>,
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
    const mutationDefaults = getDeleteV1ApisApiIdDatasourcesNameMutationOptions<
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

export function getV1DomainnamesDomainNameQueryKey(
  args: InferRequestType<(typeof client.v1.domainnames)[':domainName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/domainnames/:domainName', keyArgs] as const
}

export function getV1DomainnamesDomainNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.domainnames)[':domainName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.domainnames)[':domainName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domainnames)[':domainName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DomainnamesDomainNameQueryKey>
  >({
    queryKey: getV1DomainnamesDomainNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.domainnames[':domainName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1DomainnamesDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.domainnames)[':domainName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.domainnames)[':domainName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.domainnames)[':domainName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DomainnamesDomainNameQueryKey>
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
      ...getV1DomainnamesDomainNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1DomainnamesDomainNameMutationKey() {
  return ['v1', '/v1/domainnames/:domainName', 'POST'] as const
}

export function getPostV1DomainnamesDomainNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domainnames)[':domainName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.domainnames)[':domainName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainnamesDomainNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.domainnames)[':domainName']['$post']>,
    ) {
      return parseResponse(client.v1.domainnames[':domainName'].$post(args, options))
    },
  })
}

export function injectPostV1DomainnamesDomainName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.domainnames)[':domainName']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.domainnames)[':domainName']['$post']>,
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
    const mutationDefaults = getPostV1DomainnamesDomainNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV1DomainnamesDomainNameMutationKey() {
  return ['v1', '/v1/domainnames/:domainName', 'DELETE'] as const
}

export function getDeleteV1DomainnamesDomainNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domainnames)[':domainName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.domainnames)[':domainName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DomainnamesDomainNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.domainnames)[':domainName']['$delete']>,
    ) {
      return parseResponse(client.v1.domainnames[':domainName'].$delete(args, options))
    },
  })
}

export function injectDeleteV1DomainnamesDomainName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.domainnames)[':domainName']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.domainnames)[':domainName']['$delete']>,
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
    const mutationDefaults = getDeleteV1DomainnamesDomainNameMutationOptions<
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

export function getV1ApisApiIdFunctionsFunctionIdQueryKey(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/functions/:functionId', keyArgs] as const
}

export function getV1ApisApiIdFunctionsFunctionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdFunctionsFunctionIdQueryKey>
  >({
    queryKey: getV1ApisApiIdFunctionsFunctionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apis[':apiId'].functions[':functionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ApisApiIdFunctionsFunctionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.apis)[':apiId']['functions'][':functionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApisApiIdFunctionsFunctionIdQueryKey>
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
      ...getV1ApisApiIdFunctionsFunctionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1ApisApiIdFunctionsFunctionIdMutationKey() {
  return ['v1', '/v1/apis/:apiId/functions/:functionId', 'POST'] as const
}

export function getPostV1ApisApiIdFunctionsFunctionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdFunctionsFunctionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apis)[':apiId']['functions'][':functionId']['$post']
      >,
    ) {
      return parseResponse(client.v1.apis[':apiId'].functions[':functionId'].$post(args, options))
    },
  })
}

export function injectPostV1ApisApiIdFunctionsFunctionId<
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
                ReturnType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$post']>,
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
    const mutationDefaults = getPostV1ApisApiIdFunctionsFunctionIdMutationOptions<
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

export function getDeleteV1ApisApiIdFunctionsFunctionIdMutationKey() {
  return ['v1', '/v1/apis/:apiId/functions/:functionId', 'DELETE'] as const
}

export function getDeleteV1ApisApiIdFunctionsFunctionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ApisApiIdFunctionsFunctionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apis)[':apiId']['functions'][':functionId']['$delete']
      >,
    ) {
      return parseResponse(client.v1.apis[':apiId'].functions[':functionId'].$delete(args, options))
    },
  })
}

export function injectDeleteV1ApisApiIdFunctionsFunctionId<
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
                ReturnType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$delete']>,
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
    const mutationDefaults = getDeleteV1ApisApiIdFunctionsFunctionIdMutationOptions<
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

export function getV1ApisApiIdQueryKey(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId', keyArgs] as const
}

export function getV1ApisApiIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdQueryKey>
  >({
    queryKey: getV1ApisApiIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apis[':apiId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1ApisApiId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.apis)[':apiId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApisApiIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ApisApiIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1ApisApiIdMutationKey() {
  return ['v1', '/v1/apis/:apiId', 'POST'] as const
}

export function getPostV1ApisApiIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.apis)[':apiId']['$post']>) {
      return parseResponse(client.v1.apis[':apiId'].$post(args, options))
    },
  })
}

export function injectPostV1ApisApiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.apis)[':apiId']['$post']>,
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
    const mutationDefaults = getPostV1ApisApiIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV1ApisApiIdMutationKey() {
  return ['v1', '/v1/apis/:apiId', 'DELETE'] as const
}

export function getDeleteV1ApisApiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ApisApiIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.apis)[':apiId']['$delete']>) {
      return parseResponse(client.v1.apis[':apiId'].$delete(args, options))
    },
  })
}

export function injectDeleteV1ApisApiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.apis)[':apiId']['$delete']>,
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
    const mutationDefaults = getDeleteV1ApisApiIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ApisApiIdTypesTypeNameResolversFieldNameQueryKey(
  args: InferRequestType<
    (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/types/:typeName/resolvers/:fieldName', keyArgs] as const
}

export function getV1ApisApiIdTypesTypeNameResolversFieldNameQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdTypesTypeNameResolversFieldNameQueryKey>
  >({
    queryKey: getV1ApisApiIdTypesTypeNameResolversFieldNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apis[':apiId'].types[':typeName'].resolvers[':fieldName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ApisApiIdTypesTypeNameResolversFieldName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ApisApiIdTypesTypeNameResolversFieldNameQueryKey>
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
      ...getV1ApisApiIdTypesTypeNameResolversFieldNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1ApisApiIdTypesTypeNameResolversFieldNameMutationKey() {
  return ['v1', '/v1/apis/:apiId/types/:typeName/resolvers/:fieldName', 'POST'] as const
}

export function getPostV1ApisApiIdTypesTypeNameResolversFieldNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdTypesTypeNameResolversFieldNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.apis[':apiId'].types[':typeName'].resolvers[':fieldName'].$post(args, options),
      )
    },
  })
}

export function injectPostV1ApisApiIdTypesTypeNameResolversFieldName<
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
                ReturnType<
                  (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$post']
        >,
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
    const mutationDefaults = getPostV1ApisApiIdTypesTypeNameResolversFieldNameMutationOptions<
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

export function getDeleteV1ApisApiIdTypesTypeNameResolversFieldNameMutationKey() {
  return ['v1', '/v1/apis/:apiId/types/:typeName/resolvers/:fieldName', 'DELETE'] as const
}

export function getDeleteV1ApisApiIdTypesTypeNameResolversFieldNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ApisApiIdTypesTypeNameResolversFieldNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.apis[':apiId'].types[':typeName'].resolvers[':fieldName'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV1ApisApiIdTypesTypeNameResolversFieldName<
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
                ReturnType<
                  (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$delete']
        >,
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
    const mutationDefaults = getDeleteV1ApisApiIdTypesTypeNameResolversFieldNameMutationOptions<
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

export function getPostV1ApisApiIdTypesTypeNameMutationKey() {
  return ['v1', '/v1/apis/:apiId/types/:typeName', 'POST'] as const
}

export function getPostV1ApisApiIdTypesTypeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdTypesTypeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$post']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].types[':typeName'].$post(args, options))
    },
  })
}

export function injectPostV1ApisApiIdTypesTypeName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$post']>,
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
    const mutationDefaults = getPostV1ApisApiIdTypesTypeNameMutationOptions<
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

export function getDeleteV1ApisApiIdTypesTypeNameMutationKey() {
  return ['v1', '/v1/apis/:apiId/types/:typeName', 'DELETE'] as const
}

export function getDeleteV1ApisApiIdTypesTypeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ApisApiIdTypesTypeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$delete']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].types[':typeName'].$delete(args, options))
    },
  })
}

export function injectDeleteV1ApisApiIdTypesTypeName<
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
                ReturnType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$delete']>,
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
    const mutationDefaults = getDeleteV1ApisApiIdTypesTypeNameMutationOptions<
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

export function getDeleteV1SourceApisSourceApiIdentifierMergedApiAssociationsAssociationIdMutationKey() {
  return [
    'v1',
    '/v1/sourceApis/:sourceApiIdentifier/mergedApiAssociations/:associationId',
    'DELETE',
  ] as const
}

export function getDeleteV1SourceApisSourceApiIdentifierMergedApiAssociationsAssociationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.sourceApis)[':sourceApiIdentifier']['mergedApiAssociations'][':associationId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1SourceApisSourceApiIdentifierMergedApiAssociationsAssociationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.sourceApis)[':sourceApiIdentifier']['mergedApiAssociations'][':associationId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.sourceApis[':sourceApiIdentifier'].mergedApiAssociations[
          ':associationId'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV1SourceApisSourceApiIdentifierMergedApiAssociationsAssociationId<
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
                ReturnType<
                  (typeof client.v1.sourceApis)[':sourceApiIdentifier']['mergedApiAssociations'][':associationId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.sourceApis)[':sourceApiIdentifier']['mergedApiAssociations'][':associationId']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteV1SourceApisSourceApiIdentifierMergedApiAssociationsAssociationIdMutationOptions<
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

export function getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdQueryKey(
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

export function getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdQueryKey>
  >({
    queryKey: getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations[':associationId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdQueryKey
        >
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
      ...getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMutationKey() {
  return [
    'v1',
    '/v1/mergedApis/:mergedApiIdentifier/sourceApiAssociations/:associationId',
    'POST',
  ] as const
}

export function getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations[':associationId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationId<
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
                ReturnType<
                  (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$post']
        >,
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
    const mutationDefaults =
      getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMutationOptions<
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

export function getDeleteV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMutationKey() {
  return [
    'v1',
    '/v1/mergedApis/:mergedApiIdentifier/sourceApiAssociations/:associationId',
    'DELETE',
  ] as const
}

export function getDeleteV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations[
          ':associationId'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationId<
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
                ReturnType<
                  (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMutationOptions<
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

export function getPostV1DataplaneEvaluatecodeMutationKey() {
  return ['v1', '/v1/dataplane-evaluatecode', 'POST'] as const
}

export function getPostV1DataplaneEvaluatecodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['dataplane-evaluatecode']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['dataplane-evaluatecode']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DataplaneEvaluatecodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['dataplane-evaluatecode']['$post']>,
    ) {
      return parseResponse(client.v1['dataplane-evaluatecode'].$post(args, options))
    },
  })
}

export function injectPostV1DataplaneEvaluatecode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['dataplane-evaluatecode']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['dataplane-evaluatecode']['$post']>,
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
    const mutationDefaults = getPostV1DataplaneEvaluatecodeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1DataplaneEvaluatetemplateMutationKey() {
  return ['v1', '/v1/dataplane-evaluatetemplate', 'POST'] as const
}

export function getPostV1DataplaneEvaluatetemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['dataplane-evaluatetemplate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['dataplane-evaluatetemplate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DataplaneEvaluatetemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['dataplane-evaluatetemplate']['$post']>,
    ) {
      return parseResponse(client.v1['dataplane-evaluatetemplate'].$post(args, options))
    },
  })
}

export function injectPostV1DataplaneEvaluatetemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['dataplane-evaluatetemplate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['dataplane-evaluatetemplate']['$post']>,
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
    const mutationDefaults = getPostV1DataplaneEvaluatetemplateMutationOptions<
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

export function getDeleteV1ApisApiIdFlushCacheMutationKey() {
  return ['v1', '/v1/apis/:apiId/FlushCache', 'DELETE'] as const
}

export function getDeleteV1ApisApiIdFlushCacheMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['FlushCache']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['FlushCache']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ApisApiIdFlushCacheMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['FlushCache']['$delete']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].FlushCache.$delete(args, options))
    },
  })
}

export function injectDeleteV1ApisApiIdFlushCache<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['FlushCache']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.apis)[':apiId']['FlushCache']['$delete']>,
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
    const mutationDefaults = getDeleteV1ApisApiIdFlushCacheMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ApisApiIdSchemaFormatQueryKey(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['schema#format']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/schema#format', keyArgs] as const
}

export function getV1ApisApiIdSchemaFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schema#format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['schema#format']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schema#format']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdSchemaFormatQueryKey>
  >({
    queryKey: getV1ApisApiIdSchemaFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apis[':apiId']['schema#format'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ApisApiIdSchemaFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schema#format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.apis)[':apiId']['schema#format']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schema#format']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApisApiIdSchemaFormatQueryKey>
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
      ...getV1ApisApiIdSchemaFormatQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ApisApiIdSchemacreationQueryKey(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['schemacreation']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/schemacreation', keyArgs] as const
}

export function getV1ApisApiIdSchemacreationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schemacreation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['schemacreation']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schemacreation']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdSchemacreationQueryKey>
  >({
    queryKey: getV1ApisApiIdSchemacreationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apis[':apiId'].schemacreation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ApisApiIdSchemacreation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schemacreation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.apis)[':apiId']['schemacreation']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schemacreation']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApisApiIdSchemacreationQueryKey>
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
      ...getV1ApisApiIdSchemacreationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1ApisApiIdSchemacreationMutationKey() {
  return ['v1', '/v1/apis/:apiId/schemacreation', 'POST'] as const
}

export function getPostV1ApisApiIdSchemacreationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schemacreation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['schemacreation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdSchemacreationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['schemacreation']['$post']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].schemacreation.$post(args, options))
    },
  })
}

export function injectPostV1ApisApiIdSchemacreation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schemacreation']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.apis)[':apiId']['schemacreation']['$post']>,
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
    const mutationDefaults = getPostV1ApisApiIdSchemacreationMutationOptions<
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

export function getV1ApisApiIdTypesTypeNameFormatQueryKey(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName#format']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/types/:typeName#format', keyArgs] as const
}

export function getV1ApisApiIdTypesTypeNameFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['types'][':typeName#format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName#format']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apis)[':apiId']['types'][':typeName#format']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdTypesTypeNameFormatQueryKey>
  >({
    queryKey: getV1ApisApiIdTypesTypeNameFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apis[':apiId'].types[':typeName#format'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ApisApiIdTypesTypeNameFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['types'][':typeName#format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.apis)[':apiId']['types'][':typeName#format']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.apis)[':apiId']['types'][':typeName#format']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApisApiIdTypesTypeNameFormatQueryKey>
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
      ...getV1ApisApiIdTypesTypeNameFormatQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ApisApiIdFunctionsFunctionIdResolversQueryKey(
  args: InferRequestType<
    (typeof client.v1.apis)[':apiId']['functions'][':functionId']['resolvers']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/functions/:functionId/resolvers', keyArgs] as const
}

export function getV1ApisApiIdFunctionsFunctionIdResolversQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.apis)[':apiId']['functions'][':functionId']['resolvers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdFunctionsFunctionIdResolversQueryKey>
  >({
    queryKey: getV1ApisApiIdFunctionsFunctionIdResolversQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apis[':apiId'].functions[':functionId'].resolvers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ApisApiIdFunctionsFunctionIdResolvers<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.apis)[':apiId']['functions'][':functionId']['resolvers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ApisApiIdFunctionsFunctionIdResolversQueryKey>
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
      ...getV1ApisApiIdFunctionsFunctionIdResolversQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1ApisApiIdSourceApiAssociationsQueryKey(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['sourceApiAssociations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/sourceApiAssociations', keyArgs] as const
}

export function getV1ApisApiIdSourceApiAssociationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['sourceApiAssociations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['sourceApiAssociations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['sourceApiAssociations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdSourceApiAssociationsQueryKey>
  >({
    queryKey: getV1ApisApiIdSourceApiAssociationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apis[':apiId'].sourceApiAssociations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ApisApiIdSourceApiAssociations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['sourceApiAssociations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.apis)[':apiId']['sourceApiAssociations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.apis)[':apiId']['sourceApiAssociations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApisApiIdSourceApiAssociationsQueryKey>
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
      ...getV1ApisApiIdSourceApiAssociationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1TagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/tags/:resourceArn', keyArgs] as const
}

export function getV1TagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TagsResourceArnQueryKey>
  >({
    queryKey: getV1TagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.tags[':resourceArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1TagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.tags)[':resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1TagsResourceArnMutationKey() {
  return ['v1', '/v1/tags/:resourceArn', 'POST'] as const
}

export function getPostV1TagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.v1.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function injectPostV1TagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.tags)[':resourceArn']['$post']>,
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
    const mutationDefaults = getPostV1TagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ApisApiIdTypesFormatQueryKey(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['types#format']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apis/:apiId/types#format', keyArgs] as const
}

export function getV1ApisApiIdTypesFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['types#format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['types#format']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['types#format']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdTypesFormatQueryKey>
  >({
    queryKey: getV1ApisApiIdTypesFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apis[':apiId']['types#format'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ApisApiIdTypesFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['types#format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.apis)[':apiId']['types#format']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['types#format']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApisApiIdTypesFormatQueryKey>
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
      ...getV1ApisApiIdTypesFormatQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdTypesFormatQueryKey(
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

export function getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdTypesFormatQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['types#format']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdTypesFormatQueryKey
    >
  >({
    queryKey:
      getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdTypesFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations[':associationId'][
          'types#format'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdTypesFormat<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['types#format']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdTypesFormatQueryKey
        >
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
      ...getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdTypesFormatQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMergeMutationKey() {
  return [
    'v1',
    '/v1/mergedApis/:mergedApiIdentifier/sourceApiAssociations/:associationId/merge',
    'POST',
  ] as const
}

export function getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMergeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['merge']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMergeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['merge']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations[
          ':associationId'
        ].merge.$post(args, options),
      )
    },
  })
}

export function injectPostV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMerge<
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
                ReturnType<
                  (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['merge']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['merge']['$post']
        >,
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
    const mutationDefaults =
      getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMergeMutationOptions<
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

export function getDeleteV1TagsResourceArnTagKeysMutationKey() {
  return ['v1', '/v1/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteV1TagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.v1.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function injectDeleteV1TagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>,
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
    const mutationDefaults = getDeleteV1TagsResourceArnTagKeysMutationOptions<
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

export function getPostV1ApisApiIdApiCachesUpdateMutationKey() {
  return ['v1', '/v1/apis/:apiId/ApiCaches/update', 'POST'] as const
}

export function getPostV1ApisApiIdApiCachesUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['ApiCaches']['update']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdApiCachesUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['update']['$post']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].ApiCaches.update.$post(args, options))
    },
  })
}

export function injectPostV1ApisApiIdApiCachesUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['ApiCaches']['update']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['update']['$post']>,
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
    const mutationDefaults = getPostV1ApisApiIdApiCachesUpdateMutationOptions<
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
