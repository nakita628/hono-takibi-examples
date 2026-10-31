<h1 id="amazon-textract">Amazon Textract v2018-06-27</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Amazon Textract detects and analyzes text in documents and converts it into machine-readable text. This is the API reference documentation for Amazon Textract.

Base URLs:

* <a href="http://textract.us-east-1.amazonaws.com">http://textract.us-east-1.amazonaws.com</a> - The Amazon Textract multi-region endpoint

* <a href="https://textract.us-east-1.amazonaws.com">https://textract.us-east-1.amazonaws.com</a> - The Amazon Textract multi-region endpoint

* <a href="http://textract.cn-north-1.amazonaws.com.cn">http://textract.cn-north-1.amazonaws.com.cn</a> - The Amazon Textract endpoint for China (Beijing) and China (Ningxia)

* <a href="https://textract.cn-north-1.amazonaws.com.cn">https://textract.cn-north-1.amazonaws.com.cn</a> - The Amazon Textract endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/textract/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-textract-default">Default</h1>

## AnalyzeDocument

<a id="opIdAnalyzeDocument"></a>

> Code samples

```bash
curl 'https://textract.us-east-1.amazonaws.com/#X-Amz-Target=Textract.AnalyzeDocument' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Textract.AnalyzeDocument' \
  -d '{
    "Document": {
      "Bytes": {},
      "S3Object": {
        "Bucket": {},
        "Name": {},
        "Version": {}
      }
    },
    "FeatureTypes": {},
    "HumanLoopConfig": {
      "HumanLoopName": {},
      "FlowDefinitionArn": {},
      "DataAttributes": {
        "ContentClassifiers": {}
      }
    },
    "QueriesConfig": {
      "Queries": {}
    }
  }'
```

`POST /#X-Amz-Target=Textract.AnalyzeDocument`

<p>Analyzes an input document for relationships between detected items. </p> <p>The types of information returned are as follows: </p> <ul> <li> <p>Form data (key-value pairs). The related information is returned in two <a>Block</a> objects, each of type <code>KEY_VALUE_SET</code>: a KEY <code>Block</code> object and a VALUE <code>Block</code> object. For example, <i>Name: Ana Silva Carolina</i> contains a key and value. <i>Name:</i> is the key. <i>Ana Silva Carolina</i> is the value.</p> </li> <li> <p>Table and table cell data. A TABLE <code>Block</code> object contains information about a detected table. A CELL <code>Block</code> object is returned for each cell in a table.</p> </li> <li> <p>Lines and words of text. A LINE <code>Block</code> object contains one or more WORD <code>Block</code> objects. All lines and words that are detected in the document are returned (including text that doesn't have a relationship with the value of <code>FeatureTypes</code>). </p> </li> <li> <p>Signatures. A SIGNATURE <code>Block</code> object contains the location information of a signature in a document. If used in conjunction with forms or tables, a signature can be given a Key-Value pairing or be detected in the cell of a table.</p> </li> <li> <p>Query. A QUERY Block object contains the query text, alias and link to the associated Query results block object.</p> </li> <li> <p>Query Result. A QUERY_RESULT Block object contains the answer to the query and an ID that connects it to the query asked. This Block also contains a confidence score.</p> </li> </ul> <p>Selection elements such as check boxes and option buttons (radio buttons) can be detected in form data and in tables. A SELECTION_ELEMENT <code>Block</code> object contains information about a selection element, including the selection status.</p> <p>You can choose which type of analysis to perform by specifying the <code>FeatureTypes</code> list. </p> <p>The output is returned in a list of <code>Block</code> objects.</p> <p> <code>AnalyzeDocument</code> is a synchronous operation. To analyze documents asynchronously, use <a>StartDocumentAnalysis</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>

> Body parameter

```json
{
  "Document": {
    "Bytes": {},
    "S3Object": {
      "Bucket": {},
      "Name": {},
      "Version": {}
    }
  },
  "FeatureTypes": {},
  "HumanLoopConfig": {
    "HumanLoopName": {},
    "FlowDefinitionArn": {},
    "DataAttributes": {
      "ContentClassifiers": {}
    }
  },
  "QueriesConfig": {
    "Queries": {}
  }
}
```

<h3 id="analyzedocument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[AnalyzeDocumentRequest](#schemaanalyzedocumentrequest)|true|none|
|» Document|body|object|true|none|
|» » Bytes|body|object|false|none|
|» » S3Object|body|object|false|none|
|» » » Bucket|body|object|false|none|
|» » » Name|body|object|false|none|
|» » » Version|body|object|false|none|
|» FeatureTypes|body|object|true|none|
|» HumanLoopConfig|body|object|false|none|
|» » HumanLoopName|body|object|true|none|
|» » FlowDefinitionArn|body|object|true|none|
|» » DataAttributes|body|object|false|none|
|» » » ContentClassifiers|body|object|false|none|
|» QueriesConfig|body|object|false|none|
|» » Queries|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Textract.AnalyzeDocument|

> Example responses

> 200 Response

```json
{
  "DocumentMetadata": {
    "Pages": {}
  },
  "Blocks": {},
  "HumanLoopActivationOutput": {
    "HumanLoopArn": {},
    "HumanLoopActivationReasons": {},
    "HumanLoopActivationConditionsEvaluationResults": {}
  },
  "AnalyzeDocumentModelVersion": {}
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

> 489 Response

```json
null
```

<h3 id="analyzedocument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AnalyzeDocumentResponse](#schemaanalyzedocumentresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidS3ObjectException|[InvalidS3ObjectException](#schemainvalids3objectexception)|
|482|482|UnsupportedDocumentException|[UnsupportedDocumentException](#schemaunsupporteddocumentexception)|
|483|483|DocumentTooLargeException|[DocumentTooLargeException](#schemadocumenttoolargeexception)|
|484|484|BadDocumentException|[BadDocumentException](#schemabaddocumentexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|487|487|InternalServerError|[InternalServerError](#schemainternalservererror)|
|488|488|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|489|489|HumanLoopQuotaExceededException|[HumanLoopQuotaExceededException](#schemahumanloopquotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AnalyzeExpense

<a id="opIdAnalyzeExpense"></a>

> Code samples

```bash
curl 'https://textract.us-east-1.amazonaws.com/#X-Amz-Target=Textract.AnalyzeExpense' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Textract.AnalyzeExpense' \
  -d '{
    "Document": {
      "Bytes": {},
      "S3Object": {
        "Bucket": {},
        "Name": {},
        "Version": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=Textract.AnalyzeExpense`

<p> <code>AnalyzeExpense</code> synchronously analyzes an input document for financially related relationships between text.</p> <p>Information is returned as <code>ExpenseDocuments</code> and seperated as follows:</p> <ul> <li> <p> <code>LineItemGroups</code>- A data set containing <code>LineItems</code> which store information about the lines of text, such as an item purchased and its price on a receipt.</p> </li> <li> <p> <code>SummaryFields</code>- Contains all other information a receipt, such as header information or the vendors name.</p> </li> </ul>

> Body parameter

```json
{
  "Document": {
    "Bytes": {},
    "S3Object": {
      "Bucket": {},
      "Name": {},
      "Version": {}
    }
  }
}
```

<h3 id="analyzeexpense-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[AnalyzeExpenseRequest](#schemaanalyzeexpenserequest)|true|none|
|» Document|body|[Document](#schemadocument)|true|<p>The input document, either as bytes or as an S3 object.</p> <p>You pass image bytes to an Amazon Textract API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass a document loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64 encoded. Your code might not need to encode document file bytes if you're using an AWS SDK to call Amazon Textract API operations. </p> <p>You pass images stored in an S3 bucket to an Amazon Textract API operation by using the <code>S3Object</code> property. Documents stored in an S3 bucket don't need to be base64 encoded.</p> <p>The AWS Region for the S3 bucket that contains the S3 object must match the AWS Region that you use for Amazon Textract operations.</p> <p>If you use the AWS CLI to call Amazon Textract operations, passing image bytes using the Bytes property isn't supported. You must first upload the document to an Amazon S3 bucket, and then call the operation using the S3Object property.</p> <p>For Amazon Textract to process an S3 object, the user must have permission to access the S3 object. </p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Textract.AnalyzeExpense|

> Example responses

> 200 Response

```json
{
  "DocumentMetadata": {
    "Pages": {}
  },
  "ExpenseDocuments": {}
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

<h3 id="analyzeexpense-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AnalyzeExpenseResponse](#schemaanalyzeexpenseresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidS3ObjectException|[InvalidS3ObjectException](#schemainvalids3objectexception)|
|482|482|UnsupportedDocumentException|[UnsupportedDocumentException](#schemaunsupporteddocumentexception)|
|483|483|DocumentTooLargeException|[DocumentTooLargeException](#schemadocumenttoolargeexception)|
|484|484|BadDocumentException|[BadDocumentException](#schemabaddocumentexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|487|487|InternalServerError|[InternalServerError](#schemainternalservererror)|
|488|488|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AnalyzeID

<a id="opIdAnalyzeID"></a>

> Code samples

```bash
curl 'https://textract.us-east-1.amazonaws.com/#X-Amz-Target=Textract.AnalyzeID' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Textract.AnalyzeID' \
  -d '{
    "DocumentPages": {}
  }'
```

`POST /#X-Amz-Target=Textract.AnalyzeID`

Analyzes identity documents for relevant information. This information is extracted and returned as <code>IdentityDocumentFields</code>, which records both the normalized field and value of the extracted text. Unlike other Amazon Textract operations, <code>AnalyzeID</code> doesn't return any Geometry data.

> Body parameter

```json
{
  "DocumentPages": {}
}
```

<h3 id="analyzeid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[AnalyzeIDRequest](#schemaanalyzeidrequest)|true|none|
|» DocumentPages|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Textract.AnalyzeID|

> Example responses

> 200 Response

```json
{
  "IdentityDocuments": {},
  "DocumentMetadata": {
    "Pages": {}
  },
  "AnalyzeIDModelVersion": {}
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

<h3 id="analyzeid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AnalyzeIDResponse](#schemaanalyzeidresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidS3ObjectException|[InvalidS3ObjectException](#schemainvalids3objectexception)|
|482|482|UnsupportedDocumentException|[UnsupportedDocumentException](#schemaunsupporteddocumentexception)|
|483|483|DocumentTooLargeException|[DocumentTooLargeException](#schemadocumenttoolargeexception)|
|484|484|BadDocumentException|[BadDocumentException](#schemabaddocumentexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|487|487|InternalServerError|[InternalServerError](#schemainternalservererror)|
|488|488|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DetectDocumentText

<a id="opIdDetectDocumentText"></a>

> Code samples

```bash
curl 'https://textract.us-east-1.amazonaws.com/#X-Amz-Target=Textract.DetectDocumentText' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Textract.DetectDocumentText' \
  -d '{
    "Document": {
      "Bytes": {},
      "S3Object": {
        "Bucket": {},
        "Name": {},
        "Version": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=Textract.DetectDocumentText`

<p>Detects text in the input document. Amazon Textract can detect lines of text and the words that make up a line of text. The input document must be in one of the following image formats: JPEG, PNG, PDF, or TIFF. <code>DetectDocumentText</code> returns the detected text in an array of <a>Block</a> objects. </p> <p>Each document page has as an associated <code>Block</code> of type PAGE. Each PAGE <code>Block</code> object is the parent of LINE <code>Block</code> objects that represent the lines of detected text on a page. A LINE <code>Block</code> object is a parent for each word that makes up the line. Words are represented by <code>Block</code> objects of type WORD.</p> <p> <code>DetectDocumentText</code> is a synchronous operation. To analyze documents asynchronously, use <a>StartDocumentTextDetection</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>

> Body parameter

```json
{
  "Document": {
    "Bytes": {},
    "S3Object": {
      "Bucket": {},
      "Name": {},
      "Version": {}
    }
  }
}
```

<h3 id="detectdocumenttext-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DetectDocumentTextRequest](#schemadetectdocumenttextrequest)|true|none|
|» Document|body|object|true|none|
|» » Bytes|body|object|false|none|
|» » S3Object|body|object|false|none|
|» » » Bucket|body|object|false|none|
|» » » Name|body|object|false|none|
|» » » Version|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Textract.DetectDocumentText|

> Example responses

> 200 Response

```json
{
  "DocumentMetadata": {
    "Pages": {}
  },
  "Blocks": {},
  "DetectDocumentTextModelVersion": {}
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

<h3 id="detectdocumenttext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetectDocumentTextResponse](#schemadetectdocumenttextresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidS3ObjectException|[InvalidS3ObjectException](#schemainvalids3objectexception)|
|482|482|UnsupportedDocumentException|[UnsupportedDocumentException](#schemaunsupporteddocumentexception)|
|483|483|DocumentTooLargeException|[DocumentTooLargeException](#schemadocumenttoolargeexception)|
|484|484|BadDocumentException|[BadDocumentException](#schemabaddocumentexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|487|487|InternalServerError|[InternalServerError](#schemainternalservererror)|
|488|488|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDocumentAnalysis

<a id="opIdGetDocumentAnalysis"></a>

> Code samples

```bash
curl 'https://textract.us-east-1.amazonaws.com/#X-Amz-Target=Textract.GetDocumentAnalysis' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Textract.GetDocumentAnalysis' \
  -d '{
    "JobId": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=Textract.GetDocumentAnalysis`

<p>Gets the results for an Amazon Textract asynchronous operation that analyzes text in a document.</p> <p>You start asynchronous text analysis by calling <a>StartDocumentAnalysis</a>, which returns a job identifier (<code>JobId</code>). When the text analysis operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to <code>StartDocumentAnalysis</code>. To get the results of the text-detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetDocumentAnalysis</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentAnalysis</code>.</p> <p> <code>GetDocumentAnalysis</code> returns an array of <a>Block</a> objects. The following types of information are returned: </p> <ul> <li> <p>Form data (key-value pairs). The related information is returned in two <a>Block</a> objects, each of type <code>KEY_VALUE_SET</code>: a KEY <code>Block</code> object and a VALUE <code>Block</code> object. For example, <i>Name: Ana Silva Carolina</i> contains a key and value. <i>Name:</i> is the key. <i>Ana Silva Carolina</i> is the value.</p> </li> <li> <p>Table and table cell data. A TABLE <code>Block</code> object contains information about a detected table. A CELL <code>Block</code> object is returned for each cell in a table.</p> </li> <li> <p>Lines and words of text. A LINE <code>Block</code> object contains one or more WORD <code>Block</code> objects. All lines and words that are detected in the document are returned (including text that doesn't have a relationship with the value of the <code>StartDocumentAnalysis</code> <code>FeatureTypes</code> input parameter). </p> </li> <li> <p>Query. A QUERY Block object contains the query text, alias and link to the associated Query results block object.</p> </li> <li> <p>Query Results. A QUERY_RESULT Block object contains the answer to the query and an ID that connects it to the query asked. This Block also contains a confidence score.</p> </li> </ul> <note> <p>While processing a document with queries, look out for <code>INVALID_REQUEST_PARAMETERS</code> output. This indicates that either the per page query limit has been exceeded or that the operation is trying to query a page in the document which doesn’t exist. </p> </note> <p>Selection elements such as check boxes and option buttons (radio buttons) can be detected in form data and in tables. A SELECTION_ELEMENT <code>Block</code> object contains information about a selection element, including the selection status.</p> <p>Use the <code>MaxResults</code> parameter to limit the number of blocks that are returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetDocumentAnalysis</code>, and populate the <code>NextToken</code> request parameter with the token value that's returned from the previous call to <code>GetDocumentAnalysis</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>

> Body parameter

```json
{
  "JobId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="getdocumentanalysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetDocumentAnalysisRequest](#schemagetdocumentanalysisrequest)|true|none|
|» JobId|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Textract.GetDocumentAnalysis|

> Example responses

> 200 Response

```json
{
  "DocumentMetadata": {
    "Pages": {}
  },
  "JobStatus": {},
  "NextToken": {},
  "Blocks": {},
  "Warnings": {},
  "StatusMessage": {},
  "AnalyzeDocumentModelVersion": {}
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

<h3 id="getdocumentanalysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDocumentAnalysisResponse](#schemagetdocumentanalysisresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|483|483|InvalidJobIdException|[InvalidJobIdException](#schemainvalidjobidexception)|
|484|484|InternalServerError|[InternalServerError](#schemainternalservererror)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InvalidS3ObjectException|[InvalidS3ObjectException](#schemainvalids3objectexception)|
|487|487|InvalidKMSKeyException|[InvalidKMSKeyException](#schemainvalidkmskeyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDocumentTextDetection

<a id="opIdGetDocumentTextDetection"></a>

> Code samples

```bash
curl 'https://textract.us-east-1.amazonaws.com/#X-Amz-Target=Textract.GetDocumentTextDetection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Textract.GetDocumentTextDetection' \
  -d '{
    "JobId": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=Textract.GetDocumentTextDetection`

<p>Gets the results for an Amazon Textract asynchronous operation that detects text in a document. Amazon Textract can detect lines of text and the words that make up a line of text.</p> <p>You start asynchronous text detection by calling <a>StartDocumentTextDetection</a>, which returns a job identifier (<code>JobId</code>). When the text detection operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to <code>StartDocumentTextDetection</code>. To get the results of the text-detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetDocumentTextDetection</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentTextDetection</code>.</p> <p> <code>GetDocumentTextDetection</code> returns an array of <a>Block</a> objects. </p> <p>Each document page has as an associated <code>Block</code> of type PAGE. Each PAGE <code>Block</code> object is the parent of LINE <code>Block</code> objects that represent the lines of detected text on a page. A LINE <code>Block</code> object is a parent for each word that makes up the line. Words are represented by <code>Block</code> objects of type WORD.</p> <p>Use the MaxResults parameter to limit the number of blocks that are returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetDocumentTextDetection</code>, and populate the <code>NextToken</code> request parameter with the token value that's returned from the previous call to <code>GetDocumentTextDetection</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>

> Body parameter

```json
{
  "JobId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="getdocumenttextdetection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetDocumentTextDetectionRequest](#schemagetdocumenttextdetectionrequest)|true|none|
|» JobId|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Textract.GetDocumentTextDetection|

> Example responses

> 200 Response

```json
{
  "DocumentMetadata": {
    "Pages": {}
  },
  "JobStatus": {},
  "NextToken": {},
  "Blocks": {},
  "Warnings": {},
  "StatusMessage": {},
  "DetectDocumentTextModelVersion": {}
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

<h3 id="getdocumenttextdetection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDocumentTextDetectionResponse](#schemagetdocumenttextdetectionresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|483|483|InvalidJobIdException|[InvalidJobIdException](#schemainvalidjobidexception)|
|484|484|InternalServerError|[InternalServerError](#schemainternalservererror)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InvalidS3ObjectException|[InvalidS3ObjectException](#schemainvalids3objectexception)|
|487|487|InvalidKMSKeyException|[InvalidKMSKeyException](#schemainvalidkmskeyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetExpenseAnalysis

<a id="opIdGetExpenseAnalysis"></a>

> Code samples

```bash
curl 'https://textract.us-east-1.amazonaws.com/#X-Amz-Target=Textract.GetExpenseAnalysis' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Textract.GetExpenseAnalysis' \
  -d '{
    "JobId": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=Textract.GetExpenseAnalysis`

<p>Gets the results for an Amazon Textract asynchronous operation that analyzes invoices and receipts. Amazon Textract finds contact information, items purchased, and vendor name, from input invoices and receipts.</p> <p>You start asynchronous invoice/receipt analysis by calling <a>StartExpenseAnalysis</a>, which returns a job identifier (<code>JobId</code>). Upon completion of the invoice/receipt analysis, Amazon Textract publishes the completion status to the Amazon Simple Notification Service (Amazon SNS) topic. This topic must be registered in the initial call to <code>StartExpenseAnalysis</code>. To get the results of the invoice/receipt analysis operation, first ensure that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetExpenseAnalysis</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartExpenseAnalysis</code>.</p> <p>Use the MaxResults parameter to limit the number of blocks that are returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetExpenseAnalysis</code>, and populate the <code>NextToken</code> request parameter with the token value that's returned from the previous call to <code>GetExpenseAnalysis</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/invoices-receipts.html">Analyzing Invoices and Receipts</a>.</p>

> Body parameter

```json
{
  "JobId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="getexpenseanalysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetExpenseAnalysisRequest](#schemagetexpenseanalysisrequest)|true|none|
|» JobId|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Textract.GetExpenseAnalysis|

> Example responses

> 200 Response

```json
{
  "DocumentMetadata": {
    "Pages": {}
  },
  "JobStatus": {},
  "NextToken": {},
  "ExpenseDocuments": {},
  "Warnings": {},
  "StatusMessage": {},
  "AnalyzeExpenseModelVersion": {}
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

<h3 id="getexpenseanalysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetExpenseAnalysisResponse](#schemagetexpenseanalysisresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|483|483|InvalidJobIdException|[InvalidJobIdException](#schemainvalidjobidexception)|
|484|484|InternalServerError|[InternalServerError](#schemainternalservererror)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InvalidS3ObjectException|[InvalidS3ObjectException](#schemainvalids3objectexception)|
|487|487|InvalidKMSKeyException|[InvalidKMSKeyException](#schemainvalidkmskeyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLendingAnalysis

<a id="opIdGetLendingAnalysis"></a>

> Code samples

```bash
curl 'https://textract.us-east-1.amazonaws.com/#X-Amz-Target=Textract.GetLendingAnalysis' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Textract.GetLendingAnalysis' \
  -d '{
    "JobId": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=Textract.GetLendingAnalysis`

<p>Gets the results for an Amazon Textract asynchronous operation that analyzes text in a lending document. </p> <p>You start asynchronous text analysis by calling <code>StartLendingAnalysis</code>, which returns a job identifier (<code>JobId</code>). When the text analysis operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to <code>StartLendingAnalysis</code>. </p> <p>To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetLendingAnalysis, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartLendingAnalysis</code>.</p>

> Body parameter

```json
{
  "JobId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="getlendinganalysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetLendingAnalysisRequest](#schemagetlendinganalysisrequest)|true|none|
|» JobId|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Textract.GetLendingAnalysis|

> Example responses

> 200 Response

```json
{
  "DocumentMetadata": {
    "Pages": {}
  },
  "JobStatus": {},
  "NextToken": {},
  "Results": {},
  "Warnings": {},
  "StatusMessage": {},
  "AnalyzeLendingModelVersion": {}
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

<h3 id="getlendinganalysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLendingAnalysisResponse](#schemagetlendinganalysisresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|483|483|InvalidJobIdException|[InvalidJobIdException](#schemainvalidjobidexception)|
|484|484|InternalServerError|[InternalServerError](#schemainternalservererror)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InvalidS3ObjectException|[InvalidS3ObjectException](#schemainvalids3objectexception)|
|487|487|InvalidKMSKeyException|[InvalidKMSKeyException](#schemainvalidkmskeyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLendingAnalysisSummary

<a id="opIdGetLendingAnalysisSummary"></a>

> Code samples

```bash
curl 'https://textract.us-east-1.amazonaws.com/#X-Amz-Target=Textract.GetLendingAnalysisSummary' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Textract.GetLendingAnalysisSummary' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=Textract.GetLendingAnalysisSummary`

<p>Gets summarized results for the <code>StartLendingAnalysis</code> operation, which analyzes text in a lending document. The returned summary consists of information about documents grouped together by a common document type. Information like detected signatures, page numbers, and split documents is returned with respect to the type of grouped document. </p> <p>You start asynchronous text analysis by calling <code>StartLendingAnalysis</code>, which returns a job identifier (<code>JobId</code>). When the text analysis operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to <code>StartLendingAnalysis</code>. </p> <p>To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call <code>GetLendingAnalysisSummary</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartLendingAnalysis</code>.</p>

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="getlendinganalysissummary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetLendingAnalysisSummaryRequest](#schemagetlendinganalysissummaryrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Textract.GetLendingAnalysisSummary|

> Example responses

> 200 Response

```json
{
  "DocumentMetadata": {
    "Pages": {}
  },
  "JobStatus": {},
  "Summary": {
    "DocumentGroups": {},
    "UndetectedDocumentTypes": {}
  },
  "Warnings": {},
  "StatusMessage": {},
  "AnalyzeLendingModelVersion": {}
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

<h3 id="getlendinganalysissummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLendingAnalysisSummaryResponse](#schemagetlendinganalysissummaryresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|483|483|InvalidJobIdException|[InvalidJobIdException](#schemainvalidjobidexception)|
|484|484|InternalServerError|[InternalServerError](#schemainternalservererror)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InvalidS3ObjectException|[InvalidS3ObjectException](#schemainvalids3objectexception)|
|487|487|InvalidKMSKeyException|[InvalidKMSKeyException](#schemainvalidkmskeyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartDocumentAnalysis

<a id="opIdStartDocumentAnalysis"></a>

> Code samples

```bash
curl 'https://textract.us-east-1.amazonaws.com/#X-Amz-Target=Textract.StartDocumentAnalysis' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Textract.StartDocumentAnalysis' \
  -d '{
    "DocumentLocation": {
      "S3Object": {
        "Bucket": {},
        "Name": {},
        "Version": {}
      }
    },
    "FeatureTypes": {},
    "ClientRequestToken": {},
    "JobTag": {},
    "NotificationChannel": {
      "SNSTopicArn": {},
      "RoleArn": {}
    },
    "OutputConfig": {
      "S3Bucket": {},
      "S3Prefix": {}
    },
    "KMSKeyId": {},
    "QueriesConfig": {
      "Queries": {}
    }
  }'
```

`POST /#X-Amz-Target=Textract.StartDocumentAnalysis`

<p>Starts the asynchronous analysis of an input document for relationships between detected items such as key-value pairs, tables, and selection elements.</p> <p> <code>StartDocumentAnalysis</code> can analyze text in documents that are in JPEG, PNG, TIFF, and PDF format. The documents are stored in an Amazon S3 bucket. Use <a>DocumentLocation</a> to specify the bucket name and file name of the document. </p> <p> <code>StartDocumentAnalysis</code> returns a job identifier (<code>JobId</code>) that you use to get the results of the operation. When text analysis is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in <code>NotificationChannel</code>. To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetDocumentAnalysis</a>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentAnalysis</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>

> Body parameter

```json
{
  "DocumentLocation": {
    "S3Object": {
      "Bucket": {},
      "Name": {},
      "Version": {}
    }
  },
  "FeatureTypes": {},
  "ClientRequestToken": {},
  "JobTag": {},
  "NotificationChannel": {
    "SNSTopicArn": {},
    "RoleArn": {}
  },
  "OutputConfig": {
    "S3Bucket": {},
    "S3Prefix": {}
  },
  "KMSKeyId": {},
  "QueriesConfig": {
    "Queries": {}
  }
}
```

<h3 id="startdocumentanalysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StartDocumentAnalysisRequest](#schemastartdocumentanalysisrequest)|true|none|
|» DocumentLocation|body|object|true|none|
|» » S3Object|body|object|false|none|
|» » » Bucket|body|object|false|none|
|» » » Name|body|object|false|none|
|» » » Version|body|object|false|none|
|» FeatureTypes|body|object|true|none|
|» ClientRequestToken|body|object|false|none|
|» JobTag|body|object|false|none|
|» NotificationChannel|body|object|false|none|
|» » SNSTopicArn|body|object|true|none|
|» » RoleArn|body|object|true|none|
|» OutputConfig|body|object|false|none|
|» » S3Bucket|body|object|true|none|
|» » S3Prefix|body|object|false|none|
|» KMSKeyId|body|object|false|none|
|» QueriesConfig|body|[QueriesConfig](#schemaqueriesconfig)|false|<p/>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Textract.StartDocumentAnalysis|

> Example responses

> 200 Response

```json
{
  "JobId": {}
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

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

<h3 id="startdocumentanalysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartDocumentAnalysisResponse](#schemastartdocumentanalysisresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidS3ObjectException|[InvalidS3ObjectException](#schemainvalids3objectexception)|
|482|482|InvalidKMSKeyException|[InvalidKMSKeyException](#schemainvalidkmskeyexception)|
|483|483|UnsupportedDocumentException|[UnsupportedDocumentException](#schemaunsupporteddocumentexception)|
|484|484|DocumentTooLargeException|[DocumentTooLargeException](#schemadocumenttoolargeexception)|
|485|485|BadDocumentException|[BadDocumentException](#schemabaddocumentexception)|
|486|486|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|487|487|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|488|488|InternalServerError|[InternalServerError](#schemainternalservererror)|
|489|489|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|490|490|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|491|491|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartDocumentTextDetection

<a id="opIdStartDocumentTextDetection"></a>

> Code samples

```bash
curl 'https://textract.us-east-1.amazonaws.com/#X-Amz-Target=Textract.StartDocumentTextDetection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Textract.StartDocumentTextDetection' \
  -d '{
    "DocumentLocation": {
      "S3Object": {
        "Bucket": {},
        "Name": {},
        "Version": {}
      }
    },
    "ClientRequestToken": {},
    "JobTag": {},
    "NotificationChannel": {
      "SNSTopicArn": {},
      "RoleArn": {}
    },
    "OutputConfig": {
      "S3Bucket": {},
      "S3Prefix": {}
    },
    "KMSKeyId": {}
  }'
```

`POST /#X-Amz-Target=Textract.StartDocumentTextDetection`

<p>Starts the asynchronous detection of text in a document. Amazon Textract can detect lines of text and the words that make up a line of text.</p> <p> <code>StartDocumentTextDetection</code> can analyze text in documents that are in JPEG, PNG, TIFF, and PDF format. The documents are stored in an Amazon S3 bucket. Use <a>DocumentLocation</a> to specify the bucket name and file name of the document. </p> <p> <code>StartTextDetection</code> returns a job identifier (<code>JobId</code>) that you use to get the results of the operation. When text detection is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in <code>NotificationChannel</code>. To get the results of the text detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetDocumentTextDetection</a>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentTextDetection</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>

> Body parameter

```json
{
  "DocumentLocation": {
    "S3Object": {
      "Bucket": {},
      "Name": {},
      "Version": {}
    }
  },
  "ClientRequestToken": {},
  "JobTag": {},
  "NotificationChannel": {
    "SNSTopicArn": {},
    "RoleArn": {}
  },
  "OutputConfig": {
    "S3Bucket": {},
    "S3Prefix": {}
  },
  "KMSKeyId": {}
}
```

<h3 id="startdocumenttextdetection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StartDocumentTextDetectionRequest](#schemastartdocumenttextdetectionrequest)|true|none|
|» DocumentLocation|body|object|true|none|
|» » S3Object|body|object|false|none|
|» » » Bucket|body|object|false|none|
|» » » Name|body|object|false|none|
|» » » Version|body|object|false|none|
|» ClientRequestToken|body|object|false|none|
|» JobTag|body|object|false|none|
|» NotificationChannel|body|object|false|none|
|» » SNSTopicArn|body|object|true|none|
|» » RoleArn|body|object|true|none|
|» OutputConfig|body|object|false|none|
|» » S3Bucket|body|object|true|none|
|» » S3Prefix|body|object|false|none|
|» KMSKeyId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Textract.StartDocumentTextDetection|

> Example responses

> 200 Response

```json
{
  "JobId": {}
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

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

<h3 id="startdocumenttextdetection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartDocumentTextDetectionResponse](#schemastartdocumenttextdetectionresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidS3ObjectException|[InvalidS3ObjectException](#schemainvalids3objectexception)|
|482|482|InvalidKMSKeyException|[InvalidKMSKeyException](#schemainvalidkmskeyexception)|
|483|483|UnsupportedDocumentException|[UnsupportedDocumentException](#schemaunsupporteddocumentexception)|
|484|484|DocumentTooLargeException|[DocumentTooLargeException](#schemadocumenttoolargeexception)|
|485|485|BadDocumentException|[BadDocumentException](#schemabaddocumentexception)|
|486|486|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|487|487|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|488|488|InternalServerError|[InternalServerError](#schemainternalservererror)|
|489|489|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|490|490|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|491|491|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartExpenseAnalysis

<a id="opIdStartExpenseAnalysis"></a>

> Code samples

```bash
curl 'https://textract.us-east-1.amazonaws.com/#X-Amz-Target=Textract.StartExpenseAnalysis' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Textract.StartExpenseAnalysis' \
  -d '{
    "DocumentLocation": {
      "S3Object": {
        "Bucket": {},
        "Name": {},
        "Version": {}
      }
    },
    "ClientRequestToken": {},
    "JobTag": {},
    "NotificationChannel": {
      "SNSTopicArn": {},
      "RoleArn": {}
    },
    "OutputConfig": {
      "S3Bucket": {},
      "S3Prefix": {}
    },
    "KMSKeyId": {}
  }'
```

`POST /#X-Amz-Target=Textract.StartExpenseAnalysis`

<p>Starts the asynchronous analysis of invoices or receipts for data like contact information, items purchased, and vendor names.</p> <p> <code>StartExpenseAnalysis</code> can analyze text in documents that are in JPEG, PNG, and PDF format. The documents must be stored in an Amazon S3 bucket. Use the <a>DocumentLocation</a> parameter to specify the name of your S3 bucket and the name of the document in that bucket. </p> <p> <code>StartExpenseAnalysis</code> returns a job identifier (<code>JobId</code>) that you will provide to <code>GetExpenseAnalysis</code> to retrieve the results of the operation. When the analysis of the input invoices/receipts is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you provide to the <code>NotificationChannel</code>. To obtain the results of the invoice and receipt analysis operation, ensure that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetExpenseAnalysis</a>, and pass the job identifier (<code>JobId</code>) that was returned by your call to <code>StartExpenseAnalysis</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/invoice-receipts.html">Analyzing Invoices and Receipts</a>.</p>

> Body parameter

```json
{
  "DocumentLocation": {
    "S3Object": {
      "Bucket": {},
      "Name": {},
      "Version": {}
    }
  },
  "ClientRequestToken": {},
  "JobTag": {},
  "NotificationChannel": {
    "SNSTopicArn": {},
    "RoleArn": {}
  },
  "OutputConfig": {
    "S3Bucket": {},
    "S3Prefix": {}
  },
  "KMSKeyId": {}
}
```

<h3 id="startexpenseanalysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StartExpenseAnalysisRequest](#schemastartexpenseanalysisrequest)|true|none|
|» DocumentLocation|body|object|true|none|
|» » S3Object|body|object|false|none|
|» » » Bucket|body|object|false|none|
|» » » Name|body|object|false|none|
|» » » Version|body|object|false|none|
|» ClientRequestToken|body|object|false|none|
|» JobTag|body|object|false|none|
|» NotificationChannel|body|object|false|none|
|» » SNSTopicArn|body|object|true|none|
|» » RoleArn|body|object|true|none|
|» OutputConfig|body|object|false|none|
|» » S3Bucket|body|object|true|none|
|» » S3Prefix|body|object|false|none|
|» KMSKeyId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Textract.StartExpenseAnalysis|

> Example responses

> 200 Response

```json
{
  "JobId": {}
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

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

<h3 id="startexpenseanalysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartExpenseAnalysisResponse](#schemastartexpenseanalysisresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidS3ObjectException|[InvalidS3ObjectException](#schemainvalids3objectexception)|
|482|482|InvalidKMSKeyException|[InvalidKMSKeyException](#schemainvalidkmskeyexception)|
|483|483|UnsupportedDocumentException|[UnsupportedDocumentException](#schemaunsupporteddocumentexception)|
|484|484|DocumentTooLargeException|[DocumentTooLargeException](#schemadocumenttoolargeexception)|
|485|485|BadDocumentException|[BadDocumentException](#schemabaddocumentexception)|
|486|486|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|487|487|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|488|488|InternalServerError|[InternalServerError](#schemainternalservererror)|
|489|489|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|490|490|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|491|491|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartLendingAnalysis

<a id="opIdStartLendingAnalysis"></a>

> Code samples

```bash
curl 'https://textract.us-east-1.amazonaws.com/#X-Amz-Target=Textract.StartLendingAnalysis' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Textract.StartLendingAnalysis' \
  -d '{
    "DocumentLocation": {
      "S3Object": {
        "Bucket": {},
        "Name": {},
        "Version": {}
      }
    },
    "ClientRequestToken": {},
    "JobTag": {},
    "NotificationChannel": {
      "SNSTopicArn": {},
      "RoleArn": {}
    },
    "OutputConfig": {
      "S3Bucket": {},
      "S3Prefix": {}
    },
    "KMSKeyId": {}
  }'
```

`POST /#X-Amz-Target=Textract.StartLendingAnalysis`

<p>Starts the classification and analysis of an input document. <code>StartLendingAnalysis</code> initiates the classification and analysis of a packet of lending documents. <code>StartLendingAnalysis</code> operates on a document file located in an Amazon S3 bucket.</p> <p> <code>StartLendingAnalysis</code> can analyze text in documents that are in one of the following formats: JPEG, PNG, TIFF, PDF. Use <code>DocumentLocation</code> to specify the bucket name and the file name of the document. </p> <p> <code>StartLendingAnalysis</code> returns a job identifier (<code>JobId</code>) that you use to get the results of the operation. When the text analysis is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in <code>NotificationChannel</code>. To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If the status is SUCCEEDED you can call either <code>GetLendingAnalysis</code> or <code>GetLendingAnalysisSummary</code> and provide the <code>JobId</code> to obtain the results of the analysis.</p> <p>If using <code>OutputConfig</code> to specify an Amazon S3 bucket, the output will be contained within the specified prefix in a directory labeled with the job-id. In the directory there are 3 sub-directories: </p> <ul> <li> <p>detailedResponse (contains the GetLendingAnalysis response)</p> </li> <li> <p>summaryResponse (for the GetLendingAnalysisSummary response)</p> </li> <li> <p>splitDocuments (documents split across logical boundaries)</p> </li> </ul>

> Body parameter

```json
{
  "DocumentLocation": {
    "S3Object": {
      "Bucket": {},
      "Name": {},
      "Version": {}
    }
  },
  "ClientRequestToken": {},
  "JobTag": {},
  "NotificationChannel": {
    "SNSTopicArn": {},
    "RoleArn": {}
  },
  "OutputConfig": {
    "S3Bucket": {},
    "S3Prefix": {}
  },
  "KMSKeyId": {}
}
```

<h3 id="startlendinganalysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StartLendingAnalysisRequest](#schemastartlendinganalysisrequest)|true|none|
|» DocumentLocation|body|[DocumentLocation](#schemadocumentlocation)|true|<p>The Amazon S3 bucket that contains the document to be processed. It's used by asynchronous operations.</p> <p>The input document can be an image file in JPEG or PNG format. It can also be a file in PDF format.</p>|
|» ClientRequestToken|body|object|false|none|
|» JobTag|body|object|false|none|
|» NotificationChannel|body|[NotificationChannel](#schemanotificationchannel)|false|The Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Textract publishes the completion status of an asynchronous document operation. |
|» OutputConfig|body|[OutputConfig](#schemaoutputconfig)|false|<p>Sets whether or not your output will go to a user created bucket. Used to set the name of the bucket, and the prefix on the output file.</p> <p> <code>OutputConfig</code> is an optional parameter which lets you adjust where your output will be placed. By default, Amazon Textract will store the results internally and can only be accessed by the Get API operations. With <code>OutputConfig</code> enabled, you can set the name of the bucket the output will be sent to the file prefix of the results where you can download your results. Additionally, you can set the <code>KMSKeyID</code> parameter to a customer master key (CMK) to encrypt your output. Without this parameter set Amazon Textract will encrypt server-side using the AWS managed CMK for Amazon S3.</p> <p>Decryption of Customer Content is necessary for processing of the documents by Amazon Textract. If your account is opted out under an AI services opt out policy then all unencrypted Customer Content is immediately and permanently deleted after the Customer Content has been processed by the service. No copy of of the output is retained by Amazon Textract. For information about how to opt out, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html"> Managing AI services opt-out policy. </a> </p> <p>For more information on data privacy, see the <a href="https://aws.amazon.com/compliance/data-privacy-faq/">Data Privacy FAQ</a>.</p>|
|» KMSKeyId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Textract.StartLendingAnalysis|

> Example responses

> 200 Response

```json
{
  "JobId": {}
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

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

<h3 id="startlendinganalysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartLendingAnalysisResponse](#schemastartlendinganalysisresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidS3ObjectException|[InvalidS3ObjectException](#schemainvalids3objectexception)|
|482|482|InvalidKMSKeyException|[InvalidKMSKeyException](#schemainvalidkmskeyexception)|
|483|483|UnsupportedDocumentException|[UnsupportedDocumentException](#schemaunsupporteddocumentexception)|
|484|484|DocumentTooLargeException|[DocumentTooLargeException](#schemadocumenttoolargeexception)|
|485|485|BadDocumentException|[BadDocumentException](#schemabaddocumentexception)|
|486|486|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|487|487|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|488|488|InternalServerError|[InternalServerError](#schemainternalservererror)|
|489|489|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|490|490|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|491|491|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AnalyzeDocumentResponse">AnalyzeDocumentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzedocumentresponse"></a>
<a id="schema_AnalyzeDocumentResponse"></a>
<a id="tocSanalyzedocumentresponse"></a>
<a id="tocsanalyzedocumentresponse"></a>

```json
{
  "DocumentMetadata": {
    "Pages": {}
  },
  "Blocks": {},
  "HumanLoopActivationOutput": {
    "HumanLoopArn": {},
    "HumanLoopActivationReasons": {},
    "HumanLoopActivationConditionsEvaluationResults": {}
  },
  "AnalyzeDocumentModelVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentMetadata|object|false|none|none|
|Blocks|object|false|none|none|
|HumanLoopActivationOutput|object|false|none|none|
|AnalyzeDocumentModelVersion|object|false|none|none|

<h2 id="tocS_AnalyzeDocumentRequest">AnalyzeDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzedocumentrequest"></a>
<a id="schema_AnalyzeDocumentRequest"></a>
<a id="tocSanalyzedocumentrequest"></a>
<a id="tocsanalyzedocumentrequest"></a>

```json
{
  "Document": {
    "Bytes": {},
    "S3Object": {
      "Bucket": {},
      "Name": {},
      "Version": {}
    }
  },
  "FeatureTypes": {},
  "HumanLoopConfig": {
    "HumanLoopName": {},
    "FlowDefinitionArn": {},
    "DataAttributes": {
      "ContentClassifiers": {}
    }
  },
  "QueriesConfig": {
    "Queries": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Document|object|true|none|none|
|FeatureTypes|object|true|none|none|
|HumanLoopConfig|object|false|none|none|
|QueriesConfig|object|false|none|none|

<h2 id="tocS_InvalidParameterException">InvalidParameterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparameterexception"></a>
<a id="schema_InvalidParameterException"></a>
<a id="tocSinvalidparameterexception"></a>
<a id="tocsinvalidparameterexception"></a>

```json
null
```

<h2 id="tocS_InvalidS3ObjectException">InvalidS3ObjectException</h2>
<!-- backwards compatibility -->
<a id="schemainvalids3objectexception"></a>
<a id="schema_InvalidS3ObjectException"></a>
<a id="tocSinvalids3objectexception"></a>
<a id="tocsinvalids3objectexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedDocumentException">UnsupportedDocumentException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupporteddocumentexception"></a>
<a id="schema_UnsupportedDocumentException"></a>
<a id="tocSunsupporteddocumentexception"></a>
<a id="tocsunsupporteddocumentexception"></a>

```json
null
```

<h2 id="tocS_DocumentTooLargeException">DocumentTooLargeException</h2>
<!-- backwards compatibility -->
<a id="schemadocumenttoolargeexception"></a>
<a id="schema_DocumentTooLargeException"></a>
<a id="tocSdocumenttoolargeexception"></a>
<a id="tocsdocumenttoolargeexception"></a>

```json
null
```

<h2 id="tocS_BadDocumentException">BadDocumentException</h2>
<!-- backwards compatibility -->
<a id="schemabaddocumentexception"></a>
<a id="schema_BadDocumentException"></a>
<a id="tocSbaddocumentexception"></a>
<a id="tocsbaddocumentexception"></a>

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

<h2 id="tocS_ProvisionedThroughputExceededException">ProvisionedThroughputExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedthroughputexceededexception"></a>
<a id="schema_ProvisionedThroughputExceededException"></a>
<a id="tocSprovisionedthroughputexceededexception"></a>
<a id="tocsprovisionedthroughputexceededexception"></a>

```json
null
```

<h2 id="tocS_InternalServerError">InternalServerError</h2>
<!-- backwards compatibility -->
<a id="schemainternalservererror"></a>
<a id="schema_InternalServerError"></a>
<a id="tocSinternalservererror"></a>
<a id="tocsinternalservererror"></a>

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

<h2 id="tocS_HumanLoopQuotaExceededException">HumanLoopQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemahumanloopquotaexceededexception"></a>
<a id="schema_HumanLoopQuotaExceededException"></a>
<a id="tocShumanloopquotaexceededexception"></a>
<a id="tocshumanloopquotaexceededexception"></a>

```json
null
```

<h2 id="tocS_AnalyzeExpenseResponse">AnalyzeExpenseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzeexpenseresponse"></a>
<a id="schema_AnalyzeExpenseResponse"></a>
<a id="tocSanalyzeexpenseresponse"></a>
<a id="tocsanalyzeexpenseresponse"></a>

```json
{
  "DocumentMetadata": {
    "Pages": {}
  },
  "ExpenseDocuments": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentMetadata|[DocumentMetadata](#schemadocumentmetadata)|false|none|Information about the input document.|
|ExpenseDocuments|object|false|none|none|

<h2 id="tocS_AnalyzeExpenseRequest">AnalyzeExpenseRequest</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzeexpenserequest"></a>
<a id="schema_AnalyzeExpenseRequest"></a>
<a id="tocSanalyzeexpenserequest"></a>
<a id="tocsanalyzeexpenserequest"></a>

```json
{
  "Document": {
    "Bytes": {},
    "S3Object": {
      "Bucket": {},
      "Name": {},
      "Version": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Document|[Document](#schemadocument)|true|none|<p>The input document, either as bytes or as an S3 object.</p> <p>You pass image bytes to an Amazon Textract API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass a document loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64 encoded. Your code might not need to encode document file bytes if you're using an AWS SDK to call Amazon Textract API operations. </p> <p>You pass images stored in an S3 bucket to an Amazon Textract API operation by using the <code>S3Object</code> property. Documents stored in an S3 bucket don't need to be base64 encoded.</p> <p>The AWS Region for the S3 bucket that contains the S3 object must match the AWS Region that you use for Amazon Textract operations.</p> <p>If you use the AWS CLI to call Amazon Textract operations, passing image bytes using the Bytes property isn't supported. You must first upload the document to an Amazon S3 bucket, and then call the operation using the S3Object property.</p> <p>For Amazon Textract to process an S3 object, the user must have permission to access the S3 object. </p>|

<h2 id="tocS_AnalyzeIDResponse">AnalyzeIDResponse</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzeidresponse"></a>
<a id="schema_AnalyzeIDResponse"></a>
<a id="tocSanalyzeidresponse"></a>
<a id="tocsanalyzeidresponse"></a>

```json
{
  "IdentityDocuments": {},
  "DocumentMetadata": {
    "Pages": {}
  },
  "AnalyzeIDModelVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityDocuments|object|false|none|none|
|DocumentMetadata|[DocumentMetadata](#schemadocumentmetadata)|false|none|Information about the input document.|
|AnalyzeIDModelVersion|object|false|none|none|

<h2 id="tocS_AnalyzeIDRequest">AnalyzeIDRequest</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzeidrequest"></a>
<a id="schema_AnalyzeIDRequest"></a>
<a id="tocSanalyzeidrequest"></a>
<a id="tocsanalyzeidrequest"></a>

```json
{
  "DocumentPages": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentPages|object|true|none|none|

<h2 id="tocS_DetectDocumentTextResponse">DetectDocumentTextResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetectdocumenttextresponse"></a>
<a id="schema_DetectDocumentTextResponse"></a>
<a id="tocSdetectdocumenttextresponse"></a>
<a id="tocsdetectdocumenttextresponse"></a>

```json
{
  "DocumentMetadata": {
    "Pages": {}
  },
  "Blocks": {},
  "DetectDocumentTextModelVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentMetadata|object|false|none|none|
|Blocks|object|false|none|none|
|DetectDocumentTextModelVersion|object|false|none|none|

<h2 id="tocS_DetectDocumentTextRequest">DetectDocumentTextRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetectdocumenttextrequest"></a>
<a id="schema_DetectDocumentTextRequest"></a>
<a id="tocSdetectdocumenttextrequest"></a>
<a id="tocsdetectdocumenttextrequest"></a>

```json
{
  "Document": {
    "Bytes": {},
    "S3Object": {
      "Bucket": {},
      "Name": {},
      "Version": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Document|object|true|none|none|

<h2 id="tocS_GetDocumentAnalysisResponse">GetDocumentAnalysisResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdocumentanalysisresponse"></a>
<a id="schema_GetDocumentAnalysisResponse"></a>
<a id="tocSgetdocumentanalysisresponse"></a>
<a id="tocsgetdocumentanalysisresponse"></a>

```json
{
  "DocumentMetadata": {
    "Pages": {}
  },
  "JobStatus": {},
  "NextToken": {},
  "Blocks": {},
  "Warnings": {},
  "StatusMessage": {},
  "AnalyzeDocumentModelVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentMetadata|object|false|none|none|
|JobStatus|object|false|none|none|
|NextToken|object|false|none|none|
|Blocks|object|false|none|none|
|Warnings|object|false|none|none|
|StatusMessage|object|false|none|none|
|AnalyzeDocumentModelVersion|object|false|none|none|

<h2 id="tocS_GetDocumentAnalysisRequest">GetDocumentAnalysisRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdocumentanalysisrequest"></a>
<a id="schema_GetDocumentAnalysisRequest"></a>
<a id="tocSgetdocumentanalysisrequest"></a>
<a id="tocsgetdocumentanalysisrequest"></a>

```json
{
  "JobId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InvalidJobIdException">InvalidJobIdException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidjobidexception"></a>
<a id="schema_InvalidJobIdException"></a>
<a id="tocSinvalidjobidexception"></a>
<a id="tocsinvalidjobidexception"></a>

```json
null
```

<h2 id="tocS_InvalidKMSKeyException">InvalidKMSKeyException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidkmskeyexception"></a>
<a id="schema_InvalidKMSKeyException"></a>
<a id="tocSinvalidkmskeyexception"></a>
<a id="tocsinvalidkmskeyexception"></a>

```json
null
```

<h2 id="tocS_GetDocumentTextDetectionResponse">GetDocumentTextDetectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdocumenttextdetectionresponse"></a>
<a id="schema_GetDocumentTextDetectionResponse"></a>
<a id="tocSgetdocumenttextdetectionresponse"></a>
<a id="tocsgetdocumenttextdetectionresponse"></a>

```json
{
  "DocumentMetadata": {
    "Pages": {}
  },
  "JobStatus": {},
  "NextToken": {},
  "Blocks": {},
  "Warnings": {},
  "StatusMessage": {},
  "DetectDocumentTextModelVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentMetadata|object|false|none|none|
|JobStatus|object|false|none|none|
|NextToken|object|false|none|none|
|Blocks|object|false|none|none|
|Warnings|object|false|none|none|
|StatusMessage|object|false|none|none|
|DetectDocumentTextModelVersion|object|false|none|none|

<h2 id="tocS_GetDocumentTextDetectionRequest">GetDocumentTextDetectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdocumenttextdetectionrequest"></a>
<a id="schema_GetDocumentTextDetectionRequest"></a>
<a id="tocSgetdocumenttextdetectionrequest"></a>
<a id="tocsgetdocumenttextdetectionrequest"></a>

```json
{
  "JobId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetExpenseAnalysisResponse">GetExpenseAnalysisResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetexpenseanalysisresponse"></a>
<a id="schema_GetExpenseAnalysisResponse"></a>
<a id="tocSgetexpenseanalysisresponse"></a>
<a id="tocsgetexpenseanalysisresponse"></a>

```json
{
  "DocumentMetadata": {
    "Pages": {}
  },
  "JobStatus": {},
  "NextToken": {},
  "ExpenseDocuments": {},
  "Warnings": {},
  "StatusMessage": {},
  "AnalyzeExpenseModelVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentMetadata|object|false|none|none|
|JobStatus|object|false|none|none|
|NextToken|object|false|none|none|
|ExpenseDocuments|object|false|none|none|
|Warnings|object|false|none|none|
|StatusMessage|object|false|none|none|
|AnalyzeExpenseModelVersion|object|false|none|none|

<h2 id="tocS_GetExpenseAnalysisRequest">GetExpenseAnalysisRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetexpenseanalysisrequest"></a>
<a id="schema_GetExpenseAnalysisRequest"></a>
<a id="tocSgetexpenseanalysisrequest"></a>
<a id="tocsgetexpenseanalysisrequest"></a>

```json
{
  "JobId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetLendingAnalysisResponse">GetLendingAnalysisResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlendinganalysisresponse"></a>
<a id="schema_GetLendingAnalysisResponse"></a>
<a id="tocSgetlendinganalysisresponse"></a>
<a id="tocsgetlendinganalysisresponse"></a>

```json
{
  "DocumentMetadata": {
    "Pages": {}
  },
  "JobStatus": {},
  "NextToken": {},
  "Results": {},
  "Warnings": {},
  "StatusMessage": {},
  "AnalyzeLendingModelVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentMetadata|[DocumentMetadata](#schemadocumentmetadata)|false|none|Information about the input document.|
|JobStatus|object|false|none|none|
|NextToken|object|false|none|none|
|Results|object|false|none|none|
|Warnings|object|false|none|none|
|StatusMessage|object|false|none|none|
|AnalyzeLendingModelVersion|object|false|none|none|

<h2 id="tocS_GetLendingAnalysisRequest">GetLendingAnalysisRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlendinganalysisrequest"></a>
<a id="schema_GetLendingAnalysisRequest"></a>
<a id="tocSgetlendinganalysisrequest"></a>
<a id="tocsgetlendinganalysisrequest"></a>

```json
{
  "JobId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetLendingAnalysisSummaryResponse">GetLendingAnalysisSummaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlendinganalysissummaryresponse"></a>
<a id="schema_GetLendingAnalysisSummaryResponse"></a>
<a id="tocSgetlendinganalysissummaryresponse"></a>
<a id="tocsgetlendinganalysissummaryresponse"></a>

```json
{
  "DocumentMetadata": {
    "Pages": {}
  },
  "JobStatus": {},
  "Summary": {
    "DocumentGroups": {},
    "UndetectedDocumentTypes": {}
  },
  "Warnings": {},
  "StatusMessage": {},
  "AnalyzeLendingModelVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentMetadata|[DocumentMetadata](#schemadocumentmetadata)|false|none|Information about the input document.|
|JobStatus|object|false|none|none|
|Summary|object|false|none|none|
|Warnings|object|false|none|none|
|StatusMessage|object|false|none|none|
|AnalyzeLendingModelVersion|object|false|none|none|

<h2 id="tocS_GetLendingAnalysisSummaryRequest">GetLendingAnalysisSummaryRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlendinganalysissummaryrequest"></a>
<a id="schema_GetLendingAnalysisSummaryRequest"></a>
<a id="tocSgetlendinganalysissummaryrequest"></a>
<a id="tocsgetlendinganalysissummaryrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_StartDocumentAnalysisResponse">StartDocumentAnalysisResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartdocumentanalysisresponse"></a>
<a id="schema_StartDocumentAnalysisResponse"></a>
<a id="tocSstartdocumentanalysisresponse"></a>
<a id="tocsstartdocumentanalysisresponse"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|

<h2 id="tocS_StartDocumentAnalysisRequest">StartDocumentAnalysisRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartdocumentanalysisrequest"></a>
<a id="schema_StartDocumentAnalysisRequest"></a>
<a id="tocSstartdocumentanalysisrequest"></a>
<a id="tocsstartdocumentanalysisrequest"></a>

```json
{
  "DocumentLocation": {
    "S3Object": {
      "Bucket": {},
      "Name": {},
      "Version": {}
    }
  },
  "FeatureTypes": {},
  "ClientRequestToken": {},
  "JobTag": {},
  "NotificationChannel": {
    "SNSTopicArn": {},
    "RoleArn": {}
  },
  "OutputConfig": {
    "S3Bucket": {},
    "S3Prefix": {}
  },
  "KMSKeyId": {},
  "QueriesConfig": {
    "Queries": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentLocation|object|true|none|none|
|FeatureTypes|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|JobTag|object|false|none|none|
|NotificationChannel|object|false|none|none|
|OutputConfig|object|false|none|none|
|KMSKeyId|object|false|none|none|
|QueriesConfig|[QueriesConfig](#schemaqueriesconfig)|false|none|<p/>|

<h2 id="tocS_IdempotentParameterMismatchException">IdempotentParameterMismatchException</h2>
<!-- backwards compatibility -->
<a id="schemaidempotentparametermismatchexception"></a>
<a id="schema_IdempotentParameterMismatchException"></a>
<a id="tocSidempotentparametermismatchexception"></a>
<a id="tocsidempotentparametermismatchexception"></a>

```json
null
```

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_StartDocumentTextDetectionResponse">StartDocumentTextDetectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartdocumenttextdetectionresponse"></a>
<a id="schema_StartDocumentTextDetectionResponse"></a>
<a id="tocSstartdocumenttextdetectionresponse"></a>
<a id="tocsstartdocumenttextdetectionresponse"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|

<h2 id="tocS_StartDocumentTextDetectionRequest">StartDocumentTextDetectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartdocumenttextdetectionrequest"></a>
<a id="schema_StartDocumentTextDetectionRequest"></a>
<a id="tocSstartdocumenttextdetectionrequest"></a>
<a id="tocsstartdocumenttextdetectionrequest"></a>

```json
{
  "DocumentLocation": {
    "S3Object": {
      "Bucket": {},
      "Name": {},
      "Version": {}
    }
  },
  "ClientRequestToken": {},
  "JobTag": {},
  "NotificationChannel": {
    "SNSTopicArn": {},
    "RoleArn": {}
  },
  "OutputConfig": {
    "S3Bucket": {},
    "S3Prefix": {}
  },
  "KMSKeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentLocation|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|JobTag|object|false|none|none|
|NotificationChannel|object|false|none|none|
|OutputConfig|object|false|none|none|
|KMSKeyId|object|false|none|none|

<h2 id="tocS_StartExpenseAnalysisResponse">StartExpenseAnalysisResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartexpenseanalysisresponse"></a>
<a id="schema_StartExpenseAnalysisResponse"></a>
<a id="tocSstartexpenseanalysisresponse"></a>
<a id="tocsstartexpenseanalysisresponse"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|

<h2 id="tocS_StartExpenseAnalysisRequest">StartExpenseAnalysisRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartexpenseanalysisrequest"></a>
<a id="schema_StartExpenseAnalysisRequest"></a>
<a id="tocSstartexpenseanalysisrequest"></a>
<a id="tocsstartexpenseanalysisrequest"></a>

```json
{
  "DocumentLocation": {
    "S3Object": {
      "Bucket": {},
      "Name": {},
      "Version": {}
    }
  },
  "ClientRequestToken": {},
  "JobTag": {},
  "NotificationChannel": {
    "SNSTopicArn": {},
    "RoleArn": {}
  },
  "OutputConfig": {
    "S3Bucket": {},
    "S3Prefix": {}
  },
  "KMSKeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentLocation|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|JobTag|object|false|none|none|
|NotificationChannel|object|false|none|none|
|OutputConfig|object|false|none|none|
|KMSKeyId|object|false|none|none|

<h2 id="tocS_StartLendingAnalysisResponse">StartLendingAnalysisResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartlendinganalysisresponse"></a>
<a id="schema_StartLendingAnalysisResponse"></a>
<a id="tocSstartlendinganalysisresponse"></a>
<a id="tocsstartlendinganalysisresponse"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|

<h2 id="tocS_StartLendingAnalysisRequest">StartLendingAnalysisRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartlendinganalysisrequest"></a>
<a id="schema_StartLendingAnalysisRequest"></a>
<a id="tocSstartlendinganalysisrequest"></a>
<a id="tocsstartlendinganalysisrequest"></a>

```json
{
  "DocumentLocation": {
    "S3Object": {
      "Bucket": {},
      "Name": {},
      "Version": {}
    }
  },
  "ClientRequestToken": {},
  "JobTag": {},
  "NotificationChannel": {
    "SNSTopicArn": {},
    "RoleArn": {}
  },
  "OutputConfig": {
    "S3Bucket": {},
    "S3Prefix": {}
  },
  "KMSKeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentLocation|[DocumentLocation](#schemadocumentlocation)|true|none|<p>The Amazon S3 bucket that contains the document to be processed. It's used by asynchronous operations.</p> <p>The input document can be an image file in JPEG or PNG format. It can also be a file in PDF format.</p>|
|ClientRequestToken|object|false|none|none|
|JobTag|object|false|none|none|
|NotificationChannel|[NotificationChannel](#schemanotificationchannel)|false|none|The Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Textract publishes the completion status of an asynchronous document operation. |
|OutputConfig|[OutputConfig](#schemaoutputconfig)|false|none|<p>Sets whether or not your output will go to a user created bucket. Used to set the name of the bucket, and the prefix on the output file.</p> <p> <code>OutputConfig</code> is an optional parameter which lets you adjust where your output will be placed. By default, Amazon Textract will store the results internally and can only be accessed by the Get API operations. With <code>OutputConfig</code> enabled, you can set the name of the bucket the output will be sent to the file prefix of the results where you can download your results. Additionally, you can set the <code>KMSKeyID</code> parameter to a customer master key (CMK) to encrypt your output. Without this parameter set Amazon Textract will encrypt server-side using the AWS managed CMK for Amazon S3.</p> <p>Decryption of Customer Content is necessary for processing of the documents by Amazon Textract. If your account is opted out under an AI services opt out policy then all unencrypted Customer Content is immediately and permanently deleted after the Customer Content has been processed by the service. No copy of of the output is retained by Amazon Textract. For information about how to opt out, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html"> Managing AI services opt-out policy. </a> </p> <p>For more information on data privacy, see the <a href="https://aws.amazon.com/compliance/data-privacy-faq/">Data Privacy FAQ</a>.</p>|
|KMSKeyId|object|false|none|none|

<h2 id="tocS_Document">Document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_Document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "Bytes": {},
  "S3Object": {
    "Bucket": {},
    "Name": {},
    "Version": {}
  }
}
```

<p>The input document, either as bytes or as an S3 object.</p> <p>You pass image bytes to an Amazon Textract API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass a document loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64 encoded. Your code might not need to encode document file bytes if you're using an AWS SDK to call Amazon Textract API operations. </p> <p>You pass images stored in an S3 bucket to an Amazon Textract API operation by using the <code>S3Object</code> property. Documents stored in an S3 bucket don't need to be base64 encoded.</p> <p>The AWS Region for the S3 bucket that contains the S3 object must match the AWS Region that you use for Amazon Textract operations.</p> <p>If you use the AWS CLI to call Amazon Textract operations, passing image bytes using the Bytes property isn't supported. You must first upload the document to an Amazon S3 bucket, and then call the operation using the S3Object property.</p> <p>For Amazon Textract to process an S3 object, the user must have permission to access the S3 object. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bytes|object|false|none|none|
|S3Object|object|false|none|none|

<h2 id="tocS_FeatureTypes">FeatureTypes</h2>
<!-- backwards compatibility -->
<a id="schemafeaturetypes"></a>
<a id="schema_FeatureTypes"></a>
<a id="tocSfeaturetypes"></a>
<a id="tocsfeaturetypes"></a>

```json
[
  "TABLES"
]
```

<h2 id="tocS_HumanLoopConfig">HumanLoopConfig</h2>
<!-- backwards compatibility -->
<a id="schemahumanloopconfig"></a>
<a id="schema_HumanLoopConfig"></a>
<a id="tocShumanloopconfig"></a>
<a id="tocshumanloopconfig"></a>

```json
{
  "HumanLoopName": {},
  "FlowDefinitionArn": {},
  "DataAttributes": {
    "ContentClassifiers": {}
  }
}
```

Sets up the human review workflow the document will be sent to if one of the conditions is met. You can also set certain attributes of the image before review.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HumanLoopName|object|true|none|none|
|FlowDefinitionArn|object|true|none|none|
|DataAttributes|object|false|none|none|

<h2 id="tocS_QueriesConfig">QueriesConfig</h2>
<!-- backwards compatibility -->
<a id="schemaqueriesconfig"></a>
<a id="schema_QueriesConfig"></a>
<a id="tocSqueriesconfig"></a>
<a id="tocsqueriesconfig"></a>

```json
{
  "Queries": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Queries|object|true|none|none|

<h2 id="tocS_DocumentMetadata">DocumentMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadocumentmetadata"></a>
<a id="schema_DocumentMetadata"></a>
<a id="tocSdocumentmetadata"></a>
<a id="tocsdocumentmetadata"></a>

```json
{
  "Pages": {}
}
```

Information about the input document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Pages|object|false|none|none|

<h2 id="tocS_BlockList">BlockList</h2>
<!-- backwards compatibility -->
<a id="schemablocklist"></a>
<a id="schema_BlockList"></a>
<a id="tocSblocklist"></a>
<a id="tocsblocklist"></a>

```json
[
  {
    "BlockType": {},
    "Confidence": {},
    "Text": {},
    "TextType": {},
    "RowIndex": {},
    "ColumnIndex": {},
    "RowSpan": {},
    "ColumnSpan": {},
    "Geometry": {
      "BoundingBox": {
        "Width": {},
        "Height": {},
        "Left": {},
        "Top": {}
      },
      "Polygon": {}
    },
    "Id": {},
    "Relationships": {},
    "EntityTypes": {},
    "SelectionStatus": {},
    "Page": {},
    "Query": {
      "Text": {},
      "Alias": {},
      "Pages": {}
    }
  }
]
```

<h2 id="tocS_HumanLoopActivationOutput">HumanLoopActivationOutput</h2>
<!-- backwards compatibility -->
<a id="schemahumanloopactivationoutput"></a>
<a id="schema_HumanLoopActivationOutput"></a>
<a id="tocShumanloopactivationoutput"></a>
<a id="tocshumanloopactivationoutput"></a>

```json
{
  "HumanLoopArn": {},
  "HumanLoopActivationReasons": {},
  "HumanLoopActivationConditionsEvaluationResults": {}
}
```

Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the input did not trigger human review.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HumanLoopArn|object|false|none|none|
|HumanLoopActivationReasons|object|false|none|none|
|HumanLoopActivationConditionsEvaluationResults|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_ExpenseDocumentList">ExpenseDocumentList</h2>
<!-- backwards compatibility -->
<a id="schemaexpensedocumentlist"></a>
<a id="schema_ExpenseDocumentList"></a>
<a id="tocSexpensedocumentlist"></a>
<a id="tocsexpensedocumentlist"></a>

```json
[
  {
    "ExpenseIndex": {},
    "SummaryFields": {},
    "LineItemGroups": {},
    "Blocks": {}
  }
]
```

<h2 id="tocS_NormalizedValue">NormalizedValue</h2>
<!-- backwards compatibility -->
<a id="schemanormalizedvalue"></a>
<a id="schema_NormalizedValue"></a>
<a id="tocSnormalizedvalue"></a>
<a id="tocsnormalizedvalue"></a>

```json
{
  "Value": {},
  "ValueType": {}
}
```

Contains information relating to dates in a document, including the type of value, and the value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|false|none|none|
|ValueType|object|false|none|none|

<h2 id="tocS_Percent">Percent</h2>
<!-- backwards compatibility -->
<a id="schemapercent"></a>
<a id="schema_Percent"></a>
<a id="tocSpercent"></a>
<a id="tocspercent"></a>

```json
0
```

<h2 id="tocS_AnalyzeIDDetections">AnalyzeIDDetections</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzeiddetections"></a>
<a id="schema_AnalyzeIDDetections"></a>
<a id="tocSanalyzeiddetections"></a>
<a id="tocsanalyzeiddetections"></a>

```json
{
  "Text": {},
  "NormalizedValue": {
    "Value": {},
    "ValueType": {}
  },
  "Confidence": {}
}
```

Used to contain the information detected by an AnalyzeID operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|object|true|none|none|
|NormalizedValue|object|false|none|none|
|Confidence|object|false|none|none|

<h2 id="tocS_DocumentPages">DocumentPages</h2>
<!-- backwards compatibility -->
<a id="schemadocumentpages"></a>
<a id="schema_DocumentPages"></a>
<a id="tocSdocumentpages"></a>
<a id="tocsdocumentpages"></a>

```json
[
  {
    "Bytes": {},
    "S3Object": {
      "Bucket": {},
      "Name": {},
      "Version": {}
    }
  }
]
```

<h2 id="tocS_IdentityDocumentList">IdentityDocumentList</h2>
<!-- backwards compatibility -->
<a id="schemaidentitydocumentlist"></a>
<a id="schema_IdentityDocumentList"></a>
<a id="tocSidentitydocumentlist"></a>
<a id="tocsidentitydocumentlist"></a>

```json
[
  {
    "DocumentIndex": {},
    "IdentityDocumentFields": {},
    "Blocks": {}
  }
]
```

<h2 id="tocS_BlockType">BlockType</h2>
<!-- backwards compatibility -->
<a id="schemablocktype"></a>
<a id="schema_BlockType"></a>
<a id="tocSblocktype"></a>
<a id="tocsblocktype"></a>

```json
"KEY_VALUE_SET"
```

<h2 id="tocS_TextType">TextType</h2>
<!-- backwards compatibility -->
<a id="schematexttype"></a>
<a id="schema_TextType"></a>
<a id="tocStexttype"></a>
<a id="tocstexttype"></a>

```json
"HANDWRITING"
```

<h2 id="tocS_UInteger">UInteger</h2>
<!-- backwards compatibility -->
<a id="schemauinteger"></a>
<a id="schema_UInteger"></a>
<a id="tocSuinteger"></a>
<a id="tocsuinteger"></a>

```json
0
```

<h2 id="tocS_Geometry">Geometry</h2>
<!-- backwards compatibility -->
<a id="schemageometry"></a>
<a id="schema_Geometry"></a>
<a id="tocSgeometry"></a>
<a id="tocsgeometry"></a>

```json
{
  "BoundingBox": {
    "Width": {},
    "Height": {},
    "Left": {},
    "Top": {}
  },
  "Polygon": {}
}
```

Information about where the following items are located on a document page: detected page, text, key-value pairs, tables, table cells, and selection elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BoundingBox|object|false|none|none|
|Polygon|object|false|none|none|

<h2 id="tocS_NonEmptyString">NonEmptyString</h2>
<!-- backwards compatibility -->
<a id="schemanonemptystring"></a>
<a id="schema_NonEmptyString"></a>
<a id="tocSnonemptystring"></a>
<a id="tocsnonemptystring"></a>

```json
"string"
```

<h2 id="tocS_RelationshipList">RelationshipList</h2>
<!-- backwards compatibility -->
<a id="schemarelationshiplist"></a>
<a id="schema_RelationshipList"></a>
<a id="tocSrelationshiplist"></a>
<a id="tocsrelationshiplist"></a>

```json
[
  {
    "Type": {},
    "Ids": {}
  }
]
```

<h2 id="tocS_EntityTypes">EntityTypes</h2>
<!-- backwards compatibility -->
<a id="schemaentitytypes"></a>
<a id="schema_EntityTypes"></a>
<a id="tocSentitytypes"></a>
<a id="tocsentitytypes"></a>

```json
[
  "KEY"
]
```

<h2 id="tocS_SelectionStatus">SelectionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaselectionstatus"></a>
<a id="schema_SelectionStatus"></a>
<a id="tocSselectionstatus"></a>
<a id="tocsselectionstatus"></a>

```json
"SELECTED"
```

<h2 id="tocS_Query">Query</h2>
<!-- backwards compatibility -->
<a id="schemaquery"></a>
<a id="schema_Query"></a>
<a id="tocSquery"></a>
<a id="tocsquery"></a>

```json
{
  "Text": {},
  "Alias": {},
  "Pages": {}
}
```

Each query contains the question you want to ask in the Text and the alias you want to associate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|object|true|none|none|
|Alias|object|false|none|none|
|Pages|object|false|none|none|

<h2 id="tocS_Block">Block</h2>
<!-- backwards compatibility -->
<a id="schemablock"></a>
<a id="schema_Block"></a>
<a id="tocSblock"></a>
<a id="tocsblock"></a>

```json
{
  "BlockType": {},
  "Confidence": {},
  "Text": {},
  "TextType": {},
  "RowIndex": {},
  "ColumnIndex": {},
  "RowSpan": {},
  "ColumnSpan": {},
  "Geometry": {
    "BoundingBox": {
      "Width": {},
      "Height": {},
      "Left": {},
      "Top": {}
    },
    "Polygon": {}
  },
  "Id": {},
  "Relationships": {},
  "EntityTypes": {},
  "SelectionStatus": {},
  "Page": {},
  "Query": {
    "Text": {},
    "Alias": {},
    "Pages": {}
  }
}
```

<p>A <code>Block</code> represents items that are recognized in a document within a group of pixels close to each other. The information returned in a <code>Block</code> object depends on the type of operation. In text detection for documents (for example <a>DetectDocumentText</a>), you get information about the detected words and lines of text. In text analysis (for example <a>AnalyzeDocument</a>), you can also get information about the fields, tables, and selection elements that are detected in the document.</p> <p>An array of <code>Block</code> objects is returned by both synchronous and asynchronous operations. In synchronous operations, such as <a>DetectDocumentText</a>, the array of <code>Block</code> objects is the entire set of results. In asynchronous operations, such as <a>GetDocumentAnalysis</a>, the array is returned over one or more responses.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works.html">How Amazon Textract Works</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BlockType|object|false|none|none|
|Confidence|object|false|none|none|
|Text|object|false|none|none|
|TextType|object|false|none|none|
|RowIndex|object|false|none|none|
|ColumnIndex|object|false|none|none|
|RowSpan|object|false|none|none|
|ColumnSpan|object|false|none|none|
|Geometry|object|false|none|none|
|Id|object|false|none|none|
|Relationships|object|false|none|none|
|EntityTypes|object|false|none|none|
|SelectionStatus|object|false|none|none|
|Page|object|false|none|none|
|Query|object|false|none|none|

<h2 id="tocS_Float">Float</h2>
<!-- backwards compatibility -->
<a id="schemafloat"></a>
<a id="schema_Float"></a>
<a id="tocSfloat"></a>
<a id="tocsfloat"></a>

```json
0
```

<h2 id="tocS_BoundingBox">BoundingBox</h2>
<!-- backwards compatibility -->
<a id="schemaboundingbox"></a>
<a id="schema_BoundingBox"></a>
<a id="tocSboundingbox"></a>
<a id="tocsboundingbox"></a>

```json
{
  "Width": {},
  "Height": {},
  "Left": {},
  "Top": {}
}
```

<p>The bounding box around the detected page, text, key-value pair, table, table cell, or selection element on a document page. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates that represent the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall document page size. For example, if the input image is 700 x 200 pixels, and the top-left coordinate of the bounding box is 350 x 50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall document page dimension. For example, if the document page size is 700 x 200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Width|object|false|none|none|
|Height|object|false|none|none|
|Left|object|false|none|none|
|Top|object|false|none|none|

<h2 id="tocS_ClientRequestToken">ClientRequestToken</h2>
<!-- backwards compatibility -->
<a id="schemaclientrequesttoken"></a>
<a id="schema_ClientRequestToken"></a>
<a id="tocSclientrequesttoken"></a>
<a id="tocsclientrequesttoken"></a>

```json
"string"
```

<h2 id="tocS_ContentClassifier">ContentClassifier</h2>
<!-- backwards compatibility -->
<a id="schemacontentclassifier"></a>
<a id="schema_ContentClassifier"></a>
<a id="tocScontentclassifier"></a>
<a id="tocscontentclassifier"></a>

```json
"FreeOfPersonallyIdentifiableInformation"
```

<h2 id="tocS_ContentClassifiers">ContentClassifiers</h2>
<!-- backwards compatibility -->
<a id="schemacontentclassifiers"></a>
<a id="schema_ContentClassifiers"></a>
<a id="tocScontentclassifiers"></a>
<a id="tocscontentclassifiers"></a>

```json
[
  "FreeOfPersonallyIdentifiableInformation"
]
```

<h2 id="tocS_DetectedSignature">DetectedSignature</h2>
<!-- backwards compatibility -->
<a id="schemadetectedsignature"></a>
<a id="schema_DetectedSignature"></a>
<a id="tocSdetectedsignature"></a>
<a id="tocsdetectedsignature"></a>

```json
{
  "Page": {}
}
```

A structure that holds information regarding a detected signature on a page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Page|object|false|none|none|

<h2 id="tocS_DetectedSignatureList">DetectedSignatureList</h2>
<!-- backwards compatibility -->
<a id="schemadetectedsignaturelist"></a>
<a id="schema_DetectedSignatureList"></a>
<a id="tocSdetectedsignaturelist"></a>
<a id="tocsdetectedsignaturelist"></a>

```json
[
  {
    "Page": {}
  }
]
```

<h2 id="tocS_ImageBlob">ImageBlob</h2>
<!-- backwards compatibility -->
<a id="schemaimageblob"></a>
<a id="schema_ImageBlob"></a>
<a id="tocSimageblob"></a>
<a id="tocsimageblob"></a>

```json
"string"
```

<h2 id="tocS_S3Object">S3Object</h2>
<!-- backwards compatibility -->
<a id="schemas3object"></a>
<a id="schema_S3Object"></a>
<a id="tocSs3object"></a>
<a id="tocss3object"></a>

```json
{
  "Bucket": {},
  "Name": {},
  "Version": {}
}
```

<p>The S3 bucket name and file name that identifies the document.</p> <p>The AWS Region for the S3 bucket that contains the document must match the Region that you use for Amazon Textract operations.</p> <p>For Amazon Textract to process a file in an S3 bucket, the user must have permission to access the S3 bucket and file. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|false|none|none|
|Name|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_SplitDocumentList">SplitDocumentList</h2>
<!-- backwards compatibility -->
<a id="schemasplitdocumentlist"></a>
<a id="schema_SplitDocumentList"></a>
<a id="tocSsplitdocumentlist"></a>
<a id="tocssplitdocumentlist"></a>

```json
[
  {
    "Index": {},
    "Pages": {}
  }
]
```

<h2 id="tocS_UndetectedSignatureList">UndetectedSignatureList</h2>
<!-- backwards compatibility -->
<a id="schemaundetectedsignaturelist"></a>
<a id="schema_UndetectedSignatureList"></a>
<a id="tocSundetectedsignaturelist"></a>
<a id="tocsundetectedsignaturelist"></a>

```json
[
  {
    "Page": {}
  }
]
```

<h2 id="tocS_DocumentGroup">DocumentGroup</h2>
<!-- backwards compatibility -->
<a id="schemadocumentgroup"></a>
<a id="schema_DocumentGroup"></a>
<a id="tocSdocumentgroup"></a>
<a id="tocsdocumentgroup"></a>

```json
{
  "Type": {},
  "SplitDocuments": {},
  "DetectedSignatures": {},
  "UndetectedSignatures": {}
}
```

Summary information about documents grouped by the same document type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|SplitDocuments|object|false|none|none|
|DetectedSignatures|object|false|none|none|
|UndetectedSignatures|object|false|none|none|

<h2 id="tocS_DocumentGroupList">DocumentGroupList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentgrouplist"></a>
<a id="schema_DocumentGroupList"></a>
<a id="tocSdocumentgrouplist"></a>
<a id="tocsdocumentgrouplist"></a>

```json
[
  {
    "Type": {},
    "SplitDocuments": {},
    "DetectedSignatures": {},
    "UndetectedSignatures": {}
  }
]
```

<h2 id="tocS_DocumentLocation">DocumentLocation</h2>
<!-- backwards compatibility -->
<a id="schemadocumentlocation"></a>
<a id="schema_DocumentLocation"></a>
<a id="tocSdocumentlocation"></a>
<a id="tocsdocumentlocation"></a>

```json
{
  "S3Object": {
    "Bucket": {},
    "Name": {},
    "Version": {}
  }
}
```

<p>The Amazon S3 bucket that contains the document to be processed. It's used by asynchronous operations.</p> <p>The input document can be an image file in JPEG or PNG format. It can also be a file in PDF format.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Object|object|false|none|none|

<h2 id="tocS_EntityType">EntityType</h2>
<!-- backwards compatibility -->
<a id="schemaentitytype"></a>
<a id="schema_EntityType"></a>
<a id="tocSentitytype"></a>
<a id="tocsentitytype"></a>

```json
"KEY"
```

<h2 id="tocS_ErrorCode">ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_ErrorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"string"
```

<h2 id="tocS_ExpenseCurrency">ExpenseCurrency</h2>
<!-- backwards compatibility -->
<a id="schemaexpensecurrency"></a>
<a id="schema_ExpenseCurrency"></a>
<a id="tocSexpensecurrency"></a>
<a id="tocsexpensecurrency"></a>

```json
{
  "Code": {},
  "Confidence": {}
}
```

Returns the kind of currency detected.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|object|false|none|none|
|Confidence|object|false|none|none|

<h2 id="tocS_ExpenseDetection">ExpenseDetection</h2>
<!-- backwards compatibility -->
<a id="schemaexpensedetection"></a>
<a id="schema_ExpenseDetection"></a>
<a id="tocSexpensedetection"></a>
<a id="tocsexpensedetection"></a>

```json
{
  "Text": {},
  "Geometry": {
    "BoundingBox": {
      "Width": {},
      "Height": {},
      "Left": {},
      "Top": {}
    },
    "Polygon": {}
  },
  "Confidence": {}
}
```

An object used to store information about the Value or Label detected by Amazon Textract.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|object|false|none|none|
|Geometry|[Geometry](#schemageometry)|false|none|Information about where the following items are located on a document page: detected page, text, key-value pairs, tables, table cells, and selection elements.|
|Confidence|object|false|none|none|

<h2 id="tocS_ExpenseFieldList">ExpenseFieldList</h2>
<!-- backwards compatibility -->
<a id="schemaexpensefieldlist"></a>
<a id="schema_ExpenseFieldList"></a>
<a id="tocSexpensefieldlist"></a>
<a id="tocsexpensefieldlist"></a>

```json
[
  {
    "Type": {
      "Text": {},
      "Confidence": {}
    },
    "LabelDetection": {
      "Text": {},
      "Geometry": {
        "BoundingBox": {
          "Width": {},
          "Height": {},
          "Left": {},
          "Top": {}
        },
        "Polygon": {}
      },
      "Confidence": {}
    },
    "ValueDetection": {
      "Text": {},
      "Geometry": {
        "BoundingBox": {
          "Width": {},
          "Height": {},
          "Left": {},
          "Top": {}
        },
        "Polygon": {}
      },
      "Confidence": {}
    },
    "PageNumber": {},
    "Currency": {
      "Code": {},
      "Confidence": {}
    },
    "GroupProperties": {}
  }
]
```

<h2 id="tocS_LineItemGroupList">LineItemGroupList</h2>
<!-- backwards compatibility -->
<a id="schemalineitemgrouplist"></a>
<a id="schema_LineItemGroupList"></a>
<a id="tocSlineitemgrouplist"></a>
<a id="tocslineitemgrouplist"></a>

```json
[
  {
    "LineItemGroupIndex": {},
    "LineItems": {}
  }
]
```

<h2 id="tocS_ExpenseDocument">ExpenseDocument</h2>
<!-- backwards compatibility -->
<a id="schemaexpensedocument"></a>
<a id="schema_ExpenseDocument"></a>
<a id="tocSexpensedocument"></a>
<a id="tocsexpensedocument"></a>

```json
{
  "ExpenseIndex": {},
  "SummaryFields": {},
  "LineItemGroups": {},
  "Blocks": {}
}
```

The structure holding all the information returned by AnalyzeExpense

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExpenseIndex|object|false|none|none|
|SummaryFields|object|false|none|none|
|LineItemGroups|object|false|none|none|
|Blocks|object|false|none|none|

<h2 id="tocS_ExpenseType">ExpenseType</h2>
<!-- backwards compatibility -->
<a id="schemaexpensetype"></a>
<a id="schema_ExpenseType"></a>
<a id="tocSexpensetype"></a>
<a id="tocsexpensetype"></a>

```json
{
  "Text": {},
  "Confidence": {}
}
```

An object used to store information about the Type detected by Amazon Textract.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|object|false|none|none|
|Confidence|object|false|none|none|

<h2 id="tocS_ExpenseGroupPropertyList">ExpenseGroupPropertyList</h2>
<!-- backwards compatibility -->
<a id="schemaexpensegrouppropertylist"></a>
<a id="schema_ExpenseGroupPropertyList"></a>
<a id="tocSexpensegrouppropertylist"></a>
<a id="tocsexpensegrouppropertylist"></a>

```json
[
  {
    "Types": {},
    "Id": {}
  }
]
```

<h2 id="tocS_ExpenseField">ExpenseField</h2>
<!-- backwards compatibility -->
<a id="schemaexpensefield"></a>
<a id="schema_ExpenseField"></a>
<a id="tocSexpensefield"></a>
<a id="tocsexpensefield"></a>

```json
{
  "Type": {
    "Text": {},
    "Confidence": {}
  },
  "LabelDetection": {
    "Text": {},
    "Geometry": {
      "BoundingBox": {
        "Width": {},
        "Height": {},
        "Left": {},
        "Top": {}
      },
      "Polygon": {}
    },
    "Confidence": {}
  },
  "ValueDetection": {
    "Text": {},
    "Geometry": {
      "BoundingBox": {
        "Width": {},
        "Height": {},
        "Left": {},
        "Top": {}
      },
      "Polygon": {}
    },
    "Confidence": {}
  },
  "PageNumber": {},
  "Currency": {
    "Code": {},
    "Confidence": {}
  },
  "GroupProperties": {}
}
```

Breakdown of detected information, seperated into the catagories Type, LabelDetection, and ValueDetection

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|LabelDetection|object|false|none|none|
|ValueDetection|object|false|none|none|
|PageNumber|object|false|none|none|
|Currency|object|false|none|none|
|GroupProperties|object|false|none|none|

<h2 id="tocS_StringList">StringList</h2>
<!-- backwards compatibility -->
<a id="schemastringlist"></a>
<a id="schema_StringList"></a>
<a id="tocSstringlist"></a>
<a id="tocsstringlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ExpenseGroupProperty">ExpenseGroupProperty</h2>
<!-- backwards compatibility -->
<a id="schemaexpensegroupproperty"></a>
<a id="schema_ExpenseGroupProperty"></a>
<a id="tocSexpensegroupproperty"></a>
<a id="tocsexpensegroupproperty"></a>

```json
{
  "Types": {},
  "Id": {}
}
```

Shows the group that a certain key belongs to. This helps differentiate between names and addresses for different organizations, that can be hard to determine via JSON response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Types|object|false|none|none|
|Id|object|false|none|none|

<h2 id="tocS_LendingDocument">LendingDocument</h2>
<!-- backwards compatibility -->
<a id="schemalendingdocument"></a>
<a id="schema_LendingDocument"></a>
<a id="tocSlendingdocument"></a>
<a id="tocslendingdocument"></a>

```json
{
  "LendingFields": {},
  "SignatureDetections": {}
}
```

Holds the structured data returned by AnalyzeDocument for lending documents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LendingFields|object|false|none|none|
|SignatureDetections|object|false|none|none|

<h2 id="tocS_IdentityDocument">IdentityDocument</h2>
<!-- backwards compatibility -->
<a id="schemaidentitydocument"></a>
<a id="schema_IdentityDocument"></a>
<a id="tocSidentitydocument"></a>
<a id="tocsidentitydocument"></a>

```json
{
  "DocumentIndex": {},
  "IdentityDocumentFields": {},
  "Blocks": {}
}
```

The structure that lists each document processed in an AnalyzeID operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentIndex|object|false|none|none|
|IdentityDocumentFields|object|false|none|none|
|Blocks|object|false|none|none|

<h2 id="tocS_Extraction">Extraction</h2>
<!-- backwards compatibility -->
<a id="schemaextraction"></a>
<a id="schema_Extraction"></a>
<a id="tocSextraction"></a>
<a id="tocsextraction"></a>

```json
{
  "LendingDocument": {
    "LendingFields": {},
    "SignatureDetections": {}
  },
  "ExpenseDocument": {
    "ExpenseIndex": {},
    "SummaryFields": {},
    "LineItemGroups": {},
    "Blocks": {}
  },
  "IdentityDocument": {
    "DocumentIndex": {},
    "IdentityDocumentFields": {},
    "Blocks": {}
  }
}
```

Contains information extracted by an analysis operation after using StartLendingAnalysis.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LendingDocument|object|false|none|none|
|ExpenseDocument|[ExpenseDocument](#schemaexpensedocument)|false|none|The structure holding all the information returned by AnalyzeExpense|
|IdentityDocument|[IdentityDocument](#schemaidentitydocument)|false|none|The structure that lists each document processed in an AnalyzeID operation.|

<h2 id="tocS_ExtractionList">ExtractionList</h2>
<!-- backwards compatibility -->
<a id="schemaextractionlist"></a>
<a id="schema_ExtractionList"></a>
<a id="tocSextractionlist"></a>
<a id="tocsextractionlist"></a>

```json
[
  {
    "LendingDocument": {
      "LendingFields": {},
      "SignatureDetections": {}
    },
    "ExpenseDocument": {
      "ExpenseIndex": {},
      "SummaryFields": {},
      "LineItemGroups": {},
      "Blocks": {}
    },
    "IdentityDocument": {
      "DocumentIndex": {},
      "IdentityDocumentFields": {},
      "Blocks": {}
    }
  }
]
```

<h2 id="tocS_FeatureType">FeatureType</h2>
<!-- backwards compatibility -->
<a id="schemafeaturetype"></a>
<a id="schema_FeatureType"></a>
<a id="tocSfeaturetype"></a>
<a id="tocsfeaturetype"></a>

```json
"TABLES"
```

<h2 id="tocS_FlowDefinitionArn">FlowDefinitionArn</h2>
<!-- backwards compatibility -->
<a id="schemaflowdefinitionarn"></a>
<a id="schema_FlowDefinitionArn"></a>
<a id="tocSflowdefinitionarn"></a>
<a id="tocsflowdefinitionarn"></a>

```json
"string"
```

<h2 id="tocS_Polygon">Polygon</h2>
<!-- backwards compatibility -->
<a id="schemapolygon"></a>
<a id="schema_Polygon"></a>
<a id="tocSpolygon"></a>
<a id="tocspolygon"></a>

```json
[
  {
    "X": {},
    "Y": {}
  }
]
```

<h2 id="tocS_JobId">JobId</h2>
<!-- backwards compatibility -->
<a id="schemajobid"></a>
<a id="schema_JobId"></a>
<a id="tocSjobid"></a>
<a id="tocsjobid"></a>

```json
"string"
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

<h2 id="tocS_PaginationToken">PaginationToken</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken"></a>
<a id="schema_PaginationToken"></a>
<a id="tocSpaginationtoken"></a>
<a id="tocspaginationtoken"></a>

```json
"string"
```

<h2 id="tocS_JobStatus">JobStatus</h2>
<!-- backwards compatibility -->
<a id="schemajobstatus"></a>
<a id="schema_JobStatus"></a>
<a id="tocSjobstatus"></a>
<a id="tocsjobstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_Warnings">Warnings</h2>
<!-- backwards compatibility -->
<a id="schemawarnings"></a>
<a id="schema_Warnings"></a>
<a id="tocSwarnings"></a>
<a id="tocswarnings"></a>

```json
[
  {
    "ErrorCode": {},
    "Pages": {}
  }
]
```

<h2 id="tocS_StatusMessage">StatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemastatusmessage"></a>
<a id="schema_StatusMessage"></a>
<a id="tocSstatusmessage"></a>
<a id="tocsstatusmessage"></a>

```json
"string"
```

<h2 id="tocS_LendingResultList">LendingResultList</h2>
<!-- backwards compatibility -->
<a id="schemalendingresultlist"></a>
<a id="schema_LendingResultList"></a>
<a id="tocSlendingresultlist"></a>
<a id="tocslendingresultlist"></a>

```json
[
  {
    "Page": {},
    "PageClassification": {
      "PageType": {},
      "PageNumber": {}
    },
    "Extractions": {}
  }
]
```

<h2 id="tocS_LendingSummary">LendingSummary</h2>
<!-- backwards compatibility -->
<a id="schemalendingsummary"></a>
<a id="schema_LendingSummary"></a>
<a id="tocSlendingsummary"></a>
<a id="tocslendingsummary"></a>

```json
{
  "DocumentGroups": {},
  "UndetectedDocumentTypes": {}
}
```

Contains information regarding DocumentGroups and UndetectedDocumentTypes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentGroups|object|false|none|none|
|UndetectedDocumentTypes|object|false|none|none|

<h2 id="tocS_HumanLoopActivationConditionsEvaluationResults">HumanLoopActivationConditionsEvaluationResults</h2>
<!-- backwards compatibility -->
<a id="schemahumanloopactivationconditionsevaluationresults"></a>
<a id="schema_HumanLoopActivationConditionsEvaluationResults"></a>
<a id="tocShumanloopactivationconditionsevaluationresults"></a>
<a id="tocshumanloopactivationconditionsevaluationresults"></a>

```json
"string"
```

<h2 id="tocS_HumanLoopArn">HumanLoopArn</h2>
<!-- backwards compatibility -->
<a id="schemahumanlooparn"></a>
<a id="schema_HumanLoopArn"></a>
<a id="tocShumanlooparn"></a>
<a id="tocshumanlooparn"></a>

```json
"string"
```

<h2 id="tocS_HumanLoopActivationReasons">HumanLoopActivationReasons</h2>
<!-- backwards compatibility -->
<a id="schemahumanloopactivationreasons"></a>
<a id="schema_HumanLoopActivationReasons"></a>
<a id="tocShumanloopactivationreasons"></a>
<a id="tocshumanloopactivationreasons"></a>

```json
[
  "string"
]
```

<h2 id="tocS_HumanLoopActivationReason">HumanLoopActivationReason</h2>
<!-- backwards compatibility -->
<a id="schemahumanloopactivationreason"></a>
<a id="schema_HumanLoopActivationReason"></a>
<a id="tocShumanloopactivationreason"></a>
<a id="tocshumanloopactivationreason"></a>

```json
"string"
```

<h2 id="tocS_HumanLoopName">HumanLoopName</h2>
<!-- backwards compatibility -->
<a id="schemahumanloopname"></a>
<a id="schema_HumanLoopName"></a>
<a id="tocShumanloopname"></a>
<a id="tocshumanloopname"></a>

```json
"string"
```

<h2 id="tocS_HumanLoopDataAttributes">HumanLoopDataAttributes</h2>
<!-- backwards compatibility -->
<a id="schemahumanloopdataattributes"></a>
<a id="schema_HumanLoopDataAttributes"></a>
<a id="tocShumanloopdataattributes"></a>
<a id="tocshumanloopdataattributes"></a>

```json
{
  "ContentClassifiers": {}
}
```

Allows you to set attributes of the image. Currently, you can declare an image as free of personally identifiable information and adult content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContentClassifiers|object|false|none|none|

<h2 id="tocS_IdList">IdList</h2>
<!-- backwards compatibility -->
<a id="schemaidlist"></a>
<a id="schema_IdList"></a>
<a id="tocSidlist"></a>
<a id="tocsidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_IdentityDocumentFieldList">IdentityDocumentFieldList</h2>
<!-- backwards compatibility -->
<a id="schemaidentitydocumentfieldlist"></a>
<a id="schema_IdentityDocumentFieldList"></a>
<a id="tocSidentitydocumentfieldlist"></a>
<a id="tocsidentitydocumentfieldlist"></a>

```json
[
  {
    "Type": {
      "Text": {},
      "NormalizedValue": {
        "Value": {},
        "ValueType": {}
      },
      "Confidence": {}
    },
    "ValueDetection": {
      "Text": {},
      "NormalizedValue": {
        "Value": {},
        "ValueType": {}
      },
      "Confidence": {}
    }
  }
]
```

<h2 id="tocS_IdentityDocumentField">IdentityDocumentField</h2>
<!-- backwards compatibility -->
<a id="schemaidentitydocumentfield"></a>
<a id="schema_IdentityDocumentField"></a>
<a id="tocSidentitydocumentfield"></a>
<a id="tocsidentitydocumentfield"></a>

```json
{
  "Type": {
    "Text": {},
    "NormalizedValue": {
      "Value": {},
      "ValueType": {}
    },
    "Confidence": {}
  },
  "ValueDetection": {
    "Text": {},
    "NormalizedValue": {
      "Value": {},
      "ValueType": {}
    },
    "Confidence": {}
  }
}
```

Structure containing both the normalized type of the extracted information and the text associated with it. These are extracted as Type and Value respectively.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|[AnalyzeIDDetections](#schemaanalyzeiddetections)|false|none|Used to contain the information detected by an AnalyzeID operation.|
|ValueDetection|[AnalyzeIDDetections](#schemaanalyzeiddetections)|false|none|Used to contain the information detected by an AnalyzeID operation.|

<h2 id="tocS_JobTag">JobTag</h2>
<!-- backwards compatibility -->
<a id="schemajobtag"></a>
<a id="schema_JobTag"></a>
<a id="tocSjobtag"></a>
<a id="tocsjobtag"></a>

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

<h2 id="tocS_LendingDetection">LendingDetection</h2>
<!-- backwards compatibility -->
<a id="schemalendingdetection"></a>
<a id="schema_LendingDetection"></a>
<a id="tocSlendingdetection"></a>
<a id="tocslendingdetection"></a>

```json
{
  "Text": {},
  "SelectionStatus": {},
  "Geometry": {
    "BoundingBox": {
      "Width": {},
      "Height": {},
      "Left": {},
      "Top": {}
    },
    "Polygon": {}
  },
  "Confidence": {}
}
```

The results extracted for a lending document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|object|false|none|none|
|SelectionStatus|object|false|none|none|
|Geometry|[Geometry](#schemageometry)|false|none|Information about where the following items are located on a document page: detected page, text, key-value pairs, tables, table cells, and selection elements.|
|Confidence|object|false|none|none|

<h2 id="tocS_LendingDetectionList">LendingDetectionList</h2>
<!-- backwards compatibility -->
<a id="schemalendingdetectionlist"></a>
<a id="schema_LendingDetectionList"></a>
<a id="tocSlendingdetectionlist"></a>
<a id="tocslendingdetectionlist"></a>

```json
[
  {
    "Text": {},
    "SelectionStatus": {},
    "Geometry": {
      "BoundingBox": {
        "Width": {},
        "Height": {},
        "Left": {},
        "Top": {}
      },
      "Polygon": {}
    },
    "Confidence": {}
  }
]
```

<h2 id="tocS_LendingFieldList">LendingFieldList</h2>
<!-- backwards compatibility -->
<a id="schemalendingfieldlist"></a>
<a id="schema_LendingFieldList"></a>
<a id="tocSlendingfieldlist"></a>
<a id="tocslendingfieldlist"></a>

```json
[
  {
    "Type": {},
    "KeyDetection": {
      "Text": {},
      "SelectionStatus": {},
      "Geometry": {
        "BoundingBox": {
          "Width": {},
          "Height": {},
          "Left": {},
          "Top": {}
        },
        "Polygon": {}
      },
      "Confidence": {}
    },
    "ValueDetections": {}
  }
]
```

<h2 id="tocS_SignatureDetectionList">SignatureDetectionList</h2>
<!-- backwards compatibility -->
<a id="schemasignaturedetectionlist"></a>
<a id="schema_SignatureDetectionList"></a>
<a id="tocSsignaturedetectionlist"></a>
<a id="tocssignaturedetectionlist"></a>

```json
[
  {
    "Confidence": {},
    "Geometry": {
      "BoundingBox": {
        "Width": {},
        "Height": {},
        "Left": {},
        "Top": {}
      },
      "Polygon": {}
    }
  }
]
```

<h2 id="tocS_LendingField">LendingField</h2>
<!-- backwards compatibility -->
<a id="schemalendingfield"></a>
<a id="schema_LendingField"></a>
<a id="tocSlendingfield"></a>
<a id="tocslendingfield"></a>

```json
{
  "Type": {},
  "KeyDetection": {
    "Text": {},
    "SelectionStatus": {},
    "Geometry": {
      "BoundingBox": {
        "Width": {},
        "Height": {},
        "Left": {},
        "Top": {}
      },
      "Polygon": {}
    },
    "Confidence": {}
  },
  "ValueDetections": {}
}
```

Holds the normalized key-value pairs returned by AnalyzeDocument, including the document type, detected text, and geometry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|KeyDetection|[LendingDetection](#schemalendingdetection)|false|none|The results extracted for a lending document.|
|ValueDetections|object|false|none|none|

<h2 id="tocS_PageClassification">PageClassification</h2>
<!-- backwards compatibility -->
<a id="schemapageclassification"></a>
<a id="schema_PageClassification"></a>
<a id="tocSpageclassification"></a>
<a id="tocspageclassification"></a>

```json
{
  "PageType": {},
  "PageNumber": {}
}
```

The class assigned to a Page object detected in an input document. Contains information regarding the predicted type/class of a document's page and the page number that the Page object was detected on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PageType|object|true|none|none|
|PageNumber|object|true|none|none|

<h2 id="tocS_LendingResult">LendingResult</h2>
<!-- backwards compatibility -->
<a id="schemalendingresult"></a>
<a id="schema_LendingResult"></a>
<a id="tocSlendingresult"></a>
<a id="tocslendingresult"></a>

```json
{
  "Page": {},
  "PageClassification": {
    "PageType": {},
    "PageNumber": {}
  },
  "Extractions": {}
}
```

Contains the detections for each page analyzed through the Analyze Lending API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Page|object|false|none|none|
|PageClassification|object|false|none|none|
|Extractions|object|false|none|none|

<h2 id="tocS_UndetectedDocumentTypeList">UndetectedDocumentTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaundetecteddocumenttypelist"></a>
<a id="schema_UndetectedDocumentTypeList"></a>
<a id="tocSundetecteddocumenttypelist"></a>
<a id="tocsundetecteddocumenttypelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LineItemFields">LineItemFields</h2>
<!-- backwards compatibility -->
<a id="schemalineitemfields"></a>
<a id="schema_LineItemFields"></a>
<a id="tocSlineitemfields"></a>
<a id="tocslineitemfields"></a>

```json
{
  "LineItemExpenseFields": {}
}
```

A structure that holds information about the different lines found in a document's tables.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LineItemExpenseFields|object|false|none|none|

<h2 id="tocS_LineItemList">LineItemList</h2>
<!-- backwards compatibility -->
<a id="schemalineitemlist"></a>
<a id="schema_LineItemList"></a>
<a id="tocSlineitemlist"></a>
<a id="tocslineitemlist"></a>

```json
[
  {
    "LineItemExpenseFields": {}
  }
]
```

<h2 id="tocS_LineItemGroup">LineItemGroup</h2>
<!-- backwards compatibility -->
<a id="schemalineitemgroup"></a>
<a id="schema_LineItemGroup"></a>
<a id="tocSlineitemgroup"></a>
<a id="tocslineitemgroup"></a>

```json
{
  "LineItemGroupIndex": {},
  "LineItems": {}
}
```

A grouping of tables which contain LineItems, with each table identified by the table's <code>LineItemGroupIndex</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LineItemGroupIndex|object|false|none|none|
|LineItems|object|false|none|none|

<h2 id="tocS_ValueType">ValueType</h2>
<!-- backwards compatibility -->
<a id="schemavaluetype"></a>
<a id="schema_ValueType"></a>
<a id="tocSvaluetype"></a>
<a id="tocsvaluetype"></a>

```json
"DATE"
```

<h2 id="tocS_SNSTopicArn">SNSTopicArn</h2>
<!-- backwards compatibility -->
<a id="schemasnstopicarn"></a>
<a id="schema_SNSTopicArn"></a>
<a id="tocSsnstopicarn"></a>
<a id="tocssnstopicarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_NotificationChannel">NotificationChannel</h2>
<!-- backwards compatibility -->
<a id="schemanotificationchannel"></a>
<a id="schema_NotificationChannel"></a>
<a id="tocSnotificationchannel"></a>
<a id="tocsnotificationchannel"></a>

```json
{
  "SNSTopicArn": {},
  "RoleArn": {}
}
```

The Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Textract publishes the completion status of an asynchronous document operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SNSTopicArn|object|true|none|none|
|RoleArn|object|true|none|none|

<h2 id="tocS_S3Bucket">S3Bucket</h2>
<!-- backwards compatibility -->
<a id="schemas3bucket"></a>
<a id="schema_S3Bucket"></a>
<a id="tocSs3bucket"></a>
<a id="tocss3bucket"></a>

```json
"string"
```

<h2 id="tocS_S3ObjectName">S3ObjectName</h2>
<!-- backwards compatibility -->
<a id="schemas3objectname"></a>
<a id="schema_S3ObjectName"></a>
<a id="tocSs3objectname"></a>
<a id="tocss3objectname"></a>

```json
"string"
```

<h2 id="tocS_OutputConfig">OutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemaoutputconfig"></a>
<a id="schema_OutputConfig"></a>
<a id="tocSoutputconfig"></a>
<a id="tocsoutputconfig"></a>

```json
{
  "S3Bucket": {},
  "S3Prefix": {}
}
```

<p>Sets whether or not your output will go to a user created bucket. Used to set the name of the bucket, and the prefix on the output file.</p> <p> <code>OutputConfig</code> is an optional parameter which lets you adjust where your output will be placed. By default, Amazon Textract will store the results internally and can only be accessed by the Get API operations. With <code>OutputConfig</code> enabled, you can set the name of the bucket the output will be sent to the file prefix of the results where you can download your results. Additionally, you can set the <code>KMSKeyID</code> parameter to a customer master key (CMK) to encrypt your output. Without this parameter set Amazon Textract will encrypt server-side using the AWS managed CMK for Amazon S3.</p> <p>Decryption of Customer Content is necessary for processing of the documents by Amazon Textract. If your account is opted out under an AI services opt out policy then all unencrypted Customer Content is immediately and permanently deleted after the Customer Content has been processed by the service. No copy of of the output is retained by Amazon Textract. For information about how to opt out, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html"> Managing AI services opt-out policy. </a> </p> <p>For more information on data privacy, see the <a href="https://aws.amazon.com/compliance/data-privacy-faq/">Data Privacy FAQ</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Bucket|object|true|none|none|
|S3Prefix|object|false|none|none|

<h2 id="tocS_PredictionList">PredictionList</h2>
<!-- backwards compatibility -->
<a id="schemapredictionlist"></a>
<a id="schema_PredictionList"></a>
<a id="tocSpredictionlist"></a>
<a id="tocspredictionlist"></a>

```json
[
  {
    "Value": {},
    "Confidence": {}
  }
]
```

<h2 id="tocS_PageList">PageList</h2>
<!-- backwards compatibility -->
<a id="schemapagelist"></a>
<a id="schema_PageList"></a>
<a id="tocSpagelist"></a>
<a id="tocspagelist"></a>

```json
[
  0
]
```

<h2 id="tocS_Pages">Pages</h2>
<!-- backwards compatibility -->
<a id="schemapages"></a>
<a id="schema_Pages"></a>
<a id="tocSpages"></a>
<a id="tocspages"></a>

```json
[
  0
]
```

<h2 id="tocS_Point">Point</h2>
<!-- backwards compatibility -->
<a id="schemapoint"></a>
<a id="schema_Point"></a>
<a id="tocSpoint"></a>
<a id="tocspoint"></a>

```json
{
  "X": {},
  "Y": {}
}
```

<p>The X and Y coordinates of a point on a document page. The X and Y values that are returned are ratios of the overall document page size. For example, if the input document is 700 x 200 and the operation returns X=0.5 and Y=0.25, then the point is at the (350,50) pixel coordinate on the document page.</p> <p>An array of <code>Point</code> objects, <code>Polygon</code>, is returned by <a>DetectDocumentText</a>. <code>Polygon</code> represents a fine-grained polygon around detected text. For more information, see Geometry in the Amazon Textract Developer Guide. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|X|object|false|none|none|
|Y|object|false|none|none|

<h2 id="tocS_Prediction">Prediction</h2>
<!-- backwards compatibility -->
<a id="schemaprediction"></a>
<a id="schema_Prediction"></a>
<a id="tocSprediction"></a>
<a id="tocsprediction"></a>

```json
{
  "Value": {},
  "Confidence": {}
}
```

Contains information regarding predicted values returned by Amazon Textract operations, including the predicted value and the confidence in the predicted value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|false|none|none|
|Confidence|object|false|none|none|

<h2 id="tocS_Queries">Queries</h2>
<!-- backwards compatibility -->
<a id="schemaqueries"></a>
<a id="schema_Queries"></a>
<a id="tocSqueries"></a>
<a id="tocsqueries"></a>

```json
[
  {
    "Text": {},
    "Alias": {},
    "Pages": {}
  }
]
```

<h2 id="tocS_QueryInput">QueryInput</h2>
<!-- backwards compatibility -->
<a id="schemaqueryinput"></a>
<a id="schema_QueryInput"></a>
<a id="tocSqueryinput"></a>
<a id="tocsqueryinput"></a>

```json
"string"
```

<h2 id="tocS_QueryPages">QueryPages</h2>
<!-- backwards compatibility -->
<a id="schemaquerypages"></a>
<a id="schema_QueryPages"></a>
<a id="tocSquerypages"></a>
<a id="tocsquerypages"></a>

```json
[
  "string"
]
```

<h2 id="tocS_QueryPage">QueryPage</h2>
<!-- backwards compatibility -->
<a id="schemaquerypage"></a>
<a id="schema_QueryPage"></a>
<a id="tocSquerypage"></a>
<a id="tocsquerypage"></a>

```json
"string"
```

<h2 id="tocS_RelationshipType">RelationshipType</h2>
<!-- backwards compatibility -->
<a id="schemarelationshiptype"></a>
<a id="schema_RelationshipType"></a>
<a id="tocSrelationshiptype"></a>
<a id="tocsrelationshiptype"></a>

```json
"VALUE"
```

<h2 id="tocS_Relationship">Relationship</h2>
<!-- backwards compatibility -->
<a id="schemarelationship"></a>
<a id="schema_Relationship"></a>
<a id="tocSrelationship"></a>
<a id="tocsrelationship"></a>

```json
{
  "Type": {},
  "Ids": {}
}
```

<p>Information about how blocks are related to each other. A <code>Block</code> object contains 0 or more <code>Relation</code> objects in a list, <code>Relationships</code>. For more information, see <a>Block</a>.</p> <p>The <code>Type</code> element provides the type of the relationship for all blocks in the <code>IDs</code> array. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Ids|object|false|none|none|

<h2 id="tocS_S3ObjectVersion">S3ObjectVersion</h2>
<!-- backwards compatibility -->
<a id="schemas3objectversion"></a>
<a id="schema_S3ObjectVersion"></a>
<a id="tocSs3objectversion"></a>
<a id="tocss3objectversion"></a>

```json
"string"
```

<h2 id="tocS_SignatureDetection">SignatureDetection</h2>
<!-- backwards compatibility -->
<a id="schemasignaturedetection"></a>
<a id="schema_SignatureDetection"></a>
<a id="tocSsignaturedetection"></a>
<a id="tocssignaturedetection"></a>

```json
{
  "Confidence": {},
  "Geometry": {
    "BoundingBox": {
      "Width": {},
      "Height": {},
      "Left": {},
      "Top": {}
    },
    "Polygon": {}
  }
}
```

Information regarding a detected signature on a page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Confidence|object|false|none|none|
|Geometry|[Geometry](#schemageometry)|false|none|Information about where the following items are located on a document page: detected page, text, key-value pairs, tables, table cells, and selection elements.|

<h2 id="tocS_SplitDocument">SplitDocument</h2>
<!-- backwards compatibility -->
<a id="schemasplitdocument"></a>
<a id="schema_SplitDocument"></a>
<a id="tocSsplitdocument"></a>
<a id="tocssplitdocument"></a>

```json
{
  "Index": {},
  "Pages": {}
}
```

Contains information about the pages of a document, defined by logical boundary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Index|object|false|none|none|
|Pages|object|false|none|none|

<h2 id="tocS_UndetectedSignature">UndetectedSignature</h2>
<!-- backwards compatibility -->
<a id="schemaundetectedsignature"></a>
<a id="schema_UndetectedSignature"></a>
<a id="tocSundetectedsignature"></a>
<a id="tocsundetectedsignature"></a>

```json
{
  "Page": {}
}
```

A structure containing information about an undetected signature on a page where it was expected but not found.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Page|object|false|none|none|

<h2 id="tocS_Warning">Warning</h2>
<!-- backwards compatibility -->
<a id="schemawarning"></a>
<a id="schema_Warning"></a>
<a id="tocSwarning"></a>
<a id="tocswarning"></a>

```json
{
  "ErrorCode": {},
  "Pages": {}
}
```

A warning about an issue that occurred during asynchronous text analysis (<a>StartDocumentAnalysis</a>) or asynchronous document text detection (<a>StartDocumentTextDetection</a>).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|object|false|none|none|
|Pages|object|false|none|none|
