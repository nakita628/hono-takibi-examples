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

export function injectPostDiscoveryExists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.discovery.exists.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.discovery.exists.$post>,
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
    const mutationDefaults = getPostDiscoveryExistsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDiscoveryIdentifiersQueryKey() {
  return ['discovery', '/discovery/identifiers'] as const
}

export function getDiscoveryIdentifiersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discovery.identifiers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.discovery.identifiers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoveryIdentifiersQueryKey>
  >({
    queryKey: getDiscoveryIdentifiersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.discovery.identifiers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDiscoveryIdentifiers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discovery.identifiers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.discovery.identifiers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDiscoveryIdentifiersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDiscoveryIdentifiersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostDiscoveryReceives<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.discovery.receives.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.discovery.receives.$post>,
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
    const mutationDefaults = getPostDiscoveryReceivesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostDocumentSubmissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.document_submissions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.document_submissions.$post>,
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
    const mutationDefaults = getPostDocumentSubmissionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDocumentSubmissionsGuidEvidenceEvidenceTypeQueryKey(
  args: InferRequestType<
    (typeof client.document_submissions)[':guid']['evidence'][':evidence_type']['$get']
  >,
) {
  return [
    'document_submissions',
    '/document_submissions/:guid/evidence/:evidence_type',
    args,
  ] as const
}

export function getDocumentSubmissionsGuidEvidenceEvidenceTypeQueryOptions<
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
  args: InferRequestType<
    (typeof client.document_submissions)[':guid']['evidence'][':evidence_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDocumentSubmissionsGuidEvidenceEvidenceTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.document_submissions[':guid'].evidence[':evidence_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDocumentSubmissionsGuidEvidenceEvidenceType<
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
  args: () => InferRequestType<
    (typeof client.document_submissions)[':guid']['evidence'][':evidence_type']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDocumentSubmissionsGuidEvidenceEvidenceTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostInvoiceSubmissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.invoice_submissions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.invoice_submissions.$post>,
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
    const mutationDefaults = getPostInvoiceSubmissionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostInvoiceSubmissionsPreflight<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInvoiceSubmissionsPreflightMutationOptions<
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

export function getInvoiceSubmissionsGuidEvidenceQueryKey(
  args: InferRequestType<(typeof client.invoice_submissions)[':guid']['evidence']['$get']>,
) {
  return ['invoice_submissions', '/invoice_submissions/:guid/evidence', args] as const
}

export function getInvoiceSubmissionsGuidEvidenceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.invoice_submissions)[':guid']['evidence']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.invoice_submissions)[':guid']['evidence']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getInvoiceSubmissionsGuidEvidenceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invoice_submissions[':guid'].evidence.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectInvoiceSubmissionsGuidEvidence<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.invoice_submissions)[':guid']['evidence']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.invoice_submissions)[':guid']['evidence']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getInvoiceSubmissionsGuidEvidenceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostLegalEntities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.legal_entities.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.legal_entities.$post>,
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
    const mutationDefaults = getPostLegalEntitiesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLegalEntitiesIdQueryKey(
  args: InferRequestType<(typeof client.legal_entities)[':id']['$get']>,
) {
  return ['legal_entities', '/legal_entities/:id', args] as const
}

export function getLegalEntitiesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.legal_entities)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.legal_entities)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.legal_entities)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLegalEntitiesIdQueryKey>
  >({
    queryKey: getLegalEntitiesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.legal_entities[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLegalEntitiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.legal_entities)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.legal_entities)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.legal_entities)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLegalEntitiesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLegalEntitiesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteLegalEntitiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLegalEntitiesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchLegalEntitiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchLegalEntitiesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostLegalEntitiesLegalEntityIdAdditionalTaxIdentifiers<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersMutationOptions<
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

export function getLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdQueryKey(
  args: InferRequestType<
    (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$get']
  >,
) {
  return [
    'legal_entities',
    '/legal_entities/:legal_entity_id/additional_tax_identifiers/:id',
    args,
  ] as const
}

export function getLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.legal_entities[':legal_entity_id'].additional_tax_identifiers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersId<
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
  args: () => InferRequestType<
    (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdMutationOptions<
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

export function injectPatchLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdMutationOptions<
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

export function injectPostLegalEntitiesLegalEntityIdAdministrations<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLegalEntitiesLegalEntityIdAdministrationsMutationOptions<
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

export function getLegalEntitiesLegalEntityIdAdministrationsIdQueryKey(
  args: InferRequestType<
    (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$get']
  >,
) {
  return ['legal_entities', '/legal_entities/:legal_entity_id/administrations/:id', args] as const
}

export function getLegalEntitiesLegalEntityIdAdministrationsIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLegalEntitiesLegalEntityIdAdministrationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.legal_entities[':legal_entity_id'].administrations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLegalEntitiesLegalEntityIdAdministrationsId<
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
  args: () => InferRequestType<
    (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getLegalEntitiesLegalEntityIdAdministrationsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteLegalEntitiesLegalEntityIdAdministrationsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLegalEntitiesLegalEntityIdAdministrationsIdMutationOptions<
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

export function injectPatchLegalEntitiesLegalEntityIdAdministrationsId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchLegalEntitiesLegalEntityIdAdministrationsIdMutationOptions<
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

export function injectPostLegalEntitiesLegalEntityIdPeppolIdentifiers<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLegalEntitiesLegalEntityIdPeppolIdentifiersMutationOptions<
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

export function injectDeleteLegalEntitiesLegalEntityIdPeppolIdentifiersSuperschemeSchemeIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteLegalEntitiesLegalEntityIdPeppolIdentifiersSuperschemeSchemeIdentifierMutationOptions<
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

export function injectPostLegalEntitiesLegalEntityIdReceivedDocuments<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLegalEntitiesLegalEntityIdReceivedDocumentsMutationOptions<
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

export function getPurchaseInvoicesGuidQueryKey(
  args: InferRequestType<(typeof client.purchase_invoices)[':guid']['$get']>,
) {
  return ['purchase_invoices', '/purchase_invoices/:guid', args] as const
}

export function getPurchaseInvoicesGuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.purchase_invoices)[':guid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.purchase_invoices)[':guid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPurchaseInvoicesGuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.purchase_invoices[':guid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPurchaseInvoicesGuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.purchase_invoices)[':guid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.purchase_invoices)[':guid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getPurchaseInvoicesGuidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPurchaseInvoicesGuidPackagingQueryKey(
  args: InferRequestType<(typeof client.purchase_invoices)[':guid'][':packaging']['$get']>,
) {
  return ['purchase_invoices', '/purchase_invoices/:guid/:packaging', args] as const
}

export function getPurchaseInvoicesGuidPackagingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.purchase_invoices)[':guid'][':packaging']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.purchase_invoices)[':guid'][':packaging']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPurchaseInvoicesGuidPackagingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.purchase_invoices[':guid'][':packaging'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPurchaseInvoicesGuidPackaging<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.purchase_invoices)[':guid'][':packaging']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.purchase_invoices)[':guid'][':packaging']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getPurchaseInvoicesGuidPackagingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPurchaseInvoicesGuidPackagingPackageVersionQueryKey(
  args: InferRequestType<
    (typeof client.purchase_invoices)[':guid'][':packaging'][':package_version']['$get']
  >,
) {
  return [
    'purchase_invoices',
    '/purchase_invoices/:guid/:packaging/:package_version',
    args,
  ] as const
}

export function getPurchaseInvoicesGuidPackagingPackageVersionQueryOptions<
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
  args: InferRequestType<
    (typeof client.purchase_invoices)[':guid'][':packaging'][':package_version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPurchaseInvoicesGuidPackagingPackageVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.purchase_invoices[':guid'][':packaging'][':package_version'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPurchaseInvoicesGuidPackagingPackageVersion<
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
  args: () => InferRequestType<
    (typeof client.purchase_invoices)[':guid'][':packaging'][':package_version']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getPurchaseInvoicesGuidPackagingPackageVersionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostReceivedDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.received_documents.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.received_documents.$post>,
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
    const mutationDefaults = getPostReceivedDocumentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getReceivedDocumentsGuidFormatQueryKey(
  args: InferRequestType<(typeof client.received_documents)[':guid'][':format']['$get']>,
) {
  return ['received_documents', '/received_documents/:guid/:format', args] as const
}

export function getReceivedDocumentsGuidFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.received_documents)[':guid'][':format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.received_documents)[':guid'][':format']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getReceivedDocumentsGuidFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.received_documents[':guid'][':format'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReceivedDocumentsGuidFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.received_documents)[':guid'][':format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.received_documents)[':guid'][':format']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getReceivedDocumentsGuidFormatQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWebhookInstancesIndexQueryKey() {
  return ['webhook_instances', '/webhook_instances/'] as const
}

export function getWebhookInstancesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.webhook_instances.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.webhook_instances.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhookInstancesIndexQueryKey>
  >({
    queryKey: getWebhookInstancesIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.webhook_instances.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhookInstancesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.webhook_instances.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.webhook_instances.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhookInstancesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhookInstancesIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteWebhookInstancesGuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWebhookInstancesGuidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
