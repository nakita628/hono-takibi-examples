type DesFacet = { [x: string]: unknown }[] | string
type GeoFacet = { [x: string]: unknown }[] | string
type OrgFacet = { [x: string]: unknown }[] | null
type PerFacet = { [x: string]: unknown }[] | null
type ArticleWithCountType = {
  abstract?: string | undefined
  byline?: string | undefined
  column?: string | undefined
  count_type?: string | undefined
  des_facet?: DesFacet | undefined
  geo_facet?: GeoFacet | undefined
  media?:
    | {
        caption?: string | undefined
        copyright?: string | undefined
        'media-metadata'?:
          | {
              format?: string | undefined
              height?: number | undefined
              url?: string | undefined
              width?: number | undefined
            }
          | undefined
        subtype?: string | undefined
        type?: string | undefined
      }[]
    | undefined
  org_facet?: OrgFacet | undefined
  per_facet?: PerFacet | undefined
  published_date?: string | undefined
  section?: string | undefined
  source?: string | undefined
  title?: string | undefined
  url?: string | undefined
}
type Article = {
  abstract?: string | undefined
  byline?: string | undefined
  column?: string | undefined
  des_facet?: DesFacet | undefined
  geo_facet?: GeoFacet | undefined
  media?: { [x: string]: unknown }[] | string | undefined
  org_facet?: OrgFacet | undefined
  per_facet?: PerFacet | undefined
  published_date?: string | undefined
  section?: string | undefined
  source?: string | undefined
  title?: string | undefined
  url?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/mostemailed/:section/:time-period.json': {
      $get:
        | {
            input: {
              param: {
                section:
                  | 'Arts'
                  | 'Automobiles'
                  | 'Blogs'
                  | 'Books'
                  | 'Business Day'
                  | 'Education'
                  | 'Fashion & Style'
                  | 'Food'
                  | 'Health'
                  | 'Job Market'
                  | 'Magazine'
                  | 'membercenter'
                  | 'Movies'
                  | 'Multimedia'
                  | 'N.Y.%20%2F%20Region'
                  | 'NYT Now'
                  | 'Obituaries'
                  | 'Open'
                  | 'Opinion'
                  | 'Public Editor'
                  | 'Real Estate'
                  | 'Science'
                  | 'Sports'
                  | 'Style'
                  | 'Sunday Review'
                  | 'T Magazine'
                  | 'Technology'
                  | 'The Upshot'
                  | 'Theater'
                  | 'Times Insider'
                  | 'Today’s Paper'
                  | 'Travel'
                  | 'U.S.'
                  | 'World'
                  | 'Your Money'
                  | 'all-sections'
                'time-period': '1' | '7' | '30'
              }
            }
            output: {
              copyright?: string | undefined
              num_results?: number | undefined
              results?: ArticleWithCountType[] | undefined
              status?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                section:
                  | 'Arts'
                  | 'Automobiles'
                  | 'Blogs'
                  | 'Books'
                  | 'Business Day'
                  | 'Education'
                  | 'Fashion & Style'
                  | 'Food'
                  | 'Health'
                  | 'Job Market'
                  | 'Magazine'
                  | 'membercenter'
                  | 'Movies'
                  | 'Multimedia'
                  | 'N.Y.%20%2F%20Region'
                  | 'NYT Now'
                  | 'Obituaries'
                  | 'Open'
                  | 'Opinion'
                  | 'Public Editor'
                  | 'Real Estate'
                  | 'Science'
                  | 'Sports'
                  | 'Style'
                  | 'Sunday Review'
                  | 'T Magazine'
                  | 'Technology'
                  | 'The Upshot'
                  | 'Theater'
                  | 'Times Insider'
                  | 'Today’s Paper'
                  | 'Travel'
                  | 'U.S.'
                  | 'World'
                  | 'Your Money'
                  | 'all-sections'
                'time-period': '1' | '7' | '30'
              }
            }
            output: {
              copyright?: string | undefined
              num_results?: number | undefined
              results?: ArticleWithCountType[] | undefined
              status?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                section:
                  | 'Arts'
                  | 'Automobiles'
                  | 'Blogs'
                  | 'Books'
                  | 'Business Day'
                  | 'Education'
                  | 'Fashion & Style'
                  | 'Food'
                  | 'Health'
                  | 'Job Market'
                  | 'Magazine'
                  | 'membercenter'
                  | 'Movies'
                  | 'Multimedia'
                  | 'N.Y.%20%2F%20Region'
                  | 'NYT Now'
                  | 'Obituaries'
                  | 'Open'
                  | 'Opinion'
                  | 'Public Editor'
                  | 'Real Estate'
                  | 'Science'
                  | 'Sports'
                  | 'Style'
                  | 'Sunday Review'
                  | 'T Magazine'
                  | 'Technology'
                  | 'The Upshot'
                  | 'Theater'
                  | 'Times Insider'
                  | 'Today’s Paper'
                  | 'Travel'
                  | 'U.S.'
                  | 'World'
                  | 'Your Money'
                  | 'all-sections'
                'time-period': '1' | '7' | '30'
              }
            }
            output: {
              copyright?: string | undefined
              errors?: string[] | undefined
              results?: { [x: string]: unknown }[] | undefined
              status?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                section:
                  | 'Arts'
                  | 'Automobiles'
                  | 'Blogs'
                  | 'Books'
                  | 'Business Day'
                  | 'Education'
                  | 'Fashion & Style'
                  | 'Food'
                  | 'Health'
                  | 'Job Market'
                  | 'Magazine'
                  | 'membercenter'
                  | 'Movies'
                  | 'Multimedia'
                  | 'N.Y.%20%2F%20Region'
                  | 'NYT Now'
                  | 'Obituaries'
                  | 'Open'
                  | 'Opinion'
                  | 'Public Editor'
                  | 'Real Estate'
                  | 'Science'
                  | 'Sports'
                  | 'Style'
                  | 'Sunday Review'
                  | 'T Magazine'
                  | 'Technology'
                  | 'The Upshot'
                  | 'Theater'
                  | 'Times Insider'
                  | 'Today’s Paper'
                  | 'Travel'
                  | 'U.S.'
                  | 'World'
                  | 'Your Money'
                  | 'all-sections'
                'time-period': '1' | '7' | '30'
              }
            }
            output: {
              copyright?: string | undefined
              errors?: string[] | undefined
              results?: { [x: string]: unknown }[] | undefined
              status?: string | undefined
            }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              param: {
                section:
                  | 'Arts'
                  | 'Automobiles'
                  | 'Blogs'
                  | 'Books'
                  | 'Business Day'
                  | 'Education'
                  | 'Fashion & Style'
                  | 'Food'
                  | 'Health'
                  | 'Job Market'
                  | 'Magazine'
                  | 'membercenter'
                  | 'Movies'
                  | 'Multimedia'
                  | 'N.Y.%20%2F%20Region'
                  | 'NYT Now'
                  | 'Obituaries'
                  | 'Open'
                  | 'Opinion'
                  | 'Public Editor'
                  | 'Real Estate'
                  | 'Science'
                  | 'Sports'
                  | 'Style'
                  | 'Sunday Review'
                  | 'T Magazine'
                  | 'Technology'
                  | 'The Upshot'
                  | 'Theater'
                  | 'Times Insider'
                  | 'Today’s Paper'
                  | 'Travel'
                  | 'U.S.'
                  | 'World'
                  | 'Your Money'
                  | 'all-sections'
                'time-period': '1' | '7' | '30'
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                section:
                  | 'Arts'
                  | 'Automobiles'
                  | 'Blogs'
                  | 'Books'
                  | 'Business Day'
                  | 'Education'
                  | 'Fashion & Style'
                  | 'Food'
                  | 'Health'
                  | 'Job Market'
                  | 'Magazine'
                  | 'membercenter'
                  | 'Movies'
                  | 'Multimedia'
                  | 'N.Y.%20%2F%20Region'
                  | 'NYT Now'
                  | 'Obituaries'
                  | 'Open'
                  | 'Opinion'
                  | 'Public Editor'
                  | 'Real Estate'
                  | 'Science'
                  | 'Sports'
                  | 'Style'
                  | 'Sunday Review'
                  | 'T Magazine'
                  | 'Technology'
                  | 'The Upshot'
                  | 'Theater'
                  | 'Times Insider'
                  | 'Today’s Paper'
                  | 'Travel'
                  | 'U.S.'
                  | 'World'
                  | 'Your Money'
                  | 'all-sections'
                'time-period': '1' | '7' | '30'
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/mostshared/:section/:time-period.json': {
      $get:
        | {
            input: {
              param: {
                section:
                  | 'Arts'
                  | 'Automobiles'
                  | 'Blogs'
                  | 'Books'
                  | 'Business Day'
                  | 'Education'
                  | 'Fashion & Style'
                  | 'Food'
                  | 'Health'
                  | 'Job Market'
                  | 'Magazine'
                  | 'membercenter'
                  | 'Movies'
                  | 'Multimedia'
                  | 'N.Y.%20%2F%20Region'
                  | 'NYT Now'
                  | 'Obituaries'
                  | 'Open'
                  | 'Opinion'
                  | 'Public Editor'
                  | 'Real Estate'
                  | 'Science'
                  | 'Sports'
                  | 'Style'
                  | 'Sunday Review'
                  | 'T Magazine'
                  | 'Technology'
                  | 'The Upshot'
                  | 'Theater'
                  | 'Times Insider'
                  | 'Today’s Paper'
                  | 'Travel'
                  | 'U.S.'
                  | 'World'
                  | 'Your Money'
                  | 'all-sections'
                'time-period': '1' | '7' | '30'
              }
            }
            output: {
              copyright?: string | undefined
              num_results?: number | undefined
              results?: Article[] | undefined
              status?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                section:
                  | 'Arts'
                  | 'Automobiles'
                  | 'Blogs'
                  | 'Books'
                  | 'Business Day'
                  | 'Education'
                  | 'Fashion & Style'
                  | 'Food'
                  | 'Health'
                  | 'Job Market'
                  | 'Magazine'
                  | 'membercenter'
                  | 'Movies'
                  | 'Multimedia'
                  | 'N.Y.%20%2F%20Region'
                  | 'NYT Now'
                  | 'Obituaries'
                  | 'Open'
                  | 'Opinion'
                  | 'Public Editor'
                  | 'Real Estate'
                  | 'Science'
                  | 'Sports'
                  | 'Style'
                  | 'Sunday Review'
                  | 'T Magazine'
                  | 'Technology'
                  | 'The Upshot'
                  | 'Theater'
                  | 'Times Insider'
                  | 'Today’s Paper'
                  | 'Travel'
                  | 'U.S.'
                  | 'World'
                  | 'Your Money'
                  | 'all-sections'
                'time-period': '1' | '7' | '30'
              }
            }
            output: {
              copyright?: string | undefined
              errors?: string[] | undefined
              results?: { [x: string]: unknown }[] | undefined
              status?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/mostviewed/:section/:time-period.json': {
      $get: {
        input: {
          param: {
            section:
              | 'Arts'
              | 'Automobiles'
              | 'Blogs'
              | 'Books'
              | 'Business Day'
              | 'Education'
              | 'Fashion & Style'
              | 'Food'
              | 'Health'
              | 'Job Market'
              | 'Magazine'
              | 'membercenter'
              | 'Movies'
              | 'Multimedia'
              | 'N.Y.%20%2F%20Region'
              | 'NYT Now'
              | 'Obituaries'
              | 'Open'
              | 'Opinion'
              | 'Public Editor'
              | 'Real Estate'
              | 'Science'
              | 'Sports'
              | 'Style'
              | 'Sunday Review'
              | 'T Magazine'
              | 'Technology'
              | 'The Upshot'
              | 'Theater'
              | 'Times Insider'
              | 'Today’s Paper'
              | 'Travel'
              | 'U.S.'
              | 'World'
              | 'Your Money'
              | 'all-sections'
            'time-period': '1' | '7' | '30'
          }
        }
        output: {
          copyright?: string | undefined
          num_results?: number | undefined
          results?: Article[] | undefined
          status?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
