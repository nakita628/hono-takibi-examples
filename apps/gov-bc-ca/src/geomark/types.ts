declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/geomarks/copy': {
      $post:
        | {
            input: {
              query: {
                geomarkUrl: string
                resultFormat?:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
                  | undefined
                allowOverlap?: false | true | undefined
                callback?: string | undefined
                redirectUrl?: string | undefined
                failureRedirectUrl?: string | undefined
                bufferMetres?: number | undefined
                bufferJoin?: 'ROUND' | 'MITRE' | 'BEVEL' | undefined
                bufferCap?: 'ROUND' | 'SQUARE' | 'FLAT' | undefined
                bufferMitreLimit?: number | undefined
                bufferSegments?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                geomarkUrl: string
                resultFormat?:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
                  | undefined
                allowOverlap?: false | true | undefined
                callback?: string | undefined
                redirectUrl?: string | undefined
                failureRedirectUrl?: string | undefined
                bufferMetres?: number | undefined
                bufferJoin?: 'ROUND' | 'MITRE' | 'BEVEL' | undefined
                bufferCap?: 'ROUND' | 'SQUARE' | 'FLAT' | undefined
                bufferMitreLimit?: number | undefined
                bufferSegments?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: {
              query: {
                geomarkUrl: string
                resultFormat?:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
                  | undefined
                allowOverlap?: false | true | undefined
                callback?: string | undefined
                redirectUrl?: string | undefined
                failureRedirectUrl?: string | undefined
                bufferMetres?: number | undefined
                bufferJoin?: 'ROUND' | 'MITRE' | 'BEVEL' | undefined
                bufferCap?: 'ROUND' | 'SQUARE' | 'FLAT' | undefined
                bufferMitreLimit?: number | undefined
                bufferSegments?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                geomarkUrl: string
                resultFormat?:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
                  | undefined
                allowOverlap?: false | true | undefined
                callback?: string | undefined
                redirectUrl?: string | undefined
                failureRedirectUrl?: string | undefined
                bufferMetres?: number | undefined
                bufferJoin?: 'ROUND' | 'MITRE' | 'BEVEL' | undefined
                bufferCap?: 'ROUND' | 'SQUARE' | 'FLAT' | undefined
                bufferMitreLimit?: number | undefined
                bufferSegments?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/geomarks/new': {
      $post:
        | {
            input: {
              json: {
                allowOverlap?: false | true | undefined
                body?: string | undefined
                bufferCap?: 'ROUND' | 'SQUARE' | 'FLAT' | undefined
                bufferJoin?: 'ROUND' | 'MITRE' | 'BEVEL' | undefined
                bufferMetres?: number | undefined
                bufferMitreLimit?: number | undefined
                bufferSegments?: number | undefined
                callback?: string | undefined
                failureRedirectUrl?: string | undefined
                format?:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
                  | undefined
                multiple?: false | true | undefined
                redirectUrl?: string | undefined
                resultFormat?:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
                  | undefined
                srid?: 4326 | 3005 | 3857 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
              }
            } & {
              form: {
                allowOverlap?: false | true | undefined
                body?: string | undefined
                bufferCap?: 'ROUND' | 'SQUARE' | 'FLAT' | undefined
                bufferJoin?: 'ROUND' | 'MITRE' | 'BEVEL' | undefined
                bufferMetres?: number | undefined
                bufferMitreLimit?: number | undefined
                bufferSegments?: number | undefined
                callback?: string | undefined
                failureRedirectUrl?: string | undefined
                format?:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
                  | undefined
                multiple?: false | true | undefined
                redirectUrl?: string | undefined
                resultFormat?:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
                  | undefined
                srid?: 4326 | 3005 | 3857 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              json: {
                allowOverlap?: false | true | undefined
                body?: string | undefined
                bufferCap?: 'ROUND' | 'SQUARE' | 'FLAT' | undefined
                bufferJoin?: 'ROUND' | 'MITRE' | 'BEVEL' | undefined
                bufferMetres?: number | undefined
                bufferMitreLimit?: number | undefined
                bufferSegments?: number | undefined
                callback?: string | undefined
                failureRedirectUrl?: string | undefined
                format?:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
                  | undefined
                multiple?: false | true | undefined
                redirectUrl?: string | undefined
                resultFormat?:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
                  | undefined
                srid?: 4326 | 3005 | 3857 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
              }
            } & {
              form: {
                allowOverlap?: false | true | undefined
                body?: string | undefined
                bufferCap?: 'ROUND' | 'SQUARE' | 'FLAT' | undefined
                bufferJoin?: 'ROUND' | 'MITRE' | 'BEVEL' | undefined
                bufferMetres?: number | undefined
                bufferMitreLimit?: number | undefined
                bufferSegments?: number | undefined
                callback?: string | undefined
                failureRedirectUrl?: string | undefined
                format?:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
                  | undefined
                multiple?: false | true | undefined
                redirectUrl?: string | undefined
                resultFormat?:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
                  | undefined
                srid?: 4326 | 3005 | 3857 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: {
              json: {
                allowOverlap?: false | true | undefined
                body?: string | undefined
                bufferCap?: 'ROUND' | 'SQUARE' | 'FLAT' | undefined
                bufferJoin?: 'ROUND' | 'MITRE' | 'BEVEL' | undefined
                bufferMetres?: number | undefined
                bufferMitreLimit?: number | undefined
                bufferSegments?: number | undefined
                callback?: string | undefined
                failureRedirectUrl?: string | undefined
                format?:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
                  | undefined
                multiple?: false | true | undefined
                redirectUrl?: string | undefined
                resultFormat?:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
                  | undefined
                srid?: 4326 | 3005 | 3857 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
              }
            } & {
              form: {
                allowOverlap?: false | true | undefined
                body?: string | undefined
                bufferCap?: 'ROUND' | 'SQUARE' | 'FLAT' | undefined
                bufferJoin?: 'ROUND' | 'MITRE' | 'BEVEL' | undefined
                bufferMetres?: number | undefined
                bufferMitreLimit?: number | undefined
                bufferSegments?: number | undefined
                callback?: string | undefined
                failureRedirectUrl?: string | undefined
                format?:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
                  | undefined
                multiple?: false | true | undefined
                redirectUrl?: string | undefined
                resultFormat?:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
                  | undefined
                srid?: 4326 | 3005 | 3857 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: {
                allowOverlap?: false | true | undefined
                body?: string | undefined
                bufferCap?: 'ROUND' | 'SQUARE' | 'FLAT' | undefined
                bufferJoin?: 'ROUND' | 'MITRE' | 'BEVEL' | undefined
                bufferMetres?: number | undefined
                bufferMitreLimit?: number | undefined
                bufferSegments?: number | undefined
                callback?: string | undefined
                failureRedirectUrl?: string | undefined
                format?:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
                  | undefined
                multiple?: false | true | undefined
                redirectUrl?: string | undefined
                resultFormat?:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
                  | undefined
                srid?: 4326 | 3005 | 3857 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
              }
            } & {
              form: {
                allowOverlap?: false | true | undefined
                body?: string | undefined
                bufferCap?: 'ROUND' | 'SQUARE' | 'FLAT' | undefined
                bufferJoin?: 'ROUND' | 'MITRE' | 'BEVEL' | undefined
                bufferMetres?: number | undefined
                bufferMitreLimit?: number | undefined
                bufferSegments?: number | undefined
                callback?: string | undefined
                failureRedirectUrl?: string | undefined
                format?:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
                  | undefined
                multiple?: false | true | undefined
                redirectUrl?: string | undefined
                resultFormat?:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
                  | undefined
                srid?: 4326 | 3005 | 3857 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/geomarks/:geomarkId.{fileFormatExtension}': {
      $get:
        | {
            input: {
              param: {
                geomarkId: string
                fileFormatExtension:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
              }
            } & {
              query: {
                srid?: 4326 | 3005 | 3857 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                geomarkId: string
                fileFormatExtension:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
              }
            } & {
              query: {
                srid?: 4326 | 3005 | 3857 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                geomarkId: string
                fileFormatExtension:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
              }
            } & {
              query: {
                srid?: 4326 | 3005 | 3857 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/geomarks/:geomarkId/boundingBox.{fileFormatExtension}': {
      $get:
        | {
            input: {
              param: {
                geomarkId: string
                fileFormatExtension:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
              }
            } & {
              query: {
                srid?: 4326 | 3005 | 3857 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                geomarkId: string
                fileFormatExtension:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
              }
            } & {
              query: {
                srid?: 4326 | 3005 | 3857 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                geomarkId: string
                fileFormatExtension:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
              }
            } & {
              query: {
                srid?: 4326 | 3005 | 3857 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                geomarkId: string
                fileFormatExtension:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
              }
            } & {
              query: {
                srid?: 4326 | 3005 | 3857 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/geomarks/:geomarkId/feature.{fileFormatExtension}': {
      $get:
        | {
            input: {
              param: {
                geomarkId: string
                fileFormatExtension:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
              }
            } & {
              query: {
                srid?: 4326 | 3005 | 3857 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                geomarkId: string
                fileFormatExtension:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
              }
            } & {
              query: {
                srid?: 4326 | 3005 | 3857 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                geomarkId: string
                fileFormatExtension:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
              }
            } & {
              query: {
                srid?: 4326 | 3005 | 3857 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                geomarkId: string
                fileFormatExtension:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
              }
            } & {
              query: {
                srid?: 4326 | 3005 | 3857 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/geomarks/:geomarkId/parts.{fileFormatExtension}': {
      $get:
        | {
            input: {
              param: {
                geomarkId: string
                fileFormatExtension:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
              }
            } & {
              query: {
                srid?: 4326 | 3005 | 3857 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                geomarkId: string
                fileFormatExtension:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
              }
            } & {
              query: {
                srid?: 4326 | 3005 | 3857 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                geomarkId: string
                fileFormatExtension:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
              }
            } & {
              query: {
                srid?: 4326 | 3005 | 3857 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                geomarkId: string
                fileFormatExtension:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
              }
            } & {
              query: {
                srid?: 4326 | 3005 | 3857 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/geomarks/:geomarkId/point.{fileFormatExtension}': {
      $get:
        | {
            input: {
              param: {
                geomarkId: string
                fileFormatExtension:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
              }
            } & {
              query: {
                srid?: 4326 | 3005 | 3857 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                geomarkId: string
                fileFormatExtension:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
              }
            } & {
              query: {
                srid?: 4326 | 3005 | 3857 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                geomarkId: string
                fileFormatExtension:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
              }
            } & {
              query: {
                srid?: 4326 | 3005 | 3857 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                geomarkId: string
                fileFormatExtension:
                  | 'json'
                  | 'xml'
                  | 'kml'
                  | 'kmz'
                  | 'shp'
                  | 'shpz'
                  | 'geojson'
                  | 'gml'
                  | 'gpkg'
                  | 'wkt'
              }
            } & {
              query: {
                srid?: 4326 | 3005 | 3857 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
