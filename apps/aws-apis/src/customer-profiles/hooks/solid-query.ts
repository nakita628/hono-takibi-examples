import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function getPostDomainsDomainNameProfilesKeysMutationKey() {
  return ['domains', '/domains/:DomainName/profiles/keys', 'POST'] as const
}

export function getPostDomainsDomainNameProfilesKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':DomainName']['profiles']['keys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':DomainName']['profiles']['keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsDomainNameProfilesKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.domains)[':DomainName']['profiles']['keys']['$post']>,
    ) {
      return parseResponse(client.domains[':DomainName'].profiles.keys.$post(args, options))
    },
  })
}

export function createPostDomainsDomainNameProfilesKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.domains)[':DomainName']['profiles']['keys']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.domains)[':DomainName']['profiles']['keys']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDomainsDomainNameProfilesKeysMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDomainsDomainNameQueryKey(
  args: InferRequestType<(typeof client.domains)[':DomainName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['domains', '/domains/:DomainName', keyArgs] as const
}

export function getDomainsDomainNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':DomainName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':DomainName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':DomainName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainNameQueryKey>
  >({
    queryKey: getDomainsDomainNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains[':DomainName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDomainsDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':DomainName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.domains)[':DomainName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':DomainName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDomainsDomainNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDomainsDomainNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutDomainsDomainNameMutationKey() {
  return ['domains', '/domains/:DomainName', 'PUT'] as const
}

export function getPutDomainsDomainNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':DomainName']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':DomainName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDomainsDomainNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.domains)[':DomainName']['$put']>) {
      return parseResponse(client.domains[':DomainName'].$put(args, options))
    },
  })
}

export function createPutDomainsDomainName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':DomainName']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.domains)[':DomainName']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDomainsDomainNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDomainsDomainNameMutationKey() {
  return ['domains', '/domains/:DomainName', 'POST'] as const
}

export function getPostDomainsDomainNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':DomainName']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':DomainName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsDomainNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.domains)[':DomainName']['$post']>) {
      return parseResponse(client.domains[':DomainName'].$post(args, options))
    },
  })
}

export function createPostDomainsDomainName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':DomainName']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.domains)[':DomainName']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDomainsDomainNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteDomainsDomainNameMutationKey() {
  return ['domains', '/domains/:DomainName', 'DELETE'] as const
}

export function getDeleteDomainsDomainNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':DomainName']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':DomainName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDomainsDomainNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.domains)[':DomainName']['$delete']>) {
      return parseResponse(client.domains[':DomainName'].$delete(args, options))
    },
  })
}

export function createDeleteDomainsDomainName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':DomainName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.domains)[':DomainName']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDomainsDomainNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDomainsDomainNameWorkflowsIntegrationsMutationKey() {
  return ['domains', '/domains/:DomainName/workflows/integrations', 'POST'] as const
}

export function getPostDomainsDomainNameWorkflowsIntegrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.domains)[':DomainName']['workflows']['integrations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsDomainNameWorkflowsIntegrationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.domains)[':DomainName']['workflows']['integrations']['$post']
      >,
    ) {
      return parseResponse(
        client.domains[':DomainName'].workflows.integrations.$post(args, options),
      )
    },
  })
}

export function createPostDomainsDomainNameWorkflowsIntegrations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.domains)[':DomainName']['workflows']['integrations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.domains)[':DomainName']['workflows']['integrations']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDomainsDomainNameWorkflowsIntegrationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutDomainsDomainNameProfilesMutationKey() {
  return ['domains', '/domains/:DomainName/profiles', 'PUT'] as const
}

export function getPutDomainsDomainNameProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':DomainName']['profiles']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':DomainName']['profiles']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDomainsDomainNameProfilesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.domains)[':DomainName']['profiles']['$put']>,
    ) {
      return parseResponse(client.domains[':DomainName'].profiles.$put(args, options))
    },
  })
}

export function createPutDomainsDomainNameProfiles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':DomainName']['profiles']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.domains)[':DomainName']['profiles']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDomainsDomainNameProfilesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDomainsDomainNameProfilesMutationKey() {
  return ['domains', '/domains/:DomainName/profiles', 'POST'] as const
}

export function getPostDomainsDomainNameProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':DomainName']['profiles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':DomainName']['profiles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsDomainNameProfilesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.domains)[':DomainName']['profiles']['$post']>,
    ) {
      return parseResponse(client.domains[':DomainName'].profiles.$post(args, options))
    },
  })
}

export function createPostDomainsDomainNameProfiles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':DomainName']['profiles']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.domains)[':DomainName']['profiles']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDomainsDomainNameProfilesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDomainsDomainNameIntegrationsDeleteMutationKey() {
  return ['domains', '/domains/:DomainName/integrations/delete', 'POST'] as const
}

export function getPostDomainsDomainNameIntegrationsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.domains)[':DomainName']['integrations']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsDomainNameIntegrationsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.domains)[':DomainName']['integrations']['delete']['$post']
      >,
    ) {
      return parseResponse(client.domains[':DomainName'].integrations.delete.$post(args, options))
    },
  })
}

export function createPostDomainsDomainNameIntegrationsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.domains)[':DomainName']['integrations']['delete']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.domains)[':DomainName']['integrations']['delete']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDomainsDomainNameIntegrationsDeleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDomainsDomainNameProfilesDeleteMutationKey() {
  return ['domains', '/domains/:DomainName/profiles/delete', 'POST'] as const
}

export function getPostDomainsDomainNameProfilesDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':DomainName']['profiles']['delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':DomainName']['profiles']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsDomainNameProfilesDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.domains)[':DomainName']['profiles']['delete']['$post']>,
    ) {
      return parseResponse(client.domains[':DomainName'].profiles.delete.$post(args, options))
    },
  })
}

export function createPostDomainsDomainNameProfilesDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.domains)[':DomainName']['profiles']['delete']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.domains)[':DomainName']['profiles']['delete']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDomainsDomainNameProfilesDeleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDomainsDomainNameProfilesKeysDeleteMutationKey() {
  return ['domains', '/domains/:DomainName/profiles/keys/delete', 'POST'] as const
}

export function getPostDomainsDomainNameProfilesKeysDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.domains)[':DomainName']['profiles']['keys']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsDomainNameProfilesKeysDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.domains)[':DomainName']['profiles']['keys']['delete']['$post']
      >,
    ) {
      return parseResponse(client.domains[':DomainName'].profiles.keys.delete.$post(args, options))
    },
  })
}

export function createPostDomainsDomainNameProfilesKeysDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.domains)[':DomainName']['profiles']['keys']['delete']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDomainsDomainNameProfilesKeysDeleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDomainsDomainNameProfilesObjectsDeleteMutationKey() {
  return ['domains', '/domains/:DomainName/profiles/objects/delete', 'POST'] as const
}

export function getPostDomainsDomainNameProfilesObjectsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.domains)[':DomainName']['profiles']['objects']['delete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsDomainNameProfilesObjectsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.domains)[':DomainName']['profiles']['objects']['delete']['$post']
      >,
    ) {
      return parseResponse(
        client.domains[':DomainName'].profiles.objects.delete.$post(args, options),
      )
    },
  })
}

export function createPostDomainsDomainNameProfilesObjectsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.domains)[':DomainName']['profiles']['objects']['delete']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDomainsDomainNameProfilesObjectsDeleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDomainsDomainNameObjectTypesObjectTypeNameQueryKey(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['domains', '/domains/:DomainName/object-types/:ObjectTypeName', keyArgs] as const
}

export function getDomainsDomainNameObjectTypesObjectTypeNameQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getDomainsDomainNameObjectTypesObjectTypeNameQueryKey>
  >({
    queryKey: getDomainsDomainNameObjectTypesObjectTypeNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains[':DomainName']['object-types'][':ObjectTypeName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDomainsDomainNameObjectTypesObjectTypeName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getDomainsDomainNameObjectTypesObjectTypeNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDomainsDomainNameObjectTypesObjectTypeNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutDomainsDomainNameObjectTypesObjectTypeNameMutationKey() {
  return ['domains', '/domains/:DomainName/object-types/:ObjectTypeName', 'PUT'] as const
}

export function getPutDomainsDomainNameObjectTypesObjectTypeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDomainsDomainNameObjectTypesObjectTypeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$put']
      >,
    ) {
      return parseResponse(
        client.domains[':DomainName']['object-types'][':ObjectTypeName'].$put(args, options),
      )
    },
  })
}

export function createPutDomainsDomainNameObjectTypesObjectTypeName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDomainsDomainNameObjectTypesObjectTypeNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteDomainsDomainNameObjectTypesObjectTypeNameMutationKey() {
  return ['domains', '/domains/:DomainName/object-types/:ObjectTypeName', 'DELETE'] as const
}

export function getDeleteDomainsDomainNameObjectTypesObjectTypeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDomainsDomainNameObjectTypesObjectTypeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$delete']
      >,
    ) {
      return parseResponse(
        client.domains[':DomainName']['object-types'][':ObjectTypeName'].$delete(args, options),
      )
    },
  })
}

export function createDeleteDomainsDomainNameObjectTypesObjectTypeName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDomainsDomainNameObjectTypesObjectTypeNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDomainsDomainNameWorkflowsWorkflowIdQueryKey(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['domains', '/domains/:DomainName/workflows/:WorkflowId', keyArgs] as const
}

export function getDomainsDomainNameWorkflowsWorkflowIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainNameWorkflowsWorkflowIdQueryKey>
  >({
    queryKey: getDomainsDomainNameWorkflowsWorkflowIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains[':DomainName'].workflows[':WorkflowId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDomainsDomainNameWorkflowsWorkflowId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDomainsDomainNameWorkflowsWorkflowIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDomainsDomainNameWorkflowsWorkflowIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteDomainsDomainNameWorkflowsWorkflowIdMutationKey() {
  return ['domains', '/domains/:DomainName/workflows/:WorkflowId', 'DELETE'] as const
}

export function getDeleteDomainsDomainNameWorkflowsWorkflowIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDomainsDomainNameWorkflowsWorkflowIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['$delete']
      >,
    ) {
      return parseResponse(
        client.domains[':DomainName'].workflows[':WorkflowId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteDomainsDomainNameWorkflowsWorkflowId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDomainsDomainNameWorkflowsWorkflowIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDomainsDomainNameIdentityResolutionJobsAutoMergingPreviewMutationKey() {
  return [
    'domains',
    '/domains/:DomainName/identity-resolution-jobs/auto-merging-preview',
    'POST',
  ] as const
}

export function getPostDomainsDomainNameIdentityResolutionJobsAutoMergingPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.domains)[':DomainName']['identity-resolution-jobs']['auto-merging-preview']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsDomainNameIdentityResolutionJobsAutoMergingPreviewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.domains)[':DomainName']['identity-resolution-jobs']['auto-merging-preview']['$post']
      >,
    ) {
      return parseResponse(
        client.domains[':DomainName']['identity-resolution-jobs']['auto-merging-preview'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostDomainsDomainNameIdentityResolutionJobsAutoMergingPreview<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.domains)[':DomainName']['identity-resolution-jobs']['auto-merging-preview']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostDomainsDomainNameIdentityResolutionJobsAutoMergingPreviewMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDomainsDomainNameIdentityResolutionJobsJobIdQueryKey(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['identity-resolution-jobs'][':JobId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['domains', '/domains/:DomainName/identity-resolution-jobs/:JobId', keyArgs] as const
}

export function getDomainsDomainNameIdentityResolutionJobsJobIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['identity-resolution-jobs'][':JobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getDomainsDomainNameIdentityResolutionJobsJobIdQueryKey>
  >({
    queryKey: getDomainsDomainNameIdentityResolutionJobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains[':DomainName']['identity-resolution-jobs'][':JobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDomainsDomainNameIdentityResolutionJobsJobId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.domains)[':DomainName']['identity-resolution-jobs'][':JobId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getDomainsDomainNameIdentityResolutionJobsJobIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDomainsDomainNameIdentityResolutionJobsJobIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDomainsDomainNameIntegrationsQueryKey(
  args: InferRequestType<(typeof client.domains)[':DomainName']['integrations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['domains', '/domains/:DomainName/integrations', keyArgs] as const
}

export function getDomainsDomainNameIntegrationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains)[':DomainName']['integrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':DomainName']['integrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':DomainName']['integrations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainNameIntegrationsQueryKey>
  >({
    queryKey: getDomainsDomainNameIntegrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains[':DomainName'].integrations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDomainsDomainNameIntegrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains)[':DomainName']['integrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.domains)[':DomainName']['integrations']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':DomainName']['integrations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDomainsDomainNameIntegrationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDomainsDomainNameIntegrationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutDomainsDomainNameIntegrationsMutationKey() {
  return ['domains', '/domains/:DomainName/integrations', 'PUT'] as const
}

export function getPutDomainsDomainNameIntegrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':DomainName']['integrations']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':DomainName']['integrations']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDomainsDomainNameIntegrationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.domains)[':DomainName']['integrations']['$put']>,
    ) {
      return parseResponse(client.domains[':DomainName'].integrations.$put(args, options))
    },
  })
}

export function createPutDomainsDomainNameIntegrations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':DomainName']['integrations']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.domains)[':DomainName']['integrations']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDomainsDomainNameIntegrationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDomainsDomainNameIntegrationsMutationKey() {
  return ['domains', '/domains/:DomainName/integrations', 'POST'] as const
}

export function getPostDomainsDomainNameIntegrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':DomainName']['integrations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':DomainName']['integrations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsDomainNameIntegrationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.domains)[':DomainName']['integrations']['$post']>,
    ) {
      return parseResponse(client.domains[':DomainName'].integrations.$post(args, options))
    },
  })
}

export function createPostDomainsDomainNameIntegrations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':DomainName']['integrations']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.domains)[':DomainName']['integrations']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDomainsDomainNameIntegrationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDomainsDomainNameMatchesQueryKey(
  args: InferRequestType<(typeof client.domains)[':DomainName']['matches']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['domains', '/domains/:DomainName/matches', keyArgs] as const
}

export function getDomainsDomainNameMatchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains)[':DomainName']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':DomainName']['matches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':DomainName']['matches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainNameMatchesQueryKey>
  >({
    queryKey: getDomainsDomainNameMatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains[':DomainName'].matches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDomainsDomainNameMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains)[':DomainName']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.domains)[':DomainName']['matches']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':DomainName']['matches']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDomainsDomainNameMatchesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDomainsDomainNameMatchesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTemplatesTemplateIdQueryKey(
  args: InferRequestType<(typeof client.templates)[':TemplateId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['templates', '/templates/:TemplateId', keyArgs] as const
}

export function getTemplatesTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':TemplateId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':TemplateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':TemplateId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesTemplateIdQueryKey>
  >({
    queryKey: getTemplatesTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates[':TemplateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':TemplateId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.templates)[':TemplateId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':TemplateId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTemplatesTemplateIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTemplatesTemplateIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDomainsDomainNameWorkflowsWorkflowIdStepsQueryKey(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['steps']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['domains', '/domains/:DomainName/workflows/:WorkflowId/steps', keyArgs] as const
}

export function getDomainsDomainNameWorkflowsWorkflowIdStepsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['steps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getDomainsDomainNameWorkflowsWorkflowIdStepsQueryKey>
  >({
    queryKey: getDomainsDomainNameWorkflowsWorkflowIdStepsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains[':DomainName'].workflows[':WorkflowId'].steps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDomainsDomainNameWorkflowsWorkflowIdSteps<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['steps']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getDomainsDomainNameWorkflowsWorkflowIdStepsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDomainsDomainNameWorkflowsWorkflowIdStepsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostIntegrationsMutationKey() {
  return ['integrations', '/integrations', 'POST'] as const
}

export function getPostIntegrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.integrations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIntegrationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.integrations.$post>) {
      return parseResponse(client.integrations.$post(args, options))
    },
  })
}

export function createPostIntegrations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.integrations.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIntegrationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDomainsQueryKey(args: InferRequestType<typeof client.domains.$get>) {
  const { header: _, ...keyArgs } = args
  return ['domains', '/domains', keyArgs] as const
}

export function getDomainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.domains.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDomainsQueryKey>
  >({
    queryKey: getDomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.domains.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getDomainsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDomainsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDomainsDomainNameIdentityResolutionJobsQueryKey(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['identity-resolution-jobs']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['domains', '/domains/:DomainName/identity-resolution-jobs', keyArgs] as const
}

export function getDomainsDomainNameIdentityResolutionJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.domains)[':DomainName']['identity-resolution-jobs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['identity-resolution-jobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.domains)[':DomainName']['identity-resolution-jobs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainNameIdentityResolutionJobsQueryKey>
  >({
    queryKey: getDomainsDomainNameIdentityResolutionJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains[':DomainName']['identity-resolution-jobs'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDomainsDomainNameIdentityResolutionJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.domains)[':DomainName']['identity-resolution-jobs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.domains)[':DomainName']['identity-resolution-jobs']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.domains)[':DomainName']['identity-resolution-jobs']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDomainsDomainNameIdentityResolutionJobsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDomainsDomainNameIdentityResolutionJobsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getTemplatesQueryKey(args: InferRequestType<typeof client.templates.$get>) {
  const { header: _, ...keyArgs } = args
  return ['templates', '/templates', keyArgs] as const
}

export function getTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.templates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTemplatesQueryKey>
  >({
    queryKey: getTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.templates.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getTemplatesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTemplatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDomainsDomainNameObjectTypesQueryKey(
  args: InferRequestType<(typeof client.domains)[':DomainName']['object-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['domains', '/domains/:DomainName/object-types', keyArgs] as const
}

export function getDomainsDomainNameObjectTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains)[':DomainName']['object-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':DomainName']['object-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':DomainName']['object-types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainNameObjectTypesQueryKey>
  >({
    queryKey: getDomainsDomainNameObjectTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains[':DomainName']['object-types'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDomainsDomainNameObjectTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains)[':DomainName']['object-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.domains)[':DomainName']['object-types']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':DomainName']['object-types']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDomainsDomainNameObjectTypesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDomainsDomainNameObjectTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutDomainsDomainNameProfilesObjectsMutationKey() {
  return ['domains', '/domains/:DomainName/profiles/objects', 'PUT'] as const
}

export function getPutDomainsDomainNameProfilesObjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':DomainName']['profiles']['objects']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':DomainName']['profiles']['objects']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDomainsDomainNameProfilesObjectsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.domains)[':DomainName']['profiles']['objects']['$put']>,
    ) {
      return parseResponse(client.domains[':DomainName'].profiles.objects.$put(args, options))
    },
  })
}

export function createPutDomainsDomainNameProfilesObjects<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.domains)[':DomainName']['profiles']['objects']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.domains)[':DomainName']['profiles']['objects']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDomainsDomainNameProfilesObjectsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDomainsDomainNameProfilesObjectsMutationKey() {
  return ['domains', '/domains/:DomainName/profiles/objects', 'POST'] as const
}

export function getPostDomainsDomainNameProfilesObjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.domains)[':DomainName']['profiles']['objects']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsDomainNameProfilesObjectsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.domains)[':DomainName']['profiles']['objects']['$post']
      >,
    ) {
      return parseResponse(client.domains[':DomainName'].profiles.objects.$post(args, options))
    },
  })
}

export function createPostDomainsDomainNameProfilesObjects<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<(typeof client.domains)[':DomainName']['profiles']['objects']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDomainsDomainNameProfilesObjectsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTagsResourceArnQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function createPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDomainsDomainNameWorkflowsMutationKey() {
  return ['domains', '/domains/:DomainName/workflows', 'POST'] as const
}

export function getPostDomainsDomainNameWorkflowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':DomainName']['workflows']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':DomainName']['workflows']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsDomainNameWorkflowsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.domains)[':DomainName']['workflows']['$post']>,
    ) {
      return parseResponse(client.domains[':DomainName'].workflows.$post(args, options))
    },
  })
}

export function createPostDomainsDomainNameWorkflows<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':DomainName']['workflows']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.domains)[':DomainName']['workflows']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDomainsDomainNameWorkflowsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDomainsDomainNameProfilesObjectsMergeMutationKey() {
  return ['domains', '/domains/:DomainName/profiles/objects/merge', 'POST'] as const
}

export function getPostDomainsDomainNameProfilesObjectsMergeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.domains)[':DomainName']['profiles']['objects']['merge']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsDomainNameProfilesObjectsMergeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.domains)[':DomainName']['profiles']['objects']['merge']['$post']
      >,
    ) {
      return parseResponse(
        client.domains[':DomainName'].profiles.objects.merge.$post(args, options),
      )
    },
  })
}

export function createPostDomainsDomainNameProfilesObjectsMerge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.domains)[':DomainName']['profiles']['objects']['merge']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDomainsDomainNameProfilesObjectsMergeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDomainsDomainNameProfilesSearchMutationKey() {
  return ['domains', '/domains/:DomainName/profiles/search', 'POST'] as const
}

export function getPostDomainsDomainNameProfilesSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':DomainName']['profiles']['search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':DomainName']['profiles']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsDomainNameProfilesSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.domains)[':DomainName']['profiles']['search']['$post']>,
    ) {
      return parseResponse(client.domains[':DomainName'].profiles.search.$post(args, options))
    },
  })
}

export function createPostDomainsDomainNameProfilesSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.domains)[':DomainName']['profiles']['search']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.domains)[':DomainName']['profiles']['search']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDomainsDomainNameProfilesSearchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function createDeleteTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
