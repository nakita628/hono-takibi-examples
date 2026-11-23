import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV2alphaAttributesConfigAddCatalogAttribute(
  args: InferRequestType<(typeof client.v2alpha)[':attributesConfig:addCatalogAttribute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2alpha[':attributesConfig:addCatalogAttribute'].$post(args, options),
  )
}

export async function postV2alphaAttributesConfigBatchRemoveCatalogAttributes(
  args: InferRequestType<
    (typeof client.v2alpha)[':attributesConfig:batchRemoveCatalogAttributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2alpha[':attributesConfig:batchRemoveCatalogAttributes'].$post(args, options),
  )
}

export async function postV2alphaAttributesConfigRemoveCatalogAttribute(
  args: InferRequestType<
    (typeof client.v2alpha)[':attributesConfig:removeCatalogAttribute']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2alpha[':attributesConfig:removeCatalogAttribute'].$post(args, options),
  )
}

export async function postV2alphaAttributesConfigReplaceCatalogAttribute(
  args: InferRequestType<
    (typeof client.v2alpha)[':attributesConfig:replaceCatalogAttribute']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2alpha[':attributesConfig:replaceCatalogAttribute'].$post(args, options),
  )
}

export async function getV2alphaCatalogCompleteQuery(
  args: InferRequestType<(typeof client.v2alpha)[':catalog:completeQuery']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':catalog:completeQuery'].$get(args, options))
}

export async function getV2alphaCatalogGetDefaultBranch(
  args: InferRequestType<(typeof client.v2alpha)[':catalog:getDefaultBranch']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':catalog:getDefaultBranch'].$get(args, options))
}

export async function postV2alphaCatalogSetDefaultBranch(
  args: InferRequestType<(typeof client.v2alpha)[':catalog:setDefaultBranch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':catalog:setDefaultBranch'].$post(args, options))
}

export async function getV2alphaName(
  args: InferRequestType<(typeof client.v2alpha)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':name'].$get(args, options))
}

export async function postV2alphaName(
  args: InferRequestType<(typeof client.v2alpha)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':name'].$post(args, options))
}

export async function deleteV2alphaName(
  args: InferRequestType<(typeof client.v2alpha)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':name'].$delete(args, options))
}

export async function patchV2alphaName(
  args: InferRequestType<(typeof client.v2alpha)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':name'].$patch(args, options))
}

export async function getV2alphaNameOperations(
  args: InferRequestType<(typeof client.v2alpha)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':name'].operations.$get(args, options))
}

export async function postV2alphaNamePause(
  args: InferRequestType<(typeof client.v2alpha)[':name:pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':name:pause'].$post(args, options))
}

export async function postV2alphaNameResume(
  args: InferRequestType<(typeof client.v2alpha)[':name:resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':name:resume'].$post(args, options))
}

export async function postV2alphaNameSetInventory(
  args: InferRequestType<(typeof client.v2alpha)[':name:setInventory']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':name:setInventory'].$post(args, options))
}

export async function postV2alphaNameTune(
  args: InferRequestType<(typeof client.v2alpha)[':name:tune']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':name:tune'].$post(args, options))
}

export async function getV2alphaParentCatalogs(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['catalogs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':parent'].catalogs.$get(args, options))
}

export async function postV2alphaParentCompletionDataImport(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['completionData:import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2alpha[':parent']['completionData:import'].$post(args, options),
  )
}

export async function getV2alphaParentControls(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['controls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':parent'].controls.$get(args, options))
}

export async function postV2alphaParentControls(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['controls']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':parent'].controls.$post(args, options))
}

export async function getV2alphaParentMerchantCenterAccountLinks(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['merchantCenterAccountLinks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2alpha[':parent'].merchantCenterAccountLinks.$get(args, options),
  )
}

export async function getV2alphaParentModels(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':parent'].models.$get(args, options))
}

export async function postV2alphaParentModels(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['models']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':parent'].models.$post(args, options))
}

export async function getV2alphaParentProducts(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['products']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':parent'].products.$get(args, options))
}

export async function postV2alphaParentProducts(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['products']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':parent'].products.$post(args, options))
}

export async function postV2alphaParentProductsImport(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['products:import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':parent']['products:import'].$post(args, options))
}

export async function postV2alphaParentProductsPurge(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['products:purge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':parent']['products:purge'].$post(args, options))
}

export async function getV2alphaParentServingConfigs(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['servingConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':parent'].servingConfigs.$get(args, options))
}

export async function postV2alphaParentServingConfigs(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['servingConfigs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':parent'].servingConfigs.$post(args, options))
}

export async function getV2alphaParentUserEventsCollect(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:collect']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':parent']['userEvents:collect'].$get(args, options))
}

export async function postV2alphaParentUserEventsImport(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':parent']['userEvents:import'].$post(args, options))
}

export async function postV2alphaParentUserEventsPurge(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:purge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':parent']['userEvents:purge'].$post(args, options))
}

export async function postV2alphaParentUserEventsRejoin(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:rejoin']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':parent']['userEvents:rejoin'].$post(args, options))
}

export async function postV2alphaParentUserEventsWrite(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:write']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':parent']['userEvents:write'].$post(args, options))
}

export async function postV2alphaPlacementPredict(
  args: InferRequestType<(typeof client.v2alpha)[':placement:predict']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':placement:predict'].$post(args, options))
}

export async function postV2alphaPlacementSearch(
  args: InferRequestType<(typeof client.v2alpha)[':placement:search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':placement:search'].$post(args, options))
}

export async function postV2alphaProductAddFulfillmentPlaces(
  args: InferRequestType<(typeof client.v2alpha)[':product:addFulfillmentPlaces']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':product:addFulfillmentPlaces'].$post(args, options))
}

export async function postV2alphaProductAddLocalInventories(
  args: InferRequestType<(typeof client.v2alpha)[':product:addLocalInventories']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':product:addLocalInventories'].$post(args, options))
}

export async function postV2alphaProductRemoveFulfillmentPlaces(
  args: InferRequestType<(typeof client.v2alpha)[':product:removeFulfillmentPlaces']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2alpha[':product:removeFulfillmentPlaces'].$post(args, options),
  )
}

export async function postV2alphaProductRemoveLocalInventories(
  args: InferRequestType<(typeof client.v2alpha)[':product:removeLocalInventories']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':product:removeLocalInventories'].$post(args, options))
}

export async function postV2alphaServingConfigAddControl(
  args: InferRequestType<(typeof client.v2alpha)[':servingConfig:addControl']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':servingConfig:addControl'].$post(args, options))
}

export async function postV2alphaServingConfigRemoveControl(
  args: InferRequestType<(typeof client.v2alpha)[':servingConfig:removeControl']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha[':servingConfig:removeControl'].$post(args, options))
}
