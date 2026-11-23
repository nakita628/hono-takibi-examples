declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/search/:versionNumber/additionalData.{ext}': {
      $get:
        | {
            input: { param: { versionNumber: 2; ext: 'json' } } & {
              query: {
                geometries: string
                geometriesZoom?:
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
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { versionNumber: 2; ext: 'json' } } & {
              query: {
                geometries: string
                geometriesZoom?:
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
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { versionNumber: 2; ext: 'json' } } & {
              query: {
                geometries: string
                geometriesZoom?:
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
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { versionNumber: 2; ext: 'json' } } & {
              query: {
                geometries: string
                geometriesZoom?:
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
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { versionNumber: 2; ext: 'json' } } & {
              query: {
                geometries: string
                geometriesZoom?:
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
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { versionNumber: 2; ext: 'json' } } & {
              query: {
                geometries: string
                geometriesZoom?:
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
              }
            }
            output: {}
            outputFormat: string
            status: 408
          }
        | {
            input: { param: { versionNumber: 2; ext: 'json' } } & {
              query: {
                geometries: string
                geometriesZoom?:
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
              }
            }
            output: {}
            outputFormat: string
            status: 414
          }
        | {
            input: { param: { versionNumber: 2; ext: 'json' } } & {
              query: {
                geometries: string
                geometriesZoom?:
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
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { versionNumber: 2; ext: 'json' } } & {
              query: {
                geometries: string
                geometriesZoom?:
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
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { versionNumber: 2; ext: 'json' } } & {
              query: {
                geometries: string
                geometriesZoom?:
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
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { versionNumber: 2; ext: 'json' } } & {
              query: {
                geometries: string
                geometriesZoom?:
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
              }
            }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/search/:versionNumber/cS/:category.{ext}': {
      $get:
        | {
            input: {
              param: { versionNumber: 2; category: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                idxSet?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { versionNumber: 2; category: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                idxSet?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: { versionNumber: 2; category: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                idxSet?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { versionNumber: 2; category: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                idxSet?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              param: { versionNumber: 2; category: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                idxSet?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/search/:versionNumber/categorySearch/:query.{ext}': {
      $get:
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/search/:versionNumber/geocode/:query.{ext}': {
      $get:
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                storeResult?: boolean | undefined
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                storeResult?: boolean | undefined
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                storeResult?: boolean | undefined
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                storeResult?: boolean | undefined
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                storeResult?: boolean | undefined
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/search/:versionNumber/geometryFilter.{ext}': {
      $get:
        | {
            input: { param: { versionNumber: 2; ext: 'json' | 'jsonp' | 'js' | 'xml' } } & {
              query: { geometryList: string; poiList: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { versionNumber: 2; ext: 'json' | 'jsonp' | 'js' | 'xml' } } & {
              query: { geometryList: string; poiList: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { versionNumber: 2; ext: 'json' | 'jsonp' | 'js' | 'xml' } } & {
              query: { geometryList: string; poiList: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { versionNumber: 2; ext: 'json' | 'jsonp' | 'js' | 'xml' } } & {
              query: { geometryList: string; poiList: string }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { versionNumber: 2; ext: 'json' | 'jsonp' | 'js' | 'xml' } } & {
              query: { geometryList: string; poiList: string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { versionNumber: 2; ext: 'json' | 'jsonp' | 'js' | 'xml' } } & {
              json: {
                geometryList?:
                  | {
                      position?: string | undefined
                      radius?: number | undefined
                      type?: string | undefined
                      vertices?: string[] | undefined
                    }[]
                  | undefined
                poiList?:
                  | {
                      address?: { freeformAddress?: string | undefined } | undefined
                      poi?: { name?: string | undefined } | undefined
                      position?: { lat?: number | undefined; lon?: number | undefined } | undefined
                    }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { versionNumber: 2; ext: 'json' | 'jsonp' | 'js' | 'xml' } } & {
              json: {
                geometryList?:
                  | {
                      position?: string | undefined
                      radius?: number | undefined
                      type?: string | undefined
                      vertices?: string[] | undefined
                    }[]
                  | undefined
                poiList?:
                  | {
                      address?: { freeformAddress?: string | undefined } | undefined
                      poi?: { name?: string | undefined } | undefined
                      position?: { lat?: number | undefined; lon?: number | undefined } | undefined
                    }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { versionNumber: 2; ext: 'json' | 'jsonp' | 'js' | 'xml' } } & {
              json: {
                geometryList?:
                  | {
                      position?: string | undefined
                      radius?: number | undefined
                      type?: string | undefined
                      vertices?: string[] | undefined
                    }[]
                  | undefined
                poiList?:
                  | {
                      address?: { freeformAddress?: string | undefined } | undefined
                      poi?: { name?: string | undefined } | undefined
                      position?: { lat?: number | undefined; lon?: number | undefined } | undefined
                    }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { versionNumber: 2; ext: 'json' | 'jsonp' | 'js' | 'xml' } } & {
              json: {
                geometryList?:
                  | {
                      position?: string | undefined
                      radius?: number | undefined
                      type?: string | undefined
                      vertices?: string[] | undefined
                    }[]
                  | undefined
                poiList?:
                  | {
                      address?: { freeformAddress?: string | undefined } | undefined
                      poi?: { name?: string | undefined } | undefined
                      position?: { lat?: number | undefined; lon?: number | undefined } | undefined
                    }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { versionNumber: 2; ext: 'json' | 'jsonp' | 'js' | 'xml' } } & {
              json: {
                geometryList?:
                  | {
                      position?: string | undefined
                      radius?: number | undefined
                      type?: string | undefined
                      vertices?: string[] | undefined
                    }[]
                  | undefined
                poiList?:
                  | {
                      address?: { freeformAddress?: string | undefined } | undefined
                      poi?: { name?: string | undefined } | undefined
                      position?: { lat?: number | undefined; lon?: number | undefined } | undefined
                    }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/search/:versionNumber/geometrySearch/:query.{ext}': {
      $get:
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                geometryList?: string | undefined
                limit?: number | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                idxSet?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                geometryList?: string | undefined
                limit?: number | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                idxSet?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                geometryList?: string | undefined
                limit?: number | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                idxSet?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                geometryList?: string | undefined
                limit?: number | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                idxSet?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                geometryList?: string | undefined
                limit?: number | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                idxSet?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                limit?: number | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                idxSet?: string | undefined
              }
            } & {
              json: {
                geometryList?:
                  | {
                      position?: string | undefined
                      radius?: number | undefined
                      type?: string | undefined
                      vertices?: string[] | undefined
                    }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                limit?: number | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                idxSet?: string | undefined
              }
            } & {
              json: {
                geometryList?:
                  | {
                      position?: string | undefined
                      radius?: number | undefined
                      type?: string | undefined
                      vertices?: string[] | undefined
                    }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                limit?: number | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                idxSet?: string | undefined
              }
            } & {
              json: {
                geometryList?:
                  | {
                      position?: string | undefined
                      radius?: number | undefined
                      type?: string | undefined
                      vertices?: string[] | undefined
                    }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                limit?: number | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                idxSet?: string | undefined
              }
            } & {
              json: {
                geometryList?:
                  | {
                      position?: string | undefined
                      radius?: number | undefined
                      type?: string | undefined
                      vertices?: string[] | undefined
                    }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                limit?: number | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                idxSet?: string | undefined
              }
            } & {
              json: {
                geometryList?:
                  | {
                      position?: string | undefined
                      radius?: number | undefined
                      type?: string | undefined
                      vertices?: string[] | undefined
                    }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/search/:versionNumber/nearbySearch/.{ext}': {
      $get:
        | {
            input: { param: { versionNumber: 2; ext: 'json' | 'jsonp' | 'js' | 'xml' } } & {
              query: {
                lat: number
                lon: number
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                minFuzzyLevel?: number | undefined
                maxFuzzyLevel?: number | undefined
                idxSet?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { versionNumber: 2; ext: 'json' | 'jsonp' | 'js' | 'xml' } } & {
              query: {
                lat: number
                lon: number
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                minFuzzyLevel?: number | undefined
                maxFuzzyLevel?: number | undefined
                idxSet?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { versionNumber: 2; ext: 'json' | 'jsonp' | 'js' | 'xml' } } & {
              query: {
                lat: number
                lon: number
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                minFuzzyLevel?: number | undefined
                maxFuzzyLevel?: number | undefined
                idxSet?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { versionNumber: 2; ext: 'json' | 'jsonp' | 'js' | 'xml' } } & {
              query: {
                lat: number
                lon: number
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                minFuzzyLevel?: number | undefined
                maxFuzzyLevel?: number | undefined
                idxSet?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { versionNumber: 2; ext: 'json' | 'jsonp' | 'js' | 'xml' } } & {
              query: {
                lat: number
                lon: number
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                minFuzzyLevel?: number | undefined
                maxFuzzyLevel?: number | undefined
                idxSet?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/search/:versionNumber/poiSearch/:query.{ext}': {
      $get:
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/search/:versionNumber/reverseGeocode/crossStreet/:position.{ext}': {
      $get:
        | {
            input: {
              param: { versionNumber: 2; position: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                limit?: number | undefined
                spatialKeys?: boolean | undefined
                heading?: number | undefined
                radius?: number | undefined
                language?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { versionNumber: 2; position: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                limit?: number | undefined
                spatialKeys?: boolean | undefined
                heading?: number | undefined
                radius?: number | undefined
                language?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: { versionNumber: 2; position: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                limit?: number | undefined
                spatialKeys?: boolean | undefined
                heading?: number | undefined
                radius?: number | undefined
                language?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { versionNumber: 2; position: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                limit?: number | undefined
                spatialKeys?: boolean | undefined
                heading?: number | undefined
                radius?: number | undefined
                language?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              param: { versionNumber: 2; position: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                limit?: number | undefined
                spatialKeys?: boolean | undefined
                heading?: number | undefined
                radius?: number | undefined
                language?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/search/:versionNumber/reverseGeocode/:position.{ext}': {
      $get:
        | {
            input: {
              param: { versionNumber: 2; position: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                spatialKeys?: boolean | undefined
                returnSpeedLimit?: boolean | undefined
                heading?: number | undefined
                radius?: number | undefined
                number?: string | undefined
                returnRoadUse?: boolean | undefined
                roadUse?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { versionNumber: 2; position: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                spatialKeys?: boolean | undefined
                returnSpeedLimit?: boolean | undefined
                heading?: number | undefined
                radius?: number | undefined
                number?: string | undefined
                returnRoadUse?: boolean | undefined
                roadUse?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: { versionNumber: 2; position: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                spatialKeys?: boolean | undefined
                returnSpeedLimit?: boolean | undefined
                heading?: number | undefined
                radius?: number | undefined
                number?: string | undefined
                returnRoadUse?: boolean | undefined
                roadUse?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { versionNumber: 2; position: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                spatialKeys?: boolean | undefined
                returnSpeedLimit?: boolean | undefined
                heading?: number | undefined
                radius?: number | undefined
                number?: string | undefined
                returnRoadUse?: boolean | undefined
                roadUse?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              param: { versionNumber: 2; position: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                spatialKeys?: boolean | undefined
                returnSpeedLimit?: boolean | undefined
                heading?: number | undefined
                radius?: number | undefined
                number?: string | undefined
                returnRoadUse?: boolean | undefined
                roadUse?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/search/:versionNumber/routedFilter/:position/:heading.{ext}': {
      $get:
        | {
            input: {
              param: {
                versionNumber: 2
                position: string
                heading: number
                ext: 'json' | 'jsonp' | 'js' | 'xml'
              }
            } & { query: { poiList: string; routingTimeout?: number | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                versionNumber: 2
                position: string
                heading: number
                ext: 'json' | 'jsonp' | 'js' | 'xml'
              }
            } & { query: { poiList: string; routingTimeout?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                versionNumber: 2
                position: string
                heading: number
                ext: 'json' | 'jsonp' | 'js' | 'xml'
              }
            } & { query: { poiList: string; routingTimeout?: number | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                versionNumber: 2
                position: string
                heading: number
                ext: 'json' | 'jsonp' | 'js' | 'xml'
              }
            } & { query: { poiList: string; routingTimeout?: number | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              param: {
                versionNumber: 2
                position: string
                heading: number
                ext: 'json' | 'jsonp' | 'js' | 'xml'
              }
            } & { query: { poiList: string; routingTimeout?: number | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: {
              param: {
                versionNumber: 2
                position: string
                heading: number
                ext: 'json' | 'jsonp' | 'js' | 'xml'
              }
            } & { query: { routingTimeout?: number | undefined } } & {
              json: {
                poiList?:
                  | {
                      address?: { freeformAddress?: string | undefined } | undefined
                      poi?: { name?: string | undefined } | undefined
                      position?: { lat?: number | undefined; lon?: number | undefined } | undefined
                    }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                versionNumber: 2
                position: string
                heading: number
                ext: 'json' | 'jsonp' | 'js' | 'xml'
              }
            } & { query: { routingTimeout?: number | undefined } } & {
              json: {
                poiList?:
                  | {
                      address?: { freeformAddress?: string | undefined } | undefined
                      poi?: { name?: string | undefined } | undefined
                      position?: { lat?: number | undefined; lon?: number | undefined } | undefined
                    }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                versionNumber: 2
                position: string
                heading: number
                ext: 'json' | 'jsonp' | 'js' | 'xml'
              }
            } & { query: { routingTimeout?: number | undefined } } & {
              json: {
                poiList?:
                  | {
                      address?: { freeformAddress?: string | undefined } | undefined
                      poi?: { name?: string | undefined } | undefined
                      position?: { lat?: number | undefined; lon?: number | undefined } | undefined
                    }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                versionNumber: 2
                position: string
                heading: number
                ext: 'json' | 'jsonp' | 'js' | 'xml'
              }
            } & { query: { routingTimeout?: number | undefined } } & {
              json: {
                poiList?:
                  | {
                      address?: { freeformAddress?: string | undefined } | undefined
                      poi?: { name?: string | undefined } | undefined
                      position?: { lat?: number | undefined; lon?: number | undefined } | undefined
                    }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              param: {
                versionNumber: 2
                position: string
                heading: number
                ext: 'json' | 'jsonp' | 'js' | 'xml'
              }
            } & { query: { routingTimeout?: number | undefined } } & {
              json: {
                poiList?:
                  | {
                      address?: { freeformAddress?: string | undefined } | undefined
                      poi?: { name?: string | undefined } | undefined
                      position?: { lat?: number | undefined; lon?: number | undefined } | undefined
                    }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/search/:versionNumber/routedSearch/:query/:position/:heading.{ext}': {
      $get:
        | {
            input: {
              param: {
                versionNumber: 2
                query: string
                position: string
                heading: number
                ext: 'json' | 'jsonp' | 'js' | 'xml'
              }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                multiplier?: number | undefined
                routingTimeout?: number | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                idxSet?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                versionNumber: 2
                query: string
                position: string
                heading: number
                ext: 'json' | 'jsonp' | 'js' | 'xml'
              }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                multiplier?: number | undefined
                routingTimeout?: number | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                idxSet?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                versionNumber: 2
                query: string
                position: string
                heading: number
                ext: 'json' | 'jsonp' | 'js' | 'xml'
              }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                multiplier?: number | undefined
                routingTimeout?: number | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                idxSet?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                versionNumber: 2
                query: string
                position: string
                heading: number
                ext: 'json' | 'jsonp' | 'js' | 'xml'
              }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                multiplier?: number | undefined
                routingTimeout?: number | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                idxSet?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              param: {
                versionNumber: 2
                query: string
                position: string
                heading: number
                ext: 'json' | 'jsonp' | 'js' | 'xml'
              }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                multiplier?: number | undefined
                routingTimeout?: number | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                idxSet?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/search/:versionNumber/s/:query.{ext}': {
      $get:
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                idxSet?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                idxSet?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                idxSet?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                idxSet?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                idxSet?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/search/:versionNumber/search/:query.{ext}': {
      $get:
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                minFuzzyLevel?: number | undefined
                maxFuzzyLevel?: number | undefined
                idxSet?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                minFuzzyLevel?: number | undefined
                maxFuzzyLevel?: number | undefined
                idxSet?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                minFuzzyLevel?: number | undefined
                maxFuzzyLevel?: number | undefined
                idxSet?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                minFuzzyLevel?: number | undefined
                maxFuzzyLevel?: number | undefined
                idxSet?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & {
              query: {
                typeahead?: boolean | undefined
                limit?: number | undefined
                ofs?: number | undefined
                countrySet?: string | undefined
                lat?: number | undefined
                lon?: number | undefined
                radius?: number | undefined
                topLeft?: string | undefined
                btmRight?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
                minFuzzyLevel?: number | undefined
                maxFuzzyLevel?: number | undefined
                idxSet?: string | undefined
                view?: 'Unified' | 'IN' | 'PK' | 'IL' | 'MA' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/search/:versionNumber/searchAlongRoute/:query.{ext}': {
      $post:
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & { query: { maxDetourTime: number; limit?: number | undefined } } & {
              json: {
                route?:
                  | {
                      points?: { lat?: number | undefined; lon?: number | undefined }[] | undefined
                    }
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & { query: { maxDetourTime: number; limit?: number | undefined } } & {
              json: {
                route?:
                  | {
                      points?: { lat?: number | undefined; lon?: number | undefined }[] | undefined
                    }
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & { query: { maxDetourTime: number; limit?: number | undefined } } & {
              json: {
                route?:
                  | {
                      points?: { lat?: number | undefined; lon?: number | undefined }[] | undefined
                    }
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & { query: { maxDetourTime: number; limit?: number | undefined } } & {
              json: {
                route?:
                  | {
                      points?: { lat?: number | undefined; lon?: number | undefined }[] | undefined
                    }
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              param: { versionNumber: 2; query: string; ext: 'json' | 'jsonp' | 'js' | 'xml' }
            } & { query: { maxDetourTime: number; limit?: number | undefined } } & {
              json: {
                route?:
                  | {
                      points?: { lat?: number | undefined; lon?: number | undefined }[] | undefined
                    }
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/search/:versionNumber/structuredGeocode.{ext}': {
      $get:
        | {
            input: { param: { versionNumber: 2; ext: 'json' | 'jsonp' | 'js' | 'xml' } } & {
              query: {
                countryCode: string
                limit?: number | undefined
                ofs?: number | undefined
                streetNumber?: string | undefined
                streetName?: string | undefined
                crossStreet?: string | undefined
                municipality?: string | undefined
                municipalitySubdivision?: string | undefined
                countryTertiarySubdivision?: string | undefined
                countrySecondarySubdivision?: string | undefined
                countrySubdivision?: string | undefined
                postalCode?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { versionNumber: 2; ext: 'json' | 'jsonp' | 'js' | 'xml' } } & {
              query: {
                countryCode: string
                limit?: number | undefined
                ofs?: number | undefined
                streetNumber?: string | undefined
                streetName?: string | undefined
                crossStreet?: string | undefined
                municipality?: string | undefined
                municipalitySubdivision?: string | undefined
                countryTertiarySubdivision?: string | undefined
                countrySecondarySubdivision?: string | undefined
                countrySubdivision?: string | undefined
                postalCode?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { versionNumber: 2; ext: 'json' | 'jsonp' | 'js' | 'xml' } } & {
              query: {
                countryCode: string
                limit?: number | undefined
                ofs?: number | undefined
                streetNumber?: string | undefined
                streetName?: string | undefined
                crossStreet?: string | undefined
                municipality?: string | undefined
                municipalitySubdivision?: string | undefined
                countryTertiarySubdivision?: string | undefined
                countrySecondarySubdivision?: string | undefined
                countrySubdivision?: string | undefined
                postalCode?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { versionNumber: 2; ext: 'json' | 'jsonp' | 'js' | 'xml' } } & {
              query: {
                countryCode: string
                limit?: number | undefined
                ofs?: number | undefined
                streetNumber?: string | undefined
                streetName?: string | undefined
                crossStreet?: string | undefined
                municipality?: string | undefined
                municipalitySubdivision?: string | undefined
                countryTertiarySubdivision?: string | undefined
                countrySecondarySubdivision?: string | undefined
                countrySubdivision?: string | undefined
                postalCode?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { versionNumber: 2; ext: 'json' | 'jsonp' | 'js' | 'xml' } } & {
              query: {
                countryCode: string
                limit?: number | undefined
                ofs?: number | undefined
                streetNumber?: string | undefined
                streetName?: string | undefined
                crossStreet?: string | undefined
                municipality?: string | undefined
                municipalitySubdivision?: string | undefined
                countryTertiarySubdivision?: string | undefined
                countrySecondarySubdivision?: string | undefined
                countrySubdivision?: string | undefined
                postalCode?: string | undefined
                language?: string | undefined
                extendedPostalCodesFor?: string | undefined
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
