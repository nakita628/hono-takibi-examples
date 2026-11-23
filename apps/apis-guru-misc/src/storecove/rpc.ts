import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postDiscoveryExists(
  args: InferRequestType<typeof client.discovery.exists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discovery.exists.$post(args, options))
}

export async function getDiscoveryIdentifiers(options?: ClientRequestOptions) {
  return await parseResponse(client.discovery.identifiers.$get(undefined, options))
}

export async function postDiscoveryReceives(
  args: InferRequestType<typeof client.discovery.receives.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discovery.receives.$post(args, options))
}

export async function postDocumentSubmissions(
  args: InferRequestType<typeof client.document_submissions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.document_submissions.$post(args, options))
}

export async function getDocumentSubmissionsGuidEvidenceEvidenceType(
  args: InferRequestType<
    (typeof client.document_submissions)[':guid']['evidence'][':evidence_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.document_submissions[':guid'].evidence[':evidence_type'].$get(args, options),
  )
}

export async function postInvoiceSubmissions(
  args: InferRequestType<typeof client.invoice_submissions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoice_submissions.$post(args, options))
}

export async function postInvoiceSubmissionsPreflight(
  args: InferRequestType<typeof client.invoice_submissions.preflight.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoice_submissions.preflight.$post(args, options))
}

export async function getInvoiceSubmissionsGuidEvidence(
  args: InferRequestType<(typeof client.invoice_submissions)[':guid']['evidence']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoice_submissions[':guid'].evidence.$get(args, options))
}

export async function postLegalEntities(
  args: InferRequestType<typeof client.legal_entities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legal_entities.$post(args, options))
}

export async function getLegalEntitiesId(
  args: InferRequestType<(typeof client.legal_entities)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legal_entities[':id'].$get(args, options))
}

export async function deleteLegalEntitiesId(
  args: InferRequestType<(typeof client.legal_entities)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legal_entities[':id'].$delete(args, options))
}

export async function patchLegalEntitiesId(
  args: InferRequestType<(typeof client.legal_entities)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legal_entities[':id'].$patch(args, options))
}

export async function postLegalEntitiesLegalEntityIdAdditionalTaxIdentifiers(
  args: InferRequestType<
    (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legal_entities[':legal_entity_id'].additional_tax_identifiers.$post(args, options),
  )
}

export async function getLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersId(
  args: InferRequestType<
    (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legal_entities[':legal_entity_id'].additional_tax_identifiers[':id'].$get(args, options),
  )
}

export async function deleteLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersId(
  args: InferRequestType<
    (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legal_entities[':legal_entity_id'].additional_tax_identifiers[':id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersId(
  args: InferRequestType<
    (typeof client.legal_entities)[':legal_entity_id']['additional_tax_identifiers'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legal_entities[':legal_entity_id'].additional_tax_identifiers[':id'].$patch(
      args,
      options,
    ),
  )
}

export async function postLegalEntitiesLegalEntityIdAdministrations(
  args: InferRequestType<
    (typeof client.legal_entities)[':legal_entity_id']['administrations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legal_entities[':legal_entity_id'].administrations.$post(args, options),
  )
}

export async function getLegalEntitiesLegalEntityIdAdministrationsId(
  args: InferRequestType<
    (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legal_entities[':legal_entity_id'].administrations[':id'].$get(args, options),
  )
}

export async function deleteLegalEntitiesLegalEntityIdAdministrationsId(
  args: InferRequestType<
    (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legal_entities[':legal_entity_id'].administrations[':id'].$delete(args, options),
  )
}

export async function patchLegalEntitiesLegalEntityIdAdministrationsId(
  args: InferRequestType<
    (typeof client.legal_entities)[':legal_entity_id']['administrations'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legal_entities[':legal_entity_id'].administrations[':id'].$patch(args, options),
  )
}

export async function postLegalEntitiesLegalEntityIdPeppolIdentifiers(
  args: InferRequestType<
    (typeof client.legal_entities)[':legal_entity_id']['peppol_identifiers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legal_entities[':legal_entity_id'].peppol_identifiers.$post(args, options),
  )
}

export async function deleteLegalEntitiesLegalEntityIdPeppolIdentifiersSuperschemeSchemeIdentifier(
  args: InferRequestType<
    (typeof client.legal_entities)[':legal_entity_id']['peppol_identifiers'][':superscheme'][':scheme'][':identifier']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legal_entities[':legal_entity_id'].peppol_identifiers[':superscheme'][':scheme'][
      ':identifier'
    ].$delete(args, options),
  )
}

export async function postLegalEntitiesLegalEntityIdReceivedDocuments(
  args: InferRequestType<
    (typeof client.legal_entities)[':legal_entity_id']['received_documents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legal_entities[':legal_entity_id'].received_documents.$post(args, options),
  )
}

export async function getPurchaseInvoicesGuid(
  args: InferRequestType<(typeof client.purchase_invoices)[':guid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.purchase_invoices[':guid'].$get(args, options))
}

export async function getPurchaseInvoicesGuidPackaging(
  args: InferRequestType<(typeof client.purchase_invoices)[':guid'][':packaging']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.purchase_invoices[':guid'][':packaging'].$get(args, options))
}

export async function getPurchaseInvoicesGuidPackagingPackageVersion(
  args: InferRequestType<
    (typeof client.purchase_invoices)[':guid'][':packaging'][':package_version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.purchase_invoices[':guid'][':packaging'][':package_version'].$get(args, options),
  )
}

export async function postReceivedDocuments(
  args: InferRequestType<typeof client.received_documents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.received_documents.$post(args, options))
}

export async function getReceivedDocumentsGuidFormat(
  args: InferRequestType<(typeof client.received_documents)[':guid'][':format']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.received_documents[':guid'][':format'].$get(args, options))
}

export async function getWebhookInstancesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.webhook_instances.index.$get(undefined, options))
}

export async function deleteWebhookInstancesGuid(
  args: InferRequestType<(typeof client.webhook_instances)[':guid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_instances[':guid'].$delete(args, options))
}
