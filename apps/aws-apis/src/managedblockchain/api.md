<h1 id="amazon-managed-blockchain">Amazon Managed Blockchain v2018-09-24</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p/> <p>Amazon Managed Blockchain is a fully managed service for creating and managing blockchain networks using open-source frameworks. Blockchain allows you to build applications where multiple parties can securely and transparently run transactions and share data without the need for a trusted, central authority.</p> <p>Managed Blockchain supports the Hyperledger Fabric and Ethereum open-source frameworks. Because of fundamental differences between the frameworks, some API actions or data types may only apply in the context of one framework and not the other. For example, actions related to Hyperledger Fabric network members such as <code>CreateMember</code> and <code>DeleteMember</code> don't apply to Ethereum.</p> <p>The description for each action indicates the framework or frameworks to which it applies. Data types and properties that apply only in the context of a particular framework are similarly indicated.</p>

Base URLs:

* <a href="http://managedblockchain.us-east-1.amazonaws.com">http://managedblockchain.us-east-1.amazonaws.com</a> - The ManagedBlockchain multi-region endpoint

* <a href="https://managedblockchain.us-east-1.amazonaws.com">https://managedblockchain.us-east-1.amazonaws.com</a> - The ManagedBlockchain multi-region endpoint

* <a href="http://managedblockchain.cn-north-1.amazonaws.com.cn">http://managedblockchain.cn-north-1.amazonaws.com.cn</a> - The ManagedBlockchain endpoint for China (Beijing) and China (Ningxia)

* <a href="https://managedblockchain.cn-north-1.amazonaws.com.cn">https://managedblockchain.cn-north-1.amazonaws.com.cn</a> - The ManagedBlockchain endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/managedblockchain/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-managed-blockchain-default">Default</h1>

## ListAccessors

<a id="opIdListAccessors"></a>

> Code samples

```bash
curl https://managedblockchain.us-east-1.amazonaws.com/accessors \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /accessors`

Returns a list of the accessors and their properties. Accessor objects are containers that have the information required for token based access to your Ethereum nodes.

<h3 id="listaccessors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false| The maximum number of accessors to list.|
|nextToken|query|string|false| The pagination token that indicates the next set of results to retrieve. |
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Accessors": {},
  "NextToken": {}
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listaccessors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAccessorsOutput](#schemalistaccessorsoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAccessor

<a id="opIdCreateAccessor"></a>

> Code samples

```bash
curl https://managedblockchain.us-east-1.amazonaws.com/accessors \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ClientRequestToken": "string",
    "AccessorType": "BILLING_TOKEN",
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /accessors`

Creates a new accessor for use with Managed Blockchain Ethereum nodes. An accessor contains information required for token based access to your Ethereum nodes.

> Body parameter

```json
{
  "ClientRequestToken": "string",
  "AccessorType": "BILLING_TOKEN",
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createaccessor-parameters">Parameters</h3>

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
|» ClientRequestToken|body|string|true|This is a unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than once. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the Amazon Web Services CLI.|
|» AccessorType|body|string|true|<p>The type of accessor.</p> <note> <p>Currently, accessor type is restricted to <code>BILLING_TOKEN</code>.</p> </note>|
|» Tags|body|object|false|<p>Tags to assign to the Accessor.</p> <p> Each tag consists of a key and an optional value. You can specify multiple key-value pairs in a single request with an overall maximum of 50 tags allowed per resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» AccessorType|BILLING_TOKEN|

> Example responses

> 200 Response

```json
{
  "AccessorId": {},
  "BillingToken": {}
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createaccessor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAccessorOutput](#schemacreateaccessoroutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|485|485|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|486|486|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMembers

<a id="opIdListMembers"></a>

> Code samples

```bash
curl https://managedblockchain.us-east-1.amazonaws.com/networks/string/members \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /networks/{networkId}/members`

<p>Returns a list of the members in a network and properties of their configurations.</p> <p>Applies only to Hyperledger Fabric.</p>

<h3 id="listmembers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|The unique identifier of the network for which to list members.|
|name|query|string|false|The optional name of the member to list.|
|status|query|string|false|An optional status specifier. If provided, only members currently in this status are listed.|
|isOwned|query|boolean|false|An optional Boolean value. If provided, the request is limited either to members that the current Amazon Web Services account owns (<code>true</code>) or that other Amazon Web Services accountsn own (<code>false</code>). If omitted, all members are listed.|
|maxResults|query|integer|false|The maximum number of members to return in the request.|
|nextToken|query|string|false|The pagination token that indicates the next set of results to retrieve.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|CREATING|
|status|AVAILABLE|
|status|CREATE_FAILED|
|status|UPDATING|
|status|DELETING|
|status|DELETED|
|status|INACCESSIBLE_ENCRYPTION_KEY|

> Example responses

> 200 Response

```json
{
  "Members": {},
  "NextToken": {}
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listmembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMembersOutput](#schemalistmembersoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMember

<a id="opIdCreateMember"></a>

> Code samples

```bash
curl https://managedblockchain.us-east-1.amazonaws.com/networks/string/members \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ClientRequestToken": "string",
    "InvitationId": "string",
    "MemberConfiguration": {
      "Name": {},
      "Description": {},
      "FrameworkConfiguration": {
        "Fabric": {
          "AdminUsername": {},
          "AdminPassword": {}
        }
      },
      "LogPublishingConfiguration": {
        "Fabric": {
          "CaLogs": {
            "Cloudwatch": {
              "Enabled": {}
            }
          }
        }
      },
      "Tags": {
        "property1": "string",
        "property2": "string"
      },
      "KmsKeyArn": {}
    }
  }'
```

`POST /networks/{networkId}/members`

<p>Creates a member within a Managed Blockchain network.</p> <p>Applies only to Hyperledger Fabric.</p>

> Body parameter

```json
{
  "ClientRequestToken": "string",
  "InvitationId": "string",
  "MemberConfiguration": {
    "Name": {},
    "Description": {},
    "FrameworkConfiguration": {
      "Fabric": {
        "AdminUsername": {},
        "AdminPassword": {}
      }
    },
    "LogPublishingConfiguration": {
      "Fabric": {
        "CaLogs": {
          "Cloudwatch": {
            "Enabled": {}
          }
        }
      }
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "KmsKeyArn": {}
  }
}
```

<h3 id="createmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|The unique identifier of the network in which the member is created.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ClientRequestToken|body|string|true|A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the CLI.|
|» InvitationId|body|string|true|The unique identifier of the invitation that is sent to the member to join the network.|
|» MemberConfiguration|body|object|true|<p>Configuration properties of the member.</p> <p>Applies only to Hyperledger Fabric.</p>|
|» » Name|body|object|false|none|
|» » Description|body|object|false|none|
|» » FrameworkConfiguration|body|object|false|none|
|» » » Fabric|body|object|false|none|
|» » » » AdminUsername|body|object|true|none|
|» » » » AdminPassword|body|object|true|none|
|» » LogPublishingConfiguration|body|object|false|none|
|» » » Fabric|body|object|false|none|
|» » » » CaLogs|body|object|false|none|
|» » » » » Cloudwatch|body|object|false|none|
|» » » » » » Enabled|body|object|false|none|
|» » Tags|body|object|false|none|
|» » » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» » KmsKeyArn|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "MemberId": {}
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="createmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateMemberOutput](#schemacreatememberoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|484|484|ResourceNotReadyException|[ResourceNotReadyException](#schemaresourcenotreadyexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|487|487|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|488|488|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListNetworks

<a id="opIdListNetworks"></a>

> Code samples

```bash
curl https://managedblockchain.us-east-1.amazonaws.com/networks \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /networks`

<p>Returns information about the networks in which the current Amazon Web Services account participates.</p> <p>Applies to Hyperledger Fabric and Ethereum.</p>

<h3 id="listnetworks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|The name of the network.|
|framework|query|string|false|An optional framework specifier. If provided, only networks of this framework type are listed.|
|status|query|string|false|<p>An optional status specifier. If provided, only networks currently in this status are listed.</p> <p>Applies only to Hyperledger Fabric.</p>|
|maxResults|query|integer|false|The maximum number of networks to list.|
|nextToken|query|string|false|The pagination token that indicates the next set of results to retrieve.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|framework|HYPERLEDGER_FABRIC|
|framework|ETHEREUM|
|status|CREATING|
|status|AVAILABLE|
|status|CREATE_FAILED|
|status|DELETING|
|status|DELETED|

> Example responses

> 200 Response

```json
{
  "Networks": {},
  "NextToken": {}
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listnetworks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListNetworksOutput](#schemalistnetworksoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateNetwork

<a id="opIdCreateNetwork"></a>

> Code samples

```bash
curl https://managedblockchain.us-east-1.amazonaws.com/networks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ClientRequestToken": "string",
    "Name": "string",
    "Description": "string",
    "Framework": "HYPERLEDGER_FABRIC",
    "FrameworkVersion": "string",
    "FrameworkConfiguration": {
      "Fabric": {
        "Edition": {}
      }
    },
    "VotingPolicy": {
      "ApprovalThresholdPolicy": {
        "ThresholdPercentage": {},
        "ProposalDurationInHours": {},
        "ThresholdComparator": {}
      }
    },
    "MemberConfiguration": {
      "Name": {},
      "Description": {},
      "FrameworkConfiguration": {
        "Fabric": {
          "AdminUsername": {},
          "AdminPassword": {}
        }
      },
      "LogPublishingConfiguration": {
        "Fabric": {
          "CaLogs": {
            "Cloudwatch": {
              "Enabled": {}
            }
          }
        }
      },
      "Tags": {
        "property1": "string",
        "property2": "string"
      },
      "KmsKeyArn": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /networks`

<p>Creates a new blockchain network using Amazon Managed Blockchain.</p> <p>Applies only to Hyperledger Fabric.</p>

> Body parameter

```json
{
  "ClientRequestToken": "string",
  "Name": "string",
  "Description": "string",
  "Framework": "HYPERLEDGER_FABRIC",
  "FrameworkVersion": "string",
  "FrameworkConfiguration": {
    "Fabric": {
      "Edition": {}
    }
  },
  "VotingPolicy": {
    "ApprovalThresholdPolicy": {
      "ThresholdPercentage": {},
      "ProposalDurationInHours": {},
      "ThresholdComparator": {}
    }
  },
  "MemberConfiguration": {
    "Name": {},
    "Description": {},
    "FrameworkConfiguration": {
      "Fabric": {
        "AdminUsername": {},
        "AdminPassword": {}
      }
    },
    "LogPublishingConfiguration": {
      "Fabric": {
        "CaLogs": {
          "Cloudwatch": {
            "Enabled": {}
          }
        }
      }
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "KmsKeyArn": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createnetwork-parameters">Parameters</h3>

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
|» ClientRequestToken|body|string|true|This is a unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than once. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the Amazon Web Services CLI. |
|» Name|body|string|true|The name of the network.|
|» Description|body|string|false|An optional description for the network.|
|» Framework|body|string|true|The blockchain framework that the network uses.|
|» FrameworkVersion|body|string|true|The version of the blockchain framework that the network uses.|
|» FrameworkConfiguration|body|object|false| Configuration properties relevant to the network for the blockchain framework that the network uses. |
|» » Fabric|body|object|false|none|
|» » » Edition|body|object|true|none|
|» VotingPolicy|body|object|true|<p> The voting rules for the network to decide if a proposal is accepted </p> <p>Applies only to Hyperledger Fabric.</p>|
|» » ApprovalThresholdPolicy|body|object|false|none|
|» » » ThresholdPercentage|body|object|false|none|
|» » » ProposalDurationInHours|body|object|false|none|
|» » » ThresholdComparator|body|object|false|none|
|» MemberConfiguration|body|object|true|<p>Configuration properties of the member.</p> <p>Applies only to Hyperledger Fabric.</p>|
|» » Name|body|object|false|none|
|» » Description|body|object|false|none|
|» » FrameworkConfiguration|body|object|false|none|
|» » » Fabric|body|object|false|none|
|» » » » AdminUsername|body|object|true|none|
|» » » » AdminPassword|body|object|true|none|
|» » LogPublishingConfiguration|body|object|false|none|
|» » » Fabric|body|object|false|none|
|» » » » CaLogs|body|object|false|none|
|» » » » » Cloudwatch|body|object|false|none|
|» » » » » » Enabled|body|object|false|none|
|» » Tags|body|object|false|none|
|» » » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» » KmsKeyArn|body|object|false|none|
|» Tags|body|object|false|<p>Tags to assign to the network.</p> <p> Each tag consists of a key and an optional value. You can specify multiple key-value pairs in a single request with an overall maximum of 50 tags allowed per resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Framework|HYPERLEDGER_FABRIC|
|» Framework|ETHEREUM|

> Example responses

> 200 Response

```json
{
  "NetworkId": {},
  "MemberId": {}
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createnetwork-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateNetworkOutput](#schemacreatenetworkoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|485|485|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|486|486|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListNodes

<a id="opIdListNodes"></a>

> Code samples

```bash
curl https://managedblockchain.us-east-1.amazonaws.com/networks/string/nodes \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /networks/{networkId}/nodes`

<p>Returns information about the nodes within a network.</p> <p>Applies to Hyperledger Fabric and Ethereum.</p>

<h3 id="listnodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|The unique identifier of the network for which to list nodes.|
|memberId|query|string|false|<p>The unique identifier of the member who owns the nodes to list.</p> <p>Applies only to Hyperledger Fabric and is required for Hyperledger Fabric.</p>|
|status|query|string|false|An optional status specifier. If provided, only nodes currently in this status are listed.|
|maxResults|query|integer|false|The maximum number of nodes to list.|
|nextToken|query|string|false|The pagination token that indicates the next set of results to retrieve.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|CREATING|
|status|AVAILABLE|
|status|UNHEALTHY|
|status|CREATE_FAILED|
|status|UPDATING|
|status|DELETING|
|status|DELETED|
|status|FAILED|
|status|INACCESSIBLE_ENCRYPTION_KEY|

> Example responses

> 200 Response

```json
{
  "Nodes": {},
  "NextToken": {}
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listnodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListNodesOutput](#schemalistnodesoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateNode

<a id="opIdCreateNode"></a>

> Code samples

```bash
curl https://managedblockchain.us-east-1.amazonaws.com/networks/string/nodes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ClientRequestToken": "string",
    "MemberId": "string",
    "NodeConfiguration": {
      "InstanceType": {},
      "AvailabilityZone": {},
      "LogPublishingConfiguration": {
        "Fabric": {
          "ChaincodeLogs": {
            "Cloudwatch": {
              "Enabled": {}
            }
          },
          "PeerLogs": {
            "Cloudwatch": {
              "Enabled": {}
            }
          }
        }
      },
      "StateDB": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /networks/{networkId}/nodes`

<p>Creates a node on the specified blockchain network.</p> <p>Applies to Hyperledger Fabric and Ethereum.</p>

> Body parameter

```json
{
  "ClientRequestToken": "string",
  "MemberId": "string",
  "NodeConfiguration": {
    "InstanceType": {},
    "AvailabilityZone": {},
    "LogPublishingConfiguration": {
      "Fabric": {
        "ChaincodeLogs": {
          "Cloudwatch": {
            "Enabled": {}
          }
        },
        "PeerLogs": {
          "Cloudwatch": {
            "Enabled": {}
          }
        }
      }
    },
    "StateDB": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createnode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|<p>The unique identifier of the network for the node.</p> <p>Ethereum public networks have the following <code>NetworkId</code>s:</p> <ul> <li> <p> <code>n-ethereum-mainnet</code> </p> </li> <li> <p> <code>n-ethereum-goerli</code> </p> </li> <li> <p> <code>n-ethereum-rinkeby</code> </p> </li> </ul>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ClientRequestToken|body|string|true|A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the CLI.|
|» MemberId|body|string|false|<p>The unique identifier of the member that owns this node.</p> <p>Applies only to Hyperledger Fabric.</p>|
|» NodeConfiguration|body|object|true|Configuration properties of a node.|
|» » InstanceType|body|object|false|none|
|» » AvailabilityZone|body|object|false|none|
|» » LogPublishingConfiguration|body|object|false|none|
|» » » Fabric|body|object|false|none|
|» » » » ChaincodeLogs|body|object|false|none|
|» » » » » Cloudwatch|body|object|false|none|
|» » » » » » Enabled|body|object|false|none|
|» » » » PeerLogs|body|object|false|none|
|» » » » » Cloudwatch|body|object|false|none|
|» » » » » » Enabled|body|object|false|none|
|» » StateDB|body|object|false|none|
|» Tags|body|object|false|<p>Tags to assign to the node.</p> <p> Each tag consists of a key and an optional value. You can specify multiple key-value pairs in a single request with an overall maximum of 50 tags allowed per resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "NodeId": {}
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="createnode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateNodeOutput](#schemacreatenodeoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|484|484|ResourceNotReadyException|[ResourceNotReadyException](#schemaresourcenotreadyexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|487|487|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|488|488|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProposals

<a id="opIdListProposals"></a>

> Code samples

```bash
curl https://managedblockchain.us-east-1.amazonaws.com/networks/string/proposals \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /networks/{networkId}/proposals`

<p>Returns a list of proposals for the network.</p> <p>Applies only to Hyperledger Fabric.</p>

<h3 id="listproposals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true| The unique identifier of the network. |
|maxResults|query|integer|false| The maximum number of proposals to return. |
|nextToken|query|string|false| The pagination token that indicates the next set of results to retrieve. |
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Proposals": {},
  "NextToken": {}
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listproposals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProposalsOutput](#schemalistproposalsoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateProposal

<a id="opIdCreateProposal"></a>

> Code samples

```bash
curl https://managedblockchain.us-east-1.amazonaws.com/networks/string/proposals \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ClientRequestToken": "string",
    "MemberId": "string",
    "Actions": {
      "Invitations": {},
      "Removals": {}
    },
    "Description": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /networks/{networkId}/proposals`

<p>Creates a proposal for a change to the network that other members of the network can vote on, for example, a proposal to add a new member to the network. Any member can create a proposal.</p> <p>Applies only to Hyperledger Fabric.</p>

> Body parameter

```json
{
  "ClientRequestToken": "string",
  "MemberId": "string",
  "Actions": {
    "Invitations": {},
    "Removals": {}
  },
  "Description": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createproposal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true| The unique identifier of the network for which the proposal is made.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ClientRequestToken|body|string|true|A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the CLI.|
|» MemberId|body|string|true|The unique identifier of the member that is creating the proposal. This identifier is especially useful for identifying the member making the proposal when multiple members exist in a single Amazon Web Services account.|
|» Actions|body|object|true|<p> The actions to carry out if a proposal is <code>APPROVED</code>. </p> <p>Applies only to Hyperledger Fabric.</p>|
|» » Invitations|body|object|false|none|
|» » Removals|body|object|false|none|
|» Description|body|string|false|A description for the proposal that is visible to voting members, for example, "Proposal to add Example Corp. as member."|
|» Tags|body|object|false|<p>Tags to assign to the proposal.</p> <p> Each tag consists of a key and an optional value. You can specify multiple key-value pairs in a single request with an overall maximum of 50 tags allowed per resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "ProposalId": {}
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createproposal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateProposalOutput](#schemacreateproposaloutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceNotReadyException|[ResourceNotReadyException](#schemaresourcenotreadyexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|486|486|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAccessor

<a id="opIdGetAccessor"></a>

> Code samples

```bash
curl https://managedblockchain.us-east-1.amazonaws.com/accessors/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /accessors/{AccessorId}`

Returns detailed information about an accessor. An accessor object is a container that has the information required for token based access to your Ethereum nodes.

<h3 id="getaccessor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccessorId|path|string|true|The unique identifier of the accessor.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Accessor": {
    "Id": {},
    "Type": {},
    "BillingToken": {},
    "Status": {},
    "CreationDate": {},
    "Arn": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getaccessor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAccessorOutput](#schemagetaccessoroutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAccessor

<a id="opIdDeleteAccessor"></a>

> Code samples

```bash
curl https://managedblockchain.us-east-1.amazonaws.com/accessors/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /accessors/{AccessorId}`

Deletes an accessor that your Amazon Web Services account owns. An accessor object is a container that has the information required for token based access to your Ethereum nodes including, the <code>BILLING_TOKEN</code>. After an accessor is deleted, the status of the accessor changes from <code>AVAILABLE</code> to <code>PENDING_DELETION</code>. An accessor in the <code>PENDING_DELETION</code> state can’t be used for new WebSocket requests or HTTP requests. However, WebSocket connections that were initiated while the accessor was in the <code>AVAILABLE</code> state remain open until they expire (up to 2 hours).

<h3 id="deleteaccessor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccessorId|path|string|true|The unique identifier of the accessor.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deleteaccessor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAccessorOutput](#schemadeleteaccessoroutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMember

<a id="opIdGetMember"></a>

> Code samples

```bash
curl https://managedblockchain.us-east-1.amazonaws.com/networks/string/members/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /networks/{networkId}/members/{memberId}`

<p>Returns detailed information about a member.</p> <p>Applies only to Hyperledger Fabric.</p>

<h3 id="getmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|The unique identifier of the network to which the member belongs.|
|memberId|path|string|true|The unique identifier of the member.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Member": {
    "NetworkId": {},
    "Id": {},
    "Name": {},
    "Description": {},
    "FrameworkAttributes": {
      "Fabric": {
        "AdminUsername": {},
        "CaEndpoint": {}
      }
    },
    "LogPublishingConfiguration": {
      "Fabric": {
        "CaLogs": {
          "Cloudwatch": {
            "Enabled": {}
          }
        }
      }
    },
    "Status": {},
    "CreationDate": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Arn": {},
    "KmsKeyArn": {}
  }
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMemberOutput](#schemagetmemberoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMember

<a id="opIdDeleteMember"></a>

> Code samples

```bash
curl https://managedblockchain.us-east-1.amazonaws.com/networks/string/members/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /networks/{networkId}/members/{memberId}`

<p>Deletes a member. Deleting a member removes the member and all associated resources from the network. <code>DeleteMember</code> can only be called for a specified <code>MemberId</code> if the principal performing the action is associated with the Amazon Web Services account that owns the member. In all other cases, the <code>DeleteMember</code> action is carried out as the result of an approved proposal to remove a member. If <code>MemberId</code> is the last member in a network specified by the last Amazon Web Services account, the network is deleted also.</p> <p>Applies only to Hyperledger Fabric.</p>

<h3 id="deletemember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|The unique identifier of the network from which the member is removed.|
|memberId|path|string|true|The unique identifier of the member to remove.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deletemember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteMemberOutput](#schemadeletememberoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceNotReadyException|[ResourceNotReadyException](#schemaresourcenotreadyexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMember

<a id="opIdUpdateMember"></a>

> Code samples

```bash
curl https://managedblockchain.us-east-1.amazonaws.com/networks/string/members/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "LogPublishingConfiguration": {
      "Fabric": {
        "CaLogs": {
          "Cloudwatch": {
            "Enabled": {}
          }
        }
      }
    }
  }'
```

`PATCH /networks/{networkId}/members/{memberId}`

<p>Updates a member configuration with new parameters.</p> <p>Applies only to Hyperledger Fabric.</p>

> Body parameter

```json
{
  "LogPublishingConfiguration": {
    "Fabric": {
      "CaLogs": {
        "Cloudwatch": {
          "Enabled": {}
        }
      }
    }
  }
}
```

<h3 id="updatemember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|The unique identifier of the Managed Blockchain network to which the member belongs.|
|memberId|path|string|true|The unique identifier of the member.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» LogPublishingConfiguration|body|object|false|Configuration properties for logging events associated with a member of a Managed Blockchain network.|
|» » Fabric|body|object|false|none|
|» » » CaLogs|body|object|false|none|
|» » » » Cloudwatch|body|object|false|none|
|» » » » » Enabled|body|object|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="updatemember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateMemberOutput](#schemaupdatememberoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetNode

<a id="opIdGetNode"></a>

> Code samples

```bash
curl https://managedblockchain.us-east-1.amazonaws.com/networks/string/nodes/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /networks/{networkId}/nodes/{nodeId}`

<p>Returns detailed information about a node.</p> <p>Applies to Hyperledger Fabric and Ethereum.</p>

<h3 id="getnode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|The unique identifier of the network that the node is on.|
|memberId|query|string|false|<p>The unique identifier of the member that owns the node.</p> <p>Applies only to Hyperledger Fabric and is required for Hyperledger Fabric.</p>|
|nodeId|path|string|true|The unique identifier of the node.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Node": {
    "NetworkId": {},
    "MemberId": {},
    "Id": {},
    "InstanceType": {},
    "AvailabilityZone": {},
    "FrameworkAttributes": {
      "Fabric": {
        "PeerEndpoint": {},
        "PeerEventEndpoint": {}
      },
      "Ethereum": {
        "HttpEndpoint": {},
        "WebSocketEndpoint": {}
      }
    },
    "LogPublishingConfiguration": {
      "Fabric": {
        "ChaincodeLogs": {
          "Cloudwatch": {
            "Enabled": {}
          }
        },
        "PeerLogs": {
          "Cloudwatch": {
            "Enabled": {}
          }
        }
      }
    },
    "StateDB": {},
    "Status": {},
    "CreationDate": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Arn": {},
    "KmsKeyArn": {}
  }
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getnode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetNodeOutput](#schemagetnodeoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteNode

<a id="opIdDeleteNode"></a>

> Code samples

```bash
curl https://managedblockchain.us-east-1.amazonaws.com/networks/string/nodes/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /networks/{networkId}/nodes/{nodeId}`

<p>Deletes a node that your Amazon Web Services account owns. All data on the node is lost and cannot be recovered.</p> <p>Applies to Hyperledger Fabric and Ethereum.</p>

<h3 id="deletenode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|<p>The unique identifier of the network that the node is on.</p> <p>Ethereum public networks have the following <code>NetworkId</code>s:</p> <ul> <li> <p> <code>n-ethereum-mainnet</code> </p> </li> <li> <p> <code>n-ethereum-goerli</code> </p> </li> <li> <p> <code>n-ethereum-rinkeby</code> </p> </li> </ul>|
|memberId|query|string|false|<p>The unique identifier of the member that owns this node.</p> <p>Applies only to Hyperledger Fabric and is required for Hyperledger Fabric.</p>|
|nodeId|path|string|true|The unique identifier of the node.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deletenode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteNodeOutput](#schemadeletenodeoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceNotReadyException|[ResourceNotReadyException](#schemaresourcenotreadyexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateNode

<a id="opIdUpdateNode"></a>

> Code samples

```bash
curl https://managedblockchain.us-east-1.amazonaws.com/networks/string/nodes/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MemberId": "string",
    "LogPublishingConfiguration": {
      "Fabric": {
        "ChaincodeLogs": {
          "Cloudwatch": {
            "Enabled": {}
          }
        },
        "PeerLogs": {
          "Cloudwatch": {
            "Enabled": {}
          }
        }
      }
    }
  }'
```

`PATCH /networks/{networkId}/nodes/{nodeId}`

<p>Updates a node configuration with new parameters.</p> <p>Applies only to Hyperledger Fabric.</p>

> Body parameter

```json
{
  "MemberId": "string",
  "LogPublishingConfiguration": {
    "Fabric": {
      "ChaincodeLogs": {
        "Cloudwatch": {
          "Enabled": {}
        }
      },
      "PeerLogs": {
        "Cloudwatch": {
          "Enabled": {}
        }
      }
    }
  }
}
```

<h3 id="updatenode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|The unique identifier of the network that the node is on.|
|nodeId|path|string|true|The unique identifier of the node.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MemberId|body|string|false|<p>The unique identifier of the member that owns the node.</p> <p>Applies only to Hyperledger Fabric.</p>|
|» LogPublishingConfiguration|body|object|false|Configuration properties for logging events associated with a peer node on a Hyperledger Fabric network on Managed Blockchain.|
|» » Fabric|body|object|false|none|
|» » » ChaincodeLogs|body|object|false|none|
|» » » » Cloudwatch|body|object|false|none|
|» » » » » Enabled|body|object|false|none|
|» » » PeerLogs|body|object|false|none|
|» » » » Cloudwatch|body|object|false|none|
|» » » » » Enabled|body|object|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="updatenode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateNodeOutput](#schemaupdatenodeoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetNetwork

<a id="opIdGetNetwork"></a>

> Code samples

```bash
curl https://managedblockchain.us-east-1.amazonaws.com/networks/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /networks/{networkId}`

<p>Returns detailed information about a network.</p> <p>Applies to Hyperledger Fabric and Ethereum.</p>

<h3 id="getnetwork-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|The unique identifier of the network to get information about.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Network": {
    "Id": {},
    "Name": {},
    "Description": {},
    "Framework": {},
    "FrameworkVersion": {},
    "FrameworkAttributes": {
      "Fabric": {
        "OrderingServiceEndpoint": {},
        "Edition": {}
      },
      "Ethereum": {
        "ChainId": {}
      }
    },
    "VpcEndpointServiceName": {},
    "VotingPolicy": {
      "ApprovalThresholdPolicy": {
        "ThresholdPercentage": {},
        "ProposalDurationInHours": {},
        "ThresholdComparator": {}
      }
    },
    "Status": {},
    "CreationDate": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Arn": {}
  }
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getnetwork-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetNetworkOutput](#schemagetnetworkoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetProposal

<a id="opIdGetProposal"></a>

> Code samples

```bash
curl https://managedblockchain.us-east-1.amazonaws.com/networks/string/proposals/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /networks/{networkId}/proposals/{proposalId}`

<p>Returns detailed information about a proposal.</p> <p>Applies only to Hyperledger Fabric.</p>

<h3 id="getproposal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|The unique identifier of the network for which the proposal is made.|
|proposalId|path|string|true|The unique identifier of the proposal.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Proposal": {
    "ProposalId": {},
    "NetworkId": {},
    "Description": {},
    "Actions": {
      "Invitations": {},
      "Removals": {}
    },
    "ProposedByMemberId": {},
    "ProposedByMemberName": {},
    "Status": {},
    "CreationDate": {},
    "ExpirationDate": {},
    "YesVoteCount": {},
    "NoVoteCount": {},
    "OutstandingVoteCount": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Arn": {}
  }
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getproposal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetProposalOutput](#schemagetproposaloutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListInvitations

<a id="opIdListInvitations"></a>

> Code samples

```bash
curl https://managedblockchain.us-east-1.amazonaws.com/invitations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /invitations`

<p>Returns a list of all invitations for the current Amazon Web Services account.</p> <p>Applies only to Hyperledger Fabric.</p>

<h3 id="listinvitations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of invitations to return.|
|nextToken|query|string|false|The pagination token that indicates the next set of results to retrieve.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Invitations": {},
  "NextToken": {}
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="listinvitations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListInvitationsOutput](#schemalistinvitationsoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|485|485|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProposalVotes

<a id="opIdListProposalVotes"></a>

> Code samples

```bash
curl https://managedblockchain.us-east-1.amazonaws.com/networks/string/proposals/string/votes \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /networks/{networkId}/proposals/{proposalId}/votes`

<p>Returns the list of votes for a specified proposal, including the value of each vote and the unique identifier of the member that cast the vote.</p> <p>Applies only to Hyperledger Fabric.</p>

<h3 id="listproposalvotes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true| The unique identifier of the network. |
|proposalId|path|string|true| The unique identifier of the proposal. |
|maxResults|query|integer|false| The maximum number of votes to return. |
|nextToken|query|string|false| The pagination token that indicates the next set of results to retrieve. |
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "ProposalVotes": {},
  "NextToken": {}
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listproposalvotes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProposalVotesOutput](#schemalistproposalvotesoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## VoteOnProposal

<a id="opIdVoteOnProposal"></a>

> Code samples

```bash
curl https://managedblockchain.us-east-1.amazonaws.com/networks/string/proposals/string/votes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "VoterMemberId": "string",
    "Vote": "YES"
  }'
```

`POST /networks/{networkId}/proposals/{proposalId}/votes`

<p>Casts a vote for a specified <code>ProposalId</code> on behalf of a member. The member to vote as, specified by <code>VoterMemberId</code>, must be in the same Amazon Web Services account as the principal that calls the action.</p> <p>Applies only to Hyperledger Fabric.</p>

> Body parameter

```json
{
  "VoterMemberId": "string",
  "Vote": "YES"
}
```

<h3 id="voteonproposal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true| The unique identifier of the network. |
|proposalId|path|string|true| The unique identifier of the proposal. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» VoterMemberId|body|string|true|The unique identifier of the member casting the vote. |
|» Vote|body|string|true| The value of the vote. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Vote|YES|
|» Vote|NO|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="voteonproposal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VoteOnProposalOutput](#schemavoteonproposaloutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|IllegalActionException|[IllegalActionException](#schemaillegalactionexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://managedblockchain.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

<p>Returns a list of tags for the specified resource. Each tag consists of a key and optional value.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceNotReadyException|[ResourceNotReadyException](#schemaresourcenotreadyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://managedblockchain.us-east-1.amazonaws.com/tags/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /tags/{resourceArn}`

<p>Adds or overwrites the specified tags for the specified Amazon Managed Blockchain resource. Each tag consists of a key and optional value.</p> <p>When you specify a tag key that already exists, the tag value is overwritten with the new value. Use <code>UntagResource</code> to remove tag keys.</p> <p>A resource can have up to 50 tags. If you try to create more than 50 tags for a resource, your request fails and returns an error.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>

> Body parameter

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Tags|body|object|true|The tags to assign to the specified resource. Tag values can be empty, for example, <code>"MyTagKey" : ""</code>. You can specify multiple key-value pairs in a single request, with an overall maximum of 50 tags added to each resource.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|484|484|ResourceNotReadyException|[ResourceNotReadyException](#schemaresourcenotreadyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RejectInvitation

<a id="opIdRejectInvitation"></a>

> Code samples

```bash
curl https://managedblockchain.us-east-1.amazonaws.com/invitations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /invitations/{invitationId}`

<p>Rejects an invitation to join a network. This action can be called by a principal in an Amazon Web Services account that has received an invitation to create a member and join a network.</p> <p>Applies only to Hyperledger Fabric.</p>

<h3 id="rejectinvitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invitationId|path|string|true|The unique identifier of the invitation to reject.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="rejectinvitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RejectInvitationOutput](#schemarejectinvitationoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|IllegalActionException|[IllegalActionException](#schemaillegalactionexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://managedblockchain.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

<p>Removes the specified tags from the Amazon Managed Blockchain resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|The tag keys.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceNotReadyException|[ResourceNotReadyException](#schemaresourcenotreadyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateAccessorOutput">CreateAccessorOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccessoroutput"></a>
<a id="schema_CreateAccessorOutput"></a>
<a id="tocScreateaccessoroutput"></a>
<a id="tocscreateaccessoroutput"></a>

```json
{
  "AccessorId": {},
  "BillingToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessorId|object|false|none|none|
|BillingToken|object|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

```json
null
```

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_ResourceAlreadyExistsException">ResourceAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcealreadyexistsexception"></a>
<a id="schema_ResourceAlreadyExistsException"></a>
<a id="tocSresourcealreadyexistsexception"></a>
<a id="tocsresourcealreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_ResourceLimitExceededException">ResourceLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelimitexceededexception"></a>
<a id="schema_ResourceLimitExceededException"></a>
<a id="tocSresourcelimitexceededexception"></a>
<a id="tocsresourcelimitexceededexception"></a>

```json
null
```

<h2 id="tocS_InternalServiceErrorException">InternalServiceErrorException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserviceerrorexception"></a>
<a id="schema_InternalServiceErrorException"></a>
<a id="tocSinternalserviceerrorexception"></a>
<a id="tocsinternalserviceerrorexception"></a>

```json
null
```

<h2 id="tocS_TooManyTagsException">TooManyTagsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanytagsexception"></a>
<a id="schema_TooManyTagsException"></a>
<a id="tocStoomanytagsexception"></a>
<a id="tocstoomanytagsexception"></a>

```json
null
```

<h2 id="tocS_CreateMemberOutput">CreateMemberOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatememberoutput"></a>
<a id="schema_CreateMemberOutput"></a>
<a id="tocScreatememberoutput"></a>
<a id="tocscreatememberoutput"></a>

```json
{
  "MemberId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MemberId|object|false|none|none|

<h2 id="tocS_NetworkMemberNameString">NetworkMemberNameString</h2>
<!-- backwards compatibility -->
<a id="schemanetworkmembernamestring"></a>
<a id="schema_NetworkMemberNameString"></a>
<a id="tocSnetworkmembernamestring"></a>
<a id="tocsnetworkmembernamestring"></a>

```json
"string"
```

<h2 id="tocS_DescriptionString">DescriptionString</h2>
<!-- backwards compatibility -->
<a id="schemadescriptionstring"></a>
<a id="schema_DescriptionString"></a>
<a id="tocSdescriptionstring"></a>
<a id="tocsdescriptionstring"></a>

```json
"string"
```

<h2 id="tocS_MemberFrameworkConfiguration">MemberFrameworkConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamemberframeworkconfiguration"></a>
<a id="schema_MemberFrameworkConfiguration"></a>
<a id="tocSmemberframeworkconfiguration"></a>
<a id="tocsmemberframeworkconfiguration"></a>

```json
{
  "Fabric": {
    "AdminUsername": {},
    "AdminPassword": {}
  }
}
```

Configuration properties relevant to a member for the blockchain framework that the Managed Blockchain network uses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Fabric|object|false|none|none|

<h2 id="tocS_MemberLogPublishingConfiguration">MemberLogPublishingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamemberlogpublishingconfiguration"></a>
<a id="schema_MemberLogPublishingConfiguration"></a>
<a id="tocSmemberlogpublishingconfiguration"></a>
<a id="tocsmemberlogpublishingconfiguration"></a>

```json
{
  "Fabric": {
    "CaLogs": {
      "Cloudwatch": {
        "Enabled": {}
      }
    }
  }
}
```

Configuration properties for logging events associated with a member of a Managed Blockchain network.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Fabric|object|false|none|none|

<h2 id="tocS_InputTagMap">InputTagMap</h2>
<!-- backwards compatibility -->
<a id="schemainputtagmap"></a>
<a id="schema_InputTagMap"></a>
<a id="tocSinputtagmap"></a>
<a id="tocsinputtagmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TagValue](#schematagvalue)|false|none|none|

<h2 id="tocS_ArnString">ArnString</h2>
<!-- backwards compatibility -->
<a id="schemaarnstring"></a>
<a id="schema_ArnString"></a>
<a id="tocSarnstring"></a>
<a id="tocsarnstring"></a>

```json
"string"
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

<h2 id="tocS_ResourceNotReadyException">ResourceNotReadyException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotreadyexception"></a>
<a id="schema_ResourceNotReadyException"></a>
<a id="tocSresourcenotreadyexception"></a>
<a id="tocsresourcenotreadyexception"></a>

```json
null
```

<h2 id="tocS_CreateNetworkOutput">CreateNetworkOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatenetworkoutput"></a>
<a id="schema_CreateNetworkOutput"></a>
<a id="tocScreatenetworkoutput"></a>
<a id="tocscreatenetworkoutput"></a>

```json
{
  "NetworkId": {},
  "MemberId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NetworkId|object|false|none|none|
|MemberId|object|false|none|none|

<h2 id="tocS_NetworkFabricConfiguration">NetworkFabricConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfabricconfiguration"></a>
<a id="schema_NetworkFabricConfiguration"></a>
<a id="tocSnetworkfabricconfiguration"></a>
<a id="tocsnetworkfabricconfiguration"></a>

```json
{
  "Edition": {}
}
```

Hyperledger Fabric configuration properties for the network.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Edition|object|true|none|none|

<h2 id="tocS_ApprovalThresholdPolicy">ApprovalThresholdPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalthresholdpolicy"></a>
<a id="schema_ApprovalThresholdPolicy"></a>
<a id="tocSapprovalthresholdpolicy"></a>
<a id="tocsapprovalthresholdpolicy"></a>

```json
{
  "ThresholdPercentage": {},
  "ProposalDurationInHours": {},
  "ThresholdComparator": {}
}
```

<p>A policy type that defines the voting rules for the network. The rules decide if a proposal is approved. Approval may be based on criteria such as the percentage of <code>YES</code> votes and the duration of the proposal. The policy applies to all proposals and is specified when the network is created.</p> <p>Applies only to Hyperledger Fabric.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ThresholdPercentage|object|false|none|none|
|ProposalDurationInHours|object|false|none|none|
|ThresholdComparator|object|false|none|none|

<h2 id="tocS_CreateNodeOutput">CreateNodeOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatenodeoutput"></a>
<a id="schema_CreateNodeOutput"></a>
<a id="tocScreatenodeoutput"></a>
<a id="tocscreatenodeoutput"></a>

```json
{
  "NodeId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NodeId|object|false|none|none|

<h2 id="tocS_InstanceTypeString">InstanceTypeString</h2>
<!-- backwards compatibility -->
<a id="schemainstancetypestring"></a>
<a id="schema_InstanceTypeString"></a>
<a id="tocSinstancetypestring"></a>
<a id="tocsinstancetypestring"></a>

```json
"string"
```

<h2 id="tocS_AvailabilityZoneString">AvailabilityZoneString</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzonestring"></a>
<a id="schema_AvailabilityZoneString"></a>
<a id="tocSavailabilityzonestring"></a>
<a id="tocsavailabilityzonestring"></a>

```json
"string"
```

<h2 id="tocS_NodeLogPublishingConfiguration">NodeLogPublishingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemanodelogpublishingconfiguration"></a>
<a id="schema_NodeLogPublishingConfiguration"></a>
<a id="tocSnodelogpublishingconfiguration"></a>
<a id="tocsnodelogpublishingconfiguration"></a>

```json
{
  "Fabric": {
    "ChaincodeLogs": {
      "Cloudwatch": {
        "Enabled": {}
      }
    },
    "PeerLogs": {
      "Cloudwatch": {
        "Enabled": {}
      }
    }
  }
}
```

Configuration properties for logging events associated with a peer node on a Hyperledger Fabric network on Managed Blockchain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Fabric|object|false|none|none|

<h2 id="tocS_StateDBType">StateDBType</h2>
<!-- backwards compatibility -->
<a id="schemastatedbtype"></a>
<a id="schema_StateDBType"></a>
<a id="tocSstatedbtype"></a>
<a id="tocsstatedbtype"></a>

```json
"LevelDB"
```

<h2 id="tocS_CreateProposalOutput">CreateProposalOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateproposaloutput"></a>
<a id="schema_CreateProposalOutput"></a>
<a id="tocScreateproposaloutput"></a>
<a id="tocscreateproposaloutput"></a>

```json
{
  "ProposalId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProposalId|object|false|none|none|

<h2 id="tocS_InviteActionList">InviteActionList</h2>
<!-- backwards compatibility -->
<a id="schemainviteactionlist"></a>
<a id="schema_InviteActionList"></a>
<a id="tocSinviteactionlist"></a>
<a id="tocsinviteactionlist"></a>

```json
[
  {
    "Principal": {}
  }
]
```

<h2 id="tocS_RemoveActionList">RemoveActionList</h2>
<!-- backwards compatibility -->
<a id="schemaremoveactionlist"></a>
<a id="schema_RemoveActionList"></a>
<a id="tocSremoveactionlist"></a>
<a id="tocsremoveactionlist"></a>

```json
[
  {
    "MemberId": {}
  }
]
```

<h2 id="tocS_DeleteAccessorOutput">DeleteAccessorOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaccessoroutput"></a>
<a id="schema_DeleteAccessorOutput"></a>
<a id="tocSdeleteaccessoroutput"></a>
<a id="tocsdeleteaccessoroutput"></a>

```json
{}
```

<h2 id="tocS_DeleteMemberOutput">DeleteMemberOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletememberoutput"></a>
<a id="schema_DeleteMemberOutput"></a>
<a id="tocSdeletememberoutput"></a>
<a id="tocsdeletememberoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteNodeOutput">DeleteNodeOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletenodeoutput"></a>
<a id="schema_DeleteNodeOutput"></a>
<a id="tocSdeletenodeoutput"></a>
<a id="tocsdeletenodeoutput"></a>

```json
{}
```

<h2 id="tocS_GetAccessorOutput">GetAccessorOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetaccessoroutput"></a>
<a id="schema_GetAccessorOutput"></a>
<a id="tocSgetaccessoroutput"></a>
<a id="tocsgetaccessoroutput"></a>

```json
{
  "Accessor": {
    "Id": {},
    "Type": {},
    "BillingToken": {},
    "Status": {},
    "CreationDate": {},
    "Arn": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Accessor|object|false|none|none|

<h2 id="tocS_GetMemberOutput">GetMemberOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetmemberoutput"></a>
<a id="schema_GetMemberOutput"></a>
<a id="tocSgetmemberoutput"></a>
<a id="tocsgetmemberoutput"></a>

```json
{
  "Member": {
    "NetworkId": {},
    "Id": {},
    "Name": {},
    "Description": {},
    "FrameworkAttributes": {
      "Fabric": {
        "AdminUsername": {},
        "CaEndpoint": {}
      }
    },
    "LogPublishingConfiguration": {
      "Fabric": {
        "CaLogs": {
          "Cloudwatch": {
            "Enabled": {}
          }
        }
      }
    },
    "Status": {},
    "CreationDate": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Arn": {},
    "KmsKeyArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Member|object|false|none|none|

<h2 id="tocS_GetNetworkOutput">GetNetworkOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetnetworkoutput"></a>
<a id="schema_GetNetworkOutput"></a>
<a id="tocSgetnetworkoutput"></a>
<a id="tocsgetnetworkoutput"></a>

```json
{
  "Network": {
    "Id": {},
    "Name": {},
    "Description": {},
    "Framework": {},
    "FrameworkVersion": {},
    "FrameworkAttributes": {
      "Fabric": {
        "OrderingServiceEndpoint": {},
        "Edition": {}
      },
      "Ethereum": {
        "ChainId": {}
      }
    },
    "VpcEndpointServiceName": {},
    "VotingPolicy": {
      "ApprovalThresholdPolicy": {
        "ThresholdPercentage": {},
        "ProposalDurationInHours": {},
        "ThresholdComparator": {}
      }
    },
    "Status": {},
    "CreationDate": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Arn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Network|object|false|none|none|

<h2 id="tocS_GetNodeOutput">GetNodeOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetnodeoutput"></a>
<a id="schema_GetNodeOutput"></a>
<a id="tocSgetnodeoutput"></a>
<a id="tocsgetnodeoutput"></a>

```json
{
  "Node": {
    "NetworkId": {},
    "MemberId": {},
    "Id": {},
    "InstanceType": {},
    "AvailabilityZone": {},
    "FrameworkAttributes": {
      "Fabric": {
        "PeerEndpoint": {},
        "PeerEventEndpoint": {}
      },
      "Ethereum": {
        "HttpEndpoint": {},
        "WebSocketEndpoint": {}
      }
    },
    "LogPublishingConfiguration": {
      "Fabric": {
        "ChaincodeLogs": {
          "Cloudwatch": {
            "Enabled": {}
          }
        },
        "PeerLogs": {
          "Cloudwatch": {
            "Enabled": {}
          }
        }
      }
    },
    "StateDB": {},
    "Status": {},
    "CreationDate": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Arn": {},
    "KmsKeyArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Node|object|false|none|none|

<h2 id="tocS_GetProposalOutput">GetProposalOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetproposaloutput"></a>
<a id="schema_GetProposalOutput"></a>
<a id="tocSgetproposaloutput"></a>
<a id="tocsgetproposaloutput"></a>

```json
{
  "Proposal": {
    "ProposalId": {},
    "NetworkId": {},
    "Description": {},
    "Actions": {
      "Invitations": {},
      "Removals": {}
    },
    "ProposedByMemberId": {},
    "ProposedByMemberName": {},
    "Status": {},
    "CreationDate": {},
    "ExpirationDate": {},
    "YesVoteCount": {},
    "NoVoteCount": {},
    "OutstandingVoteCount": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Arn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Proposal|object|false|none|none|

<h2 id="tocS_ListAccessorsOutput">ListAccessorsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistaccessorsoutput"></a>
<a id="schema_ListAccessorsOutput"></a>
<a id="tocSlistaccessorsoutput"></a>
<a id="tocslistaccessorsoutput"></a>

```json
{
  "Accessors": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Accessors|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListInvitationsOutput">ListInvitationsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistinvitationsoutput"></a>
<a id="schema_ListInvitationsOutput"></a>
<a id="tocSlistinvitationsoutput"></a>
<a id="tocslistinvitationsoutput"></a>

```json
{
  "Invitations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Invitations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListMembersOutput">ListMembersOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistmembersoutput"></a>
<a id="schema_ListMembersOutput"></a>
<a id="tocSlistmembersoutput"></a>
<a id="tocslistmembersoutput"></a>

```json
{
  "Members": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Members|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListNetworksOutput">ListNetworksOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistnetworksoutput"></a>
<a id="schema_ListNetworksOutput"></a>
<a id="tocSlistnetworksoutput"></a>
<a id="tocslistnetworksoutput"></a>

```json
{
  "Networks": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Networks|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListNodesOutput">ListNodesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistnodesoutput"></a>
<a id="schema_ListNodesOutput"></a>
<a id="tocSlistnodesoutput"></a>
<a id="tocslistnodesoutput"></a>

```json
{
  "Nodes": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Nodes|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListProposalVotesOutput">ListProposalVotesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistproposalvotesoutput"></a>
<a id="schema_ListProposalVotesOutput"></a>
<a id="tocSlistproposalvotesoutput"></a>
<a id="tocslistproposalvotesoutput"></a>

```json
{
  "ProposalVotes": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProposalVotes|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListProposalsOutput">ListProposalsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistproposalsoutput"></a>
<a id="schema_ListProposalsOutput"></a>
<a id="tocSlistproposalsoutput"></a>
<a id="tocslistproposalsoutput"></a>

```json
{
  "Proposals": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Proposals|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_RejectInvitationOutput">RejectInvitationOutput</h2>
<!-- backwards compatibility -->
<a id="schemarejectinvitationoutput"></a>
<a id="schema_RejectInvitationOutput"></a>
<a id="tocSrejectinvitationoutput"></a>
<a id="tocsrejectinvitationoutput"></a>

```json
{}
```

<h2 id="tocS_IllegalActionException">IllegalActionException</h2>
<!-- backwards compatibility -->
<a id="schemaillegalactionexception"></a>
<a id="schema_IllegalActionException"></a>
<a id="tocSillegalactionexception"></a>
<a id="tocsillegalactionexception"></a>

```json
null
```

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_UpdateMemberOutput">UpdateMemberOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatememberoutput"></a>
<a id="schema_UpdateMemberOutput"></a>
<a id="tocSupdatememberoutput"></a>
<a id="tocsupdatememberoutput"></a>

```json
{}
```

<h2 id="tocS_MemberFabricLogPublishingConfiguration">MemberFabricLogPublishingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamemberfabriclogpublishingconfiguration"></a>
<a id="schema_MemberFabricLogPublishingConfiguration"></a>
<a id="tocSmemberfabriclogpublishingconfiguration"></a>
<a id="tocsmemberfabriclogpublishingconfiguration"></a>

```json
{
  "CaLogs": {
    "Cloudwatch": {
      "Enabled": {}
    }
  }
}
```

Configuration properties for logging events associated with a member of a Managed Blockchain network using the Hyperledger Fabric framework.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CaLogs|object|false|none|none|

<h2 id="tocS_UpdateNodeOutput">UpdateNodeOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenodeoutput"></a>
<a id="schema_UpdateNodeOutput"></a>
<a id="tocSupdatenodeoutput"></a>
<a id="tocsupdatenodeoutput"></a>

```json
{}
```

<h2 id="tocS_NodeFabricLogPublishingConfiguration">NodeFabricLogPublishingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemanodefabriclogpublishingconfiguration"></a>
<a id="schema_NodeFabricLogPublishingConfiguration"></a>
<a id="tocSnodefabriclogpublishingconfiguration"></a>
<a id="tocsnodefabriclogpublishingconfiguration"></a>

```json
{
  "ChaincodeLogs": {
    "Cloudwatch": {
      "Enabled": {}
    }
  },
  "PeerLogs": {
    "Cloudwatch": {
      "Enabled": {}
    }
  }
}
```

Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChaincodeLogs|object|false|none|none|
|PeerLogs|object|false|none|none|

<h2 id="tocS_VoteOnProposalOutput">VoteOnProposalOutput</h2>
<!-- backwards compatibility -->
<a id="schemavoteonproposaloutput"></a>
<a id="schema_VoteOnProposalOutput"></a>
<a id="tocSvoteonproposaloutput"></a>
<a id="tocsvoteonproposaloutput"></a>

```json
{}
```

<h2 id="tocS_ResourceIdString">ResourceIdString</h2>
<!-- backwards compatibility -->
<a id="schemaresourceidstring"></a>
<a id="schema_ResourceIdString"></a>
<a id="tocSresourceidstring"></a>
<a id="tocsresourceidstring"></a>

```json
"string"
```

<h2 id="tocS_AccessorType">AccessorType</h2>
<!-- backwards compatibility -->
<a id="schemaaccessortype"></a>
<a id="schema_AccessorType"></a>
<a id="tocSaccessortype"></a>
<a id="tocsaccessortype"></a>

```json
"BILLING_TOKEN"
```

<h2 id="tocS_AccessorBillingTokenString">AccessorBillingTokenString</h2>
<!-- backwards compatibility -->
<a id="schemaaccessorbillingtokenstring"></a>
<a id="schema_AccessorBillingTokenString"></a>
<a id="tocSaccessorbillingtokenstring"></a>
<a id="tocsaccessorbillingtokenstring"></a>

```json
"stringstringstringstringstringstringstring"
```

<h2 id="tocS_AccessorStatus">AccessorStatus</h2>
<!-- backwards compatibility -->
<a id="schemaaccessorstatus"></a>
<a id="schema_AccessorStatus"></a>
<a id="tocSaccessorstatus"></a>
<a id="tocsaccessorstatus"></a>

```json
"AVAILABLE"
```

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_OutputTagMap">OutputTagMap</h2>
<!-- backwards compatibility -->
<a id="schemaoutputtagmap"></a>
<a id="schema_OutputTagMap"></a>
<a id="tocSoutputtagmap"></a>
<a id="tocsoutputtagmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TagValue](#schematagvalue)|false|none|none|

<h2 id="tocS_Accessor">Accessor</h2>
<!-- backwards compatibility -->
<a id="schemaaccessor"></a>
<a id="schema_Accessor"></a>
<a id="tocSaccessor"></a>
<a id="tocsaccessor"></a>

```json
{
  "Id": {},
  "Type": {},
  "BillingToken": {},
  "Status": {},
  "CreationDate": {},
  "Arn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

The properties of the Accessor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Type|object|false|none|none|
|BillingToken|object|false|none|none|
|Status|object|false|none|none|
|CreationDate|object|false|none|none|
|Arn|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_AccessorListMaxResults">AccessorListMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemaaccessorlistmaxresults"></a>
<a id="schema_AccessorListMaxResults"></a>
<a id="tocSaccessorlistmaxresults"></a>
<a id="tocsaccessorlistmaxresults"></a>

```json
1
```

<h2 id="tocS_AccessorSummary">AccessorSummary</h2>
<!-- backwards compatibility -->
<a id="schemaaccessorsummary"></a>
<a id="schema_AccessorSummary"></a>
<a id="tocSaccessorsummary"></a>
<a id="tocsaccessorsummary"></a>

```json
{
  "Id": {},
  "Type": {},
  "Status": {},
  "CreationDate": {},
  "Arn": {}
}
```

A summary of accessor properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Type|object|false|none|none|
|Status|object|false|none|none|
|CreationDate|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_AccessorSummaryList">AccessorSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaaccessorsummarylist"></a>
<a id="schema_AccessorSummaryList"></a>
<a id="tocSaccessorsummarylist"></a>
<a id="tocsaccessorsummarylist"></a>

```json
[
  {
    "Id": {},
    "Type": {},
    "Status": {},
    "CreationDate": {},
    "Arn": {}
  }
]
```

<h2 id="tocS_ThresholdPercentageInt">ThresholdPercentageInt</h2>
<!-- backwards compatibility -->
<a id="schemathresholdpercentageint"></a>
<a id="schema_ThresholdPercentageInt"></a>
<a id="tocSthresholdpercentageint"></a>
<a id="tocsthresholdpercentageint"></a>

```json
0
```

<h2 id="tocS_ProposalDurationInt">ProposalDurationInt</h2>
<!-- backwards compatibility -->
<a id="schemaproposaldurationint"></a>
<a id="schema_ProposalDurationInt"></a>
<a id="tocSproposaldurationint"></a>
<a id="tocsproposaldurationint"></a>

```json
1
```

<h2 id="tocS_ThresholdComparator">ThresholdComparator</h2>
<!-- backwards compatibility -->
<a id="schemathresholdcomparator"></a>
<a id="schema_ThresholdComparator"></a>
<a id="tocSthresholdcomparator"></a>
<a id="tocsthresholdcomparator"></a>

```json
"GREATER_THAN"
```

<h2 id="tocS_ClientRequestTokenString">ClientRequestTokenString</h2>
<!-- backwards compatibility -->
<a id="schemaclientrequesttokenstring"></a>
<a id="schema_ClientRequestTokenString"></a>
<a id="tocSclientrequesttokenstring"></a>
<a id="tocsclientrequesttokenstring"></a>

```json
"string"
```

<h2 id="tocS_CreateAccessorInput">CreateAccessorInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccessorinput"></a>
<a id="schema_CreateAccessorInput"></a>
<a id="tocScreateaccessorinput"></a>
<a id="tocscreateaccessorinput"></a>

```json
{
  "ClientRequestToken": {},
  "AccessorType": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientRequestToken|object|true|none|none|
|AccessorType|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_MemberConfiguration">MemberConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamemberconfiguration"></a>
<a id="schema_MemberConfiguration"></a>
<a id="tocSmemberconfiguration"></a>
<a id="tocsmemberconfiguration"></a>

```json
{
  "Name": {},
  "Description": {},
  "FrameworkConfiguration": {
    "Fabric": {
      "AdminUsername": {},
      "AdminPassword": {}
    }
  },
  "LogPublishingConfiguration": {
    "Fabric": {
      "CaLogs": {
        "Cloudwatch": {
          "Enabled": {}
        }
      }
    }
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "KmsKeyArn": {}
}
```

<p>Configuration properties of the member.</p> <p>Applies only to Hyperledger Fabric.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|FrameworkConfiguration|object|true|none|none|
|LogPublishingConfiguration|object|false|none|none|
|Tags|object|false|none|none|
|KmsKeyArn|object|false|none|none|

<h2 id="tocS_CreateMemberInput">CreateMemberInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatememberinput"></a>
<a id="schema_CreateMemberInput"></a>
<a id="tocScreatememberinput"></a>
<a id="tocscreatememberinput"></a>

```json
{
  "ClientRequestToken": {},
  "InvitationId": {},
  "MemberConfiguration": {
    "Name": {},
    "Description": {},
    "FrameworkConfiguration": {
      "Fabric": {
        "AdminUsername": {},
        "AdminPassword": {}
      }
    },
    "LogPublishingConfiguration": {
      "Fabric": {
        "CaLogs": {
          "Cloudwatch": {
            "Enabled": {}
          }
        }
      }
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "KmsKeyArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientRequestToken|object|true|none|none|
|InvitationId|object|true|none|none|
|MemberConfiguration|object|true|none|none|

<h2 id="tocS_NameString">NameString</h2>
<!-- backwards compatibility -->
<a id="schemanamestring"></a>
<a id="schema_NameString"></a>
<a id="tocSnamestring"></a>
<a id="tocsnamestring"></a>

```json
"string"
```

<h2 id="tocS_Framework">Framework</h2>
<!-- backwards compatibility -->
<a id="schemaframework"></a>
<a id="schema_Framework"></a>
<a id="tocSframework"></a>
<a id="tocsframework"></a>

```json
"HYPERLEDGER_FABRIC"
```

<h2 id="tocS_FrameworkVersionString">FrameworkVersionString</h2>
<!-- backwards compatibility -->
<a id="schemaframeworkversionstring"></a>
<a id="schema_FrameworkVersionString"></a>
<a id="tocSframeworkversionstring"></a>
<a id="tocsframeworkversionstring"></a>

```json
"string"
```

<h2 id="tocS_NetworkFrameworkConfiguration">NetworkFrameworkConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemanetworkframeworkconfiguration"></a>
<a id="schema_NetworkFrameworkConfiguration"></a>
<a id="tocSnetworkframeworkconfiguration"></a>
<a id="tocsnetworkframeworkconfiguration"></a>

```json
{
  "Fabric": {
    "Edition": {}
  }
}
```

 Configuration properties relevant to the network for the blockchain framework that the network uses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Fabric|object|false|none|none|

<h2 id="tocS_VotingPolicy">VotingPolicy</h2>
<!-- backwards compatibility -->
<a id="schemavotingpolicy"></a>
<a id="schema_VotingPolicy"></a>
<a id="tocSvotingpolicy"></a>
<a id="tocsvotingpolicy"></a>

```json
{
  "ApprovalThresholdPolicy": {
    "ThresholdPercentage": {},
    "ProposalDurationInHours": {},
    "ThresholdComparator": {}
  }
}
```

<p> The voting rules for the network to decide if a proposal is accepted </p> <p>Applies only to Hyperledger Fabric.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApprovalThresholdPolicy|object|false|none|none|

<h2 id="tocS_CreateNetworkInput">CreateNetworkInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatenetworkinput"></a>
<a id="schema_CreateNetworkInput"></a>
<a id="tocScreatenetworkinput"></a>
<a id="tocscreatenetworkinput"></a>

```json
{
  "ClientRequestToken": {},
  "Name": {},
  "Description": {},
  "Framework": {},
  "FrameworkVersion": {},
  "FrameworkConfiguration": {
    "Fabric": {
      "Edition": {}
    }
  },
  "VotingPolicy": {
    "ApprovalThresholdPolicy": {
      "ThresholdPercentage": {},
      "ProposalDurationInHours": {},
      "ThresholdComparator": {}
    }
  },
  "MemberConfiguration": {
    "Name": {},
    "Description": {},
    "FrameworkConfiguration": {
      "Fabric": {
        "AdminUsername": {},
        "AdminPassword": {}
      }
    },
    "LogPublishingConfiguration": {
      "Fabric": {
        "CaLogs": {
          "Cloudwatch": {
            "Enabled": {}
          }
        }
      }
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "KmsKeyArn": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientRequestToken|object|true|none|none|
|Name|object|true|none|none|
|Description|object|false|none|none|
|Framework|object|true|none|none|
|FrameworkVersion|object|true|none|none|
|FrameworkConfiguration|object|false|none|none|
|VotingPolicy|object|true|none|none|
|MemberConfiguration|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_NodeConfiguration">NodeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemanodeconfiguration"></a>
<a id="schema_NodeConfiguration"></a>
<a id="tocSnodeconfiguration"></a>
<a id="tocsnodeconfiguration"></a>

```json
{
  "InstanceType": {},
  "AvailabilityZone": {},
  "LogPublishingConfiguration": {
    "Fabric": {
      "ChaincodeLogs": {
        "Cloudwatch": {
          "Enabled": {}
        }
      },
      "PeerLogs": {
        "Cloudwatch": {
          "Enabled": {}
        }
      }
    }
  },
  "StateDB": {}
}
```

Configuration properties of a node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceType|object|true|none|none|
|AvailabilityZone|object|false|none|none|
|LogPublishingConfiguration|object|false|none|none|
|StateDB|object|false|none|none|

<h2 id="tocS_CreateNodeInput">CreateNodeInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatenodeinput"></a>
<a id="schema_CreateNodeInput"></a>
<a id="tocScreatenodeinput"></a>
<a id="tocscreatenodeinput"></a>

```json
{
  "ClientRequestToken": {},
  "MemberId": {},
  "NodeConfiguration": {
    "InstanceType": {},
    "AvailabilityZone": {},
    "LogPublishingConfiguration": {
      "Fabric": {
        "ChaincodeLogs": {
          "Cloudwatch": {
            "Enabled": {}
          }
        },
        "PeerLogs": {
          "Cloudwatch": {
            "Enabled": {}
          }
        }
      }
    },
    "StateDB": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientRequestToken|object|true|none|none|
|MemberId|object|false|none|none|
|NodeConfiguration|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ProposalActions">ProposalActions</h2>
<!-- backwards compatibility -->
<a id="schemaproposalactions"></a>
<a id="schema_ProposalActions"></a>
<a id="tocSproposalactions"></a>
<a id="tocsproposalactions"></a>

```json
{
  "Invitations": {},
  "Removals": {}
}
```

<p> The actions to carry out if a proposal is <code>APPROVED</code>. </p> <p>Applies only to Hyperledger Fabric.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Invitations|object|false|none|none|
|Removals|object|false|none|none|

<h2 id="tocS_CreateProposalInput">CreateProposalInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateproposalinput"></a>
<a id="schema_CreateProposalInput"></a>
<a id="tocScreateproposalinput"></a>
<a id="tocscreateproposalinput"></a>

```json
{
  "ClientRequestToken": {},
  "MemberId": {},
  "Actions": {
    "Invitations": {},
    "Removals": {}
  },
  "Description": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientRequestToken|object|true|none|none|
|MemberId|object|true|none|none|
|Actions|object|true|none|none|
|Description|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DeleteAccessorInput">DeleteAccessorInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaccessorinput"></a>
<a id="schema_DeleteAccessorInput"></a>
<a id="tocSdeleteaccessorinput"></a>
<a id="tocsdeleteaccessorinput"></a>

```json
{}
```

<h2 id="tocS_DeleteMemberInput">DeleteMemberInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletememberinput"></a>
<a id="schema_DeleteMemberInput"></a>
<a id="tocSdeletememberinput"></a>
<a id="tocsdeletememberinput"></a>

```json
{}
```

<h2 id="tocS_DeleteNodeInput">DeleteNodeInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletenodeinput"></a>
<a id="schema_DeleteNodeInput"></a>
<a id="tocSdeletenodeinput"></a>
<a id="tocsdeletenodeinput"></a>

```json
{}
```

<h2 id="tocS_Edition">Edition</h2>
<!-- backwards compatibility -->
<a id="schemaedition"></a>
<a id="schema_Edition"></a>
<a id="tocSedition"></a>
<a id="tocsedition"></a>

```json
"STARTER"
```

<h2 id="tocS_Enabled">Enabled</h2>
<!-- backwards compatibility -->
<a id="schemaenabled"></a>
<a id="schema_Enabled"></a>
<a id="tocSenabled"></a>
<a id="tocsenabled"></a>

```json
true
```

<h2 id="tocS_GetAccessorInput">GetAccessorInput</h2>
<!-- backwards compatibility -->
<a id="schemagetaccessorinput"></a>
<a id="schema_GetAccessorInput"></a>
<a id="tocSgetaccessorinput"></a>
<a id="tocsgetaccessorinput"></a>

```json
{}
```

<h2 id="tocS_GetMemberInput">GetMemberInput</h2>
<!-- backwards compatibility -->
<a id="schemagetmemberinput"></a>
<a id="schema_GetMemberInput"></a>
<a id="tocSgetmemberinput"></a>
<a id="tocsgetmemberinput"></a>

```json
{}
```

<h2 id="tocS_Member">Member</h2>
<!-- backwards compatibility -->
<a id="schemamember"></a>
<a id="schema_Member"></a>
<a id="tocSmember"></a>
<a id="tocsmember"></a>

```json
{
  "NetworkId": {},
  "Id": {},
  "Name": {},
  "Description": {},
  "FrameworkAttributes": {
    "Fabric": {
      "AdminUsername": {},
      "CaEndpoint": {}
    }
  },
  "LogPublishingConfiguration": {
    "Fabric": {
      "CaLogs": {
        "Cloudwatch": {
          "Enabled": {}
        }
      }
    }
  },
  "Status": {},
  "CreationDate": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Arn": {},
  "KmsKeyArn": {}
}
```

<p>Member configuration properties.</p> <p>Applies only to Hyperledger Fabric.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NetworkId|object|false|none|none|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|FrameworkAttributes|object|false|none|none|
|LogPublishingConfiguration|object|false|none|none|
|Status|object|false|none|none|
|CreationDate|object|false|none|none|
|Tags|object|false|none|none|
|Arn|object|false|none|none|
|KmsKeyArn|object|false|none|none|

<h2 id="tocS_GetNetworkInput">GetNetworkInput</h2>
<!-- backwards compatibility -->
<a id="schemagetnetworkinput"></a>
<a id="schema_GetNetworkInput"></a>
<a id="tocSgetnetworkinput"></a>
<a id="tocsgetnetworkinput"></a>

```json
{}
```

<h2 id="tocS_Network">Network</h2>
<!-- backwards compatibility -->
<a id="schemanetwork"></a>
<a id="schema_Network"></a>
<a id="tocSnetwork"></a>
<a id="tocsnetwork"></a>

```json
{
  "Id": {},
  "Name": {},
  "Description": {},
  "Framework": {},
  "FrameworkVersion": {},
  "FrameworkAttributes": {
    "Fabric": {
      "OrderingServiceEndpoint": {},
      "Edition": {}
    },
    "Ethereum": {
      "ChainId": {}
    }
  },
  "VpcEndpointServiceName": {},
  "VotingPolicy": {
    "ApprovalThresholdPolicy": {
      "ThresholdPercentage": {},
      "ProposalDurationInHours": {},
      "ThresholdComparator": {}
    }
  },
  "Status": {},
  "CreationDate": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Arn": {}
}
```

Network configuration properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|Framework|object|false|none|none|
|FrameworkVersion|object|false|none|none|
|FrameworkAttributes|object|false|none|none|
|VpcEndpointServiceName|object|false|none|none|
|VotingPolicy|object|false|none|none|
|Status|object|false|none|none|
|CreationDate|object|false|none|none|
|Tags|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_GetNodeInput">GetNodeInput</h2>
<!-- backwards compatibility -->
<a id="schemagetnodeinput"></a>
<a id="schema_GetNodeInput"></a>
<a id="tocSgetnodeinput"></a>
<a id="tocsgetnodeinput"></a>

```json
{}
```

<h2 id="tocS_Node">Node</h2>
<!-- backwards compatibility -->
<a id="schemanode"></a>
<a id="schema_Node"></a>
<a id="tocSnode"></a>
<a id="tocsnode"></a>

```json
{
  "NetworkId": {},
  "MemberId": {},
  "Id": {},
  "InstanceType": {},
  "AvailabilityZone": {},
  "FrameworkAttributes": {
    "Fabric": {
      "PeerEndpoint": {},
      "PeerEventEndpoint": {}
    },
    "Ethereum": {
      "HttpEndpoint": {},
      "WebSocketEndpoint": {}
    }
  },
  "LogPublishingConfiguration": {
    "Fabric": {
      "ChaincodeLogs": {
        "Cloudwatch": {
          "Enabled": {}
        }
      },
      "PeerLogs": {
        "Cloudwatch": {
          "Enabled": {}
        }
      }
    }
  },
  "StateDB": {},
  "Status": {},
  "CreationDate": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Arn": {},
  "KmsKeyArn": {}
}
```

Configuration properties of a node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NetworkId|object|false|none|none|
|MemberId|object|false|none|none|
|Id|object|false|none|none|
|InstanceType|object|false|none|none|
|AvailabilityZone|object|false|none|none|
|FrameworkAttributes|object|false|none|none|
|LogPublishingConfiguration|object|false|none|none|
|StateDB|object|false|none|none|
|Status|object|false|none|none|
|CreationDate|object|false|none|none|
|Tags|object|false|none|none|
|Arn|object|false|none|none|
|KmsKeyArn|object|false|none|none|

<h2 id="tocS_GetProposalInput">GetProposalInput</h2>
<!-- backwards compatibility -->
<a id="schemagetproposalinput"></a>
<a id="schema_GetProposalInput"></a>
<a id="tocSgetproposalinput"></a>
<a id="tocsgetproposalinput"></a>

```json
{}
```

<h2 id="tocS_Proposal">Proposal</h2>
<!-- backwards compatibility -->
<a id="schemaproposal"></a>
<a id="schema_Proposal"></a>
<a id="tocSproposal"></a>
<a id="tocsproposal"></a>

```json
{
  "ProposalId": {},
  "NetworkId": {},
  "Description": {},
  "Actions": {
    "Invitations": {},
    "Removals": {}
  },
  "ProposedByMemberId": {},
  "ProposedByMemberName": {},
  "Status": {},
  "CreationDate": {},
  "ExpirationDate": {},
  "YesVoteCount": {},
  "NoVoteCount": {},
  "OutstandingVoteCount": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Arn": {}
}
```

<p>Properties of a proposal on a Managed Blockchain network.</p> <p>Applies only to Hyperledger Fabric.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProposalId|object|false|none|none|
|NetworkId|object|false|none|none|
|Description|object|false|none|none|
|Actions|object|false|none|none|
|ProposedByMemberId|object|false|none|none|
|ProposedByMemberName|object|false|none|none|
|Status|object|false|none|none|
|CreationDate|object|false|none|none|
|ExpirationDate|object|false|none|none|
|YesVoteCount|object|false|none|none|
|NoVoteCount|object|false|none|none|
|OutstandingVoteCount|object|false|none|none|
|Tags|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_InvitationStatus">InvitationStatus</h2>
<!-- backwards compatibility -->
<a id="schemainvitationstatus"></a>
<a id="schema_InvitationStatus"></a>
<a id="tocSinvitationstatus"></a>
<a id="tocsinvitationstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_NetworkSummary">NetworkSummary</h2>
<!-- backwards compatibility -->
<a id="schemanetworksummary"></a>
<a id="schema_NetworkSummary"></a>
<a id="tocSnetworksummary"></a>
<a id="tocsnetworksummary"></a>

```json
{
  "Id": {},
  "Name": {},
  "Description": {},
  "Framework": {},
  "FrameworkVersion": {},
  "Status": {},
  "CreationDate": {},
  "Arn": {}
}
```

A summary of network configuration properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|Framework|object|false|none|none|
|FrameworkVersion|object|false|none|none|
|Status|object|false|none|none|
|CreationDate|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_Invitation">Invitation</h2>
<!-- backwards compatibility -->
<a id="schemainvitation"></a>
<a id="schema_Invitation"></a>
<a id="tocSinvitation"></a>
<a id="tocsinvitation"></a>

```json
{
  "InvitationId": {},
  "CreationDate": {},
  "ExpirationDate": {},
  "Status": {},
  "NetworkSummary": {
    "Id": {},
    "Name": {},
    "Description": {},
    "Framework": {},
    "FrameworkVersion": {},
    "Status": {},
    "CreationDate": {},
    "Arn": {}
  },
  "Arn": {}
}
```

<p>An invitation to an Amazon Web Services account to create a member and join the network.</p> <p>Applies only to Hyperledger Fabric.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InvitationId|object|false|none|none|
|CreationDate|object|false|none|none|
|ExpirationDate|object|false|none|none|
|Status|object|false|none|none|
|NetworkSummary|[NetworkSummary](#schemanetworksummary)|false|none|A summary of network configuration properties.|
|Arn|object|false|none|none|

<h2 id="tocS_InvitationList">InvitationList</h2>
<!-- backwards compatibility -->
<a id="schemainvitationlist"></a>
<a id="schema_InvitationList"></a>
<a id="tocSinvitationlist"></a>
<a id="tocsinvitationlist"></a>

```json
[
  {
    "InvitationId": {},
    "CreationDate": {},
    "ExpirationDate": {},
    "Status": {},
    "NetworkSummary": {
      "Id": {},
      "Name": {},
      "Description": {},
      "Framework": {},
      "FrameworkVersion": {},
      "Status": {},
      "CreationDate": {},
      "Arn": {}
    },
    "Arn": {}
  }
]
```

<h2 id="tocS_PrincipalString">PrincipalString</h2>
<!-- backwards compatibility -->
<a id="schemaprincipalstring"></a>
<a id="schema_PrincipalString"></a>
<a id="tocSprincipalstring"></a>
<a id="tocsprincipalstring"></a>

```json
"string"
```

<h2 id="tocS_InviteAction">InviteAction</h2>
<!-- backwards compatibility -->
<a id="schemainviteaction"></a>
<a id="schema_InviteAction"></a>
<a id="tocSinviteaction"></a>
<a id="tocsinviteaction"></a>

```json
{
  "Principal": {}
}
```

<p>An action to invite a specific Amazon Web Services account to create a member and join the network. The <code>InviteAction</code> is carried out when a <code>Proposal</code> is <code>APPROVED</code>.</p> <p>Applies only to Hyperledger Fabric.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Principal|object|true|none|none|

<h2 id="tocS_IsOwned">IsOwned</h2>
<!-- backwards compatibility -->
<a id="schemaisowned"></a>
<a id="schema_IsOwned"></a>
<a id="tocSisowned"></a>
<a id="tocsisowned"></a>

```json
true
```

<h2 id="tocS_PaginationToken">PaginationToken</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken"></a>
<a id="schema_PaginationToken"></a>
<a id="tocSpaginationtoken"></a>
<a id="tocspaginationtoken"></a>

```json
"string"
```

<h2 id="tocS_ListAccessorsInput">ListAccessorsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistaccessorsinput"></a>
<a id="schema_ListAccessorsInput"></a>
<a id="tocSlistaccessorsinput"></a>
<a id="tocslistaccessorsinput"></a>

```json
{}
```

<h2 id="tocS_ProposalListMaxResults">ProposalListMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemaproposallistmaxresults"></a>
<a id="schema_ProposalListMaxResults"></a>
<a id="tocSproposallistmaxresults"></a>
<a id="tocsproposallistmaxresults"></a>

```json
1
```

<h2 id="tocS_ListInvitationsInput">ListInvitationsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistinvitationsinput"></a>
<a id="schema_ListInvitationsInput"></a>
<a id="tocSlistinvitationsinput"></a>
<a id="tocslistinvitationsinput"></a>

```json
{}
```

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_MemberStatus">MemberStatus</h2>
<!-- backwards compatibility -->
<a id="schemamemberstatus"></a>
<a id="schema_MemberStatus"></a>
<a id="tocSmemberstatus"></a>
<a id="tocsmemberstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_MemberListMaxResults">MemberListMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamemberlistmaxresults"></a>
<a id="schema_MemberListMaxResults"></a>
<a id="tocSmemberlistmaxresults"></a>
<a id="tocsmemberlistmaxresults"></a>

```json
1
```

<h2 id="tocS_ListMembersInput">ListMembersInput</h2>
<!-- backwards compatibility -->
<a id="schemalistmembersinput"></a>
<a id="schema_ListMembersInput"></a>
<a id="tocSlistmembersinput"></a>
<a id="tocslistmembersinput"></a>

```json
{}
```

<h2 id="tocS_MemberSummaryList">MemberSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemamembersummarylist"></a>
<a id="schema_MemberSummaryList"></a>
<a id="tocSmembersummarylist"></a>
<a id="tocsmembersummarylist"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "Description": {},
    "Status": {},
    "CreationDate": {},
    "IsOwned": {},
    "Arn": {}
  }
]
```

<h2 id="tocS_NetworkStatus">NetworkStatus</h2>
<!-- backwards compatibility -->
<a id="schemanetworkstatus"></a>
<a id="schema_NetworkStatus"></a>
<a id="tocSnetworkstatus"></a>
<a id="tocsnetworkstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_NetworkListMaxResults">NetworkListMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemanetworklistmaxresults"></a>
<a id="schema_NetworkListMaxResults"></a>
<a id="tocSnetworklistmaxresults"></a>
<a id="tocsnetworklistmaxresults"></a>

```json
1
```

<h2 id="tocS_ListNetworksInput">ListNetworksInput</h2>
<!-- backwards compatibility -->
<a id="schemalistnetworksinput"></a>
<a id="schema_ListNetworksInput"></a>
<a id="tocSlistnetworksinput"></a>
<a id="tocslistnetworksinput"></a>

```json
{}
```

<h2 id="tocS_NetworkSummaryList">NetworkSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemanetworksummarylist"></a>
<a id="schema_NetworkSummaryList"></a>
<a id="tocSnetworksummarylist"></a>
<a id="tocsnetworksummarylist"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "Description": {},
    "Framework": {},
    "FrameworkVersion": {},
    "Status": {},
    "CreationDate": {},
    "Arn": {}
  }
]
```

<h2 id="tocS_NodeStatus">NodeStatus</h2>
<!-- backwards compatibility -->
<a id="schemanodestatus"></a>
<a id="schema_NodeStatus"></a>
<a id="tocSnodestatus"></a>
<a id="tocsnodestatus"></a>

```json
"CREATING"
```

<h2 id="tocS_NodeListMaxResults">NodeListMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemanodelistmaxresults"></a>
<a id="schema_NodeListMaxResults"></a>
<a id="tocSnodelistmaxresults"></a>
<a id="tocsnodelistmaxresults"></a>

```json
1
```

<h2 id="tocS_ListNodesInput">ListNodesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistnodesinput"></a>
<a id="schema_ListNodesInput"></a>
<a id="tocSlistnodesinput"></a>
<a id="tocslistnodesinput"></a>

```json
{}
```

<h2 id="tocS_NodeSummaryList">NodeSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemanodesummarylist"></a>
<a id="schema_NodeSummaryList"></a>
<a id="tocSnodesummarylist"></a>
<a id="tocsnodesummarylist"></a>

```json
[
  {
    "Id": {},
    "Status": {},
    "CreationDate": {},
    "AvailabilityZone": {},
    "InstanceType": {},
    "Arn": {}
  }
]
```

<h2 id="tocS_ListProposalVotesInput">ListProposalVotesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistproposalvotesinput"></a>
<a id="schema_ListProposalVotesInput"></a>
<a id="tocSlistproposalvotesinput"></a>
<a id="tocslistproposalvotesinput"></a>

```json
{}
```

<h2 id="tocS_ProposalVoteList">ProposalVoteList</h2>
<!-- backwards compatibility -->
<a id="schemaproposalvotelist"></a>
<a id="schema_ProposalVoteList"></a>
<a id="tocSproposalvotelist"></a>
<a id="tocsproposalvotelist"></a>

```json
[
  {
    "Vote": {},
    "MemberName": {},
    "MemberId": {}
  }
]
```

<h2 id="tocS_ListProposalsInput">ListProposalsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistproposalsinput"></a>
<a id="schema_ListProposalsInput"></a>
<a id="tocSlistproposalsinput"></a>
<a id="tocslistproposalsinput"></a>

```json
{}
```

<h2 id="tocS_ProposalSummaryList">ProposalSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaproposalsummarylist"></a>
<a id="schema_ProposalSummaryList"></a>
<a id="tocSproposalsummarylist"></a>
<a id="tocsproposalsummarylist"></a>

```json
[
  {
    "ProposalId": {},
    "Description": {},
    "ProposedByMemberId": {},
    "ProposedByMemberName": {},
    "Status": {},
    "CreationDate": {},
    "ExpirationDate": {},
    "Arn": {}
  }
]
```

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{}
```

<h2 id="tocS_LogConfiguration">LogConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalogconfiguration"></a>
<a id="schema_LogConfiguration"></a>
<a id="tocSlogconfiguration"></a>
<a id="tocslogconfiguration"></a>

```json
{
  "Enabled": {}
}
```

A configuration for logging events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|

<h2 id="tocS_LogConfigurations">LogConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemalogconfigurations"></a>
<a id="schema_LogConfigurations"></a>
<a id="tocSlogconfigurations"></a>
<a id="tocslogconfigurations"></a>

```json
{
  "Cloudwatch": {
    "Enabled": {}
  }
}
```

A collection of log configurations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cloudwatch|object|false|none|none|

<h2 id="tocS_MemberFrameworkAttributes">MemberFrameworkAttributes</h2>
<!-- backwards compatibility -->
<a id="schemamemberframeworkattributes"></a>
<a id="schema_MemberFrameworkAttributes"></a>
<a id="tocSmemberframeworkattributes"></a>
<a id="tocsmemberframeworkattributes"></a>

```json
{
  "Fabric": {
    "AdminUsername": {},
    "CaEndpoint": {}
  }
}
```

Attributes relevant to a member for the blockchain framework that the Managed Blockchain network uses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Fabric|object|false|none|none|

<h2 id="tocS_UsernameString">UsernameString</h2>
<!-- backwards compatibility -->
<a id="schemausernamestring"></a>
<a id="schema_UsernameString"></a>
<a id="tocSusernamestring"></a>
<a id="tocsusernamestring"></a>

```json
"string"
```

<h2 id="tocS_MemberFabricAttributes">MemberFabricAttributes</h2>
<!-- backwards compatibility -->
<a id="schemamemberfabricattributes"></a>
<a id="schema_MemberFabricAttributes"></a>
<a id="tocSmemberfabricattributes"></a>
<a id="tocsmemberfabricattributes"></a>

```json
{
  "AdminUsername": {},
  "CaEndpoint": {}
}
```

Attributes of Hyperledger Fabric for a member in a Managed Blockchain network using the Hyperledger Fabric framework.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdminUsername|object|false|none|none|
|CaEndpoint|object|false|none|none|

<h2 id="tocS_PasswordString">PasswordString</h2>
<!-- backwards compatibility -->
<a id="schemapasswordstring"></a>
<a id="schema_PasswordString"></a>
<a id="tocSpasswordstring"></a>
<a id="tocspasswordstring"></a>

```json
"password"
```

<h2 id="tocS_MemberFabricConfiguration">MemberFabricConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamemberfabricconfiguration"></a>
<a id="schema_MemberFabricConfiguration"></a>
<a id="tocSmemberfabricconfiguration"></a>
<a id="tocsmemberfabricconfiguration"></a>

```json
{
  "AdminUsername": {},
  "AdminPassword": {}
}
```

Configuration properties for Hyperledger Fabric for a member in a Managed Blockchain network that is using the Hyperledger Fabric framework.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdminUsername|object|true|none|none|
|AdminPassword|object|true|none|none|

<h2 id="tocS_MemberSummary">MemberSummary</h2>
<!-- backwards compatibility -->
<a id="schemamembersummary"></a>
<a id="schema_MemberSummary"></a>
<a id="tocSmembersummary"></a>
<a id="tocsmembersummary"></a>

```json
{
  "Id": {},
  "Name": {},
  "Description": {},
  "Status": {},
  "CreationDate": {},
  "IsOwned": {},
  "Arn": {}
}
```

<p>A summary of configuration properties for a member.</p> <p>Applies only to Hyperledger Fabric.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|Status|object|false|none|none|
|CreationDate|object|false|none|none|
|IsOwned|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_NetworkFrameworkAttributes">NetworkFrameworkAttributes</h2>
<!-- backwards compatibility -->
<a id="schemanetworkframeworkattributes"></a>
<a id="schema_NetworkFrameworkAttributes"></a>
<a id="tocSnetworkframeworkattributes"></a>
<a id="tocsnetworkframeworkattributes"></a>

```json
{
  "Fabric": {
    "OrderingServiceEndpoint": {},
    "Edition": {}
  },
  "Ethereum": {
    "ChainId": {}
  }
}
```

Attributes relevant to the network for the blockchain framework that the network uses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Fabric|object|false|none|none|
|Ethereum|object|false|none|none|

<h2 id="tocS_NetworkEthereumAttributes">NetworkEthereumAttributes</h2>
<!-- backwards compatibility -->
<a id="schemanetworkethereumattributes"></a>
<a id="schema_NetworkEthereumAttributes"></a>
<a id="tocSnetworkethereumattributes"></a>
<a id="tocsnetworkethereumattributes"></a>

```json
{
  "ChainId": {}
}
```

Attributes of Ethereum for a network.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChainId|object|false|none|none|

<h2 id="tocS_NetworkFabricAttributes">NetworkFabricAttributes</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfabricattributes"></a>
<a id="schema_NetworkFabricAttributes"></a>
<a id="tocSnetworkfabricattributes"></a>
<a id="tocsnetworkfabricattributes"></a>

```json
{
  "OrderingServiceEndpoint": {},
  "Edition": {}
}
```

Attributes of Hyperledger Fabric for a network.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrderingServiceEndpoint|object|false|none|none|
|Edition|object|false|none|none|

<h2 id="tocS_NodeFrameworkAttributes">NodeFrameworkAttributes</h2>
<!-- backwards compatibility -->
<a id="schemanodeframeworkattributes"></a>
<a id="schema_NodeFrameworkAttributes"></a>
<a id="tocSnodeframeworkattributes"></a>
<a id="tocsnodeframeworkattributes"></a>

```json
{
  "Fabric": {
    "PeerEndpoint": {},
    "PeerEventEndpoint": {}
  },
  "Ethereum": {
    "HttpEndpoint": {},
    "WebSocketEndpoint": {}
  }
}
```

Attributes relevant to a node on a Managed Blockchain network for the blockchain framework that the network uses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Fabric|object|false|none|none|
|Ethereum|object|false|none|none|

<h2 id="tocS_NodeEthereumAttributes">NodeEthereumAttributes</h2>
<!-- backwards compatibility -->
<a id="schemanodeethereumattributes"></a>
<a id="schema_NodeEthereumAttributes"></a>
<a id="tocSnodeethereumattributes"></a>
<a id="tocsnodeethereumattributes"></a>

```json
{
  "HttpEndpoint": {},
  "WebSocketEndpoint": {}
}
```

Attributes of an Ethereum node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HttpEndpoint|object|false|none|none|
|WebSocketEndpoint|object|false|none|none|

<h2 id="tocS_NodeFabricAttributes">NodeFabricAttributes</h2>
<!-- backwards compatibility -->
<a id="schemanodefabricattributes"></a>
<a id="schema_NodeFabricAttributes"></a>
<a id="tocSnodefabricattributes"></a>
<a id="tocsnodefabricattributes"></a>

```json
{
  "PeerEndpoint": {},
  "PeerEventEndpoint": {}
}
```

Attributes of Hyperledger Fabric for a peer node on a Hyperledger Fabric network on Managed Blockchain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PeerEndpoint|object|false|none|none|
|PeerEventEndpoint|object|false|none|none|

<h2 id="tocS_NodeSummary">NodeSummary</h2>
<!-- backwards compatibility -->
<a id="schemanodesummary"></a>
<a id="schema_NodeSummary"></a>
<a id="tocSnodesummary"></a>
<a id="tocsnodesummary"></a>

```json
{
  "Id": {},
  "Status": {},
  "CreationDate": {},
  "AvailabilityZone": {},
  "InstanceType": {},
  "Arn": {}
}
```

A summary of configuration properties for a node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Status|object|false|none|none|
|CreationDate|object|false|none|none|
|AvailabilityZone|object|false|none|none|
|InstanceType|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_ProposalStatus">ProposalStatus</h2>
<!-- backwards compatibility -->
<a id="schemaproposalstatus"></a>
<a id="schema_ProposalStatus"></a>
<a id="tocSproposalstatus"></a>
<a id="tocsproposalstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_VoteCount">VoteCount</h2>
<!-- backwards compatibility -->
<a id="schemavotecount"></a>
<a id="schema_VoteCount"></a>
<a id="tocSvotecount"></a>
<a id="tocsvotecount"></a>

```json
0
```

<h2 id="tocS_ProposalSummary">ProposalSummary</h2>
<!-- backwards compatibility -->
<a id="schemaproposalsummary"></a>
<a id="schema_ProposalSummary"></a>
<a id="tocSproposalsummary"></a>
<a id="tocsproposalsummary"></a>

```json
{
  "ProposalId": {},
  "Description": {},
  "ProposedByMemberId": {},
  "ProposedByMemberName": {},
  "Status": {},
  "CreationDate": {},
  "ExpirationDate": {},
  "Arn": {}
}
```

<p>Properties of a proposal.</p> <p>Applies only to Hyperledger Fabric.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProposalId|object|false|none|none|
|Description|object|false|none|none|
|ProposedByMemberId|object|false|none|none|
|ProposedByMemberName|object|false|none|none|
|Status|object|false|none|none|
|CreationDate|object|false|none|none|
|ExpirationDate|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_VoteSummary">VoteSummary</h2>
<!-- backwards compatibility -->
<a id="schemavotesummary"></a>
<a id="schema_VoteSummary"></a>
<a id="tocSvotesummary"></a>
<a id="tocsvotesummary"></a>

```json
{
  "Vote": {},
  "MemberName": {},
  "MemberId": {}
}
```

<p> Properties of an individual vote that a member cast for a proposal. </p> <p>Applies only to Hyperledger Fabric.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Vote|object|false|none|none|
|MemberName|object|false|none|none|
|MemberId|object|false|none|none|

<h2 id="tocS_RejectInvitationInput">RejectInvitationInput</h2>
<!-- backwards compatibility -->
<a id="schemarejectinvitationinput"></a>
<a id="schema_RejectInvitationInput"></a>
<a id="tocSrejectinvitationinput"></a>
<a id="tocsrejectinvitationinput"></a>

```json
{}
```

<h2 id="tocS_RemoveAction">RemoveAction</h2>
<!-- backwards compatibility -->
<a id="schemaremoveaction"></a>
<a id="schema_RemoveAction"></a>
<a id="tocSremoveaction"></a>
<a id="tocsremoveaction"></a>

```json
{
  "MemberId": {}
}
```

<p>An action to remove a member from a Managed Blockchain network as the result of a removal proposal that is <code>APPROVED</code>. The member and all associated resources are deleted from the network.</p> <p>Applies only to Hyperledger Fabric.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MemberId|object|true|none|none|

<h2 id="tocS_TagKeyList">TagKeyList</h2>
<!-- backwards compatibility -->
<a id="schematagkeylist"></a>
<a id="schema_TagKeyList"></a>
<a id="tocStagkeylist"></a>
<a id="tocstagkeylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateMemberInput">UpdateMemberInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatememberinput"></a>
<a id="schema_UpdateMemberInput"></a>
<a id="tocSupdatememberinput"></a>
<a id="tocsupdatememberinput"></a>

```json
{
  "LogPublishingConfiguration": {
    "Fabric": {
      "CaLogs": {
        "Cloudwatch": {
          "Enabled": {}
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogPublishingConfiguration|object|false|none|none|

<h2 id="tocS_UpdateNodeInput">UpdateNodeInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenodeinput"></a>
<a id="schema_UpdateNodeInput"></a>
<a id="tocSupdatenodeinput"></a>
<a id="tocsupdatenodeinput"></a>

```json
{
  "MemberId": {},
  "LogPublishingConfiguration": {
    "Fabric": {
      "ChaincodeLogs": {
        "Cloudwatch": {
          "Enabled": {}
        }
      },
      "PeerLogs": {
        "Cloudwatch": {
          "Enabled": {}
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MemberId|object|false|none|none|
|LogPublishingConfiguration|object|false|none|none|

<h2 id="tocS_VoteValue">VoteValue</h2>
<!-- backwards compatibility -->
<a id="schemavotevalue"></a>
<a id="schema_VoteValue"></a>
<a id="tocSvotevalue"></a>
<a id="tocsvotevalue"></a>

```json
"YES"
```

<h2 id="tocS_VoteOnProposalInput">VoteOnProposalInput</h2>
<!-- backwards compatibility -->
<a id="schemavoteonproposalinput"></a>
<a id="schema_VoteOnProposalInput"></a>
<a id="tocSvoteonproposalinput"></a>
<a id="tocsvoteonproposalinput"></a>

```json
{
  "VoterMemberId": {},
  "Vote": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VoterMemberId|object|true|none|none|
|Vote|object|true|none|none|
