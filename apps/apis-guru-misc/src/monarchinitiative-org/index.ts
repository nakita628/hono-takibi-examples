import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVariationSetIdRoute,
  getAssociationBetweenSubjectObjectRoute,
  getAssociationFindSubjectCategoryObjectCategoryRoute,
  getAssociationFindSubjectCategoryRoute,
  getAssociationFromSubjectRoute,
  getAssociationIdRoute,
  getAssociationToObjectRoute,
  getAssociationTypeAssociationTypeRoute,
  getBioentityAnatomyIdGenesRoute,
  getBioentityAnatomyIdGenesTaxidRoute,
  getBioentityCaseIdDiseasesRoute,
  getBioentityCaseIdGenotypesRoute,
  getBioentityCaseIdModelsRoute,
  getBioentityCaseIdPhenotypesRoute,
  getBioentityCaseIdVariantsRoute,
  getBioentityDiseaseIdCasesRoute,
  getBioentityDiseaseIdGenesRoute,
  getBioentityDiseaseIdGenotypesRoute,
  getBioentityDiseaseIdModelsRoute,
  getBioentityDiseaseIdModelsTaxonRoute,
  getBioentityDiseaseIdPathwaysRoute,
  getBioentityDiseaseIdPhenotypesRoute,
  getBioentityDiseaseIdPublicationsRoute,
  getBioentityDiseaseIdTreatmentRoute,
  getBioentityDiseaseIdVariantsRoute,
  getBioentityFunctionIdGenesRoute,
  getBioentityFunctionIdPublicationsRoute,
  getBioentityFunctionIdRoute,
  getBioentityFunctionIdTaxonsRoute,
  getBioentityGeneIdAnatomyRoute,
  getBioentityGeneIdCasesRoute,
  getBioentityGeneIdDiseasesRoute,
  getBioentityGeneIdExpressionAnatomyRoute,
  getBioentityGeneIdFunctionRoute,
  getBioentityGeneIdGenotypesRoute,
  getBioentityGeneIdHomologsRoute,
  getBioentityGeneIdInteractionsRoute,
  getBioentityGeneIdModelsRoute,
  getBioentityGeneIdOrthologDiseasesRoute,
  getBioentityGeneIdOrthologPhenotypesRoute,
  getBioentityGeneIdPathwaysRoute,
  getBioentityGeneIdPhenotypesRoute,
  getBioentityGeneIdPublicationsRoute,
  getBioentityGeneIdVariantsRoute,
  getBioentityGenotypeIdCasesRoute,
  getBioentityGenotypeIdDiseasesRoute,
  getBioentityGenotypeIdGenesRoute,
  getBioentityGenotypeIdGenotypesRoute,
  getBioentityGenotypeIdModelsRoute,
  getBioentityGenotypeIdPhenotypesRoute,
  getBioentityGenotypeIdPublicationsRoute,
  getBioentityGenotypeIdVariantsRoute,
  getBioentityGotermIdGenesRoute,
  getBioentityIdAssociationsRoute,
  getBioentityIdRoute,
  getBioentityModelIdCasesRoute,
  getBioentityModelIdDiseasesRoute,
  getBioentityModelIdGenesRoute,
  getBioentityModelIdGenotypesRoute,
  getBioentityModelIdPhenotypesRoute,
  getBioentityModelIdPublicationsRoute,
  getBioentityModelIdVariantsRoute,
  getBioentityPathwayIdDiseasesRoute,
  getBioentityPathwayIdGenesRoute,
  getBioentityPathwayIdPhenotypesRoute,
  getBioentityPhenotypeIdAnatomyRoute,
  getBioentityPhenotypeIdCasesRoute,
  getBioentityPhenotypeIdDiseasesRoute,
  getBioentityPhenotypeIdGenesRoute,
  getBioentityPhenotypeIdGeneTaxidIdsRoute,
  getBioentityPhenotypeIdGenotypesRoute,
  getBioentityPhenotypeIdPathwaysRoute,
  getBioentityPhenotypeIdPublicationsRoute,
  getBioentityPhenotypeIdVariantsRoute,
  getBioentityPublicationIdDiseasesRoute,
  getBioentityPublicationIdGenesRoute,
  getBioentityPublicationIdGenotypesRoute,
  getBioentityPublicationIdModelsRoute,
  getBioentityPublicationIdPhenotypesRoute,
  getBioentityPublicationIdVariantsRoute,
  getBioentitysetAssociationsRoute,
  getBioentitysetDescriptorCountsRoute,
  getBioentitysetGraphRoute,
  getBioentitysetHomologsIndexRoute,
  getBioentitysetOverrepresentationRoute,
  getBioentitysetSlimmerAnatomyRoute,
  getBioentitysetSlimmerFunctionRoute,
  getBioentitysetSlimmerPhenotypeRoute,
  getBioentitySubstanceIdParticipantInRoute,
  getBioentitySubstanceIdRolesRoute,
  getBioentitySubstanceIdTreatsRoute,
  getBioentityTypeIdRoute,
  getBioentityVariantIdCasesRoute,
  getBioentityVariantIdDiseasesRoute,
  getBioentityVariantIdGenesRoute,
  getBioentityVariantIdGenotypesRoute,
  getBioentityVariantIdModelsRoute,
  getBioentityVariantIdPhenotypesRoute,
  getBioentityVariantIdPublicationsRoute,
  getCamActivityRoute,
  getCamInstanceIdRoute,
  getCamInstancesRoute,
  getCamModelContributorsRoute,
  getCamModelIdRoute,
  getCamModelPropertiesRoute,
  getCamModelPropertyValuesRoute,
  getCamModelQueryRoute,
  getCamModelRoute,
  getCamPhysicalInteractionRoute,
  getEvidenceGraphIdRoute,
  getEvidenceGraphIdTableRoute,
  getGenomeFeaturesWithinBuildReferenceBeginEndRoute,
  getGraphEdgesFromIdRoute,
  getGraphNodeIdRoute,
  getIdentifierMapperSourceTargetIndexRoute,
  getIdentifierPrefixesContractUriRoute,
  getIdentifierPrefixesExpandIdRoute,
  getIdentifierPrefixesIndexRoute,
  getIndividualIdRoute,
  getIndividualPedigreeIdRoute,
  getMartCaseObjectCategoryTaxonRoute,
  getMartDiseaseObjectCategoryTaxonRoute,
  getMartGeneObjectCategoryTaxonRoute,
  getMartOrthologTaxon1Taxon2Route,
  getMartParalogTaxon1Taxon2Route,
  getMetadataDatasetsRoute,
  getNlpAnnotateEntitiesRoute,
  getNlpAnnotateIndexRoute,
  getOntolIdentifierIndexRoute,
  getOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonRoute,
  getOntolLabelerIndexRoute,
  getOntologySharedSubjectObjectRoute,
  getOntologySubsetIdRoute,
  getOntologyTermIdGraphRoute,
  getOntologyTermIdRoute,
  getOntologyTermIdSubgraphRoute,
  getOntologyTermIdSubsetsRoute,
  getOntolSubgraphOntologyNodeRoute,
  getOwlOntologyDlqueryQueryRoute,
  getOwlOntologySparqlQueryRoute,
  getPairSimJaccardId1Id2Route,
  getRelationUsageBetweenSubjectCategoryObjectCategoryRoute,
  getRelationUsageIndexRoute,
  getRelationUsagePivotLabelRoute,
  getRelationUsagePivotRoute,
  getSearchEntityAutocompleteTermRoute,
  getSearchEntityHpoPlTermRoute,
  getSearchEntityTermRoute,
  getSimCompareRoute,
  getSimScoreRoute,
  getSimSearchRoute,
  getVariationSetAnalyzeIdRoute,
  getVariationSetArchiveYearMonthDayRoute,
  getVariationSetIdRoute,
  getVariationSetIndexRoute,
  postMmeDiseaseRoute,
  postMmeFlyRoute,
  postMmeMouseRoute,
  postMmeNematodeRoute,
  postMmeZebrafishRoute,
  postNlpAnnotateEntitiesRoute,
  postNlpAnnotateIndexRoute,
  postOntolIdentifierIndexRoute,
  postOntolSubgraphOntologyNodeRoute,
  postSimCompareRoute,
  postSimScoreRoute,
  postVariationSetIndexRoute,
  putVariationSetIdRoute,
} from './routes'
import {
  deleteVariationSetIdRouteHandler,
  getAssociationBetweenSubjectObjectRouteHandler,
  getAssociationFindSubjectCategoryObjectCategoryRouteHandler,
  getAssociationFindSubjectCategoryRouteHandler,
  getAssociationFromSubjectRouteHandler,
  getAssociationIdRouteHandler,
  getAssociationToObjectRouteHandler,
  getAssociationTypeAssociationTypeRouteHandler,
  getBioentityAnatomyIdGenesRouteHandler,
  getBioentityAnatomyIdGenesTaxidRouteHandler,
  getBioentityCaseIdDiseasesRouteHandler,
  getBioentityCaseIdGenotypesRouteHandler,
  getBioentityCaseIdModelsRouteHandler,
  getBioentityCaseIdPhenotypesRouteHandler,
  getBioentityCaseIdVariantsRouteHandler,
  getBioentityDiseaseIdCasesRouteHandler,
  getBioentityDiseaseIdGenesRouteHandler,
  getBioentityDiseaseIdGenotypesRouteHandler,
  getBioentityDiseaseIdModelsRouteHandler,
  getBioentityDiseaseIdModelsTaxonRouteHandler,
  getBioentityDiseaseIdPathwaysRouteHandler,
  getBioentityDiseaseIdPhenotypesRouteHandler,
  getBioentityDiseaseIdPublicationsRouteHandler,
  getBioentityDiseaseIdTreatmentRouteHandler,
  getBioentityDiseaseIdVariantsRouteHandler,
  getBioentityFunctionIdGenesRouteHandler,
  getBioentityFunctionIdPublicationsRouteHandler,
  getBioentityFunctionIdRouteHandler,
  getBioentityFunctionIdTaxonsRouteHandler,
  getBioentityGeneIdAnatomyRouteHandler,
  getBioentityGeneIdCasesRouteHandler,
  getBioentityGeneIdDiseasesRouteHandler,
  getBioentityGeneIdExpressionAnatomyRouteHandler,
  getBioentityGeneIdFunctionRouteHandler,
  getBioentityGeneIdGenotypesRouteHandler,
  getBioentityGeneIdHomologsRouteHandler,
  getBioentityGeneIdInteractionsRouteHandler,
  getBioentityGeneIdModelsRouteHandler,
  getBioentityGeneIdOrthologDiseasesRouteHandler,
  getBioentityGeneIdOrthologPhenotypesRouteHandler,
  getBioentityGeneIdPathwaysRouteHandler,
  getBioentityGeneIdPhenotypesRouteHandler,
  getBioentityGeneIdPublicationsRouteHandler,
  getBioentityGeneIdVariantsRouteHandler,
  getBioentityGenotypeIdCasesRouteHandler,
  getBioentityGenotypeIdDiseasesRouteHandler,
  getBioentityGenotypeIdGenesRouteHandler,
  getBioentityGenotypeIdGenotypesRouteHandler,
  getBioentityGenotypeIdModelsRouteHandler,
  getBioentityGenotypeIdPhenotypesRouteHandler,
  getBioentityGenotypeIdPublicationsRouteHandler,
  getBioentityGenotypeIdVariantsRouteHandler,
  getBioentityGotermIdGenesRouteHandler,
  getBioentityIdAssociationsRouteHandler,
  getBioentityIdRouteHandler,
  getBioentityModelIdCasesRouteHandler,
  getBioentityModelIdDiseasesRouteHandler,
  getBioentityModelIdGenesRouteHandler,
  getBioentityModelIdGenotypesRouteHandler,
  getBioentityModelIdPhenotypesRouteHandler,
  getBioentityModelIdPublicationsRouteHandler,
  getBioentityModelIdVariantsRouteHandler,
  getBioentityPathwayIdDiseasesRouteHandler,
  getBioentityPathwayIdGenesRouteHandler,
  getBioentityPathwayIdPhenotypesRouteHandler,
  getBioentityPhenotypeIdAnatomyRouteHandler,
  getBioentityPhenotypeIdCasesRouteHandler,
  getBioentityPhenotypeIdDiseasesRouteHandler,
  getBioentityPhenotypeIdGenesRouteHandler,
  getBioentityPhenotypeIdGeneTaxidIdsRouteHandler,
  getBioentityPhenotypeIdGenotypesRouteHandler,
  getBioentityPhenotypeIdPathwaysRouteHandler,
  getBioentityPhenotypeIdPublicationsRouteHandler,
  getBioentityPhenotypeIdVariantsRouteHandler,
  getBioentityPublicationIdDiseasesRouteHandler,
  getBioentityPublicationIdGenesRouteHandler,
  getBioentityPublicationIdGenotypesRouteHandler,
  getBioentityPublicationIdModelsRouteHandler,
  getBioentityPublicationIdPhenotypesRouteHandler,
  getBioentityPublicationIdVariantsRouteHandler,
  getBioentitysetAssociationsRouteHandler,
  getBioentitysetDescriptorCountsRouteHandler,
  getBioentitysetGraphRouteHandler,
  getBioentitysetHomologsIndexRouteHandler,
  getBioentitysetOverrepresentationRouteHandler,
  getBioentitysetSlimmerAnatomyRouteHandler,
  getBioentitysetSlimmerFunctionRouteHandler,
  getBioentitysetSlimmerPhenotypeRouteHandler,
  getBioentitySubstanceIdParticipantInRouteHandler,
  getBioentitySubstanceIdRolesRouteHandler,
  getBioentitySubstanceIdTreatsRouteHandler,
  getBioentityTypeIdRouteHandler,
  getBioentityVariantIdCasesRouteHandler,
  getBioentityVariantIdDiseasesRouteHandler,
  getBioentityVariantIdGenesRouteHandler,
  getBioentityVariantIdGenotypesRouteHandler,
  getBioentityVariantIdModelsRouteHandler,
  getBioentityVariantIdPhenotypesRouteHandler,
  getBioentityVariantIdPublicationsRouteHandler,
  getCamActivityRouteHandler,
  getCamInstanceIdRouteHandler,
  getCamInstancesRouteHandler,
  getCamModelContributorsRouteHandler,
  getCamModelIdRouteHandler,
  getCamModelPropertiesRouteHandler,
  getCamModelPropertyValuesRouteHandler,
  getCamModelQueryRouteHandler,
  getCamModelRouteHandler,
  getCamPhysicalInteractionRouteHandler,
  getEvidenceGraphIdRouteHandler,
  getEvidenceGraphIdTableRouteHandler,
  getGenomeFeaturesWithinBuildReferenceBeginEndRouteHandler,
  getGraphEdgesFromIdRouteHandler,
  getGraphNodeIdRouteHandler,
  getIdentifierMapperSourceTargetIndexRouteHandler,
  getIdentifierPrefixesContractUriRouteHandler,
  getIdentifierPrefixesExpandIdRouteHandler,
  getIdentifierPrefixesIndexRouteHandler,
  getIndividualIdRouteHandler,
  getIndividualPedigreeIdRouteHandler,
  getMartCaseObjectCategoryTaxonRouteHandler,
  getMartDiseaseObjectCategoryTaxonRouteHandler,
  getMartGeneObjectCategoryTaxonRouteHandler,
  getMartOrthologTaxon1Taxon2RouteHandler,
  getMartParalogTaxon1Taxon2RouteHandler,
  getMetadataDatasetsRouteHandler,
  getNlpAnnotateEntitiesRouteHandler,
  getNlpAnnotateIndexRouteHandler,
  getOntolIdentifierIndexRouteHandler,
  getOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonRouteHandler,
  getOntolLabelerIndexRouteHandler,
  getOntologySharedSubjectObjectRouteHandler,
  getOntologySubsetIdRouteHandler,
  getOntologyTermIdGraphRouteHandler,
  getOntologyTermIdRouteHandler,
  getOntologyTermIdSubgraphRouteHandler,
  getOntologyTermIdSubsetsRouteHandler,
  getOntolSubgraphOntologyNodeRouteHandler,
  getOwlOntologyDlqueryQueryRouteHandler,
  getOwlOntologySparqlQueryRouteHandler,
  getPairSimJaccardId1Id2RouteHandler,
  getRelationUsageBetweenSubjectCategoryObjectCategoryRouteHandler,
  getRelationUsageIndexRouteHandler,
  getRelationUsagePivotLabelRouteHandler,
  getRelationUsagePivotRouteHandler,
  getSearchEntityAutocompleteTermRouteHandler,
  getSearchEntityHpoPlTermRouteHandler,
  getSearchEntityTermRouteHandler,
  getSimCompareRouteHandler,
  getSimScoreRouteHandler,
  getSimSearchRouteHandler,
  getVariationSetAnalyzeIdRouteHandler,
  getVariationSetArchiveYearMonthDayRouteHandler,
  getVariationSetIdRouteHandler,
  getVariationSetIndexRouteHandler,
  postMmeDiseaseRouteHandler,
  postMmeFlyRouteHandler,
  postMmeMouseRouteHandler,
  postMmeNematodeRouteHandler,
  postMmeZebrafishRouteHandler,
  postNlpAnnotateEntitiesRouteHandler,
  postNlpAnnotateIndexRouteHandler,
  postOntolIdentifierIndexRouteHandler,
  postOntolSubgraphOntologyNodeRouteHandler,
  postSimCompareRouteHandler,
  postSimScoreRouteHandler,
  postVariationSetIndexRouteHandler,
  putVariationSetIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAssociationBetweenSubjectObjectRoute, getAssociationBetweenSubjectObjectRouteHandler)
  .openapi(getAssociationFindSubjectCategoryRoute, getAssociationFindSubjectCategoryRouteHandler)
  .openapi(
    getAssociationFindSubjectCategoryObjectCategoryRoute,
    getAssociationFindSubjectCategoryObjectCategoryRouteHandler,
  )
  .openapi(getAssociationFromSubjectRoute, getAssociationFromSubjectRouteHandler)
  .openapi(getAssociationToObjectRoute, getAssociationToObjectRouteHandler)
  .openapi(getAssociationTypeAssociationTypeRoute, getAssociationTypeAssociationTypeRouteHandler)
  .openapi(getAssociationIdRoute, getAssociationIdRouteHandler)
  .openapi(getBioentityAnatomyIdGenesRoute, getBioentityAnatomyIdGenesRouteHandler)
  .openapi(getBioentityAnatomyIdGenesTaxidRoute, getBioentityAnatomyIdGenesTaxidRouteHandler)
  .openapi(getBioentityCaseIdDiseasesRoute, getBioentityCaseIdDiseasesRouteHandler)
  .openapi(getBioentityCaseIdGenotypesRoute, getBioentityCaseIdGenotypesRouteHandler)
  .openapi(getBioentityCaseIdModelsRoute, getBioentityCaseIdModelsRouteHandler)
  .openapi(getBioentityCaseIdPhenotypesRoute, getBioentityCaseIdPhenotypesRouteHandler)
  .openapi(getBioentityCaseIdVariantsRoute, getBioentityCaseIdVariantsRouteHandler)
  .openapi(getBioentityDiseaseIdCasesRoute, getBioentityDiseaseIdCasesRouteHandler)
  .openapi(getBioentityDiseaseIdGenesRoute, getBioentityDiseaseIdGenesRouteHandler)
  .openapi(getBioentityDiseaseIdGenotypesRoute, getBioentityDiseaseIdGenotypesRouteHandler)
  .openapi(getBioentityDiseaseIdModelsRoute, getBioentityDiseaseIdModelsRouteHandler)
  .openapi(getBioentityDiseaseIdModelsTaxonRoute, getBioentityDiseaseIdModelsTaxonRouteHandler)
  .openapi(getBioentityDiseaseIdPathwaysRoute, getBioentityDiseaseIdPathwaysRouteHandler)
  .openapi(getBioentityDiseaseIdPhenotypesRoute, getBioentityDiseaseIdPhenotypesRouteHandler)
  .openapi(getBioentityDiseaseIdPublicationsRoute, getBioentityDiseaseIdPublicationsRouteHandler)
  .openapi(getBioentityDiseaseIdTreatmentRoute, getBioentityDiseaseIdTreatmentRouteHandler)
  .openapi(getBioentityDiseaseIdVariantsRoute, getBioentityDiseaseIdVariantsRouteHandler)
  .openapi(getBioentityFunctionIdRoute, getBioentityFunctionIdRouteHandler)
  .openapi(getBioentityFunctionIdGenesRoute, getBioentityFunctionIdGenesRouteHandler)
  .openapi(getBioentityFunctionIdPublicationsRoute, getBioentityFunctionIdPublicationsRouteHandler)
  .openapi(getBioentityFunctionIdTaxonsRoute, getBioentityFunctionIdTaxonsRouteHandler)
  .openapi(getBioentityGeneIdAnatomyRoute, getBioentityGeneIdAnatomyRouteHandler)
  .openapi(getBioentityGeneIdCasesRoute, getBioentityGeneIdCasesRouteHandler)
  .openapi(getBioentityGeneIdDiseasesRoute, getBioentityGeneIdDiseasesRouteHandler)
  .openapi(
    getBioentityGeneIdExpressionAnatomyRoute,
    getBioentityGeneIdExpressionAnatomyRouteHandler,
  )
  .openapi(getBioentityGeneIdFunctionRoute, getBioentityGeneIdFunctionRouteHandler)
  .openapi(getBioentityGeneIdGenotypesRoute, getBioentityGeneIdGenotypesRouteHandler)
  .openapi(getBioentityGeneIdHomologsRoute, getBioentityGeneIdHomologsRouteHandler)
  .openapi(getBioentityGeneIdInteractionsRoute, getBioentityGeneIdInteractionsRouteHandler)
  .openapi(getBioentityGeneIdModelsRoute, getBioentityGeneIdModelsRouteHandler)
  .openapi(getBioentityGeneIdOrthologDiseasesRoute, getBioentityGeneIdOrthologDiseasesRouteHandler)
  .openapi(
    getBioentityGeneIdOrthologPhenotypesRoute,
    getBioentityGeneIdOrthologPhenotypesRouteHandler,
  )
  .openapi(getBioentityGeneIdPathwaysRoute, getBioentityGeneIdPathwaysRouteHandler)
  .openapi(getBioentityGeneIdPhenotypesRoute, getBioentityGeneIdPhenotypesRouteHandler)
  .openapi(getBioentityGeneIdPublicationsRoute, getBioentityGeneIdPublicationsRouteHandler)
  .openapi(getBioentityGeneIdVariantsRoute, getBioentityGeneIdVariantsRouteHandler)
  .openapi(getBioentityGenotypeIdCasesRoute, getBioentityGenotypeIdCasesRouteHandler)
  .openapi(getBioentityGenotypeIdDiseasesRoute, getBioentityGenotypeIdDiseasesRouteHandler)
  .openapi(getBioentityGenotypeIdGenesRoute, getBioentityGenotypeIdGenesRouteHandler)
  .openapi(getBioentityGenotypeIdGenotypesRoute, getBioentityGenotypeIdGenotypesRouteHandler)
  .openapi(getBioentityGenotypeIdModelsRoute, getBioentityGenotypeIdModelsRouteHandler)
  .openapi(getBioentityGenotypeIdPhenotypesRoute, getBioentityGenotypeIdPhenotypesRouteHandler)
  .openapi(getBioentityGenotypeIdPublicationsRoute, getBioentityGenotypeIdPublicationsRouteHandler)
  .openapi(getBioentityGenotypeIdVariantsRoute, getBioentityGenotypeIdVariantsRouteHandler)
  .openapi(getBioentityGotermIdGenesRoute, getBioentityGotermIdGenesRouteHandler)
  .openapi(getBioentityModelIdCasesRoute, getBioentityModelIdCasesRouteHandler)
  .openapi(getBioentityModelIdDiseasesRoute, getBioentityModelIdDiseasesRouteHandler)
  .openapi(getBioentityModelIdGenesRoute, getBioentityModelIdGenesRouteHandler)
  .openapi(getBioentityModelIdGenotypesRoute, getBioentityModelIdGenotypesRouteHandler)
  .openapi(getBioentityModelIdPhenotypesRoute, getBioentityModelIdPhenotypesRouteHandler)
  .openapi(getBioentityModelIdPublicationsRoute, getBioentityModelIdPublicationsRouteHandler)
  .openapi(getBioentityModelIdVariantsRoute, getBioentityModelIdVariantsRouteHandler)
  .openapi(getBioentityPathwayIdDiseasesRoute, getBioentityPathwayIdDiseasesRouteHandler)
  .openapi(getBioentityPathwayIdGenesRoute, getBioentityPathwayIdGenesRouteHandler)
  .openapi(getBioentityPathwayIdPhenotypesRoute, getBioentityPathwayIdPhenotypesRouteHandler)
  .openapi(getBioentityPhenotypeIdAnatomyRoute, getBioentityPhenotypeIdAnatomyRouteHandler)
  .openapi(getBioentityPhenotypeIdCasesRoute, getBioentityPhenotypeIdCasesRouteHandler)
  .openapi(getBioentityPhenotypeIdDiseasesRoute, getBioentityPhenotypeIdDiseasesRouteHandler)
  .openapi(
    getBioentityPhenotypeIdGeneTaxidIdsRoute,
    getBioentityPhenotypeIdGeneTaxidIdsRouteHandler,
  )
  .openapi(getBioentityPhenotypeIdGenesRoute, getBioentityPhenotypeIdGenesRouteHandler)
  .openapi(getBioentityPhenotypeIdGenotypesRoute, getBioentityPhenotypeIdGenotypesRouteHandler)
  .openapi(getBioentityPhenotypeIdPathwaysRoute, getBioentityPhenotypeIdPathwaysRouteHandler)
  .openapi(
    getBioentityPhenotypeIdPublicationsRoute,
    getBioentityPhenotypeIdPublicationsRouteHandler,
  )
  .openapi(getBioentityPhenotypeIdVariantsRoute, getBioentityPhenotypeIdVariantsRouteHandler)
  .openapi(getBioentityPublicationIdDiseasesRoute, getBioentityPublicationIdDiseasesRouteHandler)
  .openapi(getBioentityPublicationIdGenesRoute, getBioentityPublicationIdGenesRouteHandler)
  .openapi(getBioentityPublicationIdGenotypesRoute, getBioentityPublicationIdGenotypesRouteHandler)
  .openapi(getBioentityPublicationIdModelsRoute, getBioentityPublicationIdModelsRouteHandler)
  .openapi(
    getBioentityPublicationIdPhenotypesRoute,
    getBioentityPublicationIdPhenotypesRouteHandler,
  )
  .openapi(getBioentityPublicationIdVariantsRoute, getBioentityPublicationIdVariantsRouteHandler)
  .openapi(
    getBioentitySubstanceIdParticipantInRoute,
    getBioentitySubstanceIdParticipantInRouteHandler,
  )
  .openapi(getBioentitySubstanceIdRolesRoute, getBioentitySubstanceIdRolesRouteHandler)
  .openapi(getBioentitySubstanceIdTreatsRoute, getBioentitySubstanceIdTreatsRouteHandler)
  .openapi(getBioentityVariantIdCasesRoute, getBioentityVariantIdCasesRouteHandler)
  .openapi(getBioentityVariantIdDiseasesRoute, getBioentityVariantIdDiseasesRouteHandler)
  .openapi(getBioentityVariantIdGenesRoute, getBioentityVariantIdGenesRouteHandler)
  .openapi(getBioentityVariantIdGenotypesRoute, getBioentityVariantIdGenotypesRouteHandler)
  .openapi(getBioentityVariantIdModelsRoute, getBioentityVariantIdModelsRouteHandler)
  .openapi(getBioentityVariantIdPhenotypesRoute, getBioentityVariantIdPhenotypesRouteHandler)
  .openapi(getBioentityVariantIdPublicationsRoute, getBioentityVariantIdPublicationsRouteHandler)
  .openapi(getBioentityIdRoute, getBioentityIdRouteHandler)
  .openapi(getBioentityIdAssociationsRoute, getBioentityIdAssociationsRouteHandler)
  .openapi(getBioentityTypeIdRoute, getBioentityTypeIdRouteHandler)
  .openapi(getBioentitysetAssociationsRoute, getBioentitysetAssociationsRouteHandler)
  .openapi(getBioentitysetDescriptorCountsRoute, getBioentitysetDescriptorCountsRouteHandler)
  .openapi(getBioentitysetGraphRoute, getBioentitysetGraphRouteHandler)
  .openapi(getBioentitysetHomologsIndexRoute, getBioentitysetHomologsIndexRouteHandler)
  .openapi(getBioentitysetOverrepresentationRoute, getBioentitysetOverrepresentationRouteHandler)
  .openapi(getBioentitysetSlimmerAnatomyRoute, getBioentitysetSlimmerAnatomyRouteHandler)
  .openapi(getBioentitysetSlimmerFunctionRoute, getBioentitysetSlimmerFunctionRouteHandler)
  .openapi(getBioentitysetSlimmerPhenotypeRoute, getBioentitysetSlimmerPhenotypeRouteHandler)
  .openapi(getCamActivityRoute, getCamActivityRouteHandler)
  .openapi(getCamInstanceIdRoute, getCamInstanceIdRouteHandler)
  .openapi(getCamInstancesRoute, getCamInstancesRouteHandler)
  .openapi(getCamModelRoute, getCamModelRouteHandler)
  .openapi(getCamModelContributorsRoute, getCamModelContributorsRouteHandler)
  .openapi(getCamModelPropertiesRoute, getCamModelPropertiesRouteHandler)
  .openapi(getCamModelPropertyValuesRoute, getCamModelPropertyValuesRouteHandler)
  .openapi(getCamModelQueryRoute, getCamModelQueryRouteHandler)
  .openapi(getCamModelIdRoute, getCamModelIdRouteHandler)
  .openapi(getCamPhysicalInteractionRoute, getCamPhysicalInteractionRouteHandler)
  .openapi(getEvidenceGraphIdRoute, getEvidenceGraphIdRouteHandler)
  .openapi(getEvidenceGraphIdTableRoute, getEvidenceGraphIdTableRouteHandler)
  .openapi(
    getGenomeFeaturesWithinBuildReferenceBeginEndRoute,
    getGenomeFeaturesWithinBuildReferenceBeginEndRouteHandler,
  )
  .openapi(getGraphEdgesFromIdRoute, getGraphEdgesFromIdRouteHandler)
  .openapi(getGraphNodeIdRoute, getGraphNodeIdRouteHandler)
  .openapi(
    getIdentifierMapperSourceTargetIndexRoute,
    getIdentifierMapperSourceTargetIndexRouteHandler,
  )
  .openapi(getIdentifierPrefixesIndexRoute, getIdentifierPrefixesIndexRouteHandler)
  .openapi(getIdentifierPrefixesContractUriRoute, getIdentifierPrefixesContractUriRouteHandler)
  .openapi(getIdentifierPrefixesExpandIdRoute, getIdentifierPrefixesExpandIdRouteHandler)
  .openapi(getIndividualPedigreeIdRoute, getIndividualPedigreeIdRouteHandler)
  .openapi(getIndividualIdRoute, getIndividualIdRouteHandler)
  .openapi(getMartCaseObjectCategoryTaxonRoute, getMartCaseObjectCategoryTaxonRouteHandler)
  .openapi(getMartDiseaseObjectCategoryTaxonRoute, getMartDiseaseObjectCategoryTaxonRouteHandler)
  .openapi(getMartGeneObjectCategoryTaxonRoute, getMartGeneObjectCategoryTaxonRouteHandler)
  .openapi(getMartOrthologTaxon1Taxon2Route, getMartOrthologTaxon1Taxon2RouteHandler)
  .openapi(getMartParalogTaxon1Taxon2Route, getMartParalogTaxon1Taxon2RouteHandler)
  .openapi(getMetadataDatasetsRoute, getMetadataDatasetsRouteHandler)
  .openapi(postMmeDiseaseRoute, postMmeDiseaseRouteHandler)
  .openapi(postMmeFlyRoute, postMmeFlyRouteHandler)
  .openapi(postMmeMouseRoute, postMmeMouseRouteHandler)
  .openapi(postMmeNematodeRoute, postMmeNematodeRouteHandler)
  .openapi(postMmeZebrafishRoute, postMmeZebrafishRouteHandler)
  .openapi(getNlpAnnotateIndexRoute, getNlpAnnotateIndexRouteHandler)
  .openapi(postNlpAnnotateIndexRoute, postNlpAnnotateIndexRouteHandler)
  .openapi(getNlpAnnotateEntitiesRoute, getNlpAnnotateEntitiesRouteHandler)
  .openapi(postNlpAnnotateEntitiesRoute, postNlpAnnotateEntitiesRouteHandler)
  .openapi(getOntolIdentifierIndexRoute, getOntolIdentifierIndexRouteHandler)
  .openapi(postOntolIdentifierIndexRoute, postOntolIdentifierIndexRouteHandler)
  .openapi(
    getOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonRoute,
    getOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonRouteHandler,
  )
  .openapi(getOntolLabelerIndexRoute, getOntolLabelerIndexRouteHandler)
  .openapi(getOntolSubgraphOntologyNodeRoute, getOntolSubgraphOntologyNodeRouteHandler)
  .openapi(postOntolSubgraphOntologyNodeRoute, postOntolSubgraphOntologyNodeRouteHandler)
  .openapi(getOntologySharedSubjectObjectRoute, getOntologySharedSubjectObjectRouteHandler)
  .openapi(getOntologySubsetIdRoute, getOntologySubsetIdRouteHandler)
  .openapi(getOntologyTermIdRoute, getOntologyTermIdRouteHandler)
  .openapi(getOntologyTermIdGraphRoute, getOntologyTermIdGraphRouteHandler)
  .openapi(getOntologyTermIdSubgraphRoute, getOntologyTermIdSubgraphRouteHandler)
  .openapi(getOntologyTermIdSubsetsRoute, getOntologyTermIdSubsetsRouteHandler)
  .openapi(getOwlOntologyDlqueryQueryRoute, getOwlOntologyDlqueryQueryRouteHandler)
  .openapi(getOwlOntologySparqlQueryRoute, getOwlOntologySparqlQueryRouteHandler)
  .openapi(getPairSimJaccardId1Id2Route, getPairSimJaccardId1Id2RouteHandler)
  .openapi(getRelationUsageIndexRoute, getRelationUsageIndexRouteHandler)
  .openapi(
    getRelationUsageBetweenSubjectCategoryObjectCategoryRoute,
    getRelationUsageBetweenSubjectCategoryObjectCategoryRouteHandler,
  )
  .openapi(getRelationUsagePivotRoute, getRelationUsagePivotRouteHandler)
  .openapi(getRelationUsagePivotLabelRoute, getRelationUsagePivotLabelRouteHandler)
  .openapi(getSearchEntityAutocompleteTermRoute, getSearchEntityAutocompleteTermRouteHandler)
  .openapi(getSearchEntityHpoPlTermRoute, getSearchEntityHpoPlTermRouteHandler)
  .openapi(getSearchEntityTermRoute, getSearchEntityTermRouteHandler)
  .openapi(getSimCompareRoute, getSimCompareRouteHandler)
  .openapi(postSimCompareRoute, postSimCompareRouteHandler)
  .openapi(getSimScoreRoute, getSimScoreRouteHandler)
  .openapi(postSimScoreRoute, postSimScoreRouteHandler)
  .openapi(getSimSearchRoute, getSimSearchRouteHandler)
  .openapi(getVariationSetIndexRoute, getVariationSetIndexRouteHandler)
  .openapi(postVariationSetIndexRoute, postVariationSetIndexRouteHandler)
  .openapi(getVariationSetAnalyzeIdRoute, getVariationSetAnalyzeIdRouteHandler)
  .openapi(getVariationSetArchiveYearMonthDayRoute, getVariationSetArchiveYearMonthDayRouteHandler)
  .openapi(deleteVariationSetIdRoute, deleteVariationSetIdRouteHandler)
  .openapi(getVariationSetIdRoute, getVariationSetIdRouteHandler)
  .openapi(putVariationSetIdRoute, putVariationSetIdRouteHandler)

export default app
