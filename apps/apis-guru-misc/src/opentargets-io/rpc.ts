import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getPlatformDocs(options?: ClientRequestOptions) {
  return await parseResponse(client.platform.docs.$get(undefined, options))
}

export async function getPlatformDocsSwaggerUi(options?: ClientRequestOptions) {
  return await parseResponse(client.platform.docs['swagger-ui'].$get(undefined, options))
}

export async function getPlatformPrivateAutocomplete(
  args: InferRequestType<typeof client.platform.private.autocomplete.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.private.autocomplete.$get(args, options))
}

export async function postPlatformPrivateBesthitsearch(
  args: InferRequestType<typeof client.platform.private.besthitsearch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.private.besthitsearch.$post(args, options))
}

export async function postPlatformPrivateDisease(
  args: InferRequestType<typeof client.platform.private.disease.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.private.disease.$post(args, options))
}

export async function getPlatformPrivateDiseaseDisease(
  args: InferRequestType<(typeof client.platform.private.disease)[':disease']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.private.disease[':disease'].$get(args, options))
}

export async function getPlatformPrivateDrugDRUGID(
  args: InferRequestType<(typeof client.platform.private.drug)[':DRUG_ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.private.drug[':DRUG_ID'].$get(args, options))
}

export async function getPlatformPrivateEcoECOID(
  args: InferRequestType<(typeof client.platform.private.eco)[':ECO_ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.private.eco[':ECO_ID'].$get(args, options))
}

export async function postPlatformPrivateEnrichmentTargets(
  args: InferRequestType<typeof client.platform.private.enrichment.targets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.private.enrichment.targets.$post(args, options))
}

export async function getPlatformPrivateQuicksearch(
  args: InferRequestType<typeof client.platform.private.quicksearch.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.private.quicksearch.$get(args, options))
}

export async function postPlatformPrivateRelation(
  args: InferRequestType<typeof client.platform.private.relation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.private.relation.$post(args, options))
}

export async function getPlatformPrivateRelationDiseaseDisease(
  args: InferRequestType<(typeof client.platform.private.relation.disease)[':disease']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.platform.private.relation.disease[':disease'].$get(args, options),
  )
}

export async function getPlatformPrivateRelationTargetTarget(
  args: InferRequestType<(typeof client.platform.private.relation.target)[':target']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.private.relation.target[':target'].$get(args, options))
}

export async function postPlatformPrivateTarget(
  args: InferRequestType<typeof client.platform.private.target.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.private.target.$post(args, options))
}

export async function getPlatformPrivateTargetExpression(
  args: InferRequestType<typeof client.platform.private.target.expression.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.private.target.expression.$get(args, options))
}

export async function postPlatformPrivateTargetExpression(
  args: InferRequestType<typeof client.platform.private.target.expression.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.private.target.expression.$post(args, options))
}

export async function getPlatformPrivateTargetTarget(
  args: InferRequestType<(typeof client.platform.private.target)[':target']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.private.target[':target'].$get(args, options))
}

export async function getPlatformPublicAssociation(
  args: InferRequestType<typeof client.platform.public.association.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.public.association.$get(args, options))
}

export async function getPlatformPublicAssociationFilter(
  args: InferRequestType<typeof client.platform.public.association.filter.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.public.association.filter.$get(args, options))
}

export async function postPlatformPublicAssociationFilter(
  args: InferRequestType<typeof client.platform.public.association.filter.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.public.association.filter.$post(args, options))
}

export async function getPlatformPublicEvidence(
  args: InferRequestType<typeof client.platform.public.evidence.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.public.evidence.$get(args, options))
}

export async function postPlatformPublicEvidence(
  args: InferRequestType<typeof client.platform.public.evidence.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.public.evidence.$post(args, options))
}

export async function getPlatformPublicEvidenceFilter(
  args: InferRequestType<typeof client.platform.public.evidence.filter.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.public.evidence.filter.$get(args, options))
}

export async function postPlatformPublicEvidenceFilter(
  args: InferRequestType<typeof client.platform.public.evidence.filter.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.public.evidence.filter.$post(args, options))
}

export async function getPlatformPublicSearch(
  args: InferRequestType<typeof client.platform.public.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.public.search.$get(args, options))
}

export async function getPlatformPublicUtilsMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.platform.public.utils.metrics.$get(undefined, options))
}

export async function getPlatformPublicUtilsPing(options?: ClientRequestOptions) {
  return await parseResponse(client.platform.public.utils.ping.$get(undefined, options))
}

export async function getPlatformPublicUtilsStats(options?: ClientRequestOptions) {
  return await parseResponse(client.platform.public.utils.stats.$get(undefined, options))
}

export async function getPlatformPublicUtilsTherapeuticareas(options?: ClientRequestOptions) {
  return await parseResponse(client.platform.public.utils.therapeuticareas.$get(undefined, options))
}

export async function getPlatformPublicUtilsVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.platform.public.utils.version.$get(undefined, options))
}

export async function getPlatformSwagger(options?: ClientRequestOptions) {
  return await parseResponse(client.platform.swagger.$get(undefined, options))
}
