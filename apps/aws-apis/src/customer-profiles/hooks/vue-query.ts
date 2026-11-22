import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function usePostDomainsDomainNameProfilesKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsDomainNameProfilesKeysMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDomainsDomainNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':DomainName']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['domains', '/domains/:DomainName', keyArgs] as const
}

export function getDomainsDomainNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':DomainName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsDomainNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains[':DomainName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':DomainName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':DomainName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':DomainName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':DomainName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDomainsDomainNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':DomainName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsDomainNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains[':DomainName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutDomainsDomainName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDomainsDomainNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostDomainsDomainName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsDomainNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteDomainsDomainName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDomainsDomainNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostDomainsDomainNameWorkflowsIntegrations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsDomainNameWorkflowsIntegrationsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutDomainsDomainNameProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDomainsDomainNameProfilesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostDomainsDomainNameProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsDomainNameProfilesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostDomainsDomainNameIntegrationsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsDomainNameIntegrationsDeleteMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostDomainsDomainNameProfilesDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsDomainNameProfilesDeleteMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostDomainsDomainNameProfilesKeysDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsDomainNameProfilesKeysDeleteMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostDomainsDomainNameProfilesObjectsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsDomainNameProfilesObjectsDeleteMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDomainsDomainNameObjectTypesObjectTypeNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['domains', '/domains/:DomainName/object-types/:ObjectTypeName', keyArgs] as const
}

export function getDomainsDomainNameObjectTypesObjectTypeNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsDomainNameObjectTypesObjectTypeNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains[':DomainName']['object-types'][':ObjectTypeName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsDomainNameObjectTypesObjectTypeName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getDomainsDomainNameObjectTypesObjectTypeNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsDomainNameObjectTypesObjectTypeNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains[':DomainName']['object-types'][':ObjectTypeName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutDomainsDomainNameObjectTypesObjectTypeName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDomainsDomainNameObjectTypesObjectTypeNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteDomainsDomainNameObjectTypesObjectTypeName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDomainsDomainNameObjectTypesObjectTypeNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDomainsDomainNameWorkflowsWorkflowIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['domains', '/domains/:DomainName/workflows/:WorkflowId', keyArgs] as const
}

export function getDomainsDomainNameWorkflowsWorkflowIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsDomainNameWorkflowsWorkflowIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains[':DomainName'].workflows[':WorkflowId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsDomainNameWorkflowsWorkflowId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getDomainsDomainNameWorkflowsWorkflowIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsDomainNameWorkflowsWorkflowIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains[':DomainName'].workflows[':WorkflowId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteDomainsDomainNameWorkflowsWorkflowId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDomainsDomainNameWorkflowsWorkflowIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostDomainsDomainNameIdentityResolutionJobsAutoMergingPreview<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostDomainsDomainNameIdentityResolutionJobsAutoMergingPreviewMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDomainsDomainNameIdentityResolutionJobsJobIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.domains)[':DomainName']['identity-resolution-jobs'][':JobId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['domains', '/domains/:DomainName/identity-resolution-jobs/:JobId', keyArgs] as const
}

export function getDomainsDomainNameIdentityResolutionJobsJobIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.domains)[':DomainName']['identity-resolution-jobs'][':JobId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsDomainNameIdentityResolutionJobsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains[':DomainName']['identity-resolution-jobs'][':JobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsDomainNameIdentityResolutionJobsJobId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.domains)[':DomainName']['identity-resolution-jobs'][':JobId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getDomainsDomainNameIdentityResolutionJobsJobIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsDomainNameIdentityResolutionJobsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains[':DomainName']['identity-resolution-jobs'][':JobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDomainsDomainNameIntegrationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domains)[':DomainName']['integrations']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['domains', '/domains/:DomainName/integrations', keyArgs] as const
}

export function getDomainsDomainNameIntegrationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domains)[':DomainName']['integrations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsDomainNameIntegrationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains[':DomainName'].integrations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsDomainNameIntegrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains)[':DomainName']['integrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domains)[':DomainName']['integrations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':DomainName']['integrations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':DomainName']['integrations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDomainsDomainNameIntegrationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsDomainNameIntegrationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains[':DomainName'].integrations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutDomainsDomainNameIntegrations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDomainsDomainNameIntegrationsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostDomainsDomainNameIntegrations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsDomainNameIntegrationsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDomainsDomainNameMatchesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domains)[':DomainName']['matches']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['domains', '/domains/:DomainName/matches', keyArgs] as const
}

export function getDomainsDomainNameMatchesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domains)[':DomainName']['matches']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsDomainNameMatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains[':DomainName'].matches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsDomainNameMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains)[':DomainName']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domains)[':DomainName']['matches']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':DomainName']['matches']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':DomainName']['matches']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDomainsDomainNameMatchesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsDomainNameMatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains[':DomainName'].matches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTemplatesTemplateIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.templates)[':TemplateId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['templates', '/templates/:TemplateId', keyArgs] as const
}

export function getTemplatesTemplateIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.templates)[':TemplateId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplatesTemplateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates[':TemplateId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':TemplateId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.templates)[':TemplateId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':TemplateId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':TemplateId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTemplatesTemplateIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':TemplateId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesTemplateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplatesTemplateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.templates[':TemplateId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDomainsDomainNameWorkflowsWorkflowIdStepsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['steps']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['domains', '/domains/:DomainName/workflows/:WorkflowId/steps', keyArgs] as const
}

export function getDomainsDomainNameWorkflowsWorkflowIdStepsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['steps']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsDomainNameWorkflowsWorkflowIdStepsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains[':DomainName'].workflows[':WorkflowId'].steps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsDomainNameWorkflowsWorkflowIdSteps<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['steps']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getDomainsDomainNameWorkflowsWorkflowIdStepsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsDomainNameWorkflowsWorkflowIdStepsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains[':DomainName'].workflows[':WorkflowId'].steps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostIntegrations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.integrations.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIntegrationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDomainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['domains', '/domains', keyArgs] as const
}

export function getDomainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
          >,
          ReturnType<typeof getDomainsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDomainsDomainNameIdentityResolutionJobsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domains)[':DomainName']['identity-resolution-jobs']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['domains', '/domains/:DomainName/identity-resolution-jobs', keyArgs] as const
}

export function getDomainsDomainNameIdentityResolutionJobsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domains)[':DomainName']['identity-resolution-jobs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsDomainNameIdentityResolutionJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains[':DomainName']['identity-resolution-jobs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsDomainNameIdentityResolutionJobs<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domains)[':DomainName']['identity-resolution-jobs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getDomainsDomainNameIdentityResolutionJobsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsDomainNameIdentityResolutionJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains[':DomainName']['identity-resolution-jobs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['templates', '/templates', keyArgs] as const
}

export function getTemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
          >,
          ReturnType<typeof getTemplatesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDomainsDomainNameObjectTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domains)[':DomainName']['object-types']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['domains', '/domains/:DomainName/object-types', keyArgs] as const
}

export function getDomainsDomainNameObjectTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domains)[':DomainName']['object-types']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsDomainNameObjectTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains[':DomainName']['object-types'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsDomainNameObjectTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains)[':DomainName']['object-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domains)[':DomainName']['object-types']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':DomainName']['object-types']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':DomainName']['object-types']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDomainsDomainNameObjectTypesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsDomainNameObjectTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains[':DomainName']['object-types'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutDomainsDomainNameProfilesObjects<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDomainsDomainNameProfilesObjectsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostDomainsDomainNameProfilesObjects<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsDomainNameProfilesObjectsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostDomainsDomainNameWorkflows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsDomainNameWorkflowsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostDomainsDomainNameProfilesObjectsMerge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsDomainNameProfilesObjectsMergeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostDomainsDomainNameProfilesSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsDomainNameProfilesSearchMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
