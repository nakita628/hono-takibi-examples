type FontFormat = 'otf' | 'ttf' | 'ttc'
type StyleKind = 'vector' | 'raster' | 'hybrid'
type Catalog = {
  fonts: {
    [x: string]: {
      end: number
      family: string
      format?: FontFormat | ({ [x: string]: unknown } | null) | undefined
      glyphs: number
      last_modified_at?: (string | null) | undefined
      start: number
      style?: (string | null) | undefined
    }
  }
  settings: { rendering: boolean }
  sprites: {
    [x: string]: {
      images: string[]
      last_modified_at?: (string | null) | undefined
      size_in_bytes?: bigint | undefined
    }
  }
  styles: {
    [x: string]: {
      colors?: (string[] | null) | undefined
      last_modified_at?: (string | null) | undefined
      layer_count?: (number | null) | undefined
      path: string
      type?: StyleKind | ({ [x: string]: unknown } | null) | undefined
      version_hash?: (string | null) | undefined
    }
  }
  tiles: {
    [x: string]: {
      attribution?: (string | null) | undefined
      content_encoding?: (string | null) | undefined
      content_type: string
      description?: (string | null) | undefined
      last_modified_at?: (string | null) | undefined
      layer_count?: (number | null) | undefined
      name?: (string | null) | undefined
      tile_grid?: (string | null) | undefined
    }
  }
}
type SpatialExtent = {
  bbox: number[][]
  crs: string
  storageCrsBbox?: (number[][] | null) | undefined
}
type Extent = { spatial: SpatialExtent }
type Link = {
  href: string
  rel: string
  templated?: boolean | undefined
  title: string
  type: string
}
type LandingPage = { description: string; extent: Extent; links: Link[]; title: string }
type Collection = {
  crs: string[]
  description?: (string | null) | undefined
  extent: Extent
  id: string
  links: Link[]
  storageCrs: string
  title: string
}
type Collections = { collections: Collection[]; links: Link[] }
type DataType = 'map' | 'vector'
type TileSetItem = {
  crs: string
  dataType: DataType
  links: Link[]
  tileMatrixSetURI?: (string | null) | undefined
  title: string
}
type TileSets = { links: Link[]; tilesets: TileSetItem[] }
type Layer = {
  dataType: DataType
  id: string
  maxTileMatrix?: (string | null) | undefined
  minTileMatrix?: (string | null) | undefined
}
type TileMatrixLimits = {
  maxTileCol: number
  maxTileRow: number
  minTileCol: number
  minTileRow: number
  tileMatrix: string
}
type TileSet = {
  crs: string
  dataType: DataType
  layers?: Layer[] | undefined
  links: Link[]
  tileMatrixSetLimits: TileMatrixLimits[]
  tileMatrixSetURI?: (string | null) | undefined
  title: string
}
type Conformance = { conformsTo: string[] }
type StyleDescription = { id: string; links: Link[]; title?: (string | null) | undefined }
type Styles = { links: Link[]; styles: StyleDescription[] }
type TileMatrixSetItem = {
  crs: string
  id: string
  links: Link[]
  uri?: (string | null) | undefined
}
type TileMatrixSets = { tileMatrixSets: TileMatrixSetItem[] }
type TileMatrix = {
  cellSize: number
  id: string
  matrixHeight: bigint
  matrixWidth: bigint
  pointOfOrigin: number[]
  scaleDenominator: number
  tileHeight: number
  tileWidth: number
}
type TileMatrixSet = {
  crs: string
  id: string
  orderedAxes: string[]
  tileMatrices: TileMatrix[]
  uri?: (string | null) | undefined
}
type StaticOverlayProperties = {
  'circle-color'?: (string | null) | undefined
  'circle-opacity'?: (number | null) | undefined
  'circle-radius'?: (number | null) | undefined
  'circle-stroke-color'?: (string | null) | undefined
  'circle-stroke-opacity'?: (number | null) | undefined
  'circle-stroke-width'?: (number | null) | undefined
  'fill-color'?: (string | null) | undefined
  'fill-opacity'?: (number | null) | undefined
  'fill-outline-color'?: (string | null) | undefined
  'line-cap'?: (string | null) | undefined
  'line-color'?: (string | null) | undefined
  'line-join'?: (string | null) | undefined
  'line-opacity'?: (number | null) | undefined
  'line-width'?: (number | null) | undefined
}
type FeatureTag = 'Feature'
type StaticOverlayFeature = {
  geometry?: { [x: string]: unknown } | undefined
  properties?: StaticOverlayProperties | ({ [x: string]: unknown } | null) | undefined
  type: FeatureTag
}
type FeatureCollectionTag = 'FeatureCollection'
type StaticStyleOverlay = { features: StaticOverlayFeature[]; type: FeatureCollectionTag }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:source_ids': {
      $get: {
        input: { param: { source_ids: string } }
        output: {}
        outputFormat: string
        status: 404
      }
    }
  } & {
    '/:source_ids/:z/:x/:y': {
      $get:
        | {
            input: { param: { source_ids: string; z: number; x: number; y: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { source_ids: string; z: number; x: number; y: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { source_ids: string; z: number; x: number; y: number } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { source_ids: string; z: number; x: number; y: number } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { source_ids: string; z: number; x: number; y: number } }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/cache/:source_id': {
      $delete:
        | {
            input: { param: { source_id: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { source_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/catalog': { $get: { input: {}; output: Catalog; outputFormat: 'json'; status: 200 } }
  } & {
    '/font/:fontstack/:start-:end': {
      $get:
        | {
            input: { param: { fontstack: string; start: number; end: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fontstack: string; start: number; end: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & { '/health': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } } } & {
    '/ogc': { $get: { input: {}; output: LandingPage; outputFormat: 'json'; status: 200 } }
  } & { '/ogc/api': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/ogc/collections': {
      $get: { input: {}; output: Collections; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/ogc/collections/:collection_id': {
      $get:
        | {
            input: { param: { collection_id: string } }
            output: Collection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/ogc/collections/:collection_id/map': {
      $get:
        | {
            input: { param: { collection_id: string } } & {
              query: {
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                bbox?: (string | null) | undefined
                'bbox-crs'?: (string | null) | undefined
                center?: (string | null) | undefined
                'center-crs'?: (string | null) | undefined
                'scale-denominator'?: (number | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { collection_id: string } } & {
              query: {
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                bbox?: (string | null) | undefined
                'bbox-crs'?: (string | null) | undefined
                center?: (string | null) | undefined
                'center-crs'?: (string | null) | undefined
                'scale-denominator'?: (number | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { collection_id: string } } & {
              query: {
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                bbox?: (string | null) | undefined
                'bbox-crs'?: (string | null) | undefined
                center?: (string | null) | undefined
                'center-crs'?: (string | null) | undefined
                'scale-denominator'?: (number | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/ogc/collections/:collection_id/tiles': {
      $get:
        | {
            input: { param: { collection_id: string } }
            output: TileSets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/ogc/collections/:collection_id/tiles/:tile_matrix_set_id': {
      $get:
        | {
            input: { param: { collection_id: string; tile_matrix_set_id: string } }
            output: TileSet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_id: string; tile_matrix_set_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/ogc/collections/:collection_id/tiles/:tile_matrix_set_id/:tile_matrix/:tile_row/:tile_col': {
      $get:
        | {
            input: {
              param: {
                collection_id: string
                tile_matrix_set_id: string
                tile_matrix: number
                tile_row: number
                tile_col: number
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                collection_id: string
                tile_matrix_set_id: string
                tile_matrix: number
                tile_row: number
                tile_col: number
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                collection_id: string
                tile_matrix_set_id: string
                tile_matrix: number
                tile_row: number
                tile_col: number
              }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: {
              param: {
                collection_id: string
                tile_matrix_set_id: string
                tile_matrix: number
                tile_row: number
                tile_col: number
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                collection_id: string
                tile_matrix_set_id: string
                tile_matrix: number
                tile_row: number
                tile_col: number
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/ogc/conformance': {
      $get: { input: {}; output: Conformance; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/ogc/map': {
      $get: {
        input: {
          query: {
            width?: (number | null) | undefined
            height?: (number | null) | undefined
            bbox?: (string | null) | undefined
            'bbox-crs'?: (string | null) | undefined
            center?: (string | null) | undefined
            'center-crs'?: (string | null) | undefined
            'scale-denominator'?: (number | null) | undefined
            collections?: (string | null) | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 400
      }
    }
  } & {
    '/ogc/map/tiles': { $get: { input: {}; output: TileSets; outputFormat: 'json'; status: 200 } }
  } & {
    '/ogc/map/tiles/:tile_matrix_set_id': {
      $get:
        | {
            input: { param: { tile_matrix_set_id: string } }
            output: TileSet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tile_matrix_set_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/ogc/map/tiles/:tile_matrix_set_id/:tile_matrix/:tile_row/:tile_col': {
      $get:
        | {
            input: {
              param: {
                tile_matrix_set_id: string
                tile_matrix: number
                tile_row: number
                tile_col: number
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                tile_matrix_set_id: string
                tile_matrix: number
                tile_row: number
                tile_col: number
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/ogc/styles': { $get: { input: {}; output: Styles; outputFormat: 'json'; status: 200 } }
  } & {
    '/ogc/styles/:style_id': {
      $get:
        | { input: { param: { style_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { style_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/ogc/styles/:style_id/map': {
      $get:
        | {
            input: { param: { style_id: string } } & {
              query: {
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                bbox?: (string | null) | undefined
                'bbox-crs'?: (string | null) | undefined
                center?: (string | null) | undefined
                'center-crs'?: (string | null) | undefined
                'scale-denominator'?: (number | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { style_id: string } } & {
              query: {
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                bbox?: (string | null) | undefined
                'bbox-crs'?: (string | null) | undefined
                center?: (string | null) | undefined
                'center-crs'?: (string | null) | undefined
                'scale-denominator'?: (number | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { style_id: string } } & {
              query: {
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                bbox?: (string | null) | undefined
                'bbox-crs'?: (string | null) | undefined
                center?: (string | null) | undefined
                'center-crs'?: (string | null) | undefined
                'scale-denominator'?: (number | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/ogc/styles/:style_id/map/tiles': {
      $get:
        | {
            input: { param: { style_id: string } }
            output: TileSets
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { style_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/ogc/styles/:style_id/map/tiles/:tile_matrix_set_id': {
      $get:
        | {
            input: { param: { style_id: string; tile_matrix_set_id: string } }
            output: TileSet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { style_id: string; tile_matrix_set_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/ogc/styles/:style_id/map/tiles/:tile_matrix_set_id/:tile_matrix/:tile_row/:tile_col': {
      $get:
        | {
            input: {
              param: {
                style_id: string
                tile_matrix_set_id: string
                tile_matrix: number
                tile_row: number
                tile_col: number
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                style_id: string
                tile_matrix_set_id: string
                tile_matrix: number
                tile_row: number
                tile_col: number
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/ogc/tileMatrixSets': {
      $get: { input: {}; output: TileMatrixSets; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/ogc/tileMatrixSets/:tile_matrix_set_id': {
      $get:
        | {
            input: { param: { tile_matrix_set_id: string } }
            output: TileMatrixSet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tile_matrix_set_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/sdf_sprite/:source_ids.json': {
      $get: {
        input: { param: { source_ids: string } }
        output: {}
        outputFormat: string
        status: 404
      }
    }
  } & {
    '/sdf_sprite/:source_ids.png': {
      $get: {
        input: { param: { source_ids: string } }
        output: {}
        outputFormat: string
        status: 404
      }
    }
  } & {
    '/sprite/:source_ids.json': {
      $get: {
        input: { param: { source_ids: string } }
        output: {}
        outputFormat: string
        status: 404
      }
    }
  } & {
    '/sprite/:source_ids.png': {
      $get: {
        input: { param: { source_ids: string } }
        output: {}
        outputFormat: string
        status: 404
      }
    }
  } & {
    '/style/:style_id': {
      $get:
        | { input: { param: { style_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { style_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/style/:style_id/:z/:x/:y.:format': {
      $get:
        | {
            input: {
              param: {
                style_id: string
                z: number
                x: number
                y: number
                format: 'png' | 'jpg' | 'webp'
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                style_id: string
                z: number
                x: number
                y: number
                format: 'png' | 'jpg' | 'webp'
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                style_id: string
                z: number
                x: number
                y: number
                format: 'png' | 'jpg' | 'webp'
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                style_id: string
                z: number
                x: number
                y: number
                format: 'png' | 'jpg' | 'webp'
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                style_id: string
                z: number
                x: number
                y: number
                format: 'png' | 'jpg' | 'webp'
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/style/:style_id/static/:camera/:size.:format': {
      $get:
        | {
            input: {
              param: {
                style_id: string
                camera: string
                size: string
                format: 'png' | 'jpg' | 'webp'
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                style_id: string
                camera: string
                size: string
                format: 'png' | 'jpg' | 'webp'
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                style_id: string
                camera: string
                size: string
                format: 'png' | 'jpg' | 'webp'
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                style_id: string
                camera: string
                size: string
                format: 'png' | 'jpg' | 'webp'
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: {
              param: {
                style_id: string
                camera: string
                size: string
                format: 'png' | 'jpg' | 'webp'
              }
            } & { json: StaticStyleOverlay }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                style_id: string
                camera: string
                size: string
                format: 'png' | 'jpg' | 'webp'
              }
            } & { json: StaticStyleOverlay }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                style_id: string
                camera: string
                size: string
                format: 'png' | 'jpg' | 'webp'
              }
            } & { json: StaticStyleOverlay }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                style_id: string
                camera: string
                size: string
                format: 'png' | 'jpg' | 'webp'
              }
            } & { json: StaticStyleOverlay }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
