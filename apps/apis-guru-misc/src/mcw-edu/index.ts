import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAgrAffectedGenomicModelsTaxonIdRoute,
  getAgrAllelesTaxonIdRoute,
  getAgrExpressionTaxonIdRoute,
  getAgrPhenotypesTaxonIdRoute,
  getAgrTaxonIdRoute,
  getAgrVariantsTaxonIdRoute,
  getAnnotationsAccIdRgdId2Route,
  getAnnotationsAccIdRgdIdRoute,
  getAnnotationsAccIdSpeciesTypeKeyIncludeChildrenRoute,
  getAnnotationsCountAccIdIncludeChildrenRoute,
  getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectTypeRoute,
  getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenRoute,
  getAnnotationsReferenceRefRgdIdRoute,
  getAnnotationsRgdIdRgdIdOntologyPrefixRoute,
  getAnnotationsRgdIdRgdIdRoute,
  getGenesAffyIdAffyIdSpeciesTypeKeyRoute,
  getGenesAliasAliasSymbolSpeciesTypeKeyRoute,
  getGenesAlleleRgdIdRoute,
  getGenesAnnotationAccIdRoute,
  getGenesAnnotationAccIdSpeciesTypeKeyRoute,
  getGenesChrStartStopMapKeyRoute,
  getGenesKeywordKeywordSpeciesTypeKeyRoute,
  getGenesMapMapKeyRoute,
  getGenesMappedChrStartStopMapKeyRoute,
  getGenesOrthologsRgdIdRoute,
  getGenesRegionChrStartStopMapKeyRoute,
  getGenesRgdIdRoute,
  getGenesSpeciesSpeciesTypeKeyRoute,
  getGenesSymbolSpeciesTypeKeyRoute,
  getLookupGeneTypesRoute,
  getLookupIdMapEnsemblGeneRgdIdRoute,
  getLookupIdMapEnsemblProteinRgdIdRoute,
  getLookupIdMapEnsemblTranscriptRgdIdRoute,
  getLookupIdMapGenBankNucleotideRgdIdRoute,
  getLookupIdMapGenBankProteinRgdIdRoute,
  getLookupIdMapGTExRgdIdRoute,
  getLookupIdMapHGNCRgdIdRoute,
  getLookupIdMapMGIRgdIdRoute,
  getLookupIdMapNCBIGeneRgdIdRoute,
  getLookupIdMapUniProtRgdIdRoute,
  getLookupMapsSpeciesTypeKeyRoute,
  getLookupSpeciesTypeKeysRoute,
  getLookupStandardUnitAccIdRoute,
  getMapsChrChromosomeMapKeyRoute,
  getMapsChrMapKeyRoute,
  getMapsSpeciesTypeKeyRoute,
  getOntologyOntAccIdRoute,
  getOntologyTermAccId1AccId2Route,
  getOntologyTermAccIdRoute,
  getPathwaysDiagramsForCategoryCategoryRoute,
  getPathwaysDiagramsSearchSearchStringRoute,
  getPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermStringRoute,
  getPhenotypePhenominerChartSpeciesTypeKeyTermStringRoute,
  getQtlsChrStartStopMapKeyRoute,
  getQtlsMappedChrStartStopMapKeyRoute,
  getQtlsRgdIdRoute,
  getSslpsMappedChrStartStopMapKeyRoute,
  getStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDDRoute,
  getStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDDRoute,
  getStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDDRoute,
  getStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDDRoute,
  getStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDDRoute,
  getStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDDRoute,
  getStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDDRoute,
  getStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDDRoute,
  getStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDDRoute,
  getStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDDRoute,
  getStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDDRoute,
  getStatsCountXdbSpeciesTypeKeyDateYYYYMMDDRoute,
  getStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute,
  getStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute,
  getStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute,
  getStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute,
  getStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute,
  getStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDDRoute,
  getStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute,
  getStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute,
  getStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute,
  getStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute,
  getStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute,
  getStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute,
  getStatsTermAccIdFilterAccIdRoute,
  getStrainsAllRoute,
  getStrainsChrStartStopMapKeyRoute,
  getStrainsRgdIdRoute,
  postAnnotationsIndexRoute,
  postEnrichmentAnnotatedGenesRoute,
  postEnrichmentDataRoute,
  postGenesAnnotationRoute,
  postGenesOrthologsRoute,
  postLookupIdMapEnsemblGeneRoute,
  postLookupIdMapEnsemblProteinRoute,
  postLookupIdMapEnsemblTranscriptRoute,
  postLookupIdMapGenBankNucleotideRoute,
  postLookupIdMapGenBankProteinRoute,
  postLookupIdMapGTExRoute,
  postLookupIdMapHGNCRoute,
  postLookupIdMapMGIRoute,
  postLookupIdMapNCBIGeneRoute,
  postLookupIdMapUniProtRoute,
} from './routes'
import {
  getAgrAffectedGenomicModelsTaxonIdRouteHandler,
  getAgrAllelesTaxonIdRouteHandler,
  getAgrExpressionTaxonIdRouteHandler,
  getAgrPhenotypesTaxonIdRouteHandler,
  getAgrTaxonIdRouteHandler,
  getAgrVariantsTaxonIdRouteHandler,
  getAnnotationsAccIdRgdId2RouteHandler,
  getAnnotationsAccIdRgdIdRouteHandler,
  getAnnotationsAccIdSpeciesTypeKeyIncludeChildrenRouteHandler,
  getAnnotationsCountAccIdIncludeChildrenRouteHandler,
  getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectTypeRouteHandler,
  getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenRouteHandler,
  getAnnotationsReferenceRefRgdIdRouteHandler,
  getAnnotationsRgdIdRgdIdOntologyPrefixRouteHandler,
  getAnnotationsRgdIdRgdIdRouteHandler,
  getGenesAffyIdAffyIdSpeciesTypeKeyRouteHandler,
  getGenesAliasAliasSymbolSpeciesTypeKeyRouteHandler,
  getGenesAlleleRgdIdRouteHandler,
  getGenesAnnotationAccIdRouteHandler,
  getGenesAnnotationAccIdSpeciesTypeKeyRouteHandler,
  getGenesChrStartStopMapKeyRouteHandler,
  getGenesKeywordKeywordSpeciesTypeKeyRouteHandler,
  getGenesMapMapKeyRouteHandler,
  getGenesMappedChrStartStopMapKeyRouteHandler,
  getGenesOrthologsRgdIdRouteHandler,
  getGenesRegionChrStartStopMapKeyRouteHandler,
  getGenesRgdIdRouteHandler,
  getGenesSpeciesSpeciesTypeKeyRouteHandler,
  getGenesSymbolSpeciesTypeKeyRouteHandler,
  getLookupGeneTypesRouteHandler,
  getLookupIdMapEnsemblGeneRgdIdRouteHandler,
  getLookupIdMapEnsemblProteinRgdIdRouteHandler,
  getLookupIdMapEnsemblTranscriptRgdIdRouteHandler,
  getLookupIdMapGenBankNucleotideRgdIdRouteHandler,
  getLookupIdMapGenBankProteinRgdIdRouteHandler,
  getLookupIdMapGTExRgdIdRouteHandler,
  getLookupIdMapHGNCRgdIdRouteHandler,
  getLookupIdMapMGIRgdIdRouteHandler,
  getLookupIdMapNCBIGeneRgdIdRouteHandler,
  getLookupIdMapUniProtRgdIdRouteHandler,
  getLookupMapsSpeciesTypeKeyRouteHandler,
  getLookupSpeciesTypeKeysRouteHandler,
  getLookupStandardUnitAccIdRouteHandler,
  getMapsChrChromosomeMapKeyRouteHandler,
  getMapsChrMapKeyRouteHandler,
  getMapsSpeciesTypeKeyRouteHandler,
  getOntologyOntAccIdRouteHandler,
  getOntologyTermAccId1AccId2RouteHandler,
  getOntologyTermAccIdRouteHandler,
  getPathwaysDiagramsForCategoryCategoryRouteHandler,
  getPathwaysDiagramsSearchSearchStringRouteHandler,
  getPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermStringRouteHandler,
  getPhenotypePhenominerChartSpeciesTypeKeyTermStringRouteHandler,
  getQtlsChrStartStopMapKeyRouteHandler,
  getQtlsMappedChrStartStopMapKeyRouteHandler,
  getQtlsRgdIdRouteHandler,
  getSslpsMappedChrStartStopMapKeyRouteHandler,
  getStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDDRouteHandler,
  getStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDDRouteHandler,
  getStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDDRouteHandler,
  getStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDDRouteHandler,
  getStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDDRouteHandler,
  getStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDDRouteHandler,
  getStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDDRouteHandler,
  getStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDDRouteHandler,
  getStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDDRouteHandler,
  getStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDDRouteHandler,
  getStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDDRouteHandler,
  getStatsCountXdbSpeciesTypeKeyDateYYYYMMDDRouteHandler,
  getStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRouteHandler,
  getStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRouteHandler,
  getStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRouteHandler,
  getStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRouteHandler,
  getStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRouteHandler,
  getStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDDRouteHandler,
  getStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRouteHandler,
  getStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRouteHandler,
  getStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRouteHandler,
  getStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRouteHandler,
  getStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRouteHandler,
  getStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRouteHandler,
  getStatsTermAccIdFilterAccIdRouteHandler,
  getStrainsAllRouteHandler,
  getStrainsChrStartStopMapKeyRouteHandler,
  getStrainsRgdIdRouteHandler,
  postAnnotationsIndexRouteHandler,
  postEnrichmentAnnotatedGenesRouteHandler,
  postEnrichmentDataRouteHandler,
  postGenesAnnotationRouteHandler,
  postGenesOrthologsRouteHandler,
  postLookupIdMapEnsemblGeneRouteHandler,
  postLookupIdMapEnsemblProteinRouteHandler,
  postLookupIdMapEnsemblTranscriptRouteHandler,
  postLookupIdMapGenBankNucleotideRouteHandler,
  postLookupIdMapGenBankProteinRouteHandler,
  postLookupIdMapGTExRouteHandler,
  postLookupIdMapHGNCRouteHandler,
  postLookupIdMapMGIRouteHandler,
  postLookupIdMapNCBIGeneRouteHandler,
  postLookupIdMapUniProtRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAgrAffectedGenomicModelsTaxonIdRoute, getAgrAffectedGenomicModelsTaxonIdRouteHandler)
  .openapi(getAgrAllelesTaxonIdRoute, getAgrAllelesTaxonIdRouteHandler)
  .openapi(getAgrExpressionTaxonIdRoute, getAgrExpressionTaxonIdRouteHandler)
  .openapi(getAgrPhenotypesTaxonIdRoute, getAgrPhenotypesTaxonIdRouteHandler)
  .openapi(getAgrVariantsTaxonIdRoute, getAgrVariantsTaxonIdRouteHandler)
  .openapi(getAgrTaxonIdRoute, getAgrTaxonIdRouteHandler)
  .openapi(postAnnotationsIndexRoute, postAnnotationsIndexRouteHandler)
  .openapi(getAnnotationsAccIdRgdIdRoute, getAnnotationsAccIdRgdIdRouteHandler)
  .openapi(
    getAnnotationsCountAccIdIncludeChildrenRoute,
    getAnnotationsCountAccIdIncludeChildrenRouteHandler,
  )
  .openapi(
    getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenRoute,
    getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenRouteHandler,
  )
  .openapi(
    getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectTypeRoute,
    getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectTypeRouteHandler,
  )
  .openapi(getAnnotationsReferenceRefRgdIdRoute, getAnnotationsReferenceRefRgdIdRouteHandler)
  .openapi(getAnnotationsRgdIdRgdIdRoute, getAnnotationsRgdIdRgdIdRouteHandler)
  .openapi(
    getAnnotationsRgdIdRgdIdOntologyPrefixRoute,
    getAnnotationsRgdIdRgdIdOntologyPrefixRouteHandler,
  )
  .openapi(getAnnotationsAccIdRgdId2Route, getAnnotationsAccIdRgdId2RouteHandler)
  .openapi(
    getAnnotationsAccIdSpeciesTypeKeyIncludeChildrenRoute,
    getAnnotationsAccIdSpeciesTypeKeyIncludeChildrenRouteHandler,
  )
  .openapi(postEnrichmentAnnotatedGenesRoute, postEnrichmentAnnotatedGenesRouteHandler)
  .openapi(postEnrichmentDataRoute, postEnrichmentDataRouteHandler)
  .openapi(getGenesAffyIdAffyIdSpeciesTypeKeyRoute, getGenesAffyIdAffyIdSpeciesTypeKeyRouteHandler)
  .openapi(
    getGenesAliasAliasSymbolSpeciesTypeKeyRoute,
    getGenesAliasAliasSymbolSpeciesTypeKeyRouteHandler,
  )
  .openapi(getGenesAlleleRgdIdRoute, getGenesAlleleRgdIdRouteHandler)
  .openapi(postGenesAnnotationRoute, postGenesAnnotationRouteHandler)
  .openapi(getGenesAnnotationAccIdRoute, getGenesAnnotationAccIdRouteHandler)
  .openapi(
    getGenesAnnotationAccIdSpeciesTypeKeyRoute,
    getGenesAnnotationAccIdSpeciesTypeKeyRouteHandler,
  )
  .openapi(
    getGenesKeywordKeywordSpeciesTypeKeyRoute,
    getGenesKeywordKeywordSpeciesTypeKeyRouteHandler,
  )
  .openapi(getGenesMapMapKeyRoute, getGenesMapMapKeyRouteHandler)
  .openapi(getGenesMappedChrStartStopMapKeyRoute, getGenesMappedChrStartStopMapKeyRouteHandler)
  .openapi(postGenesOrthologsRoute, postGenesOrthologsRouteHandler)
  .openapi(getGenesOrthologsRgdIdRoute, getGenesOrthologsRgdIdRouteHandler)
  .openapi(getGenesRegionChrStartStopMapKeyRoute, getGenesRegionChrStartStopMapKeyRouteHandler)
  .openapi(getGenesSpeciesSpeciesTypeKeyRoute, getGenesSpeciesSpeciesTypeKeyRouteHandler)
  .openapi(getGenesChrStartStopMapKeyRoute, getGenesChrStartStopMapKeyRouteHandler)
  .openapi(getGenesRgdIdRoute, getGenesRgdIdRouteHandler)
  .openapi(getGenesSymbolSpeciesTypeKeyRoute, getGenesSymbolSpeciesTypeKeyRouteHandler)
  .openapi(getLookupGeneTypesRoute, getLookupGeneTypesRouteHandler)
  .openapi(postLookupIdMapEnsemblGeneRoute, postLookupIdMapEnsemblGeneRouteHandler)
  .openapi(getLookupIdMapEnsemblGeneRgdIdRoute, getLookupIdMapEnsemblGeneRgdIdRouteHandler)
  .openapi(postLookupIdMapEnsemblProteinRoute, postLookupIdMapEnsemblProteinRouteHandler)
  .openapi(getLookupIdMapEnsemblProteinRgdIdRoute, getLookupIdMapEnsemblProteinRgdIdRouteHandler)
  .openapi(postLookupIdMapEnsemblTranscriptRoute, postLookupIdMapEnsemblTranscriptRouteHandler)
  .openapi(
    getLookupIdMapEnsemblTranscriptRgdIdRoute,
    getLookupIdMapEnsemblTranscriptRgdIdRouteHandler,
  )
  .openapi(postLookupIdMapGTExRoute, postLookupIdMapGTExRouteHandler)
  .openapi(getLookupIdMapGTExRgdIdRoute, getLookupIdMapGTExRgdIdRouteHandler)
  .openapi(postLookupIdMapGenBankNucleotideRoute, postLookupIdMapGenBankNucleotideRouteHandler)
  .openapi(
    getLookupIdMapGenBankNucleotideRgdIdRoute,
    getLookupIdMapGenBankNucleotideRgdIdRouteHandler,
  )
  .openapi(postLookupIdMapGenBankProteinRoute, postLookupIdMapGenBankProteinRouteHandler)
  .openapi(getLookupIdMapGenBankProteinRgdIdRoute, getLookupIdMapGenBankProteinRgdIdRouteHandler)
  .openapi(postLookupIdMapHGNCRoute, postLookupIdMapHGNCRouteHandler)
  .openapi(getLookupIdMapHGNCRgdIdRoute, getLookupIdMapHGNCRgdIdRouteHandler)
  .openapi(postLookupIdMapMGIRoute, postLookupIdMapMGIRouteHandler)
  .openapi(getLookupIdMapMGIRgdIdRoute, getLookupIdMapMGIRgdIdRouteHandler)
  .openapi(postLookupIdMapNCBIGeneRoute, postLookupIdMapNCBIGeneRouteHandler)
  .openapi(getLookupIdMapNCBIGeneRgdIdRoute, getLookupIdMapNCBIGeneRgdIdRouteHandler)
  .openapi(postLookupIdMapUniProtRoute, postLookupIdMapUniProtRouteHandler)
  .openapi(getLookupIdMapUniProtRgdIdRoute, getLookupIdMapUniProtRgdIdRouteHandler)
  .openapi(getLookupMapsSpeciesTypeKeyRoute, getLookupMapsSpeciesTypeKeyRouteHandler)
  .openapi(getLookupSpeciesTypeKeysRoute, getLookupSpeciesTypeKeysRouteHandler)
  .openapi(getLookupStandardUnitAccIdRoute, getLookupStandardUnitAccIdRouteHandler)
  .openapi(getMapsChrChromosomeMapKeyRoute, getMapsChrChromosomeMapKeyRouteHandler)
  .openapi(getMapsChrMapKeyRoute, getMapsChrMapKeyRouteHandler)
  .openapi(getMapsSpeciesTypeKeyRoute, getMapsSpeciesTypeKeyRouteHandler)
  .openapi(getOntologyOntAccIdRoute, getOntologyOntAccIdRouteHandler)
  .openapi(getOntologyTermAccId1AccId2Route, getOntologyTermAccId1AccId2RouteHandler)
  .openapi(getOntologyTermAccIdRoute, getOntologyTermAccIdRouteHandler)
  .openapi(
    getPathwaysDiagramsSearchSearchStringRoute,
    getPathwaysDiagramsSearchSearchStringRouteHandler,
  )
  .openapi(
    getPathwaysDiagramsForCategoryCategoryRoute,
    getPathwaysDiagramsForCategoryCategoryRouteHandler,
  )
  .openapi(
    getPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermStringRoute,
    getPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermStringRouteHandler,
  )
  .openapi(
    getPhenotypePhenominerChartSpeciesTypeKeyTermStringRoute,
    getPhenotypePhenominerChartSpeciesTypeKeyTermStringRouteHandler,
  )
  .openapi(getQtlsMappedChrStartStopMapKeyRoute, getQtlsMappedChrStartStopMapKeyRouteHandler)
  .openapi(getQtlsChrStartStopMapKeyRoute, getQtlsChrStartStopMapKeyRouteHandler)
  .openapi(getQtlsRgdIdRoute, getQtlsRgdIdRouteHandler)
  .openapi(getSslpsMappedChrStartStopMapKeyRoute, getSslpsMappedChrStartStopMapKeyRouteHandler)
  .openapi(
    getStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDDRoute,
    getStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDDRouteHandler,
  )
  .openapi(
    getStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDDRoute,
    getStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDDRouteHandler,
  )
  .openapi(
    getStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDDRoute,
    getStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDDRouteHandler,
  )
  .openapi(
    getStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDDRoute,
    getStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDDRouteHandler,
  )
  .openapi(
    getStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDDRoute,
    getStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDDRouteHandler,
  )
  .openapi(
    getStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDDRoute,
    getStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDDRouteHandler,
  )
  .openapi(
    getStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDDRoute,
    getStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDDRouteHandler,
  )
  .openapi(
    getStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDDRoute,
    getStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDDRouteHandler,
  )
  .openapi(
    getStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDDRoute,
    getStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDDRouteHandler,
  )
  .openapi(
    getStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDDRoute,
    getStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDDRouteHandler,
  )
  .openapi(
    getStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDDRoute,
    getStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDDRouteHandler,
  )
  .openapi(
    getStatsCountXdbSpeciesTypeKeyDateYYYYMMDDRoute,
    getStatsCountXdbSpeciesTypeKeyDateYYYYMMDDRouteHandler,
  )
  .openapi(
    getStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute,
    getStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRouteHandler,
  )
  .openapi(
    getStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute,
    getStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRouteHandler,
  )
  .openapi(
    getStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute,
    getStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRouteHandler,
  )
  .openapi(
    getStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute,
    getStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRouteHandler,
  )
  .openapi(
    getStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute,
    getStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRouteHandler,
  )
  .openapi(
    getStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDDRoute,
    getStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDDRouteHandler,
  )
  .openapi(
    getStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute,
    getStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRouteHandler,
  )
  .openapi(
    getStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute,
    getStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRouteHandler,
  )
  .openapi(
    getStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute,
    getStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRouteHandler,
  )
  .openapi(
    getStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute,
    getStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRouteHandler,
  )
  .openapi(
    getStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute,
    getStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRouteHandler,
  )
  .openapi(
    getStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute,
    getStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRouteHandler,
  )
  .openapi(getStatsTermAccIdFilterAccIdRoute, getStatsTermAccIdFilterAccIdRouteHandler)
  .openapi(getStrainsAllRoute, getStrainsAllRouteHandler)
  .openapi(getStrainsChrStartStopMapKeyRoute, getStrainsChrStartStopMapKeyRouteHandler)
  .openapi(getStrainsRgdIdRoute, getStrainsRgdIdRouteHandler)

export default app
