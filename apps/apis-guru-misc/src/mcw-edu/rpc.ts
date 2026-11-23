import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAgrAffectedGenomicModelsTaxonId(
  args: InferRequestType<(typeof client.agr.affectedGenomicModels)[':taxonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agr.affectedGenomicModels[':taxonId'].$get(args, options))
}

export async function getAgrAllelesTaxonId(
  args: InferRequestType<(typeof client.agr.alleles)[':taxonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agr.alleles[':taxonId'].$get(args, options))
}

export async function getAgrExpressionTaxonId(
  args: InferRequestType<(typeof client.agr.expression)[':taxonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agr.expression[':taxonId'].$get(args, options))
}

export async function getAgrPhenotypesTaxonId(
  args: InferRequestType<(typeof client.agr.phenotypes)[':taxonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agr.phenotypes[':taxonId'].$get(args, options))
}

export async function getAgrVariantsTaxonId(
  args: InferRequestType<(typeof client.agr.variants)[':taxonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agr.variants[':taxonId'].$get(args, options))
}

export async function getAgrTaxonId(
  args: InferRequestType<(typeof client.agr)[':taxonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agr[':taxonId'].$get(args, options))
}

export async function postAnnotationsIndex(
  args: InferRequestType<typeof client.annotations.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.annotations.index.$post(args, options))
}

export async function getAnnotationsAccIdRgdId(
  args: InferRequestType<(typeof client.annotations.accId)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.annotations.accId[':rgdId'].$get(args, options))
}

export async function getAnnotationsCountAccIdIncludeChildren(
  args: InferRequestType<(typeof client.annotations.count)[':accId'][':includeChildren']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.annotations.count[':accId'][':includeChildren'].$get(args, options),
  )
}

export async function getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildren(
  args: InferRequestType<
    (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.annotations.count[':accId'][':speciesTypeKey'][':includeChildren'].$get(args, options),
  )
}

export async function getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectType(
  args: InferRequestType<
    (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren'][':objectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.annotations.count[':accId'][':speciesTypeKey'][':includeChildren'][':objectType'].$get(
      args,
      options,
    ),
  )
}

export async function getAnnotationsReferenceRefRgdId(
  args: InferRequestType<(typeof client.annotations.reference)[':refRgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.annotations.reference[':refRgdId'].$get(args, options))
}

export async function getAnnotationsRgdIdRgdId(
  args: InferRequestType<(typeof client.annotations.rgdId)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.annotations.rgdId[':rgdId'].$get(args, options))
}

export async function getAnnotationsRgdIdRgdIdOntologyPrefix(
  args: InferRequestType<(typeof client.annotations.rgdId)[':rgdId'][':ontologyPrefix']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.annotations.rgdId[':rgdId'][':ontologyPrefix'].$get(args, options),
  )
}

export async function getAnnotationsAccIdRgdId2(
  args: InferRequestType<(typeof client.annotations)[':accId'][':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.annotations[':accId'][':rgdId'].$get(args, options))
}

export async function getAnnotationsAccIdSpeciesTypeKeyIncludeChildren(
  args: InferRequestType<
    (typeof client.annotations)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.annotations[':accId'][':speciesTypeKey'][':includeChildren'].$get(args, options),
  )
}

export async function postEnrichmentAnnotatedGenes(
  args: InferRequestType<typeof client.enrichment.annotatedGenes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enrichment.annotatedGenes.$post(args, options))
}

export async function postEnrichmentData(
  args: InferRequestType<typeof client.enrichment.data.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enrichment.data.$post(args, options))
}

export async function getGenesAffyIdAffyIdSpeciesTypeKey(
  args: InferRequestType<(typeof client.genes.affyId)[':affyId'][':speciesTypeKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.genes.affyId[':affyId'][':speciesTypeKey'].$get(args, options))
}

export async function getGenesAliasAliasSymbolSpeciesTypeKey(
  args: InferRequestType<(typeof client.genes.alias)[':aliasSymbol'][':speciesTypeKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.genes.alias[':aliasSymbol'][':speciesTypeKey'].$get(args, options),
  )
}

export async function getGenesAlleleRgdId(
  args: InferRequestType<(typeof client.genes.allele)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.genes.allele[':rgdId'].$get(args, options))
}

export async function postGenesAnnotation(
  args: InferRequestType<typeof client.genes.annotation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.genes.annotation.$post(args, options))
}

export async function getGenesAnnotationAccId(
  args: InferRequestType<(typeof client.genes.annotation)[':accId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.genes.annotation[':accId'].$get(args, options))
}

export async function getGenesAnnotationAccIdSpeciesTypeKey(
  args: InferRequestType<(typeof client.genes.annotation)[':accId'][':speciesTypeKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.genes.annotation[':accId'][':speciesTypeKey'].$get(args, options),
  )
}

export async function getGenesKeywordKeywordSpeciesTypeKey(
  args: InferRequestType<(typeof client.genes.keyword)[':keyword'][':speciesTypeKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.genes.keyword[':keyword'][':speciesTypeKey'].$get(args, options),
  )
}

export async function getGenesMapMapKey(
  args: InferRequestType<(typeof client.genes.map)[':mapKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.genes.map[':mapKey'].$get(args, options))
}

export async function getGenesMappedChrStartStopMapKey(
  args: InferRequestType<
    (typeof client.genes.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.genes.mapped[':chr'][':start'][':stop'][':mapKey'].$get(args, options),
  )
}

export async function postGenesOrthologs(
  args: InferRequestType<typeof client.genes.orthologs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.genes.orthologs.$post(args, options))
}

export async function getGenesOrthologsRgdId(
  args: InferRequestType<(typeof client.genes.orthologs)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.genes.orthologs[':rgdId'].$get(args, options))
}

export async function getGenesRegionChrStartStopMapKey(
  args: InferRequestType<
    (typeof client.genes.region)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.genes.region[':chr'][':start'][':stop'][':mapKey'].$get(args, options),
  )
}

export async function getGenesSpeciesSpeciesTypeKey(
  args: InferRequestType<(typeof client.genes.species)[':speciesTypeKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.genes.species[':speciesTypeKey'].$get(args, options))
}

export async function getGenesChrStartStopMapKey(
  args: InferRequestType<(typeof client.genes)[':chr'][':start'][':stop'][':mapKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.genes[':chr'][':start'][':stop'][':mapKey'].$get(args, options))
}

export async function getGenesRgdId(
  args: InferRequestType<(typeof client.genes)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.genes[':rgdId'].$get(args, options))
}

export async function getGenesSymbolSpeciesTypeKey(
  args: InferRequestType<(typeof client.genes)[':symbol'][':speciesTypeKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.genes[':symbol'][':speciesTypeKey'].$get(args, options))
}

export async function getLookupGeneTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.lookup.geneTypes.$get(undefined, options))
}

export async function postLookupIdMapEnsemblGene(
  args: InferRequestType<typeof client.lookup.id.map.EnsemblGene.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.id.map.EnsemblGene.$post(args, options))
}

export async function getLookupIdMapEnsemblGeneRgdId(
  args: InferRequestType<(typeof client.lookup.id.map.EnsemblGene)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.id.map.EnsemblGene[':rgdId'].$get(args, options))
}

export async function postLookupIdMapEnsemblProtein(
  args: InferRequestType<typeof client.lookup.id.map.EnsemblProtein.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.id.map.EnsemblProtein.$post(args, options))
}

export async function getLookupIdMapEnsemblProteinRgdId(
  args: InferRequestType<(typeof client.lookup.id.map.EnsemblProtein)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.id.map.EnsemblProtein[':rgdId'].$get(args, options))
}

export async function postLookupIdMapEnsemblTranscript(
  args: InferRequestType<typeof client.lookup.id.map.EnsemblTranscript.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.id.map.EnsemblTranscript.$post(args, options))
}

export async function getLookupIdMapEnsemblTranscriptRgdId(
  args: InferRequestType<(typeof client.lookup.id.map.EnsemblTranscript)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.id.map.EnsemblTranscript[':rgdId'].$get(args, options))
}

export async function postLookupIdMapGTEx(
  args: InferRequestType<typeof client.lookup.id.map.GTEx.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.id.map.GTEx.$post(args, options))
}

export async function getLookupIdMapGTExRgdId(
  args: InferRequestType<(typeof client.lookup.id.map.GTEx)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.id.map.GTEx[':rgdId'].$get(args, options))
}

export async function postLookupIdMapGenBankNucleotide(
  args: InferRequestType<typeof client.lookup.id.map.GenBankNucleotide.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.id.map.GenBankNucleotide.$post(args, options))
}

export async function getLookupIdMapGenBankNucleotideRgdId(
  args: InferRequestType<(typeof client.lookup.id.map.GenBankNucleotide)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.id.map.GenBankNucleotide[':rgdId'].$get(args, options))
}

export async function postLookupIdMapGenBankProtein(
  args: InferRequestType<typeof client.lookup.id.map.GenBankProtein.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.id.map.GenBankProtein.$post(args, options))
}

export async function getLookupIdMapGenBankProteinRgdId(
  args: InferRequestType<(typeof client.lookup.id.map.GenBankProtein)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.id.map.GenBankProtein[':rgdId'].$get(args, options))
}

export async function postLookupIdMapHGNC(
  args: InferRequestType<typeof client.lookup.id.map.HGNC.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.id.map.HGNC.$post(args, options))
}

export async function getLookupIdMapHGNCRgdId(
  args: InferRequestType<(typeof client.lookup.id.map.HGNC)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.id.map.HGNC[':rgdId'].$get(args, options))
}

export async function postLookupIdMapMGI(
  args: InferRequestType<typeof client.lookup.id.map.MGI.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.id.map.MGI.$post(args, options))
}

export async function getLookupIdMapMGIRgdId(
  args: InferRequestType<(typeof client.lookup.id.map.MGI)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.id.map.MGI[':rgdId'].$get(args, options))
}

export async function postLookupIdMapNCBIGene(
  args: InferRequestType<typeof client.lookup.id.map.NCBIGene.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.id.map.NCBIGene.$post(args, options))
}

export async function getLookupIdMapNCBIGeneRgdId(
  args: InferRequestType<(typeof client.lookup.id.map.NCBIGene)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.id.map.NCBIGene[':rgdId'].$get(args, options))
}

export async function postLookupIdMapUniProt(
  args: InferRequestType<typeof client.lookup.id.map.UniProt.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.id.map.UniProt.$post(args, options))
}

export async function getLookupIdMapUniProtRgdId(
  args: InferRequestType<(typeof client.lookup.id.map.UniProt)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.id.map.UniProt[':rgdId'].$get(args, options))
}

export async function getLookupMapsSpeciesTypeKey(
  args: InferRequestType<(typeof client.lookup.maps)[':speciesTypeKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.maps[':speciesTypeKey'].$get(args, options))
}

export async function getLookupSpeciesTypeKeys(options?: ClientRequestOptions) {
  return await parseResponse(client.lookup.speciesTypeKeys.$get(undefined, options))
}

export async function getLookupStandardUnitAccId(
  args: InferRequestType<(typeof client.lookup.standardUnit)[':accId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.standardUnit[':accId'].$get(args, options))
}

export async function getMapsChrChromosomeMapKey(
  args: InferRequestType<(typeof client.maps.chr)[':chromosome'][':mapKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.maps.chr[':chromosome'][':mapKey'].$get(args, options))
}

export async function getMapsChrMapKey(
  args: InferRequestType<(typeof client.maps.chr)[':mapKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.maps.chr[':mapKey'].$get(args, options))
}

export async function getMapsSpeciesTypeKey(
  args: InferRequestType<(typeof client.maps)[':speciesTypeKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.maps[':speciesTypeKey'].$get(args, options))
}

export async function getOntologyOntAccId(
  args: InferRequestType<(typeof client.ontology.ont)[':accId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ontology.ont[':accId'].$get(args, options))
}

export async function getOntologyTermAccId1AccId2(
  args: InferRequestType<(typeof client.ontology.term)[':accId1'][':accId2']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ontology.term[':accId1'][':accId2'].$get(args, options))
}

export async function getOntologyTermAccId(
  args: InferRequestType<(typeof client.ontology.term)[':accId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ontology.term[':accId'].$get(args, options))
}

export async function getPathwaysDiagramsSearchSearchString(
  args: InferRequestType<(typeof client.pathways.diagrams.search)[':searchString']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pathways.diagrams.search[':searchString'].$get(args, options))
}

export async function getPathwaysDiagramsForCategoryCategory(
  args: InferRequestType<(typeof client.pathways.diagramsForCategory)[':category']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pathways.diagramsForCategory[':category'].$get(args, options))
}

export async function getPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermString(
  args: InferRequestType<
    (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':refRgdId'][':termString']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phenotype.phenominer.chart[':speciesTypeKey'][':refRgdId'][':termString'].$get(
      args,
      options,
    ),
  )
}

export async function getPhenotypePhenominerChartSpeciesTypeKeyTermString(
  args: InferRequestType<
    (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':termString']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phenotype.phenominer.chart[':speciesTypeKey'][':termString'].$get(args, options),
  )
}

export async function getQtlsMappedChrStartStopMapKey(
  args: InferRequestType<(typeof client.qtls.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.qtls.mapped[':chr'][':start'][':stop'][':mapKey'].$get(args, options),
  )
}

export async function getQtlsChrStartStopMapKey(
  args: InferRequestType<(typeof client.qtls)[':chr'][':start'][':stop'][':mapKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.qtls[':chr'][':start'][':stop'][':mapKey'].$get(args, options))
}

export async function getQtlsRgdId(
  args: InferRequestType<(typeof client.qtls)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.qtls[':rgdId'].$get(args, options))
}

export async function getSslpsMappedChrStartStopMapKey(
  args: InferRequestType<
    (typeof client.sslps.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sslps.mapped[':chr'][':start'][':stop'][':mapKey'].$get(args, options),
  )
}

export async function getStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDD(
  args: InferRequestType<
    (typeof client.stats.count.activeObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stats.count.activeObject[':speciesTypeKey'][':dateYYYYMMDD'].$get(args, options),
  )
}

export async function getStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDD(
  args: InferRequestType<
    (typeof client.stats.count.geneType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stats.count.geneType[':speciesTypeKey'][':dateYYYYMMDD'].$get(args, options),
  )
}

export async function getStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDD(
  args: InferRequestType<
    (typeof client.stats.count.objectStatus)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stats.count.objectStatus[':speciesTypeKey'][':dateYYYYMMDD'].$get(args, options),
  )
}

export async function getStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDD(
  args: InferRequestType<
    (typeof client.stats.count.objectWithRefSeq)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stats.count.objectWithRefSeq[':speciesTypeKey'][':dateYYYYMMDD'].$get(args, options),
  )
}

export async function getStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDD(
  args: InferRequestType<
    (typeof client.stats.count.objectWithReference)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stats.count.objectWithReference[':speciesTypeKey'][':dateYYYYMMDD'].$get(args, options),
  )
}

export async function getStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDD(
  args: InferRequestType<
    (typeof client.stats.count.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stats.count.objectWithXdb[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD'].$get(
      args,
      options,
    ),
  )
}

export async function getStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDD(
  args: InferRequestType<
    (typeof client.stats.count.proteinInteraction)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stats.count.proteinInteraction[':speciesTypeKey'][':dateYYYYMMDD'].$get(args, options),
  )
}

export async function getStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDD(
  args: InferRequestType<
    (typeof client.stats.count.qtlInheritanceType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stats.count.qtlInheritanceType[':speciesTypeKey'][':dateYYYYMMDD'].$get(args, options),
  )
}

export async function getStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDD(
  args: InferRequestType<
    (typeof client.stats.count.retiredObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stats.count.retiredObject[':speciesTypeKey'][':dateYYYYMMDD'].$get(args, options),
  )
}

export async function getStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDD(
  args: InferRequestType<
    (typeof client.stats.count.strainType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stats.count.strainType[':speciesTypeKey'][':dateYYYYMMDD'].$get(args, options),
  )
}

export async function getStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDD(
  args: InferRequestType<
    (typeof client.stats.count.withdrawnObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stats.count.withdrawnObject[':speciesTypeKey'][':dateYYYYMMDD'].$get(args, options),
  )
}

export async function getStatsCountXdbSpeciesTypeKeyDateYYYYMMDD(
  args: InferRequestType<
    (typeof client.stats.count.xdb)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stats.count.xdb[':speciesTypeKey'][':dateYYYYMMDD'].$get(args, options),
  )
}

export async function getStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD(
  args: InferRequestType<
    (typeof client.stats.diff.activeObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stats.diff.activeObject[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD'].$get(
      args,
      options,
    ),
  )
}

export async function getStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD(
  args: InferRequestType<
    (typeof client.stats.diff.geneType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stats.diff.geneType[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD'].$get(
      args,
      options,
    ),
  )
}

export async function getStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD(
  args: InferRequestType<
    (typeof client.stats.diff.objectStatus)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stats.diff.objectStatus[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD'].$get(
      args,
      options,
    ),
  )
}

export async function getStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD(
  args: InferRequestType<
    (typeof client.stats.diff.objectWithRefSeq)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stats.diff.objectWithRefSeq[':speciesTypeKey'][':dateFromYYYYMMDD'][
      ':dateToYYYYMMDD'
    ].$get(args, options),
  )
}

export async function getStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD(
  args: InferRequestType<
    (typeof client.stats.diff.objectWithReference)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stats.diff.objectWithReference[':speciesTypeKey'][':dateFromYYYYMMDD'][
      ':dateToYYYYMMDD'
    ].$get(args, options),
  )
}

export async function getStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDD(
  args: InferRequestType<
    (typeof client.stats.diff.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stats.diff.objectWithXdb[':speciesTypeKey'][':objectKey'][':dateFromYYYYMMDD'][
      ':dateToYYYYMMDD'
    ].$get(args, options),
  )
}

export async function getStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD(
  args: InferRequestType<
    (typeof client.stats.diff.proteinInteraction)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stats.diff.proteinInteraction[':speciesTypeKey'][':dateFromYYYYMMDD'][
      ':dateToYYYYMMDD'
    ].$get(args, options),
  )
}

export async function getStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD(
  args: InferRequestType<
    (typeof client.stats.diff.qtlInheritanceType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stats.diff.qtlInheritanceType[':speciesTypeKey'][':dateFromYYYYMMDD'][
      ':dateToYYYYMMDD'
    ].$get(args, options),
  )
}

export async function getStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD(
  args: InferRequestType<
    (typeof client.stats.diff.retiredObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stats.diff.retiredObject[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD'].$get(
      args,
      options,
    ),
  )
}

export async function getStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD(
  args: InferRequestType<
    (typeof client.stats.diff.strainType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stats.diff.strainType[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD'].$get(
      args,
      options,
    ),
  )
}

export async function getStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD(
  args: InferRequestType<
    (typeof client.stats.diff.withdrawnObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stats.diff.withdrawnObject[':speciesTypeKey'][':dateFromYYYYMMDD'][
      ':dateToYYYYMMDD'
    ].$get(args, options),
  )
}

export async function getStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD(
  args: InferRequestType<
    (typeof client.stats.diff.xdb)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stats.diff.xdb[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD'].$get(
      args,
      options,
    ),
  )
}

export async function getStatsTermAccIdFilterAccId(
  args: InferRequestType<(typeof client.stats.term)[':accId'][':filterAccId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats.term[':accId'][':filterAccId'].$get(args, options))
}

export async function getStrainsAll(options?: ClientRequestOptions) {
  return await parseResponse(client.strains.all.$get(undefined, options))
}

export async function getStrainsChrStartStopMapKey(
  args: InferRequestType<(typeof client.strains)[':chr'][':start'][':stop'][':mapKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.strains[':chr'][':start'][':stop'][':mapKey'].$get(args, options),
  )
}

export async function getStrainsRgdId(
  args: InferRequestType<(typeof client.strains)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.strains[':rgdId'].$get(args, options))
}
