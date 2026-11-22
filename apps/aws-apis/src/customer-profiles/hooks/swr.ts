import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDomainsKey() {
  return ['domains'] as const
}

export function getIntegrationsKey() {
  return ['integrations'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getTemplatesKey() {
  return ['templates'] as const
}

export function getPostDomainsDomainNameProfilesKeysKey() {
  return ['domains', '/domains/:DomainName/profiles/keys', 'POST'] as const
}

export function usePostDomainsDomainNameProfilesKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':DomainName']['profiles']['keys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':DomainName']['profiles']['keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsDomainNameProfilesKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.domains)[':DomainName']['profiles']['keys']['$post']>
        },
      ) => parseResponse(client.domains[':DomainName'].profiles.keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDomainsDomainNameKey(
  args: InferRequestType<(typeof client.domains)[':DomainName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['domains', '/domains/:DomainName', keyArgs] as const
}

export function useGetDomainsDomainName<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':DomainName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':DomainName']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainsDomainNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':DomainName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains[':DomainName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsDomainName<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':DomainName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':DomainName']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainsDomainNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':DomainName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains[':DomainName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDomainsDomainNameKey() {
  return ['domains', '/domains/:DomainName', 'PUT'] as const
}

export function usePutDomainsDomainName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':DomainName']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':DomainName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDomainsDomainNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.domains)[':DomainName']['$put']> },
      ) => parseResponse(client.domains[':DomainName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDomainsDomainNameKey() {
  return ['domains', '/domains/:DomainName', 'POST'] as const
}

export function usePostDomainsDomainName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':DomainName']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':DomainName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsDomainNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.domains)[':DomainName']['$post']> },
      ) => parseResponse(client.domains[':DomainName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDomainsDomainNameKey() {
  return ['domains', '/domains/:DomainName', 'DELETE'] as const
}

export function useDeleteDomainsDomainName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':DomainName']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':DomainName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDomainsDomainNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.domains)[':DomainName']['$delete']> },
      ) => parseResponse(client.domains[':DomainName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDomainsDomainNameWorkflowsIntegrationsKey() {
  return ['domains', '/domains/:DomainName/workflows/integrations', 'POST'] as const
}

export function usePostDomainsDomainNameWorkflowsIntegrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.domains)[':DomainName']['workflows']['integrations']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':DomainName']['workflows']['integrations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsDomainNameWorkflowsIntegrationsKey()
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
            (typeof client.domains)[':DomainName']['workflows']['integrations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.domains[':DomainName'].workflows.integrations.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutDomainsDomainNameProfilesKey() {
  return ['domains', '/domains/:DomainName/profiles', 'PUT'] as const
}

export function usePutDomainsDomainNameProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':DomainName']['profiles']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':DomainName']['profiles']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDomainsDomainNameProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.domains)[':DomainName']['profiles']['$put']> },
      ) => parseResponse(client.domains[':DomainName'].profiles.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDomainsDomainNameProfilesKey() {
  return ['domains', '/domains/:DomainName/profiles', 'POST'] as const
}

export function usePostDomainsDomainNameProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':DomainName']['profiles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':DomainName']['profiles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsDomainNameProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.domains)[':DomainName']['profiles']['$post']> },
      ) => parseResponse(client.domains[':DomainName'].profiles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDomainsDomainNameIntegrationsDeleteKey() {
  return ['domains', '/domains/:DomainName/integrations/delete', 'POST'] as const
}

export function usePostDomainsDomainNameIntegrationsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.domains)[':DomainName']['integrations']['delete']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':DomainName']['integrations']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsDomainNameIntegrationsDeleteKey()
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
            (typeof client.domains)[':DomainName']['integrations']['delete']['$post']
          >
        },
      ) =>
        parseResponse(client.domains[':DomainName'].integrations.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDomainsDomainNameProfilesDeleteKey() {
  return ['domains', '/domains/:DomainName/profiles/delete', 'POST'] as const
}

export function usePostDomainsDomainNameProfilesDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':DomainName']['profiles']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':DomainName']['profiles']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsDomainNameProfilesDeleteKey()
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
            (typeof client.domains)[':DomainName']['profiles']['delete']['$post']
          >
        },
      ) => parseResponse(client.domains[':DomainName'].profiles.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDomainsDomainNameProfilesKeysDeleteKey() {
  return ['domains', '/domains/:DomainName/profiles/keys/delete', 'POST'] as const
}

export function usePostDomainsDomainNameProfilesKeysDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.domains)[':DomainName']['profiles']['keys']['delete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':DomainName']['profiles']['keys']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsDomainNameProfilesKeysDeleteKey()
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
            (typeof client.domains)[':DomainName']['profiles']['keys']['delete']['$post']
          >
        },
      ) =>
        parseResponse(client.domains[':DomainName'].profiles.keys.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDomainsDomainNameProfilesObjectsDeleteKey() {
  return ['domains', '/domains/:DomainName/profiles/objects/delete', 'POST'] as const
}

export function usePostDomainsDomainNameProfilesObjectsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.domains)[':DomainName']['profiles']['objects']['delete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.domains)[':DomainName']['profiles']['objects']['delete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsDomainNameProfilesObjectsDeleteKey()
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
            (typeof client.domains)[':DomainName']['profiles']['objects']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.domains[':DomainName'].profiles.objects.delete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDomainsDomainNameObjectTypesObjectTypeNameKey(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['domains', '/domains/:DomainName/object-types/:ObjectTypeName', keyArgs] as const
}

export function useGetDomainsDomainNameObjectTypesObjectTypeName<TError = unknown>(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$get']
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
        ? getGetDomainsDomainNameObjectTypesObjectTypeNameKey(args)
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
                (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$get']
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
          client.domains[':DomainName']['object-types'][':ObjectTypeName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsDomainNameObjectTypesObjectTypeName<TError = unknown>(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$get']
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
        ? getGetDomainsDomainNameObjectTypesObjectTypeNameKey(args)
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
                (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$get']
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
          client.domains[':DomainName']['object-types'][':ObjectTypeName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDomainsDomainNameObjectTypesObjectTypeNameKey() {
  return ['domains', '/domains/:DomainName/object-types/:ObjectTypeName', 'PUT'] as const
}

export function usePutDomainsDomainNameObjectTypesObjectTypeName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDomainsDomainNameObjectTypesObjectTypeNameKey()
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
            (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.domains[':DomainName']['object-types'][':ObjectTypeName'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDomainsDomainNameObjectTypesObjectTypeNameKey() {
  return ['domains', '/domains/:DomainName/object-types/:ObjectTypeName', 'DELETE'] as const
}

export function useDeleteDomainsDomainNameObjectTypesObjectTypeName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDomainsDomainNameObjectTypesObjectTypeNameKey()
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
            (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.domains[':DomainName']['object-types'][':ObjectTypeName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDomainsDomainNameWorkflowsWorkflowIdKey(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['domains', '/domains/:DomainName/workflows/:WorkflowId', keyArgs] as const
}

export function useGetDomainsDomainNameWorkflowsWorkflowId<TError = unknown>(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['$get']>
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
        ? getGetDomainsDomainNameWorkflowsWorkflowIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.domains[':DomainName'].workflows[':WorkflowId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsDomainNameWorkflowsWorkflowId<TError = unknown>(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['$get']>
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
        ? getGetDomainsDomainNameWorkflowsWorkflowIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.domains[':DomainName'].workflows[':WorkflowId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteDomainsDomainNameWorkflowsWorkflowIdKey() {
  return ['domains', '/domains/:DomainName/workflows/:WorkflowId', 'DELETE'] as const
}

export function useDeleteDomainsDomainNameWorkflowsWorkflowId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDomainsDomainNameWorkflowsWorkflowIdKey()
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
            (typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.domains[':DomainName'].workflows[':WorkflowId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDomainsDomainNameIdentityResolutionJobsAutoMergingPreviewKey() {
  return [
    'domains',
    '/domains/:DomainName/identity-resolution-jobs/auto-merging-preview',
    'POST',
  ] as const
}

export function usePostDomainsDomainNameIdentityResolutionJobsAutoMergingPreview<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.domains)[':DomainName']['identity-resolution-jobs']['auto-merging-preview']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.domains)[':DomainName']['identity-resolution-jobs']['auto-merging-preview']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsDomainNameIdentityResolutionJobsAutoMergingPreviewKey()
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
            (typeof client.domains)[':DomainName']['identity-resolution-jobs']['auto-merging-preview']['$post']
          >
        },
      ) =>
        parseResponse(
          client.domains[':DomainName']['identity-resolution-jobs']['auto-merging-preview'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDomainsDomainNameIdentityResolutionJobsJobIdKey(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['identity-resolution-jobs'][':JobId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['domains', '/domains/:DomainName/identity-resolution-jobs/:JobId', keyArgs] as const
}

export function useGetDomainsDomainNameIdentityResolutionJobsJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['identity-resolution-jobs'][':JobId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.domains)[':DomainName']['identity-resolution-jobs'][':JobId']['$get']
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
        ? getGetDomainsDomainNameIdentityResolutionJobsJobIdKey(args)
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
                (typeof client.domains)[':DomainName']['identity-resolution-jobs'][':JobId']['$get']
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
          client.domains[':DomainName']['identity-resolution-jobs'][':JobId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsDomainNameIdentityResolutionJobsJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['identity-resolution-jobs'][':JobId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.domains)[':DomainName']['identity-resolution-jobs'][':JobId']['$get']
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
        ? getGetDomainsDomainNameIdentityResolutionJobsJobIdKey(args)
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
                (typeof client.domains)[':DomainName']['identity-resolution-jobs'][':JobId']['$get']
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
          client.domains[':DomainName']['identity-resolution-jobs'][':JobId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDomainsDomainNameIntegrationsKey(
  args: InferRequestType<(typeof client.domains)[':DomainName']['integrations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['domains', '/domains/:DomainName/integrations', keyArgs] as const
}

export function useGetDomainsDomainNameIntegrations<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':DomainName']['integrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':DomainName']['integrations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainsDomainNameIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':DomainName']['integrations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.domains[':DomainName'].integrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsDomainNameIntegrations<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':DomainName']['integrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':DomainName']['integrations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainsDomainNameIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':DomainName']['integrations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.domains[':DomainName'].integrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDomainsDomainNameIntegrationsKey() {
  return ['domains', '/domains/:DomainName/integrations', 'PUT'] as const
}

export function usePutDomainsDomainNameIntegrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':DomainName']['integrations']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':DomainName']['integrations']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDomainsDomainNameIntegrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.domains)[':DomainName']['integrations']['$put']>
        },
      ) => parseResponse(client.domains[':DomainName'].integrations.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDomainsDomainNameIntegrationsKey() {
  return ['domains', '/domains/:DomainName/integrations', 'POST'] as const
}

export function usePostDomainsDomainNameIntegrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':DomainName']['integrations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':DomainName']['integrations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsDomainNameIntegrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.domains)[':DomainName']['integrations']['$post']>
        },
      ) => parseResponse(client.domains[':DomainName'].integrations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDomainsDomainNameMatchesKey(
  args: InferRequestType<(typeof client.domains)[':DomainName']['matches']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['domains', '/domains/:DomainName/matches', keyArgs] as const
}

export function useGetDomainsDomainNameMatches<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':DomainName']['matches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':DomainName']['matches']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainsDomainNameMatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':DomainName']['matches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains[':DomainName'].matches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsDomainNameMatches<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':DomainName']['matches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':DomainName']['matches']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainsDomainNameMatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':DomainName']['matches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains[':DomainName'].matches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTemplatesTemplateIdKey(
  args: InferRequestType<(typeof client.templates)[':TemplateId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['templates', '/templates/:TemplateId', keyArgs] as const
}

export function useGetTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':TemplateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':TemplateId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTemplatesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':TemplateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':TemplateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':TemplateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':TemplateId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTemplatesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':TemplateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':TemplateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDomainsDomainNameWorkflowsWorkflowIdStepsKey(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['steps']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['domains', '/domains/:DomainName/workflows/:WorkflowId/steps', keyArgs] as const
}

export function useGetDomainsDomainNameWorkflowsWorkflowIdSteps<TError = unknown>(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['steps']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['steps']['$get']
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
        ? getGetDomainsDomainNameWorkflowsWorkflowIdStepsKey(args)
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
                (typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['steps']['$get']
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
          client.domains[':DomainName'].workflows[':WorkflowId'].steps.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsDomainNameWorkflowsWorkflowIdSteps<TError = unknown>(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['steps']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['steps']['$get']
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
        ? getGetDomainsDomainNameWorkflowsWorkflowIdStepsKey(args)
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
                (typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['steps']['$get']
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
          client.domains[':DomainName'].workflows[':WorkflowId'].steps.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostIntegrationsKey() {
  return ['integrations', '/integrations', 'POST'] as const
}

export function usePostIntegrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.integrations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIntegrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.integrations.$post> }) =>
        parseResponse(client.integrations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDomainsKey(args: InferRequestType<typeof client.domains.$get>) {
  const { header: _, ...keyArgs } = args
  return ['domains', '/domains', keyArgs] as const
}

export function useGetDomains<TError = unknown>(
  args: InferRequestType<typeof client.domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDomainsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.domains.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDomains<TError = unknown>(
  args: InferRequestType<typeof client.domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDomainsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.domains.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetDomainsDomainNameIdentityResolutionJobsKey(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['identity-resolution-jobs']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['domains', '/domains/:DomainName/identity-resolution-jobs', keyArgs] as const
}

export function useGetDomainsDomainNameIdentityResolutionJobs<TError = unknown>(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['identity-resolution-jobs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.domains)[':DomainName']['identity-resolution-jobs']['$get']>
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
        ? getGetDomainsDomainNameIdentityResolutionJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.domains)[':DomainName']['identity-resolution-jobs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.domains[':DomainName']['identity-resolution-jobs'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsDomainNameIdentityResolutionJobs<TError = unknown>(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['identity-resolution-jobs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.domains)[':DomainName']['identity-resolution-jobs']['$get']>
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
        ? getGetDomainsDomainNameIdentityResolutionJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.domains)[':DomainName']['identity-resolution-jobs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.domains[':DomainName']['identity-resolution-jobs'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTemplatesKey(args: InferRequestType<typeof client.templates.$get>) {
  const { header: _, ...keyArgs } = args
  return ['templates', '/templates', keyArgs] as const
}

export function useGetTemplates<TError = unknown>(
  args: InferRequestType<typeof client.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplates<TError = unknown>(
  args: InferRequestType<typeof client.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDomainsDomainNameObjectTypesKey(
  args: InferRequestType<(typeof client.domains)[':DomainName']['object-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['domains', '/domains/:DomainName/object-types', keyArgs] as const
}

export function useGetDomainsDomainNameObjectTypes<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':DomainName']['object-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':DomainName']['object-types']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainsDomainNameObjectTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':DomainName']['object-types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.domains[':DomainName']['object-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsDomainNameObjectTypes<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':DomainName']['object-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':DomainName']['object-types']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainsDomainNameObjectTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':DomainName']['object-types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.domains[':DomainName']['object-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDomainsDomainNameProfilesObjectsKey() {
  return ['domains', '/domains/:DomainName/profiles/objects', 'PUT'] as const
}

export function usePutDomainsDomainNameProfilesObjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':DomainName']['profiles']['objects']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':DomainName']['profiles']['objects']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDomainsDomainNameProfilesObjectsKey()
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
            (typeof client.domains)[':DomainName']['profiles']['objects']['$put']
          >
        },
      ) => parseResponse(client.domains[':DomainName'].profiles.objects.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDomainsDomainNameProfilesObjectsKey() {
  return ['domains', '/domains/:DomainName/profiles/objects', 'POST'] as const
}

export function usePostDomainsDomainNameProfilesObjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.domains)[':DomainName']['profiles']['objects']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':DomainName']['profiles']['objects']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsDomainNameProfilesObjectsKey()
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
            (typeof client.domains)[':DomainName']['profiles']['objects']['$post']
          >
        },
      ) => parseResponse(client.domains[':DomainName'].profiles.objects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
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
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
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
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn']['$post']> },
      ) => parseResponse(client.tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDomainsDomainNameWorkflowsKey() {
  return ['domains', '/domains/:DomainName/workflows', 'POST'] as const
}

export function usePostDomainsDomainNameWorkflows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':DomainName']['workflows']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':DomainName']['workflows']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsDomainNameWorkflowsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.domains)[':DomainName']['workflows']['$post']> },
      ) => parseResponse(client.domains[':DomainName'].workflows.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDomainsDomainNameProfilesObjectsMergeKey() {
  return ['domains', '/domains/:DomainName/profiles/objects/merge', 'POST'] as const
}

export function usePostDomainsDomainNameProfilesObjectsMerge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.domains)[':DomainName']['profiles']['objects']['merge']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.domains)[':DomainName']['profiles']['objects']['merge']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsDomainNameProfilesObjectsMergeKey()
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
            (typeof client.domains)[':DomainName']['profiles']['objects']['merge']['$post']
          >
        },
      ) =>
        parseResponse(
          client.domains[':DomainName'].profiles.objects.merge.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDomainsDomainNameProfilesSearchKey() {
  return ['domains', '/domains/:DomainName/profiles/search', 'POST'] as const
}

export function usePostDomainsDomainNameProfilesSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':DomainName']['profiles']['search']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':DomainName']['profiles']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsDomainNameProfilesSearchKey()
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
            (typeof client.domains)[':DomainName']['profiles']['search']['$post']
          >
        },
      ) => parseResponse(client.domains[':DomainName'].profiles.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>
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
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
