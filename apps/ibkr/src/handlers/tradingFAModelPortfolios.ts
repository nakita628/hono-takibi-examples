import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ApiIserverAccountAllocationModelsRoute,
  postV1ApiFaFaPresetGetRoute,
  postV1ApiFaFaPresetSaveRoute,
  postV1ApiFaIsFullMasterRoute,
  postV1ApiFaModelAccountsDetailsRoute,
  postV1ApiFaModelCashAnalyzerRoute,
  postV1ApiFaModelInvestDivestPositionsRoute,
  postV1ApiFaModelInvestDivestRoute,
  postV1ApiFaModelListRoute,
  postV1ApiFaModelPositionsRoute,
  postV1ApiFaModelRebalanceToExistingTargetsRoute,
  postV1ApiFaModelRebalanceToNewTargetsRoute,
  postV1ApiFaModelRebalanceToSpecificTargetsRoute,
  postV1ApiFaModelSaveRoute,
  postV1ApiFaModelSubmitTransfersRoute,
  postV1ApiFaModelSummaryRoute,
  postV1ApiFaModelTwsInvestDivestRoute,
  postV1ApiIserverAccountModelCodeOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tradingFAModelPortfoliosHandler = app
  .openapi(postV1ApiFaFaPresetGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaFaPresetSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaIsFullMasterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaModelAccountsDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaModelCashAnalyzerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaModelInvestDivestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaModelInvestDivestPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaModelListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaModelPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaModelRebalanceToExistingTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaModelRebalanceToNewTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaModelRebalanceToSpecificTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaModelSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaModelSubmitTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaModelSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaModelTwsInvestDivestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverAccountModelCodeOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountAllocationModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
