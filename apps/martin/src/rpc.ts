import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getSourceIds(
  args: InferRequestType<(typeof client)[':source_ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':source_ids'].$get(args, options))
}

export async function getSourceIdsZXY(
  args: InferRequestType<(typeof client)[':source_ids'][':z'][':x'][':y']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':source_ids'][':z'][':x'][':y'].$get(args, options))
}

export async function deleteCacheSourceId(
  args: InferRequestType<(typeof client.cache)[':source_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cache[':source_id'].$delete(args, options))
}

export async function getCatalog(options?: ClientRequestOptions) {
  return await parseResponse(client.catalog.$get(undefined, options))
}

export async function getFontFontstackStartEnd(
  args: InferRequestType<(typeof client.font)[':fontstack'][':start-:end']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.font[':fontstack'][':start-:end'].$get(args, options))
}

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function getOgc(options?: ClientRequestOptions) {
  return await parseResponse(client.ogc.$get(undefined, options))
}

export async function getOgcApi(options?: ClientRequestOptions) {
  return await parseResponse(client.ogc.api.$get(undefined, options))
}

export async function getOgcCollections(options?: ClientRequestOptions) {
  return await parseResponse(client.ogc.collections.$get(undefined, options))
}

export async function getOgcCollectionsCollectionId(
  args: InferRequestType<(typeof client.ogc.collections)[':collection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ogc.collections[':collection_id'].$get(args, options))
}

export async function getOgcCollectionsCollectionIdMap(
  args: InferRequestType<(typeof client.ogc.collections)[':collection_id']['map']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ogc.collections[':collection_id'].map.$get(args, options))
}

export async function getOgcCollectionsCollectionIdTiles(
  args: InferRequestType<(typeof client.ogc.collections)[':collection_id']['tiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ogc.collections[':collection_id'].tiles.$get(args, options))
}

export async function getOgcCollectionsCollectionIdTilesTileMatrixSetId(
  args: InferRequestType<
    (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ogc.collections[':collection_id'].tiles[':tile_matrix_set_id'].$get(args, options),
  )
}

export async function getOgcCollectionsCollectionIdTilesTileMatrixSetIdTileMatrixTileRowTileCol(
  args: InferRequestType<
    (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ogc.collections[':collection_id'].tiles[':tile_matrix_set_id'][':tile_matrix'][
      ':tile_row'
    ][':tile_col'].$get(args, options),
  )
}

export async function getOgcConformance(options?: ClientRequestOptions) {
  return await parseResponse(client.ogc.conformance.$get(undefined, options))
}

export async function getOgcMap(
  args: InferRequestType<typeof client.ogc.map.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ogc.map.$get(args, options))
}

export async function getOgcMapTiles(options?: ClientRequestOptions) {
  return await parseResponse(client.ogc.map.tiles.$get(undefined, options))
}

export async function getOgcMapTilesTileMatrixSetId(
  args: InferRequestType<(typeof client.ogc.map.tiles)[':tile_matrix_set_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ogc.map.tiles[':tile_matrix_set_id'].$get(args, options))
}

export async function getOgcMapTilesTileMatrixSetIdTileMatrixTileRowTileCol(
  args: InferRequestType<
    (typeof client.ogc.map.tiles)[':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ogc.map.tiles[':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col'].$get(
      args,
      options,
    ),
  )
}

export async function getOgcStyles(options?: ClientRequestOptions) {
  return await parseResponse(client.ogc.styles.$get(undefined, options))
}

export async function getOgcStylesStyleId(
  args: InferRequestType<(typeof client.ogc.styles)[':style_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ogc.styles[':style_id'].$get(args, options))
}

export async function getOgcStylesStyleIdMap(
  args: InferRequestType<(typeof client.ogc.styles)[':style_id']['map']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ogc.styles[':style_id'].map.$get(args, options))
}

export async function getOgcStylesStyleIdMapTiles(
  args: InferRequestType<(typeof client.ogc.styles)[':style_id']['map']['tiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ogc.styles[':style_id'].map.tiles.$get(args, options))
}

export async function getOgcStylesStyleIdMapTilesTileMatrixSetId(
  args: InferRequestType<
    (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ogc.styles[':style_id'].map.tiles[':tile_matrix_set_id'].$get(args, options),
  )
}

export async function getOgcStylesStyleIdMapTilesTileMatrixSetIdTileMatrixTileRowTileCol(
  args: InferRequestType<
    (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ogc.styles[':style_id'].map.tiles[':tile_matrix_set_id'][':tile_matrix'][':tile_row'][
      ':tile_col'
    ].$get(args, options),
  )
}

export async function getOgcTileMatrixSets(options?: ClientRequestOptions) {
  return await parseResponse(client.ogc.tileMatrixSets.$get(undefined, options))
}

export async function getOgcTileMatrixSetsTileMatrixSetId(
  args: InferRequestType<(typeof client.ogc.tileMatrixSets)[':tile_matrix_set_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ogc.tileMatrixSets[':tile_matrix_set_id'].$get(args, options))
}

export async function getSdfSpriteSourceIdsJson(
  args: InferRequestType<(typeof client.sdf_sprite)[':source_ids.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sdf_sprite[':source_ids.json'].$get(args, options))
}

export async function getSdfSpriteSourceIdsPng(
  args: InferRequestType<(typeof client.sdf_sprite)[':source_ids.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sdf_sprite[':source_ids.png'].$get(args, options))
}

export async function getSpriteSourceIdsJson(
  args: InferRequestType<(typeof client.sprite)[':source_ids.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sprite[':source_ids.json'].$get(args, options))
}

export async function getSpriteSourceIdsPng(
  args: InferRequestType<(typeof client.sprite)[':source_ids.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sprite[':source_ids.png'].$get(args, options))
}

export async function getStyleStyleId(
  args: InferRequestType<(typeof client.style)[':style_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.style[':style_id'].$get(args, options))
}

export async function getStyleStyleIdZXYFormat(
  args: InferRequestType<(typeof client.style)[':style_id'][':z'][':x'][':y.:format']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.style[':style_id'][':z'][':x'][':y.:format'].$get(args, options),
  )
}

export async function getStyleStyleIdStaticCameraSizeFormat(
  args: InferRequestType<
    (typeof client.style)[':style_id']['static'][':camera'][':size.:format']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.style[':style_id'].static[':camera'][':size.:format'].$get(args, options),
  )
}

export async function postStyleStyleIdStaticCameraSizeFormat(
  args: InferRequestType<
    (typeof client.style)[':style_id']['static'][':camera'][':size.:format']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.style[':style_id'].static[':camera'][':size.:format'].$post(args, options),
  )
}
