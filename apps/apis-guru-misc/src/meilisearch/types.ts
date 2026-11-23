declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/dumps': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/health': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/indexes': {
      $get: {
        input: { query: { offset?: string | undefined; limit?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { json: { primaryKey?: string | undefined; uid?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/indexes/books': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $patch: {
        input: { json: { primaryKey?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/indexes/books/documents': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: {
          query: {
            limit?: string | undefined
            offset?: string | undefined
            fields?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { primaryKey?: string | undefined } } & {
          json: {
            author?: string | undefined
            genre?: string | undefined
            id?: number | undefined
            price?: number | undefined
            title?: string | undefined
          }[]
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { query: { primaryKey?: string | undefined } } & {
          json: {
            author?: string | undefined
            date?: string | undefined
            id?: number | undefined
          }[]
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/indexes/books/documents/1': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/indexes/books/documents/2': {
      $get: {
        input: { query: { fields?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/indexes/books/documents/delete-batch': {
      $post: { input: { json: number[] }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/indexes/books/search': {
      $get: {
        input: {
          query: {
            q?: string | undefined
            offset?: string | undefined
            limit?: string | undefined
            attributesToRetrieve?: string | undefined
            attributesToCrop?: string | undefined
            attributesToHighlight?: string | undefined
            cropLength?: string | undefined
            cropMarker?: string | undefined
            filter?: string | undefined
            showMatchesPosition?: string | undefined
            facets?: string | undefined
            sort?: string | undefined
            highlightPreTag?: string | undefined
            highlightPostTag?: string | undefined
            matchingStrategy?: string | undefined
            page?: string | undefined
            hitsPerPage?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { json: { attributesToHighlight?: string[] | undefined; q?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/indexes/books/settings': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $patch: {
        input: {
          json: {
            displayedAttributes?: string[] | undefined
            filterableAttributes?: string[] | undefined
            searchableAttributes?: string[] | undefined
            sortableAttributes?: string[] | undefined
            stopWords?: string[] | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/indexes/books/settings/displayed-attributes': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $put: { input: { json: string[] }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/indexes/books/settings/distinct-attribute': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $put: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/indexes/books/settings/faceting': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $patch: {
        input: { json: { maxValuesPerFacet?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/indexes/books/settings/filterable-attributes': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $put: { input: { json: string[] }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/indexes/books/settings/pagination': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $patch: {
        input: { json: { maxTotalHits?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/indexes/books/settings/ranking-rules': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $put: { input: { json: string[] }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/indexes/books/settings/searchable-attributes': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $put: { input: { json: string[] }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/indexes/books/settings/sortable-attributes': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $put: { input: { json: string[] }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/indexes/books/settings/stop-words': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: { input: { json: string[] }; output: {}; outputFormat: string; status: 200 }
      $put: { input: { json: string[] }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/indexes/books/settings/synonyms': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $put: {
        input: { json: { 'harry potter'?: string[] | undefined; hp?: string[] | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/indexes/books/settings/typo-tolerance': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $patch: {
        input: {
          json: {
            disableOnAttributes?: string[] | undefined
            disableOnWords?: string[] | undefined
            minWordSizeForTypos?:
              | { oneTypo?: number | undefined; twoTypos?: number | undefined }
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/indexes/books/stats': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/indexes/swap-indexes': {
      $post: {
        input: { json: { indexes?: string[] | undefined }[] }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/keys': {
      $get: {
        input: { query: { offset?: string | undefined; limit?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: {
          json: {
            actions?: string[] | undefined
            description?: string | undefined
            expiresAt?: ({ [x: string]: unknown } | null) | undefined
            indexes?: string[] | undefined
            name?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/keys/L8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/keys/kN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5b': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/keys/wYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2dd': {
      $patch: {
        input: { json: { description?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & { '/stats': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/tasks': {
      $delete: {
        input: {
          query: {
            uids?: string | undefined
            indexUids?: string | undefined
            types?: string | undefined
            statuses?: string | undefined
            beforeEnqueuedAt?: string | undefined
            afterEnqueuedAt?: string | undefined
            beforeStartedAt?: string | undefined
            afterStartedAt?: string | undefined
            beforeFinishedAt?: string | undefined
            afterFinishedAt?: string | undefined
            canceledBy?: string | undefined
            limit?: string | undefined
            from?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          query: {
            uids?: string | undefined
            indexUids?: string | undefined
            types?: string | undefined
            statuses?: string | undefined
            beforeEnqueuedAt?: string | undefined
            afterEnqueuedAt?: string | undefined
            beforeStartedAt?: string | undefined
            afterStartedAt?: string | undefined
            beforeFinishedAt?: string | undefined
            afterFinishedAt?: string | undefined
            canceledBy?: string | undefined
            limit?: string | undefined
            from?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & { '/tasks/0': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/tasks/cancel': {
      $post: {
        input: {
          query: {
            uids?: string | undefined
            indexUids?: string | undefined
            types?: string | undefined
            statuses?: string | undefined
            beforeEnqueuedAt?: string | undefined
            afterEnqueuedAt?: string | undefined
            beforeStartedAt?: string | undefined
            afterStartedAt?: string | undefined
            beforeFinishedAt?: string | undefined
            afterFinishedAt?: string | undefined
            canceledBy?: string | undefined
            limit?: string | undefined
            from?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & { '/version': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } },
  '/'
>
export default routes
