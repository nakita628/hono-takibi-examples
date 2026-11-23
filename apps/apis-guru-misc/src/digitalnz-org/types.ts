type Record = {
  category?:
    | (
        | 'Newspapers'
        | 'Images'
        | 'Books'
        | 'Articles'
        | 'Journals'
        | 'Archives'
        | 'Audio'
        | 'Other'
        | 'Manuscripts'
        | 'Reference sources'
        | 'Research papers'
        | 'Videos'
        | 'Music Score'
        | 'Groups'
        | 'Data'
        | 'Websites'
        | 'Sets'
      )[]
    | undefined
  collection?: string[] | undefined
  collection_title?: string[] | undefined
  content_partner?: string[] | undefined
  copyright?:
    | (
        | 'All rights reserved'
        | 'Some rights reserved'
        | 'No known copyright restrictions'
        | 'Unknown'
      )[]
    | undefined
  created_at?: string | undefined
  creator?: string[] | undefined
  date?: string[] | undefined
  dc_identifier?: string[] | undefined
  description?: string | undefined
  display_collection?: string | undefined
  display_content_partner?: string | undefined
  display_date?: string | undefined
  id?: number | undefined
  landing_url?: string | undefined
  large_thumbnail_url?: string | undefined
  locations?:
    | {
        comment?: string | undefined
        lat?: number | undefined
        lng?: number | undefined
        placename?: string | undefined
      }[]
    | undefined
  primary_collection?: string[] | undefined
  rights?: string | undefined
  rights_url?: string[] | undefined
  source_url?: string | undefined
  subject?: string[] | undefined
  thumbnail_url?: string | undefined
  title?: string | undefined
  updated_at?: string | undefined
  usage?:
    | ('All rights reserved' | 'Share' | 'Modify' | 'Use commercially' | 'Unknown')[]
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/records.{format}': {
      $get:
        | {
            input: { param: { format: 'json' | 'xml' } } & {
              query: {
                text?: string | undefined
                'and[category][]'?:
                  | 'Newspapers'
                  | 'Images'
                  | 'Books'
                  | 'Articles'
                  | 'Journals'
                  | 'Archives'
                  | 'Audio'
                  | 'Other'
                  | 'Manuscripts'
                  | 'Reference sources'
                  | 'Research papers'
                  | 'Videos'
                  | 'Music Score'
                  | 'Groups'
                  | 'Data'
                  | 'Websites'
                  | 'Sets'
                  | undefined
                'and[content_partner][]'?: string | undefined
                'and[primary_collection][]'?: string | undefined
                'and[collection][]'?: string | undefined
                'and[usage][]'?:
                  | 'Share'
                  | 'Modify'
                  | 'Use commercially'
                  | 'All rights reserved'
                  | 'Unknown'
                  | undefined
                'and[subject][]'?: string | undefined
                'and[dc_type][]'?: string | undefined
                'and[format][]'?: string | undefined
                'and[placename][]'?: string | undefined
                'and[creator][]'?: string | undefined
                'and[title][]'?: string | undefined
                'and[date]'?: string | undefined
                'and[year]'?: string | undefined
                'and[decade]'?: string | undefined
                'and[century]'?: string | undefined
                'without[{filter_field}]'?: string | undefined
                'and[or][{filter_field}][]'?: string | undefined
                'and[is_commercial_use]'?: boolean | undefined
                'and[has_large_thumbnail_url]'?: 'Y' | undefined
                'and[has_lat_lng]'?: true | false | undefined
                geo_bbox?: string | undefined
                fields?: string | undefined
                sort?: 'syndication_date' | 'date' | undefined
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                facets?:
                  | (
                      | 'category'
                      | 'content_partner'
                      | 'display_collection'
                      | 'collection'
                      | 'creator'
                      | 'placename'
                      | 'date'
                      | 'year'
                      | 'decade'
                      | 'century'
                      | 'language'
                      | 'rights'
                      | 'usage'
                      | 'copyright'
                      | 'subject'
                      | 'format'
                      | 'dc_type'
                    )[]
                  | undefined
                facets_page?: number | undefined
                facets_per_page?: number | undefined
                exclude_filters_from_facets?: boolean | undefined
              }
            } & { header: { 'Authentication-Token'?: string | undefined } }
            output: {
              facets?: { [x: string]: { [x: string]: number } } | undefined
              page?: number | undefined
              per_page?: number | undefined
              records?: Record[] | undefined
              request_url?: string | undefined
              result_count?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { format: 'json' | 'xml' } } & {
              query: {
                text?: string | undefined
                'and[category][]'?:
                  | 'Newspapers'
                  | 'Images'
                  | 'Books'
                  | 'Articles'
                  | 'Journals'
                  | 'Archives'
                  | 'Audio'
                  | 'Other'
                  | 'Manuscripts'
                  | 'Reference sources'
                  | 'Research papers'
                  | 'Videos'
                  | 'Music Score'
                  | 'Groups'
                  | 'Data'
                  | 'Websites'
                  | 'Sets'
                  | undefined
                'and[content_partner][]'?: string | undefined
                'and[primary_collection][]'?: string | undefined
                'and[collection][]'?: string | undefined
                'and[usage][]'?:
                  | 'Share'
                  | 'Modify'
                  | 'Use commercially'
                  | 'All rights reserved'
                  | 'Unknown'
                  | undefined
                'and[subject][]'?: string | undefined
                'and[dc_type][]'?: string | undefined
                'and[format][]'?: string | undefined
                'and[placename][]'?: string | undefined
                'and[creator][]'?: string | undefined
                'and[title][]'?: string | undefined
                'and[date]'?: string | undefined
                'and[year]'?: string | undefined
                'and[decade]'?: string | undefined
                'and[century]'?: string | undefined
                'without[{filter_field}]'?: string | undefined
                'and[or][{filter_field}][]'?: string | undefined
                'and[is_commercial_use]'?: boolean | undefined
                'and[has_large_thumbnail_url]'?: 'Y' | undefined
                'and[has_lat_lng]'?: true | false | undefined
                geo_bbox?: string | undefined
                fields?: string | undefined
                sort?: 'syndication_date' | 'date' | undefined
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                facets?:
                  | (
                      | 'category'
                      | 'content_partner'
                      | 'display_collection'
                      | 'collection'
                      | 'creator'
                      | 'placename'
                      | 'date'
                      | 'year'
                      | 'decade'
                      | 'century'
                      | 'language'
                      | 'rights'
                      | 'usage'
                      | 'copyright'
                      | 'subject'
                      | 'format'
                      | 'dc_type'
                    )[]
                  | undefined
                facets_page?: number | undefined
                facets_per_page?: number | undefined
                exclude_filters_from_facets?: boolean | undefined
              }
            } & { header: { 'Authentication-Token'?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { format: 'json' | 'xml' } } & {
              query: {
                text?: string | undefined
                'and[category][]'?:
                  | 'Newspapers'
                  | 'Images'
                  | 'Books'
                  | 'Articles'
                  | 'Journals'
                  | 'Archives'
                  | 'Audio'
                  | 'Other'
                  | 'Manuscripts'
                  | 'Reference sources'
                  | 'Research papers'
                  | 'Videos'
                  | 'Music Score'
                  | 'Groups'
                  | 'Data'
                  | 'Websites'
                  | 'Sets'
                  | undefined
                'and[content_partner][]'?: string | undefined
                'and[primary_collection][]'?: string | undefined
                'and[collection][]'?: string | undefined
                'and[usage][]'?:
                  | 'Share'
                  | 'Modify'
                  | 'Use commercially'
                  | 'All rights reserved'
                  | 'Unknown'
                  | undefined
                'and[subject][]'?: string | undefined
                'and[dc_type][]'?: string | undefined
                'and[format][]'?: string | undefined
                'and[placename][]'?: string | undefined
                'and[creator][]'?: string | undefined
                'and[title][]'?: string | undefined
                'and[date]'?: string | undefined
                'and[year]'?: string | undefined
                'and[decade]'?: string | undefined
                'and[century]'?: string | undefined
                'without[{filter_field}]'?: string | undefined
                'and[or][{filter_field}][]'?: string | undefined
                'and[is_commercial_use]'?: boolean | undefined
                'and[has_large_thumbnail_url]'?: 'Y' | undefined
                'and[has_lat_lng]'?: true | false | undefined
                geo_bbox?: string | undefined
                fields?: string | undefined
                sort?: 'syndication_date' | 'date' | undefined
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                facets?:
                  | (
                      | 'category'
                      | 'content_partner'
                      | 'display_collection'
                      | 'collection'
                      | 'creator'
                      | 'placename'
                      | 'date'
                      | 'year'
                      | 'decade'
                      | 'century'
                      | 'language'
                      | 'rights'
                      | 'usage'
                      | 'copyright'
                      | 'subject'
                      | 'format'
                      | 'dc_type'
                    )[]
                  | undefined
                facets_page?: number | undefined
                facets_per_page?: number | undefined
                exclude_filters_from_facets?: boolean | undefined
              }
            } & { header: { 'Authentication-Token'?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { format: 'json' | 'xml' } } & {
              query: {
                text?: string | undefined
                'and[category][]'?:
                  | 'Newspapers'
                  | 'Images'
                  | 'Books'
                  | 'Articles'
                  | 'Journals'
                  | 'Archives'
                  | 'Audio'
                  | 'Other'
                  | 'Manuscripts'
                  | 'Reference sources'
                  | 'Research papers'
                  | 'Videos'
                  | 'Music Score'
                  | 'Groups'
                  | 'Data'
                  | 'Websites'
                  | 'Sets'
                  | undefined
                'and[content_partner][]'?: string | undefined
                'and[primary_collection][]'?: string | undefined
                'and[collection][]'?: string | undefined
                'and[usage][]'?:
                  | 'Share'
                  | 'Modify'
                  | 'Use commercially'
                  | 'All rights reserved'
                  | 'Unknown'
                  | undefined
                'and[subject][]'?: string | undefined
                'and[dc_type][]'?: string | undefined
                'and[format][]'?: string | undefined
                'and[placename][]'?: string | undefined
                'and[creator][]'?: string | undefined
                'and[title][]'?: string | undefined
                'and[date]'?: string | undefined
                'and[year]'?: string | undefined
                'and[decade]'?: string | undefined
                'and[century]'?: string | undefined
                'without[{filter_field}]'?: string | undefined
                'and[or][{filter_field}][]'?: string | undefined
                'and[is_commercial_use]'?: boolean | undefined
                'and[has_large_thumbnail_url]'?: 'Y' | undefined
                'and[has_lat_lng]'?: true | false | undefined
                geo_bbox?: string | undefined
                fields?: string | undefined
                sort?: 'syndication_date' | 'date' | undefined
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                facets?:
                  | (
                      | 'category'
                      | 'content_partner'
                      | 'display_collection'
                      | 'collection'
                      | 'creator'
                      | 'placename'
                      | 'date'
                      | 'year'
                      | 'decade'
                      | 'century'
                      | 'language'
                      | 'rights'
                      | 'usage'
                      | 'copyright'
                      | 'subject'
                      | 'format'
                      | 'dc_type'
                    )[]
                  | undefined
                facets_page?: number | undefined
                facets_per_page?: number | undefined
                exclude_filters_from_facets?: boolean | undefined
              }
            } & { header: { 'Authentication-Token'?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { format: 'json' | 'xml' } } & {
              query: {
                text?: string | undefined
                'and[category][]'?:
                  | 'Newspapers'
                  | 'Images'
                  | 'Books'
                  | 'Articles'
                  | 'Journals'
                  | 'Archives'
                  | 'Audio'
                  | 'Other'
                  | 'Manuscripts'
                  | 'Reference sources'
                  | 'Research papers'
                  | 'Videos'
                  | 'Music Score'
                  | 'Groups'
                  | 'Data'
                  | 'Websites'
                  | 'Sets'
                  | undefined
                'and[content_partner][]'?: string | undefined
                'and[primary_collection][]'?: string | undefined
                'and[collection][]'?: string | undefined
                'and[usage][]'?:
                  | 'Share'
                  | 'Modify'
                  | 'Use commercially'
                  | 'All rights reserved'
                  | 'Unknown'
                  | undefined
                'and[subject][]'?: string | undefined
                'and[dc_type][]'?: string | undefined
                'and[format][]'?: string | undefined
                'and[placename][]'?: string | undefined
                'and[creator][]'?: string | undefined
                'and[title][]'?: string | undefined
                'and[date]'?: string | undefined
                'and[year]'?: string | undefined
                'and[decade]'?: string | undefined
                'and[century]'?: string | undefined
                'without[{filter_field}]'?: string | undefined
                'and[or][{filter_field}][]'?: string | undefined
                'and[is_commercial_use]'?: boolean | undefined
                'and[has_large_thumbnail_url]'?: 'Y' | undefined
                'and[has_lat_lng]'?: true | false | undefined
                geo_bbox?: string | undefined
                fields?: string | undefined
                sort?: 'syndication_date' | 'date' | undefined
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                facets?:
                  | (
                      | 'category'
                      | 'content_partner'
                      | 'display_collection'
                      | 'collection'
                      | 'creator'
                      | 'placename'
                      | 'date'
                      | 'year'
                      | 'decade'
                      | 'century'
                      | 'language'
                      | 'rights'
                      | 'usage'
                      | 'copyright'
                      | 'subject'
                      | 'format'
                      | 'dc_type'
                    )[]
                  | undefined
                facets_page?: number | undefined
                facets_per_page?: number | undefined
                exclude_filters_from_facets?: boolean | undefined
              }
            } & { header: { 'Authentication-Token'?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/records/:record_id.{format}': {
      $get:
        | {
            input: { param: { record_id: number; format: 'json' | 'xml' } } & {
              query: { fields?: string | undefined }
            } & { header: { 'Authentication-Token'?: string | undefined } }
            output: Record
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { record_id: number; format: 'json' | 'xml' } } & {
              query: { fields?: string | undefined }
            } & { header: { 'Authentication-Token'?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { record_id: number; format: 'json' | 'xml' } } & {
              query: { fields?: string | undefined }
            } & { header: { 'Authentication-Token'?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { record_id: number; format: 'json' | 'xml' } } & {
              query: { fields?: string | undefined }
            } & { header: { 'Authentication-Token'?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { record_id: number; format: 'json' | 'xml' } } & {
              query: { fields?: string | undefined }
            } & { header: { 'Authentication-Token'?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/records/:record_id/more_like_this.{format}': {
      $get:
        | {
            input: { param: { record_id: number; format: 'json' | 'xml' } } & {
              query: {
                fields?: string | undefined
                mlt_fields?: string | undefined
                filtering?: string | undefined
              }
            } & { header: { 'Authentication-Token'?: string | undefined } }
            output: {
              page?: number | undefined
              per_page?: number | undefined
              records?: Record[] | undefined
              request_url?: string | undefined
              result_count?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { record_id: number; format: 'json' | 'xml' } } & {
              query: {
                fields?: string | undefined
                mlt_fields?: string | undefined
                filtering?: string | undefined
              }
            } & { header: { 'Authentication-Token'?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { record_id: number; format: 'json' | 'xml' } } & {
              query: {
                fields?: string | undefined
                mlt_fields?: string | undefined
                filtering?: string | undefined
              }
            } & { header: { 'Authentication-Token'?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { record_id: number; format: 'json' | 'xml' } } & {
              query: {
                fields?: string | undefined
                mlt_fields?: string | undefined
                filtering?: string | undefined
              }
            } & { header: { 'Authentication-Token'?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { record_id: number; format: 'json' | 'xml' } } & {
              query: {
                fields?: string | undefined
                mlt_fields?: string | undefined
                filtering?: string | undefined
              }
            } & { header: { 'Authentication-Token'?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 404
          }
    }
  },
  '/'
>
export default routes
