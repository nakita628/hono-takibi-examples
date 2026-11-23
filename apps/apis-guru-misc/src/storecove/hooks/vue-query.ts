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

export function getDiscoveryKey() {
  return ['discovery'] as const
}

export function getDocumentSubmissionsKey() {
  return ['document_submissions'] as const
}

export function getInvoiceSubmissionsKey() {
  return ['invoice_submissions'] as const
}

export function getLegalEntitiesKey() {
  return ['legal_entities'] as const
}

export function getPurchaseInvoicesKey() {
  return ['purchase_invoices'] as const
}

export function getReceivedDocumentsKey() {
  return ['received_documents'] as const
}

export function getWebhookInstancesKey() {
  return ['webhook_instances'] as const
}

export function getPostDiscoveryExistsMutationKey() {
  return ['discovery', '/discovery/exists', 'POST'] as const
}

export function getPostDiscoveryExistsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discovery.exists.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.discovery.exists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDiscoveryExistsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.discovery.exists.$post>) {
      return parseResponse(client.discovery.exists.$post(args, options))
    },
  })
}

export function usePostDiscoveryExists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.discovery.exists.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.discovery.exists.$post>,
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
  const mutationDefaults = getPostDiscoveryExistsMutationOptions<TError, TOnMutateResult>(
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

export function getDiscoveryIdentifiersQueryKey() {
  return ['discovery', '/discovery/identifiers'] as const
}

export function getDiscoveryIdentifiersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDiscoveryIdentifiersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discovery.identifiers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoveryIdentifiers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discovery.identifiers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.discovery.identifiers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.discovery.identifiers.$get>>>
            >
          >,
          ReturnType<typeof getDiscoveryIdentifiersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.discovery.identifiers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoveryIdentifiersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDiscoveryIdentifiersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.discovery.identifiers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDiscoveryReceivesMutationKey() {
  return ['discovery', '/discovery/receives', 'POST'] as const
}

export function getPostDiscoveryReceivesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discovery.receives.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.discovery.receives.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDiscoveryReceivesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.discovery.receives.$post>) {
      return parseResponse(client.discovery.receives.$post(args, options))
    },
  })
}

export function usePostDiscoveryReceives<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.discovery.receives.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.discovery.receives.$post>,
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
  const mutationDefaults = getPostDiscoveryReceivesMutationOptions<TError, TOnMutateResult>(
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

export function getPostDocumentSubmissionsMutationKey() {
  return ['document_submissions', '/document_submissions', 'POST'] as const
}

export function getPostDocumentSubmissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.document_submissions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.document_submissions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentSubmissionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.document_submissions.$post>) {
      return parseResponse(client.document_submissions.$post(args, options))
    },
  })
}

export function usePostDocumentSubmissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.document_submissions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.document_submissions.$post>,
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
  const mutationDefaults = getPostDocumentSubmissionsMutationOptions<TError, TOnMutateResult>(
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

export function getDocumentSubmissionsGuidEvidenceEvidenceTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.document_submissions)[':guid']['evidence'][':evidence_type']['$get']
    >
  >,
) {
  return [
    'document_submissions',
    '/document_submissions/:guid/evidence/:evidence_type',
    toValue(args),
  ] as const
}

export function getDocumentSubmissionsGuidEvidenceEvidenceTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.document_submissions)[':guid']['evidence'][':evidence_type']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentSubmissionsGuidEvidenceEvidenceTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.document_submissions[':guid'].evidence[':evidence_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDocumentSubmissionsGuidEvidenceEvidenceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.document_submissions)[':guid']['evidence'][':evidence_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.document_submissions)[':guid']['evidence'][':evidence_type']['$get']
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
                    (typeof client.document_submissions)[':guid']['evidence'][':evidence_type']['$get']
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
                    (typeof client.document_submissions)[':guid']['evidence'][':evidence_type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDocumentSubmissionsGuidEvidenceEvidenceTypeQueryKey>
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
              (typeof client.document_submissions)[':guid']['evidence'][':evidence_type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentSubmissionsGuidEvidenceEvidenceTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentSubmissionsGuidEvidenceEvidenceTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.document_submissions[':guid'].evidence[':evidence_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostInvoiceSubmissionsMutationKey() {
  return ['invoice_submissions', '/invoice_submissions', 'POST'] as const
}

export function getPostInvoiceSubmissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoice_submissions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.invoice_submissions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvoiceSubmissionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invoice_submissions.$post>) {
      return parseResponse(client.invoice_submissions.$post(args, options))
    },
  })
}

export function usePostInvoiceSubmissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.invoice_submissions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.invoice_submissions.$post>,
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
  const mutationDefaults = getPostInvoiceSubmissionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostInvoiceSubmissionsPreflightMutationKey() {
  return ['invoice_submissions', '/invoice_submissions/preflight', 'POST'] as const
}

export function getPostInvoiceSubmissionsPreflightMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.invoice_submissions.preflight.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.invoice_submissions.preflight.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvoiceSubmissionsPreflightMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invoice_submissions.preflight.$post>) {
      return parseResponse(client.invoice_submissions.preflight.$post(args, options))
    },
  })
}

export function usePostInvoiceSubmissionsPreflight<
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
                Awaited<ReturnType<typeof client.invoice_submissions.preflight.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.invoice_submissions.preflight.$post>,
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
  const mutationDefaults = getPostInvoiceSubmissionsPreflightMutationOptions<
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

export function getInvoiceSubmissionsGuidEvidenceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.invoice_submissions)[':guid']['evidence']['$get']>
  >,
) {
  return ['invoice_submissions', '/invoice_submissions/:guid/evidence', toValue(args)] as const
}

export function getInvoiceSubmissionsGuidEvidenceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.invoice_submissions)[':guid']['evidence']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvoiceSubmissionsGuidEvidenceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.invoice_submissions[':guid'].evidence.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInvoiceSubmissionsGuidEvidence<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.invoice_submissions)[':guid']['evidence']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.invoice_submissions)[':guid']['evidence']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.invoice_submissions)[':guid']['evidence']['$get']>
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
                  ReturnType<(typeof client.invoice_submissions)[':guid']['evidence']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getInvoiceSubmissionsGuidEvidenceQueryKey>
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
          Awaited<ReturnType<(typeof client.invoice_submissions)[':guid']['evidence']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvoiceSubmissionsGuidEvidenceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvoiceSubmissionsGuidEvidenceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.invoice_submissions[':guid'].evidence.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLegalEntitiesMutationKey() {
  return ['legal_entities', '/legal_entities', 'POST'] as const
}

export function getPostLegalEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.legal_entities.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.legal_entities.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLegalEntitiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.legal_entities.$post>) {
      return parseResponse(client.legal_entities.$post(args, options))
    },
  })
}

export function usePostLegalEntities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.legal_entities.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.legal_entities.$post>,
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
  const mutationDefaults = getPostLegalEntitiesMutationOptions<TError, TOnMutateResult>(
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

export function getLegalEntitiesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.legal_entities)[':id']['$get']>>,
) {
  return ['legal_entities', '/legal_entities/:id', toValue(args)] as const
}

export function getLegalEntitiesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.legal_entities)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLegalEntitiesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.legal_entities[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLegalEntitiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.legal_entities)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.legal_entities)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.legal_entities)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.legal_entities)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLegalEntitiesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.legal_entities)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLegalEntitiesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLegalEntitiesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.legal_entities[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteLegalEntitiesIdMutationKey() {
  return ['legal_entities', '/legal_entities/:id', 'DELETE'] as const
}

export function getDeleteLegalEntitiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.legal_entities)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.legal_entities)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLegalEntitiesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.legal_entities)[':id']['$delete']>) {
      return parseResponse(client.legal_entities[':id'].$delete(args, options))
    },
  })
}

export function useDeleteLegalEntitiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.legal_entities)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.legal_entities)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteLegalEntitiesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchLegalEntitiesIdMutationKey() {
  return ['legal_entities', '/legal_entities/:id', 'PATCH'] as const
}

export function getPatchLegalEntitiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.legal_entities)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.legal_entities)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchLegalEntitiesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.legal_entities)[':id']['$patch']>) {
      return parseResponse(client.legal_entities[':id'].$patch(args, options))
    },
  })
}

export function usePatchLegalEntitiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.legal_entities)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.legal_entities)[':id']['$patch']>,
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
  const mutationDefaults = getPatchLegalEntitiesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersMutationKey() {
  return [
    'legal_entities',
    '/legal_entities/:legal_entity_id/additional_tax_identifiers',
    'POST',
  ] as const
}

export function getPostLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers']['$post']
      >,
    ) {
      return parseResponse(
        client.legal_entities[':legal_entity_id'].additional_tax_identifiers.$post(args, options),
      )
    },
  })
}

export function usePostLegalEntitiesLegalEntityIdAdditionalTaxIdentifiers<
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
                    (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers']['$post']
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
  const mutationDefaults = getPostLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersMutationOptions<
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

export function getLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$get']
    >
  >,
) {
  return [
    'legal_entities',
    '/legal_entities/:legal_entity_id/additional_tax_identifiers/:id',
    toValue(args),
  ] as const
}

export function getLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.legal_entities[':legal_entity_id'].additional_tax_identifiers[':id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$get']
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
                    (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$get']
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
                    (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdQueryKey>
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
              (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.legal_entities[':legal_entity_id'].additional_tax_identifiers[':id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdMutationKey() {
  return [
    'legal_entities',
    '/legal_entities/:legal_entity_id/additional_tax_identifiers/:id',
    'DELETE',
  ] as const
}

export function getDeleteLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.legal_entities[':legal_entity_id'].additional_tax_identifiers[':id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$delete']
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
    getDeleteLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdMutationOptions<
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

export function getPatchLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdMutationKey() {
  return [
    'legal_entities',
    '/legal_entities/:legal_entity_id/additional_tax_identifiers/:id',
    'PATCH',
  ] as const
}

export function getPatchLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.legal_entities[':legal_entity_id'].additional_tax_identifiers[':id'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersId<
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
                    (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$patch']
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
    getPatchLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdMutationOptions<
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

export function getPostLegalEntitiesLegalEntityIdAdministrationsMutationKey() {
  return ['legal_entities', '/legal_entities/:legal_entity_id/administrations', 'POST'] as const
}

export function getPostLegalEntitiesLegalEntityIdAdministrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.legal_entities)[':legal_entity_id']['administrations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.legal_entities)[':legal_entity_id']['administrations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLegalEntitiesLegalEntityIdAdministrationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.legal_entities)[':legal_entity_id']['administrations']['$post']
      >,
    ) {
      return parseResponse(
        client.legal_entities[':legal_entity_id'].administrations.$post(args, options),
      )
    },
  })
}

export function usePostLegalEntitiesLegalEntityIdAdministrations<
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
                    (typeof client.legal_entities)[':legal_entity_id']['administrations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.legal_entities)[':legal_entity_id']['administrations']['$post']
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
  const mutationDefaults = getPostLegalEntitiesLegalEntityIdAdministrationsMutationOptions<
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

export function getLegalEntitiesLegalEntityIdAdministrationsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$get']
    >
  >,
) {
  return [
    'legal_entities',
    '/legal_entities/:legal_entity_id/administrations/:id',
    toValue(args),
  ] as const
}

export function getLegalEntitiesLegalEntityIdAdministrationsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLegalEntitiesLegalEntityIdAdministrationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.legal_entities[':legal_entity_id'].administrations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLegalEntitiesLegalEntityIdAdministrationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$get']
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
                    (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$get']
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
                    (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLegalEntitiesLegalEntityIdAdministrationsIdQueryKey>
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
              (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLegalEntitiesLegalEntityIdAdministrationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLegalEntitiesLegalEntityIdAdministrationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.legal_entities[':legal_entity_id'].administrations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteLegalEntitiesLegalEntityIdAdministrationsIdMutationKey() {
  return [
    'legal_entities',
    '/legal_entities/:legal_entity_id/administrations/:id',
    'DELETE',
  ] as const
}

export function getDeleteLegalEntitiesLegalEntityIdAdministrationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteLegalEntitiesLegalEntityIdAdministrationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.legal_entities[':legal_entity_id'].administrations[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteLegalEntitiesLegalEntityIdAdministrationsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$delete']
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
  const mutationDefaults = getDeleteLegalEntitiesLegalEntityIdAdministrationsIdMutationOptions<
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

export function getPatchLegalEntitiesLegalEntityIdAdministrationsIdMutationKey() {
  return [
    'legal_entities',
    '/legal_entities/:legal_entity_id/administrations/:id',
    'PATCH',
  ] as const
}

export function getPatchLegalEntitiesLegalEntityIdAdministrationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchLegalEntitiesLegalEntityIdAdministrationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.legal_entities[':legal_entity_id'].administrations[':id'].$patch(args, options),
      )
    },
  })
}

export function usePatchLegalEntitiesLegalEntityIdAdministrationsId<
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
                    (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$patch']
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
  const mutationDefaults = getPatchLegalEntitiesLegalEntityIdAdministrationsIdMutationOptions<
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

export function getPostLegalEntitiesLegalEntityIdPeppolIdentifiersMutationKey() {
  return ['legal_entities', '/legal_entities/:legal_entity_id/peppol_identifiers', 'POST'] as const
}

export function getPostLegalEntitiesLegalEntityIdPeppolIdentifiersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.legal_entities)[':legal_entity_id']['peppol_identifiers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.legal_entities)[':legal_entity_id']['peppol_identifiers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLegalEntitiesLegalEntityIdPeppolIdentifiersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.legal_entities)[':legal_entity_id']['peppol_identifiers']['$post']
      >,
    ) {
      return parseResponse(
        client.legal_entities[':legal_entity_id'].peppol_identifiers.$post(args, options),
      )
    },
  })
}

export function usePostLegalEntitiesLegalEntityIdPeppolIdentifiers<
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
                    (typeof client.legal_entities)[':legal_entity_id']['peppol_identifiers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.legal_entities)[':legal_entity_id']['peppol_identifiers']['$post']
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
  const mutationDefaults = getPostLegalEntitiesLegalEntityIdPeppolIdentifiersMutationOptions<
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

export function getDeleteLegalEntitiesLegalEntityIdPeppolIdentifiersSuperschemeSchemeIdentifierMutationKey() {
  return [
    'legal_entities',
    '/legal_entities/:legal_entity_id/peppol_identifiers/:superscheme/:scheme/:identifier',
    'DELETE',
  ] as const
}

export function getDeleteLegalEntitiesLegalEntityIdPeppolIdentifiersSuperschemeSchemeIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.legal_entities)[':legal_entity_id']['peppol_identifiers'][':superscheme'][':scheme'][':identifier']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.legal_entities)[':legal_entity_id']['peppol_identifiers'][':superscheme'][':scheme'][':identifier']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteLegalEntitiesLegalEntityIdPeppolIdentifiersSuperschemeSchemeIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.legal_entities)[':legal_entity_id']['peppol_identifiers'][':superscheme'][':scheme'][':identifier']['$delete']
      >,
    ) {
      return parseResponse(
        client.legal_entities[':legal_entity_id'].peppol_identifiers[':superscheme'][':scheme'][
          ':identifier'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteLegalEntitiesLegalEntityIdPeppolIdentifiersSuperschemeSchemeIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.legal_entities)[':legal_entity_id']['peppol_identifiers'][':superscheme'][':scheme'][':identifier']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.legal_entities)[':legal_entity_id']['peppol_identifiers'][':superscheme'][':scheme'][':identifier']['$delete']
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
    getDeleteLegalEntitiesLegalEntityIdPeppolIdentifiersSuperschemeSchemeIdentifierMutationOptions<
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

export function getPostLegalEntitiesLegalEntityIdReceivedDocumentsMutationKey() {
  return ['legal_entities', '/legal_entities/:legal_entity_id/received_documents', 'POST'] as const
}

export function getPostLegalEntitiesLegalEntityIdReceivedDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.legal_entities)[':legal_entity_id']['received_documents']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.legal_entities)[':legal_entity_id']['received_documents']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLegalEntitiesLegalEntityIdReceivedDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.legal_entities)[':legal_entity_id']['received_documents']['$post']
      >,
    ) {
      return parseResponse(
        client.legal_entities[':legal_entity_id'].received_documents.$post(args, options),
      )
    },
  })
}

export function usePostLegalEntitiesLegalEntityIdReceivedDocuments<
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
                    (typeof client.legal_entities)[':legal_entity_id']['received_documents']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.legal_entities)[':legal_entity_id']['received_documents']['$post']
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
  const mutationDefaults = getPostLegalEntitiesLegalEntityIdReceivedDocumentsMutationOptions<
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

export function getPurchaseInvoicesGuidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.purchase_invoices)[':guid']['$get']>>,
) {
  return ['purchase_invoices', '/purchase_invoices/:guid', toValue(args)] as const
}

export function getPurchaseInvoicesGuidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.purchase_invoices)[':guid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPurchaseInvoicesGuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.purchase_invoices[':guid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePurchaseInvoicesGuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.purchase_invoices)[':guid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.purchase_invoices)[':guid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.purchase_invoices)[':guid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.purchase_invoices)[':guid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPurchaseInvoicesGuidQueryKey>
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
          Awaited<ReturnType<(typeof client.purchase_invoices)[':guid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPurchaseInvoicesGuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPurchaseInvoicesGuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.purchase_invoices[':guid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPurchaseInvoicesGuidPackagingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.purchase_invoices)[':guid'][':packaging']['$get']>
  >,
) {
  return ['purchase_invoices', '/purchase_invoices/:guid/:packaging', toValue(args)] as const
}

export function getPurchaseInvoicesGuidPackagingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.purchase_invoices)[':guid'][':packaging']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPurchaseInvoicesGuidPackagingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.purchase_invoices[':guid'][':packaging'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePurchaseInvoicesGuidPackaging<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.purchase_invoices)[':guid'][':packaging']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.purchase_invoices)[':guid'][':packaging']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.purchase_invoices)[':guid'][':packaging']['$get']>
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
                  ReturnType<(typeof client.purchase_invoices)[':guid'][':packaging']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPurchaseInvoicesGuidPackagingQueryKey>
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
          Awaited<ReturnType<(typeof client.purchase_invoices)[':guid'][':packaging']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPurchaseInvoicesGuidPackagingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPurchaseInvoicesGuidPackagingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.purchase_invoices[':guid'][':packaging'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPurchaseInvoicesGuidPackagingPackageVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.purchase_invoices)[':guid'][':packaging'][':package_version']['$get']
    >
  >,
) {
  return [
    'purchase_invoices',
    '/purchase_invoices/:guid/:packaging/:package_version',
    toValue(args),
  ] as const
}

export function getPurchaseInvoicesGuidPackagingPackageVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.purchase_invoices)[':guid'][':packaging'][':package_version']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPurchaseInvoicesGuidPackagingPackageVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.purchase_invoices[':guid'][':packaging'][':package_version'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePurchaseInvoicesGuidPackagingPackageVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.purchase_invoices)[':guid'][':packaging'][':package_version']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.purchase_invoices)[':guid'][':packaging'][':package_version']['$get']
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
                    (typeof client.purchase_invoices)[':guid'][':packaging'][':package_version']['$get']
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
                    (typeof client.purchase_invoices)[':guid'][':packaging'][':package_version']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPurchaseInvoicesGuidPackagingPackageVersionQueryKey>
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
              (typeof client.purchase_invoices)[':guid'][':packaging'][':package_version']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPurchaseInvoicesGuidPackagingPackageVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPurchaseInvoicesGuidPackagingPackageVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.purchase_invoices[':guid'][':packaging'][':package_version'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostReceivedDocumentsMutationKey() {
  return ['received_documents', '/received_documents', 'POST'] as const
}

export function getPostReceivedDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.received_documents.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.received_documents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReceivedDocumentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.received_documents.$post>) {
      return parseResponse(client.received_documents.$post(args, options))
    },
  })
}

export function usePostReceivedDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.received_documents.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.received_documents.$post>,
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
  const mutationDefaults = getPostReceivedDocumentsMutationOptions<TError, TOnMutateResult>(
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

export function getReceivedDocumentsGuidFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.received_documents)[':guid'][':format']['$get']>
  >,
) {
  return ['received_documents', '/received_documents/:guid/:format', toValue(args)] as const
}

export function getReceivedDocumentsGuidFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.received_documents)[':guid'][':format']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReceivedDocumentsGuidFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.received_documents[':guid'][':format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReceivedDocumentsGuidFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.received_documents)[':guid'][':format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.received_documents)[':guid'][':format']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.received_documents)[':guid'][':format']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.received_documents)[':guid'][':format']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReceivedDocumentsGuidFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.received_documents)[':guid'][':format']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReceivedDocumentsGuidFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReceivedDocumentsGuidFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.received_documents[':guid'][':format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebhookInstancesIndexQueryKey() {
  return ['webhook_instances', '/webhook_instances/'] as const
}

export function getWebhookInstancesIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWebhookInstancesIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhook_instances.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhookInstancesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.webhook_instances.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhook_instances.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhook_instances.index.$get>>>
            >
          >,
          ReturnType<typeof getWebhookInstancesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.webhook_instances.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhookInstancesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWebhookInstancesIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.webhook_instances.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteWebhookInstancesGuidMutationKey() {
  return ['webhook_instances', '/webhook_instances/:guid', 'DELETE'] as const
}

export function getDeleteWebhookInstancesGuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_instances)[':guid']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.webhook_instances)[':guid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhookInstancesGuidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhook_instances)[':guid']['$delete']>,
    ) {
      return parseResponse(client.webhook_instances[':guid'].$delete(args, options))
    },
  })
}

export function useDeleteWebhookInstancesGuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.webhook_instances)[':guid']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.webhook_instances)[':guid']['$delete']>,
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
  const mutationDefaults = getDeleteWebhookInstancesGuidMutationOptions<TError, TOnMutateResult>(
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
