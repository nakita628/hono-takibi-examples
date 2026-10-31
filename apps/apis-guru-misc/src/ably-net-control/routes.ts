import { createRoute, z } from '@hono/zod-openapi'

const RuleSourceSchema = z
  .strictObject({
    channelFilter: z
      .string()
      .openapi({
        description:
          'This field allows you to filter your rule based on a regular expression that is matched against the complete channel name. Leave this empty if you want the rule to apply to all channels.',
      }),
    type: z
      .enum(['channel.message', 'channel.presence', 'channel.lifecycle', 'channel.occupancy'])
      .openapi({
        description:
          'The type `channel.message` delivers all messages published on a channel. The type `channel.presence` delivers all enter, update and leave events for members present on a channel. The type `channel.lifecycle` events for this rule type are currently not supported. Get in touch (https://ably.com/contact) if you need this feature. The type `channel.occupancy` delivers all occupancy events for the channel.',
        example: 'channel.message',
      }),
  })
  .openapi({ required: ['channelFilter', 'type'] })
  .openapi('RuleSource')

const HttpRulePatchSchema = z
  .strictObject({
    requestMode: z
      .enum(['single', 'batch'])
      .exactOptional()
      .openapi({
        description:
          'This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('http')
      .exactOptional()
      .openapi({
        description:
          'The type of rule. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      }),
    source: RuleSourceSchema.exactOptional(),
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        enveloped: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule.',
          }),
        format: z
          .enum(['json', 'msgpack'])
          .exactOptional()
          .openapi({
            description:
              'JSON provides a simpler text-based encoding, whereas MsgPack provides a more efficient binary encoding.',
          }),
        headers: z
          .array(
            z
              .object({
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The name of the header.' }),
                value: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The value of the header.' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              "If you have additional information to send, you'll need to include the relevant headers.",
          }),
        signingKeyId: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information.',
          }),
        url: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('HttpRulePatch')

const IftttRulePatchSchema = z
  .any()
  .openapi({
    'x-requestMode': {
      description:
        'Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.',
      enum: ['single'],
      example: 'single',
      type: 'string',
    },
    'x-ruleType': {
      description:
        'The type of rule. In this case IFTTT. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      enum: ['http/ifttt'],
      type: 'string',
    },
    'x-source': { $ref: '#/components/schemas/rule_source' },
    'x-target': {
      additionalProperties: false,
      properties: { eventName: { type: 'string' }, webhookKey: { type: 'string' } },
      type: 'object',
    },
  })
  .openapi('IftttRulePatch')

const ZapierRulePatchSchema = z
  .strictObject({
    requestMode: z
      .enum(['single', 'batch'])
      .exactOptional()
      .openapi({
        description:
          'This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('http/zapier')
      .exactOptional()
      .openapi({
        description:
          'The type of rule. In this case Zapier. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      }),
    source: RuleSourceSchema.exactOptional(),
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        headers: z
          .array(
            z
              .object({
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The name of the header.' }),
                value: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The value of the header.' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              "If you have additional information to send, you'll need to include the relevant headers.",
          }),
        signingKeyId: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information.',
          }),
        url: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ZapierRulePatch')

const CloudflareWorkerRulePatchSchema = z
  .strictObject({
    requestMode: z
      .enum(['single', 'batch'])
      .exactOptional()
      .openapi({
        description:
          'This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('http/cloudflare-worker')
      .exactOptional()
      .openapi({
        description:
          'The type of rule. In this case Cloudflare Worker. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      }),
    source: RuleSourceSchema.exactOptional(),
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        headers: z
          .array(
            z
              .object({
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The name of the header.' }),
                value: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The value of the header.' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              "If you have additional information to send, you'll need to include the relevant headers.",
          }),
        signingKeyId: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information.',
          }),
        url: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('CloudflareWorkerRulePatch')

const AzureFunctionRulePatchSchema = z
  .strictObject({
    requestMode: z
      .enum(['single', 'batch'])
      .exactOptional()
      .openapi({
        description:
          'This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('http/azure-function')
      .exactOptional()
      .openapi({
        description:
          'The type of rule. In this case Microsoft Azure Function. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      }),
    source: RuleSourceSchema.exactOptional(),
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        azureAppId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The Microsoft Azure Application ID. You can find your Microsoft Azure Application ID as shown in this <a href="https://dev.applicationinsights.io/documentation/Authorization/API-key-and-App-ID">article</a>.',
            example: 'd1e9f419-c438-6032b32df979',
          }),
        azureFunctionName: z
          .string()
          .exactOptional()
          .openapi({ description: 'The name of your Microsoft Azure Function.' }),
        enveloped: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule.',
          }),
        format: z
          .literal('json')
          .exactOptional()
          .openapi({ description: 'JSON provides a text-based encoding.' }),
        headers: z
          .array(
            z
              .object({
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The name of the header.' }),
                value: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The value of the header.' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              "If you have additional information to send, you'll need to include the relevant headers.",
          }),
        signingKeyId: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information.',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('AzureFunctionRulePatch')

const GoogleCloudFunctionRulePatchSchema = z
  .strictObject({
    requestMode: z
      .enum(['single', 'batch'])
      .exactOptional()
      .openapi({
        description:
          'This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('http/google-cloud-function')
      .exactOptional()
      .openapi({
        description:
          'The type of rule. In this case Google Cloud Function. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      }),
    source: RuleSourceSchema.exactOptional(),
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        enveloped: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule.',
          }),
        format: z
          .literal('json')
          .exactOptional()
          .openapi({ description: 'JSON provides a text-based encoding.' }),
        functionName: z
          .string()
          .exactOptional()
          .openapi({ description: 'The name of your Google Cloud Function.' }),
        headers: z
          .array(
            z
              .object({
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The name of the header.' }),
                value: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The value of the header.' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              "If you have additional information to send, you'll need to include the relevant headers.",
          }),
        projectId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The project ID for your Google Cloud Project that was generated when you created your project.',
          }),
        region: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The region in which your Google Cloud Function is hosted. See the <a href="https://cloud.google.com/compute/docs/regions-zones/">Google documentation</a> for more details.',
            example: 'us-west1',
          }),
        signingKeyId: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information.',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudFunctionRulePatch')

const AwsAccessKeysSchema = z
  .strictObject({
    accessKeyId: z
      .string()
      .openapi({
        description:
          'The AWS key ID for the AWS IAM user. See this <a href="https://knowledge.ably.com/authentication-for-reactor-rules-for-aws-reactor-events-for-lambda-functions-reactor-firehose-for-aws-sqs-and-kinesis">Ably knowledge base article</a> for details.',
      }),
    authenticationMode: z
      .literal('credentials')
      .exactOptional()
      .openapi({
        description: 'Authentication method is using AWS credentials (AWS key ID and secret key).',
      }),
    secretAccessKey: z
      .string()
      .openapi({
        description:
          'The AWS secret key for the AWS IAM user. See this <a href="https://knowledge.ably.com/authentication-for-reactor-rules-for-aws-reactor-events-for-lambda-functions-reactor-firehose-for-aws-sqs-and-kinesis">Ably knowledge base article</a> for details.',
      }),
  })
  .openapi({ required: ['accessKeyId', 'secretAccessKey'] })
  .openapi('AwsAccessKeys')

const AwsAssumeRoleSchema = z
  .strictObject({
    assumeRoleArn: z
      .string()
      .openapi({
        description:
          'If you are using the "ARN of an assumable role" authentication method, this is your Assume Role ARN. See this <a href="https://knowledge.ably.com/authentication-for-reactor-rules-for-aws-reactor-events-for-lambda-functions-reactor-firehose-for-aws-sqs-and-kinesis">Ably knowledge base article</a> for details.',
      }),
    authenticationMode: z
      .literal('assumeRole')
      .exactOptional()
      .openapi({
        description:
          'Authentication method is using the ARN of an assumable role. See this <a href="https://knowledge.ably.com/authentication-for-reactor-rules-for-aws-reactor-events-for-lambda-functions-reactor-firehose-for-aws-sqs-and-kinesis">Ably knowledge base article</a> for details.',
      }),
  })
  .openapi({ required: ['assumeRoleArn'] })
  .openapi('AwsAssumeRole')

const AwsLambdaRulePatchSchema = z
  .strictObject({
    requestMode: z
      .literal('single')
      .openapi({
        description:
          'Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('aws/lambda')
      .openapi({
        description:
          'The type of rule. In this case AWS Lambda. See the <a href="https://ably.com/integrations">Ably documentation</a> for further information.',
      }),
    source: RuleSourceSchema,
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        authentication: z
          .xor([AwsAccessKeysSchema, AwsAssumeRoleSchema])
          .openapi({
            discriminator: {
              mapping: {
                assumeRole: '#/components/schemas/aws_assume_role',
                credentials: '#/components/schemas/aws_access_keys',
              },
              propertyName: 'authenticationMode',
            },
          }),
        enveloped: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule.',
          }),
        functionName: z.string().openapi({ description: 'The name of your AWS Lambda Function.' }),
        region: z
          .string()
          .openapi({
            description:
              'The region is which your AWS Lambda Function is hosted. See the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region">AWS documentation</a> for more detail.',
            example: 'us-west-1',
          }),
      })
      .openapi({ required: ['region', 'functionName', 'authentication'] }),
  })
  .openapi({ required: ['ruleType', 'requestMode', 'source', 'target'] })
  .openapi('AwsLambdaRulePatch')

const AwsKinesisRulePatchSchema = z
  .strictObject({
    requestMode: z
      .literal('single')
      .exactOptional()
      .openapi({
        description:
          'Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('aws/kinesis')
      .exactOptional()
      .openapi({
        description:
          'The type of rule. In this case AWS Kinesis. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      }),
    source: RuleSourceSchema.exactOptional(),
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        authentication: z
          .xor([AwsAccessKeysSchema, AwsAssumeRoleSchema])
          .exactOptional()
          .openapi({
            discriminator: {
              mapping: {
                assumeRole: '#/components/schemas/aws_assume_role',
                credentials: '#/components/schemas/aws_access_keys',
              },
              propertyName: 'authenticationMode',
            },
          }),
        enveloped: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule.',
          }),
        format: z
          .literal('json')
          .exactOptional()
          .openapi({ description: 'JSON provides a text-based encoding.' }),
        partitionKey: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The AWS Kinesis partition key. See this <a href="https://knowledge.ably.com/what-is-the-format-of-the-routingkey-for-an-amqp-or-kinesis-reactor-rule">Ably knowledge base article</a> for details.',
          }),
        region: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The region is which AWS Kinesis is hosted. See the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region">AWS documentation</a> for more detail.',
            example: 'us-west-1',
          }),
        streamName: z
          .string()
          .exactOptional()
          .openapi({ description: 'The name of your AWS Kinesis Stream.' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('AwsKinesisRulePatch')

const AwsSqsRulePatchSchema = z
  .strictObject({
    requestMode: z
      .literal('single')
      .exactOptional()
      .openapi({
        description:
          'Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('aws/sqs')
      .exactOptional()
      .openapi({
        description:
          'The type of rule. In this case AWS SQS. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      }),
    source: RuleSourceSchema.exactOptional(),
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        authentication: z
          .xor([AwsAccessKeysSchema, AwsAssumeRoleSchema])
          .exactOptional()
          .openapi({
            discriminator: {
              mapping: {
                assumeRole: '#/components/schemas/aws_assume_role',
                credentials: '#/components/schemas/aws_access_keys',
              },
              propertyName: 'authenticationMode',
            },
          }),
        awsAccountId: z.string().exactOptional().openapi({ description: 'Your AWS account ID.' }),
        enveloped: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule.',
          }),
        format: z.string().exactOptional(),
        queueName: z.string().exactOptional().openapi({ description: 'The AWS SQS queue name.' }),
        region: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The region is which AWS SQS is hosted. See the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region">AWS documentation</a> for more detail.',
            example: 'us-west-1',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('AwsSqsRulePatch')

const AmqpRulePatchSchema = z
  .strictObject({
    requestMode: z
      .literal('single')
      .exactOptional()
      .openapi({
        description:
          'Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('amqp')
      .exactOptional()
      .openapi({
        description:
          'The type of rule. In this case AMQP. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      }),
    source: RuleSourceSchema.exactOptional(),
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        enveloped: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule.',
          }),
        format: z.string().exactOptional(),
        headers: z
          .array(
            z
              .object({
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The name of the header.' }),
                value: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The value of the header.' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              "If you have additional information to send, you'll need to include the relevant headers.",
          }),
        queueId: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('AmqpRulePatch')

const AmqpExternalRulePatchSchema = z
  .strictObject({
    requestMode: z
      .literal('single')
      .exactOptional()
      .openapi({
        description:
          'Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('amqp/external')
      .exactOptional()
      .openapi({
        description:
          'The type of rule. In this case AMQP external (using Firehose). See the <a href="https://ably.com/documentation/general/firehose">Ably documentation</a> for further information.',
      }),
    source: RuleSourceSchema.exactOptional(),
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        enveloped: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule.',
          }),
        format: z.string().exactOptional(),
        headers: z
          .array(
            z
              .object({
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The name of the header.' }),
                value: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The value of the header.' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              "If you have additional information to send, you'll need to include the relevant headers.",
          }),
        mandatoryRoute: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Reject delivery of the message if the route does not exist, otherwise fail silently.',
          }),
        messageTtl: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'You can optionally override the default TTL on a queue and specify a TTL in minutes for messages to be persisted. It is unusual to change the default TTL, so if this field is left empty, the default TTL for the queue will be used.',
          }),
        persistentMessages: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Marks the message as persistent, instructing the broker to write it to disk if it is in a durable queue.',
          }),
        routingKey: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The AMQP routing key. See this <a href="https://knowledge.ably.com/what-is-the-format-of-the-routingkey-for-an-amqp-or-kinesis-reactor-rule">Ably knowledge base article</a> for details.',
          }),
        url: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('AmqpExternalRulePatch')

type RulePatchType =
  | z.infer<typeof HttpRulePatchSchema>
  | z.infer<typeof IftttRulePatchSchema>
  | z.infer<typeof ZapierRulePatchSchema>
  | z.infer<typeof CloudflareWorkerRulePatchSchema>
  | z.infer<typeof AzureFunctionRulePatchSchema>
  | z.infer<typeof GoogleCloudFunctionRulePatchSchema>
  | z.infer<typeof AwsLambdaRulePatchSchema>
  | z.infer<typeof AwsKinesisRulePatchSchema>
  | z.infer<typeof AwsSqsRulePatchSchema>
  | z.infer<typeof AmqpRulePatchSchema>
  | z.infer<typeof AmqpExternalRulePatchSchema>

const HttpRulePostSchema = z
  .strictObject({
    requestMode: z
      .enum(['single', 'batch'])
      .openapi({
        description:
          'This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('http')
      .openapi({
        description:
          'The type of rule. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      }),
    source: RuleSourceSchema,
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        enveloped: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule.',
          }),
        format: z
          .enum(['json', 'msgpack'])
          .openapi({
            description:
              'JSON provides a simpler text-based encoding, whereas MsgPack provides a more efficient binary encoding.',
          }),
        headers: z
          .array(
            z
              .object({
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The name of the header.' }),
                value: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The value of the header.' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              "If you have additional information to send, you'll need to include the relevant headers.",
          }),
        signingKeyId: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information.',
          }),
        url: z
          .string()
          .openapi({
            description: 'The URL of the endpoint that is invoked when events occur on Ably.',
          }),
      })
      .openapi({ required: ['url', 'format'] }),
  })
  .openapi({ required: ['ruleType', 'requestMode', 'source', 'target'] })
  .openapi('HttpRulePost')

const IftttRulePostSchema = z
  .strictObject({
    requestMode: z
      .literal('single')
      .openapi({
        description:
          'Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('http/ifttt')
      .openapi({
        description:
          'The type of rule. In this case IFTTT. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      }),
    source: RuleSourceSchema,
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({ eventName: z.string(), webhookKey: z.string() })
      .openapi({ required: ['webhookKey', 'eventName'] }),
  })
  .openapi({ required: ['ruleType', 'requestMode', 'source', 'target'] })
  .openapi('IftttRulePost')

const ZapierRulePostSchema = z
  .strictObject({
    requestMode: z
      .enum(['single', 'batch'])
      .openapi({
        description:
          'This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('http/zapier')
      .openapi({
        description:
          'The type of rule. In this case Zapier. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      }),
    source: RuleSourceSchema,
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        headers: z
          .array(
            z
              .object({
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The name of the header.' }),
                value: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The value of the header.' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              "If you have additional information to send, you'll need to include the relevant headers.",
          }),
        signingKeyId: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information.',
          }),
        url: z.string(),
      })
      .openapi({ required: ['url'] }),
  })
  .openapi({ required: ['ruleType', 'requestMode', 'source', 'target'] })
  .openapi('ZapierRulePost')

const CloudflareWorkerRulePostSchema = z
  .strictObject({
    requestMode: z
      .enum(['single', 'batch'])
      .openapi({
        description:
          'This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('http/cloudflare-worker')
      .openapi({
        description:
          'The type of rule. In this case Cloudflare Worker. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      }),
    source: RuleSourceSchema,
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        headers: z
          .array(
            z
              .object({
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The name of the header.' }),
                value: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The value of the header.' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              "If you have additional information to send, you'll need to include the relevant headers.",
          }),
        signingKeyId: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information.',
          }),
        url: z.string(),
      })
      .openapi({ required: ['url'] }),
  })
  .openapi({ required: ['ruleType', 'requestMode', 'source', 'target'] })
  .openapi('CloudflareWorkerRulePost')

const AzureFunctionRulePostSchema = z
  .strictObject({
    requestMode: z
      .enum(['single', 'batch'])
      .openapi({
        description:
          'This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('http/azure-function')
      .openapi({
        description:
          'The type of rule. In this case Microsoft Azure Function. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      }),
    source: RuleSourceSchema,
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        azureAppId: z
          .string()
          .openapi({
            description:
              'The Microsoft Azure Application ID. You can find your Microsoft Azure Application ID as shown in this <a href="https://dev.applicationinsights.io/documentation/Authorization/API-key-and-App-ID">article</a>.',
            example: 'd1e9f419-c438-6032b32df979',
          }),
        azureFunctionName: z
          .string()
          .openapi({ description: 'The name of your Microsoft Azure Function.' }),
        enveloped: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule.',
          }),
        format: z
          .literal('json')
          .exactOptional()
          .openapi({ description: 'JSON provides a text-based encoding.' }),
        headers: z
          .array(
            z
              .object({
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The name of the header.' }),
                value: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The value of the header.' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              "If you have additional information to send, you'll need to include the relevant headers.",
          }),
        signingKeyId: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information.',
          }),
      })
      .openapi({ required: ['azureAppId', 'azureFunctionName'] }),
  })
  .openapi({ required: ['ruleType', 'requestMode', 'source', 'target'] })
  .openapi('AzureFunctionRulePost')

const GoogleCloudFunctionRulePostSchema = z
  .strictObject({
    requestMode: z
      .enum(['single', 'batch'])
      .openapi({
        description:
          'This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('http/google-cloud-function')
      .openapi({
        description:
          'The type of rule. In this case Google Cloud Function. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      }),
    source: RuleSourceSchema,
    target: z
      .strictObject({
        enveloped: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule.',
          }),
        format: z
          .literal('json')
          .exactOptional()
          .openapi({ description: 'JSON provides a text-based encoding.' }),
        functionName: z
          .string()
          .openapi({ description: 'The name of your Google Cloud Function.' }),
        headers: z
          .array(
            z
              .object({
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The name of the header.' }),
                value: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The value of the header.' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              "If you have additional information to send, you'll need to include the relevant headers.",
          }),
        projectId: z
          .string()
          .openapi({
            description:
              'The project ID for your Google Cloud Project that was generated when you created your project.',
          }),
        region: z
          .string()
          .openapi({
            description:
              'The region in which your Google Cloud Function is hosted. See the <a href="https://cloud.google.com/compute/docs/regions-zones/">Google documentation</a> for more details.',
            example: 'us-west1',
          }),
        signingKeyId: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information.',
          }),
      })
      .openapi({ required: ['region', 'projectId', 'functionName'] }),
  })
  .openapi({ required: ['ruleType', 'requestMode', 'source', 'target'] })
  .openapi('GoogleCloudFunctionRulePost')

const AwsLambdaRulePostSchema = z
  .strictObject({
    requestMode: z
      .literal('single')
      .openapi({
        description:
          'Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('aws/lambda')
      .openapi({
        description:
          'The type of rule. In this case AWS Lambda. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      }),
    source: RuleSourceSchema,
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        authentication: z
          .xor([AwsAccessKeysSchema, AwsAssumeRoleSchema])
          .openapi({
            discriminator: {
              mapping: {
                assumeRole: '#/components/schemas/aws_assume_role',
                credentials: '#/components/schemas/aws_access_keys',
              },
              propertyName: 'authenticationMode',
            },
          }),
        enveloped: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule.',
          }),
        functionName: z.string().openapi({ description: 'The name of your AWS Lambda Function.' }),
        region: z
          .string()
          .openapi({
            description:
              'The region is which your AWS Lambda Function is hosted. See the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region">AWS documentation</a> for more detail.',
            example: 'us-west-1',
          }),
      })
      .openapi({ required: ['region', 'functionName', 'authentication'] }),
  })
  .openapi({ required: ['ruleType', 'requestMode', 'source', 'target'] })
  .openapi('AwsLambdaRulePost')

const AwsKinesisRulePostSchema = z
  .strictObject({
    requestMode: z
      .literal('single')
      .openapi({
        description:
          'Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('aws/kinesis')
      .openapi({
        description:
          'The type of rule. In this case AWS Kinesis. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      }),
    source: RuleSourceSchema,
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        authentication: z
          .xor([AwsAccessKeysSchema, AwsAssumeRoleSchema])
          .openapi({
            discriminator: {
              mapping: {
                assumeRole: '#/components/schemas/aws_assume_role',
                credentials: '#/components/schemas/aws_access_keys',
              },
              propertyName: 'authenticationMode',
            },
          }),
        enveloped: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule.',
          }),
        format: z.literal('json').openapi({ description: 'JSON provides a text-based encoding.' }),
        partitionKey: z
          .string()
          .openapi({
            description:
              'The AWS Kinesis partition key. See this <a href="https://knowledge.ably.com/what-is-the-format-of-the-routingkey-for-an-amqp-or-kinesis-reactor-rule">Ably knowledge base article</a> for details.',
          }),
        region: z
          .string()
          .openapi({
            description:
              'The region is which AWS Kinesis is hosted. See the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region">AWS documentation</a> for more detail.',
            example: 'us-west-1',
          }),
        streamName: z.string().openapi({ description: 'The name of your AWS Kinesis Stream.' }),
      })
      .openapi({ required: ['region', 'streamName', 'partitionKey', 'authentication', 'format'] }),
  })
  .openapi({ required: ['ruleType', 'requestMode', 'source', 'target'] })
  .openapi('AwsKinesisRulePost')

const AwsSqsRulePostSchema = z
  .strictObject({
    requestMode: z
      .literal('single')
      .openapi({
        description:
          'Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('aws/sqs')
      .openapi({
        description:
          'The type of rule. In this case AWS SQS. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      }),
    source: RuleSourceSchema,
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        authentication: z
          .xor([AwsAccessKeysSchema, AwsAssumeRoleSchema])
          .openapi({
            discriminator: {
              mapping: {
                assumeRole: '#/components/schemas/aws_assume_role',
                credentials: '#/components/schemas/aws_access_keys',
              },
              propertyName: 'authenticationMode',
            },
          }),
        awsAccountId: z.string().openapi({ description: 'Your AWS account ID.' }),
        enveloped: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule.',
          }),
        format: z.string().exactOptional(),
        queueName: z.string().openapi({ description: 'The AWS SQS queue name.' }),
        region: z
          .string()
          .openapi({
            description:
              'The region is which AWS SQS is hosted. See the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region">AWS documentation</a> for more detail.',
            example: 'us-west-1',
          }),
      })
      .openapi({ required: ['region', 'awsAccountId', 'queueName', 'authentication'] }),
  })
  .openapi({ required: ['ruleType', 'requestMode', 'source', 'target'] })
  .openapi('AwsSqsRulePost')

const AmqpRulePostSchema = z
  .strictObject({
    requestMode: z
      .literal('single')
      .openapi({
        description:
          'Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('amqp')
      .openapi({
        description:
          'The type of rule. In this case AMQP. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      }),
    source: RuleSourceSchema,
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        enveloped: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule.',
          }),
        format: z.string().exactOptional(),
        headers: z
          .array(
            z
              .object({
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The name of the header.' }),
                value: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The value of the header.' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              "If you have additional information to send, you'll need to include the relevant headers.",
          }),
        queueId: z.string(),
      })
      .openapi({ required: ['queueId'] }),
  })
  .openapi({ required: ['ruleType', 'requestMode', 'source', 'target'] })
  .openapi('AmqpRulePost')

const AmqpExternalRulePostSchema = z
  .strictObject({
    requestMode: z
      .literal('single')
      .openapi({
        description:
          'Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('amqp/external')
      .openapi({
        description:
          'The type of rule. In this case AMQP external (using Firehose). See the <a href="https://ably.com/documentation/general/firehose">documentation</a> for further information.',
      }),
    source: RuleSourceSchema,
    target: z
      .strictObject({
        enveloped: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule.',
          }),
        format: z.string().exactOptional(),
        headers: z
          .array(
            z
              .object({
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The name of the header.' }),
                value: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The value of the header.' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              "If you have additional information to send, you'll need to include the relevant headers.",
          }),
        mandatoryRoute: z
          .boolean()
          .openapi({
            description:
              'Reject delivery of the message if the route does not exist, otherwise fail silently.',
          }),
        messageTtl: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'You can optionally override the default TTL on a queue and specify a TTL in minutes for messages to be persisted. It is unusual to change the default TTL, so if this field is left empty, the default TTL for the queue will be used.',
          }),
        persistentMessages: z
          .boolean()
          .openapi({
            description:
              'Marks the message as persistent, instructing the broker to write it to disk if it is in a durable queue.',
          }),
        routingKey: z
          .string()
          .openapi({
            description:
              'The AMQP routing key. See this <a href="https://knowledge.ably.com/what-is-the-format-of-the-routingkey-for-an-amqp-or-kinesis-reactor-rule">Ably knowledge base article</a> for details.',
          }),
        url: z.string(),
      })
      .openapi({ required: ['url', 'routingKey', 'mandatoryRoute', 'persistentMessages'] }),
  })
  .openapi({ required: ['ruleType', 'requestMode', 'source', 'target'] })
  .openapi('AmqpExternalRulePost')

const UnsupportedRuleResponseSchema = z
  .strictObject({
    _links: z.object({}).nullable().exactOptional(),
    appId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Ably application ID.', example: '28GY6a' }),
    created: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Unix timestamp representing the date and time of creation of the rule.',
        example: 1602844091815,
      }),
    id: z.string().exactOptional().openapi({ description: 'The rule ID.', example: '83IzAB' }),
    modified: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Unix timestamp representing the date and time of last modification of the rule.',
        example: 1614679682091,
      }),
    requestMode: z
      .enum(['single', 'batch'])
      .openapi({
        description:
          'This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('unsupported')
      .openapi({ description: 'This rule type is currently unsupported.' }),
    source: RuleSourceSchema,
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z.strictObject({ url: z.string() }).openapi({ required: ['url'] }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>.',
      }),
  })
  .openapi({ required: ['ruleType', 'requestMode', 'source', 'target'] })
  .openapi('UnsupportedRuleResponse')

type RulePostType =
  | z.infer<typeof HttpRulePostSchema>
  | z.infer<typeof IftttRulePostSchema>
  | z.infer<typeof ZapierRulePostSchema>
  | z.infer<typeof CloudflareWorkerRulePostSchema>
  | z.infer<typeof AzureFunctionRulePostSchema>
  | z.infer<typeof GoogleCloudFunctionRulePostSchema>
  | z.infer<typeof AwsLambdaRulePostSchema>
  | z.infer<typeof AwsKinesisRulePostSchema>
  | z.infer<typeof AwsSqsRulePostSchema>
  | z.infer<typeof AmqpRulePostSchema>
  | z.infer<typeof AmqpExternalRulePostSchema>
  | z.infer<typeof UnsupportedRuleResponseSchema>

const HttpRuleResponseSchema = z
  .strictObject({
    _links: z.object({}).nullable().exactOptional(),
    appId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Ably application ID.', example: '28GY6a' }),
    created: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Unix timestamp representing the date and time of creation of the rule.',
        example: 1602844091815,
      }),
    id: z.string().exactOptional().openapi({ description: 'The rule ID.', example: '83IzAB' }),
    modified: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Unix timestamp representing the date and time of last modification of the rule.',
        example: 1614679682091,
      }),
    requestMode: z
      .enum(['single', 'batch'])
      .openapi({
        description:
          'This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('http')
      .openapi({
        description:
          'The type of rule. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      }),
    source: RuleSourceSchema,
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        enveloped: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule.',
          }),
        format: z
          .enum(['json', 'msgpack'])
          .openapi({
            description:
              'JSON provides a simpler text-based encoding, whereas MsgPack provides a more efficient binary encoding.',
          }),
        headers: z
          .array(
            z
              .object({
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The name of the header.' }),
                value: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The value of the header.' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              "If you have additional information to send, you'll need to include the relevant headers.",
          }),
        signingKeyId: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information.',
          }),
        url: z.string(),
      })
      .openapi({ required: ['url', 'format'] }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>.',
      }),
  })
  .openapi({ required: ['ruleType', 'requestMode', 'source', 'target'] })
  .openapi('HttpRuleResponse')

const IftttRuleResponseSchema = z
  .strictObject({
    _links: z.object({}).nullable().exactOptional(),
    appId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Ably application ID.', example: '28GY6a' }),
    created: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Unix timestamp representing the date and time of creation of the rule.',
        example: 1602844091815,
      }),
    id: z.string().exactOptional().openapi({ description: 'The rule ID.', example: '83IzAB' }),
    modified: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Unix timestamp representing the date and time of last modification of the rule.',
        example: 1614679682091,
      }),
    requestMode: z
      .literal('single')
      .openapi({
        description:
          'Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('http/ifttt')
      .openapi({
        description:
          'The type of rule. In this case IFTTT. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      }),
    source: RuleSourceSchema,
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({ eventName: z.string(), webhookKey: z.string() })
      .openapi({ required: ['webhookKey', 'eventName'] }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>.',
      }),
  })
  .openapi({ required: ['ruleType', 'requestMode', 'source', 'target'] })
  .openapi('IftttRuleResponse')

const ZapierRuleResponseSchema = z
  .strictObject({
    _links: z.object({}).nullable().exactOptional(),
    appId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Ably application ID.', example: '28GY6a' }),
    created: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Unix timestamp representing the date and time of creation of the rule.',
        example: 1602844091815,
      }),
    id: z.string().exactOptional().openapi({ description: 'The rule ID.', example: '83IzAB' }),
    modified: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Unix timestamp representing the date and time of last modification of the rule.',
        example: 1614679682091,
      }),
    requestMode: z
      .enum(['single', 'batch'])
      .openapi({
        description:
          'This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('http/zapier')
      .openapi({
        description:
          'The type of rule. In this case Zapier. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      }),
    source: RuleSourceSchema,
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        headers: z
          .array(
            z
              .object({
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The name of the header.' }),
                value: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The value of the header.' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              "If you have additional information to send, you'll need to include the relevant headers.",
          }),
        signingKeyId: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information.',
          }),
        url: z.string(),
      })
      .openapi({ required: ['url'] }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>.',
      }),
  })
  .openapi({ required: ['ruleType', 'requestMode', 'source', 'target'] })
  .openapi('ZapierRuleResponse')

const CloudflareWorkerRuleResponseSchema = z
  .strictObject({
    _links: z.object({}).nullable().exactOptional(),
    appId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Ably application ID.', example: '28GY6a' }),
    created: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Unix timestamp representing the date and time of creation of the rule.',
        example: 1602844091815,
      }),
    id: z.string().exactOptional().openapi({ description: 'The rule ID.', example: '83IzAB' }),
    modified: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Unix timestamp representing the date and time of last modification of the rule.',
        example: 1614679682091,
      }),
    requestMode: z
      .enum(['single', 'batch'])
      .openapi({
        description:
          'This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('http/cloudflare-worker')
      .openapi({
        description:
          'The type of rule. In this case Cloudflare Worker. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
        example: 'http/cloudflare-worker',
      }),
    source: RuleSourceSchema,
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        headers: z
          .array(
            z
              .object({
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The name of the header.' }),
                value: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The value of the header.' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              "If you have additional information to send, you'll need to include the relevant headers.",
          }),
        signingKeyId: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information.',
          }),
        url: z.string(),
      })
      .openapi({ required: ['url'] }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>.',
      }),
  })
  .openapi({ required: ['ruleType', 'requestMode', 'source', 'target'] })
  .openapi('CloudflareWorkerRuleResponse')

const AzureFunctionRuleResponseSchema = z
  .strictObject({
    _links: z.object({}).nullable().exactOptional(),
    appId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Ably application ID.', example: '28GY6a' }),
    created: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Unix timestamp representing the date and time of creation of the rule.',
        example: 1602844091815,
      }),
    id: z.string().exactOptional().openapi({ description: 'The rule ID.', example: '83IzAB' }),
    modified: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Unix timestamp representing the date and time of last modification of the rule.',
        example: 1614679682091,
      }),
    requestMode: z
      .enum(['single', 'batch'])
      .openapi({
        description:
          'This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('http/azure-function')
      .openapi({
        description:
          'The type of rule. In this case Microsoft Azure Function. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      }),
    source: RuleSourceSchema,
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        azureAppId: z
          .string()
          .openapi({
            description:
              'The Microsoft Azure Application ID. You can find your Microsoft Azure Application ID as shown in this <a href="https://dev.applicationinsights.io/documentation/Authorization/API-key-and-App-ID">article</a>.',
            example: 'd1e9f419-c438-6032b32df979',
          }),
        azureFunctionName: z
          .string()
          .openapi({ description: 'The name of your Microsoft Azure Function.' }),
        enveloped: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule.',
          }),
        format: z
          .literal('json')
          .exactOptional()
          .openapi({ description: 'JSON provides a text-based encoding.' }),
        headers: z
          .array(
            z
              .object({
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The name of the header.' }),
                value: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The value of the header.' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              "If you have additional information to send, you'll need to include the relevant headers.",
          }),
        signingKeyId: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information.',
          }),
      })
      .openapi({ required: ['azureAppId', 'azureFunctionName'] }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>.',
      }),
  })
  .openapi({ required: ['ruleType', 'requestMode', 'source', 'target'] })
  .openapi('AzureFunctionRuleResponse')

const GoogleCloudFunctionRuleResponseSchema = z
  .strictObject({
    _links: z.object({}).nullable().exactOptional(),
    appId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Ably application ID.', example: '28GY6a' }),
    created: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Unix timestamp representing the date and time of creation of the rule.',
        example: 1602844091815,
      }),
    id: z.string().exactOptional().openapi({ description: 'The rule ID.', example: '83IzAB' }),
    modified: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Unix timestamp representing the date and time of last modification of the rule.',
        example: 1614679682091,
      }),
    requestMode: z
      .enum(['single', 'batch'])
      .openapi({
        description:
          'This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('http/google-cloud-function')
      .openapi({
        description:
          'The type of rule. In this case Google Cloud Function. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      }),
    source: RuleSourceSchema,
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        enveloped: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule.',
          }),
        format: z
          .literal('json')
          .exactOptional()
          .openapi({ description: 'JSON provides a text-based encoding.' }),
        functionName: z
          .string()
          .openapi({ description: 'The name of your Google Cloud Function.' }),
        headers: z
          .array(
            z
              .object({
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The name of the header.' }),
                value: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The value of the header.' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              "If you have additional information to send, you'll need to include the relevant headers.",
          }),
        projectId: z
          .string()
          .openapi({
            description:
              'The project ID for your Google Cloud Project that was generated when you created your project.',
          }),
        region: z
          .string()
          .openapi({
            description:
              'The region in which your Google Cloud Function is hosted. See the <a href="https://cloud.google.com/compute/docs/regions-zones/">Google documentation</a> for more details.',
            example: 'us-west1',
          }),
        signingKeyId: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information.',
          }),
      })
      .openapi({ required: ['region', 'projectId', 'functionName'] }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>.',
      }),
  })
  .openapi({ required: ['ruleType', 'requestMode', 'source', 'target'] })
  .openapi('GoogleCloudFunctionRuleResponse')

const AwsAccessKeysResponseSchema = z
  .strictObject({
    accessKeyId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The AWS key ID for the AWS IAM user. See this <a href="https://knowledge.ably.com/authentication-for-reactor-rules-for-aws-reactor-events-for-lambda-functions-reactor-firehose-for-aws-sqs-and-kinesis">Ably knowledge base article</a> for details.',
      }),
    authenticationMode: z
      .literal('credentials')
      .exactOptional()
      .openapi({
        description: 'Authentication method is using AWS credentials (AWS key ID and secret key).',
      }),
  })
  .openapi({ required: [] })
  .openapi('AwsAccessKeysResponse')

const AwsLambdaRuleResponseSchema = z
  .strictObject({
    _links: z.object({}).nullable().exactOptional(),
    appId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Ably application ID.', example: '28GY6a' }),
    created: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Unix timestamp representing the date and time of creation of the rule.',
        example: 1602844091815,
      }),
    id: z.string().exactOptional().openapi({ description: 'The rule ID.', example: '83IzAB' }),
    modified: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Unix timestamp representing the date and time of last modification of the rule.',
        example: 1614679682091,
      }),
    requestMode: z
      .literal('single')
      .openapi({
        description:
          'Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('aws/lambda')
      .openapi({
        description:
          'The type of rule. In this case AWS Lambda. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      }),
    source: RuleSourceSchema,
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        authentication: z
          .xor([AwsAccessKeysResponseSchema, AwsAssumeRoleSchema])
          .openapi({
            discriminator: {
              mapping: {
                assumeRole: '#/components/schemas/aws_assume_role',
                credentials: '#/components/schemas/aws_access_keys_response',
              },
              propertyName: 'authenticationMode',
            },
          }),
        enveloped: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule.',
          }),
        format: z.string().exactOptional(),
        functionName: z.string().openapi({ description: 'The name of your AWS Lambda Function.' }),
        region: z
          .string()
          .openapi({
            description:
              'The region is which your AWS Lambda Function is hosted. See the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region">AWS documentation</a> for more detail.',
            example: 'us-west-1',
          }),
      })
      .openapi({ required: ['region', 'functionName', 'authentication'] }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>.',
      }),
  })
  .openapi({ required: ['ruleType', 'requestMode', 'source', 'target'] })
  .openapi('AwsLambdaRuleResponse')

const AwsKinesisRuleResponseSchema = z
  .strictObject({
    _links: z.object({}).nullable().exactOptional(),
    appId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Ably application ID.', example: '28GY6a' }),
    created: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Unix timestamp representing the date and time of creation of the rule.',
        example: 1602844091815,
      }),
    id: z.string().exactOptional().openapi({ description: 'The rule ID.', example: '83IzAB' }),
    modified: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Unix timestamp representing the date and time of last modification of the rule.',
        example: 1614679682091,
      }),
    requestMode: z
      .literal('single')
      .openapi({
        description:
          'Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('aws/kinesis')
      .openapi({
        description:
          'The type of rule. In this case AWS Kinesis. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      }),
    source: RuleSourceSchema,
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        authentication: z
          .xor([AwsAccessKeysResponseSchema, AwsAssumeRoleSchema])
          .openapi({
            discriminator: {
              mapping: {
                assumeRole: '#/components/schemas/aws_assume_role',
                credentials: '#/components/schemas/aws_access_keys_response',
              },
              propertyName: 'authenticationMode',
            },
          }),
        enveloped: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule.',
          }),
        format: z.literal('json').openapi({ description: 'JSON provides a text-based encoding.' }),
        partitionKey: z
          .string()
          .openapi({
            description:
              'The AWS Kinesis partition key. See this <a href="https://knowledge.ably.com/what-is-the-format-of-the-routingkey-for-an-amqp-or-kinesis-reactor-rule">Ably knowledge base article</a> for details.',
          }),
        region: z
          .string()
          .openapi({
            description:
              'The region is which AWS Kinesis is hosted. See the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region">AWS documentation</a> for more detail.',
            example: 'us-west-1',
          }),
        streamName: z.string().openapi({ description: 'The name of your AWS Kinesis Stream.' }),
      })
      .openapi({ required: ['region', 'streamName', 'partitionKey', 'authentication', 'format'] }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>.',
      }),
  })
  .openapi({ required: ['ruleType', 'requestMode', 'source', 'target'] })
  .openapi('AwsKinesisRuleResponse')

const AwsSqsRuleResponseSchema = z
  .strictObject({
    _links: z.object({}).nullable().exactOptional(),
    appId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Ably application ID.', example: '28GY6a' }),
    created: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Unix timestamp representing the date and time of creation of the rule.',
        example: 1602844091815,
      }),
    id: z.string().exactOptional().openapi({ description: 'The rule ID.', example: '83IzAB' }),
    modified: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Unix timestamp representing the date and time of last modification of the rule.',
        example: 1614679682091,
      }),
    requestMode: z
      .literal('single')
      .openapi({
        description:
          'Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('aws/sqs')
      .openapi({
        description:
          'The type of rule. In this case AWS SQS. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      }),
    source: RuleSourceSchema,
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        authentication: z
          .xor([AwsAccessKeysResponseSchema, AwsAssumeRoleSchema])
          .openapi({
            discriminator: {
              mapping: {
                assumeRole: '#/components/schemas/aws_assume_role',
                credentials: '#/components/schemas/aws_access_keys_response',
              },
              propertyName: 'authenticationMode',
            },
          }),
        awsAccountId: z.string().openapi({ description: 'Your AWS account ID.' }),
        enveloped: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule.',
          }),
        format: z.string().exactOptional(),
        queueName: z.string().openapi({ description: 'The AWS SQS queue name.' }),
        region: z
          .string()
          .openapi({
            description:
              'The region is which AWS SQS is hosted. See the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region">AWS documentation</a> for more detail.',
            example: 'us-west-1',
          }),
      })
      .openapi({ required: ['region', 'awsAccountId', 'queueName', 'authentication'] }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>.',
      }),
  })
  .openapi({ required: ['ruleType', 'requestMode', 'source', 'target'] })
  .openapi('AwsSqsRuleResponse')

const AmqpRuleResponseSchema = z
  .strictObject({
    _links: z.object({}).nullable().exactOptional(),
    appId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Ably application ID.', example: '28GY6a' }),
    created: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Unix timestamp representing the date and time of creation of the rule.',
        example: 1602844091815,
      }),
    id: z.string().exactOptional().openapi({ description: 'The rule ID.', example: '83IzAB' }),
    modified: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Unix timestamp representing the date and time of last modification of the rule.',
        example: 1614679682091,
      }),
    requestMode: z
      .literal('single')
      .openapi({
        description:
          'Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('amqp')
      .openapi({
        description:
          'The type of rule. In this case AMQP. See the <a href="https://ably.com/integrations">documentation</a> for further information.',
      }),
    source: RuleSourceSchema,
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        enveloped: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule.',
          }),
        format: z.string().exactOptional(),
        headers: z
          .array(
            z
              .object({
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The name of the header.' }),
                value: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The value of the header.' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              "If you have additional information to send, you'll need to include the relevant headers.",
          }),
        queueId: z.string(),
      })
      .openapi({ required: ['queueId'] }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>.',
      }),
  })
  .openapi({ required: ['ruleType', 'requestMode', 'source', 'target'] })
  .openapi('AmqpRuleResponse')

const AmqpExternalRuleResponseSchema = z
  .strictObject({
    _links: z.object({}).nullable().exactOptional(),
    appId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Ably application ID.', example: '28GY6a' }),
    created: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Unix timestamp representing the date and time of creation of the rule.',
        example: 1602844091815,
      }),
    id: z.string().exactOptional().openapi({ description: 'The rule ID.', example: '83IzAB' }),
    modified: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Unix timestamp representing the date and time of last modification of the rule.',
        example: 1614679682091,
      }),
    requestMode: z
      .literal('single')
      .openapi({
        description:
          'Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.',
        example: 'single',
      }),
    ruleType: z
      .literal('amqp/external')
      .openapi({
        description:
          'The type of rule. In this case AMQP external (using Firehose). See the <a href="https://ably.com/documentation/general/firehose">Ably documentation</a> for further information.',
      }),
    source: RuleSourceSchema,
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    target: z
      .strictObject({
        enveloped: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule.',
          }),
        format: z.string().exactOptional(),
        headers: z
          .array(
            z
              .object({
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The name of the header.' }),
                value: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The value of the header.' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              "If you have additional information to send, you'll need to include the relevant headers.",
          }),
        mandatoryRoute: z
          .boolean()
          .openapi({
            description:
              'Reject delivery of the message if the route does not exist, otherwise fail silently.',
          }),
        messageTtl: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'You can optionally override the default TTL on a queue and specify a TTL in minutes for messages to be persisted. It is unusual to change the default TTL, so if this field is left empty, the default TTL for the queue will be used.',
          }),
        persistentMessages: z
          .boolean()
          .openapi({
            description:
              'Marks the message as persistent, instructing the broker to write it to disk if it is in a durable queue.',
          }),
        routingKey: z
          .string()
          .openapi({
            description:
              'The AMQP routing key. See this <a href="https://knowledge.ably.com/what-is-the-format-of-the-routingkey-for-an-amqp-or-kinesis-reactor-rule">Ably knowledge base article</a> for details.',
          }),
        url: z.string(),
      })
      .openapi({ required: ['url', 'routingKey', 'mandatoryRoute', 'persistentMessages'] }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>.',
      }),
  })
  .openapi({ required: ['ruleType', 'requestMode', 'source', 'target'] })
  .openapi('AmqpExternalRuleResponse')

type RuleResponseType =
  | z.infer<typeof HttpRuleResponseSchema>
  | z.infer<typeof IftttRuleResponseSchema>
  | z.infer<typeof ZapierRuleResponseSchema>
  | z.infer<typeof CloudflareWorkerRuleResponseSchema>
  | z.infer<typeof AzureFunctionRuleResponseSchema>
  | z.infer<typeof GoogleCloudFunctionRuleResponseSchema>
  | z.infer<typeof AwsLambdaRuleResponseSchema>
  | z.infer<typeof AwsKinesisRuleResponseSchema>
  | z.infer<typeof AwsSqsRuleResponseSchema>
  | z.infer<typeof AmqpRuleResponseSchema>
  | z.infer<typeof AmqpExternalRuleResponseSchema>

const AppPatchSchema = z
  .strictObject({
    apnsCertificate: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The Apple Push Notification service certificate.' }),
    apnsPrivateKey: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The Apple Push Notification service private key.' }),
    apnsUseSandboxEndpoint: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The Apple Push Notification service sandbox endpoint.' }),
    fcmKey: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The Firebase Cloud Messaging key.', example: false }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the application for your reference only.',
        example: 'My App',
      }),
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description:
          'The status of the application. Can be `enabled` or `disabled`. Enabled means available to accept inbound connections and all services are available.',
        example: 'enabled',
      }),
    tlsOnly: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Enforce TLS for all connections.', example: true }),
  })
  .openapi({ required: [] })
  .openapi('AppPatch')

const AppPkcs12Schema = z
  .strictObject({
    p12File: z
      .file()
      .openapi({
        type: 'string',
        format: 'binary',
        description: "The `.p12` file containing the app's APNs information.",
      }),
    p12Pass: z.string().openapi({ description: 'The password for the corresponding `.p12` file.' }),
  })
  .openapi({ required: ['p12File', 'p12Pass'] })
  .openapi('AppPkcs12')

const AppPostSchema = z
  .strictObject({
    apnsCertificate: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The Apple Push Notification service certificate.' }),
    apnsPrivateKey: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The Apple Push Notification service private key.' }),
    apnsUseSandboxEndpoint: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The Apple Push Notification service sandbox endpoint.' }),
    fcmKey: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The Firebase Cloud Messaging key.', example: false }),
    name: z
      .string()
      .openapi({
        description: 'The name of the application for your reference only.',
        example: 'My App',
      }),
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description:
          'The status of the application. Can be `enabled` or `disabled`. Enabled means available to accept inbound connections and all services are available.',
        example: 'enabled',
      }),
    tlsOnly: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Enforce TLS for all connections.', example: true }),
  })
  .openapi({ required: ['name'] })
  .openapi('AppPost')

const AppResponseSchema = z
  .strictObject({
    _links: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'A link self-referencing the app that has been created.' }),
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of your Ably account.', example: 'WgRpOB' }),
    apnsUseSandboxEndpoint: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Apple Push Notification service endpoint.', example: false }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The application ID.', example: '28AB6x' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The application name.', example: 'Default' }),
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description:
          'The application status. Disabled applications will not accept new connections and will return an error to all clients.',
        example: 'enabled',
      }),
    tlsOnly: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Enforce TLS for all connections. This setting overrides any channel setting.',
        example: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('AppResponse')

const ErrorSchema = z
  .strictObject({
    code: z.int().openapi({ description: 'The HTTP status code returned.' }),
    details: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'Any additional details about the error message.' }),
    href: z.string().openapi({ description: 'The URL to documentation about the error code.' }),
    message: z.string().openapi({ description: 'The error message.' }),
    statusCode: z.int().openapi({ description: 'The Ably error code.' }),
  })
  .openapi({ required: ['message', 'code', 'statusCode', 'href'] })
  .openapi('Error')

const KeyPatchSchema = z
  .strictObject({
    capabilities: z
      .array(
        z.enum([
          'publish',
          'subscribe',
          'history',
          'presence',
          'channel-metadata',
          'push-admin',
          'push-subscribe',
          'statistics',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'The capabilities that this key has. More information on capabilities can be found in the <a href="https://ably.com/documentation/core-features/authentication#capabilities-explained">Ably documentation</a>.',
      }),
    channels: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specify the channels and queues that this key can be used with.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name for your API key. This is a friendly name for your reference.',
      }),
  })
  .openapi({ required: [] })
  .openapi('KeyPatch')

const KeyPostSchema = z
  .strictObject({
    capabilities: z
      .array(
        z.enum([
          'publish',
          'subscribe',
          'history',
          'presence',
          'channel-metadata',
          'push-admin',
          'push-subscribe',
          'statistics',
        ]),
      )
      .openapi({
        description:
          'The capabilities that this key has. More information on capabilities can be found in the <a href="https://ably.com/documentation/core-features/authentication#capabilities-explained">Ably documentation</a>.',
      }),
    channels: z
      .string()
      .openapi({ description: 'Specify the channels and queues that this key can be used with.' }),
    name: z
      .string()
      .openapi({
        description: 'The name for your API key. This is a friendly name for your reference.',
      }),
  })
  .openapi({ required: ['name', 'channels', 'capabilities'] })
  .openapi('KeyPost')

const KeyResponseSchema = z
  .strictObject({
    appId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Ably application ID which this key is associated with.',
        example: '28GY6a',
      }),
    capability: z
      .record(
        z.string(),
        z.array(
          z.enum([
            'publish',
            'subscribe',
            'history',
            'presence',
            'channel-metadata',
            'push-admin',
            'push-subscribe',
            'statistics',
          ]),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'The capabilities that this key has. More information on capabilities can be found in the <a href="https://ably.com/documentation/core-features/authentication#capabilities-explained">Ably documentation</a>.',
      }),
    created: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Unix timestamp representing the date and time of creation of the key.',
        example: 1602844091815,
      }),
    id: z.string().exactOptional().openapi({ description: 'The key ID.' }),
    key: z
      .string()
      .exactOptional()
      .openapi({ description: 'The complete API key including API secret.' }),
    modified: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Unix timestamp representing the date and time of the last modification of the key.',
        example: 1614679682091,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the application this key is associated with.' }),
  })
  .openapi({ required: [] })
  .openapi('KeyResponse')

const MeSchema = z
  .strictObject({
    account: z
      .strictObject({
        id: z.string().openapi({ description: 'The account ID.', example: 'VpWaOA' }),
        name: z
          .string()
          .openapi({ description: 'The name of the account.', example: 'Free account' }),
      })
      .exactOptional()
      .openapi({ required: ['id', 'name'] }),
    token: z
      .strictObject({
        capabilities: z
          .array(z.string())
          .openapi({
            description:
              'An array containing the access capabilities associated with the access token.',
            example: [
              'write:namespace',
              'read:namespace',
              'write:queue',
              'read:queue',
              'write:rule',
              'read:rule',
              'write:key',
              'read:key',
              'write:app',
              'read:app',
            ],
          }),
        id: z
          .int()
          .openapi({
            description: 'The token ID. This is a UUID.',
            example: 'C95837C9-184B-4CC2-8779-B769F960FADB',
          }),
        name: z
          .string()
          .openapi({ description: 'The friendly name for the token.', example: 'My Token' }),
      })
      .exactOptional()
      .openapi({ required: ['id', 'name', 'capabilities'] }),
    user: z
      .strictObject({
        email: z
          .string()
          .openapi({ description: 'Email address of the user associated with the account.' }),
        id: z
          .int()
          .openapi({
            description: 'The user ID associated with the account. This is a UUID.',
            example: 'C95837C9-184B-4CC2-8779-B769F960FADB',
          }),
      })
      .exactOptional()
      .openapi({ required: ['id', 'email'] }),
  })
  .openapi({ required: [] })
  .openapi('Me')

const NamespacePatchSchema = z
  .strictObject({
    authenticated: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If `true`, clients will not be permitted to use (including to attach, publish, or subscribe) any channels within this namespace unless they are identified, that is, authenticated using a client ID. See the <a href="https://knowledge.ably.com/authenticated-and-identified-clients">Ably knowledge base/a> for more details.',
        example: false,
      }),
    persistLast: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If `true`, the last message published on a channel will be stored for 365 days. You can access the stored message only by using the channel rewind mechanism and attaching with rewind=1. Please note that for each message stored, an additional message is deducted from your monthly allocation.',
        example: false,
      }),
    persisted: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If `true`, all messages on a channel will be stored for 24 hours. You can access stored messages via the History API. Please note that for each message stored, an additional message is deducted from your monthly allocation.',
        example: false,
      }),
    pushEnabled: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If `true`, publishing messages with a push payload in the extras field is permitted and can trigger the delivery of a native push notification to registered devices for the channel.',
        example: false,
      }),
    tlsOnly: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If `true`, only clients that are connected using TLS will be permitted to subscribe to any channels within this namespace.',
        example: false,
      }),
  })
  .openapi({ required: [] })
  .openapi('NamespacePatch')

const NamespacePostSchema = z
  .strictObject({
    authenticated: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If `true`, clients will not be permitted to use (including to attach, publish, or subscribe) any channels within this namespace unless they are identified, that is, authenticated using a client ID. See the <a href="https://knowledge.ably.com/authenticated-and-identified-clients">Ably Knowledge base</a> for more details.',
        example: false,
      }),
    id: z
      .string()
      .openapi({
        description:
          'The namespace or channel name that the channel rule will apply to. For example, if you specify `namespace` the namespace will be set to `namespace` and will match with channels `namespace:*` and `namespace`.',
        example: 'namespace',
      }),
    persistLast: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If `true`, the last message published on a channel will be stored for 365 days. You can access the stored message only by using the channel rewind mechanism and attaching with rewind=1. Please note that for each message stored, an additional message is deducted from your monthly allocation.',
        example: false,
      }),
    persisted: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If `true`, all messages on a channel will be stored for 24 hours. You can access stored messages via the History API. Please note that for each message stored, an additional message is deducted from your monthly allocation.',
        example: false,
      }),
    pushEnabled: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If `true`, publishing messages with a push payload in the extras field is permitted and can trigger the delivery of a native push notification to registered devices for the channel.',
        example: false,
      }),
    tlsOnly: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If `true`, only clients that are connected using TLS will be permitted to subscribe to any channels within this namespace.',
        example: false,
      }),
  })
  .openapi({ required: ['id'] })
  .openapi('NamespacePost')

const NamespaceResponseSchema = z
  .strictObject({
    authenticated: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If `true`, clients will not be permitted to use (including to attach, publish, or subscribe) any channels within this namespace unless they are identified, that is, authenticated using a client ID. See the <a href="https://knowledge.ably.com/authenticated-and-identified-clients">Ably knowledge base</a> for more details.',
        example: false,
      }),
    created: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Unix timestamp representing the date and time of creation of the namespace.',
        example: 1602844091815,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The namespace or channel name that the channel rule will apply to. For example, if you specify `namespace` the namespace will be set to `namespace` and will match with channels `namespace:*` and `namespace`.',
        example: 'namespace',
      }),
    modified: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Unix timestamp representing the date and time of last modification of the namespace.',
        example: 1614679682091,
      }),
    persistLast: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If `true`, the last message published on a channel will be stored for 365 days. You can access the stored message only by using the channel rewind mechanism and attaching with rewind=1. Please note that for each message stored, an additional message is deducted from your monthly allocation.',
        example: false,
      }),
    persisted: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If `true`, all messages on a channel will be stored for 24 hours. You can access stored messages via the History API. Please note that for each message stored, an additional message is deducted from your monthly allocation.',
        example: false,
      }),
    pushEnabled: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If `true`, publishing messages with a push payload in the extras field is permitted and can trigger the delivery of a native push notification to registered devices for the channel.',
        example: false,
      }),
    tlsOnly: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If `true`, only clients that are connected using TLS will be permitted to subscribe to any channels within this namespace.',
        example: false,
      }),
  })
  .openapi({ required: [] })
  .openapi('NamespaceResponse')

const QueueSchema = z
  .strictObject({
    maxLength: z
      .int()
      .openapi({ description: 'Message limit in number of messages.', example: 10000 }),
    name: z
      .string()
      .openapi({ description: 'A friendly name for your queue.', example: 'My queue' }),
    region: z
      .string()
      .openapi({
        description:
          'The data center region. US East (Virginia) or EU West (Ireland). Values are `us-east-1-a` or `eu-west-1-a`.',
        example: 'us-east-1-a',
      }),
    ttl: z.int().openapi({ description: 'TTL in minutes.', example: 60 }),
  })
  .openapi({ required: ['name', 'ttl', 'maxLength', 'region'] })
  .openapi('Queue')

const QueueResponseSchema = z
  .strictObject({
    amqp: z
      .strictObject({
        queueName: z
          .string()
          .exactOptional()
          .openapi({ description: 'Name of the Ably queue.', example: '28AB6w:My queue' }),
        uri: z
          .string()
          .exactOptional()
          .openapi({
            description: 'URI for the AMQP queue interface.',
            example: 'amqps://us-east-1-a-queue.ably.io:5671/shared',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    appId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Ably application ID.', example: '28AB6w' }),
    deadletter: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean that indicates whether this is a dead letter queue or not.',
        example: false,
      }),
    deadletterId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '28AB6w:us-east-1-a:deadletter' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the Ably queue', example: '28AB6w:us-east-1-a:My queue' }),
    maxLength: z
      .int()
      .exactOptional()
      .openapi({ description: 'Message limit in number of messages.', example: 10000 }),
    messages: z
      .strictObject({
        ready: z
          .int()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The number of ready messages in the queue.', example: 0 }),
        total: z
          .int()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The total number of messages in the queue.', example: 0 }),
        unacknowledged: z
          .int()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The number of unacknowledged messages in the queue.',
            example: 0,
          }),
      })
      .exactOptional()
      .openapi({ description: 'Details of messages in the queue.', required: [] }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The friendly name of the queue.', example: 'My queue' }),
    region: z
      .string()
      .exactOptional()
      .openapi({ description: 'The data center region for the queue.', example: 'eu-west-1-a' }),
    state: z
      .string()
      .exactOptional()
      .openapi({ description: 'The current state of the queue.', example: 'Running' }),
    stats: z
      .strictObject({
        acknowledgementRate: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The rate at which messages are acknowledged. Rate is messages per minute.',
          }),
        deliveryRate: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The rate at which messages are delivered from the queue. Rate is messages per minute.',
          }),
        publishRate: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The rate at which messages are published to the queue. Rate is messages per minute.',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    stomp: z
      .strictObject({
        destination: z
          .string()
          .exactOptional()
          .openapi({ description: 'Destination queue.', example: '/amqp/queue/28AB6w:My queue' }),
        host: z
          .string()
          .exactOptional()
          .openapi({ description: 'The host type for the queue.', example: 'shared' }),
        uri: z
          .string()
          .exactOptional()
          .openapi({
            description: 'URI for the STOMP queue interface.',
            example: 'stomp://us-east-1-a-queue.ably.io:61614',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    ttl: z.int().exactOptional().openapi({ description: 'TTL in minutes.', example: 60 }),
  })
  .openapi({ required: [] })
  .openapi('QueueResponse')

const RuleAttributesSchema = z
  .strictObject({
    appId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Ably application ID.', example: '28GY6a' }),
    created: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Unix timestamp representing the date and time of creation of the rule.',
        example: 1602844091815,
      }),
    id: z.string().exactOptional().openapi({ description: 'The rule ID.', example: '83IzAB' }),
    modified: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Unix timestamp representing the date and time of last modification of the rule.',
        example: 1614679682091,
      }),
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description: 'The status of the rule. Rules can be enabled or disabled.',
        example: 'enabled',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>.',
      }),
  })
  .openapi({ required: [] })
  .openapi('RuleAttributes')

const RulePatchSchema: z.ZodType<RulePatchType> = z
  .lazy(() =>
    z
      .xor([
        HttpRulePatchSchema,
        IftttRulePatchSchema,
        ZapierRulePatchSchema,
        CloudflareWorkerRulePatchSchema,
        AzureFunctionRulePatchSchema,
        GoogleCloudFunctionRulePatchSchema,
        AwsLambdaRulePatchSchema,
        AwsKinesisRulePatchSchema,
        AwsSqsRulePatchSchema,
        AmqpRulePatchSchema,
        AmqpExternalRulePatchSchema,
      ])
      .openapi({
        discriminator: {
          mapping: {
            amqp: '#/components/schemas/amqp_rule_patch',
            'amqp/external': '#/components/schemas/amqp_external_rule_patch',
            'aws/kinesis': '#/components/schemas/aws_kinesis_rule_patch',
            'aws/lambda': '#/components/schemas/aws_lambda_rule_patch',
            'aws/sqs': '#/components/schemas/aws_sqs_rule_patch',
            http: '#/components/schemas/http_rule_patch',
            'http/azure-function': '#/components/schemas/azure_function_rule_patch',
            'http/cloudflare-worker': '#/components/schemas/cloudflare_worker_rule_patch',
            'http/google-cloud-function': '#/components/schemas/google_cloud_function_rule_patch',
            'http/ifttt': '#/components/schemas/ifttt_rule_patch',
            'http/zapier': '#/components/schemas/zapier_rule_patch',
          },
          propertyName: 'ruleType',
        },
      }),
  )
  .openapi('RulePatch')

const RulePostSchema: z.ZodType<RulePostType> = z
  .lazy(() =>
    z
      .discriminatedUnion('ruleType', [
        HttpRulePostSchema,
        IftttRulePostSchema,
        ZapierRulePostSchema,
        CloudflareWorkerRulePostSchema,
        AzureFunctionRulePostSchema,
        GoogleCloudFunctionRulePostSchema,
        AwsLambdaRulePostSchema,
        AwsKinesisRulePostSchema,
        AwsSqsRulePostSchema,
        AmqpRulePostSchema,
        AmqpExternalRulePostSchema,
        UnsupportedRuleResponseSchema,
      ])
      .openapi({
        discriminator: {
          mapping: {
            amqp: '#/components/schemas/amqp_rule_post',
            'amqp/external': '#/components/schemas/amqp_external_rule_post',
            'aws/kinesis': '#/components/schemas/aws_kinesis_rule_post',
            'aws/lambda': '#/components/schemas/aws_lambda_rule_post',
            'aws/sqs': '#/components/schemas/aws_sqs_rule_post',
            http: '#/components/schemas/http_rule_post',
            'http/azure-function': '#/components/schemas/azure_function_rule_post',
            'http/cloudflare-worker': '#/components/schemas/cloudflare_worker_rule_post',
            'http/google-cloud-function': '#/components/schemas/google_cloud_function_rule_post',
            'http/ifttt': '#/components/schemas/ifttt_rule_post',
            'http/zapier': '#/components/schemas/zapier_rule_post',
            unsupported: '#/components/schemas/unsupported_rule_response',
          },
          propertyName: 'ruleType',
        },
      }),
  )
  .openapi('RulePost')

const RuleResponseSchema: z.ZodType<RuleResponseType> = z
  .lazy(() =>
    z
      .discriminatedUnion('ruleType', [
        HttpRuleResponseSchema,
        IftttRuleResponseSchema,
        ZapierRuleResponseSchema,
        CloudflareWorkerRuleResponseSchema,
        AzureFunctionRuleResponseSchema,
        GoogleCloudFunctionRuleResponseSchema,
        AwsLambdaRuleResponseSchema,
        AwsKinesisRuleResponseSchema,
        AwsSqsRuleResponseSchema,
        AmqpRuleResponseSchema,
        AmqpExternalRuleResponseSchema,
      ])
      .openapi({
        discriminator: {
          mapping: {
            amqp: '#/components/schemas/amqp_rule_response',
            'amqp/external': '#/components/schemas/amqp_external_rule_response',
            'aws/kinesis': '#/components/schemas/aws_kinesis_rule_response',
            'aws/lambda': '#/components/schemas/aws_lambda_rule_response',
            'aws/sqs': '#/components/schemas/aws_sqs_rule_response',
            http: '#/components/schemas/http_rule_response',
            'http/azure-function': '#/components/schemas/azure_function_rule_response',
            'http/cloudflare-worker': '#/components/schemas/cloudflare_worker_rule_response',
            'http/google-cloud-function':
              '#/components/schemas/google_cloud_function_rule_response',
            'http/ifttt': '#/components/schemas/ifttt_rule_response',
            'http/zapier': '#/components/schemas/zapier_rule_response',
          },
          propertyName: 'ruleType',
        },
      }),
  )
  .openapi('RuleResponse')

const RuleSourcePatchSchema = z
  .strictObject({
    channelFilter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field allows you to filter your rule based on a regular expression that is matched against the complete channel name. Leave this empty if you want the rule to apply to all channels.',
      }),
    type: z
      .enum(['channel.message', 'channel.presence', 'channel.lifecycle', 'channel.occupancy'])
      .exactOptional()
      .openapi({
        description:
          'The type `channel.message` delivers all messages published on a channel. The type `channel.presence` delivers all enter, update and leave events for members present on a channel. The type `channel.lifecycle` events for this rule type are currently not supported. Get in touch (https://ably.com/contact) if you need this feature. The type `channel.occupancy` delivers all occupancy events for the channel.',
      }),
  })
  .openapi({ required: [] })
  .openapi('RuleSourcePatch')

const BearerAuthSecurityScheme = {
  description:
    'Control API uses bearer authentication. You need to generate an access token for use with this API. More details can be found in the <a href="https://ably.com/documentation/control-api/#authentication">Ably documentation</a>.',
  scheme: 'bearer',
  type: 'http',
}

export const getAccountsAccountIdAppsRoute = createRoute({
  method: 'get',
  path: '/accounts/{account_id}/apps',
  tags: ['apps'],
  summary: 'Lists apps',
  description: 'List all applications for the specified account ID.',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: {
            description: 'The account ID for which to retrieve the associated applications.',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of apps for the specified account are returned',
      content: { 'application/json': { schema: z.array(AppResponseSchema) } },
    },
    401: {
      description: 'Authentication failed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Account not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearer_auth: [] }],
})

export const postAccountsAccountIdAppsRoute = createRoute({
  method: 'post',
  path: '/accounts/{account_id}/apps',
  tags: ['apps'],
  summary: 'Creates an app',
  description: 'Creates an application with the specified properties.',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: {
            description: 'The account ID of the account in which to create the application.',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AppPostSchema } } },
  },
  responses: {
    201: {
      description: 'App created',
      content: { 'application/json': { schema: AppResponseSchema } },
    },
    400: { description: 'Bad request', content: { 'application/json': { schema: ErrorSchema } } },
    401: {
      description: 'Authentication failed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Account not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'Invalid request',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearer_auth: [] }],
})

export const getAppsAppIdKeysRoute = createRoute({
  method: 'get',
  path: '/apps/{app_id}/keys',
  tags: ['keys'],
  summary: 'Lists app keys',
  description: 'Lists the API keys associated with the application ID.',
  request: {
    params: z.object({
      app_id: z
        .string()
        .openapi({
          param: {
            description: 'The application ID.',
            in: 'path',
            name: 'app_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Key list',
      content: { 'application/json': { schema: z.array(KeyResponseSchema) } },
    },
    401: {
      description: 'Authentication failed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'App not found', content: { 'application/json': { schema: ErrorSchema } } },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    504: {
      description: 'Gateway timeout',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearer_auth: [] }],
})

export const postAppsAppIdKeysRoute = createRoute({
  method: 'post',
  path: '/apps/{app_id}/keys',
  tags: ['keys'],
  summary: 'Creates a key',
  description: 'Creates an API key for the application specified.',
  request: {
    params: z.object({
      app_id: z
        .string()
        .openapi({
          param: {
            description: 'The application ID.',
            in: 'path',
            name: 'app_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: KeyPostSchema } } },
  },
  responses: {
    201: {
      description: 'Key created',
      content: { 'application/json': { schema: KeyResponseSchema } },
    },
    400: { description: 'Bad request', content: { 'application/json': { schema: ErrorSchema } } },
    401: {
      description: 'Authentication failed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'App not found', content: { 'application/json': { schema: ErrorSchema } } },
    422: {
      description: 'Invalid request',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearer_auth: [] }],
})

export const patchAppsAppIdKeysKeyIdRoute = createRoute({
  method: 'patch',
  path: '/apps/{app_id}/keys/{key_id}',
  tags: ['keys'],
  summary: 'Updates a key',
  description:
    'Update the API key with the specified key ID, for the application with the specified application ID.',
  request: {
    params: z.object({
      app_id: z
        .string()
        .openapi({
          param: {
            description: 'The application ID.',
            in: 'path',
            name: 'app_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key_id: z
        .string()
        .openapi({
          param: {
            description: 'The API key ID.',
            in: 'path',
            name: 'key_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: KeyPatchSchema } } },
  },
  responses: {
    200: {
      description: 'Key updated',
      content: { 'application/json': { schema: KeyResponseSchema } },
    },
    400: { description: 'Bad request', content: { 'application/json': { schema: ErrorSchema } } },
    401: {
      description: 'Authentication failed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'App not found', content: { 'application/json': { schema: ErrorSchema } } },
    422: {
      description: 'Invalid request',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    504: {
      description: 'Gateway timeout',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearer_auth: [] }],
})

export const postAppsAppIdKeysKeyIdRevokeRoute = createRoute({
  method: 'post',
  path: '/apps/{app_id}/keys/{key_id}/revoke',
  tags: ['keys'],
  summary: 'Revokes a key',
  description:
    'Revokes the API key with the specified ID, with the Application ID. This deletes the key.',
  request: {
    params: z.object({
      app_id: z
        .string()
        .openapi({
          param: {
            description: 'The application ID.',
            in: 'path',
            name: 'app_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key_id: z
        .string()
        .openapi({
          param: {
            description: 'The key ID.',
            in: 'path',
            name: 'key_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Key revoked', content: {} },
    401: {
      description: 'Authentication failed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'Not found', content: { 'application/json': { schema: ErrorSchema } } },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    504: {
      description: 'Gateway timeout',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearer_auth: [] }],
})

export const getAppsAppIdNamespacesRoute = createRoute({
  method: 'get',
  path: '/apps/{app_id}/namespaces',
  tags: ['namespaces'],
  summary: 'Lists namespaces',
  description: 'List the namespaces for the specified application ID.',
  request: {
    params: z.object({
      app_id: z
        .string()
        .openapi({
          param: {
            description: 'The application ID.',
            in: 'path',
            name: 'app_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Namespace list',
      content: { 'application/json': { schema: z.array(NamespaceResponseSchema) } },
    },
    401: {
      description: 'Authentication failed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'App not found', content: { 'application/json': { schema: ErrorSchema } } },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    504: {
      description: 'Gateway timeout',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearer_auth: [] }],
})

export const postAppsAppIdNamespacesRoute = createRoute({
  method: 'post',
  path: '/apps/{app_id}/namespaces',
  tags: ['namespaces'],
  summary: 'Creates a namespace',
  description: 'Creates a namespace for the specified application ID.',
  request: {
    params: z.object({
      app_id: z
        .string()
        .openapi({
          param: {
            description: 'The application ID.',
            in: 'path',
            name: 'app_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: NamespacePostSchema } } },
  },
  responses: {
    201: {
      description: 'Namespace created',
      content: { 'application/json': { schema: NamespaceResponseSchema } },
    },
    400: { description: 'Bad request', content: { 'application/json': { schema: ErrorSchema } } },
    401: {
      description: 'Authentication failed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'App not found', content: { 'application/json': { schema: ErrorSchema } } },
    422: {
      description: 'Invalid request',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearer_auth: [] }],
})

export const deleteAppsAppIdNamespacesNamespaceIdRoute = createRoute({
  method: 'delete',
  path: '/apps/{app_id}/namespaces/{namespace_id}',
  tags: ['namespaces'],
  summary: 'Deletes a namespace',
  description: 'Deletes the namespace with the specified ID, for the specified application ID.',
  request: {
    params: z.object({
      app_id: z
        .string()
        .openapi({
          param: {
            description: 'The application ID.',
            in: 'path',
            name: 'app_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      namespace_id: z
        .string()
        .openapi({
          param: {
            description: 'The namespace ID.',
            in: 'path',
            name: 'namespace_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Namespace deleted', content: {} },
    401: {
      description: 'Authentication failed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'Not found', content: { 'application/json': { schema: ErrorSchema } } },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    504: {
      description: 'Gateway timeout',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearer_auth: [] }],
})

export const patchAppsAppIdNamespacesNamespaceIdRoute = createRoute({
  method: 'patch',
  path: '/apps/{app_id}/namespaces/{namespace_id}',
  tags: ['namespaces'],
  summary: 'Updates a namespace',
  description:
    'Updates the namespace with the specified ID, for the application with the specified application ID.',
  request: {
    params: z.object({
      app_id: z
        .string()
        .openapi({
          param: {
            description: 'The application ID.',
            in: 'path',
            name: 'app_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      namespace_id: z
        .string()
        .openapi({
          param: {
            description: 'The namespace ID.',
            in: 'path',
            name: 'namespace_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: NamespacePatchSchema } } },
  },
  responses: {
    200: {
      description: 'Namespace updated',
      content: { 'application/json': { schema: NamespaceResponseSchema } },
    },
    400: { description: 'Bad request', content: { 'application/json': { schema: ErrorSchema } } },
    401: {
      description: 'Authentication failed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'Not found', content: { 'application/json': { schema: ErrorSchema } } },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    504: {
      description: 'Gateway timeout',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearer_auth: [] }],
})

export const getAppsAppIdQueuesRoute = createRoute({
  method: 'get',
  path: '/apps/{app_id}/queues',
  tags: ['queues'],
  summary: 'Lists queues',
  description: 'Lists the queues associated with the specified application ID.',
  request: {
    params: z.object({
      app_id: z
        .string()
        .openapi({
          param: {
            description: 'The application ID.',
            in: 'path',
            name: 'app_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Queue list',
      content: { 'application/json': { schema: z.array(QueueResponseSchema) } },
    },
    401: {
      description: 'Authentication failed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'App not found', content: { 'application/json': { schema: ErrorSchema } } },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    503: {
      description: '503 Service unavailable',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    504: {
      description: 'Gateway timeout',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearer_auth: [] }],
})

export const postAppsAppIdQueuesRoute = createRoute({
  method: 'post',
  path: '/apps/{app_id}/queues',
  tags: ['queues'],
  summary: 'Creates a queue',
  description:
    'Creates a queue for the application specified by application ID. The properties for the queue to be created are specified in the request body.',
  request: {
    params: z.object({
      app_id: z
        .string()
        .openapi({
          param: {
            description: 'The application ID.',
            in: 'path',
            name: 'app_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: QueueSchema } } },
  },
  responses: {
    201: {
      description: 'Queue created',
      content: { 'application/json': { schema: QueueResponseSchema } },
    },
    400: { description: 'Bad request', content: { 'application/json': { schema: ErrorSchema } } },
    401: {
      description: 'Authentication failed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'App not found', content: { 'application/json': { schema: ErrorSchema } } },
    422: {
      description: 'Invalid request',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearer_auth: [] }],
})

export const deleteAppsAppIdQueuesQueueIdRoute = createRoute({
  method: 'delete',
  path: '/apps/{app_id}/queues/{queue_id}',
  tags: ['queues'],
  summary: 'Deletes a queue',
  description:
    'Delete the queue with the specified queue name, from the application with the specified application ID.',
  request: {
    params: z.object({
      app_id: z
        .string()
        .openapi({
          param: {
            description: 'The application ID.',
            in: 'path',
            name: 'app_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      queue_id: z
        .string()
        .openapi({
          param: {
            description: 'The queue ID.',
            in: 'path',
            name: 'queue_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Queue deleted', content: {} },
    400: { description: 'Bad request', content: { 'application/json': { schema: ErrorSchema } } },
    401: {
      description: 'Authentication failed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'App not found', content: { 'application/json': { schema: ErrorSchema } } },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    503: {
      description: '503 Service unavailable',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearer_auth: [] }],
})

export const getAppsAppIdRulesRoute = createRoute({
  method: 'get',
  path: '/apps/{app_id}/rules',
  tags: ['rules'],
  summary: 'Lists Reactor rules',
  description: 'Lists the rules for the application specified by the application ID.',
  request: {
    params: z.object({
      app_id: z
        .string()
        .openapi({
          param: {
            description: 'The application ID.',
            in: 'path',
            name: 'app_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Reactor rule list',
      content: { 'application/json': { schema: z.array(RuleResponseSchema) } },
    },
    401: {
      description: 'Authentication failed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'App not found', content: { 'application/json': { schema: ErrorSchema } } },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    504: {
      description: 'Gateway timeout',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearer_auth: [] }],
})

export const postAppsAppIdRulesRoute = createRoute({
  method: 'post',
  path: '/apps/{app_id}/rules',
  tags: ['rules'],
  summary: 'Creates a Reactor rule',
  description: 'Creates a rule for the application with the specified application ID.',
  request: {
    params: z.object({
      app_id: z
        .string()
        .openapi({
          param: {
            description: 'The application ID.',
            in: 'path',
            name: 'app_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The rule properties.',
      content: { 'application/json': { schema: RulePostSchema } },
    },
  },
  responses: {
    201: {
      description: 'Reactor rule created',
      content: { 'application/json': { schema: RuleResponseSchema } },
    },
    400: { description: 'Bad request', content: { 'application/json': { schema: ErrorSchema } } },
    401: {
      description: 'Authentication failed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'App not found', content: { 'application/json': { schema: ErrorSchema } } },
    422: {
      description: 'Invalid request',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    504: {
      description: 'Gateway timeout',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearer_auth: [] }],
})

export const getAppsAppIdRulesRuleIdRoute = createRoute({
  method: 'get',
  path: '/apps/{app_id}/rules/{rule_id}',
  tags: ['rules'],
  summary: 'Gets a reactor rule by rule ID',
  description:
    'Returns the rule specified by the rule ID, for the application specified by application ID.',
  request: {
    params: z.object({
      app_id: z
        .string()
        .openapi({
          param: {
            description: 'The application ID.',
            in: 'path',
            name: 'app_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      rule_id: z
        .string()
        .openapi({
          param: {
            description: 'The rule ID.',
            in: 'path',
            name: 'rule_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Reactor rule',
      content: { 'application/json': { schema: RuleResponseSchema } },
    },
    401: {
      description: 'Authentication failed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'Not found', content: { 'application/json': { schema: ErrorSchema } } },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    504: {
      description: 'Gateway timeout',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearer_auth: [] }],
})

export const deleteAppsAppIdRulesRuleIdRoute = createRoute({
  method: 'delete',
  path: '/apps/{app_id}/rules/{rule_id}',
  tags: ['rules'],
  summary: 'Deletes a Reactor rule',
  request: {
    params: z.object({
      app_id: z
        .string()
        .openapi({
          param: {
            description: 'The application ID.',
            in: 'path',
            name: 'app_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      rule_id: z
        .string()
        .openapi({
          param: {
            description: 'The rule ID.',
            in: 'path',
            name: 'rule_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Reactor rule deleted', content: {} },
    401: {
      description: 'Authentication failed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'App not found', content: { 'application/json': { schema: ErrorSchema } } },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    504: {
      description: 'Gateway timeout',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearer_auth: [] }],
})

export const patchAppsAppIdRulesRuleIdRoute = createRoute({
  method: 'patch',
  path: '/apps/{app_id}/rules/{rule_id}',
  tags: ['rules'],
  summary: 'Updates a Reactor rule',
  request: {
    params: z.object({
      app_id: z
        .string()
        .openapi({
          param: {
            description: 'The application ID.',
            in: 'path',
            name: 'app_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      rule_id: z
        .string()
        .openapi({
          param: {
            description: 'The rule ID.',
            in: 'path',
            name: 'rule_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Properties for the rule.',
      content: { 'application/json': { schema: RulePatchSchema } },
    },
  },
  responses: {
    200: {
      description: 'Reactor rule updated',
      content: { 'application/json': { schema: RuleResponseSchema } },
    },
    400: { description: 'Bad request', content: { 'application/json': { schema: ErrorSchema } } },
    401: {
      description: 'Authentication failed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'App not found', content: { 'application/json': { schema: ErrorSchema } } },
    422: {
      description: 'Invalid request',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    504: {
      description: 'Gateway timeout',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearer_auth: [] }],
})

export const deleteAppsIdRoute = createRoute({
  method: 'delete',
  path: '/apps/{id}',
  tags: ['apps'],
  summary: 'Deletes an app',
  description: 'Deletes the application with the specified application ID.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the application to be deleted.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'App deleted', content: {} },
    401: {
      description: 'Authentication failed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'App not found', content: { 'application/json': { schema: ErrorSchema } } },
    422: {
      description: 'Invalid request',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearer_auth: [] }],
})

export const patchAppsIdRoute = createRoute({
  method: 'patch',
  path: '/apps/{id}',
  tags: ['apps'],
  summary: 'Updates an app',
  description: 'Updates the application with the specified application ID.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of application to be updated.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AppPatchSchema } } },
  },
  responses: {
    200: {
      description: 'App updated',
      content: { 'application/json': { schema: AppResponseSchema } },
    },
    400: { description: 'Bad request', content: { 'application/json': { schema: ErrorSchema } } },
    401: {
      description: 'Authentication failed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'App not found', content: { 'application/json': { schema: ErrorSchema } } },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearer_auth: [] }],
})

export const postAppsIdPkcs12Route = createRoute({
  method: 'post',
  path: '/apps/{id}/pkcs12',
  tags: ['apps'],
  summary: "Updates app's APNs info from a `.p12` file",
  description: "Updates the application's Apple Push Notification service (APNs) information.",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The application ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'multipart/form-data': { schema: AppPkcs12Schema } } },
  },
  responses: {
    200: {
      description: 'App updated',
      content: { 'application/json': { schema: AppResponseSchema } },
    },
    400: { description: 'Bad request', content: { 'application/json': { schema: ErrorSchema } } },
    401: {
      description: 'Authentication failed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'App not found', content: { 'application/json': { schema: ErrorSchema } } },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearer_auth: [] }],
})

export const getMeRoute = createRoute({
  method: 'get',
  path: '/me',
  tags: ['tokens'],
  summary: 'Get token details',
  responses: {
    200: { description: 'Token details', content: { 'application/json': { schema: MeSchema } } },
    401: {
      description: 'Authentication failed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearer_auth: [] }],
})
