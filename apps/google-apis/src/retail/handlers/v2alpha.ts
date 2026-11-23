import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2alphaNameRoute,
  getV2alphaCatalogCompleteQueryRoute,
  getV2alphaCatalogGetDefaultBranchRoute,
  getV2alphaNameOperationsRoute,
  getV2alphaNameRoute,
  getV2alphaParentCatalogsRoute,
  getV2alphaParentControlsRoute,
  getV2alphaParentMerchantCenterAccountLinksRoute,
  getV2alphaParentModelsRoute,
  getV2alphaParentProductsRoute,
  getV2alphaParentServingConfigsRoute,
  getV2alphaParentUserEventsCollectRoute,
  patchV2alphaNameRoute,
  postV2alphaAttributesConfigAddCatalogAttributeRoute,
  postV2alphaAttributesConfigBatchRemoveCatalogAttributesRoute,
  postV2alphaAttributesConfigRemoveCatalogAttributeRoute,
  postV2alphaAttributesConfigReplaceCatalogAttributeRoute,
  postV2alphaCatalogSetDefaultBranchRoute,
  postV2alphaNamePauseRoute,
  postV2alphaNameResumeRoute,
  postV2alphaNameRoute,
  postV2alphaNameSetInventoryRoute,
  postV2alphaNameTuneRoute,
  postV2alphaParentCompletionDataImportRoute,
  postV2alphaParentControlsRoute,
  postV2alphaParentModelsRoute,
  postV2alphaParentProductsImportRoute,
  postV2alphaParentProductsPurgeRoute,
  postV2alphaParentProductsRoute,
  postV2alphaParentServingConfigsRoute,
  postV2alphaParentUserEventsImportRoute,
  postV2alphaParentUserEventsPurgeRoute,
  postV2alphaParentUserEventsRejoinRoute,
  postV2alphaParentUserEventsWriteRoute,
  postV2alphaPlacementPredictRoute,
  postV2alphaPlacementSearchRoute,
  postV2alphaProductAddFulfillmentPlacesRoute,
  postV2alphaProductAddLocalInventoriesRoute,
  postV2alphaProductRemoveFulfillmentPlacesRoute,
  postV2alphaProductRemoveLocalInventoriesRoute,
  postV2alphaServingConfigAddControlRoute,
  postV2alphaServingConfigRemoveControlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2alphaHandler = app
  .openapi(postV2alphaAttributesConfigAddCatalogAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaAttributesConfigBatchRemoveCatalogAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaAttributesConfigRemoveCatalogAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaAttributesConfigReplaceCatalogAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2alphaCatalogCompleteQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2alphaCatalogGetDefaultBranchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaCatalogSetDefaultBranchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2alphaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2alphaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2alphaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2alphaNameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaNamePauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaNameResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaNameSetInventoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaNameTuneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2alphaParentCatalogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaParentCompletionDataImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2alphaParentControlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaParentControlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2alphaParentMerchantCenterAccountLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2alphaParentModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaParentModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2alphaParentProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaParentProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaParentProductsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaParentProductsPurgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2alphaParentServingConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaParentServingConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2alphaParentUserEventsCollectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaParentUserEventsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaParentUserEventsPurgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaParentUserEventsRejoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaParentUserEventsWriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaPlacementPredictRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaPlacementSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaProductAddFulfillmentPlacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaProductAddLocalInventoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaProductRemoveFulfillmentPlacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaProductRemoveLocalInventoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaServingConfigAddControlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alphaServingConfigRemoveControlRoute, (c) => {
    throw new Error('Not implemented')
  })
