import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAssociationBetweenSubjectObject(
  args: InferRequestType<(typeof client.association.between)[':subject'][':object']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.association.between[':subject'][':object'].$get(args, options))
}

export async function getAssociationFindSubjectCategory(
  args: InferRequestType<(typeof client.association.find)[':subject_category']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.association.find[':subject_category'].$get(args, options))
}

export async function getAssociationFindSubjectCategoryObjectCategory(
  args: InferRequestType<
    (typeof client.association.find)[':subject_category'][':object_category']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.association.find[':subject_category'][':object_category'].$get(args, options),
  )
}

export async function getAssociationFromSubject(
  args: InferRequestType<(typeof client.association.from)[':subject']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.association.from[':subject'].$get(args, options))
}

export async function getAssociationToObject(
  args: InferRequestType<(typeof client.association.to)[':object']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.association.to[':object'].$get(args, options))
}

export async function getAssociationTypeAssociationType(
  args: InferRequestType<(typeof client.association.type)[':association_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.association.type[':association_type'].$get(args, options))
}

export async function getAssociationId(
  args: InferRequestType<(typeof client.association)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.association[':id'].$get(args, options))
}

export async function getBioentityAnatomyIdGenes(
  args: InferRequestType<(typeof client.bioentity.anatomy)[':id']['genes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.anatomy[':id'].genes.$get(args, options))
}

export async function getBioentityAnatomyIdGenesTaxid(
  args: InferRequestType<(typeof client.bioentity.anatomy)[':id']['genes'][':taxid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.anatomy[':id'].genes[':taxid'].$get(args, options))
}

export async function getBioentityCaseIdDiseases(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['diseases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.case[':id'].diseases.$get(args, options))
}

export async function getBioentityCaseIdGenotypes(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['genotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.case[':id'].genotypes.$get(args, options))
}

export async function getBioentityCaseIdModels(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.case[':id'].models.$get(args, options))
}

export async function getBioentityCaseIdPhenotypes(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['phenotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.case[':id'].phenotypes.$get(args, options))
}

export async function getBioentityCaseIdVariants(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['variants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.case[':id'].variants.$get(args, options))
}

export async function getBioentityDiseaseIdCases(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['cases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.disease[':id'].cases.$get(args, options))
}

export async function getBioentityDiseaseIdGenes(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['genes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.disease[':id'].genes.$get(args, options))
}

export async function getBioentityDiseaseIdGenotypes(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['genotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.disease[':id'].genotypes.$get(args, options))
}

export async function getBioentityDiseaseIdModels(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.disease[':id'].models.$get(args, options))
}

export async function getBioentityDiseaseIdModelsTaxon(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['models'][':taxon']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.disease[':id'].models[':taxon'].$get(args, options))
}

export async function getBioentityDiseaseIdPathways(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['pathways']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.disease[':id'].pathways.$get(args, options))
}

export async function getBioentityDiseaseIdPhenotypes(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['phenotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.disease[':id'].phenotypes.$get(args, options))
}

export async function getBioentityDiseaseIdPublications(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['publications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.disease[':id'].publications.$get(args, options))
}

export async function getBioentityDiseaseIdTreatment(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['treatment']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.disease[':id'].treatment.$get(args, options))
}

export async function getBioentityDiseaseIdVariants(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['variants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.disease[':id'].variants.$get(args, options))
}

export async function getBioentityFunctionId(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.function[':id'].$get(args, options))
}

export async function getBioentityFunctionIdGenes(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['genes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.function[':id'].genes.$get(args, options))
}

export async function getBioentityFunctionIdPublications(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['publications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.function[':id'].publications.$get(args, options))
}

export async function getBioentityFunctionIdTaxons(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['taxons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.function[':id'].taxons.$get(args, options))
}

export async function getBioentityGeneIdAnatomy(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['anatomy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.gene[':id'].anatomy.$get(args, options))
}

export async function getBioentityGeneIdCases(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['cases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.gene[':id'].cases.$get(args, options))
}

export async function getBioentityGeneIdDiseases(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['diseases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.gene[':id'].diseases.$get(args, options))
}

export async function getBioentityGeneIdExpressionAnatomy(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['expression']['anatomy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.gene[':id'].expression.anatomy.$get(args, options))
}

export async function getBioentityGeneIdFunction(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['function']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.gene[':id'].function.$get(args, options))
}

export async function getBioentityGeneIdGenotypes(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['genotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.gene[':id'].genotypes.$get(args, options))
}

export async function getBioentityGeneIdHomologs(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['homologs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.gene[':id'].homologs.$get(args, options))
}

export async function getBioentityGeneIdInteractions(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['interactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.gene[':id'].interactions.$get(args, options))
}

export async function getBioentityGeneIdModels(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.gene[':id'].models.$get(args, options))
}

export async function getBioentityGeneIdOrthologDiseases(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['ortholog']['diseases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.gene[':id'].ortholog.diseases.$get(args, options))
}

export async function getBioentityGeneIdOrthologPhenotypes(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['ortholog']['phenotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.gene[':id'].ortholog.phenotypes.$get(args, options))
}

export async function getBioentityGeneIdPathways(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['pathways']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.gene[':id'].pathways.$get(args, options))
}

export async function getBioentityGeneIdPhenotypes(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['phenotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.gene[':id'].phenotypes.$get(args, options))
}

export async function getBioentityGeneIdPublications(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['publications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.gene[':id'].publications.$get(args, options))
}

export async function getBioentityGeneIdVariants(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['variants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.gene[':id'].variants.$get(args, options))
}

export async function getBioentityGenotypeIdCases(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['cases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.genotype[':id'].cases.$get(args, options))
}

export async function getBioentityGenotypeIdDiseases(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['diseases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.genotype[':id'].diseases.$get(args, options))
}

export async function getBioentityGenotypeIdGenes(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['genes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.genotype[':id'].genes.$get(args, options))
}

export async function getBioentityGenotypeIdGenotypes(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['genotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.genotype[':id'].genotypes.$get(args, options))
}

export async function getBioentityGenotypeIdModels(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.genotype[':id'].models.$get(args, options))
}

export async function getBioentityGenotypeIdPhenotypes(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['phenotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.genotype[':id'].phenotypes.$get(args, options))
}

export async function getBioentityGenotypeIdPublications(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['publications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.genotype[':id'].publications.$get(args, options))
}

export async function getBioentityGenotypeIdVariants(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['variants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.genotype[':id'].variants.$get(args, options))
}

export async function getBioentityGotermIdGenes(
  args: InferRequestType<(typeof client.bioentity.goterm)[':id']['genes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.goterm[':id'].genes.$get(args, options))
}

export async function getBioentityModelIdCases(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['cases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.model[':id'].cases.$get(args, options))
}

export async function getBioentityModelIdDiseases(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['diseases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.model[':id'].diseases.$get(args, options))
}

export async function getBioentityModelIdGenes(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['genes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.model[':id'].genes.$get(args, options))
}

export async function getBioentityModelIdGenotypes(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['genotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.model[':id'].genotypes.$get(args, options))
}

export async function getBioentityModelIdPhenotypes(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['phenotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.model[':id'].phenotypes.$get(args, options))
}

export async function getBioentityModelIdPublications(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['publications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.model[':id'].publications.$get(args, options))
}

export async function getBioentityModelIdVariants(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['variants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.model[':id'].variants.$get(args, options))
}

export async function getBioentityPathwayIdDiseases(
  args: InferRequestType<(typeof client.bioentity.pathway)[':id']['diseases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.pathway[':id'].diseases.$get(args, options))
}

export async function getBioentityPathwayIdGenes(
  args: InferRequestType<(typeof client.bioentity.pathway)[':id']['genes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.pathway[':id'].genes.$get(args, options))
}

export async function getBioentityPathwayIdPhenotypes(
  args: InferRequestType<(typeof client.bioentity.pathway)[':id']['phenotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.pathway[':id'].phenotypes.$get(args, options))
}

export async function getBioentityPhenotypeIdAnatomy(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['anatomy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.phenotype[':id'].anatomy.$get(args, options))
}

export async function getBioentityPhenotypeIdCases(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['cases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.phenotype[':id'].cases.$get(args, options))
}

export async function getBioentityPhenotypeIdDiseases(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['diseases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.phenotype[':id'].diseases.$get(args, options))
}

export async function getBioentityPhenotypeIdGeneTaxidIds(
  args: InferRequestType<
    (typeof client.bioentity.phenotype)[':id']['gene'][':taxid']['ids']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bioentity.phenotype[':id'].gene[':taxid'].ids.$get(args, options),
  )
}

export async function getBioentityPhenotypeIdGenes(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['genes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.phenotype[':id'].genes.$get(args, options))
}

export async function getBioentityPhenotypeIdGenotypes(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['genotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.phenotype[':id'].genotypes.$get(args, options))
}

export async function getBioentityPhenotypeIdPathways(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['pathways']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.phenotype[':id'].pathways.$get(args, options))
}

export async function getBioentityPhenotypeIdPublications(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['publications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.phenotype[':id'].publications.$get(args, options))
}

export async function getBioentityPhenotypeIdVariants(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['variants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.phenotype[':id'].variants.$get(args, options))
}

export async function getBioentityPublicationIdDiseases(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['diseases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.publication[':id'].diseases.$get(args, options))
}

export async function getBioentityPublicationIdGenes(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['genes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.publication[':id'].genes.$get(args, options))
}

export async function getBioentityPublicationIdGenotypes(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['genotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.publication[':id'].genotypes.$get(args, options))
}

export async function getBioentityPublicationIdModels(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.publication[':id'].models.$get(args, options))
}

export async function getBioentityPublicationIdPhenotypes(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['phenotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.publication[':id'].phenotypes.$get(args, options))
}

export async function getBioentityPublicationIdVariants(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['variants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.publication[':id'].variants.$get(args, options))
}

export async function getBioentitySubstanceIdParticipantIn(
  args: InferRequestType<(typeof client.bioentity.substance)[':id']['participant_in']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.substance[':id'].participant_in.$get(args, options))
}

export async function getBioentitySubstanceIdRoles(
  args: InferRequestType<(typeof client.bioentity.substance)[':id']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.substance[':id'].roles.$get(args, options))
}

export async function getBioentitySubstanceIdTreats(
  args: InferRequestType<(typeof client.bioentity.substance)[':id']['treats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.substance[':id'].treats.$get(args, options))
}

export async function getBioentityVariantIdCases(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['cases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.variant[':id'].cases.$get(args, options))
}

export async function getBioentityVariantIdDiseases(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['diseases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.variant[':id'].diseases.$get(args, options))
}

export async function getBioentityVariantIdGenes(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['genes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.variant[':id'].genes.$get(args, options))
}

export async function getBioentityVariantIdGenotypes(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['genotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.variant[':id'].genotypes.$get(args, options))
}

export async function getBioentityVariantIdModels(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.variant[':id'].models.$get(args, options))
}

export async function getBioentityVariantIdPhenotypes(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['phenotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.variant[':id'].phenotypes.$get(args, options))
}

export async function getBioentityVariantIdPublications(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['publications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity.variant[':id'].publications.$get(args, options))
}

export async function getBioentityId(
  args: InferRequestType<(typeof client.bioentity)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity[':id'].$get(args, options))
}

export async function getBioentityIdAssociations(
  args: InferRequestType<(typeof client.bioentity)[':id']['associations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity[':id'].associations.$get(args, options))
}

export async function getBioentityTypeId(
  args: InferRequestType<(typeof client.bioentity)[':type'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentity[':type'][':id'].$get(args, options))
}

export async function getBioentitysetAssociations(
  args: InferRequestType<typeof client.bioentityset.associations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentityset.associations.$get(args, options))
}

export async function getBioentitysetDescriptorCounts(
  args: InferRequestType<typeof client.bioentityset.descriptor.counts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentityset.descriptor.counts.$get(args, options))
}

export async function getBioentitysetGraph(
  args: InferRequestType<typeof client.bioentityset.graph.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentityset.graph.$get(args, options))
}

export async function getBioentitysetHomologsIndex(
  args: InferRequestType<typeof client.bioentityset.homologs.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentityset.homologs.index.$get(args, options))
}

export async function getBioentitysetOverrepresentation(
  args: InferRequestType<typeof client.bioentityset.overrepresentation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentityset.overrepresentation.$get(args, options))
}

export async function getBioentitysetSlimmerAnatomy(
  args: InferRequestType<typeof client.bioentityset.slimmer.anatomy.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentityset.slimmer.anatomy.$get(args, options))
}

export async function getBioentitysetSlimmerFunction(
  args: InferRequestType<typeof client.bioentityset.slimmer.function.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentityset.slimmer.function.$get(args, options))
}

export async function getBioentitysetSlimmerPhenotype(
  args: InferRequestType<typeof client.bioentityset.slimmer.phenotype.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bioentityset.slimmer.phenotype.$get(args, options))
}

export async function getCamActivity(
  args: InferRequestType<typeof client.cam.activity.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cam.activity.$get(args, options))
}

export async function getCamInstanceId(
  args: InferRequestType<(typeof client.cam.instance)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cam.instance[':id'].$get(args, options))
}

export async function getCamInstances(options?: ClientRequestOptions) {
  return await parseResponse(client.cam.instances.$get(undefined, options))
}

export async function getCamModel(options?: ClientRequestOptions) {
  return await parseResponse(client.cam.model.$get(undefined, options))
}

export async function getCamModelContributors(options?: ClientRequestOptions) {
  return await parseResponse(client.cam.model.contributors.$get(undefined, options))
}

export async function getCamModelProperties(
  args: InferRequestType<typeof client.cam.model.properties.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cam.model.properties.$get(args, options))
}

export async function getCamModelPropertyValues(
  args: InferRequestType<typeof client.cam.model.property_values.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cam.model.property_values.$get(args, options))
}

export async function getCamModelQuery(
  args: InferRequestType<typeof client.cam.model.query.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cam.model.query.$get(args, options))
}

export async function getCamModelId(
  args: InferRequestType<(typeof client.cam.model)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cam.model[':id'].$get(args, options))
}

export async function getCamPhysicalInteraction(
  args: InferRequestType<typeof client.cam.physical_interaction.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cam.physical_interaction.$get(args, options))
}

export async function getEvidenceGraphId(
  args: InferRequestType<(typeof client.evidence.graph)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.evidence.graph[':id'].$get(args, options))
}

export async function getEvidenceGraphIdTable(
  args: InferRequestType<(typeof client.evidence.graph)[':id']['table']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.evidence.graph[':id'].table.$get(args, options))
}

export async function getGenomeFeaturesWithinBuildReferenceBeginEnd(
  args: InferRequestType<
    (typeof client.genome.features.within)[':build'][':reference'][':begin'][':end']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.genome.features.within[':build'][':reference'][':begin'][':end'].$get(args, options),
  )
}

export async function getGraphEdgesFromId(
  args: InferRequestType<(typeof client.graph.edges.from)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.graph.edges.from[':id'].$get(args, options))
}

export async function getGraphNodeId(
  args: InferRequestType<(typeof client.graph.node)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.graph.node[':id'].$get(args, options))
}

export async function getIdentifierMapperSourceTargetIndex(
  args: InferRequestType<(typeof client.identifier.mapper)[':source'][':target']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.identifier.mapper[':source'][':target'].index.$get(args, options),
  )
}

export async function getIdentifierPrefixesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.identifier.prefixes.index.$get(undefined, options))
}

export async function getIdentifierPrefixesContractUri(
  args: InferRequestType<(typeof client.identifier.prefixes.contract)[':uri']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identifier.prefixes.contract[':uri'].$get(args, options))
}

export async function getIdentifierPrefixesExpandId(
  args: InferRequestType<(typeof client.identifier.prefixes.expand)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identifier.prefixes.expand[':id'].$get(args, options))
}

export async function getIndividualPedigreeId(
  args: InferRequestType<(typeof client.individual.pedigree)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.individual.pedigree[':id'].$get(args, options))
}

export async function getIndividualId(
  args: InferRequestType<(typeof client.individual)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.individual[':id'].$get(args, options))
}

export async function getMartCaseObjectCategoryTaxon(
  args: InferRequestType<(typeof client.mart.case)[':object_category'][':taxon']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mart.case[':object_category'][':taxon'].$get(args, options))
}

export async function getMartDiseaseObjectCategoryTaxon(
  args: InferRequestType<(typeof client.mart.disease)[':object_category'][':taxon']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mart.disease[':object_category'][':taxon'].$get(args, options))
}

export async function getMartGeneObjectCategoryTaxon(
  args: InferRequestType<(typeof client.mart.gene)[':object_category'][':taxon']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mart.gene[':object_category'][':taxon'].$get(args, options))
}

export async function getMartOrthologTaxon1Taxon2(
  args: InferRequestType<(typeof client.mart.ortholog)[':taxon1'][':taxon2']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mart.ortholog[':taxon1'][':taxon2'].$get(args, options))
}

export async function getMartParalogTaxon1Taxon2(
  args: InferRequestType<(typeof client.mart.paralog)[':taxon1'][':taxon2']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mart.paralog[':taxon1'][':taxon2'].$get(args, options))
}

export async function getMetadataDatasets(options?: ClientRequestOptions) {
  return await parseResponse(client.metadata.datasets.$get(undefined, options))
}

export async function postMmeDisease(
  args: InferRequestType<typeof client.mme.disease.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mme.disease.$post(args, options))
}

export async function postMmeFly(
  args: InferRequestType<typeof client.mme.fly.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mme.fly.$post(args, options))
}

export async function postMmeMouse(
  args: InferRequestType<typeof client.mme.mouse.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mme.mouse.$post(args, options))
}

export async function postMmeNematode(
  args: InferRequestType<typeof client.mme.nematode.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mme.nematode.$post(args, options))
}

export async function postMmeZebrafish(
  args: InferRequestType<typeof client.mme.zebrafish.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mme.zebrafish.$post(args, options))
}

export async function getNlpAnnotateIndex(
  args: InferRequestType<typeof client.nlp.annotate.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nlp.annotate.index.$get(args, options))
}

export async function postNlpAnnotateIndex(
  args: InferRequestType<typeof client.nlp.annotate.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nlp.annotate.index.$post(args, options))
}

export async function getNlpAnnotateEntities(
  args: InferRequestType<typeof client.nlp.annotate.entities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nlp.annotate.entities.$get(args, options))
}

export async function postNlpAnnotateEntities(
  args: InferRequestType<typeof client.nlp.annotate.entities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nlp.annotate.entities.$post(args, options))
}

export async function getOntolIdentifierIndex(
  args: InferRequestType<typeof client.ontol.identifier.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ontol.identifier.index.$get(args, options))
}

export async function postOntolIdentifierIndex(
  args: InferRequestType<typeof client.ontol.identifier.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ontol.identifier.index.$post(args, options))
}

export async function getOntolInformationContentSubjectCategoryObjectCategorySubjectTaxon(
  args: InferRequestType<
    (typeof client.ontol.information_content)[':subject_category'][':object_category'][':subject_taxon']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ontol.information_content[':subject_category'][':object_category'][
      ':subject_taxon'
    ].$get(args, options),
  )
}

export async function getOntolLabelerIndex(
  args: InferRequestType<typeof client.ontol.labeler.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ontol.labeler.index.$get(args, options))
}

export async function getOntolSubgraphOntologyNode(
  args: InferRequestType<(typeof client.ontol.subgraph)[':ontology'][':node']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ontol.subgraph[':ontology'][':node'].$get(args, options))
}

export async function postOntolSubgraphOntologyNode(
  args: InferRequestType<(typeof client.ontol.subgraph)[':ontology'][':node']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ontol.subgraph[':ontology'][':node'].$post(args, options))
}

export async function getOntologySharedSubjectObject(
  args: InferRequestType<(typeof client.ontology.shared)[':subject'][':object']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ontology.shared[':subject'][':object'].$get(args, options))
}

export async function getOntologySubsetId(
  args: InferRequestType<(typeof client.ontology.subset)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ontology.subset[':id'].$get(args, options))
}

export async function getOntologyTermId(
  args: InferRequestType<(typeof client.ontology.term)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ontology.term[':id'].$get(args, options))
}

export async function getOntologyTermIdGraph(
  args: InferRequestType<(typeof client.ontology.term)[':id']['graph']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ontology.term[':id'].graph.$get(args, options))
}

export async function getOntologyTermIdSubgraph(
  args: InferRequestType<(typeof client.ontology.term)[':id']['subgraph']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ontology.term[':id'].subgraph.$get(args, options))
}

export async function getOntologyTermIdSubsets(
  args: InferRequestType<(typeof client.ontology.term)[':id']['subsets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ontology.term[':id'].subsets.$get(args, options))
}

export async function getOwlOntologyDlqueryQuery(
  args: InferRequestType<(typeof client.owl.ontology.dlquery)[':query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.owl.ontology.dlquery[':query'].$get(args, options))
}

export async function getOwlOntologySparqlQuery(
  args: InferRequestType<(typeof client.owl.ontology.sparql)[':query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.owl.ontology.sparql[':query'].$get(args, options))
}

export async function getPairSimJaccardId1Id2(
  args: InferRequestType<(typeof client.pair.sim.jaccard)[':id1'][':id2']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pair.sim.jaccard[':id1'][':id2'].$get(args, options))
}

export async function getRelationUsageIndex(
  args: InferRequestType<typeof client.relation.usage.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.relation.usage.index.$get(args, options))
}

export async function getRelationUsageBetweenSubjectCategoryObjectCategory(
  args: InferRequestType<
    (typeof client.relation.usage.between)[':subject_category'][':object_category']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.relation.usage.between[':subject_category'][':object_category'].$get(args, options),
  )
}

export async function getRelationUsagePivot(
  args: InferRequestType<typeof client.relation.usage.pivot.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.relation.usage.pivot.$get(args, options))
}

export async function getRelationUsagePivotLabel(
  args: InferRequestType<typeof client.relation.usage.pivot.label.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.relation.usage.pivot.label.$get(args, options))
}

export async function getSearchEntityAutocompleteTerm(
  args: InferRequestType<(typeof client.search.entity.autocomplete)[':term']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.entity.autocomplete[':term'].$get(args, options))
}

export async function getSearchEntityHpoPlTerm(
  args: InferRequestType<(typeof client.search.entity)['hpo-pl'][':term']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.entity['hpo-pl'][':term'].$get(args, options))
}

export async function getSearchEntityTerm(
  args: InferRequestType<(typeof client.search.entity)[':term']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.entity[':term'].$get(args, options))
}

export async function getSimCompare(
  args: InferRequestType<typeof client.sim.compare.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim.compare.$get(args, options))
}

export async function postSimCompare(
  args: InferRequestType<typeof client.sim.compare.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim.compare.$post(args, options))
}

export async function getSimScore(
  args: InferRequestType<typeof client.sim.score.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim.score.$get(args, options))
}

export async function postSimScore(
  args: InferRequestType<typeof client.sim.score.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim.score.$post(args, options))
}

export async function getSimSearch(
  args: InferRequestType<typeof client.sim.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim.search.$get(args, options))
}

export async function getVariationSetIndex(
  args: InferRequestType<typeof client.variation.set.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.variation.set.index.$get(args, options))
}

export async function postVariationSetIndex(
  args: InferRequestType<typeof client.variation.set.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.variation.set.index.$post(args, options))
}

export async function getVariationSetAnalyzeId(
  args: InferRequestType<(typeof client.variation.set.analyze)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.variation.set.analyze[':id'].$get(args, options))
}

export async function getVariationSetArchiveYearMonthDay(
  args: InferRequestType<(typeof client.variation.set.archive)[':year'][':month'][':day']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.variation.set.archive[':year'][':month'][':day'].$get(args, options),
  )
}

export async function getVariationSetId(
  args: InferRequestType<(typeof client.variation.set)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.variation.set[':id'].$get(args, options))
}

export async function putVariationSetId(
  args: InferRequestType<(typeof client.variation.set)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.variation.set[':id'].$put(args, options))
}

export async function deleteVariationSetId(
  args: InferRequestType<(typeof client.variation.set)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.variation.set[':id'].$delete(args, options))
}
