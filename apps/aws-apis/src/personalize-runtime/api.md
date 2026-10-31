<h1 id="amazon-personalize-runtime">Amazon Personalize Runtime v2018-05-22</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p/>

Base URLs:

* <a href="http://personalize-runtime.us-east-1.amazonaws.com">http://personalize-runtime.us-east-1.amazonaws.com</a> - The Amazon Personalize Runtime multi-region endpoint

* <a href="https://personalize-runtime.us-east-1.amazonaws.com">https://personalize-runtime.us-east-1.amazonaws.com</a> - The Amazon Personalize Runtime multi-region endpoint

* <a href="http://personalize-runtime.cn-north-1.amazonaws.com.cn">http://personalize-runtime.cn-north-1.amazonaws.com.cn</a> - The Amazon Personalize Runtime endpoint for China (Beijing) and China (Ningxia)

* <a href="https://personalize-runtime.cn-north-1.amazonaws.com.cn">https://personalize-runtime.cn-north-1.amazonaws.com.cn</a> - The Amazon Personalize Runtime endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/personalize-runtime/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-personalize-runtime-default">Default</h1>

## GetPersonalizedRanking

<a id="opIdGetPersonalizedRanking"></a>

> Code samples

```bash
curl https://personalize-runtime.us-east-1.amazonaws.com/personalize-ranking \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "campaignArn": "string",
    "inputList": [
      "string"
    ],
    "userId": "string",
    "context": {
      "property1": "password",
      "property2": "password"
    },
    "filterArn": "string",
    "filterValues": {
      "property1": "password",
      "property2": "password"
    }
  }'
```

`POST /personalize-ranking`

<p>Re-ranks a list of recommended items for the given user. The first item in the list is deemed the most likely item to be of interest to the user.</p> <note> <p>The solution backing the campaign must have been created using a recipe of type PERSONALIZED_RANKING.</p> </note>

> Body parameter

```json
{
  "campaignArn": "string",
  "inputList": [
    "string"
  ],
  "userId": "string",
  "context": {
    "property1": "password",
    "property2": "password"
  },
  "filterArn": "string",
  "filterValues": {
    "property1": "password",
    "property2": "password"
  }
}
```

<h3 id="getpersonalizedranking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» campaignArn|body|string|true|The Amazon Resource Name (ARN) of the campaign to use for generating the personalized ranking.|
|» inputList|body|[[ItemID](#schemaitemid)]|true|A list of items (by <code>itemId</code>) to rank. If an item was not included in the training dataset, the item is appended to the end of the reranked list. The maximum is 500.|
|» userId|body|string|true|The user for which you want the campaign to provide a personalized ranking.|
|» context|body|object|false|The contextual metadata to use when getting recommendations. Contextual metadata includes any interaction information that might be relevant when getting a user's recommendations, such as the user's current location or device type.|
|» » **additionalProperties**|body|[AttributeValue](#schemaattributevalue)|false|none|
|» filterArn|body|string|false|The Amazon Resource Name (ARN) of a filter you created to include items or exclude items from recommendations for a given user. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.|
|» filterValues|body|object|false|<p>The values to use when filtering recommendations. For each placeholder parameter in your filter expression, provide the parameter name (in matching case) as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma. </p> <p>For filter expressions that use an <code>INCLUDE</code> element to include items, you must provide values for all parameters that are defined in the expression. For filters with expressions that use an <code>EXCLUDE</code> element to exclude items, you can omit the <code>filter-values</code>.In this case, Amazon Personalize doesn't use that portion of the expression to filter recommendations.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.</p>|
|» » **additionalProperties**|body|[FilterAttributeValue](#schemafilterattributevalue)|false|none|

> Example responses

> 200 Response

```json
{
  "personalizedRanking": {},
  "recommendationId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="getpersonalizedranking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPersonalizedRankingResponse](#schemagetpersonalizedrankingresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRecommendations

<a id="opIdGetRecommendations"></a>

> Code samples

```bash
curl https://personalize-runtime.us-east-1.amazonaws.com/recommendations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "campaignArn": "string",
    "itemId": "string",
    "userId": "string",
    "numResults": 0,
    "context": {
      "property1": "password",
      "property2": "password"
    },
    "filterArn": "string",
    "filterValues": {
      "property1": "password",
      "property2": "password"
    },
    "recommenderArn": "string",
    "promotions": [
      {
        "name": {},
        "percentPromotedItems": {},
        "filterArn": {},
        "filterValues": {
          "property1": "password",
          "property2": "password"
        }
      }
    ]
  }'
```

`POST /recommendations`

<p>Returns a list of recommended items. For campaigns, the campaign's Amazon Resource Name (ARN) is required and the required user and item input depends on the recipe type used to create the solution backing the campaign as follows:</p> <ul> <li> <p>USER_PERSONALIZATION - <code>userId</code> required, <code>itemId</code> not used</p> </li> <li> <p>RELATED_ITEMS - <code>itemId</code> required, <code>userId</code> not used</p> </li> </ul> <note> <p>Campaigns that are backed by a solution created using a recipe of type PERSONALIZED_RANKING use the API.</p> </note> <p> For recommenders, the recommender's ARN is required and the required item and user input depends on the use case (domain-based recipe) backing the recommender. For information on use case requirements see <a href="https://docs.aws.amazon.com/personalize/latest/dg/domain-use-cases.html">Choosing recommender use cases</a>. </p>

> Body parameter

```json
{
  "campaignArn": "string",
  "itemId": "string",
  "userId": "string",
  "numResults": 0,
  "context": {
    "property1": "password",
    "property2": "password"
  },
  "filterArn": "string",
  "filterValues": {
    "property1": "password",
    "property2": "password"
  },
  "recommenderArn": "string",
  "promotions": [
    {
      "name": {},
      "percentPromotedItems": {},
      "filterArn": {},
      "filterValues": {
        "property1": "password",
        "property2": "password"
      }
    }
  ]
}
```

<h3 id="getrecommendations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» campaignArn|body|string|false|The Amazon Resource Name (ARN) of the campaign to use for getting recommendations.|
|» itemId|body|string|false|<p>The item ID to provide recommendations for.</p> <p>Required for <code>RELATED_ITEMS</code> recipe type.</p>|
|» userId|body|string|false|<p>The user ID to provide recommendations for.</p> <p>Required for <code>USER_PERSONALIZATION</code> recipe type.</p>|
|» numResults|body|integer|false|The number of results to return. The default is 25. The maximum is 500.|
|» context|body|object|false|The contextual metadata to use when getting recommendations. Contextual metadata includes any interaction information that might be relevant when getting a user's recommendations, such as the user's current location or device type.|
|» » **additionalProperties**|body|[AttributeValue](#schemaattributevalue)|false|none|
|» filterArn|body|string|false|<p>The ARN of the filter to apply to the returned recommendations. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.</p> <p>When using this parameter, be sure the filter resource is <code>ACTIVE</code>.</p>|
|» filterValues|body|object|false|<p>The values to use when filtering recommendations. For each placeholder parameter in your filter expression, provide the parameter name (in matching case) as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma. </p> <p>For filter expressions that use an <code>INCLUDE</code> element to include items, you must provide values for all parameters that are defined in the expression. For filters with expressions that use an <code>EXCLUDE</code> element to exclude items, you can omit the <code>filter-values</code>.In this case, Amazon Personalize doesn't use that portion of the expression to filter recommendations.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering recommendations and user segments</a>.</p>|
|» » **additionalProperties**|body|[FilterAttributeValue](#schemafilterattributevalue)|false|none|
|» recommenderArn|body|string|false|The Amazon Resource Name (ARN) of the recommender to use to get recommendations. Provide a recommender ARN if you created a Domain dataset group with a recommender for a domain use case.|
|» promotions|body|[[Promotion](#schemapromotion)]|false|The promotions to apply to the recommendation request. A promotion defines additional business rules that apply to a configurable subset of recommended items.|

> Example responses

> 200 Response

```json
{
  "itemList": {},
  "recommendationId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="getrecommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRecommendationsResponse](#schemagetrecommendationsresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_GetPersonalizedRankingResponse">GetPersonalizedRankingResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpersonalizedrankingresponse"></a>
<a id="schema_GetPersonalizedRankingResponse"></a>
<a id="tocSgetpersonalizedrankingresponse"></a>
<a id="tocsgetpersonalizedrankingresponse"></a>

```json
{
  "personalizedRanking": {},
  "recommendationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalizedRanking|object|false|none|none|
|recommendationId|object|false|none|none|

<h2 id="tocS_ItemID">ItemID</h2>
<!-- backwards compatibility -->
<a id="schemaitemid"></a>
<a id="schema_ItemID"></a>
<a id="tocSitemid"></a>
<a id="tocsitemid"></a>

```json
"string"
```

<h2 id="tocS_AttributeValue">AttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaattributevalue"></a>
<a id="schema_AttributeValue"></a>
<a id="tocSattributevalue"></a>
<a id="tocsattributevalue"></a>

```json
"password"
```

<h2 id="tocS_FilterAttributeValue">FilterAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemafilterattributevalue"></a>
<a id="schema_FilterAttributeValue"></a>
<a id="tocSfilterattributevalue"></a>
<a id="tocsfilterattributevalue"></a>

```json
"password"
```

<h2 id="tocS_InvalidInputException">InvalidInputException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidinputexception"></a>
<a id="schema_InvalidInputException"></a>
<a id="tocSinvalidinputexception"></a>
<a id="tocsinvalidinputexception"></a>

```json
null
```

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_GetRecommendationsResponse">GetRecommendationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetrecommendationsresponse"></a>
<a id="schema_GetRecommendationsResponse"></a>
<a id="tocSgetrecommendationsresponse"></a>
<a id="tocsgetrecommendationsresponse"></a>

```json
{
  "itemList": {},
  "recommendationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|itemList|object|false|none|none|
|recommendationId|object|false|none|none|

<h2 id="tocS_Promotion">Promotion</h2>
<!-- backwards compatibility -->
<a id="schemapromotion"></a>
<a id="schema_Promotion"></a>
<a id="tocSpromotion"></a>
<a id="tocspromotion"></a>

```json
{
  "name": {},
  "percentPromotedItems": {},
  "filterArn": {},
  "filterValues": {
    "property1": "password",
    "property2": "password"
  }
}
```

Contains information on a promotion. A promotion defines additional business rules that apply to a configurable subset of recommended items.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|percentPromotedItems|object|false|none|none|
|filterArn|object|false|none|none|
|filterValues|object|false|none|none|

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_AttributeName">AttributeName</h2>
<!-- backwards compatibility -->
<a id="schemaattributename"></a>
<a id="schema_AttributeName"></a>
<a id="tocSattributename"></a>
<a id="tocsattributename"></a>

```json
"string"
```

<h2 id="tocS_Context">Context</h2>
<!-- backwards compatibility -->
<a id="schemacontext"></a>
<a id="schema_Context"></a>
<a id="tocScontext"></a>
<a id="tocscontext"></a>

```json
{
  "property1": "password",
  "property2": "password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[AttributeValue](#schemaattributevalue)|false|none|none|

<h2 id="tocS_FilterAttributeName">FilterAttributeName</h2>
<!-- backwards compatibility -->
<a id="schemafilterattributename"></a>
<a id="schema_FilterAttributeName"></a>
<a id="tocSfilterattributename"></a>
<a id="tocsfilterattributename"></a>

```json
"string"
```

<h2 id="tocS_FilterValues">FilterValues</h2>
<!-- backwards compatibility -->
<a id="schemafiltervalues"></a>
<a id="schema_FilterValues"></a>
<a id="tocSfiltervalues"></a>
<a id="tocsfiltervalues"></a>

```json
{
  "property1": "password",
  "property2": "password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[FilterAttributeValue](#schemafilterattributevalue)|false|none|none|

<h2 id="tocS_InputList">InputList</h2>
<!-- backwards compatibility -->
<a id="schemainputlist"></a>
<a id="schema_InputList"></a>
<a id="tocSinputlist"></a>
<a id="tocsinputlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_UserID">UserID</h2>
<!-- backwards compatibility -->
<a id="schemauserid"></a>
<a id="schema_UserID"></a>
<a id="tocSuserid"></a>
<a id="tocsuserid"></a>

```json
"string"
```

<h2 id="tocS_GetPersonalizedRankingRequest">GetPersonalizedRankingRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetpersonalizedrankingrequest"></a>
<a id="schema_GetPersonalizedRankingRequest"></a>
<a id="tocSgetpersonalizedrankingrequest"></a>
<a id="tocsgetpersonalizedrankingrequest"></a>

```json
{
  "campaignArn": {},
  "inputList": {},
  "userId": {},
  "context": {
    "property1": "password",
    "property2": "password"
  },
  "filterArn": {},
  "filterValues": {
    "property1": "password",
    "property2": "password"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaignArn|object|true|none|none|
|inputList|object|true|none|none|
|userId|object|true|none|none|
|context|object|false|none|none|
|filterArn|object|false|none|none|
|filterValues|object|false|none|none|

<h2 id="tocS_ItemList">ItemList</h2>
<!-- backwards compatibility -->
<a id="schemaitemlist"></a>
<a id="schema_ItemList"></a>
<a id="tocSitemlist"></a>
<a id="tocsitemlist"></a>

```json
[
  {
    "itemId": {},
    "score": {},
    "promotionName": {}
  }
]
```

<h2 id="tocS_RecommendationID">RecommendationID</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationid"></a>
<a id="schema_RecommendationID"></a>
<a id="tocSrecommendationid"></a>
<a id="tocsrecommendationid"></a>

```json
"string"
```

<h2 id="tocS_NumResults">NumResults</h2>
<!-- backwards compatibility -->
<a id="schemanumresults"></a>
<a id="schema_NumResults"></a>
<a id="tocSnumresults"></a>
<a id="tocsnumresults"></a>

```json
0
```

<h2 id="tocS_PromotionList">PromotionList</h2>
<!-- backwards compatibility -->
<a id="schemapromotionlist"></a>
<a id="schema_PromotionList"></a>
<a id="tocSpromotionlist"></a>
<a id="tocspromotionlist"></a>

```json
[
  {
    "name": {},
    "percentPromotedItems": {},
    "filterArn": {},
    "filterValues": {
      "property1": "password",
      "property2": "password"
    }
  }
]
```

<h2 id="tocS_GetRecommendationsRequest">GetRecommendationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrecommendationsrequest"></a>
<a id="schema_GetRecommendationsRequest"></a>
<a id="tocSgetrecommendationsrequest"></a>
<a id="tocsgetrecommendationsrequest"></a>

```json
{
  "campaignArn": {},
  "itemId": {},
  "userId": {},
  "numResults": {},
  "context": {
    "property1": "password",
    "property2": "password"
  },
  "filterArn": {},
  "filterValues": {
    "property1": "password",
    "property2": "password"
  },
  "recommenderArn": {},
  "promotions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaignArn|object|false|none|none|
|itemId|object|false|none|none|
|userId|object|false|none|none|
|numResults|object|false|none|none|
|context|object|false|none|none|
|filterArn|object|false|none|none|
|filterValues|object|false|none|none|
|recommenderArn|object|false|none|none|
|promotions|object|false|none|none|

<h2 id="tocS_PredictedItem">PredictedItem</h2>
<!-- backwards compatibility -->
<a id="schemapredicteditem"></a>
<a id="schema_PredictedItem"></a>
<a id="tocSpredicteditem"></a>
<a id="tocspredicteditem"></a>

```json
{
  "itemId": {},
  "score": {},
  "promotionName": {}
}
```

<p>An object that identifies an item.</p> <p>The and APIs return a list of <code>PredictedItem</code>s.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|itemId|object|false|none|none|
|score|object|false|none|none|
|promotionName|object|false|none|none|

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
"string"
```

<h2 id="tocS_PercentPromotedItems">PercentPromotedItems</h2>
<!-- backwards compatibility -->
<a id="schemapercentpromoteditems"></a>
<a id="schema_PercentPromotedItems"></a>
<a id="tocSpercentpromoteditems"></a>
<a id="tocspercentpromoteditems"></a>

```json
1
```

<h2 id="tocS_Score">Score</h2>
<!-- backwards compatibility -->
<a id="schemascore"></a>
<a id="schema_Score"></a>
<a id="tocSscore"></a>
<a id="tocsscore"></a>

```json
0
```
