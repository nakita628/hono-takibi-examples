import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWWorkspaceAssetsAssetSchemasRoute,
  getWWorkspaceAssetsColumnLineageRoute,
  getWWorkspaceAssetsGraphRoute,
  getWWorkspaceAssetsListFavoritesRoute,
  getWWorkspaceAssetsListRoute,
  getWWorkspaceAssetsMacrosRoute,
  getWWorkspaceAssetsPartitionsInRangeRoute,
  getWWorkspaceAssetsPartitionsRoute,
  getWWorkspaceAssetsPipelinesRoute,
  postWWorkspaceAssetsListByUsagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assetHandler = app
  .openapi(getWWorkspaceAssetsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAssetsListByUsagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAssetsListFavoritesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAssetsGraphRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAssetsColumnLineageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAssetsMacrosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAssetsPipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAssetsPartitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAssetsPartitionsInRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAssetsAssetSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
