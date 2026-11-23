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
} from './routes'
import {
  deleteV2alphaNameRouteHandler,
  getV2alphaCatalogCompleteQueryRouteHandler,
  getV2alphaCatalogGetDefaultBranchRouteHandler,
  getV2alphaNameOperationsRouteHandler,
  getV2alphaNameRouteHandler,
  getV2alphaParentCatalogsRouteHandler,
  getV2alphaParentControlsRouteHandler,
  getV2alphaParentMerchantCenterAccountLinksRouteHandler,
  getV2alphaParentModelsRouteHandler,
  getV2alphaParentProductsRouteHandler,
  getV2alphaParentServingConfigsRouteHandler,
  getV2alphaParentUserEventsCollectRouteHandler,
  patchV2alphaNameRouteHandler,
  postV2alphaAttributesConfigAddCatalogAttributeRouteHandler,
  postV2alphaAttributesConfigBatchRemoveCatalogAttributesRouteHandler,
  postV2alphaAttributesConfigRemoveCatalogAttributeRouteHandler,
  postV2alphaAttributesConfigReplaceCatalogAttributeRouteHandler,
  postV2alphaCatalogSetDefaultBranchRouteHandler,
  postV2alphaNamePauseRouteHandler,
  postV2alphaNameResumeRouteHandler,
  postV2alphaNameRouteHandler,
  postV2alphaNameSetInventoryRouteHandler,
  postV2alphaNameTuneRouteHandler,
  postV2alphaParentCompletionDataImportRouteHandler,
  postV2alphaParentControlsRouteHandler,
  postV2alphaParentModelsRouteHandler,
  postV2alphaParentProductsImportRouteHandler,
  postV2alphaParentProductsPurgeRouteHandler,
  postV2alphaParentProductsRouteHandler,
  postV2alphaParentServingConfigsRouteHandler,
  postV2alphaParentUserEventsImportRouteHandler,
  postV2alphaParentUserEventsPurgeRouteHandler,
  postV2alphaParentUserEventsRejoinRouteHandler,
  postV2alphaParentUserEventsWriteRouteHandler,
  postV2alphaPlacementPredictRouteHandler,
  postV2alphaPlacementSearchRouteHandler,
  postV2alphaProductAddFulfillmentPlacesRouteHandler,
  postV2alphaProductAddLocalInventoriesRouteHandler,
  postV2alphaProductRemoveFulfillmentPlacesRouteHandler,
  postV2alphaProductRemoveLocalInventoriesRouteHandler,
  postV2alphaServingConfigAddControlRouteHandler,
  postV2alphaServingConfigRemoveControlRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postV2alphaAttributesConfigAddCatalogAttributeRoute,
    postV2alphaAttributesConfigAddCatalogAttributeRouteHandler,
  )
  .openapi(
    postV2alphaAttributesConfigBatchRemoveCatalogAttributesRoute,
    postV2alphaAttributesConfigBatchRemoveCatalogAttributesRouteHandler,
  )
  .openapi(
    postV2alphaAttributesConfigRemoveCatalogAttributeRoute,
    postV2alphaAttributesConfigRemoveCatalogAttributeRouteHandler,
  )
  .openapi(
    postV2alphaAttributesConfigReplaceCatalogAttributeRoute,
    postV2alphaAttributesConfigReplaceCatalogAttributeRouteHandler,
  )
  .openapi(getV2alphaCatalogCompleteQueryRoute, getV2alphaCatalogCompleteQueryRouteHandler)
  .openapi(getV2alphaCatalogGetDefaultBranchRoute, getV2alphaCatalogGetDefaultBranchRouteHandler)
  .openapi(postV2alphaCatalogSetDefaultBranchRoute, postV2alphaCatalogSetDefaultBranchRouteHandler)
  .openapi(deleteV2alphaNameRoute, deleteV2alphaNameRouteHandler)
  .openapi(getV2alphaNameRoute, getV2alphaNameRouteHandler)
  .openapi(patchV2alphaNameRoute, patchV2alphaNameRouteHandler)
  .openapi(postV2alphaNameRoute, postV2alphaNameRouteHandler)
  .openapi(getV2alphaNameOperationsRoute, getV2alphaNameOperationsRouteHandler)
  .openapi(postV2alphaNamePauseRoute, postV2alphaNamePauseRouteHandler)
  .openapi(postV2alphaNameResumeRoute, postV2alphaNameResumeRouteHandler)
  .openapi(postV2alphaNameSetInventoryRoute, postV2alphaNameSetInventoryRouteHandler)
  .openapi(postV2alphaNameTuneRoute, postV2alphaNameTuneRouteHandler)
  .openapi(getV2alphaParentCatalogsRoute, getV2alphaParentCatalogsRouteHandler)
  .openapi(
    postV2alphaParentCompletionDataImportRoute,
    postV2alphaParentCompletionDataImportRouteHandler,
  )
  .openapi(getV2alphaParentControlsRoute, getV2alphaParentControlsRouteHandler)
  .openapi(postV2alphaParentControlsRoute, postV2alphaParentControlsRouteHandler)
  .openapi(
    getV2alphaParentMerchantCenterAccountLinksRoute,
    getV2alphaParentMerchantCenterAccountLinksRouteHandler,
  )
  .openapi(getV2alphaParentModelsRoute, getV2alphaParentModelsRouteHandler)
  .openapi(postV2alphaParentModelsRoute, postV2alphaParentModelsRouteHandler)
  .openapi(getV2alphaParentProductsRoute, getV2alphaParentProductsRouteHandler)
  .openapi(postV2alphaParentProductsRoute, postV2alphaParentProductsRouteHandler)
  .openapi(postV2alphaParentProductsImportRoute, postV2alphaParentProductsImportRouteHandler)
  .openapi(postV2alphaParentProductsPurgeRoute, postV2alphaParentProductsPurgeRouteHandler)
  .openapi(getV2alphaParentServingConfigsRoute, getV2alphaParentServingConfigsRouteHandler)
  .openapi(postV2alphaParentServingConfigsRoute, postV2alphaParentServingConfigsRouteHandler)
  .openapi(getV2alphaParentUserEventsCollectRoute, getV2alphaParentUserEventsCollectRouteHandler)
  .openapi(postV2alphaParentUserEventsImportRoute, postV2alphaParentUserEventsImportRouteHandler)
  .openapi(postV2alphaParentUserEventsPurgeRoute, postV2alphaParentUserEventsPurgeRouteHandler)
  .openapi(postV2alphaParentUserEventsRejoinRoute, postV2alphaParentUserEventsRejoinRouteHandler)
  .openapi(postV2alphaParentUserEventsWriteRoute, postV2alphaParentUserEventsWriteRouteHandler)
  .openapi(postV2alphaPlacementPredictRoute, postV2alphaPlacementPredictRouteHandler)
  .openapi(postV2alphaPlacementSearchRoute, postV2alphaPlacementSearchRouteHandler)
  .openapi(
    postV2alphaProductAddFulfillmentPlacesRoute,
    postV2alphaProductAddFulfillmentPlacesRouteHandler,
  )
  .openapi(
    postV2alphaProductAddLocalInventoriesRoute,
    postV2alphaProductAddLocalInventoriesRouteHandler,
  )
  .openapi(
    postV2alphaProductRemoveFulfillmentPlacesRoute,
    postV2alphaProductRemoveFulfillmentPlacesRouteHandler,
  )
  .openapi(
    postV2alphaProductRemoveLocalInventoriesRoute,
    postV2alphaProductRemoveLocalInventoriesRouteHandler,
  )
  .openapi(postV2alphaServingConfigAddControlRoute, postV2alphaServingConfigAddControlRouteHandler)
  .openapi(
    postV2alphaServingConfigRemoveControlRoute,
    postV2alphaServingConfigRemoveControlRouteHandler,
  )

export default app
