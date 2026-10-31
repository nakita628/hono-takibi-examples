import { createRoute, z } from '@hono/zod-openapi'

const BodyBlobSchema = z.string().max(6291456).openapi('BodyBlob')

const InvokeEndpointOutputSchema = z
  .object({
    Body: BodyBlobSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Includes the inference provided by the model. </p> <p>For information about the format of the response body, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/cdf-inference.html">Common Data Formats-Inference</a>.</p> <p>If the explainer is activated, the body includes the explanations provided by the model. For more information, see the <b>Response section</b> under <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-invoke-endpoint.html#clarify-online-explainability-response">Invoke the Endpoint</a> in the Developer Guide.</p>',
        }),
    ),
  })
  .openapi({ required: ['Body'] })
  .openapi('InvokeEndpointOutput')

const InternalFailureSchema = z.any().openapi('InternalFailure')

const ServiceUnavailableSchema = z.any().openapi('ServiceUnavailable')

const ValidationErrorSchema = z.any().openapi('ValidationError')

const ModelErrorSchema = z.any().openapi('ModelError')

const InternalDependencyExceptionSchema = z.any().openapi('InternalDependencyException')

const ModelNotReadyExceptionSchema = z.any().openapi('ModelNotReadyException')

const HeaderSchema = z
  .string()
  .regex(/\p{ASCII}*/u)
  .max(1024)
  .openapi('Header')

const InvokeEndpointAsyncOutputSchema = z
  .object({
    InferenceId: HeaderSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier for an inference request. This will be the same as the <code>InferenceId</code> specified in the input. Amazon SageMaker will generate an identifier for you if you do not specify one.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InvokeEndpointAsyncOutput')

const CustomAttributesHeaderSchema = z
  .string()
  .regex(/\p{ASCII}*/u)
  .max(1024)
  .openapi('CustomAttributesHeader')

const EnableExplanationsHeaderSchema = z
  .string()
  .regex(/.*/)
  .min(1)
  .max(64)
  .openapi('EnableExplanationsHeader')

const EndpointNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9](-*[a-zA-Z0-9])*/)
  .max(63)
  .openapi('EndpointName')

const InferenceIdSchema = z
  .string()
  .min(1)
  .max(64)
  .openapi({ pattern: '\\A\\S[\\p{Print}]*\\z' })
  .openapi('InferenceId')

const InputLocationHeaderSchema = z
  .string()
  .regex(/^(https|s3):\/\/([^\/]+)\/?(.*)$/)
  .min(1)
  .max(1024)
  .openapi('InputLocationHeader')

const InvocationTimeoutSecondsHeaderSchema = z
  .int()
  .min(1)
  .max(3600)
  .openapi('InvocationTimeoutSecondsHeader')

const RequestTTLSecondsHeaderSchema = z.int().min(60).max(21600).openapi('RequestTTLSecondsHeader')

const InvokeEndpointAsyncInputSchema = z
  .object({})
  .openapi({ title: 'InvokeEndpointAsyncInput' })
  .openapi('InvokeEndpointAsyncInput')

const TargetModelHeaderSchema = z
  .string()
  .min(1)
  .max(1024)
  .openapi({ pattern: '\\A\\S[\\p{Print}]*\\z' })
  .openapi('TargetModelHeader')

const TargetVariantHeaderSchema = z
  .string()
  .regex(/^[a-zA-Z0-9](-*[a-zA-Z0-9])*/)
  .max(63)
  .openapi('TargetVariantHeader')

const TargetContainerHostnameHeaderSchema = z
  .string()
  .regex(/^[a-zA-Z0-9](-*[a-zA-Z0-9])*/)
  .max(63)
  .openapi('TargetContainerHostnameHeader')

const InvokeEndpointInputSchema = z
  .object({
    Body: BodyBlobSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Provides input data, in the format specified in the <code>ContentType</code> request header. Amazon SageMaker passes all of the data in the body to the model. </p> <p>For information about the format of the request body, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/cdf-inference.html">Common Data Formats-Inference</a>.</p>',
        }),
    ),
  })
  .openapi({ required: ['Body'], title: 'InvokeEndpointInput' })
  .openapi('InvokeEndpointInput')

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

export const postEndpointsEndpointNameInvocationsRoute = createRoute({
  method: 'post',
  path: '/endpoints/{EndpointName}/invocations',
  description:
    '<p>After you deploy a model into production using Amazon SageMaker hosting services, your client applications use this API to get inferences from the model hosted at the specified endpoint. </p> <p>For an overview of Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p> <p>Amazon SageMaker strips all POST headers except those supported by the API. Amazon SageMaker might add additional headers. You should not rely on the behavior of headers outside those enumerated in the request syntax. </p> <p>Calls to <code>InvokeEndpoint</code> are authenticated by using Amazon Web Services Signature Version 4. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating Requests (Amazon Web Services Signature Version 4)</a> in the <i>Amazon S3 API Reference</i>.</p> <p>A customer\'s model containers must respond to requests within 60 seconds. The model itself can have a maximum processing time of 60 seconds before responding to invocations. If your model is going to take 50-60 seconds of processing time, the SDK socket timeout should be set to be 70 seconds.</p> <note> <p>Endpoints are scoped to an individual account, and are not public. The URL does not contain the account ID, but Amazon SageMaker determines the account ID from the authentication token that is supplied by the caller.</p> </note>',
  operationId: 'InvokeEndpoint',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'Content-Type': z
        .string()
        .regex(/\p{ASCII}*/u)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'Content-Type',
            in: 'header',
            required: false,
            description: 'The MIME type of the input data in the request body.',
            schema: { type: 'string', pattern: '\\p{ASCII}*', maxLength: 1024 },
          },
        }),
      Accept: z
        .string()
        .regex(/\p{ASCII}*/u)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'Accept',
            in: 'header',
            required: false,
            description: 'The desired MIME type of the inference in the response.',
            schema: { type: 'string', pattern: '\\p{ASCII}*', maxLength: 1024 },
          },
        }),
      'X-Amzn-SageMaker-Custom-Attributes': z
        .string()
        .regex(/\p{ASCII}*/u)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-SageMaker-Custom-Attributes',
            in: 'header',
            required: false,
            description:
              '<p>Provides additional information about a request for an inference submitted to a model hosted at an Amazon SageMaker endpoint. The information is an opaque value that is forwarded verbatim. You could use this value, for example, to provide an ID that you can use to track a request or to provide other metadata that a service endpoint was programmed to process. The value must consist of no more than 1024 visible US-ASCII characters as specified in <a href="https://tools.ietf.org/html/rfc7230#section-3.2.6">Section 3.3.6. Field Value Components</a> of the Hypertext Transfer Protocol (HTTP/1.1). </p> <p>The code in your model is responsible for setting or updating any custom attributes in the response. If your code does not set this value in the response, an empty value is returned. For example, if a custom attribute represents the trace ID, your model can prepend the custom attribute with <code>Trace ID:</code> in your post-processing function.</p> <p>This feature is currently supported in the Amazon Web Services SDKs but not in the Amazon SageMaker Python SDK.</p>',
            schema: { type: 'string', pattern: '\\p{ASCII}*', maxLength: 1024, format: 'password' },
          },
        }),
      'X-Amzn-SageMaker-Target-Model': z
        .string()
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-SageMaker-Target-Model',
            in: 'header',
            required: false,
            description: 'The model to request for inference when invoking a multi-model endpoint.',
            schema: {
              type: 'string',
              pattern: '\\A\\S[\\p{Print}]*\\z',
              minLength: 1,
              maxLength: 1024,
            },
          },
          pattern: '\\A\\S[\\p{Print}]*\\z',
        }),
      'X-Amzn-SageMaker-Target-Variant': z
        .string()
        .regex(/^[a-zA-Z0-9](-*[a-zA-Z0-9])*/)
        .max(63)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-SageMaker-Target-Variant',
            in: 'header',
            required: false,
            description:
              '<p>Specify the production variant to send the inference request to when invoking an endpoint that is running two or more variants. Note that this parameter overrides the default behavior for the endpoint, which is to distribute the invocation traffic based on the variant weights.</p> <p>For information about how to use variant targeting to perform a/b testing, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-ab-testing.html">Test models in production</a> </p>',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9](-*[a-zA-Z0-9])*', maxLength: 63 },
          },
        }),
      'X-Amzn-SageMaker-Target-Container-Hostname': z
        .string()
        .regex(/^[a-zA-Z0-9](-*[a-zA-Z0-9])*/)
        .max(63)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-SageMaker-Target-Container-Hostname',
            in: 'header',
            required: false,
            description:
              'If the endpoint hosts multiple containers and is configured to use direct invocation, this parameter specifies the host name of the container to invoke.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9](-*[a-zA-Z0-9])*', maxLength: 63 },
          },
        }),
      'X-Amzn-SageMaker-Inference-Id': z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-SageMaker-Inference-Id',
            in: 'header',
            required: false,
            description:
              'If you provide a value, it is added to the captured data when you enable data capture on the endpoint. For information about data capture, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-data-capture.html">Capture Data</a>.',
            schema: {
              type: 'string',
              pattern: '\\A\\S[\\p{Print}]*\\z',
              minLength: 1,
              maxLength: 64,
            },
          },
          pattern: '\\A\\S[\\p{Print}]*\\z',
        }),
      'X-Amzn-SageMaker-Enable-Explanations': z
        .string()
        .regex(/.*/)
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-SageMaker-Enable-Explanations',
            in: 'header',
            required: false,
            description:
              'An optional JMESPath expression used to override the <code>EnableExplanations</code> parameter of the <code>ClarifyExplainerConfig</code> API. See the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-create-endpoint.html#clarify-online-explainability-create-endpoint-enable">EnableExplanations</a> section in the developer guide for more information. ',
            schema: { type: 'string', pattern: '.*', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      EndpointName: z
        .string()
        .regex(/^[a-zA-Z0-9](-*[a-zA-Z0-9])*/)
        .max(63)
        .openapi({
          param: {
            name: 'EndpointName',
            in: 'path',
            required: true,
            description:
              'The name of the endpoint that you specified when you created the endpoint using the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html">CreateEndpoint</a> API. ',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9](-*[a-zA-Z0-9])*', maxLength: 63 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Body: z
                .string()
                .max(6291456)
                .openapi({
                  description:
                    '<p>Provides input data, in the format specified in the <code>ContentType</code> request header. Amazon SageMaker passes all of the data in the body to the model. </p> <p>For information about the format of the request body, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/cdf-inference.html">Common Data Formats-Inference</a>.</p>',
                }),
            })
            .openapi({ required: ['Body'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InvokeEndpointOutputSchema } },
    },
    480: {
      description: 'InternalFailure',
      content: { 'application/json': { schema: InternalFailureSchema } },
    },
    481: {
      description: 'ServiceUnavailable',
      content: { 'application/json': { schema: ServiceUnavailableSchema } },
    },
    482: {
      description: 'ValidationError',
      content: { 'application/json': { schema: ValidationErrorSchema } },
    },
    483: {
      description: 'ModelError',
      content: { 'application/json': { schema: ModelErrorSchema } },
    },
    484: {
      description: 'InternalDependencyException',
      content: { 'application/json': { schema: InternalDependencyExceptionSchema } },
    },
    485: {
      description: 'ModelNotReadyException',
      content: { 'application/json': { schema: ModelNotReadyExceptionSchema } },
    },
  },
})

export const postEndpointsEndpointNameAsyncInvocationsXAmznSageMakerInputLocationRoute =
  createRoute({
    method: 'post',
    path: '/endpoints/{EndpointName}/async-invocations#X-Amzn-SageMaker-InputLocation',
    description:
      '<p>After you deploy a model into production using Amazon SageMaker hosting services, your client applications use this API to get inferences from the model hosted at the specified endpoint in an asynchronous manner.</p> <p>Inference requests sent to this API are enqueued for asynchronous processing. The processing of the inference request may or may not complete before you receive a response from this API. The response from this API will not contain the result of the inference request but contain information about where you can locate it.</p> <p>Amazon SageMaker strips all <code>POST</code> headers except those supported by the API. Amazon SageMaker might add additional headers. You should not rely on the behavior of headers outside those enumerated in the request syntax.</p> <p>Calls to <code>InvokeEndpointAsync</code> are authenticated by using Amazon Web Services Signature Version 4. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating Requests (Amazon Web Services Signature Version 4)</a> in the <i>Amazon S3 API Reference</i>.</p>',
    operationId: 'InvokeEndpointAsync',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amzn-SageMaker-Content-Type': z
          .string()
          .regex(/\p{ASCII}*/u)
          .max(1024)
          .exactOptional()
          .openapi({
            param: {
              name: 'X-Amzn-SageMaker-Content-Type',
              in: 'header',
              required: false,
              description: 'The MIME type of the input data in the request body.',
              schema: { type: 'string', pattern: '\\p{ASCII}*', maxLength: 1024 },
            },
          }),
        'X-Amzn-SageMaker-Accept': z
          .string()
          .regex(/\p{ASCII}*/u)
          .max(1024)
          .exactOptional()
          .openapi({
            param: {
              name: 'X-Amzn-SageMaker-Accept',
              in: 'header',
              required: false,
              description: 'The desired MIME type of the inference in the response.',
              schema: { type: 'string', pattern: '\\p{ASCII}*', maxLength: 1024 },
            },
          }),
        'X-Amzn-SageMaker-Custom-Attributes': z
          .string()
          .regex(/\p{ASCII}*/u)
          .max(1024)
          .exactOptional()
          .openapi({
            param: {
              name: 'X-Amzn-SageMaker-Custom-Attributes',
              in: 'header',
              required: false,
              description:
                '<p>Provides additional information about a request for an inference submitted to a model hosted at an Amazon SageMaker endpoint. The information is an opaque value that is forwarded verbatim. You could use this value, for example, to provide an ID that you can use to track a request or to provide other metadata that a service endpoint was programmed to process. The value must consist of no more than 1024 visible US-ASCII characters as specified in <a href="https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6">Section 3.3.6. Field Value Components</a> of the Hypertext Transfer Protocol (HTTP/1.1). </p> <p>The code in your model is responsible for setting or updating any custom attributes in the response. If your code does not set this value in the response, an empty value is returned. For example, if a custom attribute represents the trace ID, your model can prepend the custom attribute with <code>Trace ID</code>: in your post-processing function. </p> <p>This feature is currently supported in the Amazon Web Services SDKs but not in the Amazon SageMaker Python SDK. </p>',
              schema: {
                type: 'string',
                pattern: '\\p{ASCII}*',
                maxLength: 1024,
                format: 'password',
              },
            },
          }),
        'X-Amzn-SageMaker-Inference-Id': z
          .string()
          .min(1)
          .max(64)
          .exactOptional()
          .openapi({
            param: {
              name: 'X-Amzn-SageMaker-Inference-Id',
              in: 'header',
              required: false,
              description:
                'The identifier for the inference request. Amazon SageMaker will generate an identifier for you if none is specified. ',
              schema: {
                type: 'string',
                pattern: '\\A\\S[\\p{Print}]*\\z',
                minLength: 1,
                maxLength: 64,
              },
            },
            pattern: '\\A\\S[\\p{Print}]*\\z',
          }),
        'X-Amzn-SageMaker-InputLocation': z
          .string()
          .regex(/^(https|s3):\/\/([^\/]+)\/?(.*)$/)
          .min(1)
          .max(1024)
          .openapi({
            param: {
              name: 'X-Amzn-SageMaker-InputLocation',
              in: 'header',
              required: true,
              description: 'The Amazon S3 URI where the inference request payload is stored.',
              schema: {
                type: 'string',
                pattern: '^(https|s3)://([^/]+)/?(.*)$',
                minLength: 1,
                maxLength: 1024,
              },
            },
          }),
        'X-Amzn-SageMaker-RequestTTLSeconds': z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(60).max(21600),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'X-Amzn-SageMaker-RequestTTLSeconds',
              in: 'header',
              required: false,
              description:
                'Maximum age in seconds a request can be in the queue before it is marked as expired. The default is 6 hours, or 21,600 seconds.',
              schema: { type: 'integer', minimum: 60, maximum: 21600 },
            },
          }),
        'X-Amzn-SageMaker-InvocationTimeoutSeconds': z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(1).max(3600),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'X-Amzn-SageMaker-InvocationTimeoutSeconds',
              in: 'header',
              required: false,
              description:
                'Maximum amount of time in seconds a request can be processed before it is marked as expired. The default is 15 minutes, or 900 seconds.',
              schema: { type: 'integer', minimum: 1, maximum: 3600 },
            },
          }),
      }),
      params: z.object({
        EndpointName: z
          .string()
          .regex(/^[a-zA-Z0-9](-*[a-zA-Z0-9])*/)
          .max(63)
          .openapi({
            param: {
              name: 'EndpointName',
              in: 'path',
              required: true,
              description:
                'The name of the endpoint that you specified when you created the endpoint using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html"> <code>CreateEndpoint</code> </a> API.',
              schema: { type: 'string', pattern: '^[a-zA-Z0-9](-*[a-zA-Z0-9])*', maxLength: 63 },
            },
          }),
      }),
    },
    responses: {
      202: {
        description: 'Success',
        content: { 'application/json': { schema: InvokeEndpointAsyncOutputSchema } },
      },
      480: {
        description: 'InternalFailure',
        content: { 'application/json': { schema: InternalFailureSchema } },
      },
      481: {
        description: 'ServiceUnavailable',
        content: { 'application/json': { schema: ServiceUnavailableSchema } },
      },
      482: {
        description: 'ValidationError',
        content: { 'application/json': { schema: ValidationErrorSchema } },
      },
    },
  })
