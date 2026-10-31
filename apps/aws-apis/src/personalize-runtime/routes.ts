import { createRoute, z } from '@hono/zod-openapi'

const ItemIDSchema = z.string().max(256).openapi('ItemID')

const ScoreSchema = z.float64().openapi('Score')

const NameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9][a-zA-Z0-9\-_]*/)
  .min(1)
  .max(63)
  .openapi('Name')

const PredictedItemSchema = z
  .object({
    itemId: ItemIDSchema.and(
      z.any().openapi({ description: 'The recommended item ID.' }),
    ).exactOptional(),
    score: ScoreSchema.and(
      z
        .any()
        .openapi({
          description:
            "A numeric representation of the model's certainty that the item will be the next user selection. For more information on scoring logic, see <a>how-scores-work</a>.",
        }),
    ).exactOptional(),
    promotionName: NameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the promotion that included the predicted item.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>An object that identifies an item.</p> <p>The and APIs return a list of <code>PredictedItem</code>s.</p>',
    required: [],
  })
  .openapi('PredictedItem')

const ItemListSchema = z.array(PredictedItemSchema).openapi('ItemList')

const RecommendationIDSchema = z.string().openapi('RecommendationID')

const GetPersonalizedRankingResponseSchema = z
  .object({
    personalizedRanking: ItemListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of items in order of most likely interest to the user. The maximum is 500.',
        }),
    ).exactOptional(),
    recommendationId: RecommendationIDSchema.and(
      z.any().openapi({ description: 'The ID of the recommendation.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetPersonalizedRankingResponse')

const AttributeValueSchema = z.string().max(1000).openapi('AttributeValue')

const FilterAttributeValueSchema = z.string().max(1000).openapi('FilterAttributeValue')

const InvalidInputExceptionSchema = z.any().openapi('InvalidInputException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const GetRecommendationsResponseSchema = z
  .object({
    itemList: ItemListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of recommendations sorted in descending order by prediction score. There can be a maximum of 500 items in the list.',
        }),
    ).exactOptional(),
    recommendationId: RecommendationIDSchema.and(
      z.any().openapi({ description: 'The ID of the recommendation.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRecommendationsResponse')

const PercentPromotedItemsSchema = z.int().min(1).max(100).openapi('PercentPromotedItems')

const ArnSchema = z
  .string()
  .regex(/arn:([a-z\d-]+):personalize:.*:.*:.+/)
  .max(256)
  .openapi('Arn')

const FilterValuesSchema = z
  .record(z.string(), FilterAttributeValueSchema)
  .refine((val) => Object.keys(val).length <= 25)
  .openapi('FilterValues')

const PromotionSchema = z
  .object({
    name: NameSchema.and(
      z.any().openapi({ description: 'The name of the promotion.' }),
    ).exactOptional(),
    percentPromotedItems: PercentPromotedItemsSchema.and(
      z
        .any()
        .openapi({ description: 'The percentage of recommended items to apply the promotion to.' }),
    ).exactOptional(),
    filterArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the filter used by the promotion. This filter defines the criteria for promoted items. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/promoting-items.html#promotion-filters">Promotion filters</a>.',
        }),
    ).exactOptional(),
    filterValues: FilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The values to use when promoting items. For each placeholder parameter in your promotion\'s filter expression, provide the parameter name (in matching case) as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma. </p> <p>For filter expressions that use an <code>INCLUDE</code> element to include items, you must provide values for all parameters that are defined in the expression. For filters with expressions that use an <code>EXCLUDE</code> element to exclude items, you can omit the <code>filter-values</code>. In this case, Amazon Personalize doesn\'t use that portion of the expression to filter recommendations.</p> <p>For more information on creating filters, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering recommendations and user segments</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information on a promotion. A promotion defines additional business rules that apply to a configurable subset of recommended items.',
    required: [],
  })
  .openapi('Promotion')

const AttributeNameSchema = z
  .string()
  .regex(/[A-Za-z\d_]+/)
  .max(150)
  .openapi('AttributeName')

const ContextSchema = z
  .record(z.string(), AttributeValueSchema)
  .refine((val) => Object.keys(val).length <= 150)
  .openapi('Context')

const FilterAttributeNameSchema = z
  .string()
  .regex(/[A-Za-z0-9_]+/)
  .max(50)
  .openapi('FilterAttributeName')

const InputListSchema = z.array(ItemIDSchema).openapi('InputList')

const UserIDSchema = z.string().max(256).openapi('UserID')

const GetPersonalizedRankingRequestSchema = z
  .object({
    campaignArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the campaign to use for generating the personalized ranking.',
        }),
    ),
    inputList: InputListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of items (by <code>itemId</code>) to rank. If an item was not included in the training dataset, the item is appended to the end of the reranked list. The maximum is 500.',
        }),
    ),
    userId: UserIDSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user for which you want the campaign to provide a personalized ranking.',
        }),
    ),
    context: ContextSchema.and(
      z
        .any()
        .openapi({
          description:
            "The contextual metadata to use when getting recommendations. Contextual metadata includes any interaction information that might be relevant when getting a user's recommendations, such as the user's current location or device type.",
        }),
    ).exactOptional(),
    filterArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of a filter you created to include items or exclude items from recommendations for a given user. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.',
        }),
    ).exactOptional(),
    filterValues: FilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The values to use when filtering recommendations. For each placeholder parameter in your filter expression, provide the parameter name (in matching case) as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma. </p> <p>For filter expressions that use an <code>INCLUDE</code> element to include items, you must provide values for all parameters that are defined in the expression. For filters with expressions that use an <code>EXCLUDE</code> element to exclude items, you can omit the <code>filter-values</code>.In this case, Amazon Personalize doesn\'t use that portion of the expression to filter recommendations.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['campaignArn', 'inputList', 'userId'],
    title: 'GetPersonalizedRankingRequest',
  })
  .openapi('GetPersonalizedRankingRequest')

const NumResultsSchema = z.int().min(0).openapi('NumResults')

const PromotionListSchema = z.array(PromotionSchema).max(1).openapi('PromotionList')

const GetRecommendationsRequestSchema = z
  .object({
    campaignArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the campaign to use for getting recommendations.',
        }),
    ).exactOptional(),
    itemId: ItemIDSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The item ID to provide recommendations for.</p> <p>Required for <code>RELATED_ITEMS</code> recipe type.</p>',
        }),
    ).exactOptional(),
    userId: UserIDSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The user ID to provide recommendations for.</p> <p>Required for <code>USER_PERSONALIZATION</code> recipe type.</p>',
        }),
    ).exactOptional(),
    numResults: NumResultsSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of results to return. The default is 25. The maximum is 500.',
        }),
    ).exactOptional(),
    context: ContextSchema.and(
      z
        .any()
        .openapi({
          description:
            "The contextual metadata to use when getting recommendations. Contextual metadata includes any interaction information that might be relevant when getting a user's recommendations, such as the user's current location or device type.",
        }),
    ).exactOptional(),
    filterArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the filter to apply to the returned recommendations. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.</p> <p>When using this parameter, be sure the filter resource is <code>ACTIVE</code>.</p>',
        }),
    ).exactOptional(),
    filterValues: FilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The values to use when filtering recommendations. For each placeholder parameter in your filter expression, provide the parameter name (in matching case) as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma. </p> <p>For filter expressions that use an <code>INCLUDE</code> element to include items, you must provide values for all parameters that are defined in the expression. For filters with expressions that use an <code>EXCLUDE</code> element to exclude items, you can omit the <code>filter-values</code>.In this case, Amazon Personalize doesn\'t use that portion of the expression to filter recommendations.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering recommendations and user segments</a>.</p>',
        }),
    ).exactOptional(),
    recommenderArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the recommender to use to get recommendations. Provide a recommender ARN if you created a Domain dataset group with a recommender for a domain use case.',
        }),
    ).exactOptional(),
    promotions: PromotionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The promotions to apply to the recommendation request. A promotion defines additional business rules that apply to a configurable subset of recommended items.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetRecommendationsRequest', required: [] })
  .openapi('GetRecommendationsRequest')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const postPersonalizeRankingRoute = createRoute({
  method: 'post',
  path: '/personalize-ranking',
  description:
    '<p>Re-ranks a list of recommended items for the given user. The first item in the list is deemed the most likely item to be of interest to the user.</p> <note> <p>The solution backing the campaign must have been created using a recipe of type PERSONALIZED_RANKING.</p> </note>',
  operationId: 'GetPersonalizedRanking',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              campaignArn: z
                .string()
                .regex(/arn:([a-z\d-]+):personalize:.*:.*:.+/)
                .max(256)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the campaign to use for generating the personalized ranking.',
                }),
              inputList: z
                .array(ItemIDSchema)
                .openapi({
                  description:
                    'A list of items (by <code>itemId</code>) to rank. If an item was not included in the training dataset, the item is appended to the end of the reranked list. The maximum is 500.',
                }),
              userId: z
                .string()
                .max(256)
                .openapi({
                  description:
                    'The user for which you want the campaign to provide a personalized ranking.',
                }),
              context: z
                .record(z.string(), AttributeValueSchema)
                .refine((val) => Object.keys(val).length <= 150)
                .exactOptional()
                .openapi({
                  description:
                    "The contextual metadata to use when getting recommendations. Contextual metadata includes any interaction information that might be relevant when getting a user's recommendations, such as the user's current location or device type.",
                }),
              filterArn: z
                .string()
                .regex(/arn:([a-z\d-]+):personalize:.*:.*:.+/)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of a filter you created to include items or exclude items from recommendations for a given user. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.',
                }),
              filterValues: z
                .record(z.string(), FilterAttributeValueSchema)
                .refine((val) => Object.keys(val).length <= 25)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The values to use when filtering recommendations. For each placeholder parameter in your filter expression, provide the parameter name (in matching case) as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma. </p> <p>For filter expressions that use an <code>INCLUDE</code> element to include items, you must provide values for all parameters that are defined in the expression. For filters with expressions that use an <code>EXCLUDE</code> element to exclude items, you can omit the <code>filter-values</code>.In this case, Amazon Personalize doesn\'t use that portion of the expression to filter recommendations.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.</p>',
                }),
            })
            .openapi({ required: ['campaignArn', 'inputList', 'userId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPersonalizedRankingResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postRecommendationsRoute = createRoute({
  method: 'post',
  path: '/recommendations',
  description:
    '<p>Returns a list of recommended items. For campaigns, the campaign\'s Amazon Resource Name (ARN) is required and the required user and item input depends on the recipe type used to create the solution backing the campaign as follows:</p> <ul> <li> <p>USER_PERSONALIZATION - <code>userId</code> required, <code>itemId</code> not used</p> </li> <li> <p>RELATED_ITEMS - <code>itemId</code> required, <code>userId</code> not used</p> </li> </ul> <note> <p>Campaigns that are backed by a solution created using a recipe of type PERSONALIZED_RANKING use the API.</p> </note> <p> For recommenders, the recommender\'s ARN is required and the required item and user input depends on the use case (domain-based recipe) backing the recommender. For information on use case requirements see <a href="https://docs.aws.amazon.com/personalize/latest/dg/domain-use-cases.html">Choosing recommender use cases</a>. </p>',
  operationId: 'GetRecommendations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              campaignArn: z
                .string()
                .regex(/arn:([a-z\d-]+):personalize:.*:.*:.+/)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the campaign to use for getting recommendations.',
                }),
              itemId: z
                .string()
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The item ID to provide recommendations for.</p> <p>Required for <code>RELATED_ITEMS</code> recipe type.</p>',
                }),
              userId: z
                .string()
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The user ID to provide recommendations for.</p> <p>Required for <code>USER_PERSONALIZATION</code> recipe type.</p>',
                }),
              numResults: z
                .int()
                .min(0)
                .exactOptional()
                .openapi({
                  description:
                    'The number of results to return. The default is 25. The maximum is 500.',
                }),
              context: z
                .record(z.string(), AttributeValueSchema)
                .refine((val) => Object.keys(val).length <= 150)
                .exactOptional()
                .openapi({
                  description:
                    "The contextual metadata to use when getting recommendations. Contextual metadata includes any interaction information that might be relevant when getting a user's recommendations, such as the user's current location or device type.",
                }),
              filterArn: z
                .string()
                .regex(/arn:([a-z\d-]+):personalize:.*:.*:.+/)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The ARN of the filter to apply to the returned recommendations. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.</p> <p>When using this parameter, be sure the filter resource is <code>ACTIVE</code>.</p>',
                }),
              filterValues: z
                .record(z.string(), FilterAttributeValueSchema)
                .refine((val) => Object.keys(val).length <= 25)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The values to use when filtering recommendations. For each placeholder parameter in your filter expression, provide the parameter name (in matching case) as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma. </p> <p>For filter expressions that use an <code>INCLUDE</code> element to include items, you must provide values for all parameters that are defined in the expression. For filters with expressions that use an <code>EXCLUDE</code> element to exclude items, you can omit the <code>filter-values</code>.In this case, Amazon Personalize doesn\'t use that portion of the expression to filter recommendations.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering recommendations and user segments</a>.</p>',
                }),
              recommenderArn: z
                .string()
                .regex(/arn:([a-z\d-]+):personalize:.*:.*:.+/)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the recommender to use to get recommendations. Provide a recommender ARN if you created a Domain dataset group with a recommender for a domain use case.',
                }),
              promotions: z
                .array(PromotionSchema)
                .max(1)
                .exactOptional()
                .openapi({
                  description:
                    'The promotions to apply to the recommendation request. A promotion defines additional business rules that apply to a configurable subset of recommended items.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRecommendationsResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})
