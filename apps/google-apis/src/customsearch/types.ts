type Result = {
  cacheId?: string | undefined
  displayLink?: string | undefined
  fileFormat?: string | undefined
  formattedUrl?: string | undefined
  htmlFormattedUrl?: string | undefined
  htmlSnippet?: string | undefined
  htmlTitle?: string | undefined
  image?:
    | {
        byteSize?: number | undefined
        contextLink?: string | undefined
        height?: number | undefined
        thumbnailHeight?: number | undefined
        thumbnailLink?: string | undefined
        thumbnailWidth?: number | undefined
        width?: number | undefined
      }
    | undefined
  kind?: string | undefined
  labels?:
    | {
        displayName?: string | undefined
        label_with_op?: string | undefined
        name?: string | undefined
      }[]
    | undefined
  link?: string | undefined
  mime?: string | undefined
  pagemap?: { [x: string]: { [x: string]: unknown } } | undefined
  snippet?: string | undefined
  title?: string | undefined
}
type Promotion = {
  bodyLines?:
    | {
        htmlTitle?: string | undefined
        link?: string | undefined
        title?: string | undefined
        url?: string | undefined
      }[]
    | undefined
  displayLink?: string | undefined
  htmlTitle?: string | undefined
  image?:
    | { height?: number | undefined; source?: string | undefined; width?: number | undefined }
    | undefined
  link?: string | undefined
  title?: string | undefined
}
type Search = {
  context?: { [x: string]: { [x: string]: unknown } } | undefined
  items?: Result[] | undefined
  kind?: string | undefined
  promotions?: Promotion[] | undefined
  queries?:
    | {
        nextPage?:
          | {
              count?: number | undefined
              cr?: string | undefined
              cx?: string | undefined
              dateRestrict?: string | undefined
              disableCnTwTranslation?: string | undefined
              exactTerms?: string | undefined
              excludeTerms?: string | undefined
              fileType?: string | undefined
              filter?: string | undefined
              gl?: string | undefined
              googleHost?: string | undefined
              highRange?: string | undefined
              hl?: string | undefined
              hq?: string | undefined
              imgColorType?: string | undefined
              imgDominantColor?: string | undefined
              imgSize?: string | undefined
              imgType?: string | undefined
              inputEncoding?: string | undefined
              language?: string | undefined
              linkSite?: string | undefined
              lowRange?: string | undefined
              orTerms?: string | undefined
              outputEncoding?: string | undefined
              relatedSite?: string | undefined
              rights?: string | undefined
              safe?: string | undefined
              searchTerms?: string | undefined
              searchType?: string | undefined
              siteSearch?: string | undefined
              siteSearchFilter?: string | undefined
              sort?: string | undefined
              startIndex?: number | undefined
              startPage?: number | undefined
              title?: string | undefined
              totalResults?: string | undefined
            }[]
          | undefined
        previousPage?:
          | {
              count?: number | undefined
              cr?: string | undefined
              cx?: string | undefined
              dateRestrict?: string | undefined
              disableCnTwTranslation?: string | undefined
              exactTerms?: string | undefined
              excludeTerms?: string | undefined
              fileType?: string | undefined
              filter?: string | undefined
              gl?: string | undefined
              googleHost?: string | undefined
              highRange?: string | undefined
              hl?: string | undefined
              hq?: string | undefined
              imgColorType?: string | undefined
              imgDominantColor?: string | undefined
              imgSize?: string | undefined
              imgType?: string | undefined
              inputEncoding?: string | undefined
              language?: string | undefined
              linkSite?: string | undefined
              lowRange?: string | undefined
              orTerms?: string | undefined
              outputEncoding?: string | undefined
              relatedSite?: string | undefined
              rights?: string | undefined
              safe?: string | undefined
              searchTerms?: string | undefined
              searchType?: string | undefined
              siteSearch?: string | undefined
              siteSearchFilter?: string | undefined
              sort?: string | undefined
              startIndex?: number | undefined
              startPage?: number | undefined
              title?: string | undefined
              totalResults?: string | undefined
            }[]
          | undefined
        request?:
          | {
              count?: number | undefined
              cr?: string | undefined
              cx?: string | undefined
              dateRestrict?: string | undefined
              disableCnTwTranslation?: string | undefined
              exactTerms?: string | undefined
              excludeTerms?: string | undefined
              fileType?: string | undefined
              filter?: string | undefined
              gl?: string | undefined
              googleHost?: string | undefined
              highRange?: string | undefined
              hl?: string | undefined
              hq?: string | undefined
              imgColorType?: string | undefined
              imgDominantColor?: string | undefined
              imgSize?: string | undefined
              imgType?: string | undefined
              inputEncoding?: string | undefined
              language?: string | undefined
              linkSite?: string | undefined
              lowRange?: string | undefined
              orTerms?: string | undefined
              outputEncoding?: string | undefined
              relatedSite?: string | undefined
              rights?: string | undefined
              safe?: string | undefined
              searchTerms?: string | undefined
              searchType?: string | undefined
              siteSearch?: string | undefined
              siteSearchFilter?: string | undefined
              sort?: string | undefined
              startIndex?: number | undefined
              startPage?: number | undefined
              title?: string | undefined
              totalResults?: string | undefined
            }[]
          | undefined
      }
    | undefined
  searchInformation?:
    | {
        formattedSearchTime?: string | undefined
        formattedTotalResults?: string | undefined
        searchTime?: number | undefined
        totalResults?: string | undefined
      }
    | undefined
  spelling?:
    | { correctedQuery?: string | undefined; htmlCorrectedQuery?: string | undefined }
    | undefined
  url?: { template?: string | undefined; type?: string | undefined } | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/customsearch/v1': {
      $get: {
        input: {
          query: {
            c2coff?: string | undefined
            cr?: string | undefined
            cx?: string | undefined
            dateRestrict?: string | undefined
            exactTerms?: string | undefined
            excludeTerms?: string | undefined
            fileType?: string | undefined
            filter?: string | undefined
            gl?: string | undefined
            googlehost?: string | undefined
            highRange?: string | undefined
            hl?: string | undefined
            hq?: string | undefined
            imgColorType?: 'imgColorTypeUndefined' | 'mono' | 'gray' | 'color' | 'trans' | undefined
            imgDominantColor?:
              | 'imgDominantColorUndefined'
              | 'black'
              | 'blue'
              | 'brown'
              | 'gray'
              | 'green'
              | 'orange'
              | 'pink'
              | 'purple'
              | 'red'
              | 'teal'
              | 'white'
              | 'yellow'
              | undefined
            imgSize?:
              | 'imgSizeUndefined'
              | 'HUGE'
              | 'ICON'
              | 'LARGE'
              | 'MEDIUM'
              | 'SMALL'
              | 'XLARGE'
              | 'XXLARGE'
              | undefined
            imgType?:
              | 'imgTypeUndefined'
              | 'clipart'
              | 'face'
              | 'lineart'
              | 'stock'
              | 'photo'
              | 'animated'
              | undefined
            linkSite?: string | undefined
            lowRange?: string | undefined
            lr?: string | undefined
            num?: number | undefined
            orTerms?: string | undefined
            q?: string | undefined
            relatedSite?: string | undefined
            rights?: string | undefined
            safe?: 'safeUndefined' | 'active' | 'high' | 'medium' | 'off' | undefined
            searchType?: 'searchTypeUndefined' | 'image' | undefined
            siteSearch?: string | undefined
            siteSearchFilter?: 'siteSearchFilterUndefined' | 'e' | 'i' | undefined
            sort?: string | undefined
            start?: number | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Search
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/customsearch/v1/siterestrict': {
      $get: {
        input: {
          query: {
            c2coff?: string | undefined
            cr?: string | undefined
            cx?: string | undefined
            dateRestrict?: string | undefined
            exactTerms?: string | undefined
            excludeTerms?: string | undefined
            fileType?: string | undefined
            filter?: string | undefined
            gl?: string | undefined
            googlehost?: string | undefined
            highRange?: string | undefined
            hl?: string | undefined
            hq?: string | undefined
            imgColorType?: 'imgColorTypeUndefined' | 'mono' | 'gray' | 'color' | 'trans' | undefined
            imgDominantColor?:
              | 'imgDominantColorUndefined'
              | 'black'
              | 'blue'
              | 'brown'
              | 'gray'
              | 'green'
              | 'orange'
              | 'pink'
              | 'purple'
              | 'red'
              | 'teal'
              | 'white'
              | 'yellow'
              | undefined
            imgSize?:
              | 'imgSizeUndefined'
              | 'HUGE'
              | 'ICON'
              | 'LARGE'
              | 'MEDIUM'
              | 'SMALL'
              | 'XLARGE'
              | 'XXLARGE'
              | undefined
            imgType?:
              | 'imgTypeUndefined'
              | 'clipart'
              | 'face'
              | 'lineart'
              | 'stock'
              | 'photo'
              | 'animated'
              | undefined
            linkSite?: string | undefined
            lowRange?: string | undefined
            lr?: string | undefined
            num?: number | undefined
            orTerms?: string | undefined
            q?: string | undefined
            relatedSite?: string | undefined
            rights?: string | undefined
            safe?: 'safeUndefined' | 'active' | 'high' | 'medium' | 'off' | undefined
            searchType?: 'searchTypeUndefined' | 'image' | undefined
            siteSearch?: string | undefined
            siteSearchFilter?: 'siteSearchFilterUndefined' | 'e' | 'i' | undefined
            sort?: string | undefined
            start?: number | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Search
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
