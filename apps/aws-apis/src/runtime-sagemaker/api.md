<h1 id="amazon-sagemaker-runtime">Amazon SageMaker Runtime v2017-05-13</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

 The Amazon SageMaker runtime API.

Base URLs:

* <a href="http://runtime.sagemaker.us-east-1.amazonaws.com">http://runtime.sagemaker.us-east-1.amazonaws.com</a> - The Amazon SageMaker Runtime multi-region endpoint

* <a href="https://runtime.sagemaker.us-east-1.amazonaws.com">https://runtime.sagemaker.us-east-1.amazonaws.com</a> - The Amazon SageMaker Runtime multi-region endpoint

* <a href="http://runtime.sagemaker.cn-north-1.amazonaws.com.cn">http://runtime.sagemaker.cn-north-1.amazonaws.com.cn</a> - The Amazon SageMaker Runtime endpoint for China (Beijing) and China (Ningxia)

* <a href="https://runtime.sagemaker.cn-north-1.amazonaws.com.cn">https://runtime.sagemaker.cn-north-1.amazonaws.com.cn</a> - The Amazon SageMaker Runtime endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/sagemaker/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-sagemaker-runtime-default">Default</h1>

## InvokeEndpoint

<a id="opIdInvokeEndpoint"></a>

> Code samples

```bash
curl https://runtime-sagemaker.us-east-1.amazonaws.com/endpoints/string/invocations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Body": "password"
  }'
```

`POST /endpoints/{EndpointName}/invocations`

<p>After you deploy a model into production using Amazon SageMaker hosting services, your client applications use this API to get inferences from the model hosted at the specified endpoint. </p> <p>For an overview of Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p> <p>Amazon SageMaker strips all POST headers except those supported by the API. Amazon SageMaker might add additional headers. You should not rely on the behavior of headers outside those enumerated in the request syntax. </p> <p>Calls to <code>InvokeEndpoint</code> are authenticated by using Amazon Web Services Signature Version 4. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating Requests (Amazon Web Services Signature Version 4)</a> in the <i>Amazon S3 API Reference</i>.</p> <p>A customer's model containers must respond to requests within 60 seconds. The model itself can have a maximum processing time of 60 seconds before responding to invocations. If your model is going to take 50-60 seconds of processing time, the SDK socket timeout should be set to be 70 seconds.</p> <note> <p>Endpoints are scoped to an individual account, and are not public. The URL does not contain the account ID, but Amazon SageMaker determines the account ID from the authentication token that is supplied by the caller.</p> </note>

> Body parameter

```json
{
  "Body": "password"
}
```

<h3 id="invokeendpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EndpointName|path|string|true|The name of the endpoint that you specified when you created the endpoint using the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html">CreateEndpoint</a> API. |
|Content-Type|header|string|false|The MIME type of the input data in the request body.|
|Accept|header|string|false|The desired MIME type of the inference in the response.|
|X-Amzn-SageMaker-Custom-Attributes|header|string(password)|false|<p>Provides additional information about a request for an inference submitted to a model hosted at an Amazon SageMaker endpoint. The information is an opaque value that is forwarded verbatim. You could use this value, for example, to provide an ID that you can use to track a request or to provide other metadata that a service endpoint was programmed to process. The value must consist of no more than 1024 visible US-ASCII characters as specified in <a href="https://tools.ietf.org/html/rfc7230#section-3.2.6">Section 3.3.6. Field Value Components</a> of the Hypertext Transfer Protocol (HTTP/1.1). </p> <p>The code in your model is responsible for setting or updating any custom attributes in the response. If your code does not set this value in the response, an empty value is returned. For example, if a custom attribute represents the trace ID, your model can prepend the custom attribute with <code>Trace ID:</code> in your post-processing function.</p> <p>This feature is currently supported in the Amazon Web Services SDKs but not in the Amazon SageMaker Python SDK.</p>|
|X-Amzn-SageMaker-Target-Model|header|string|false|The model to request for inference when invoking a multi-model endpoint.|
|X-Amzn-SageMaker-Target-Variant|header|string|false|<p>Specify the production variant to send the inference request to when invoking an endpoint that is running two or more variants. Note that this parameter overrides the default behavior for the endpoint, which is to distribute the invocation traffic based on the variant weights.</p> <p>For information about how to use variant targeting to perform a/b testing, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-ab-testing.html">Test models in production</a> </p>|
|X-Amzn-SageMaker-Target-Container-Hostname|header|string|false|If the endpoint hosts multiple containers and is configured to use direct invocation, this parameter specifies the host name of the container to invoke.|
|X-Amzn-SageMaker-Inference-Id|header|string|false|If you provide a value, it is added to the captured data when you enable data capture on the endpoint. For information about data capture, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-data-capture.html">Capture Data</a>.|
|X-Amzn-SageMaker-Enable-Explanations|header|string|false|An optional JMESPath expression used to override the <code>EnableExplanations</code> parameter of the <code>ClarifyExplainerConfig</code> API. See the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-create-endpoint.html#clarify-online-explainability-create-endpoint-enable">EnableExplanations</a> section in the developer guide for more information. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Body|body|string(password)|true|<p>Provides input data, in the format specified in the <code>ContentType</code> request header. Amazon SageMaker passes all of the data in the body to the model. </p> <p>For information about the format of the request body, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/cdf-inference.html">Common Data Formats-Inference</a>.</p>|

> Example responses

> 200 Response

```json
{
  "Body": {}
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

<h3 id="invokeendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InvokeEndpointOutput](#schemainvokeendpointoutput)|
|480|480|InternalFailure|[InternalFailure](#schemainternalfailure)|
|481|481|ServiceUnavailable|[ServiceUnavailable](#schemaserviceunavailable)|
|482|482|ValidationError|[ValidationError](#schemavalidationerror)|
|483|483|ModelError|[ModelError](#schemamodelerror)|
|484|484|InternalDependencyException|[InternalDependencyException](#schemainternaldependencyexception)|
|485|485|ModelNotReadyException|[ModelNotReadyException](#schemamodelnotreadyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## InvokeEndpointAsync

<a id="opIdInvokeEndpointAsync"></a>

> Code samples

```bash
curl 'https://runtime-sagemaker.us-east-1.amazonaws.com/endpoints/string/async-invocations#X-Amzn-SageMaker-InputLocation' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amzn-SageMaker-InputLocation: string'
```

`POST /endpoints/{EndpointName}/async-invocations#X-Amzn-SageMaker-InputLocation`

<p>After you deploy a model into production using Amazon SageMaker hosting services, your client applications use this API to get inferences from the model hosted at the specified endpoint in an asynchronous manner.</p> <p>Inference requests sent to this API are enqueued for asynchronous processing. The processing of the inference request may or may not complete before you receive a response from this API. The response from this API will not contain the result of the inference request but contain information about where you can locate it.</p> <p>Amazon SageMaker strips all <code>POST</code> headers except those supported by the API. Amazon SageMaker might add additional headers. You should not rely on the behavior of headers outside those enumerated in the request syntax.</p> <p>Calls to <code>InvokeEndpointAsync</code> are authenticated by using Amazon Web Services Signature Version 4. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating Requests (Amazon Web Services Signature Version 4)</a> in the <i>Amazon S3 API Reference</i>.</p>

<h3 id="invokeendpointasync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EndpointName|path|string|true|The name of the endpoint that you specified when you created the endpoint using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html"> <code>CreateEndpoint</code> </a> API.|
|X-Amzn-SageMaker-Content-Type|header|string|false|The MIME type of the input data in the request body.|
|X-Amzn-SageMaker-Accept|header|string|false|The desired MIME type of the inference in the response.|
|X-Amzn-SageMaker-Custom-Attributes|header|string(password)|false|<p>Provides additional information about a request for an inference submitted to a model hosted at an Amazon SageMaker endpoint. The information is an opaque value that is forwarded verbatim. You could use this value, for example, to provide an ID that you can use to track a request or to provide other metadata that a service endpoint was programmed to process. The value must consist of no more than 1024 visible US-ASCII characters as specified in <a href="https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6">Section 3.3.6. Field Value Components</a> of the Hypertext Transfer Protocol (HTTP/1.1). </p> <p>The code in your model is responsible for setting or updating any custom attributes in the response. If your code does not set this value in the response, an empty value is returned. For example, if a custom attribute represents the trace ID, your model can prepend the custom attribute with <code>Trace ID</code>: in your post-processing function. </p> <p>This feature is currently supported in the Amazon Web Services SDKs but not in the Amazon SageMaker Python SDK. </p>|
|X-Amzn-SageMaker-Inference-Id|header|string|false|The identifier for the inference request. Amazon SageMaker will generate an identifier for you if none is specified. |
|X-Amzn-SageMaker-InputLocation|header|string|true|The Amazon S3 URI where the inference request payload is stored.|
|X-Amzn-SageMaker-RequestTTLSeconds|header|integer|false|Maximum age in seconds a request can be in the queue before it is marked as expired. The default is 6 hours, or 21,600 seconds.|
|X-Amzn-SageMaker-InvocationTimeoutSeconds|header|integer|false|Maximum amount of time in seconds a request can be processed before it is marked as expired. The default is 15 minutes, or 900 seconds.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 202 Response

```json
{
  "InferenceId": {}
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

<h3 id="invokeendpointasync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[InvokeEndpointAsyncOutput](#schemainvokeendpointasyncoutput)|
|480|480|InternalFailure|[InternalFailure](#schemainternalfailure)|
|481|481|ServiceUnavailable|[ServiceUnavailable](#schemaserviceunavailable)|
|482|482|ValidationError|[ValidationError](#schemavalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_InvokeEndpointOutput">InvokeEndpointOutput</h2>
<!-- backwards compatibility -->
<a id="schemainvokeendpointoutput"></a>
<a id="schema_InvokeEndpointOutput"></a>
<a id="tocSinvokeendpointoutput"></a>
<a id="tocsinvokeendpointoutput"></a>

```json
{
  "Body": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Body|object|true|none|none|

<h2 id="tocS_InternalFailure">InternalFailure</h2>
<!-- backwards compatibility -->
<a id="schemainternalfailure"></a>
<a id="schema_InternalFailure"></a>
<a id="tocSinternalfailure"></a>
<a id="tocsinternalfailure"></a>

```json
null
```

<h2 id="tocS_ServiceUnavailable">ServiceUnavailable</h2>
<!-- backwards compatibility -->
<a id="schemaserviceunavailable"></a>
<a id="schema_ServiceUnavailable"></a>
<a id="tocSserviceunavailable"></a>
<a id="tocsserviceunavailable"></a>

```json
null
```

<h2 id="tocS_ValidationError">ValidationError</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerror"></a>
<a id="schema_ValidationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
null
```

<h2 id="tocS_ModelError">ModelError</h2>
<!-- backwards compatibility -->
<a id="schemamodelerror"></a>
<a id="schema_ModelError"></a>
<a id="tocSmodelerror"></a>
<a id="tocsmodelerror"></a>

```json
null
```

<h2 id="tocS_InternalDependencyException">InternalDependencyException</h2>
<!-- backwards compatibility -->
<a id="schemainternaldependencyexception"></a>
<a id="schema_InternalDependencyException"></a>
<a id="tocSinternaldependencyexception"></a>
<a id="tocsinternaldependencyexception"></a>

```json
null
```

<h2 id="tocS_ModelNotReadyException">ModelNotReadyException</h2>
<!-- backwards compatibility -->
<a id="schemamodelnotreadyexception"></a>
<a id="schema_ModelNotReadyException"></a>
<a id="tocSmodelnotreadyexception"></a>
<a id="tocsmodelnotreadyexception"></a>

```json
null
```

<h2 id="tocS_InvokeEndpointAsyncOutput">InvokeEndpointAsyncOutput</h2>
<!-- backwards compatibility -->
<a id="schemainvokeendpointasyncoutput"></a>
<a id="schema_InvokeEndpointAsyncOutput"></a>
<a id="tocSinvokeendpointasyncoutput"></a>
<a id="tocsinvokeendpointasyncoutput"></a>

```json
{
  "InferenceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InferenceId|object|false|none|none|

<h2 id="tocS_BodyBlob">BodyBlob</h2>
<!-- backwards compatibility -->
<a id="schemabodyblob"></a>
<a id="schema_BodyBlob"></a>
<a id="tocSbodyblob"></a>
<a id="tocsbodyblob"></a>

```json
"password"
```

<h2 id="tocS_CustomAttributesHeader">CustomAttributesHeader</h2>
<!-- backwards compatibility -->
<a id="schemacustomattributesheader"></a>
<a id="schema_CustomAttributesHeader"></a>
<a id="tocScustomattributesheader"></a>
<a id="tocscustomattributesheader"></a>

```json
"password"
```

<h2 id="tocS_EnableExplanationsHeader">EnableExplanationsHeader</h2>
<!-- backwards compatibility -->
<a id="schemaenableexplanationsheader"></a>
<a id="schema_EnableExplanationsHeader"></a>
<a id="tocSenableexplanationsheader"></a>
<a id="tocsenableexplanationsheader"></a>

```json
"string"
```

<h2 id="tocS_EndpointName">EndpointName</h2>
<!-- backwards compatibility -->
<a id="schemaendpointname"></a>
<a id="schema_EndpointName"></a>
<a id="tocSendpointname"></a>
<a id="tocsendpointname"></a>

```json
"string"
```

<h2 id="tocS_Header">Header</h2>
<!-- backwards compatibility -->
<a id="schemaheader"></a>
<a id="schema_Header"></a>
<a id="tocSheader"></a>
<a id="tocsheader"></a>

```json
"string"
```

<h2 id="tocS_InferenceId">InferenceId</h2>
<!-- backwards compatibility -->
<a id="schemainferenceid"></a>
<a id="schema_InferenceId"></a>
<a id="tocSinferenceid"></a>
<a id="tocsinferenceid"></a>

```json
"string"
```

<h2 id="tocS_InputLocationHeader">InputLocationHeader</h2>
<!-- backwards compatibility -->
<a id="schemainputlocationheader"></a>
<a id="schema_InputLocationHeader"></a>
<a id="tocSinputlocationheader"></a>
<a id="tocsinputlocationheader"></a>

```json
"string"
```

<h2 id="tocS_InvocationTimeoutSecondsHeader">InvocationTimeoutSecondsHeader</h2>
<!-- backwards compatibility -->
<a id="schemainvocationtimeoutsecondsheader"></a>
<a id="schema_InvocationTimeoutSecondsHeader"></a>
<a id="tocSinvocationtimeoutsecondsheader"></a>
<a id="tocsinvocationtimeoutsecondsheader"></a>

```json
1
```

<h2 id="tocS_RequestTTLSecondsHeader">RequestTTLSecondsHeader</h2>
<!-- backwards compatibility -->
<a id="schemarequestttlsecondsheader"></a>
<a id="schema_RequestTTLSecondsHeader"></a>
<a id="tocSrequestttlsecondsheader"></a>
<a id="tocsrequestttlsecondsheader"></a>

```json
60
```

<h2 id="tocS_InvokeEndpointAsyncInput">InvokeEndpointAsyncInput</h2>
<!-- backwards compatibility -->
<a id="schemainvokeendpointasyncinput"></a>
<a id="schema_InvokeEndpointAsyncInput"></a>
<a id="tocSinvokeendpointasyncinput"></a>
<a id="tocsinvokeendpointasyncinput"></a>

```json
{}
```

<h2 id="tocS_TargetModelHeader">TargetModelHeader</h2>
<!-- backwards compatibility -->
<a id="schematargetmodelheader"></a>
<a id="schema_TargetModelHeader"></a>
<a id="tocStargetmodelheader"></a>
<a id="tocstargetmodelheader"></a>

```json
"string"
```

<h2 id="tocS_TargetVariantHeader">TargetVariantHeader</h2>
<!-- backwards compatibility -->
<a id="schematargetvariantheader"></a>
<a id="schema_TargetVariantHeader"></a>
<a id="tocStargetvariantheader"></a>
<a id="tocstargetvariantheader"></a>

```json
"string"
```

<h2 id="tocS_TargetContainerHostnameHeader">TargetContainerHostnameHeader</h2>
<!-- backwards compatibility -->
<a id="schematargetcontainerhostnameheader"></a>
<a id="schema_TargetContainerHostnameHeader"></a>
<a id="tocStargetcontainerhostnameheader"></a>
<a id="tocstargetcontainerhostnameheader"></a>

```json
"string"
```

<h2 id="tocS_InvokeEndpointInput">InvokeEndpointInput</h2>
<!-- backwards compatibility -->
<a id="schemainvokeendpointinput"></a>
<a id="schema_InvokeEndpointInput"></a>
<a id="tocSinvokeendpointinput"></a>
<a id="tocsinvokeendpointinput"></a>

```json
{
  "Body": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Body|object|true|none|none|
