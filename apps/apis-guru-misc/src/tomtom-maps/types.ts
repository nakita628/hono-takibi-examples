declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/map/:versionNumber/copyrights.:format': {
      $get:
        | {
            input: { param: { versionNumber: 1; format: 'json' | 'jsonp' | 'xml' } } & {
              query: { callback?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { versionNumber: 1; format: 'json' | 'jsonp' | 'xml' } } & {
              query: { callback?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { versionNumber: 1; format: 'json' | 'jsonp' | 'xml' } } & {
              query: { callback?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { versionNumber: 1; format: 'json' | 'jsonp' | 'xml' } } & {
              query: { callback?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { versionNumber: 1; format: 'json' | 'jsonp' | 'xml' } } & {
              query: { callback?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 410
          }
        | {
            input: { param: { versionNumber: 1; format: 'json' | 'jsonp' | 'xml' } } & {
              query: { callback?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/map/:versionNumber/copyrights/caption.:format': {
      $get:
        | {
            input: { param: { versionNumber: 1; format: 'json' | 'jsonp' | 'xml' } } & {
              query: { callback?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { versionNumber: 1; format: 'json' | 'jsonp' | 'xml' } } & {
              query: { callback?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { versionNumber: 1; format: 'json' | 'jsonp' | 'xml' } } & {
              query: { callback?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { versionNumber: 1; format: 'json' | 'jsonp' | 'xml' } } & {
              query: { callback?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { versionNumber: 1; format: 'json' | 'jsonp' | 'xml' } } & {
              query: { callback?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 410
          }
        | {
            input: { param: { versionNumber: 1; format: 'json' | 'jsonp' | 'xml' } } & {
              query: { callback?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/map/:versionNumber/copyrights/:minLon/:minLat/:maxLon/:maxLat.:format': {
      $get:
        | {
            input: {
              param: {
                versionNumber: 1
                format: 'json' | 'jsonp' | 'xml'
                minLon: number
                minLat: number
                maxLon: number
                maxLat: number
              }
            } & { query: { callback?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                versionNumber: 1
                format: 'json' | 'jsonp' | 'xml'
                minLon: number
                minLat: number
                maxLon: number
                maxLat: number
              }
            } & { query: { callback?: string | undefined } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: {
              param: {
                versionNumber: 1
                format: 'json' | 'jsonp' | 'xml'
                minLon: number
                minLat: number
                maxLon: number
                maxLat: number
              }
            } & { query: { callback?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                versionNumber: 1
                format: 'json' | 'jsonp' | 'xml'
                minLon: number
                minLat: number
                maxLon: number
                maxLat: number
              }
            } & { query: { callback?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                versionNumber: 1
                format: 'json' | 'jsonp' | 'xml'
                minLon: number
                minLat: number
                maxLon: number
                maxLat: number
              }
            } & { query: { callback?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                versionNumber: 1
                format: 'json' | 'jsonp' | 'xml'
                minLon: number
                minLat: number
                maxLon: number
                maxLat: number
              }
            } & { query: { callback?: string | undefined } }
            output: {}
            outputFormat: string
            status: 410
          }
        | {
            input: {
              param: {
                versionNumber: 1
                format: 'json' | 'jsonp' | 'xml'
                minLon: number
                minLat: number
                maxLon: number
                maxLat: number
              }
            } & { query: { callback?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/map/:versionNumber/copyrights/:zoom/:X/:Y.:format': {
      $get:
        | {
            input: {
              param: {
                versionNumber: 1
                format: 'json' | 'jsonp' | 'xml'
                zoom:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | 14
                  | 15
                  | 16
                  | 17
                  | 18
                X: number
                Y: number
              }
            } & { query: { callback?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                versionNumber: 1
                format: 'json' | 'jsonp' | 'xml'
                zoom:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | 14
                  | 15
                  | 16
                  | 17
                  | 18
                X: number
                Y: number
              }
            } & { query: { callback?: string | undefined } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: {
              param: {
                versionNumber: 1
                format: 'json' | 'jsonp' | 'xml'
                zoom:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | 14
                  | 15
                  | 16
                  | 17
                  | 18
                X: number
                Y: number
              }
            } & { query: { callback?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                versionNumber: 1
                format: 'json' | 'jsonp' | 'xml'
                zoom:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | 14
                  | 15
                  | 16
                  | 17
                  | 18
                X: number
                Y: number
              }
            } & { query: { callback?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                versionNumber: 1
                format: 'json' | 'jsonp' | 'xml'
                zoom:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | 14
                  | 15
                  | 16
                  | 17
                  | 18
                X: number
                Y: number
              }
            } & { query: { callback?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                versionNumber: 1
                format: 'json' | 'jsonp' | 'xml'
                zoom:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | 14
                  | 15
                  | 16
                  | 17
                  | 18
                X: number
                Y: number
              }
            } & { query: { callback?: string | undefined } }
            output: {}
            outputFormat: string
            status: 410
          }
        | {
            input: {
              param: {
                versionNumber: 1
                format: 'json' | 'jsonp' | 'xml'
                zoom:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | 14
                  | 15
                  | 16
                  | 17
                  | 18
                X: number
                Y: number
              }
            } & { query: { callback?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/map/:versionNumber/staticimage': {
      $get:
        | {
            input: { param: { versionNumber: 1 } } & {
              query: {
                layer?: 'basic' | 'hybrid' | 'labels' | undefined
                style?: 'main' | 'night' | undefined
                format?: 'png' | 'jpg' | 'jpeg' | undefined
                zoom?:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | 14
                  | 15
                  | 16
                  | 17
                  | 18
                  | 19
                  | 20
                  | 21
                  | 22
                  | undefined
                center?: string | undefined
                width?: number | undefined
                height?: number | undefined
                bbox?: string | undefined
                view?: 'Unified' | 'IN' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { versionNumber: 1 } } & {
              query: {
                layer?: 'basic' | 'hybrid' | 'labels' | undefined
                style?: 'main' | 'night' | undefined
                format?: 'png' | 'jpg' | 'jpeg' | undefined
                zoom?:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | 14
                  | 15
                  | 16
                  | 17
                  | 18
                  | 19
                  | 20
                  | 21
                  | 22
                  | undefined
                center?: string | undefined
                width?: number | undefined
                height?: number | undefined
                bbox?: string | undefined
                view?: 'Unified' | 'IN' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { versionNumber: 1 } } & {
              query: {
                layer?: 'basic' | 'hybrid' | 'labels' | undefined
                style?: 'main' | 'night' | undefined
                format?: 'png' | 'jpg' | 'jpeg' | undefined
                zoom?:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | 14
                  | 15
                  | 16
                  | 17
                  | 18
                  | 19
                  | 20
                  | 21
                  | 22
                  | undefined
                center?: string | undefined
                width?: number | undefined
                height?: number | undefined
                bbox?: string | undefined
                view?: 'Unified' | 'IN' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { versionNumber: 1 } } & {
              query: {
                layer?: 'basic' | 'hybrid' | 'labels' | undefined
                style?: 'main' | 'night' | undefined
                format?: 'png' | 'jpg' | 'jpeg' | undefined
                zoom?:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | 14
                  | 15
                  | 16
                  | 17
                  | 18
                  | 19
                  | 20
                  | 21
                  | 22
                  | undefined
                center?: string | undefined
                width?: number | undefined
                height?: number | undefined
                bbox?: string | undefined
                view?: 'Unified' | 'IN' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { versionNumber: 1 } } & {
              query: {
                layer?: 'basic' | 'hybrid' | 'labels' | undefined
                style?: 'main' | 'night' | undefined
                format?: 'png' | 'jpg' | 'jpeg' | undefined
                zoom?:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | 14
                  | 15
                  | 16
                  | 17
                  | 18
                  | 19
                  | 20
                  | 21
                  | 22
                  | undefined
                center?: string | undefined
                width?: number | undefined
                height?: number | undefined
                bbox?: string | undefined
                view?: 'Unified' | 'IN' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/map/:versionNumber/tile/:layer/:style/:zoom/:X/:Y.pbf': {
      $get:
        | {
            input: {
              param: {
                versionNumber: 1
                layer: 'basic' | 'hybrid' | 'labels'
                style: 'main'
                zoom:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | 14
                  | 15
                  | 16
                  | 17
                  | 18
                  | 19
                  | 20
                  | 21
                  | 22
                X: number
                Y: number
              }
            } & {
              query: { view?: 'Unified' | 'IL' | 'IN' | undefined; language?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                versionNumber: 1
                layer: 'basic' | 'hybrid' | 'labels'
                style: 'main'
                zoom:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | 14
                  | 15
                  | 16
                  | 17
                  | 18
                  | 19
                  | 20
                  | 21
                  | 22
                X: number
                Y: number
              }
            } & {
              query: { view?: 'Unified' | 'IL' | 'IN' | undefined; language?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                versionNumber: 1
                layer: 'basic' | 'hybrid' | 'labels'
                style: 'main'
                zoom:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | 14
                  | 15
                  | 16
                  | 17
                  | 18
                  | 19
                  | 20
                  | 21
                  | 22
                X: number
                Y: number
              }
            } & {
              query: { view?: 'Unified' | 'IL' | 'IN' | undefined; language?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                versionNumber: 1
                layer: 'basic' | 'hybrid' | 'labels'
                style: 'main'
                zoom:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | 14
                  | 15
                  | 16
                  | 17
                  | 18
                  | 19
                  | 20
                  | 21
                  | 22
                X: number
                Y: number
              }
            } & {
              query: { view?: 'Unified' | 'IL' | 'IN' | undefined; language?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              param: {
                versionNumber: 1
                layer: 'basic' | 'hybrid' | 'labels'
                style: 'main'
                zoom:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | 14
                  | 15
                  | 16
                  | 17
                  | 18
                  | 19
                  | 20
                  | 21
                  | 22
                X: number
                Y: number
              }
            } & {
              query: { view?: 'Unified' | 'IL' | 'IN' | undefined; language?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/map/:versionNumber/tile/:layer/:style/:zoom/:X/:Y.:format': {
      $get:
        | {
            input: {
              param: {
                versionNumber: 1
                layer: 'basic' | 'hybrid' | 'labels'
                style: 'main' | 'night'
                zoom:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | 14
                  | 15
                  | 16
                  | 17
                  | 18
                  | 19
                  | 20
                  | 21
                  | 22
                X: number
                Y: number
                format: 'jpg' | 'png'
              }
            } & { query: { tileSize?: 256 | 512 | undefined; view?: 'Unified' | 'IN' | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                versionNumber: 1
                layer: 'basic' | 'hybrid' | 'labels'
                style: 'main' | 'night'
                zoom:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | 14
                  | 15
                  | 16
                  | 17
                  | 18
                  | 19
                  | 20
                  | 21
                  | 22
                X: number
                Y: number
                format: 'jpg' | 'png'
              }
            } & { query: { tileSize?: 256 | 512 | undefined; view?: 'Unified' | 'IN' | undefined } }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: {
              param: {
                versionNumber: 1
                layer: 'basic' | 'hybrid' | 'labels'
                style: 'main' | 'night'
                zoom:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | 14
                  | 15
                  | 16
                  | 17
                  | 18
                  | 19
                  | 20
                  | 21
                  | 22
                X: number
                Y: number
                format: 'jpg' | 'png'
              }
            } & { query: { tileSize?: 256 | 512 | undefined; view?: 'Unified' | 'IN' | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                versionNumber: 1
                layer: 'basic' | 'hybrid' | 'labels'
                style: 'main' | 'night'
                zoom:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | 14
                  | 15
                  | 16
                  | 17
                  | 18
                  | 19
                  | 20
                  | 21
                  | 22
                X: number
                Y: number
                format: 'jpg' | 'png'
              }
            } & { query: { tileSize?: 256 | 512 | undefined; view?: 'Unified' | 'IN' | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                versionNumber: 1
                layer: 'basic' | 'hybrid' | 'labels'
                style: 'main' | 'night'
                zoom:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | 14
                  | 15
                  | 16
                  | 17
                  | 18
                  | 19
                  | 20
                  | 21
                  | 22
                X: number
                Y: number
                format: 'jpg' | 'png'
              }
            } & { query: { tileSize?: 256 | 512 | undefined; view?: 'Unified' | 'IN' | undefined } }
            output: {}
            outputFormat: string
            status: 410
          }
        | {
            input: {
              param: {
                versionNumber: 1
                layer: 'basic' | 'hybrid' | 'labels'
                style: 'main' | 'night'
                zoom:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | 14
                  | 15
                  | 16
                  | 17
                  | 18
                  | 19
                  | 20
                  | 21
                  | 22
                X: number
                Y: number
                format: 'jpg' | 'png'
              }
            } & { query: { tileSize?: 256 | 512 | undefined; view?: 'Unified' | 'IN' | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/map/:versionNumber/wms/': {
      $get:
        | {
            input: { param: { versionNumber: 1 } } & {
              query: {
                request: 'GetMap'
                srs: 'EPSG:3857' | 'EPSG:4326'
                bbox: string
                width: number
                height: number
                format: 'image/jpeg' | 'image/png'
                layers: 'basic'
                styles?: '' | undefined
                service?: 'WMS' | undefined
                version: '1.1.1'
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { versionNumber: 1 } } & {
              query: {
                request: 'GetMap'
                srs: 'EPSG:3857' | 'EPSG:4326'
                bbox: string
                width: number
                height: number
                format: 'image/jpeg' | 'image/png'
                layers: 'basic'
                styles?: '' | undefined
                service?: 'WMS' | undefined
                version: '1.1.1'
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { versionNumber: 1 } } & {
              query: {
                request: 'GetMap'
                srs: 'EPSG:3857' | 'EPSG:4326'
                bbox: string
                width: number
                height: number
                format: 'image/jpeg' | 'image/png'
                layers: 'basic'
                styles?: '' | undefined
                service?: 'WMS' | undefined
                version: '1.1.1'
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { versionNumber: 1 } } & {
              query: {
                request: 'GetMap'
                srs: 'EPSG:3857' | 'EPSG:4326'
                bbox: string
                width: number
                height: number
                format: 'image/jpeg' | 'image/png'
                layers: 'basic'
                styles?: '' | undefined
                service?: 'WMS' | undefined
                version: '1.1.1'
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/map/:versionNumber/wms//': {
      $get:
        | {
            input: { param: { versionNumber: 1 } } & {
              query: { service: 'WMS'; request: 'GetCapabilities'; version?: '1.1.1' | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { versionNumber: 1 } } & {
              query: { service: 'WMS'; request: 'GetCapabilities'; version?: '1.1.1' | undefined }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { versionNumber: 1 } } & {
              query: { service: 'WMS'; request: 'GetCapabilities'; version?: '1.1.1' | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { versionNumber: 1 } } & {
              query: { service: 'WMS'; request: 'GetCapabilities'; version?: '1.1.1' | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/map/:versionNumber/wmts/:key/:wmtsVersion/WMTSCapabilities.xml': {
      $get:
        | {
            input: { param: { versionNumber: 1; key: string; wmtsVersion: '1.0.0' } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { versionNumber: 1; key: string; wmtsVersion: '1.0.0' } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { versionNumber: 1; key: string; wmtsVersion: '1.0.0' } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { versionNumber: 1; key: string; wmtsVersion: '1.0.0' } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
