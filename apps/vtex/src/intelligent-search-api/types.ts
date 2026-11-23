type AutocompleteSearchSuggestions = {
  searches?:
    | {
        attributes?:
          | (
              | {
                  key?: string | undefined
                  labelKey?: string | undefined
                  labelValue?: string | undefined
                  value?: string | undefined
                }[]
              | null
            )
          | undefined
        count?: number | undefined
        term?: string | undefined
      }[]
    | undefined
}
type Error = { message: string; stack: string }
type Banners = {
  banners?:
    | {
        area?: string | undefined
        html?: string | undefined
        id?: string | undefined
        name?: string | undefined
      }[]
    | undefined
}
type Correction = {
  correction?:
    | {
        correction?: boolean | undefined
        highlighted?: string | undefined
        misspelled?: boolean | undefined
        text?: string | undefined
      }
    | undefined
}
type Facets = {
  breadcrumb?: { href?: string | undefined; name?: string | undefined }[] | undefined
  facets?:
    | {
        hidden?: boolean | undefined
        name?: string | undefined
        quantity?: number | undefined
        type?: 'TEXT' | 'PRICERANGE' | undefined
        values?:
          | {
              id?: string | undefined
              key?: string | undefined
              name?: string | undefined
              quantity?: number | undefined
              selected?: boolean | undefined
              value?: string | undefined
            }[]
          | undefined
      }[]
    | undefined
  queryArgs?:
    | {
        query?: string | undefined
        selectedFacets?: { key?: string | undefined; value?: string | undefined }[] | undefined
      }
    | undefined
  sampling?: boolean | undefined
}
type ProductSearch = {
  correction?: { misspelled?: boolean | undefined } | undefined
  fuzzy?: string | undefined
  operator?: 'and' | 'or' | undefined
  products?: { [x: string]: unknown }[] | undefined
  recordsFiltered?: number | undefined
  translated?: boolean | undefined
}
type SearchSuggestions = {
  searches?: { count?: number | undefined; term?: string | undefined }[] | undefined
}
type TopSearches = {
  searches?: { count?: number | undefined; term?: string | undefined }[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/autocomplete_suggestions': {
      $get:
        | {
            input: { query: { query?: string | undefined; locale?: (string | null) | undefined } }
            output: AutocompleteSearchSuggestions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query?: string | undefined; locale?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/banners/:facets': {
      $get: {
        input: { param: { facets: string | null } } & {
          query: { query?: string | undefined; locale?: (string | null) | undefined }
        }
        output: Banners
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/correction_search': {
      $get: {
        input: { query: { query?: string | undefined; locale?: (string | null) | undefined } }
        output: Correction
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/facets/:facets': {
      $get: {
        input: { param: { facets: string | null } } & {
          query: {
            query?: string | undefined
            locale?: (string | null) | undefined
            hideUnavailableItems?: boolean | undefined
          }
        }
        output: Facets
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product_search/:facets': {
      $get: {
        input: { param: { facets: string | null } } & {
          query: {
            query?: string | undefined
            simulationBehavior?: 'default' | 'skip' | 'only1P' | undefined
            count?: (number | null) | undefined
            page?: (number | null) | undefined
            sort?:
              | 'price:desc'
              | 'price:asc'
              | 'orders:desc'
              | 'name:desc'
              | 'name:asc'
              | 'release:desc'
              | 'discount:desc'
              | undefined
            locale?: (string | null) | undefined
            hideUnavailableItems?: boolean | undefined
          }
        }
        output: ProductSearch
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search_suggestions': {
      $get:
        | {
            input: { query: { query?: string | undefined; locale?: (string | null) | undefined } }
            output: SearchSuggestions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query?: string | undefined; locale?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/top_searches': {
      $get:
        | {
            input: { query: { locale?: (string | null) | undefined } }
            output: TopSearches
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { locale?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
