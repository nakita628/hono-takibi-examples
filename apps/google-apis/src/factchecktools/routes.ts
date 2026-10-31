import { createRoute, z } from '@hono/zod-openapi'

const GoogleFactcheckingFactchecktoolsV1alpha1PublisherSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of this publisher. For instance, "Awesome Fact Checks".' }),
    site: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Host-level site name, without the protocol or "www" prefix. For instance, "awesomefactchecks.com". This value of this field is based purely on the claim review URL.',
      }),
  })
  .openapi({ description: 'Information about the publisher.', required: [] })
  .openapi('GoogleFactcheckingFactchecktoolsV1alpha1Publisher')

const GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewSchema = z
  .object({
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The language this review was written in. For instance, "en" or "de".',
      }),
    publisher: GoogleFactcheckingFactchecktoolsV1alpha1PublisherSchema.exactOptional().openapi({
      description: 'The publisher of this claim review.',
    }),
    reviewDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date the claim was reviewed.' }),
    textualRating: z
      .string()
      .exactOptional()
      .openapi({ description: 'Textual rating. For instance, "Mostly false".' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title of this claim review, if it can be determined.' }),
    url: z.string().exactOptional().openapi({ description: 'The URL of this claim review.' }),
  })
  .openapi({ description: 'Information about a claim review.', required: [] })
  .openapi('GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview')

const GoogleFactcheckingFactchecktoolsV1alpha1ClaimSchema = z
  .object({
    claimDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date that the claim was made.' }),
    claimReview: z
      .array(GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewSchema)
      .exactOptional()
      .openapi({
        description: 'One or more reviews of this claim (namely, a fact-checking article).',
      }),
    claimant: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A person or organization stating the claim. For instance, "John Doe".',
      }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The claim text. For instance, "Crime has doubled in the last 2 years."',
      }),
  })
  .openapi({ description: 'Information about the claim.', required: [] })
  .openapi('GoogleFactcheckingFactchecktoolsV1alpha1Claim')

const GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthorSchema = z
  .object({
    imageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Corresponds to `ClaimReview.itemReviewed.author.image`.' }),
    jobTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'Corresponds to `ClaimReview.itemReviewed.author.jobTitle`.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A person or organization stating the claim. For instance, "John Doe". Corresponds to `ClaimReview.itemReviewed.author.name`.',
      }),
    sameAs: z
      .string()
      .exactOptional()
      .openapi({ description: 'Corresponds to `ClaimReview.itemReviewed.author.sameAs`.' }),
  })
  .openapi({ description: 'Information about the claim author.', required: [] })
  .openapi('GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor')

const GoogleFactcheckingFactchecktoolsV1alpha1ClaimRatingSchema = z
  .object({
    bestRating: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'For numeric ratings, the best value possible in the scale from worst to best. Corresponds to `ClaimReview.reviewRating.bestRating`.',
      }),
    imageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Corresponds to `ClaimReview.reviewRating.image`.' }),
    ratingExplanation: z
      .string()
      .exactOptional()
      .openapi({ description: 'Corresponds to `ClaimReview.reviewRating.ratingExplanation`.' }),
    ratingValue: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'A numeric rating of this claim, in the range worstRating — bestRating inclusive. Corresponds to `ClaimReview.reviewRating.ratingValue`.',
      }),
    textualRating: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The truthfulness rating as a human-readible short word or phrase. Corresponds to `ClaimReview.reviewRating.alternateName`.',
      }),
    worstRating: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'For numeric ratings, the worst value possible in the scale from worst to best. Corresponds to `ClaimReview.reviewRating.worstRating`.',
      }),
  })
  .openapi({ description: 'Information about the claim rating.', required: [] })
  .openapi('GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating')

const GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthorSchema = z
  .object({
    imageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Corresponds to `ClaimReview.author.image`.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the organization that is publishing the fact check. Corresponds to `ClaimReview.author.name`.',
      }),
  })
  .openapi({ description: 'Information about the claim review author.', required: [] })
  .openapi('GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor')

const GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupSchema = z
  .object({
    claimAppearances: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of links to works in which this claim appears, aside from the one specified in `claim_first_appearance`. Corresponds to `ClaimReview.itemReviewed[@type=Claim].appearance.url`.',
      }),
    claimAuthor: GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthorSchema.exactOptional().openapi({
      description: 'Info about the author of this claim.',
    }),
    claimDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date when the claim was made or entered public discourse. Corresponds to `ClaimReview.itemReviewed.datePublished`.',
      }),
    claimFirstAppearance: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A link to a work in which this claim first appears. Corresponds to `ClaimReview.itemReviewed[@type=Claim].firstAppearance.url`.',
      }),
    claimLocation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The location where this claim was made. Corresponds to `ClaimReview.itemReviewed.name`.',
      }),
    claimReviewed: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A short summary of the claim being evaluated. Corresponds to `ClaimReview.claimReviewed`.',
      }),
    rating: GoogleFactcheckingFactchecktoolsV1alpha1ClaimRatingSchema.exactOptional().openapi({
      description: 'Info about the rating of this claim review.',
    }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field is optional, and will default to the page URL. We provide this field to allow you the override the default value, but the only permitted override is the page URL plus an optional anchor link ("page jump"). Corresponds to `ClaimReview.url`',
      }),
  })
  .openapi({
    description:
      'Fields for an individual `ClaimReview` element. Except for sub-messages that group fields together, each of these fields correspond those in https://schema.org/ClaimReview. We list the precise mapping for each field.',
    required: [],
  })
  .openapi('GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup')

const GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPageSchema = z
  .object({
    claimReviewAuthor:
      GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthorSchema.exactOptional().openapi({
        description:
          'Info about the author of this claim review. Similar to the above, semantically these are page-level fields, and each `ClaimReview` on this page will contain the same values.',
      }),
    claimReviewMarkups: z
      .array(GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of individual claim reviews for this page. Each item in the list corresponds to one `ClaimReview` element.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of this `ClaimReview` markup page resource, in the form of `pages/{page_id}`. Except for update requests, this field is output-only and should not be set by the user.',
      }),
    pageUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL of the page associated with this `ClaimReview` markup. While every individual `ClaimReview` has its own URL field, semantically this is a page-level field, and each `ClaimReview` on this page will use this value unless individually overridden. Corresponds to `ClaimReview.url`',
      }),
    publishDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date when the fact check was published. Similar to the URL, semantically this is a page-level field, and each `ClaimReview` on this page will contain the same value. Corresponds to `ClaimReview.datePublished`',
      }),
    versionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version ID for this markup. Except for update requests, this field is output-only and should not be set by the user.',
      }),
  })
  .openapi({
    description: 'Holds one or more instances of `ClaimReview` markup for a webpage.',
    required: [],
  })
  .openapi('GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage')

const GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponseSchema = z
  .object({
    claims: z
      .array(GoogleFactcheckingFactchecktoolsV1alpha1ClaimSchema)
      .exactOptional()
      .openapi({ description: 'The list of claims and all of their associated information.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The next pagination token in the Search response. It should be used as the `page_token` for the following request. An empty value means no more results.',
      }),
  })
  .openapi({ description: 'Response from searching fact-checked claims.', required: [] })
  .openapi('GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse')

const GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponseSchema = z
  .object({
    claimReviewMarkupPages: z
      .array(GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPageSchema)
      .exactOptional()
      .openapi({ description: 'The result list of pages of `ClaimReview` markup.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The next pagination token in the Search response. It should be used as the `page_token` for the following request. An empty value means no more results.',
      }),
  })
  .openapi({ description: 'Response from listing `ClaimReview` markup.', required: [] })
  .openapi('GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse')

const GoogleProtobufEmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('GoogleProtobufEmpty')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/userinfo.email':
          'See your primary Google Account email address',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/userinfo.email':
          'See your primary Google Account email address',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1alpha1ClaimsSearchRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/claims:search',
  tags: ['claims'],
  description: 'Search through fact-checked claims.',
  operationId: 'factchecktools.claims.search',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      languageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The BCP-47 language code, such as "en-US" or "sr-Latn". Can be used to restrict results by language, though we do not currently consider the region.',
            in: 'query',
            name: 'languageCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxAgeDays: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum age of the returned search results, in days. Age is determined by either claim date or review date, whichever is newer.',
            in: 'query',
            name: 'maxAgeDays',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'An integer that specifies the current offset (that is, starting result location) in search results. This field is only considered if `page_token` is unset. For example, 0 means to return results starting from the first matching result, and 10 means to return from the 11th result.',
            in: 'query',
            name: 'offset',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The pagination size. We will return up to that many results. Defaults to 10 if not set.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The pagination token. You may provide the `next_page_token` returned from a previous List request, if any, in order to get the next page. All other fields must have the same values as in the previous request.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Textual query string. Required unless `review_publisher_site_filter` is specified.',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      reviewPublisherSiteFilter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The review publisher site to filter results by, e.g. nytimes.com.',
            in: 'query',
            name: 'reviewPublisherSiteFilter',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponseSchema,
        },
      },
    },
  },
})

export const getV1alpha1PagesRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/pages',
  tags: ['pages'],
  description: 'List the `ClaimReview` markup pages for a specific URL or for an organization.',
  operationId: 'factchecktools.pages.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'An integer that specifies the current offset (that is, starting result location) in search results. This field is only considered if `page_token` is unset, and if the request is not for a specific URL. For example, 0 means to return results starting from the first matching result, and 10 means to return from the 11th result.',
            in: 'query',
            name: 'offset',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      organization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The organization for which we want to fetch markups for. For instance, "site.com". Cannot be specified along with an URL.',
            in: 'query',
            name: 'organization',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The pagination size. We will return up to that many results. Defaults to 10 if not set. Has no effect if a URL is requested.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The pagination token. You may provide the `next_page_token` returned from a previous List request, if any, in order to get the next page. All other fields must have the same values as in the previous request.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The URL from which to get `ClaimReview` markup. There will be at most one result. If markup is associated with a more canonical version of the URL provided, we will return that URL instead. Cannot be specified along with an organization.',
            in: 'query',
            name: 'url',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const postV1alpha1PagesRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/pages',
  tags: ['pages'],
  description: 'Create `ClaimReview` markup on a page.',
  operationId: 'factchecktools.pages.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPageSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPageSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const getV1alpha1NameRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{name}',
  tags: ['pages'],
  description: 'Get all `ClaimReview` markup on a page.',
  operationId: 'factchecktools.pages.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the resource to get, in the form of `pages/{page_id}`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPageSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const putV1alpha1NameRoute = createRoute({
  method: 'put',
  path: '/v1alpha1/{name}',
  tags: ['pages'],
  description:
    'Update for all `ClaimReview` markup on a page Note that this is a full update. To retain the existing `ClaimReview` markup on a page, first perform a Get operation, then modify the returned markup, and finally call Update with the entire `ClaimReview` markup as the body.',
  operationId: 'factchecktools.pages.update',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of this `ClaimReview` markup page resource, in the form of `pages/{page_id}`. Except for update requests, this field is output-only and should not be set by the user.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPageSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPageSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const deleteV1alpha1NameRoute = createRoute({
  method: 'delete',
  path: '/v1alpha1/{name}',
  tags: ['pages'],
  description: 'Delete all `ClaimReview` markup on a page.',
  operationId: 'factchecktools.pages.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the resource to delete, in the form of `pages/{page_id}`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})
