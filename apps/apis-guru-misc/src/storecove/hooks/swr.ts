import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostDiscoveryExistsKey() {
  return ['discovery', '/discovery/exists', 'POST'] as const
}

export function usePostDiscoveryExists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discovery.exists.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.discovery.exists.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDiscoveryExistsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.discovery.exists.$post> }) =>
        parseResponse(client.discovery.exists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDiscoveryIdentifiersKey() {
  return ['discovery', '/discovery/identifiers'] as const
}

export function useGetDiscoveryIdentifiers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.discovery.identifiers.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDiscoveryIdentifiersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discovery.identifiers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discovery.identifiers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoveryIdentifiers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.discovery.identifiers.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDiscoveryIdentifiersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discovery.identifiers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discovery.identifiers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDiscoveryReceivesKey() {
  return ['discovery', '/discovery/receives', 'POST'] as const
}

export function usePostDiscoveryReceives<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discovery.receives.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.discovery.receives.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDiscoveryReceivesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.discovery.receives.$post> }) =>
        parseResponse(client.discovery.receives.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentSubmissionsKey() {
  return ['document_submissions', '/document_submissions', 'POST'] as const
}

export function usePostDocumentSubmissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.document_submissions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.document_submissions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentSubmissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.document_submissions.$post> },
      ) => parseResponse(client.document_submissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDocumentSubmissionsGuidEvidenceEvidenceTypeKey(
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

export function useGetDocumentSubmissionsGuidEvidenceEvidenceType<TError = unknown>(
  args: InferRequestType<
    (typeof client.document_submissions)[':guid']['evidence'][':evidence_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDocumentSubmissionsGuidEvidenceEvidenceTypeKey(args)
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
                (typeof client.document_submissions)[':guid']['evidence'][':evidence_type']['$get']
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
          client.document_submissions[':guid'].evidence[':evidence_type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocumentSubmissionsGuidEvidenceEvidenceType<TError = unknown>(
  args: InferRequestType<
    (typeof client.document_submissions)[':guid']['evidence'][':evidence_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDocumentSubmissionsGuidEvidenceEvidenceTypeKey(args)
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
                (typeof client.document_submissions)[':guid']['evidence'][':evidence_type']['$get']
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
          client.document_submissions[':guid'].evidence[':evidence_type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostInvoiceSubmissionsKey() {
  return ['invoice_submissions', '/invoice_submissions', 'POST'] as const
}

export function usePostInvoiceSubmissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoice_submissions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.invoice_submissions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoiceSubmissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.invoice_submissions.$post> }) =>
        parseResponse(client.invoice_submissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoiceSubmissionsPreflightKey() {
  return ['invoice_submissions', '/invoice_submissions/preflight', 'POST'] as const
}

export function usePostInvoiceSubmissionsPreflight<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.invoice_submissions.preflight.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.invoice_submissions.preflight.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoiceSubmissionsPreflightKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.invoice_submissions.preflight.$post> },
      ) => parseResponse(client.invoice_submissions.preflight.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInvoiceSubmissionsGuidEvidenceKey(
  args: InferRequestType<(typeof client.invoice_submissions)[':guid']['evidence']['$get']>,
) {
  return ['invoice_submissions', '/invoice_submissions/:guid/evidence', args] as const
}

export function useGetInvoiceSubmissionsGuidEvidence<TError = unknown>(
  args: InferRequestType<(typeof client.invoice_submissions)[':guid']['evidence']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoice_submissions)[':guid']['evidence']['$get']>>
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
        ? getGetInvoiceSubmissionsGuidEvidenceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoice_submissions)[':guid']['evidence']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.invoice_submissions[':guid'].evidence.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvoiceSubmissionsGuidEvidence<TError = unknown>(
  args: InferRequestType<(typeof client.invoice_submissions)[':guid']['evidence']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoice_submissions)[':guid']['evidence']['$get']>>
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
        ? getGetInvoiceSubmissionsGuidEvidenceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoice_submissions)[':guid']['evidence']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.invoice_submissions[':guid'].evidence.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLegalEntitiesKey() {
  return ['legal_entities', '/legal_entities', 'POST'] as const
}

export function usePostLegalEntities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.legal_entities.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.legal_entities.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLegalEntitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.legal_entities.$post> }) =>
        parseResponse(client.legal_entities.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLegalEntitiesIdKey(
  args: InferRequestType<(typeof client.legal_entities)[':id']['$get']>,
) {
  return ['legal_entities', '/legal_entities/:id', args] as const
}

export function useGetLegalEntitiesId<TError = unknown>(
  args: InferRequestType<(typeof client.legal_entities)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.legal_entities)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLegalEntitiesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.legal_entities)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.legal_entities[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLegalEntitiesId<TError = unknown>(
  args: InferRequestType<(typeof client.legal_entities)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.legal_entities)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLegalEntitiesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.legal_entities)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.legal_entities[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteLegalEntitiesIdKey() {
  return ['legal_entities', '/legal_entities/:id', 'DELETE'] as const
}

export function useDeleteLegalEntitiesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.legal_entities)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.legal_entities)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLegalEntitiesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.legal_entities)[':id']['$delete']> },
      ) => parseResponse(client.legal_entities[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchLegalEntitiesIdKey() {
  return ['legal_entities', '/legal_entities/:id', 'PATCH'] as const
}

export function usePatchLegalEntitiesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.legal_entities)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.legal_entities)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchLegalEntitiesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.legal_entities)[':id']['$patch']> },
      ) => parseResponse(client.legal_entities[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersKey() {
  return [
    'legal_entities',
    '/legal_entities/:legal_entity_id/additional_tax_identifiers',
    'POST',
  ] as const
}

export function usePostLegalEntitiesLegalEntityIdAdditionalTaxIdentifiers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersKey()
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
            (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.legal_entities[':legal_entity_id'].additional_tax_identifiers.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdKey(
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

export function useGetLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersId<TError = unknown>(
  args: InferRequestType<
    (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdKey(args)
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
                (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$get']
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
          client.legal_entities[':legal_entity_id'].additional_tax_identifiers[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdKey(args)
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
                (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$get']
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
          client.legal_entities[':legal_entity_id'].additional_tax_identifiers[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdKey() {
  return [
    'legal_entities',
    '/legal_entities/:legal_entity_id/additional_tax_identifiers/:id',
    'DELETE',
  ] as const
}

export function useDeleteLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdKey()
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
            (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.legal_entities[':legal_entity_id'].additional_tax_identifiers[':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdKey() {
  return [
    'legal_entities',
    '/legal_entities/:legal_entity_id/additional_tax_identifiers/:id',
    'PATCH',
  ] as const
}

export function usePatchLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdKey()
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
            (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.legal_entities[':legal_entity_id'].additional_tax_identifiers[':id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLegalEntitiesLegalEntityIdAdministrationsKey() {
  return ['legal_entities', '/legal_entities/:legal_entity_id/administrations', 'POST'] as const
}

export function usePostLegalEntitiesLegalEntityIdAdministrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.legal_entities)[':legal_entity_id']['administrations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLegalEntitiesLegalEntityIdAdministrationsKey()
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
            (typeof client.legal_entities)[':legal_entity_id']['administrations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.legal_entities[':legal_entity_id'].administrations.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLegalEntitiesLegalEntityIdAdministrationsIdKey(
  args: InferRequestType<
    (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$get']
  >,
) {
  return ['legal_entities', '/legal_entities/:legal_entity_id/administrations/:id', args] as const
}

export function useGetLegalEntitiesLegalEntityIdAdministrationsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLegalEntitiesLegalEntityIdAdministrationsIdKey(args)
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
                (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$get']
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
          client.legal_entities[':legal_entity_id'].administrations[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLegalEntitiesLegalEntityIdAdministrationsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLegalEntitiesLegalEntityIdAdministrationsIdKey(args)
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
                (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$get']
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
          client.legal_entities[':legal_entity_id'].administrations[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteLegalEntitiesLegalEntityIdAdministrationsIdKey() {
  return [
    'legal_entities',
    '/legal_entities/:legal_entity_id/administrations/:id',
    'DELETE',
  ] as const
}

export function useDeleteLegalEntitiesLegalEntityIdAdministrationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLegalEntitiesLegalEntityIdAdministrationsIdKey()
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
            (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.legal_entities[':legal_entity_id'].administrations[':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchLegalEntitiesLegalEntityIdAdministrationsIdKey() {
  return [
    'legal_entities',
    '/legal_entities/:legal_entity_id/administrations/:id',
    'PATCH',
  ] as const
}

export function usePatchLegalEntitiesLegalEntityIdAdministrationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchLegalEntitiesLegalEntityIdAdministrationsIdKey()
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
            (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.legal_entities[':legal_entity_id'].administrations[':id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLegalEntitiesLegalEntityIdPeppolIdentifiersKey() {
  return ['legal_entities', '/legal_entities/:legal_entity_id/peppol_identifiers', 'POST'] as const
}

export function usePostLegalEntitiesLegalEntityIdPeppolIdentifiers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.legal_entities)[':legal_entity_id']['peppol_identifiers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLegalEntitiesLegalEntityIdPeppolIdentifiersKey()
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
            (typeof client.legal_entities)[':legal_entity_id']['peppol_identifiers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.legal_entities[':legal_entity_id'].peppol_identifiers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteLegalEntitiesLegalEntityIdPeppolIdentifiersSuperschemeSchemeIdentifierKey() {
  return [
    'legal_entities',
    '/legal_entities/:legal_entity_id/peppol_identifiers/:superscheme/:scheme/:identifier',
    'DELETE',
  ] as const
}

export function useDeleteLegalEntitiesLegalEntityIdPeppolIdentifiersSuperschemeSchemeIdentifier<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.legal_entities)[':legal_entity_id']['peppol_identifiers'][':superscheme'][':scheme'][':identifier']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteLegalEntitiesLegalEntityIdPeppolIdentifiersSuperschemeSchemeIdentifierKey()
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
            (typeof client.legal_entities)[':legal_entity_id']['peppol_identifiers'][':superscheme'][':scheme'][':identifier']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.legal_entities[':legal_entity_id'].peppol_identifiers[':superscheme'][':scheme'][
            ':identifier'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLegalEntitiesLegalEntityIdReceivedDocumentsKey() {
  return ['legal_entities', '/legal_entities/:legal_entity_id/received_documents', 'POST'] as const
}

export function usePostLegalEntitiesLegalEntityIdReceivedDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.legal_entities)[':legal_entity_id']['received_documents']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLegalEntitiesLegalEntityIdReceivedDocumentsKey()
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
            (typeof client.legal_entities)[':legal_entity_id']['received_documents']['$post']
          >
        },
      ) =>
        parseResponse(
          client.legal_entities[':legal_entity_id'].received_documents.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPurchaseInvoicesGuidKey(
  args: InferRequestType<(typeof client.purchase_invoices)[':guid']['$get']>,
) {
  return ['purchase_invoices', '/purchase_invoices/:guid', args] as const
}

export function useGetPurchaseInvoicesGuid<TError = unknown>(
  args: InferRequestType<(typeof client.purchase_invoices)[':guid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.purchase_invoices)[':guid']['$get']>>
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
        ? getGetPurchaseInvoicesGuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.purchase_invoices)[':guid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.purchase_invoices[':guid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPurchaseInvoicesGuid<TError = unknown>(
  args: InferRequestType<(typeof client.purchase_invoices)[':guid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.purchase_invoices)[':guid']['$get']>>
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
        ? getGetPurchaseInvoicesGuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.purchase_invoices)[':guid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.purchase_invoices[':guid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPurchaseInvoicesGuidPackagingKey(
  args: InferRequestType<(typeof client.purchase_invoices)[':guid'][':packaging']['$get']>,
) {
  return ['purchase_invoices', '/purchase_invoices/:guid/:packaging', args] as const
}

export function useGetPurchaseInvoicesGuidPackaging<TError = unknown>(
  args: InferRequestType<(typeof client.purchase_invoices)[':guid'][':packaging']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.purchase_invoices)[':guid'][':packaging']['$get']>>
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
        ? getGetPurchaseInvoicesGuidPackagingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.purchase_invoices)[':guid'][':packaging']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.purchase_invoices[':guid'][':packaging'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPurchaseInvoicesGuidPackaging<TError = unknown>(
  args: InferRequestType<(typeof client.purchase_invoices)[':guid'][':packaging']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.purchase_invoices)[':guid'][':packaging']['$get']>>
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
        ? getGetPurchaseInvoicesGuidPackagingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.purchase_invoices)[':guid'][':packaging']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.purchase_invoices[':guid'][':packaging'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPurchaseInvoicesGuidPackagingPackageVersionKey(
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

export function useGetPurchaseInvoicesGuidPackagingPackageVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client.purchase_invoices)[':guid'][':packaging'][':package_version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPurchaseInvoicesGuidPackagingPackageVersionKey(args)
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
                (typeof client.purchase_invoices)[':guid'][':packaging'][':package_version']['$get']
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
          client.purchase_invoices[':guid'][':packaging'][':package_version'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPurchaseInvoicesGuidPackagingPackageVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client.purchase_invoices)[':guid'][':packaging'][':package_version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPurchaseInvoicesGuidPackagingPackageVersionKey(args)
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
                (typeof client.purchase_invoices)[':guid'][':packaging'][':package_version']['$get']
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
          client.purchase_invoices[':guid'][':packaging'][':package_version'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostReceivedDocumentsKey() {
  return ['received_documents', '/received_documents', 'POST'] as const
}

export function usePostReceivedDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.received_documents.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.received_documents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReceivedDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.received_documents.$post> }) =>
        parseResponse(client.received_documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReceivedDocumentsGuidFormatKey(
  args: InferRequestType<(typeof client.received_documents)[':guid'][':format']['$get']>,
) {
  return ['received_documents', '/received_documents/:guid/:format', args] as const
}

export function useGetReceivedDocumentsGuidFormat<TError = unknown>(
  args: InferRequestType<(typeof client.received_documents)[':guid'][':format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.received_documents)[':guid'][':format']['$get']>>
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
        ? getGetReceivedDocumentsGuidFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.received_documents)[':guid'][':format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.received_documents[':guid'][':format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReceivedDocumentsGuidFormat<TError = unknown>(
  args: InferRequestType<(typeof client.received_documents)[':guid'][':format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.received_documents)[':guid'][':format']['$get']>>
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
        ? getGetReceivedDocumentsGuidFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.received_documents)[':guid'][':format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.received_documents[':guid'][':format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWebhookInstancesIndexKey() {
  return ['webhook_instances', '/webhook_instances/'] as const
}

export function useGetWebhookInstancesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.webhook_instances.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhookInstancesIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.webhook_instances.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook_instances.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhookInstancesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.webhook_instances.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhookInstancesIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.webhook_instances.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook_instances.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteWebhookInstancesGuidKey() {
  return ['webhook_instances', '/webhook_instances/:guid', 'DELETE'] as const
}

export function useDeleteWebhookInstancesGuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_instances)[':guid']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.webhook_instances)[':guid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhookInstancesGuidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhook_instances)[':guid']['$delete']> },
      ) => parseResponse(client.webhook_instances[':guid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
