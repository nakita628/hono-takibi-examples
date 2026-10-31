<h1 id="amazon-codeguru-reviewer">Amazon CodeGuru Reviewer v2019-09-19</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>This section provides documentation for the Amazon CodeGuru Reviewer API operations. CodeGuru Reviewer is a service that uses program analysis and machine learning to detect potential defects that are difficult for developers to find and recommends fixes in your Java and Python code.</p> <p>By proactively detecting and providing recommendations for addressing code defects and implementing best practices, CodeGuru Reviewer improves the overall quality and maintainability of your code base during the code review stage. For more information about CodeGuru Reviewer, see the <i> <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/welcome.html">Amazon CodeGuru Reviewer User Guide</a>.</i> </p> <p>To improve the security of your CodeGuru Reviewer API calls, you can establish a private connection between your VPC and CodeGuru Reviewer by creating an <i>interface VPC endpoint</i>. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/vpc-interface-endpoints.html">CodeGuru Reviewer and interface VPC endpoints (Amazon Web Services PrivateLink)</a> in the <i>Amazon CodeGuru Reviewer User Guide</i>.</p>

Base URLs:

* <a href="http://codeguru-reviewer.us-east-1.amazonaws.com">http://codeguru-reviewer.us-east-1.amazonaws.com</a> - The CodeGuruReviewer multi-region endpoint

* <a href="https://codeguru-reviewer.us-east-1.amazonaws.com">https://codeguru-reviewer.us-east-1.amazonaws.com</a> - The CodeGuruReviewer multi-region endpoint

* <a href="http://codeguru-reviewer.cn-north-1.amazonaws.com.cn">http://codeguru-reviewer.cn-north-1.amazonaws.com.cn</a> - The CodeGuruReviewer endpoint for China (Beijing) and China (Ningxia)

* <a href="https://codeguru-reviewer.cn-north-1.amazonaws.com.cn">https://codeguru-reviewer.cn-north-1.amazonaws.com.cn</a> - The CodeGuruReviewer endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/codeguru-reviewer/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-codeguru-reviewer-default">Default</h1>

## ListRepositoryAssociations

<a id="opIdListRepositoryAssociations"></a>

> Code samples

```bash
curl https://codeguru-reviewer.us-east-1.amazonaws.com/associations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /associations`

Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html">RepositoryAssociationSummary</a> objects that contain summary information about a repository association. You can filter the returned list by <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-ProviderType">ProviderType</a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Name">Name</a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-State">State</a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Owner">Owner</a>.

<h3 id="listrepositoryassociations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ProviderType|query|[[ProviderType](#schemaprovidertype)]|false|List of provider types to use as a filter.|
|State|query|[[RepositoryAssociationState](#schemarepositoryassociationstate)]|false|<p>List of repository association states to use as a filter.</p> <p>The valid repository association states are:</p> <ul> <li> <p> <b>Associated</b>: The repository association is complete.</p> </li> <li> <p> <b>Associating</b>: CodeGuru Reviewer is:</p> <ul> <li> <p>Setting up pull request notifications. This is required for pull requests to trigger a CodeGuru Reviewer review.</p> <note> <p>If your repository <code>ProviderType</code> is <code>GitHub</code>, <code>GitHub Enterprise Server</code>, or <code>Bitbucket</code>, CodeGuru Reviewer creates webhooks in your repository to trigger CodeGuru Reviewer reviews. If you delete these webhooks, reviews of code in your repository cannot be triggered.</p> </note> </li> <li> <p>Setting up source code access. This is required for CodeGuru Reviewer to securely clone code in your repository.</p> </li> </ul> </li> <li> <p> <b>Failed</b>: The repository failed to associate or disassociate.</p> </li> <li> <p> <b>Disassociating</b>: CodeGuru Reviewer is removing the repository's pull request notifications and source code access.</p> </li> <li> <p> <b>Disassociated</b>: CodeGuru Reviewer successfully disassociated the repository. You can create a new association with this repository if you want to review source code in it later. You can control access to code reviews created in anassociated repository with tags after it has been disassociated. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/auth-and-access-control-using-tags.html">Using tags to control access to associated repositories</a> in the <i>Amazon CodeGuru Reviewer User Guide</i>.</p> </li> </ul>|
|Name|query|[[Name](#schemaname)]|false|List of repository names to use as a filter.|
|Owner|query|[[Owner](#schemaowner)]|false|List of owners to use as a filter. For Amazon Web Services CodeCommit, it is the name of the CodeCommit account that was used to associate the repository. For other repository source providers, such as Bitbucket and GitHub Enterprise Server, this is name of the account that was used to associate the repository. |
|MaxResults|query|integer|false|The maximum number of repository association results returned by <code>ListRepositoryAssociations</code> in paginated output. When this parameter is used, <code>ListRepositoryAssociations</code> only returns <code>maxResults</code> results in a single page with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListRepositoryAssociations</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, <code>ListRepositoryAssociations</code> returns up to 100 results and a <code>nextToken</code> value if applicable. |
|NextToken|query|string|false|<p>The <code>nextToken</code> value returned from a previous paginated <code>ListRepositoryAssociations</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>Treat this token as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>|
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
|ProviderType|CodeCommit|
|ProviderType|GitHub|
|ProviderType|Bitbucket|
|ProviderType|GitHubEnterpriseServer|
|ProviderType|S3Bucket|
|State|Associated|
|State|Associating|
|State|Failed|
|State|Disassociating|
|State|Disassociated|

> Example responses

> 200 Response

```json
{
  "RepositoryAssociationSummaries": {},
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

<h3 id="listrepositoryassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRepositoryAssociationsResponse](#schemalistrepositoryassociationsresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateRepository

<a id="opIdAssociateRepository"></a>

> Code samples

```bash
curl https://codeguru-reviewer.us-east-1.amazonaws.com/associations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Repository": {
      "CodeCommit": {
        "Name": {}
      },
      "Bitbucket": {
        "Name": {},
        "ConnectionArn": {},
        "Owner": {}
      },
      "GitHubEnterpriseServer": {
        "Name": {},
        "ConnectionArn": {},
        "Owner": {}
      },
      "S3Bucket": {
        "Name": {},
        "BucketName": {}
      }
    },
    "ClientRequestToken": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "KMSKeyDetails": {
      "KMSKeyId": {},
      "EncryptionOption": {}
    }
  }'
```

`POST /associations`

<p>Use to associate an Amazon Web Services CodeCommit repository or a repository managed by Amazon Web Services CodeStar Connections with Amazon CodeGuru Reviewer. When you associate a repository, CodeGuru Reviewer reviews source code changes in the repository's pull requests and provides automatic recommendations. You can view recommendations using the CodeGuru Reviewer console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/recommendations.html">Recommendations in Amazon CodeGuru Reviewer</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <p>If you associate a CodeCommit or S3 repository, it must be in the same Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are configured.</p> <p>Bitbucket and GitHub Enterprise Server repositories are managed by Amazon Web Services CodeStar Connections to connect to CodeGuru Reviewer. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-associate-repository.html">Associate a repository</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <note> <p>You cannot use the CodeGuru Reviewer SDK or the Amazon Web Services CLI to associate a GitHub repository with Amazon CodeGuru Reviewer. To associate a GitHub repository, use the console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-with-guru.html">Getting started with CodeGuru Reviewer</a> in the <i>CodeGuru Reviewer User Guide.</i> </p> </note>

> Body parameter

```json
{
  "Repository": {
    "CodeCommit": {
      "Name": {}
    },
    "Bitbucket": {
      "Name": {},
      "ConnectionArn": {},
      "Owner": {}
    },
    "GitHubEnterpriseServer": {
      "Name": {},
      "ConnectionArn": {},
      "Owner": {}
    },
    "S3Bucket": {
      "Name": {},
      "BucketName": {}
    }
  },
  "ClientRequestToken": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "KMSKeyDetails": {
    "KMSKeyId": {},
    "EncryptionOption": {}
  }
}
```

<h3 id="associaterepository-parameters">Parameters</h3>

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
|» Repository|body|object|true|Information about an associated Amazon Web Services CodeCommit repository or an associated repository that is managed by Amazon Web Services CodeStar Connections (for example, Bitbucket). This <code>Repository</code> object is not used if your source code is in an associated GitHub repository.|
|» » CodeCommit|body|object|false|none|
|» » » Name|body|object|true|none|
|» » Bitbucket|body|object|false|none|
|» » » Name|body|object|true|none|
|» » » ConnectionArn|body|object|true|none|
|» » » Owner|body|object|true|none|
|» » GitHubEnterpriseServer|body|object|false|none|
|» » » Name|body|object|true|none|
|» » » ConnectionArn|body|object|true|none|
|» » » Owner|body|object|true|none|
|» » S3Bucket|body|[S3Repository](#schemas3repository)|false|Information about a repository in an S3 bucket.|
|» ClientRequestToken|body|string|false|Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate repository associations if there are failures and retries.|
|» Tags|body|object|false|<p>An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:</p> <ul> <li> <p>A <i>tag key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag keys are case sensitive.</p> </li> <li> <p>An optional field known as a <i>tag value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case sensitive.</p> </li> </ul>|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» KMSKeyDetails|body|object|false|<p>An object that contains:</p> <ul> <li> <p>The encryption option for a repository association. It is either owned by Amazon Web Services Key Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed (<code>CUSTOMER_MANAGED_CMK</code>).</p> </li> <li> <p>The ID of the Amazon Web Services KMS key that is associated with a repository association.</p> </li> </ul>|
|» » KMSKeyId|body|object|false|none|
|» » EncryptionOption|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "RepositoryAssociation": {
    "AssociationId": {},
    "AssociationArn": {},
    "ConnectionArn": {},
    "Name": {},
    "Owner": {},
    "ProviderType": {},
    "State": {},
    "StateReason": {},
    "LastUpdatedTimeStamp": {},
    "CreatedTimeStamp": {},
    "KMSKeyDetails": {
      "KMSKeyId": {},
      "EncryptionOption": {}
    },
    "S3RepositoryDetails": {
      "BucketName": {},
      "CodeArtifacts": {
        "SourceCodeArtifactsObjectKey": {},
        "BuildArtifactsObjectKey": {}
      }
    }
  },
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

> 484 Response

```json
null
```

<h3 id="associaterepository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateRepositoryResponse](#schemaassociaterepositoryresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCodeReview

<a id="opIdCreateCodeReview"></a>

> Code samples

```bash
curl https://codeguru-reviewer.us-east-1.amazonaws.com/codereviews \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "RepositoryAssociationArn": "string",
    "Type": {
      "RepositoryAnalysis": {
        "RepositoryHead": {
          "BranchName": {}
        },
        "SourceCodeType": {
          "CommitDiff": {
            "SourceCommit": {},
            "DestinationCommit": {},
            "MergeBaseCommit": {}
          },
          "RepositoryHead": {
            "BranchName": {}
          },
          "BranchDiff": {
            "SourceBranchName": {},
            "DestinationBranchName": {}
          },
          "S3BucketRepository": {
            "Name": {},
            "Details": {
              "BucketName": {},
              "CodeArtifacts": {
                "SourceCodeArtifactsObjectKey": {},
                "BuildArtifactsObjectKey": {}
              }
            }
          },
          "RequestMetadata": {
            "RequestId": {},
            "Requester": {},
            "EventInfo": {
              "Name": {},
              "State": {}
            },
            "VendorName": {}
          }
        }
      },
      "AnalysisTypes": {}
    },
    "ClientRequestToken": "string"
  }'
```

`POST /codereviews`

Use to create a code review with a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReviewType.html">CodeReviewType</a> of <code>RepositoryAnalysis</code>. This type of code review analyzes all code under a specified branch in an associated repository. <code>PullRequest</code> code reviews are automatically triggered by a pull request.

> Body parameter

```json
{
  "Name": "string",
  "RepositoryAssociationArn": "string",
  "Type": {
    "RepositoryAnalysis": {
      "RepositoryHead": {
        "BranchName": {}
      },
      "SourceCodeType": {
        "CommitDiff": {
          "SourceCommit": {},
          "DestinationCommit": {},
          "MergeBaseCommit": {}
        },
        "RepositoryHead": {
          "BranchName": {}
        },
        "BranchDiff": {
          "SourceBranchName": {},
          "DestinationBranchName": {}
        },
        "S3BucketRepository": {
          "Name": {},
          "Details": {
            "BucketName": {},
            "CodeArtifacts": {
              "SourceCodeArtifactsObjectKey": {},
              "BuildArtifactsObjectKey": {}
            }
          }
        },
        "RequestMetadata": {
          "RequestId": {},
          "Requester": {},
          "EventInfo": {
            "Name": {},
            "State": {}
          },
          "VendorName": {}
        }
      }
    },
    "AnalysisTypes": {}
  },
  "ClientRequestToken": "string"
}
```

<h3 id="createcodereview-parameters">Parameters</h3>

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
|» Name|body|string|true|The name of the code review. The name of each code review in your Amazon Web Services account must be unique.|
|» RepositoryAssociationArn|body|string|true|<p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.</p> <p>A code review can only be created on an associated repository. This is the ARN of the associated repository.</p>|
|» Type|body|object|true|<p>The type of a code review. There are two code review types:</p> <ul> <li> <p> <code>PullRequest</code> - A code review that is automatically triggered by a pull request on an associated repository.</p> </li> <li> <p> <code>RepositoryAnalysis</code> - A code review that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview">CreateCodeReview</a>.</p> </li> </ul>|
|» » RepositoryAnalysis|body|object|false|none|
|» » » RepositoryHead|body|object|false|none|
|» » » » BranchName|body|object|true|none|
|» » » SourceCodeType|body|[SourceCodeType](#schemasourcecodetype)|false|Specifies the source code that is analyzed in a code review.|
|» » AnalysisTypes|body|object|false|none|
|» ClientRequestToken|body|string|false|Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate code reviews if there are failures and retries.|

> Example responses

> 200 Response

```json
{
  "CodeReview": {
    "Name": {},
    "CodeReviewArn": {},
    "RepositoryName": {},
    "Owner": {},
    "ProviderType": {},
    "State": {},
    "StateReason": {},
    "CreatedTimeStamp": {},
    "LastUpdatedTimeStamp": {},
    "Type": {},
    "PullRequestId": {},
    "SourceCodeType": {
      "CommitDiff": {
        "SourceCommit": {},
        "DestinationCommit": {},
        "MergeBaseCommit": {}
      },
      "RepositoryHead": {
        "BranchName": {}
      },
      "BranchDiff": {
        "SourceBranchName": {},
        "DestinationBranchName": {}
      },
      "S3BucketRepository": {
        "Name": {},
        "Details": {
          "BucketName": {},
          "CodeArtifacts": {
            "SourceCodeArtifactsObjectKey": {},
            "BuildArtifactsObjectKey": {}
          }
        }
      },
      "RequestMetadata": {
        "RequestId": {},
        "Requester": {},
        "EventInfo": {
          "Name": {},
          "State": {}
        },
        "VendorName": {}
      }
    },
    "AssociationArn": {},
    "Metrics": {
      "MeteredLinesOfCodeCount": {},
      "SuppressedLinesOfCodeCount": {},
      "FindingsCount": {}
    },
    "AnalysisTypes": {},
    "ConfigFileState": {}
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

> 485 Response

```json
null
```

<h3 id="createcodereview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCodeReviewResponse](#schemacreatecodereviewresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCodeReview

<a id="opIdDescribeCodeReview"></a>

> Code samples

```bash
curl https://codeguru-reviewer.us-east-1.amazonaws.com/codereviews/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /codereviews/{CodeReviewArn}`

Returns the metadata associated with the code review along with its status.

<h3 id="describecodereview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CodeReviewArn|path|string|true|The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object. |
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
  "CodeReview": {
    "Name": {},
    "CodeReviewArn": {},
    "RepositoryName": {},
    "Owner": {},
    "ProviderType": {},
    "State": {},
    "StateReason": {},
    "CreatedTimeStamp": {},
    "LastUpdatedTimeStamp": {},
    "Type": {},
    "PullRequestId": {},
    "SourceCodeType": {
      "CommitDiff": {
        "SourceCommit": {},
        "DestinationCommit": {},
        "MergeBaseCommit": {}
      },
      "RepositoryHead": {
        "BranchName": {}
      },
      "BranchDiff": {
        "SourceBranchName": {},
        "DestinationBranchName": {}
      },
      "S3BucketRepository": {
        "Name": {},
        "Details": {
          "BucketName": {},
          "CodeArtifacts": {
            "SourceCodeArtifactsObjectKey": {},
            "BuildArtifactsObjectKey": {}
          }
        }
      },
      "RequestMetadata": {
        "RequestId": {},
        "Requester": {},
        "EventInfo": {
          "Name": {},
          "State": {}
        },
        "VendorName": {}
      }
    },
    "AssociationArn": {},
    "Metrics": {
      "MeteredLinesOfCodeCount": {},
      "SuppressedLinesOfCodeCount": {},
      "FindingsCount": {}
    },
    "AnalysisTypes": {},
    "ConfigFileState": {}
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

<h3 id="describecodereview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCodeReviewResponse](#schemadescribecodereviewresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRecommendationFeedback

<a id="opIdDescribeRecommendationFeedback"></a>

> Code samples

```bash
curl 'https://codeguru-reviewer.us-east-1.amazonaws.com/feedback/string#RecommendationId?RecommendationId=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /feedback/{CodeReviewArn}#RecommendationId`

Describes the customer feedback for a CodeGuru Reviewer recommendation.

<h3 id="describerecommendationfeedback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CodeReviewArn|path|string|true|The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object. |
|RecommendationId|query|string|true|The recommendation ID that can be used to track the provided recommendations and then to collect the feedback.|
|UserId|query|string|false|<p>Optional parameter to describe the feedback for a given user. If this is not supplied, it defaults to the user making the request.</p> <p> The <code>UserId</code> is an IAM principal that can be specified as an Amazon Web Services account ID or an Amazon Resource Name (ARN). For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying"> Specifying a Principal</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p>|
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
  "RecommendationFeedback": {
    "CodeReviewArn": {},
    "RecommendationId": {},
    "Reactions": {},
    "UserId": {},
    "CreatedTimeStamp": {},
    "LastUpdatedTimeStamp": {}
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

<h3 id="describerecommendationfeedback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRecommendationFeedbackResponse](#schemadescriberecommendationfeedbackresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRepositoryAssociation

<a id="opIdDescribeRepositoryAssociation"></a>

> Code samples

```bash
curl https://codeguru-reviewer.us-east-1.amazonaws.com/associations/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /associations/{AssociationArn}`

Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object that contains information about the requested repository association.

<h3 id="describerepositoryassociation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AssociationArn|path|string|true|The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.|
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
  "RepositoryAssociation": {
    "AssociationId": {},
    "AssociationArn": {},
    "ConnectionArn": {},
    "Name": {},
    "Owner": {},
    "ProviderType": {},
    "State": {},
    "StateReason": {},
    "LastUpdatedTimeStamp": {},
    "CreatedTimeStamp": {},
    "KMSKeyDetails": {
      "KMSKeyId": {},
      "EncryptionOption": {}
    },
    "S3RepositoryDetails": {
      "BucketName": {},
      "CodeArtifacts": {
        "SourceCodeArtifactsObjectKey": {},
        "BuildArtifactsObjectKey": {}
      }
    }
  },
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

> 484 Response

```json
null
```

<h3 id="describerepositoryassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRepositoryAssociationResponse](#schemadescriberepositoryassociationresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateRepository

<a id="opIdDisassociateRepository"></a>

> Code samples

```bash
curl https://codeguru-reviewer.us-east-1.amazonaws.com/associations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /associations/{AssociationArn}`

Removes the association between Amazon CodeGuru Reviewer and a repository.

<h3 id="disassociaterepository-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AssociationArn|path|string|true|The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.|
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
  "RepositoryAssociation": {
    "AssociationId": {},
    "AssociationArn": {},
    "ConnectionArn": {},
    "Name": {},
    "Owner": {},
    "ProviderType": {},
    "State": {},
    "StateReason": {},
    "LastUpdatedTimeStamp": {},
    "CreatedTimeStamp": {},
    "KMSKeyDetails": {
      "KMSKeyId": {},
      "EncryptionOption": {}
    },
    "S3RepositoryDetails": {
      "BucketName": {},
      "CodeArtifacts": {
        "SourceCodeArtifactsObjectKey": {},
        "BuildArtifactsObjectKey": {}
      }
    }
  },
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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="disassociaterepository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateRepositoryResponse](#schemadisassociaterepositoryresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCodeReviews

<a id="opIdListCodeReviews"></a>

> Code samples

```bash
curl 'https://codeguru-reviewer.us-east-1.amazonaws.com/codereviews#Type?Type=PullRequest' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /codereviews#Type`

Lists all the code reviews that the customer has created in the past 90 days.

<h3 id="listcodereviews-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ProviderTypes|query|[[ProviderType](#schemaprovidertype)]|false|List of provider types for filtering that needs to be applied before displaying the result. For example, <code>providerTypes=[GitHub]</code> lists code reviews from GitHub.|
|States|query|[[JobState](#schemajobstate)]|false|<p>List of states for filtering that needs to be applied before displaying the result. For example, <code>states=[Pending]</code> lists code reviews in the Pending state.</p> <p>The valid code review states are:</p> <ul> <li> <p> <code>Completed</code>: The code review is complete.</p> </li> <li> <p> <code>Pending</code>: The code review started and has not completed or failed.</p> </li> <li> <p> <code>Failed</code>: The code review failed.</p> </li> <li> <p> <code>Deleting</code>: The code review is being deleted.</p> </li> </ul>|
|RepositoryNames|query|[[Name](#schemaname)]|false|List of repository names for filtering that needs to be applied before displaying the result.|
|Type|query|string|true|The type of code reviews to list in the response.|
|MaxResults|query|integer|false|The maximum number of results that are returned per call. The default is 100.|
|NextToken|query|string|false|If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.|
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
|ProviderTypes|CodeCommit|
|ProviderTypes|GitHub|
|ProviderTypes|Bitbucket|
|ProviderTypes|GitHubEnterpriseServer|
|ProviderTypes|S3Bucket|
|States|Completed|
|States|Pending|
|States|Failed|
|States|Deleting|
|Type|PullRequest|
|Type|RepositoryAnalysis|

> Example responses

> 200 Response

```json
{
  "CodeReviewSummaries": {},
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

<h3 id="listcodereviews-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCodeReviewsResponse](#schemalistcodereviewsresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRecommendationFeedback

<a id="opIdListRecommendationFeedback"></a>

> Code samples

```bash
curl https://codeguru-reviewer.us-east-1.amazonaws.com/feedback/string/RecommendationFeedback \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /feedback/{CodeReviewArn}/RecommendationFeedback`

Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RecommendationFeedbackSummary.html">RecommendationFeedbackSummary</a> objects that contain customer recommendation feedback for all CodeGuru Reviewer users.

<h3 id="listrecommendationfeedback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.|
|MaxResults|query|integer|false|The maximum number of results that are returned per call. The default is 100.|
|CodeReviewArn|path|string|true|The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object. |
|UserIds|query|[[UserId](#schemauserid)]|false|<p>An Amazon Web Services user's account ID or Amazon Resource Name (ARN). Use this ID to query the recommendation feedback for a code review from that user.</p> <p> The <code>UserId</code> is an IAM principal that can be specified as an Amazon Web Services account ID or an Amazon Resource Name (ARN). For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying"> Specifying a Principal</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p>|
|RecommendationIds|query|[[RecommendationId](#schemarecommendationid)]|false|Used to query the recommendation feedback for a given recommendation.|
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
  "RecommendationFeedbackSummaries": {},
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

<h3 id="listrecommendationfeedback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRecommendationFeedbackResponse](#schemalistrecommendationfeedbackresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRecommendations

<a id="opIdListRecommendations"></a>

> Code samples

```bash
curl https://codeguru-reviewer.us-east-1.amazonaws.com/codereviews/string/Recommendations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /codereviews/{CodeReviewArn}/Recommendations`

Returns the list of all recommendations for a completed code review.

<h3 id="listrecommendations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Pagination token.|
|MaxResults|query|integer|false|The maximum number of results that are returned per call. The default is 100.|
|CodeReviewArn|path|string|true|The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object. |
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
  "RecommendationSummaries": {},
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

<h3 id="listrecommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRecommendationsResponse](#schemalistrecommendationsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://codeguru-reviewer.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

Returns the list of tags associated with an associated repository resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.|
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://codeguru-reviewer.us-east-1.amazonaws.com/tags/string \
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

Adds one or more tags to an associated repository.

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
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Tags|body|object|true|<p>An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:</p> <ul> <li> <p>A <i>tag key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag keys are case sensitive.</p> </li> <li> <p>An optional field known as a <i>tag value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case sensitive.</p> </li> </ul>|
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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutRecommendationFeedback

<a id="opIdPutRecommendationFeedback"></a>

> Code samples

```bash
curl https://codeguru-reviewer.us-east-1.amazonaws.com/feedback \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CodeReviewArn": "string",
    "RecommendationId": "string",
    "Reactions": [
      "ThumbsUp"
    ]
  }'
```

`PUT /feedback`

Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten.

> Body parameter

```json
{
  "CodeReviewArn": "string",
  "RecommendationId": "string",
  "Reactions": [
    "ThumbsUp"
  ]
}
```

<h3 id="putrecommendationfeedback-parameters">Parameters</h3>

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
|» CodeReviewArn|body|string|true|The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object. |
|» RecommendationId|body|string|true|The recommendation ID that can be used to track the provided recommendations and then to collect the feedback.|
|» Reactions|body|[[Reaction](#schemareaction)]|true|List for storing reactions. Reactions are utf-8 text code for emojis. If you send an empty list it clears all your feedback.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Reactions|ThumbsUp|
|» Reactions|ThumbsDown|

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

<h3 id="putrecommendationfeedback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutRecommendationFeedbackResponse](#schemaputrecommendationfeedbackresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://codeguru-reviewer.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

Removes a tag from an associated repository.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|A list of the keys for each tag you want to remove from an associated repository.|
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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateRepositoryResponse">AssociateRepositoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociaterepositoryresponse"></a>
<a id="schema_AssociateRepositoryResponse"></a>
<a id="tocSassociaterepositoryresponse"></a>
<a id="tocsassociaterepositoryresponse"></a>

```json
{
  "RepositoryAssociation": {
    "AssociationId": {},
    "AssociationArn": {},
    "ConnectionArn": {},
    "Name": {},
    "Owner": {},
    "ProviderType": {},
    "State": {},
    "StateReason": {},
    "LastUpdatedTimeStamp": {},
    "CreatedTimeStamp": {},
    "KMSKeyDetails": {
      "KMSKeyId": {},
      "EncryptionOption": {}
    },
    "S3RepositoryDetails": {
      "BucketName": {},
      "CodeArtifacts": {
        "SourceCodeArtifactsObjectKey": {},
        "BuildArtifactsObjectKey": {}
      }
    }
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
|RepositoryAssociation|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CodeCommitRepository">CodeCommitRepository</h2>
<!-- backwards compatibility -->
<a id="schemacodecommitrepository"></a>
<a id="schema_CodeCommitRepository"></a>
<a id="tocScodecommitrepository"></a>
<a id="tocscodecommitrepository"></a>

```json
{
  "Name": {}
}
```

Information about an Amazon Web Services CodeCommit repository. The CodeCommit repository must be in the same Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are configured.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_ThirdPartySourceRepository">ThirdPartySourceRepository</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartysourcerepository"></a>
<a id="schema_ThirdPartySourceRepository"></a>
<a id="tocSthirdpartysourcerepository"></a>
<a id="tocsthirdpartysourcerepository"></a>

```json
{
  "Name": {},
  "ConnectionArn": {},
  "Owner": {}
}
```

Information about a third-party source repository connected to CodeGuru Reviewer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ConnectionArn|object|true|none|none|
|Owner|object|true|none|none|

<h2 id="tocS_S3Repository">S3Repository</h2>
<!-- backwards compatibility -->
<a id="schemas3repository"></a>
<a id="schema_S3Repository"></a>
<a id="tocSs3repository"></a>
<a id="tocss3repository"></a>

```json
{
  "Name": {},
  "BucketName": {}
}
```

Information about a repository in an S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|BucketName|object|true|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_KMSKeyId">KMSKeyId</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyid"></a>
<a id="schema_KMSKeyId"></a>
<a id="tocSkmskeyid"></a>
<a id="tocskmskeyid"></a>

```json
"string"
```

<h2 id="tocS_EncryptionOption">EncryptionOption</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionoption"></a>
<a id="schema_EncryptionOption"></a>
<a id="tocSencryptionoption"></a>
<a id="tocsencryptionoption"></a>

```json
"AWS_OWNED_CMK"
```

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

```json
null
```

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

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

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

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

<h2 id="tocS_CreateCodeReviewResponse">CreateCodeReviewResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecodereviewresponse"></a>
<a id="schema_CreateCodeReviewResponse"></a>
<a id="tocScreatecodereviewresponse"></a>
<a id="tocscreatecodereviewresponse"></a>

```json
{
  "CodeReview": {
    "Name": {},
    "CodeReviewArn": {},
    "RepositoryName": {},
    "Owner": {},
    "ProviderType": {},
    "State": {},
    "StateReason": {},
    "CreatedTimeStamp": {},
    "LastUpdatedTimeStamp": {},
    "Type": {},
    "PullRequestId": {},
    "SourceCodeType": {
      "CommitDiff": {
        "SourceCommit": {},
        "DestinationCommit": {},
        "MergeBaseCommit": {}
      },
      "RepositoryHead": {
        "BranchName": {}
      },
      "BranchDiff": {
        "SourceBranchName": {},
        "DestinationBranchName": {}
      },
      "S3BucketRepository": {
        "Name": {},
        "Details": {
          "BucketName": {},
          "CodeArtifacts": {
            "SourceCodeArtifactsObjectKey": {},
            "BuildArtifactsObjectKey": {}
          }
        }
      },
      "RequestMetadata": {
        "RequestId": {},
        "Requester": {},
        "EventInfo": {
          "Name": {},
          "State": {}
        },
        "VendorName": {}
      }
    },
    "AssociationArn": {},
    "Metrics": {
      "MeteredLinesOfCodeCount": {},
      "SuppressedLinesOfCodeCount": {},
      "FindingsCount": {}
    },
    "AnalysisTypes": {},
    "ConfigFileState": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CodeReview|[CodeReview](#schemacodereview)|false|none|Information about a code review. A code review belongs to the associated repository that contains the reviewed code.|

<h2 id="tocS_RepositoryAnalysis">RepositoryAnalysis</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryanalysis"></a>
<a id="schema_RepositoryAnalysis"></a>
<a id="tocSrepositoryanalysis"></a>
<a id="tocsrepositoryanalysis"></a>

```json
{
  "RepositoryHead": {
    "BranchName": {}
  },
  "SourceCodeType": {
    "CommitDiff": {
      "SourceCommit": {},
      "DestinationCommit": {},
      "MergeBaseCommit": {}
    },
    "RepositoryHead": {
      "BranchName": {}
    },
    "BranchDiff": {
      "SourceBranchName": {},
      "DestinationBranchName": {}
    },
    "S3BucketRepository": {
      "Name": {},
      "Details": {
        "BucketName": {},
        "CodeArtifacts": {
          "SourceCodeArtifactsObjectKey": {},
          "BuildArtifactsObjectKey": {}
        }
      }
    },
    "RequestMetadata": {
      "RequestId": {},
      "Requester": {},
      "EventInfo": {
        "Name": {},
        "State": {}
      },
      "VendorName": {}
    }
  }
}
```

A code review type that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN when you call <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview">CreateCodeReview</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RepositoryHead|object|false|none|none|
|SourceCodeType|[SourceCodeType](#schemasourcecodetype)|false|none|Specifies the source code that is analyzed in a code review.|

<h2 id="tocS_AnalysisTypes">AnalysisTypes</h2>
<!-- backwards compatibility -->
<a id="schemaanalysistypes"></a>
<a id="schema_AnalysisTypes"></a>
<a id="tocSanalysistypes"></a>
<a id="tocsanalysistypes"></a>

```json
[
  "Security"
]
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

<h2 id="tocS_DescribeCodeReviewResponse">DescribeCodeReviewResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecodereviewresponse"></a>
<a id="schema_DescribeCodeReviewResponse"></a>
<a id="tocSdescribecodereviewresponse"></a>
<a id="tocsdescribecodereviewresponse"></a>

```json
{
  "CodeReview": {
    "Name": {},
    "CodeReviewArn": {},
    "RepositoryName": {},
    "Owner": {},
    "ProviderType": {},
    "State": {},
    "StateReason": {},
    "CreatedTimeStamp": {},
    "LastUpdatedTimeStamp": {},
    "Type": {},
    "PullRequestId": {},
    "SourceCodeType": {
      "CommitDiff": {
        "SourceCommit": {},
        "DestinationCommit": {},
        "MergeBaseCommit": {}
      },
      "RepositoryHead": {
        "BranchName": {}
      },
      "BranchDiff": {
        "SourceBranchName": {},
        "DestinationBranchName": {}
      },
      "S3BucketRepository": {
        "Name": {},
        "Details": {
          "BucketName": {},
          "CodeArtifacts": {
            "SourceCodeArtifactsObjectKey": {},
            "BuildArtifactsObjectKey": {}
          }
        }
      },
      "RequestMetadata": {
        "RequestId": {},
        "Requester": {},
        "EventInfo": {
          "Name": {},
          "State": {}
        },
        "VendorName": {}
      }
    },
    "AssociationArn": {},
    "Metrics": {
      "MeteredLinesOfCodeCount": {},
      "SuppressedLinesOfCodeCount": {},
      "FindingsCount": {}
    },
    "AnalysisTypes": {},
    "ConfigFileState": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CodeReview|object|false|none|none|

<h2 id="tocS_DescribeRecommendationFeedbackResponse">DescribeRecommendationFeedbackResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberecommendationfeedbackresponse"></a>
<a id="schema_DescribeRecommendationFeedbackResponse"></a>
<a id="tocSdescriberecommendationfeedbackresponse"></a>
<a id="tocsdescriberecommendationfeedbackresponse"></a>

```json
{
  "RecommendationFeedback": {
    "CodeReviewArn": {},
    "RecommendationId": {},
    "Reactions": {},
    "UserId": {},
    "CreatedTimeStamp": {},
    "LastUpdatedTimeStamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecommendationFeedback|object|false|none|none|

<h2 id="tocS_DescribeRepositoryAssociationResponse">DescribeRepositoryAssociationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberepositoryassociationresponse"></a>
<a id="schema_DescribeRepositoryAssociationResponse"></a>
<a id="tocSdescriberepositoryassociationresponse"></a>
<a id="tocsdescriberepositoryassociationresponse"></a>

```json
{
  "RepositoryAssociation": {
    "AssociationId": {},
    "AssociationArn": {},
    "ConnectionArn": {},
    "Name": {},
    "Owner": {},
    "ProviderType": {},
    "State": {},
    "StateReason": {},
    "LastUpdatedTimeStamp": {},
    "CreatedTimeStamp": {},
    "KMSKeyDetails": {
      "KMSKeyId": {},
      "EncryptionOption": {}
    },
    "S3RepositoryDetails": {
      "BucketName": {},
      "CodeArtifacts": {
        "SourceCodeArtifactsObjectKey": {},
        "BuildArtifactsObjectKey": {}
      }
    }
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
|RepositoryAssociation|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

```json
null
```

<h2 id="tocS_DisassociateRepositoryResponse">DisassociateRepositoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociaterepositoryresponse"></a>
<a id="schema_DisassociateRepositoryResponse"></a>
<a id="tocSdisassociaterepositoryresponse"></a>
<a id="tocsdisassociaterepositoryresponse"></a>

```json
{
  "RepositoryAssociation": {
    "AssociationId": {},
    "AssociationArn": {},
    "ConnectionArn": {},
    "Name": {},
    "Owner": {},
    "ProviderType": {},
    "State": {},
    "StateReason": {},
    "LastUpdatedTimeStamp": {},
    "CreatedTimeStamp": {},
    "KMSKeyDetails": {
      "KMSKeyId": {},
      "EncryptionOption": {}
    },
    "S3RepositoryDetails": {
      "BucketName": {},
      "CodeArtifacts": {
        "SourceCodeArtifactsObjectKey": {},
        "BuildArtifactsObjectKey": {}
      }
    }
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
|RepositoryAssociation|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ListCodeReviewsResponse">ListCodeReviewsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcodereviewsresponse"></a>
<a id="schema_ListCodeReviewsResponse"></a>
<a id="tocSlistcodereviewsresponse"></a>
<a id="tocslistcodereviewsresponse"></a>

```json
{
  "CodeReviewSummaries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CodeReviewSummaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ProviderType">ProviderType</h2>
<!-- backwards compatibility -->
<a id="schemaprovidertype"></a>
<a id="schema_ProviderType"></a>
<a id="tocSprovidertype"></a>
<a id="tocsprovidertype"></a>

```json
"CodeCommit"
```

<h2 id="tocS_JobState">JobState</h2>
<!-- backwards compatibility -->
<a id="schemajobstate"></a>
<a id="schema_JobState"></a>
<a id="tocSjobstate"></a>
<a id="tocsjobstate"></a>

```json
"Completed"
```

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
"string"
```

<h2 id="tocS_ListRecommendationFeedbackResponse">ListRecommendationFeedbackResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrecommendationfeedbackresponse"></a>
<a id="schema_ListRecommendationFeedbackResponse"></a>
<a id="tocSlistrecommendationfeedbackresponse"></a>
<a id="tocslistrecommendationfeedbackresponse"></a>

```json
{
  "RecommendationFeedbackSummaries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecommendationFeedbackSummaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_UserId">UserId</h2>
<!-- backwards compatibility -->
<a id="schemauserid"></a>
<a id="schema_UserId"></a>
<a id="tocSuserid"></a>
<a id="tocsuserid"></a>

```json
"string"
```

<h2 id="tocS_RecommendationId">RecommendationId</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationid"></a>
<a id="schema_RecommendationId"></a>
<a id="tocSrecommendationid"></a>
<a id="tocsrecommendationid"></a>

```json
"string"
```

<h2 id="tocS_ListRecommendationsResponse">ListRecommendationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrecommendationsresponse"></a>
<a id="schema_ListRecommendationsResponse"></a>
<a id="tocSlistrecommendationsresponse"></a>
<a id="tocslistrecommendationsresponse"></a>

```json
{
  "RecommendationSummaries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecommendationSummaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListRepositoryAssociationsResponse">ListRepositoryAssociationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrepositoryassociationsresponse"></a>
<a id="schema_ListRepositoryAssociationsResponse"></a>
<a id="tocSlistrepositoryassociationsresponse"></a>
<a id="tocslistrepositoryassociationsresponse"></a>

```json
{
  "RepositoryAssociationSummaries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RepositoryAssociationSummaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_RepositoryAssociationState">RepositoryAssociationState</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryassociationstate"></a>
<a id="schema_RepositoryAssociationState"></a>
<a id="tocSrepositoryassociationstate"></a>
<a id="tocsrepositoryassociationstate"></a>

```json
"Associated"
```

<h2 id="tocS_Owner">Owner</h2>
<!-- backwards compatibility -->
<a id="schemaowner"></a>
<a id="schema_Owner"></a>
<a id="tocSowner"></a>
<a id="tocsowner"></a>

```json
"string"
```

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

<h2 id="tocS_PutRecommendationFeedbackResponse">PutRecommendationFeedbackResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputrecommendationfeedbackresponse"></a>
<a id="schema_PutRecommendationFeedbackResponse"></a>
<a id="tocSputrecommendationfeedbackresponse"></a>
<a id="tocsputrecommendationfeedbackresponse"></a>

```json
{}
```

<h2 id="tocS_Reaction">Reaction</h2>
<!-- backwards compatibility -->
<a id="schemareaction"></a>
<a id="schema_Reaction"></a>
<a id="tocSreaction"></a>
<a id="tocsreaction"></a>

```json
"ThumbsUp"
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

<h2 id="tocS_AnalysisType">AnalysisType</h2>
<!-- backwards compatibility -->
<a id="schemaanalysistype"></a>
<a id="schema_AnalysisType"></a>
<a id="tocSanalysistype"></a>
<a id="tocsanalysistype"></a>

```json
"Security"
```

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_Repository">Repository</h2>
<!-- backwards compatibility -->
<a id="schemarepository"></a>
<a id="schema_Repository"></a>
<a id="tocSrepository"></a>
<a id="tocsrepository"></a>

```json
{
  "CodeCommit": {
    "Name": {}
  },
  "Bitbucket": {
    "Name": {},
    "ConnectionArn": {},
    "Owner": {}
  },
  "GitHubEnterpriseServer": {
    "Name": {},
    "ConnectionArn": {},
    "Owner": {}
  },
  "S3Bucket": {
    "Name": {},
    "BucketName": {}
  }
}
```

Information about an associated Amazon Web Services CodeCommit repository or an associated repository that is managed by Amazon Web Services CodeStar Connections (for example, Bitbucket). This <code>Repository</code> object is not used if your source code is in an associated GitHub repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CodeCommit|object|false|none|none|
|Bitbucket|object|false|none|none|
|GitHubEnterpriseServer|object|false|none|none|
|S3Bucket|[S3Repository](#schemas3repository)|false|none|Information about a repository in an S3 bucket.|

<h2 id="tocS_ClientRequestToken">ClientRequestToken</h2>
<!-- backwards compatibility -->
<a id="schemaclientrequesttoken"></a>
<a id="schema_ClientRequestToken"></a>
<a id="tocSclientrequesttoken"></a>
<a id="tocsclientrequesttoken"></a>

```json
"string"
```

<h2 id="tocS_TagMap">TagMap</h2>
<!-- backwards compatibility -->
<a id="schematagmap"></a>
<a id="schema_TagMap"></a>
<a id="tocStagmap"></a>
<a id="tocstagmap"></a>

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

<h2 id="tocS_KMSKeyDetails">KMSKeyDetails</h2>
<!-- backwards compatibility -->
<a id="schemakmskeydetails"></a>
<a id="schema_KMSKeyDetails"></a>
<a id="tocSkmskeydetails"></a>
<a id="tocskmskeydetails"></a>

```json
{
  "KMSKeyId": {},
  "EncryptionOption": {}
}
```

<p>An object that contains:</p> <ul> <li> <p>The encryption option for a repository association. It is either owned by Amazon Web Services Key Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed (<code>CUSTOMER_MANAGED_CMK</code>).</p> </li> <li> <p>The ID of the Amazon Web Services KMS key that is associated with a repository association.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KMSKeyId|object|false|none|none|
|EncryptionOption|object|false|none|none|

<h2 id="tocS_AssociateRepositoryRequest">AssociateRepositoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociaterepositoryrequest"></a>
<a id="schema_AssociateRepositoryRequest"></a>
<a id="tocSassociaterepositoryrequest"></a>
<a id="tocsassociaterepositoryrequest"></a>

```json
{
  "Repository": {
    "CodeCommit": {
      "Name": {}
    },
    "Bitbucket": {
      "Name": {},
      "ConnectionArn": {},
      "Owner": {}
    },
    "GitHubEnterpriseServer": {
      "Name": {},
      "ConnectionArn": {},
      "Owner": {}
    },
    "S3Bucket": {
      "Name": {},
      "BucketName": {}
    }
  },
  "ClientRequestToken": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "KMSKeyDetails": {
    "KMSKeyId": {},
    "EncryptionOption": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Repository|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|Tags|object|false|none|none|
|KMSKeyDetails|object|false|none|none|

<h2 id="tocS_RepositoryAssociation">RepositoryAssociation</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryassociation"></a>
<a id="schema_RepositoryAssociation"></a>
<a id="tocSrepositoryassociation"></a>
<a id="tocsrepositoryassociation"></a>

```json
{
  "AssociationId": {},
  "AssociationArn": {},
  "ConnectionArn": {},
  "Name": {},
  "Owner": {},
  "ProviderType": {},
  "State": {},
  "StateReason": {},
  "LastUpdatedTimeStamp": {},
  "CreatedTimeStamp": {},
  "KMSKeyDetails": {
    "KMSKeyId": {},
    "EncryptionOption": {}
  },
  "S3RepositoryDetails": {
    "BucketName": {},
    "CodeArtifacts": {
      "SourceCodeArtifactsObjectKey": {},
      "BuildArtifactsObjectKey": {}
    }
  }
}
```

Information about a repository association. The <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DescribeRepositoryAssociation.html">DescribeRepositoryAssociation</a> operation returns a <code>RepositoryAssociation</code> object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationId|object|false|none|none|
|AssociationArn|object|false|none|none|
|ConnectionArn|object|false|none|none|
|Name|object|false|none|none|
|Owner|object|false|none|none|
|ProviderType|object|false|none|none|
|State|object|false|none|none|
|StateReason|object|false|none|none|
|LastUpdatedTimeStamp|object|false|none|none|
|CreatedTimeStamp|object|false|none|none|
|KMSKeyDetails|object|false|none|none|
|S3RepositoryDetails|[S3RepositoryDetails](#schemas3repositorydetails)|false|none|Specifies the name of an S3 bucket and a <code>CodeArtifacts</code> object that contains the S3 object keys for a source code .zip file and for a build artifacts .zip file that contains .jar or .class files.|

<h2 id="tocS_AssociationArn">AssociationArn</h2>
<!-- backwards compatibility -->
<a id="schemaassociationarn"></a>
<a id="schema_AssociationArn"></a>
<a id="tocSassociationarn"></a>
<a id="tocsassociationarn"></a>

```json
"string"
```

<h2 id="tocS_AssociationId">AssociationId</h2>
<!-- backwards compatibility -->
<a id="schemaassociationid"></a>
<a id="schema_AssociationId"></a>
<a id="tocSassociationid"></a>
<a id="tocsassociationid"></a>

```json
"string"
```

<h2 id="tocS_BranchName">BranchName</h2>
<!-- backwards compatibility -->
<a id="schemabranchname"></a>
<a id="schema_BranchName"></a>
<a id="tocSbranchname"></a>
<a id="tocsbranchname"></a>

```json
"string"
```

<h2 id="tocS_BranchDiffSourceCodeType">BranchDiffSourceCodeType</h2>
<!-- backwards compatibility -->
<a id="schemabranchdiffsourcecodetype"></a>
<a id="schema_BranchDiffSourceCodeType"></a>
<a id="tocSbranchdiffsourcecodetype"></a>
<a id="tocsbranchdiffsourcecodetype"></a>

```json
{
  "SourceBranchName": {},
  "DestinationBranchName": {}
}
```

A type of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that specifies a code diff between a source and destination branch in an associated repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceBranchName|object|true|none|none|
|DestinationBranchName|object|true|none|none|

<h2 id="tocS_BuildArtifactsObjectKey">BuildArtifactsObjectKey</h2>
<!-- backwards compatibility -->
<a id="schemabuildartifactsobjectkey"></a>
<a id="schema_BuildArtifactsObjectKey"></a>
<a id="tocSbuildartifactsobjectkey"></a>
<a id="tocsbuildartifactsobjectkey"></a>

```json
"string"
```

<h2 id="tocS_SourceCodeArtifactsObjectKey">SourceCodeArtifactsObjectKey</h2>
<!-- backwards compatibility -->
<a id="schemasourcecodeartifactsobjectkey"></a>
<a id="schema_SourceCodeArtifactsObjectKey"></a>
<a id="tocSsourcecodeartifactsobjectkey"></a>
<a id="tocssourcecodeartifactsobjectkey"></a>

```json
"string"
```

<h2 id="tocS_CodeArtifacts">CodeArtifacts</h2>
<!-- backwards compatibility -->
<a id="schemacodeartifacts"></a>
<a id="schema_CodeArtifacts"></a>
<a id="tocScodeartifacts"></a>
<a id="tocscodeartifacts"></a>

```json
{
  "SourceCodeArtifactsObjectKey": {},
  "BuildArtifactsObjectKey": {}
}
```

<p>Code artifacts are source code artifacts and build artifacts used in a repository analysis or a pull request review.</p> <ul> <li> <p>Source code artifacts are source code files in a Git repository that are compressed into a .zip file.</p> </li> <li> <p>Build artifacts are .jar or .class files that are compressed in a .zip file.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceCodeArtifactsObjectKey|object|true|none|none|
|BuildArtifactsObjectKey|object|false|none|none|

<h2 id="tocS_StateReason">StateReason</h2>
<!-- backwards compatibility -->
<a id="schemastatereason"></a>
<a id="schema_StateReason"></a>
<a id="tocSstatereason"></a>
<a id="tocsstatereason"></a>

```json
"string"
```

<h2 id="tocS_TimeStamp">TimeStamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_TimeStamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Type">Type</h2>
<!-- backwards compatibility -->
<a id="schematype"></a>
<a id="schema_Type"></a>
<a id="tocStype"></a>
<a id="tocstype"></a>

```json
"PullRequest"
```

<h2 id="tocS_PullRequestId">PullRequestId</h2>
<!-- backwards compatibility -->
<a id="schemapullrequestid"></a>
<a id="schema_PullRequestId"></a>
<a id="tocSpullrequestid"></a>
<a id="tocspullrequestid"></a>

```json
"string"
```

<h2 id="tocS_SourceCodeType">SourceCodeType</h2>
<!-- backwards compatibility -->
<a id="schemasourcecodetype"></a>
<a id="schema_SourceCodeType"></a>
<a id="tocSsourcecodetype"></a>
<a id="tocssourcecodetype"></a>

```json
{
  "CommitDiff": {
    "SourceCommit": {},
    "DestinationCommit": {},
    "MergeBaseCommit": {}
  },
  "RepositoryHead": {
    "BranchName": {}
  },
  "BranchDiff": {
    "SourceBranchName": {},
    "DestinationBranchName": {}
  },
  "S3BucketRepository": {
    "Name": {},
    "Details": {
      "BucketName": {},
      "CodeArtifacts": {
        "SourceCodeArtifactsObjectKey": {},
        "BuildArtifactsObjectKey": {}
      }
    }
  },
  "RequestMetadata": {
    "RequestId": {},
    "Requester": {},
    "EventInfo": {
      "Name": {},
      "State": {}
    },
    "VendorName": {}
  }
}
```

Specifies the source code that is analyzed in a code review.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CommitDiff|object|false|none|none|
|RepositoryHead|[RepositoryHeadSourceCodeType](#schemarepositoryheadsourcecodetype)|false|none|A <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that specifies the tip of a branch in an associated repository.|
|BranchDiff|object|false|none|none|
|S3BucketRepository|object|false|none|none|
|RequestMetadata|object|false|none|none|

<h2 id="tocS_Metrics">Metrics</h2>
<!-- backwards compatibility -->
<a id="schemametrics"></a>
<a id="schema_Metrics"></a>
<a id="tocSmetrics"></a>
<a id="tocsmetrics"></a>

```json
{
  "MeteredLinesOfCodeCount": {},
  "SuppressedLinesOfCodeCount": {},
  "FindingsCount": {}
}
```

Information about the statistics from the code review.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MeteredLinesOfCodeCount|object|false|none|none|
|SuppressedLinesOfCodeCount|object|false|none|none|
|FindingsCount|object|false|none|none|

<h2 id="tocS_ConfigFileState">ConfigFileState</h2>
<!-- backwards compatibility -->
<a id="schemaconfigfilestate"></a>
<a id="schema_ConfigFileState"></a>
<a id="tocSconfigfilestate"></a>
<a id="tocsconfigfilestate"></a>

```json
"Present"
```

<h2 id="tocS_CodeReview">CodeReview</h2>
<!-- backwards compatibility -->
<a id="schemacodereview"></a>
<a id="schema_CodeReview"></a>
<a id="tocScodereview"></a>
<a id="tocscodereview"></a>

```json
{
  "Name": {},
  "CodeReviewArn": {},
  "RepositoryName": {},
  "Owner": {},
  "ProviderType": {},
  "State": {},
  "StateReason": {},
  "CreatedTimeStamp": {},
  "LastUpdatedTimeStamp": {},
  "Type": {},
  "PullRequestId": {},
  "SourceCodeType": {
    "CommitDiff": {
      "SourceCommit": {},
      "DestinationCommit": {},
      "MergeBaseCommit": {}
    },
    "RepositoryHead": {
      "BranchName": {}
    },
    "BranchDiff": {
      "SourceBranchName": {},
      "DestinationBranchName": {}
    },
    "S3BucketRepository": {
      "Name": {},
      "Details": {
        "BucketName": {},
        "CodeArtifacts": {
          "SourceCodeArtifactsObjectKey": {},
          "BuildArtifactsObjectKey": {}
        }
      }
    },
    "RequestMetadata": {
      "RequestId": {},
      "Requester": {},
      "EventInfo": {
        "Name": {},
        "State": {}
      },
      "VendorName": {}
    }
  },
  "AssociationArn": {},
  "Metrics": {
    "MeteredLinesOfCodeCount": {},
    "SuppressedLinesOfCodeCount": {},
    "FindingsCount": {}
  },
  "AnalysisTypes": {},
  "ConfigFileState": {}
}
```

Information about a code review. A code review belongs to the associated repository that contains the reviewed code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|CodeReviewArn|object|false|none|none|
|RepositoryName|object|false|none|none|
|Owner|object|false|none|none|
|ProviderType|object|false|none|none|
|State|object|false|none|none|
|StateReason|object|false|none|none|
|CreatedTimeStamp|object|false|none|none|
|LastUpdatedTimeStamp|object|false|none|none|
|Type|object|false|none|none|
|PullRequestId|object|false|none|none|
|SourceCodeType|object|false|none|none|
|AssociationArn|object|false|none|none|
|Metrics|object|false|none|none|
|AnalysisTypes|object|false|none|none|
|ConfigFileState|object|false|none|none|

<h2 id="tocS_CodeReviewName">CodeReviewName</h2>
<!-- backwards compatibility -->
<a id="schemacodereviewname"></a>
<a id="schema_CodeReviewName"></a>
<a id="tocScodereviewname"></a>
<a id="tocscodereviewname"></a>

```json
"string"
```

<h2 id="tocS_CodeReviewSummary">CodeReviewSummary</h2>
<!-- backwards compatibility -->
<a id="schemacodereviewsummary"></a>
<a id="schema_CodeReviewSummary"></a>
<a id="tocScodereviewsummary"></a>
<a id="tocscodereviewsummary"></a>

```json
{
  "Name": {},
  "CodeReviewArn": {},
  "RepositoryName": {},
  "Owner": {},
  "ProviderType": {},
  "State": {},
  "CreatedTimeStamp": {},
  "LastUpdatedTimeStamp": {},
  "Type": {},
  "PullRequestId": {},
  "MetricsSummary": {
    "MeteredLinesOfCodeCount": {},
    "SuppressedLinesOfCodeCount": {},
    "FindingsCount": {}
  },
  "SourceCodeType": {
    "CommitDiff": {
      "SourceCommit": {},
      "DestinationCommit": {},
      "MergeBaseCommit": {}
    },
    "RepositoryHead": {
      "BranchName": {}
    },
    "BranchDiff": {
      "SourceBranchName": {},
      "DestinationBranchName": {}
    },
    "S3BucketRepository": {
      "Name": {},
      "Details": {
        "BucketName": {},
        "CodeArtifacts": {
          "SourceCodeArtifactsObjectKey": {},
          "BuildArtifactsObjectKey": {}
        }
      }
    },
    "RequestMetadata": {
      "RequestId": {},
      "Requester": {},
      "EventInfo": {
        "Name": {},
        "State": {}
      },
      "VendorName": {}
    }
  }
}
```

Information about the summary of the code review.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|CodeReviewArn|object|false|none|none|
|RepositoryName|object|false|none|none|
|Owner|object|false|none|none|
|ProviderType|object|false|none|none|
|State|object|false|none|none|
|CreatedTimeStamp|object|false|none|none|
|LastUpdatedTimeStamp|object|false|none|none|
|Type|object|false|none|none|
|PullRequestId|object|false|none|none|
|MetricsSummary|object|false|none|none|
|SourceCodeType|[SourceCodeType](#schemasourcecodetype)|false|none|Specifies the source code that is analyzed in a code review.|

<h2 id="tocS_CodeReviewSummaries">CodeReviewSummaries</h2>
<!-- backwards compatibility -->
<a id="schemacodereviewsummaries"></a>
<a id="schema_CodeReviewSummaries"></a>
<a id="tocScodereviewsummaries"></a>
<a id="tocscodereviewsummaries"></a>

```json
[
  {
    "Name": {},
    "CodeReviewArn": {},
    "RepositoryName": {},
    "Owner": {},
    "ProviderType": {},
    "State": {},
    "CreatedTimeStamp": {},
    "LastUpdatedTimeStamp": {},
    "Type": {},
    "PullRequestId": {},
    "MetricsSummary": {
      "MeteredLinesOfCodeCount": {},
      "SuppressedLinesOfCodeCount": {},
      "FindingsCount": {}
    },
    "SourceCodeType": {
      "CommitDiff": {
        "SourceCommit": {},
        "DestinationCommit": {},
        "MergeBaseCommit": {}
      },
      "RepositoryHead": {
        "BranchName": {}
      },
      "BranchDiff": {
        "SourceBranchName": {},
        "DestinationBranchName": {}
      },
      "S3BucketRepository": {
        "Name": {},
        "Details": {
          "BucketName": {},
          "CodeArtifacts": {
            "SourceCodeArtifactsObjectKey": {},
            "BuildArtifactsObjectKey": {}
          }
        }
      },
      "RequestMetadata": {
        "RequestId": {},
        "Requester": {},
        "EventInfo": {
          "Name": {},
          "State": {}
        },
        "VendorName": {}
      }
    }
  }
]
```

<h2 id="tocS_MetricsSummary">MetricsSummary</h2>
<!-- backwards compatibility -->
<a id="schemametricssummary"></a>
<a id="schema_MetricsSummary"></a>
<a id="tocSmetricssummary"></a>
<a id="tocsmetricssummary"></a>

```json
{
  "MeteredLinesOfCodeCount": {},
  "SuppressedLinesOfCodeCount": {},
  "FindingsCount": {}
}
```

Information about metrics summaries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MeteredLinesOfCodeCount|object|false|none|none|
|SuppressedLinesOfCodeCount|object|false|none|none|
|FindingsCount|object|false|none|none|

<h2 id="tocS_CodeReviewType">CodeReviewType</h2>
<!-- backwards compatibility -->
<a id="schemacodereviewtype"></a>
<a id="schema_CodeReviewType"></a>
<a id="tocScodereviewtype"></a>
<a id="tocscodereviewtype"></a>

```json
{
  "RepositoryAnalysis": {
    "RepositoryHead": {
      "BranchName": {}
    },
    "SourceCodeType": {
      "CommitDiff": {
        "SourceCommit": {},
        "DestinationCommit": {},
        "MergeBaseCommit": {}
      },
      "RepositoryHead": {
        "BranchName": {}
      },
      "BranchDiff": {
        "SourceBranchName": {},
        "DestinationBranchName": {}
      },
      "S3BucketRepository": {
        "Name": {},
        "Details": {
          "BucketName": {},
          "CodeArtifacts": {
            "SourceCodeArtifactsObjectKey": {},
            "BuildArtifactsObjectKey": {}
          }
        }
      },
      "RequestMetadata": {
        "RequestId": {},
        "Requester": {},
        "EventInfo": {
          "Name": {},
          "State": {}
        },
        "VendorName": {}
      }
    }
  },
  "AnalysisTypes": {}
}
```

<p>The type of a code review. There are two code review types:</p> <ul> <li> <p> <code>PullRequest</code> - A code review that is automatically triggered by a pull request on an associated repository.</p> </li> <li> <p> <code>RepositoryAnalysis</code> - A code review that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview">CreateCodeReview</a>.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RepositoryAnalysis|object|true|none|none|
|AnalysisTypes|object|false|none|none|

<h2 id="tocS_CommitId">CommitId</h2>
<!-- backwards compatibility -->
<a id="schemacommitid"></a>
<a id="schema_CommitId"></a>
<a id="tocScommitid"></a>
<a id="tocscommitid"></a>

```json
"string"
```

<h2 id="tocS_CommitDiffSourceCodeType">CommitDiffSourceCodeType</h2>
<!-- backwards compatibility -->
<a id="schemacommitdiffsourcecodetype"></a>
<a id="schema_CommitDiffSourceCodeType"></a>
<a id="tocScommitdiffsourcecodetype"></a>
<a id="tocscommitdiffsourcecodetype"></a>

```json
{
  "SourceCommit": {},
  "DestinationCommit": {},
  "MergeBaseCommit": {}
}
```

A type of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that specifies the commit diff for a pull request on an associated repository. The <code>SourceCommit</code> and <code>DestinationCommit</code> fields are required to do a pull request code review.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceCommit|object|false|none|none|
|DestinationCommit|object|false|none|none|
|MergeBaseCommit|object|false|none|none|

<h2 id="tocS_ConnectionArn">ConnectionArn</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionarn"></a>
<a id="schema_ConnectionArn"></a>
<a id="tocSconnectionarn"></a>
<a id="tocsconnectionarn"></a>

```json
"string"
```

<h2 id="tocS_CreateCodeReviewRequest">CreateCodeReviewRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecodereviewrequest"></a>
<a id="schema_CreateCodeReviewRequest"></a>
<a id="tocScreatecodereviewrequest"></a>
<a id="tocscreatecodereviewrequest"></a>

```json
{
  "Name": {},
  "RepositoryAssociationArn": {},
  "Type": {
    "RepositoryAnalysis": {
      "RepositoryHead": {
        "BranchName": {}
      },
      "SourceCodeType": {
        "CommitDiff": {
          "SourceCommit": {},
          "DestinationCommit": {},
          "MergeBaseCommit": {}
        },
        "RepositoryHead": {
          "BranchName": {}
        },
        "BranchDiff": {
          "SourceBranchName": {},
          "DestinationBranchName": {}
        },
        "S3BucketRepository": {
          "Name": {},
          "Details": {
            "BucketName": {},
            "CodeArtifacts": {
              "SourceCodeArtifactsObjectKey": {},
              "BuildArtifactsObjectKey": {}
            }
          }
        },
        "RequestMetadata": {
          "RequestId": {},
          "Requester": {},
          "EventInfo": {
            "Name": {},
            "State": {}
          },
          "VendorName": {}
        }
      }
    },
    "AnalysisTypes": {}
  },
  "ClientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|RepositoryAssociationArn|object|true|none|none|
|Type|object|true|none|none|
|ClientRequestToken|object|false|none|none|

<h2 id="tocS_DescribeCodeReviewRequest">DescribeCodeReviewRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecodereviewrequest"></a>
<a id="schema_DescribeCodeReviewRequest"></a>
<a id="tocSdescribecodereviewrequest"></a>
<a id="tocsdescribecodereviewrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeRecommendationFeedbackRequest">DescribeRecommendationFeedbackRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberecommendationfeedbackrequest"></a>
<a id="schema_DescribeRecommendationFeedbackRequest"></a>
<a id="tocSdescriberecommendationfeedbackrequest"></a>
<a id="tocsdescriberecommendationfeedbackrequest"></a>

```json
{}
```

<h2 id="tocS_RecommendationFeedback">RecommendationFeedback</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationfeedback"></a>
<a id="schema_RecommendationFeedback"></a>
<a id="tocSrecommendationfeedback"></a>
<a id="tocsrecommendationfeedback"></a>

```json
{
  "CodeReviewArn": {},
  "RecommendationId": {},
  "Reactions": {},
  "UserId": {},
  "CreatedTimeStamp": {},
  "LastUpdatedTimeStamp": {}
}
```

Information about the recommendation feedback.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CodeReviewArn|object|false|none|none|
|RecommendationId|object|false|none|none|
|Reactions|object|false|none|none|
|UserId|object|false|none|none|
|CreatedTimeStamp|object|false|none|none|
|LastUpdatedTimeStamp|object|false|none|none|

<h2 id="tocS_DescribeRepositoryAssociationRequest">DescribeRepositoryAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberepositoryassociationrequest"></a>
<a id="schema_DescribeRepositoryAssociationRequest"></a>
<a id="tocSdescriberepositoryassociationrequest"></a>
<a id="tocsdescriberepositoryassociationrequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateRepositoryRequest">DisassociateRepositoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociaterepositoryrequest"></a>
<a id="schema_DisassociateRepositoryRequest"></a>
<a id="tocSdisassociaterepositoryrequest"></a>
<a id="tocsdisassociaterepositoryrequest"></a>

```json
{}
```

<h2 id="tocS_EventName">EventName</h2>
<!-- backwards compatibility -->
<a id="schemaeventname"></a>
<a id="schema_EventName"></a>
<a id="tocSeventname"></a>
<a id="tocseventname"></a>

```json
"string"
```

<h2 id="tocS_EventState">EventState</h2>
<!-- backwards compatibility -->
<a id="schemaeventstate"></a>
<a id="schema_EventState"></a>
<a id="tocSeventstate"></a>
<a id="tocseventstate"></a>

```json
"string"
```

<h2 id="tocS_EventInfo">EventInfo</h2>
<!-- backwards compatibility -->
<a id="schemaeventinfo"></a>
<a id="schema_EventInfo"></a>
<a id="tocSeventinfo"></a>
<a id="tocseventinfo"></a>

```json
{
  "Name": {},
  "State": {}
}
```

Information about an event. The event might be a push, pull request, scheduled request, or another type of event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_FilePath">FilePath</h2>
<!-- backwards compatibility -->
<a id="schemafilepath"></a>
<a id="schema_FilePath"></a>
<a id="tocSfilepath"></a>
<a id="tocsfilepath"></a>

```json
"string"
```

<h2 id="tocS_FindingsCount">FindingsCount</h2>
<!-- backwards compatibility -->
<a id="schemafindingscount"></a>
<a id="schema_FindingsCount"></a>
<a id="tocSfindingscount"></a>
<a id="tocsfindingscount"></a>

```json
0
```

<h2 id="tocS_JobStates">JobStates</h2>
<!-- backwards compatibility -->
<a id="schemajobstates"></a>
<a id="schema_JobStates"></a>
<a id="tocSjobstates"></a>
<a id="tocsjobstates"></a>

```json
[
  "Completed"
]
```

<h2 id="tocS_LineNumber">LineNumber</h2>
<!-- backwards compatibility -->
<a id="schemalinenumber"></a>
<a id="schema_LineNumber"></a>
<a id="tocSlinenumber"></a>
<a id="tocslinenumber"></a>

```json
0
```

<h2 id="tocS_LinesOfCodeCount">LinesOfCodeCount</h2>
<!-- backwards compatibility -->
<a id="schemalinesofcodecount"></a>
<a id="schema_LinesOfCodeCount"></a>
<a id="tocSlinesofcodecount"></a>
<a id="tocslinesofcodecount"></a>

```json
0
```

<h2 id="tocS_ListCodeReviewsMaxResults">ListCodeReviewsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistcodereviewsmaxresults"></a>
<a id="schema_ListCodeReviewsMaxResults"></a>
<a id="tocSlistcodereviewsmaxresults"></a>
<a id="tocslistcodereviewsmaxresults"></a>

```json
1
```

<h2 id="tocS_ProviderTypes">ProviderTypes</h2>
<!-- backwards compatibility -->
<a id="schemaprovidertypes"></a>
<a id="schema_ProviderTypes"></a>
<a id="tocSprovidertypes"></a>
<a id="tocsprovidertypes"></a>

```json
[
  "CodeCommit"
]
```

<h2 id="tocS_RepositoryNames">RepositoryNames</h2>
<!-- backwards compatibility -->
<a id="schemarepositorynames"></a>
<a id="schema_RepositoryNames"></a>
<a id="tocSrepositorynames"></a>
<a id="tocsrepositorynames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_ListCodeReviewsRequest">ListCodeReviewsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcodereviewsrequest"></a>
<a id="schema_ListCodeReviewsRequest"></a>
<a id="tocSlistcodereviewsrequest"></a>
<a id="tocslistcodereviewsrequest"></a>

```json
{}
```

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

<h2 id="tocS_UserIds">UserIds</h2>
<!-- backwards compatibility -->
<a id="schemauserids"></a>
<a id="schema_UserIds"></a>
<a id="tocSuserids"></a>
<a id="tocsuserids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RecommendationIds">RecommendationIds</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationids"></a>
<a id="schema_RecommendationIds"></a>
<a id="tocSrecommendationids"></a>
<a id="tocsrecommendationids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ListRecommendationFeedbackRequest">ListRecommendationFeedbackRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrecommendationfeedbackrequest"></a>
<a id="schema_ListRecommendationFeedbackRequest"></a>
<a id="tocSlistrecommendationfeedbackrequest"></a>
<a id="tocslistrecommendationfeedbackrequest"></a>

```json
{}
```

<h2 id="tocS_RecommendationFeedbackSummaries">RecommendationFeedbackSummaries</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationfeedbacksummaries"></a>
<a id="schema_RecommendationFeedbackSummaries"></a>
<a id="tocSrecommendationfeedbacksummaries"></a>
<a id="tocsrecommendationfeedbacksummaries"></a>

```json
[
  {
    "RecommendationId": {},
    "Reactions": {},
    "UserId": {}
  }
]
```

<h2 id="tocS_ListRecommendationsMaxResults">ListRecommendationsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistrecommendationsmaxresults"></a>
<a id="schema_ListRecommendationsMaxResults"></a>
<a id="tocSlistrecommendationsmaxresults"></a>
<a id="tocslistrecommendationsmaxresults"></a>

```json
1
```

<h2 id="tocS_ListRecommendationsRequest">ListRecommendationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrecommendationsrequest"></a>
<a id="schema_ListRecommendationsRequest"></a>
<a id="tocSlistrecommendationsrequest"></a>
<a id="tocslistrecommendationsrequest"></a>

```json
{}
```

<h2 id="tocS_RecommendationSummaries">RecommendationSummaries</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationsummaries"></a>
<a id="schema_RecommendationSummaries"></a>
<a id="tocSrecommendationsummaries"></a>
<a id="tocsrecommendationsummaries"></a>

```json
[
  {
    "FilePath": {},
    "RecommendationId": {},
    "StartLine": {},
    "EndLine": {},
    "Description": {},
    "RecommendationCategory": {},
    "RuleMetadata": {
      "RuleId": {},
      "RuleName": {},
      "ShortDescription": {},
      "LongDescription": {},
      "RuleTags": {}
    },
    "Severity": {}
  }
]
```

<h2 id="tocS_RepositoryAssociationStates">RepositoryAssociationStates</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryassociationstates"></a>
<a id="schema_RepositoryAssociationStates"></a>
<a id="tocSrepositoryassociationstates"></a>
<a id="tocsrepositoryassociationstates"></a>

```json
[
  "Associated"
]
```

<h2 id="tocS_Names">Names</h2>
<!-- backwards compatibility -->
<a id="schemanames"></a>
<a id="schema_Names"></a>
<a id="tocSnames"></a>
<a id="tocsnames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Owners">Owners</h2>
<!-- backwards compatibility -->
<a id="schemaowners"></a>
<a id="schema_Owners"></a>
<a id="tocSowners"></a>
<a id="tocsowners"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ListRepositoryAssociationsRequest">ListRepositoryAssociationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrepositoryassociationsrequest"></a>
<a id="schema_ListRepositoryAssociationsRequest"></a>
<a id="tocSlistrepositoryassociationsrequest"></a>
<a id="tocslistrepositoryassociationsrequest"></a>

```json
{}
```

<h2 id="tocS_RepositoryAssociationSummaries">RepositoryAssociationSummaries</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryassociationsummaries"></a>
<a id="schema_RepositoryAssociationSummaries"></a>
<a id="tocSrepositoryassociationsummaries"></a>
<a id="tocsrepositoryassociationsummaries"></a>

```json
[
  {
    "AssociationArn": {},
    "ConnectionArn": {},
    "LastUpdatedTimeStamp": {},
    "AssociationId": {},
    "Name": {},
    "Owner": {},
    "ProviderType": {},
    "State": {}
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

<h2 id="tocS_LongDescription">LongDescription</h2>
<!-- backwards compatibility -->
<a id="schemalongdescription"></a>
<a id="schema_LongDescription"></a>
<a id="tocSlongdescription"></a>
<a id="tocslongdescription"></a>

```json
"string"
```

<h2 id="tocS_Reactions">Reactions</h2>
<!-- backwards compatibility -->
<a id="schemareactions"></a>
<a id="schema_Reactions"></a>
<a id="tocSreactions"></a>
<a id="tocsreactions"></a>

```json
[
  "ThumbsUp"
]
```

<h2 id="tocS_PutRecommendationFeedbackRequest">PutRecommendationFeedbackRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputrecommendationfeedbackrequest"></a>
<a id="schema_PutRecommendationFeedbackRequest"></a>
<a id="tocSputrecommendationfeedbackrequest"></a>
<a id="tocsputrecommendationfeedbackrequest"></a>

```json
{
  "CodeReviewArn": {},
  "RecommendationId": {},
  "Reactions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CodeReviewArn|object|true|none|none|
|RecommendationId|object|true|none|none|
|Reactions|object|true|none|none|

<h2 id="tocS_RecommendationCategory">RecommendationCategory</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationcategory"></a>
<a id="schema_RecommendationCategory"></a>
<a id="tocSrecommendationcategory"></a>
<a id="tocsrecommendationcategory"></a>

```json
"AWSBestPractices"
```

<h2 id="tocS_RecommendationFeedbackSummary">RecommendationFeedbackSummary</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationfeedbacksummary"></a>
<a id="schema_RecommendationFeedbackSummary"></a>
<a id="tocSrecommendationfeedbacksummary"></a>
<a id="tocsrecommendationfeedbacksummary"></a>

```json
{
  "RecommendationId": {},
  "Reactions": {},
  "UserId": {}
}
```

Information about recommendation feedback summaries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecommendationId|object|false|none|none|
|Reactions|object|false|none|none|
|UserId|object|false|none|none|

<h2 id="tocS_RecommendationSummary">RecommendationSummary</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationsummary"></a>
<a id="schema_RecommendationSummary"></a>
<a id="tocSrecommendationsummary"></a>
<a id="tocsrecommendationsummary"></a>

```json
{
  "FilePath": {},
  "RecommendationId": {},
  "StartLine": {},
  "EndLine": {},
  "Description": {},
  "RecommendationCategory": {},
  "RuleMetadata": {
    "RuleId": {},
    "RuleName": {},
    "ShortDescription": {},
    "LongDescription": {},
    "RuleTags": {}
  },
  "Severity": {}
}
```

Information about recommendations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FilePath|object|false|none|none|
|RecommendationId|object|false|none|none|
|StartLine|object|false|none|none|
|EndLine|object|false|none|none|
|Description|object|false|none|none|
|RecommendationCategory|object|false|none|none|
|RuleMetadata|object|false|none|none|
|Severity|object|false|none|none|

<h2 id="tocS_Text">Text</h2>
<!-- backwards compatibility -->
<a id="schematext"></a>
<a id="schema_Text"></a>
<a id="tocStext"></a>
<a id="tocstext"></a>

```json
"string"
```

<h2 id="tocS_RuleMetadata">RuleMetadata</h2>
<!-- backwards compatibility -->
<a id="schemarulemetadata"></a>
<a id="schema_RuleMetadata"></a>
<a id="tocSrulemetadata"></a>
<a id="tocsrulemetadata"></a>

```json
{
  "RuleId": {},
  "RuleName": {},
  "ShortDescription": {},
  "LongDescription": {},
  "RuleTags": {}
}
```

Metadata about a rule. Rule metadata includes an ID, a name, a list of tags, and a short and long description. CodeGuru Reviewer uses rules to analyze code. A rule's recommendation is included in analysis results if code is detected that violates the rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleId|object|false|none|none|
|RuleName|object|false|none|none|
|ShortDescription|object|false|none|none|
|LongDescription|object|false|none|none|
|RuleTags|object|false|none|none|

<h2 id="tocS_Severity">Severity</h2>
<!-- backwards compatibility -->
<a id="schemaseverity"></a>
<a id="schema_Severity"></a>
<a id="tocSseverity"></a>
<a id="tocsseverity"></a>

```json
"Info"
```

<h2 id="tocS_RepositoryHeadSourceCodeType">RepositoryHeadSourceCodeType</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryheadsourcecodetype"></a>
<a id="schema_RepositoryHeadSourceCodeType"></a>
<a id="tocSrepositoryheadsourcecodetype"></a>
<a id="tocsrepositoryheadsourcecodetype"></a>

```json
{
  "BranchName": {}
}
```

A <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that specifies the tip of a branch in an associated repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BranchName|object|true|none|none|

<h2 id="tocS_S3RepositoryDetails">S3RepositoryDetails</h2>
<!-- backwards compatibility -->
<a id="schemas3repositorydetails"></a>
<a id="schema_S3RepositoryDetails"></a>
<a id="tocSs3repositorydetails"></a>
<a id="tocss3repositorydetails"></a>

```json
{
  "BucketName": {},
  "CodeArtifacts": {
    "SourceCodeArtifactsObjectKey": {},
    "BuildArtifactsObjectKey": {}
  }
}
```

Specifies the name of an S3 bucket and a <code>CodeArtifacts</code> object that contains the S3 object keys for a source code .zip file and for a build artifacts .zip file that contains .jar or .class files.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketName|object|false|none|none|
|CodeArtifacts|object|false|none|none|

<h2 id="tocS_RepositoryAssociationSummary">RepositoryAssociationSummary</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryassociationsummary"></a>
<a id="schema_RepositoryAssociationSummary"></a>
<a id="tocSrepositoryassociationsummary"></a>
<a id="tocsrepositoryassociationsummary"></a>

```json
{
  "AssociationArn": {},
  "ConnectionArn": {},
  "LastUpdatedTimeStamp": {},
  "AssociationId": {},
  "Name": {},
  "Owner": {},
  "ProviderType": {},
  "State": {}
}
```

Summary information about a repository association. The <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a> operation returns a list of <code>RepositoryAssociationSummary</code> objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationArn|object|false|none|none|
|ConnectionArn|object|false|none|none|
|LastUpdatedTimeStamp|object|false|none|none|
|AssociationId|object|false|none|none|
|Name|object|false|none|none|
|Owner|object|false|none|none|
|ProviderType|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_RequestId">RequestId</h2>
<!-- backwards compatibility -->
<a id="schemarequestid"></a>
<a id="schema_RequestId"></a>
<a id="tocSrequestid"></a>
<a id="tocsrequestid"></a>

```json
"string"
```

<h2 id="tocS_Requester">Requester</h2>
<!-- backwards compatibility -->
<a id="schemarequester"></a>
<a id="schema_Requester"></a>
<a id="tocSrequester"></a>
<a id="tocsrequester"></a>

```json
"string"
```

<h2 id="tocS_VendorName">VendorName</h2>
<!-- backwards compatibility -->
<a id="schemavendorname"></a>
<a id="schema_VendorName"></a>
<a id="tocSvendorname"></a>
<a id="tocsvendorname"></a>

```json
"GitHub"
```

<h2 id="tocS_RequestMetadata">RequestMetadata</h2>
<!-- backwards compatibility -->
<a id="schemarequestmetadata"></a>
<a id="schema_RequestMetadata"></a>
<a id="tocSrequestmetadata"></a>
<a id="tocsrequestmetadata"></a>

```json
{
  "RequestId": {},
  "Requester": {},
  "EventInfo": {
    "Name": {},
    "State": {}
  },
  "VendorName": {}
}
```

Metadata that is associated with a code review. This applies to both pull request and repository analysis code reviews.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RequestId|object|false|none|none|
|Requester|object|false|none|none|
|EventInfo|object|false|none|none|
|VendorName|object|false|none|none|

<h2 id="tocS_RuleId">RuleId</h2>
<!-- backwards compatibility -->
<a id="schemaruleid"></a>
<a id="schema_RuleId"></a>
<a id="tocSruleid"></a>
<a id="tocsruleid"></a>

```json
"string"
```

<h2 id="tocS_RuleName">RuleName</h2>
<!-- backwards compatibility -->
<a id="schemarulename"></a>
<a id="schema_RuleName"></a>
<a id="tocSrulename"></a>
<a id="tocsrulename"></a>

```json
"string"
```

<h2 id="tocS_ShortDescription">ShortDescription</h2>
<!-- backwards compatibility -->
<a id="schemashortdescription"></a>
<a id="schema_ShortDescription"></a>
<a id="tocSshortdescription"></a>
<a id="tocsshortdescription"></a>

```json
"string"
```

<h2 id="tocS_RuleTags">RuleTags</h2>
<!-- backwards compatibility -->
<a id="schemaruletags"></a>
<a id="schema_RuleTags"></a>
<a id="tocSruletags"></a>
<a id="tocsruletags"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RuleTag">RuleTag</h2>
<!-- backwards compatibility -->
<a id="schemaruletag"></a>
<a id="schema_RuleTag"></a>
<a id="tocSruletag"></a>
<a id="tocsruletag"></a>

```json
"string"
```

<h2 id="tocS_S3BucketName">S3BucketName</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketname"></a>
<a id="schema_S3BucketName"></a>
<a id="tocSs3bucketname"></a>
<a id="tocss3bucketname"></a>

```json
"string"
```

<h2 id="tocS_S3BucketRepository">S3BucketRepository</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketrepository"></a>
<a id="schema_S3BucketRepository"></a>
<a id="tocSs3bucketrepository"></a>
<a id="tocss3bucketrepository"></a>

```json
{
  "Name": {},
  "Details": {
    "BucketName": {},
    "CodeArtifacts": {
      "SourceCodeArtifactsObjectKey": {},
      "BuildArtifactsObjectKey": {}
    }
  }
}
```

Information about an associated repository in an S3 bucket. The associated repository contains a source code .zip file and a build artifacts .zip file that contains .jar or .class files.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Details|object|false|none|none|

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
