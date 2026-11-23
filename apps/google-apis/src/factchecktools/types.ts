type GoogleFactcheckingFactchecktoolsV1alpha1Publisher = {
  name?: string | undefined
  site?: string | undefined
}
type GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview = {
  languageCode?: string | undefined
  publisher?: GoogleFactcheckingFactchecktoolsV1alpha1Publisher | undefined
  reviewDate?: string | undefined
  textualRating?: string | undefined
  title?: string | undefined
  url?: string | undefined
}
type GoogleFactcheckingFactchecktoolsV1alpha1Claim = {
  claimDate?: string | undefined
  claimReview?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview[] | undefined
  claimant?: string | undefined
  text?: string | undefined
}
type GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse = {
  claims?: GoogleFactcheckingFactchecktoolsV1alpha1Claim[] | undefined
  nextPageToken?: string | undefined
}
type GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor = {
  imageUrl?: string | undefined
  name?: string | undefined
}
type GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor = {
  imageUrl?: string | undefined
  jobTitle?: string | undefined
  name?: string | undefined
  sameAs?: string | undefined
}
type GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating = {
  bestRating?: number | undefined
  imageUrl?: string | undefined
  ratingExplanation?: string | undefined
  ratingValue?: number | undefined
  textualRating?: string | undefined
  worstRating?: number | undefined
}
type GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup = {
  claimAppearances?: string[] | undefined
  claimAuthor?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor | undefined
  claimDate?: string | undefined
  claimFirstAppearance?: string | undefined
  claimLocation?: string | undefined
  claimReviewed?: string | undefined
  rating?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating | undefined
  url?: string | undefined
}
type GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage = {
  claimReviewAuthor?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor | undefined
  claimReviewMarkups?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup[] | undefined
  name?: string | undefined
  pageUrl?: string | undefined
  publishDate?: string | undefined
  versionId?: string | undefined
}
type GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse = {
  claimReviewMarkupPages?:
    | GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage[]
    | undefined
  nextPageToken?: string | undefined
}
type GoogleProtobufEmpty = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1alpha1/claims:search': {
      $get: {
        input: {
          query: {
            languageCode?: string | undefined
            maxAgeDays?: number | undefined
            offset?: number | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            query?: string | undefined
            reviewPublisherSiteFilter?: string | undefined
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
        output: GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/pages': {
      $get: {
        input: {
          query: {
            offset?: number | undefined
            organization?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            url?: string | undefined
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
        output: GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
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
        } & { json: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage }
        output: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
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
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
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
        output: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { name: string } } & {
          query: {
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
        } & { json: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage }
        output: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
