import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
} from '../routes'

const app = new OpenAPIHono()

export const bioentityHandler = app
  .openapi(getBioentityAnatomyIdGenesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityAnatomyIdGenesTaxidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityCaseIdDiseasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityCaseIdGenotypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityCaseIdModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityCaseIdPhenotypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityCaseIdVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityDiseaseIdCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityDiseaseIdGenesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityDiseaseIdGenotypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityDiseaseIdModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityDiseaseIdModelsTaxonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityDiseaseIdPathwaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityDiseaseIdPhenotypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityDiseaseIdPublicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityDiseaseIdTreatmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityDiseaseIdVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityFunctionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityFunctionIdGenesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityFunctionIdPublicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityFunctionIdTaxonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityGeneIdAnatomyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityGeneIdCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityGeneIdDiseasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityGeneIdExpressionAnatomyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityGeneIdFunctionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityGeneIdGenotypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityGeneIdHomologsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityGeneIdInteractionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityGeneIdModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityGeneIdOrthologDiseasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityGeneIdOrthologPhenotypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityGeneIdPathwaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityGeneIdPhenotypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityGeneIdPublicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityGeneIdVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityGenotypeIdCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityGenotypeIdDiseasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityGenotypeIdGenesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityGenotypeIdGenotypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityGenotypeIdModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityGenotypeIdPhenotypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityGenotypeIdPublicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityGenotypeIdVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityGotermIdGenesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityModelIdCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityModelIdDiseasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityModelIdGenesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityModelIdGenotypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityModelIdPhenotypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityModelIdPublicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityModelIdVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityPathwayIdDiseasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityPathwayIdGenesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityPathwayIdPhenotypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityPhenotypeIdAnatomyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityPhenotypeIdCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityPhenotypeIdDiseasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityPhenotypeIdGeneTaxidIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityPhenotypeIdGenesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityPhenotypeIdGenotypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityPhenotypeIdPathwaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityPhenotypeIdPublicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityPhenotypeIdVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityPublicationIdDiseasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityPublicationIdGenesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityPublicationIdGenotypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityPublicationIdModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityPublicationIdPhenotypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityPublicationIdVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentitySubstanceIdParticipantInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentitySubstanceIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentitySubstanceIdTreatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityVariantIdCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityVariantIdDiseasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityVariantIdGenesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityVariantIdGenotypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityVariantIdModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityVariantIdPhenotypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityVariantIdPublicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityIdAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentityTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
