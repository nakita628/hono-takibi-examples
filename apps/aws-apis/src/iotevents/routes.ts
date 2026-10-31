import { createRoute, z } from '@hono/zod-openapi'

const VariableNameSchema = z
  .string()
  .regex(/^[a-zA-Z][a-zA-Z0-9_]*$/)
  .min(1)
  .max(128)
  .openapi('VariableName')

const VariableValueSchema = z.string().min(1).max(1024).openapi('VariableValue')

const SetVariableActionSchema = z
  .object({
    variableName: VariableNameSchema.and(
      z.any().openapi({ description: 'The name of the variable.' }),
    ),
    value: VariableValueSchema.and(
      z.any().openapi({ description: 'The new value of the variable.' }),
    ),
  })
  .openapi({
    required: ['variableName', 'value'],
    description: 'Information about the variable and its new value.',
  })
  .openapi('SetVariableAction')

const AmazonResourceNameSchema = z.string().min(1).max(2048).openapi('AmazonResourceName')

const ContentExpressionSchema = z.string().min(1).openapi('ContentExpression')

const PayloadTypeSchema = z.enum(['STRING', 'JSON']).openapi('PayloadType')

const PayloadSchema = z
  .object({
    contentExpression: ContentExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            "The content of the payload. You can use a string expression that includes quoted strings (<code>'&lt;string&gt;'</code>), variables (<code>$variable.&lt;variable-name&gt;</code>), input values (<code>$input.&lt;input-name&gt;.&lt;path-to-datum&gt;</code>), string concatenations, and quoted strings that contain <code>${}</code> as the content. The recommended maximum size of a content expression is 1 KB.",
        }),
    ),
    type: PayloadTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the payload type can be either <code>STRING</code> or <code>JSON</code>.',
        }),
    ),
  })
  .openapi({
    required: ['contentExpression', 'type'],
    description:
      '<p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p>',
  })
  .openapi('Payload')

const SNSTopicPublishActionSchema = z
  .object({
    targetArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the Amazon SNS target where the message is sent.' }),
    ),
    payload: PayloadSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can configure the action payload when you send a message as an Amazon SNS push notification.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['targetArn'],
    description: 'Information required to publish the Amazon SNS message.',
  })
  .openapi('SNSTopicPublishAction')

const MQTTTopicSchema = z.string().min(1).max(128).openapi('MQTTTopic')

const IotTopicPublishActionSchema = z
  .object({
    mqttTopic: MQTTTopicSchema.and(
      z
        .any()
        .openapi({
          description:
            'The MQTT topic of the message. You can use a string expression that includes variables (<code>$variable.&lt;variable-name&gt;</code>) and input values (<code>$input.&lt;input-name&gt;.&lt;path-to-datum&gt;</code>) as the topic string.',
        }),
    ),
    payload: PayloadSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can configure the action payload when you publish a message to an AWS IoT Core topic.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['mqttTopic'],
    description:
      'Information required to publish the MQTT message through the AWS IoT message broker.',
  })
  .openapi('IotTopicPublishAction')

const TimerNameSchema = z.string().min(1).max(128).openapi('TimerName')

const SecondsSchema = z.int().min(1).max(31622400).openapi('Seconds')

const SetTimerActionSchema = z
  .object({
    timerName: TimerNameSchema.and(z.any().openapi({ description: 'The name of the timer.' })),
    seconds: SecondsSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'The number of seconds until the timer expires. The minimum value is 60 seconds to ensure accuracy. The maximum value is 31622400 seconds. seconds is deprecated. You can use durationExpression for SetTimerAction. The value of seconds can be used as a string expression for durationExpression.',
        }),
    ).exactOptional(),
    durationExpression: VariableValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The duration of the timer, in seconds. You can use a string expression that includes numbers, variables (<code>$variable.&lt;variable-name&gt;</code>), and input values (<code>$input.&lt;input-name&gt;.&lt;path-to-datum&gt;</code>) as the duration. The range of the duration is 1-31622400 seconds. To ensure accuracy, the minimum duration is 60 seconds. The evaluated result of the duration is rounded down to the nearest whole number. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['timerName'], description: 'Information needed to set the timer.' })
  .openapi('SetTimerAction')

const ClearTimerActionSchema = z
  .object({
    timerName: TimerNameSchema.and(
      z.any().openapi({ description: 'The name of the timer to clear.' }),
    ),
  })
  .openapi({ required: ['timerName'], description: 'Information needed to clear the timer.' })
  .openapi('ClearTimerAction')

const ResetTimerActionSchema = z
  .object({
    timerName: TimerNameSchema.and(
      z.any().openapi({ description: 'The name of the timer to reset.' }),
    ),
  })
  .openapi({
    required: ['timerName'],
    description:
      "Information required to reset the timer. The timer is reset to the previously evaluated result of the duration. The duration expression isn't reevaluated when you reset the timer.",
  })
  .openapi('ResetTimerAction')

const LambdaActionSchema = z
  .object({
    functionArn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The ARN of the Lambda function that is executed.' }),
    ),
    payload: PayloadSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can configure the action payload when you send a message to a Lambda function.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['functionArn'],
    description:
      'Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.',
  })
  .openapi('LambdaAction')

const InputNameSchema = z
  .string()
  .regex(/^[a-zA-Z][a-zA-Z0-9_]*$/)
  .min(1)
  .max(128)
  .openapi('InputName')

const IotEventsActionSchema = z
  .object({
    inputName: InputNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the AWS IoT Events input where the data is sent.' }),
    ),
    payload: PayloadSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can configure the action payload when you send a message to an AWS IoT Events input.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['inputName'],
    description:
      'Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action.',
  })
  .openapi('IotEventsAction')

const QueueUrlSchema = z.string().openapi('QueueUrl')

const UseBase64Schema = z.boolean().openapi('UseBase64')

const SqsActionSchema = z
  .object({
    queueUrl: QueueUrlSchema.and(
      z.any().openapi({ description: 'The URL of the SQS queue where the data is written.' }),
    ),
    useBase64: UseBase64Schema.and(
      z
        .any()
        .openapi({
          description:
            'Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue. Otherwise, set this to FALSE.',
        }),
    ).exactOptional(),
    payload: PayloadSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can configure the action payload when you send a message to an Amazon SQS queue.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['queueUrl'],
    description:
      'Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.',
  })
  .openapi('SqsAction')

const DeliveryStreamNameSchema = z.string().openapi('DeliveryStreamName')

const FirehoseSeparatorSchema = z
  .string()
  .regex(/([\n\t])|(\r\n)|(,)/)
  .openapi('FirehoseSeparator')

const FirehoseActionSchema = z
  .object({
    deliveryStreamName: DeliveryStreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Kinesis Data Firehose delivery stream where the data is written.',
        }),
    ),
    separator: FirehoseSeparatorSchema.and(
      z
        .any()
        .openapi({
          description:
            "A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream. Valid values are: '\\n' (newline), '\\t' (tab), '\\r\\n' (Windows newline), ',' (comma).",
        }),
    ).exactOptional(),
    payload: PayloadSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can configure the action payload when you send a message to an Amazon Kinesis Data Firehose delivery stream.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['deliveryStreamName'],
    description:
      'Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.',
  })
  .openapi('FirehoseAction')

const DynamoKeyTypeSchema = z.string().openapi('DynamoKeyType')

const DynamoKeyFieldSchema = z.string().openapi('DynamoKeyField')

const DynamoKeyValueSchema = z.string().openapi('DynamoKeyValue')

const DynamoOperationSchema = z.string().openapi('DynamoOperation')

const DynamoTableNameSchema = z.string().openapi('DynamoTableName')

const DynamoDBActionSchema = z
  .object({
    hashKeyType: DynamoKeyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The data type for the hash key (also called the partition key). You can specify the following values:</p> <ul> <li> <p> <code>'STRING'</code> - The hash key is a string.</p> </li> <li> <p> <code>'NUMBER'</code> - The hash key is a number.</p> </li> </ul> <p>If you don't specify <code>hashKeyType</code>, the default value is <code>'STRING'</code>.</p>",
        }),
    ).exactOptional(),
    hashKeyField: DynamoKeyFieldSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the hash key (also called the partition key). The <code>hashKeyField</code> value must match the partition key of the target DynamoDB table.',
        }),
    ),
    hashKeyValue: DynamoKeyValueSchema.and(
      z
        .any()
        .openapi({ description: 'The value of the hash key (also called the partition key).' }),
    ),
    rangeKeyType: DynamoKeyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The data type for the range key (also called the sort key), You can specify the following values:</p> <ul> <li> <p> <code>'STRING'</code> - The range key is a string.</p> </li> <li> <p> <code>'NUMBER'</code> - The range key is number.</p> </li> </ul> <p>If you don't specify <code>rangeKeyField</code>, the default value is <code>'STRING'</code>.</p>",
        }),
    ).exactOptional(),
    rangeKeyField: DynamoKeyFieldSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the range key (also called the sort key). The <code>rangeKeyField</code> value must match the sort key of the target DynamoDB table. ',
        }),
    ).exactOptional(),
    rangeKeyValue: DynamoKeyValueSchema.and(
      z.any().openapi({ description: 'The value of the range key (also called the sort key).' }),
    ).exactOptional(),
    operation: DynamoOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of operation to perform. You can specify the following values: </p> <ul> <li> <p> <code>'INSERT'</code> - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.</p> </li> <li> <p> <code>'UPDATE'</code> - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.</p> </li> <li> <p> <code>'DELETE'</code> - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.</p> </li> </ul> <p>If you don't specify this parameter, AWS IoT Events triggers the <code>'INSERT'</code> operation.</p>",
        }),
    ).exactOptional(),
    payloadField: DynamoKeyFieldSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the DynamoDB column that receives the action payload.</p> <p>If you don't specify this parameter, the name of the DynamoDB column is <code>payload</code>.</p>",
        }),
    ).exactOptional(),
    tableName: DynamoTableNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the DynamoDB table. The <code>tableName</code> value must match the table name of the target DynamoDB table. ',
        }),
    ),
    payload: PayloadSchema.exactOptional(),
  })
  .openapi({
    required: ['hashKeyField', 'hashKeyValue', 'tableName'],
    description:
      '<p>Defines an action to write to the Amazon DynamoDB table that you created. The standard action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.</p> <p>You must use expressions for all parameters in <code>DynamoDBAction</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>hashKeyType</code> parameter can be <code>\'STRING\'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>hashKeyField</code> parameter can be <code>$input.GreenhouseInput.name</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>hashKeyValue</code> parameter uses a substitution template. </p> <p> <code>\'${$input.GreenhouseInput.temperature * 6 / 5 + 32} in Fahrenheit\'</code> </p> </li> <li> <p>For a string concatenation, you must use <code>+</code>. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>tableName</code> parameter uses a string concatenation. </p> <p> <code>\'GreenhouseTemperatureTable \' + $input.GreenhouseInput.date</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <p>If the defined payload type is a string, <code>DynamoDBAction</code> writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The value for the <code>payloadField</code> parameter is <code>&lt;payload-field&gt;_raw</code>.</p>',
  })
  .openapi('DynamoDBAction')

const DynamoDBv2ActionSchema = z
  .object({
    tableName: DynamoTableNameSchema.and(
      z.any().openapi({ description: 'The name of the DynamoDB table.' }),
    ),
    payload: PayloadSchema.exactOptional(),
  })
  .openapi({
    required: ['tableName'],
    description:
      '<p>Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.</p> <p>You must use expressions for all parameters in <code>DynamoDBv2Action</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>tableName</code> parameter can be <code>\'GreenhouseTemperatureTable\'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>tableName</code> parameter can be <code>$variable.ddbtableName</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>contentExpression</code> parameter in <code>Payload</code> uses a substitution template. </p> <p> <code>\'{\\"sensorID\\": \\"${$input.GreenhouseInput.sensor_id}\\", \\"temperature\\": \\"${$input.GreenhouseInput.temperature * 9 / 5 + 32}\\"}\'</code> </p> </li> <li> <p>For a string concatenation, you must use <code>+</code>. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>tableName</code> parameter uses a string concatenation. </p> <p> <code>\'GreenhouseTemperatureTable \' + $input.GreenhouseInput.date</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <p>The value for the <code>type</code> parameter in <code>Payload</code> must be <code>JSON</code>.</p>',
  })
  .openapi('DynamoDBv2Action')

const AssetPropertyEntryIdSchema = z.string().openapi('AssetPropertyEntryId')

const AssetIdSchema = z.string().openapi('AssetId')

const AssetPropertyIdSchema = z.string().openapi('AssetPropertyId')

const AssetPropertyAliasSchema = z.string().openapi('AssetPropertyAlias')

const AssetPropertyStringValueSchema = z.string().openapi('AssetPropertyStringValue')

const AssetPropertyIntegerValueSchema = z.string().openapi('AssetPropertyIntegerValue')

const AssetPropertyDoubleValueSchema = z.string().openapi('AssetPropertyDoubleValue')

const AssetPropertyBooleanValueSchema = z.string().openapi('AssetPropertyBooleanValue')

const AssetPropertyVariantSchema = z
  .object({
    stringValue: AssetPropertyStringValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The asset property value is a string. You must use an expression, and the evaluated result should be a string.',
        }),
    ).exactOptional(),
    integerValue: AssetPropertyIntegerValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The asset property value is an integer. You must use an expression, and the evaluated result should be an integer.',
        }),
    ).exactOptional(),
    doubleValue: AssetPropertyDoubleValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The asset property value is a double. You must use an expression, and the evaluated result should be a double.',
        }),
    ).exactOptional(),
    booleanValue: AssetPropertyBooleanValueSchema.and(
      z
        .any()
        .openapi({
          description:
            "The asset property value is a Boolean value that must be <code>'TRUE'</code> or <code>'FALSE'</code>. You must use an expression, and the evaluated result should be a Boolean value.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A structure that contains an asset property value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Variant.html">Variant</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>You must use expressions for all parameters in <code>AssetPropertyVariant</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>integerValue</code> parameter can be <code>\'100\'</code>.</p> </li> <li> <p>For references, you must specify either variables or parameters. For example, the value for the <code>booleanValue</code> parameter can be <code>$variable.offline</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates. </p> <p>In the following example, the value for the <code>doubleValue</code> parameter uses a substitution template. </p> <p> <code>\'${$input.TemperatureInput.sensorData.temperature * 6 / 5 + 32}\'</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <p>You must specify one of the following value types, depending on the <code>dataType</code> of the specified asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetProperty.html">AssetProperty</a> in the <i>AWS IoT SiteWise API Reference</i>.</p>',
    required: [],
  })
  .openapi('AssetPropertyVariant')

const AssetPropertyTimeInSecondsSchema = z.string().openapi('AssetPropertyTimeInSeconds')

const AssetPropertyOffsetInNanosSchema = z.string().openapi('AssetPropertyOffsetInNanos')

const AssetPropertyTimestampSchema = z
  .object({
    timeInSeconds: AssetPropertyTimeInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp, in seconds, in the Unix epoch format. The valid range is between 1-31556889864403199.',
        }),
    ),
    offsetInNanos: AssetPropertyOffsetInNanosSchema.and(
      z
        .any()
        .openapi({
          description:
            'The nanosecond offset converted from <code>timeInSeconds</code>. The valid range is between 0-999999999.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['timeInSeconds'],
    description:
      '<p>A structure that contains timestamp information. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TimeInNanos.html">TimeInNanos</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>You must use expressions for all parameters in <code>AssetPropertyTimestamp</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>timeInSeconds</code> parameter can be <code>\'1586400675\'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>offsetInNanos</code> parameter can be <code>$variable.time</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>timeInSeconds</code> parameter uses a substitution template.</p> <p> <code>\'${$input.TemperatureInput.sensorData.timestamp / 1000}\'</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p>',
  })
  .openapi('AssetPropertyTimestamp')

const AssetPropertyQualitySchema = z.string().openapi('AssetPropertyQuality')

const AssetPropertyValueSchema = z
  .object({
    value: AssetPropertyVariantSchema.and(
      z.any().openapi({ description: 'The value to send to an asset property.' }),
    ).exactOptional(),
    timestamp: AssetPropertyTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp associated with the asset property value. The default is the current event time.',
        }),
    ).exactOptional(),
    quality: AssetPropertyQualitySchema.and(
      z
        .any()
        .openapi({
          description:
            "The quality of the asset property value. The value must be <code>'GOOD'</code>, <code>'BAD'</code>, or <code>'UNCERTAIN'</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A structure that contains value information. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html">AssetPropertyValue</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>You must use expressions for all parameters in <code>AssetPropertyValue</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>quality</code> parameter can be <code>\'GOOD\'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>quality</code> parameter can be <code>$input.TemperatureInput.sensorData.quality</code>.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p>',
    required: [],
  })
  .openapi('AssetPropertyValue')

const IotSiteWiseActionSchema = z
  .object({
    entryId: AssetPropertyEntryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for this entry. You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier.',
        }),
    ).exactOptional(),
    assetId: AssetIdSchema.and(
      z.any().openapi({ description: 'The ID of the asset that has the specified property.' }),
    ).exactOptional(),
    propertyId: AssetPropertyIdSchema.and(
      z.any().openapi({ description: 'The ID of the asset property.' }),
    ).exactOptional(),
    propertyAlias: AssetPropertyAliasSchema.and(
      z.any().openapi({ description: 'The alias of the asset property.' }),
    ).exactOptional(),
    propertyValue: AssetPropertyValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value to send to the asset property. This value contains timestamp, quality, and value (TQV) information. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Sends information about the detector model instance and the event that triggered the action to a specified asset property in AWS IoT SiteWise.</p> <p>You must use expressions for all parameters in <code>IotSiteWiseAction</code>. The expressions accept literals, operators, functions, references, and substitutions templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>propertyAlias</code> parameter can be <code>\'/company/windfarm/3/turbine/7/temperature\'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>assetId</code> parameter can be <code>$input.TurbineInput.assetId1</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>propertyAlias</code> parameter uses a substitution template. </p> <p> <code>\'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/ ${$input.TemperatureInput.sensorData.turbineID}/temperature\'</code> </p> </li> </ul> <p>You must specify either <code>propertyAlias</code> or both <code>assetId</code> and <code>propertyId</code> to identify the target asset property in AWS IoT SiteWise.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p>',
    required: [],
  })
  .openapi('IotSiteWiseAction')

type ActionType = {
  setVariable?: z.infer<typeof SetVariableActionSchema> & { [key: string]: unknown }
  sns?: z.infer<typeof SNSTopicPublishActionSchema> & { [key: string]: unknown }
  iotTopicPublish?: z.infer<typeof IotTopicPublishActionSchema> & { [key: string]: unknown }
  setTimer?: z.infer<typeof SetTimerActionSchema> & { [key: string]: unknown }
  clearTimer?: z.infer<typeof ClearTimerActionSchema> & { [key: string]: unknown }
  resetTimer?: z.infer<typeof ResetTimerActionSchema> & { [key: string]: unknown }
  lambda?: z.infer<typeof LambdaActionSchema> & { [key: string]: unknown }
  iotEvents?: z.infer<typeof IotEventsActionSchema> & { [key: string]: unknown }
  sqs?: z.infer<typeof SqsActionSchema> & { [key: string]: unknown }
  firehose?: z.infer<typeof FirehoseActionSchema> & { [key: string]: unknown }
  dynamoDB?: z.infer<typeof DynamoDBActionSchema> & { [key: string]: unknown }
  dynamoDBv2?: z.infer<typeof DynamoDBv2ActionSchema> & { [key: string]: unknown }
  iotSiteWise?: z.infer<typeof IotSiteWiseActionSchema> & { [key: string]: unknown }
}

const IotEventsInputIdentifierSchema = z
  .object({
    inputName: InputNameSchema.and(
      z.any().openapi({ description: ' The name of the input routed to AWS IoT Events. ' }),
    ),
  })
  .openapi({
    required: ['inputName'],
    description: ' The identifier of the input routed to AWS IoT Events. ',
  })
  .openapi('IotEventsInputIdentifier')

const AssetModelIdSchema = z.string().openapi('AssetModelId')

const IotSiteWiseAssetModelPropertyIdentifierSchema = z
  .object({
    assetModelId: AssetModelIdSchema.and(
      z.any().openapi({ description: ' The ID of the AWS IoT SiteWise asset model. ' }),
    ),
    propertyId: AssetPropertyIdSchema.and(
      z.any().openapi({ description: ' The ID of the AWS IoT SiteWise asset property. ' }),
    ),
  })
  .openapi({
    required: ['assetModelId', 'propertyId'],
    description: ' The asset model property identifer of the input routed from AWS IoT SiteWise. ',
  })
  .openapi('IotSiteWiseAssetModelPropertyIdentifier')

const IotSiteWiseInputIdentifierSchema = z
  .object({
    iotSiteWiseAssetModelPropertyIdentifier: IotSiteWiseAssetModelPropertyIdentifierSchema.and(
      z
        .any()
        .openapi({ description: ' The identifier of the AWS IoT SiteWise asset model property. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' The identifer of the input routed from AWS IoT SiteWise. ',
    required: [],
  })
  .openapi('IotSiteWiseInputIdentifier')

type InputIdentifierType = {
  iotEventsInputIdentifier?: z.infer<typeof IotEventsInputIdentifierSchema> & {
    [key: string]: unknown
  }
  iotSiteWiseInputIdentifier?: z.infer<typeof IotSiteWiseInputIdentifierSchema> & {
    [key: string]: unknown
  }
}

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const AlarmModelArnSchema = z.string().openapi('AlarmModelArn')

const AlarmModelVersionSchema = z.string().min(1).max(128).openapi('AlarmModelVersion')

const AlarmModelVersionStatusSchema = z
  .enum(['ACTIVE', 'ACTIVATING', 'INACTIVE', 'FAILED'])
  .openapi('AlarmModelVersionStatus')

const CreateAlarmModelResponseSchema = z
  .object({
    creationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time the alarm model was created, in the Unix epoch format.',
        }),
    ).exactOptional(),
    alarmModelArn: AlarmModelArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the alarm model. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.',
        }),
    ).exactOptional(),
    alarmModelVersion: AlarmModelVersionSchema.and(
      z.any().openapi({ description: 'The version of the alarm model.' }),
    ).exactOptional(),
    lastUpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time the alarm model was last updated, in the Unix epoch format.',
        }),
    ).exactOptional(),
    status: AlarmModelVersionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the alarm model. The status can be one of the following values:</p> <ul> <li> <p> <code>ACTIVE</code> - The alarm model is active and it's ready to evaluate data.</p> </li> <li> <p> <code>ACTIVATING</code> - AWS IoT Events is activating your alarm model. Activating an alarm model can take up to a few minutes.</p> </li> <li> <p> <code>INACTIVE</code> - The alarm model is inactive, so it isn't ready to evaluate data. Check your alarm model information and update the alarm model.</p> </li> <li> <p> <code>FAILED</code> - You couldn't create or update the alarm model. Check your alarm model information and try again.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateAlarmModelResponse')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    key: TagKeySchema.and(z.any().openapi({ description: "The tag's key." })),
    value: TagValueSchema.and(z.any().openapi({ description: "The tag's value." })),
  })
  .openapi({
    required: ['key', 'value'],
    description: 'Metadata that can be used to manage the resource.',
  })
  .openapi('Tag')

const InputPropertySchema = z.string().min(1).max(512).openapi('InputProperty')

const ComparisonOperatorSchema = z
  .enum(['GREATER', 'GREATER_OR_EQUAL', 'LESS', 'LESS_OR_EQUAL', 'EQUAL', 'NOT_EQUAL'])
  .openapi('ComparisonOperator')

const ThresholdSchema = z.string().min(1).max(512).openapi('Threshold')

const SimpleRuleSchema = z
  .object({
    inputProperty: InputPropertySchema.and(
      z
        .any()
        .openapi({
          description:
            'The value on the left side of the comparison operator. You can specify an AWS IoT Events input attribute as an input property.',
        }),
    ),
    comparisonOperator: ComparisonOperatorSchema.and(
      z.any().openapi({ description: 'The comparison operator.' }),
    ),
    threshold: ThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value on the right side of the comparison operator. You can enter a number or specify an AWS IoT Events input attribute.',
        }),
    ),
  })
  .openapi({
    required: ['inputProperty', 'comparisonOperator', 'threshold'],
    description:
      'A rule that compares an input property value to a threshold value with a comparison operator.',
  })
  .openapi('SimpleRule')

const NotificationTargetActionsSchema = z
  .object({ lambdaAction: LambdaActionSchema.exactOptional() })
  .openapi({
    description:
      'Specifies an AWS Lambda function to manage alarm notifications. You can create one or use the <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html">AWS Lambda function provided by AWS IoT Events</a>.',
    required: [],
  })
  .openapi('NotificationTargetActions')

const SMSSenderIdSchema = z.string().openapi('SMSSenderId')

const NotificationAdditionalMessageSchema = z.string().openapi('NotificationAdditionalMessage')

const IdentityStoreIdSchema = z.string().openapi('IdentityStoreId')

const SSOReferenceIdSchema = z.string().openapi('SSOReferenceId')

const SSOIdentitySchema = z
  .object({
    identityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The ID of the AWS SSO identity store.' }),
    ),
    userId: SSOReferenceIdSchema.and(
      z.any().openapi({ description: 'The user ID.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['identityStoreId'],
    description:
      'Contains information about your identity source in AWS Single Sign-On. For more information, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">AWS Single Sign-On User Guide</a>.',
  })
  .openapi('SSOIdentity')

const RecipientDetailSchema = z
  .object({
    ssoIdentity: SSOIdentitySchema.and(
      z
        .any()
        .openapi({ description: 'The AWS Single Sign-On (AWS SSO) authentication information.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The information that identifies the recipient.', required: [] })
  .openapi('RecipientDetail')

const RecipientDetailsSchema = z.array(RecipientDetailSchema).min(1).openapi('RecipientDetails')

const SMSConfigurationSchema = z
  .object({
    senderId: SMSSenderIdSchema.and(
      z.any().openapi({ description: 'The sender ID.' }),
    ).exactOptional(),
    additionalMessage: NotificationAdditionalMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The message that you want to send. The message can be up to 200 characters.',
        }),
    ).exactOptional(),
    recipients: RecipientDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies one or more recipients who receive the message.</p> <important> <p>You must <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/addusers.html">add the users that receive SMS messages to your AWS SSO store</a>.</p> </important>',
        }),
    ),
  })
  .openapi({
    required: ['recipients'],
    description: 'Contains the configuration information of SMS notifications.',
  })
  .openapi('SMSConfiguration')

const SMSConfigurationsSchema = z.array(SMSConfigurationSchema).min(1).openapi('SMSConfigurations')

const FromEmailSchema = z.string().openapi('FromEmail')

const EmailSubjectSchema = z.string().openapi('EmailSubject')

const EmailContentSchema = z
  .object({
    subject: EmailSubjectSchema.and(
      z.any().openapi({ description: 'The subject of the email.' }),
    ).exactOptional(),
    additionalMessage: NotificationAdditionalMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The message that you want to send. The message can be up to 200 characters.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains the subject and message of an email.', required: [] })
  .openapi('EmailContent')

const EmailRecipientsSchema = z
  .object({
    to: RecipientDetailsSchema.and(
      z.any().openapi({ description: 'Specifies one or more recipients who receive the email.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains the information of one or more recipients who receive the emails.</p> <important> <p>You must <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/addusers.html">add the users that receive emails to your AWS SSO store</a>.</p> </important>',
    required: [],
  })
  .openapi('EmailRecipients')

const EmailConfigurationSchema = z
  .object({
    from: FromEmailSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The email address that sends emails.</p> <important> <p>If you use the AWS IoT Events managed AWS Lambda function to manage your emails, you must <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html">verify the email address that sends emails in Amazon SES</a>.</p> </important>',
        }),
    ),
    content: EmailContentSchema.and(
      z.any().openapi({ description: 'Contains the subject and message of an email.' }),
    ).exactOptional(),
    recipients: EmailRecipientsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains the information of one or more recipients who receive the emails.</p> <important> <p>You must <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/addusers.html">add the users that receive emails to your AWS SSO store</a>.</p> </important>',
        }),
    ),
  })
  .openapi({
    required: ['from', 'recipients'],
    description: 'Contains the configuration information of email notifications.',
  })
  .openapi('EmailConfiguration')

const EmailConfigurationsSchema = z
  .array(EmailConfigurationSchema)
  .min(1)
  .openapi('EmailConfigurations')

const NotificationActionSchema = z
  .object({
    action: NotificationTargetActionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies an AWS Lambda function to manage alarm notifications. You can create one or use the <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html">AWS Lambda function provided by AWS IoT Events</a>.',
        }),
    ),
    smsConfigurations: SMSConfigurationsSchema.and(
      z
        .any()
        .openapi({ description: 'Contains the configuration information of SMS notifications.' }),
    ).exactOptional(),
    emailConfigurations: EmailConfigurationsSchema.and(
      z
        .any()
        .openapi({ description: 'Contains the configuration information of email notifications.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['action'],
    description:
      'Contains the notification settings of an alarm model. The settings apply to all alarms that were created based on this alarm model.',
  })
  .openapi('NotificationAction')

const NotificationActionsSchema = z
  .array(NotificationActionSchema)
  .min(1)
  .openapi('NotificationActions')

const AlarmActionSchema = z
  .object({
    sns: SNSTopicPublishActionSchema.exactOptional(),
    iotTopicPublish: IotTopicPublishActionSchema.exactOptional(),
    lambda: LambdaActionSchema.exactOptional(),
    iotEvents: IotEventsActionSchema.exactOptional(),
    sqs: SqsActionSchema.exactOptional(),
    firehose: FirehoseActionSchema.exactOptional(),
    dynamoDB: DynamoDBActionSchema.exactOptional(),
    dynamoDBv2: DynamoDBv2ActionSchema.exactOptional(),
    iotSiteWise: IotSiteWiseActionSchema.exactOptional(),
  })
  .openapi({
    description:
      'Specifies one of the following actions to receive notifications when the alarm state changes.',
    required: [],
  })
  .openapi('AlarmAction')

const AlarmActionsSchema = z.array(AlarmActionSchema).openapi('AlarmActions')

const DisabledOnInitializationSchema = z.boolean().openapi('DisabledOnInitialization')

const InitializationConfigurationSchema = z
  .object({
    disabledOnInitialization: DisabledOnInitializationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value must be <code>TRUE</code> or <code>FALSE</code>. If <code>FALSE</code>, all alarm instances created based on the alarm model are activated. The default value is <code>TRUE</code>.',
        }),
    ),
  })
  .openapi({
    required: ['disabledOnInitialization'],
    description:
      'Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model.',
  })
  .openapi('InitializationConfiguration')

const AcknowledgeFlowEnabledSchema = z.boolean().openapi('AcknowledgeFlowEnabled')

const AcknowledgeFlowSchema = z
  .object({
    enabled: AcknowledgeFlowEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            "The value must be <code>TRUE</code> or <code>FALSE</code>. If <code>TRUE</code>, you receive a notification when the alarm state changes. You must choose to acknowledge the notification before the alarm state can return to <code>NORMAL</code>. If <code>FALSE</code>, you won't receive notifications. The alarm automatically changes to the <code>NORMAL</code> state when the input property value returns to the specified range.",
        }),
    ),
  })
  .openapi({
    required: ['enabled'],
    description: 'Specifies whether to get notified for alarm state changes.',
  })
  .openapi('AcknowledgeFlow')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const ResourceAlreadyExistsExceptionSchema = z.any().openapi('ResourceAlreadyExistsException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const InternalFailureExceptionSchema = z.any().openapi('InternalFailureException')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const DetectorModelNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_-]+$/)
  .min(1)
  .max(128)
  .openapi('DetectorModelName')

const DetectorModelVersionSchema = z.string().min(1).max(128).openapi('DetectorModelVersion')

const DetectorModelDescriptionSchema = z.string().max(128).openapi('DetectorModelDescription')

const DetectorModelArnSchema = z.string().openapi('DetectorModelArn')

const DetectorModelVersionStatusSchema = z
  .enum(['ACTIVE', 'ACTIVATING', 'INACTIVE', 'DEPRECATED', 'DRAFT', 'PAUSED', 'FAILED'])
  .openapi('DetectorModelVersionStatus')

const AttributeJsonPathSchema = z
  .string()
  .regex(/^((`[\w\- ]+`)|([\w\-]+))(\.((`[\w- ]+`)|([\w\-]+)))*$/)
  .min(1)
  .max(128)
  .openapi('AttributeJsonPath')

const EvaluationMethodSchema = z.enum(['BATCH', 'SERIAL']).openapi('EvaluationMethod')

const DetectorModelConfigurationSchema = z
  .object({
    detectorModelName: DetectorModelNameSchema.and(
      z.any().openapi({ description: 'The name of the detector model.' }),
    ).exactOptional(),
    detectorModelVersion: DetectorModelVersionSchema.and(
      z.any().openapi({ description: 'The version of the detector model.' }),
    ).exactOptional(),
    detectorModelDescription: DetectorModelDescriptionSchema.and(
      z.any().openapi({ description: 'A brief description of the detector model.' }),
    ).exactOptional(),
    detectorModelArn: DetectorModelArnSchema.and(
      z.any().openapi({ description: 'The ARN of the detector model.' }),
    ).exactOptional(),
    roleArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the role that grants permission to AWS IoT Events to perform its operations.',
        }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time the detector model was created.' }),
    ).exactOptional(),
    lastUpdateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time the detector model was last updated.' }),
    ).exactOptional(),
    status: DetectorModelVersionStatusSchema.and(
      z.any().openapi({ description: 'The status of the detector model.' }),
    ).exactOptional(),
    key: AttributeJsonPathSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value used to identify a detector instance. When a device or system sends input, a new detector instance with a unique key value is created. AWS IoT Events can continue to route input to its corresponding detector instance based on this identifying information. </p> <p>This parameter uses a JSON-path expression to select the attribute-value pair in the message payload that is used for identification. To route the message to the correct detector instance, the device must send a message payload that contains the same attribute-value.</p>',
        }),
    ).exactOptional(),
    evaluationMethod: EvaluationMethodSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the order in which events are evaluated and how actions are executed. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about how the detector model is configured.', required: [] })
  .openapi('DetectorModelConfiguration')

const CreateDetectorModelResponseSchema = z
  .object({
    detectorModelConfiguration: DetectorModelConfigurationSchema.and(
      z.any().openapi({ description: 'Information about how the detector model is configured.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDetectorModelResponse')

const StateNameSchema = z.string().min(1).max(128).openapi('StateName')

const EventNameSchema = z.string().max(128).openapi('EventName')

const ConditionSchema = z.string().max(512).openapi('Condition')

const ActionSchema: z.ZodType<ActionType> = z
  .lazy(() =>
    z
      .object({
        setVariable: SetVariableActionSchema.and(
          z.any().openapi({ description: 'Sets a variable to a specified value.' }),
        ).exactOptional(),
        sns: SNSTopicPublishActionSchema.and(
          z.any().openapi({ description: 'Sends an Amazon SNS message.' }),
        ).exactOptional(),
        iotTopicPublish: IotTopicPublishActionSchema.and(
          z
            .any()
            .openapi({
              description:
                'Publishes an MQTT message with the given topic to the AWS IoT message broker.',
            }),
        ).exactOptional(),
        setTimer: SetTimerActionSchema.and(
          z.any().openapi({ description: 'Information needed to set the timer.' }),
        ).exactOptional(),
        clearTimer: ClearTimerActionSchema.and(
          z.any().openapi({ description: 'Information needed to clear the timer.' }),
        ).exactOptional(),
        resetTimer: ResetTimerActionSchema.and(
          z.any().openapi({ description: 'Information needed to reset the timer.' }),
        ).exactOptional(),
        lambda: LambdaActionSchema.and(
          z
            .any()
            .openapi({
              description:
                'Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.',
            }),
        ).exactOptional(),
        iotEvents: IotEventsActionSchema.and(
          z
            .any()
            .openapi({
              description:
                'Sends AWS IoT Events input, which passes information about the detector model instance and the event that triggered the action.',
            }),
        ).exactOptional(),
        sqs: SqsActionSchema.and(
          z
            .any()
            .openapi({
              description:
                'Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.',
            }),
        ).exactOptional(),
        firehose: FirehoseActionSchema.and(
          z
            .any()
            .openapi({
              description:
                'Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.',
            }),
        ).exactOptional(),
        dynamoDB: DynamoDBActionSchema.and(
          z
            .any()
            .openapi({
              description:
                'Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html">Actions</a> in <i>AWS IoT Events Developer Guide</i>.',
            }),
        ).exactOptional(),
        dynamoDBv2: DynamoDBv2ActionSchema.and(
          z
            .any()
            .openapi({
              description:
                'Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html">Actions</a> in <i>AWS IoT Events Developer Guide</i>.',
            }),
        ).exactOptional(),
        iotSiteWise: IotSiteWiseActionSchema.and(
          z
            .any()
            .openapi({
              description:
                'Sends information about the detector model instance and the event that triggered the action to an asset property in AWS IoT SiteWise .',
            }),
        ).exactOptional(),
      })
      .openapi({
        description: 'An action to be performed when the <code>condition</code> is TRUE.',
        required: [],
      }),
  )
  .openapi('Action')

const ActionsSchema = z.array(ActionSchema).openapi('Actions')

const EventSchema = z
  .object({
    eventName: EventNameSchema.and(z.any().openapi({ description: 'The name of the event.' })),
    condition: ConditionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional. The Boolean expression that, when TRUE, causes the <code>actions</code> to be performed. If not present, the actions are performed (=TRUE). If the expression result is not a Boolean value, the actions are not performed (=FALSE).',
        }),
    ).exactOptional(),
    actions: ActionsSchema.and(
      z.any().openapi({ description: 'The actions to be performed.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['eventName'],
    description:
      'Specifies the <code>actions</code> to be performed when the <code>condition</code> evaluates to TRUE.',
  })
  .openapi('Event')

const EventsSchema = z.array(EventSchema).openapi('Events')

const TransitionEventSchema = z
  .object({
    eventName: EventNameSchema.and(
      z.any().openapi({ description: 'The name of the transition event.' }),
    ),
    condition: ConditionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Required. A Boolean expression that when TRUE causes the actions to be performed and the <code>nextState</code> to be entered.',
        }),
    ),
    actions: ActionsSchema.and(
      z.any().openapi({ description: 'The actions to be performed.' }),
    ).exactOptional(),
    nextState: StateNameSchema.and(z.any().openapi({ description: 'The next state to enter.' })),
  })
  .openapi({
    required: ['eventName', 'condition', 'nextState'],
    description:
      'Specifies the actions performed and the next state entered when a <code>condition</code> evaluates to TRUE.',
  })
  .openapi('TransitionEvent')

const TransitionEventsSchema = z.array(TransitionEventSchema).openapi('TransitionEvents')

const OnInputLifecycleSchema = z
  .object({
    events: EventsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the actions performed when the <code>condition</code> evaluates to TRUE.',
        }),
    ).exactOptional(),
    transitionEvents: TransitionEventsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the actions performed, and the next state entered, when a <code>condition</code> evaluates to TRUE.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the actions performed when the <code>condition</code> evaluates to TRUE.',
    required: [],
  })
  .openapi('OnInputLifecycle')

const OnEnterLifecycleSchema = z
  .object({
    events: EventsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the actions that are performed when the state is entered and the <code>condition</code> is <code>TRUE</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'When entering this state, perform these <code>actions</code> if the <code>condition</code> is TRUE.',
    required: [],
  })
  .openapi('OnEnterLifecycle')

const OnExitLifecycleSchema = z
  .object({
    events: EventsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code>actions</code> that are performed when the state is exited and the <code>condition</code> is <code>TRUE</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'When exiting this state, perform these <code>actions</code> if the specified <code>condition</code> is <code>TRUE</code>.',
    required: [],
  })
  .openapi('OnExitLifecycle')

const StateSchema = z
  .object({
    stateName: StateNameSchema.and(z.any().openapi({ description: 'The name of the state.' })),
    onInput: OnInputLifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            'When an input is received and the <code>condition</code> is TRUE, perform the specified <code>actions</code>.',
        }),
    ).exactOptional(),
    onEnter: OnEnterLifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            'When entering this state, perform these <code>actions</code> if the <code>condition</code> is TRUE.',
        }),
    ).exactOptional(),
    onExit: OnExitLifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            'When exiting this state, perform these <code>actions</code> if the specified <code>condition</code> is <code>TRUE</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['stateName'],
    description: 'Information that defines a state of a detector.',
  })
  .openapi('State')

const StatesSchema = z.array(StateSchema).min(1).openapi('States')

const InputDescriptionSchema = z.string().max(128).openapi('InputDescription')

const InputArnSchema = z.string().openapi('InputArn')

const InputStatusSchema = z
  .enum(['CREATING', 'UPDATING', 'ACTIVE', 'DELETING'])
  .openapi('InputStatus')

const InputConfigurationSchema = z
  .object({
    inputName: InputNameSchema.and(z.any().openapi({ description: 'The name of the input.' })),
    inputDescription: InputDescriptionSchema.and(
      z.any().openapi({ description: 'A brief description of the input.' }),
    ).exactOptional(),
    inputArn: InputArnSchema.and(z.any().openapi({ description: 'The ARN of the input.' })),
    creationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time the input was created.' }),
    ),
    lastUpdateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The last time the input was updated.' }),
    ),
    status: InputStatusSchema.and(z.any().openapi({ description: 'The status of the input.' })),
  })
  .openapi({
    required: ['inputName', 'inputArn', 'creationTime', 'lastUpdateTime', 'status'],
    description: 'Information about the configuration of an input.',
  })
  .openapi('InputConfiguration')

const CreateInputResponseSchema = z
  .object({
    inputConfiguration: InputConfigurationSchema.and(
      z.any().openapi({ description: 'Information about the configuration of the input.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateInputResponse')

const AttributeSchema = z
  .object({
    jsonPath: AttributeJsonPathSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An expression that specifies an attribute-value pair in a JSON structure. Use this to specify an attribute from the JSON payload that is made available by the input. Inputs are derived from messages sent to AWS IoT Events (<code>BatchPutMessage</code>). Each such message contains a JSON payload. The attribute (and its paired value) specified here are available for use in the <code>condition</code> expressions used by detectors. </p> <p>Syntax: <code>&lt;field-name&gt;.&lt;field-name&gt;...</code> </p>',
        }),
    ),
  })
  .openapi({
    required: ['jsonPath'],
    description:
      'The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the AWS IoT Events system using <code>BatchPutMessage</code>. Each such message contains a JSON payload. Those attributes (and their paired values) specified here are available for use in the <code>condition</code> expressions used by detectors. ',
  })
  .openapi('Attribute')

const AttributesSchema = z.array(AttributeSchema).min(1).max(200).openapi('Attributes')

const DeleteAlarmModelResponseSchema = z.object({}).openapi('DeleteAlarmModelResponse')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const DeleteDetectorModelResponseSchema = z.object({}).openapi('DeleteDetectorModelResponse')

const DeleteInputResponseSchema = z.object({}).openapi('DeleteInputResponse')

const StatusMessageSchema = z.string().openapi('StatusMessage')

const AlarmModelNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_-]+$/)
  .min(1)
  .max(128)
  .openapi('AlarmModelName')

const AlarmModelDescriptionSchema = z.string().max(128).openapi('AlarmModelDescription')

const SeveritySchema = z.int().min(0).max(2147483647).openapi('Severity')

const AlarmRuleSchema = z
  .object({
    simpleRule: SimpleRuleSchema.and(
      z
        .any()
        .openapi({
          description:
            'A rule that compares an input property value to a threshold value with a comparison operator.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Defines when your alarm is invoked.', required: [] })
  .openapi('AlarmRule')

const AlarmNotificationSchema = z
  .object({
    notificationActions: NotificationActionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the notification settings of an alarm model. The settings apply to all alarms that were created based on this alarm model.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about one or more notification actions.',
    required: [],
  })
  .openapi('AlarmNotification')

const AlarmEventActionsSchema = z
  .object({
    alarmActions: AlarmActionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies one or more supported actions to receive notifications when the alarm state changes.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about one or more alarm actions.', required: [] })
  .openapi('AlarmEventActions')

const AlarmCapabilitiesSchema = z
  .object({
    initializationConfiguration: InitializationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model.',
        }),
    ).exactOptional(),
    acknowledgeFlow: AcknowledgeFlowSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies whether to get notified for alarm state changes.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the configuration information of alarm state changes.',
    required: [],
  })
  .openapi('AlarmCapabilities')

const DescribeAlarmModelResponseSchema = z
  .object({
    creationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time the alarm model was created, in the Unix epoch format.',
        }),
    ).exactOptional(),
    alarmModelArn: AlarmModelArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the alarm model. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.',
        }),
    ).exactOptional(),
    alarmModelVersion: AlarmModelVersionSchema.and(
      z.any().openapi({ description: 'The version of the alarm model.' }),
    ).exactOptional(),
    lastUpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time the alarm model was last updated, in the Unix epoch format.',
        }),
    ).exactOptional(),
    status: AlarmModelVersionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the alarm model. The status can be one of the following values:</p> <ul> <li> <p> <code>ACTIVE</code> - The alarm model is active and it's ready to evaluate data.</p> </li> <li> <p> <code>ACTIVATING</code> - AWS IoT Events is activating your alarm model. Activating an alarm model can take up to a few minutes.</p> </li> <li> <p> <code>INACTIVE</code> - The alarm model is inactive, so it isn't ready to evaluate data. Check your alarm model information and update the alarm model.</p> </li> <li> <p> <code>FAILED</code> - You couldn't create or update the alarm model. Check your alarm model information and try again.</p> </li> </ul>",
        }),
    ).exactOptional(),
    statusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({ description: ' Contains information about the status of the alarm model. ' }),
    ).exactOptional(),
    alarmModelName: AlarmModelNameSchema.and(
      z.any().openapi({ description: 'The name of the alarm model.' }),
    ).exactOptional(),
    alarmModelDescription: AlarmModelDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the alarm model.' }),
    ).exactOptional(),
    roleArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.',
        }),
    ).exactOptional(),
    key: AttributeJsonPathSchema.and(
      z
        .any()
        .openapi({
          description:
            'An input attribute used as a key to create an alarm. AWS IoT Events routes <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Input.html">inputs</a> associated with this key to the alarm.',
        }),
    ).exactOptional(),
    severity: SeveritySchema.and(
      z
        .any()
        .openapi({
          description: 'A non-negative integer that reflects the severity level of the alarm.',
        }),
    ).exactOptional(),
    alarmRule: AlarmRuleSchema.and(
      z.any().openapi({ description: 'Defines when your alarm is invoked.' }),
    ).exactOptional(),
    alarmNotification: AlarmNotificationSchema.and(
      z
        .any()
        .openapi({ description: 'Contains information about one or more notification actions.' }),
    ).exactOptional(),
    alarmEventActions: AlarmEventActionsSchema.and(
      z.any().openapi({ description: 'Contains information about one or more alarm actions.' }),
    ).exactOptional(),
    alarmCapabilities: AlarmCapabilitiesSchema.and(
      z
        .any()
        .openapi({ description: 'Contains the configuration information of alarm state changes.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAlarmModelResponse')

const DetectorModelDefinitionSchema = z
  .object({
    states: StatesSchema.and(
      z.any().openapi({ description: 'Information about the states of the detector.' }),
    ),
    initialStateName: StateNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The state that is entered at the creation of each detector (instance).',
        }),
    ),
  })
  .openapi({
    required: ['states', 'initialStateName'],
    description: 'Information that defines how a detector operates.',
  })
  .openapi('DetectorModelDefinition')

const DetectorModelSchema = z
  .object({
    detectorModelDefinition: DetectorModelDefinitionSchema.and(
      z.any().openapi({ description: 'Information that defines how a detector operates.' }),
    ).exactOptional(),
    detectorModelConfiguration: DetectorModelConfigurationSchema.and(
      z.any().openapi({ description: 'Information about how the detector is configured.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the detector model.', required: [] })
  .openapi('DetectorModel')

const DescribeDetectorModelResponseSchema = z
  .object({
    detectorModel: DetectorModelSchema.and(
      z.any().openapi({ description: 'Information about the detector model.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDetectorModelResponse')

const AnalysisStatusSchema = z.enum(['RUNNING', 'COMPLETE', 'FAILED']).openapi('AnalysisStatus')

const DescribeDetectorModelAnalysisResponseSchema = z
  .object({
    status: AnalysisStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the analysis activity. The status can be one of the following values:</p> <ul> <li> <p> <code>RUNNING</code> - AWS IoT Events is analyzing your detector model. This process can take several minutes to complete.</p> </li> <li> <p> <code>COMPLETE</code> - AWS IoT Events finished analyzing your detector model.</p> </li> <li> <p> <code>FAILED</code> - AWS IoT Events couldn't analyze your detector model. Try again later.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDetectorModelAnalysisResponse')

const InputDefinitionSchema = z
  .object({
    attributes: AttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the AWS IoT Events system using <code>BatchPutMessage</code>. Each such message contains a JSON payload, and those attributes (and their paired values) specified here are available for use in the <code>condition</code> expressions used by detectors that monitor this input. ',
        }),
    ),
  })
  .openapi({ required: ['attributes'], description: 'The definition of the input.' })
  .openapi('InputDefinition')

const InputSchema = z
  .object({
    inputConfiguration: InputConfigurationSchema.and(
      z.any().openapi({ description: 'Information about the configuration of an input.' }),
    ).exactOptional(),
    inputDefinition: InputDefinitionSchema.and(
      z.any().openapi({ description: 'The definition of the input.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the input.', required: [] })
  .openapi('Input')

const DescribeInputResponseSchema = z
  .object({
    input: InputSchema.and(
      z.any().openapi({ description: 'Information about the input.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeInputResponse')

const LoggingLevelSchema = z.enum(['ERROR', 'INFO', 'DEBUG']).openapi('LoggingLevel')

const LoggingEnabledSchema = z.boolean().openapi('LoggingEnabled')

const KeyValueSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\-_:]+$/)
  .min(1)
  .max(128)
  .openapi('KeyValue')

const DetectorDebugOptionSchema = z
  .object({
    detectorModelName: DetectorModelNameSchema.and(
      z.any().openapi({ description: 'The name of the detector model.' }),
    ),
    keyValue: KeyValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the input attribute key used to create the detector (the instance of the detector model).',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['detectorModelName'],
    description:
      'The detector model and the specific detectors (instances) for which the logging level is given.',
  })
  .openapi('DetectorDebugOption')

const DetectorDebugOptionsSchema = z
  .array(DetectorDebugOptionSchema)
  .min(1)
  .openapi('DetectorDebugOptions')

const LoggingOptionsSchema = z
  .object({
    roleArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the role that grants permission to AWS IoT Events to perform logging.',
        }),
    ),
    level: LoggingLevelSchema.and(z.any().openapi({ description: 'The logging level.' })),
    enabled: LoggingEnabledSchema.and(
      z.any().openapi({ description: 'If TRUE, logging is enabled for AWS IoT Events.' }),
    ),
    detectorDebugOptions: DetectorDebugOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information that identifies those detector models and their detectors (instances) for which the logging level is given.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['roleArn', 'level', 'enabled'],
    description: 'The values of the AWS IoT Events logging options.',
  })
  .openapi('LoggingOptions')

const DescribeLoggingOptionsResponseSchema = z
  .object({
    loggingOptions: LoggingOptionsSchema.and(
      z
        .any()
        .openapi({ description: 'The current settings of the AWS IoT Events logging options.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeLoggingOptionsResponse')

const UnsupportedOperationExceptionSchema = z.any().openapi('UnsupportedOperationException')

const AnalysisTypeSchema = z.string().openapi('AnalysisType')

const AnalysisResultLevelSchema = z
  .enum(['INFO', 'WARNING', 'ERROR'])
  .openapi('AnalysisResultLevel')

const AnalysisMessageSchema = z.string().openapi('AnalysisMessage')

const AnalysisResultLocationPathSchema = z.string().openapi('AnalysisResultLocationPath')

const AnalysisResultLocationSchema = z
  .object({
    path: AnalysisResultLocationPathSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <a href="https://github.com/json-path/JsonPath">JsonPath</a> expression that identifies the error field in your detector model.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information that you can use to locate the field in your detector model that the analysis result references.',
    required: [],
  })
  .openapi('AnalysisResultLocation')

const AnalysisResultLocationsSchema = z
  .array(AnalysisResultLocationSchema)
  .openapi('AnalysisResultLocations')

const AnalysisResultSchema = z
  .object({
    type: AnalysisTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of the analysis result. Analyses fall into the following types based on the validators used to generate the analysis result:</p> <ul> <li> <p> <code>supported-actions</code> - You must specify AWS IoT Events supported actions that work with other AWS services in a supported AWS Region.</p> </li> <li> <p> <code>service-limits</code> - Resources or API operations can\'t exceed service quotas (also known as limits). Update your detector model or request a quota increase.</p> </li> <li> <p> <code>structure</code> - The detector model must follow a structure that AWS IoT Events supports. </p> </li> <li> <p> <code>expression-syntax</code> - Your expression must follow the required syntax.</p> </li> <li> <p> <code>data-type</code> - Data types referenced in the detector model must be compatible.</p> </li> <li> <p> <code>referenced-data</code> - You must define the data referenced in your detector model before you can use the data.</p> </li> <li> <p> <code>referenced-resource</code> - Resources that the detector model uses must be available.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-analyze-api.html">Running detector model analyses</a> in the <i>AWS IoT Events Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    level: AnalysisResultLevelSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The severity level of the analysis result. Based on the severity level, analysis results fall into three general categories:</p> <ul> <li> <p> <code>INFO</code> - An information result tells you about a significant field in your detector model. This type of result usually doesn't require immediate action.</p> </li> <li> <p> <code>WARNING</code> - A warning result draws special attention to fields that might cause issues for your detector model. We recommend that you review warnings and take necessary actions before you use your detector model in production environments. Otherwise, the detector model might not work as expected.</p> </li> <li> <p> <code>ERROR</code> - An error result notifies you about a problem found in your detector model. You must fix all errors before you can publish your detector model.</p> </li> </ul>",
        }),
    ).exactOptional(),
    message: AnalysisMessageSchema.and(
      z
        .any()
        .openapi({ description: 'Contains additional information about the analysis result.' }),
    ).exactOptional(),
    locations: AnalysisResultLocationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains one or more locations that you can use to locate the fields in your detector model that the analysis result references.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains the result of the analysis.', required: [] })
  .openapi('AnalysisResult')

const AnalysisResultsSchema = z.array(AnalysisResultSchema).openapi('AnalysisResults')

const NextTokenSchema = z.string().openapi('NextToken')

const GetDetectorModelAnalysisResultsResponseSchema = z
  .object({
    analysisResults: AnalysisResultsSchema.and(
      z.any().openapi({ description: 'Contains information about one or more analysis results.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that you can use to return the next set of results, or <code>null</code> if there are no more results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDetectorModelAnalysisResultsResponse')

const AlarmModelVersionSummarySchema = z
  .object({
    alarmModelName: AlarmModelNameSchema.and(
      z.any().openapi({ description: 'The name of the alarm model.' }),
    ).exactOptional(),
    alarmModelArn: AlarmModelArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the alarm model. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.',
        }),
    ).exactOptional(),
    alarmModelVersion: AlarmModelVersionSchema.and(
      z.any().openapi({ description: 'The version of the alarm model.' }),
    ).exactOptional(),
    roleArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.',
        }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time the alarm model was created, in the Unix epoch format.',
        }),
    ).exactOptional(),
    lastUpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time the alarm model was last updated, in the Unix epoch format.',
        }),
    ).exactOptional(),
    status: AlarmModelVersionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the alarm model. The status can be one of the following values:</p> <ul> <li> <p> <code>ACTIVE</code> - The alarm model is active and it's ready to evaluate data.</p> </li> <li> <p> <code>ACTIVATING</code> - AWS IoT Events is activating your alarm model. Activating an alarm model can take up to a few minutes.</p> </li> <li> <p> <code>INACTIVE</code> - The alarm model is inactive, so it isn't ready to evaluate data. Check your alarm model information and update the alarm model.</p> </li> <li> <p> <code>FAILED</code> - You couldn't create or update the alarm model. Check your alarm model information and try again.</p> </li> </ul>",
        }),
    ).exactOptional(),
    statusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({
          description: ' Contains information about the status of the alarm model version. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains a summary of an alarm model version.', required: [] })
  .openapi('AlarmModelVersionSummary')

const AlarmModelVersionSummariesSchema = z
  .array(AlarmModelVersionSummarySchema)
  .openapi('AlarmModelVersionSummaries')

const ListAlarmModelVersionsResponseSchema = z
  .object({
    alarmModelVersionSummaries: AlarmModelVersionSummariesSchema.and(
      z.any().openapi({ description: 'A list that summarizes each alarm model version.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that you can use to return the next set of results, or <code>null</code> if there are no more results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAlarmModelVersionsResponse')

const AlarmModelSummarySchema = z
  .object({
    creationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time the alarm model was created, in the Unix epoch format.',
        }),
    ).exactOptional(),
    alarmModelDescription: AlarmModelDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the alarm model.' }),
    ).exactOptional(),
    alarmModelName: AlarmModelNameSchema.and(
      z.any().openapi({ description: 'The name of the alarm model.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains a summary of an alarm model.', required: [] })
  .openapi('AlarmModelSummary')

const AlarmModelSummariesSchema = z.array(AlarmModelSummarySchema).openapi('AlarmModelSummaries')

const ListAlarmModelsResponseSchema = z
  .object({
    alarmModelSummaries: AlarmModelSummariesSchema.and(
      z.any().openapi({ description: 'A list that summarizes each alarm model.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that you can use to return the next set of results, or <code>null</code> if there are no more results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAlarmModelsResponse')

const DetectorModelVersionSummarySchema = z
  .object({
    detectorModelName: DetectorModelNameSchema.and(
      z.any().openapi({ description: 'The name of the detector model.' }),
    ).exactOptional(),
    detectorModelVersion: DetectorModelVersionSchema.and(
      z.any().openapi({ description: 'The ID of the detector model version.' }),
    ).exactOptional(),
    detectorModelArn: DetectorModelArnSchema.and(
      z.any().openapi({ description: 'The ARN of the detector model version.' }),
    ).exactOptional(),
    roleArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the role that grants the detector model permission to perform its tasks.',
        }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time the detector model version was created.' }),
    ).exactOptional(),
    lastUpdateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The last time the detector model version was updated.' }),
    ).exactOptional(),
    status: DetectorModelVersionStatusSchema.and(
      z.any().openapi({ description: 'The status of the detector model version.' }),
    ).exactOptional(),
    evaluationMethod: EvaluationMethodSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the order in which events are evaluated and how actions are executed. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the detector model version.', required: [] })
  .openapi('DetectorModelVersionSummary')

const DetectorModelVersionSummariesSchema = z
  .array(DetectorModelVersionSummarySchema)
  .openapi('DetectorModelVersionSummaries')

const ListDetectorModelVersionsResponseSchema = z
  .object({
    detectorModelVersionSummaries: DetectorModelVersionSummariesSchema.and(
      z.any().openapi({ description: 'Summary information about the detector model versions.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that you can use to return the next set of results, or <code>null</code> if there are no more results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDetectorModelVersionsResponse')

const DetectorModelSummarySchema = z
  .object({
    detectorModelName: DetectorModelNameSchema.and(
      z.any().openapi({ description: 'The name of the detector model.' }),
    ).exactOptional(),
    detectorModelDescription: DetectorModelDescriptionSchema.and(
      z.any().openapi({ description: 'A brief description of the detector model.' }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time the detector model was created.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the detector model.', required: [] })
  .openapi('DetectorModelSummary')

const DetectorModelSummariesSchema = z
  .array(DetectorModelSummarySchema)
  .openapi('DetectorModelSummaries')

const ListDetectorModelsResponseSchema = z
  .object({
    detectorModelSummaries: DetectorModelSummariesSchema.and(
      z.any().openapi({ description: 'Summary information about the detector models.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that you can use to return the next set of results, or <code>null</code> if there are no more results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDetectorModelsResponse')

const ResourceNameSchema = z.string().openapi('ResourceName')

const RoutedResourceSchema = z
  .object({
    name: ResourceNameSchema.and(
      z.any().openapi({ description: ' The name of the routed resource. ' }),
    ).exactOptional(),
    arn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ARN of the routed resource. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' Contains information about the routed resource. ', required: [] })
  .openapi('RoutedResource')

const RoutedResourcesSchema = z.array(RoutedResourceSchema).openapi('RoutedResources')

const ListInputRoutingsResponseSchema = z
  .object({
    routedResources: RoutedResourcesSchema.and(
      z.any().openapi({ description: ' Summary information about the routed resources. ' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The token that you can use to return the next set of results, or <code>null</code> if there are no more results. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListInputRoutingsResponse')

const InputSummarySchema = z
  .object({
    inputName: InputNameSchema.and(
      z.any().openapi({ description: 'The name of the input.' }),
    ).exactOptional(),
    inputDescription: InputDescriptionSchema.and(
      z.any().openapi({ description: 'A brief description of the input.' }),
    ).exactOptional(),
    inputArn: InputArnSchema.and(
      z.any().openapi({ description: 'The ARN of the input.' }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time the input was created.' }),
    ).exactOptional(),
    lastUpdateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The last time the input was updated.' }),
    ).exactOptional(),
    status: InputStatusSchema.and(
      z.any().openapi({ description: 'The status of the input.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the input.', required: [] })
  .openapi('InputSummary')

const InputSummariesSchema = z.array(InputSummarySchema).openapi('InputSummaries')

const ListInputsResponseSchema = z
  .object({
    inputSummaries: InputSummariesSchema.and(
      z.any().openapi({ description: 'Summary information about the inputs.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that you can use to return the next set of results, or <code>null</code> if there are no more results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListInputsResponse')

const TagsSchema = z.array(TagSchema).openapi('Tags')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagsSchema.and(
      z.any().openapi({ description: 'The list of tags assigned to the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const AnalysisIdSchema = z.string().openapi('AnalysisId')

const StartDetectorModelAnalysisResponseSchema = z
  .object({
    analysisId: AnalysisIdSchema.and(
      z.any().openapi({ description: 'The ID that you can use to retrieve the analysis result.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartDetectorModelAnalysisResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const UpdateAlarmModelResponseSchema = z
  .object({
    creationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time the alarm model was created, in the Unix epoch format.',
        }),
    ).exactOptional(),
    alarmModelArn: AlarmModelArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the alarm model. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.',
        }),
    ).exactOptional(),
    alarmModelVersion: AlarmModelVersionSchema.and(
      z.any().openapi({ description: 'The version of the alarm model.' }),
    ).exactOptional(),
    lastUpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time the alarm model was last updated, in the Unix epoch format.',
        }),
    ).exactOptional(),
    status: AlarmModelVersionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the alarm model. The status can be one of the following values:</p> <ul> <li> <p> <code>ACTIVE</code> - The alarm model is active and it's ready to evaluate data.</p> </li> <li> <p> <code>ACTIVATING</code> - AWS IoT Events is activating your alarm model. Activating an alarm model can take up to a few minutes.</p> </li> <li> <p> <code>INACTIVE</code> - The alarm model is inactive, so it isn't ready to evaluate data. Check your alarm model information and update the alarm model.</p> </li> <li> <p> <code>FAILED</code> - You couldn't create or update the alarm model. Check your alarm model information and try again.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateAlarmModelResponse')

const UpdateDetectorModelResponseSchema = z
  .object({
    detectorModelConfiguration: DetectorModelConfigurationSchema.and(
      z.any().openapi({ description: 'Information about how the detector model is configured.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateDetectorModelResponse')

const UpdateInputResponseSchema = z
  .object({
    inputConfiguration: InputConfigurationSchema.and(
      z.any().openapi({ description: 'Information about the configuration of the input.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateInputResponse')

const CreateAlarmModelRequestSchema = z
  .object({
    alarmModelName: AlarmModelNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique name that helps you identify the alarm model. You can't change this name after you create the alarm model.",
        }),
    ),
    alarmModelDescription: AlarmModelDescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'A description that tells you what the alarm model detects.' }),
    ).exactOptional(),
    roleArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of key-value pairs that contain metadata for the alarm model. The tags help you manage the alarm model. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/tagging-iotevents.html">Tagging your AWS IoT Events resources</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <p>You can create up to 50 tags for one alarm model.</p>',
        }),
    ).exactOptional(),
    key: AttributeJsonPathSchema.and(
      z
        .any()
        .openapi({
          description:
            'An input attribute used as a key to create an alarm. AWS IoT Events routes <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Input.html">inputs</a> associated with this key to the alarm.',
        }),
    ).exactOptional(),
    severity: SeveritySchema.and(
      z
        .any()
        .openapi({
          description: 'A non-negative integer that reflects the severity level of the alarm.',
        }),
    ).exactOptional(),
    alarmRule: AlarmRuleSchema.and(
      z.any().openapi({ description: 'Defines when your alarm is invoked.' }),
    ),
    alarmNotification: AlarmNotificationSchema.and(
      z
        .any()
        .openapi({ description: 'Contains information about one or more notification actions.' }),
    ).exactOptional(),
    alarmEventActions: AlarmEventActionsSchema.and(
      z.any().openapi({ description: 'Contains information about one or more alarm actions.' }),
    ).exactOptional(),
    alarmCapabilities: AlarmCapabilitiesSchema.and(
      z
        .any()
        .openapi({ description: 'Contains the configuration information of alarm state changes.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['alarmModelName', 'roleArn', 'alarmRule'],
    title: 'CreateAlarmModelRequest',
  })
  .openapi('CreateAlarmModelRequest')

const CreateDetectorModelRequestSchema = z
  .object({
    detectorModelName: DetectorModelNameSchema.and(
      z.any().openapi({ description: 'The name of the detector model.' }),
    ),
    detectorModelDefinition: DetectorModelDefinitionSchema.and(
      z.any().openapi({ description: 'Information that defines how the detectors operate.' }),
    ),
    detectorModelDescription: DetectorModelDescriptionSchema.and(
      z.any().openapi({ description: 'A brief description of the detector model.' }),
    ).exactOptional(),
    key: AttributeJsonPathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The input attribute key used to identify a device or system to create a detector (an instance of the detector model) and then to route each input received to the appropriate detector (instance). This parameter uses a JSON-path expression in the message payload of each input to specify the attribute-value pair that is used to identify the device associated with the input.',
        }),
    ).exactOptional(),
    roleArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the role that grants permission to AWS IoT Events to perform its operations.',
        }),
    ),
    tags: TagsSchema.and(
      z.any().openapi({ description: 'Metadata that can be used to manage the detector model.' }),
    ).exactOptional(),
    evaluationMethod: EvaluationMethodSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the order in which events are evaluated and how actions are executed. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['detectorModelName', 'detectorModelDefinition', 'roleArn'],
    title: 'CreateDetectorModelRequest',
  })
  .openapi('CreateDetectorModelRequest')

const CreateInputRequestSchema = z
  .object({
    inputName: InputNameSchema.and(
      z.any().openapi({ description: 'The name you want to give to the input.' }),
    ),
    inputDescription: InputDescriptionSchema.and(
      z.any().openapi({ description: 'A brief description of the input.' }),
    ).exactOptional(),
    inputDefinition: InputDefinitionSchema.and(
      z.any().openapi({ description: 'The definition of the input.' }),
    ),
    tags: TagsSchema.and(
      z.any().openapi({ description: 'Metadata that can be used to manage the input.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['inputName', 'inputDefinition'], title: 'CreateInputRequest' })
  .openapi('CreateInputRequest')

const DeleteAlarmModelRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteAlarmModelRequest' })
  .openapi('DeleteAlarmModelRequest')

const DeleteDetectorModelRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteDetectorModelRequest' })
  .openapi('DeleteDetectorModelRequest')

const DeleteInputRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteInputRequest' })
  .openapi('DeleteInputRequest')

const DescribeAlarmModelRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeAlarmModelRequest' })
  .openapi('DescribeAlarmModelRequest')

const DescribeDetectorModelAnalysisRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeDetectorModelAnalysisRequest' })
  .openapi('DescribeDetectorModelAnalysisRequest')

const DescribeDetectorModelRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeDetectorModelRequest' })
  .openapi('DescribeDetectorModelRequest')

const DescribeInputRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeInputRequest' })
  .openapi('DescribeInputRequest')

const DescribeLoggingOptionsRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeLoggingOptionsRequest' })
  .openapi('DescribeLoggingOptionsRequest')

const MaxAnalysisResultsSchema = z.int().openapi('MaxAnalysisResults')

const GetDetectorModelAnalysisResultsRequestSchema = z
  .object({})
  .openapi({ title: 'GetDetectorModelAnalysisResultsRequest' })
  .openapi('GetDetectorModelAnalysisResultsRequest')

const InputIdentifierSchema: z.ZodType<InputIdentifierType> = z
  .lazy(() =>
    z
      .object({
        iotEventsInputIdentifier: IotEventsInputIdentifierSchema.and(
          z
            .any()
            .openapi({ description: ' The identifier of the input routed to AWS IoT Events. ' }),
        ).exactOptional(),
        iotSiteWiseInputIdentifier: IotSiteWiseInputIdentifierSchema.and(
          z
            .any()
            .openapi({ description: ' The identifer of the input routed from AWS IoT SiteWise. ' }),
        ).exactOptional(),
      })
      .openapi({ description: ' The identifer of the input. ', required: [] }),
  )
  .openapi('InputIdentifier')

const MaxResultsSchema = z.int().min(1).max(250).openapi('MaxResults')

const ListAlarmModelVersionsRequestSchema = z
  .object({})
  .openapi({ title: 'ListAlarmModelVersionsRequest' })
  .openapi('ListAlarmModelVersionsRequest')

const ListAlarmModelsRequestSchema = z
  .object({})
  .openapi({ title: 'ListAlarmModelsRequest' })
  .openapi('ListAlarmModelsRequest')

const ListDetectorModelVersionsRequestSchema = z
  .object({})
  .openapi({ title: 'ListDetectorModelVersionsRequest' })
  .openapi('ListDetectorModelVersionsRequest')

const ListDetectorModelsRequestSchema = z
  .object({})
  .openapi({ title: 'ListDetectorModelsRequest' })
  .openapi('ListDetectorModelsRequest')

const ListInputRoutingsRequestSchema = z
  .object({
    inputIdentifier: InputIdentifierSchema.and(
      z.any().openapi({ description: ' The identifer of the routed input. ' }),
    ),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({ description: ' The maximum number of results to be returned per request. ' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: ' The token that you can use to return the next set of results. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['inputIdentifier'], title: 'ListInputRoutingsRequest' })
  .openapi('ListInputRoutingsRequest')

const ListInputsRequestSchema = z
  .object({})
  .openapi({ title: 'ListInputsRequest' })
  .openapi('ListInputsRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const PutLoggingOptionsRequestSchema = z
  .object({
    loggingOptions: LoggingOptionsSchema.and(
      z.any().openapi({ description: 'The new values of the AWS IoT Events logging options.' }),
    ),
  })
  .openapi({ required: ['loggingOptions'], title: 'PutLoggingOptionsRequest' })
  .openapi('PutLoggingOptionsRequest')

const StartDetectorModelAnalysisRequestSchema = z
  .object({ detectorModelDefinition: DetectorModelDefinitionSchema })
  .openapi({ required: ['detectorModelDefinition'], title: 'StartDetectorModelAnalysisRequest' })
  .openapi('StartDetectorModelAnalysisRequest')

const TagKeysSchema = z.array(TagKeySchema).openapi('TagKeys')

const TagResourceRequestSchema = z
  .object({
    tags: TagsSchema.and(
      z.any().openapi({ description: 'The new or modified tags for the resource.' }),
    ),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateAlarmModelRequestSchema = z
  .object({
    alarmModelDescription: AlarmModelDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the alarm model.' }),
    ).exactOptional(),
    roleArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    severity: SeveritySchema.and(
      z
        .any()
        .openapi({
          description: 'A non-negative integer that reflects the severity level of the alarm.',
        }),
    ).exactOptional(),
    alarmRule: AlarmRuleSchema.and(
      z.any().openapi({ description: 'Defines when your alarm is invoked.' }),
    ),
    alarmNotification: AlarmNotificationSchema.and(
      z
        .any()
        .openapi({ description: 'Contains information about one or more notification actions.' }),
    ).exactOptional(),
    alarmEventActions: AlarmEventActionsSchema.and(
      z.any().openapi({ description: 'Contains information about one or more alarm actions.' }),
    ).exactOptional(),
    alarmCapabilities: AlarmCapabilitiesSchema.and(
      z
        .any()
        .openapi({ description: 'Contains the configuration information of alarm state changes.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['roleArn', 'alarmRule'], title: 'UpdateAlarmModelRequest' })
  .openapi('UpdateAlarmModelRequest')

const UpdateDetectorModelRequestSchema = z
  .object({
    detectorModelDefinition: DetectorModelDefinitionSchema.and(
      z.any().openapi({ description: 'Information that defines how a detector operates.' }),
    ),
    detectorModelDescription: DetectorModelDescriptionSchema.and(
      z.any().openapi({ description: 'A brief description of the detector model.' }),
    ).exactOptional(),
    roleArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the role that grants permission to AWS IoT Events to perform its operations.',
        }),
    ),
    evaluationMethod: EvaluationMethodSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the order in which events are evaluated and how actions are executed. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['detectorModelDefinition', 'roleArn'],
    title: 'UpdateDetectorModelRequest',
  })
  .openapi('UpdateDetectorModelRequest')

const UpdateInputRequestSchema = z
  .object({
    inputDescription: InputDescriptionSchema.and(
      z.any().openapi({ description: 'A brief description of the input.' }),
    ).exactOptional(),
    inputDefinition: InputDefinitionSchema.and(
      z.any().openapi({ description: 'The definition of the input.' }),
    ),
  })
  .openapi({ required: ['inputDefinition'], title: 'UpdateInputRequest' })
  .openapi('UpdateInputRequest')

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

export const getAlarmModelsRoute = createRoute({
  method: 'get',
  path: '/alarm-models',
  description:
    'Lists the alarm models that you created. The operation returns only the metadata associated with each alarm model.',
  operationId: 'ListAlarmModels',
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
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token that you can use to return the next set of results.',
            schema: { type: 'string' },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to be returned per request.',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAlarmModelsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postAlarmModelsRoute = createRoute({
  method: 'post',
  path: '/alarm-models',
  description:
    'Creates an alarm model to monitor an AWS IoT Events input attribute. You can use the alarm to get notified when the value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html">Create an alarm model</a> in the <i>AWS IoT Events Developer Guide</i>.',
  operationId: 'CreateAlarmModel',
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
              alarmModelName: z
                .string()
                .regex(/^[a-zA-Z0-9_-]+$/)
                .min(1)
                .max(128)
                .openapi({
                  description:
                    "A unique name that helps you identify the alarm model. You can't change this name after you create the alarm model.",
                }),
              alarmModelDescription: z
                .string()
                .max(128)
                .exactOptional()
                .openapi({
                  description: 'A description that tells you what the alarm model detects.',
                }),
              roleArn: z
                .string()
                .min(1)
                .max(2048)
                .openapi({
                  description:
                    'The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.',
                }),
              tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A list of key-value pairs that contain metadata for the alarm model. The tags help you manage the alarm model. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/tagging-iotevents.html">Tagging your AWS IoT Events resources</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <p>You can create up to 50 tags for one alarm model.</p>',
                }),
              key: z
                .string()
                .regex(/^((`[\w\- ]+`)|([\w\-]+))(\.((`[\w- ]+`)|([\w\-]+)))*$/)
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({
                  description:
                    'An input attribute used as a key to create an alarm. AWS IoT Events routes <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Input.html">inputs</a> associated with this key to the alarm.',
                }),
              severity: z
                .int()
                .min(0)
                .max(2147483647)
                .exactOptional()
                .openapi({
                  description:
                    'A non-negative integer that reflects the severity level of the alarm.',
                }),
              alarmRule: z
                .object({
                  simpleRule: SimpleRuleSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A rule that compares an input property value to a threshold value with a comparison operator.',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'Defines when your alarm is invoked.', required: [] }),
              alarmNotification: z
                .object({
                  notificationActions: NotificationActionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Contains the notification settings of an alarm model. The settings apply to all alarms that were created based on this alarm model.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Contains information about one or more notification actions.',
                  required: [],
                }),
              alarmEventActions: z
                .object({
                  alarmActions: AlarmActionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies one or more supported actions to receive notifications when the alarm state changes.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Contains information about one or more alarm actions.',
                  required: [],
                }),
              alarmCapabilities: z
                .object({
                  initializationConfiguration: InitializationConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model.',
                      }),
                  ).exactOptional(),
                  acknowledgeFlow: AcknowledgeFlowSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Specifies whether to get notified for alarm state changes.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Contains the configuration information of alarm state changes.',
                  required: [],
                }),
            })
            .openapi({ required: ['alarmModelName', 'roleArn', 'alarmRule'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAlarmModelResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getDetectorModelsRoute = createRoute({
  method: 'get',
  path: '/detector-models',
  description:
    'Lists the detector models you have created. Only the metadata associated with each detector model is returned.',
  operationId: 'ListDetectorModels',
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
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token that you can use to return the next set of results.',
            schema: { type: 'string' },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to be returned per request.',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDetectorModelsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postDetectorModelsRoute = createRoute({
  method: 'post',
  path: '/detector-models',
  description: 'Creates a detector model.',
  operationId: 'CreateDetectorModel',
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
              detectorModelName: z
                .string()
                .regex(/^[a-zA-Z0-9_-]+$/)
                .min(1)
                .max(128)
                .openapi({ description: 'The name of the detector model.' }),
              detectorModelDefinition: z
                .object({
                  states: StatesSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Information about the states of the detector.' }),
                  ).exactOptional(),
                  initialStateName: StateNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The state that is entered at the creation of each detector (instance).',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'Information that defines how a detector operates.',
                  required: [],
                }),
              detectorModelDescription: z
                .string()
                .max(128)
                .exactOptional()
                .openapi({ description: 'A brief description of the detector model.' }),
              key: z
                .string()
                .regex(/^((`[\w\- ]+`)|([\w\-]+))(\.((`[\w- ]+`)|([\w\-]+)))*$/)
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({
                  description:
                    'The input attribute key used to identify a device or system to create a detector (an instance of the detector model) and then to route each input received to the appropriate detector (instance). This parameter uses a JSON-path expression in the message payload of each input to specify the attribute-value pair that is used to identify the device associated with the input.',
                }),
              roleArn: z
                .string()
                .min(1)
                .max(2048)
                .openapi({
                  description:
                    'The ARN of the role that grants permission to AWS IoT Events to perform its operations.',
                }),
              tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({
                  description: 'Metadata that can be used to manage the detector model.',
                }),
              evaluationMethod: z
                .enum(['BATCH', 'SERIAL'])
                .exactOptional()
                .openapi({
                  description:
                    'Information about the order in which events are evaluated and how actions are executed. ',
                }),
            })
            .openapi({ required: ['detectorModelName', 'detectorModelDefinition', 'roleArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDetectorModelResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getInputsRoute = createRoute({
  method: 'get',
  path: '/inputs',
  description: 'Lists the inputs you have created.',
  operationId: 'ListInputs',
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
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token that you can use to return the next set of results.',
            schema: { type: 'string' },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to be returned per request.',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListInputsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postInputsRoute = createRoute({
  method: 'post',
  path: '/inputs',
  description: 'Creates an input.',
  operationId: 'CreateInput',
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
              inputName: z
                .string()
                .regex(/^[a-zA-Z][a-zA-Z0-9_]*$/)
                .min(1)
                .max(128)
                .openapi({ description: 'The name you want to give to the input.' }),
              inputDescription: z
                .string()
                .max(128)
                .exactOptional()
                .openapi({ description: 'A brief description of the input.' }),
              inputDefinition: z
                .object({
                  attributes: AttributesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the AWS IoT Events system using <code>BatchPutMessage</code>. Each such message contains a JSON payload, and those attributes (and their paired values) specified here are available for use in the <code>condition</code> expressions used by detectors that monitor this input. ',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The definition of the input.', required: [] }),
              tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({ description: 'Metadata that can be used to manage the input.' }),
            })
            .openapi({ required: ['inputName', 'inputDefinition'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateInputResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
  },
})

export const getAlarmModelsAlarmModelNameRoute = createRoute({
  method: 'get',
  path: '/alarm-models/{alarmModelName}',
  description:
    "Retrieves information about an alarm model. If you don't specify a value for the <code>alarmModelVersion</code> parameter, the latest version is returned.",
  operationId: 'DescribeAlarmModel',
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
    params: z.object({
      alarmModelName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'alarmModelName',
            in: 'path',
            required: true,
            description: 'The name of the alarm model.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    query: z.object({
      version: z
        .string()
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            required: false,
            description: 'The version of the alarm model.',
            schema: { type: 'string', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAlarmModelResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postAlarmModelsAlarmModelNameRoute = createRoute({
  method: 'post',
  path: '/alarm-models/{alarmModelName}',
  description:
    'Updates an alarm model. Any alarms that were created based on the previous version are deleted and then created again as new data arrives.',
  operationId: 'UpdateAlarmModel',
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
    params: z.object({
      alarmModelName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'alarmModelName',
            in: 'path',
            required: true,
            description: 'The name of the alarm model.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              alarmModelDescription: z
                .string()
                .max(128)
                .exactOptional()
                .openapi({ description: 'The description of the alarm model.' }),
              roleArn: z
                .string()
                .min(1)
                .max(2048)
                .openapi({
                  description:
                    'The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.',
                }),
              severity: z
                .int()
                .min(0)
                .max(2147483647)
                .exactOptional()
                .openapi({
                  description:
                    'A non-negative integer that reflects the severity level of the alarm.',
                }),
              alarmRule: z
                .object({
                  simpleRule: SimpleRuleSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A rule that compares an input property value to a threshold value with a comparison operator.',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'Defines when your alarm is invoked.', required: [] }),
              alarmNotification: z
                .object({
                  notificationActions: NotificationActionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Contains the notification settings of an alarm model. The settings apply to all alarms that were created based on this alarm model.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Contains information about one or more notification actions.',
                  required: [],
                }),
              alarmEventActions: z
                .object({
                  alarmActions: AlarmActionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies one or more supported actions to receive notifications when the alarm state changes.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Contains information about one or more alarm actions.',
                  required: [],
                }),
              alarmCapabilities: z
                .object({
                  initializationConfiguration: InitializationConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model.',
                      }),
                  ).exactOptional(),
                  acknowledgeFlow: AcknowledgeFlowSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Specifies whether to get notified for alarm state changes.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Contains the configuration information of alarm state changes.',
                  required: [],
                }),
            })
            .openapi({ required: ['roleArn', 'alarmRule'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAlarmModelResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteAlarmModelsAlarmModelNameRoute = createRoute({
  method: 'delete',
  path: '/alarm-models/{alarmModelName}',
  description:
    "Deletes an alarm model. Any alarm instances that were created based on this alarm model are also deleted. This action can't be undone.",
  operationId: 'DeleteAlarmModel',
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
    params: z.object({
      alarmModelName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'alarmModelName',
            in: 'path',
            required: true,
            description: 'The name of the alarm model.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAlarmModelResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getDetectorModelsDetectorModelNameRoute = createRoute({
  method: 'get',
  path: '/detector-models/{detectorModelName}',
  description:
    'Describes a detector model. If the <code>version</code> parameter is not specified, information about the latest version is returned.',
  operationId: 'DescribeDetectorModel',
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
    params: z.object({
      detectorModelName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'detectorModelName',
            in: 'path',
            required: true,
            description: 'The name of the detector model.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    query: z.object({
      version: z
        .string()
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            required: false,
            description: 'The version of the detector model.',
            schema: { type: 'string', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDetectorModelResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postDetectorModelsDetectorModelNameRoute = createRoute({
  method: 'post',
  path: '/detector-models/{detectorModelName}',
  description:
    'Updates a detector model. Detectors (instances) spawned by the previous version are deleted and then re-created as new inputs arrive.',
  operationId: 'UpdateDetectorModel',
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
    params: z.object({
      detectorModelName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'detectorModelName',
            in: 'path',
            required: true,
            description: 'The name of the detector model that is updated.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              detectorModelDefinition: z
                .object({
                  states: StatesSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Information about the states of the detector.' }),
                  ).exactOptional(),
                  initialStateName: StateNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The state that is entered at the creation of each detector (instance).',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'Information that defines how a detector operates.',
                  required: [],
                }),
              detectorModelDescription: z
                .string()
                .max(128)
                .exactOptional()
                .openapi({ description: 'A brief description of the detector model.' }),
              roleArn: z
                .string()
                .min(1)
                .max(2048)
                .openapi({
                  description:
                    'The ARN of the role that grants permission to AWS IoT Events to perform its operations.',
                }),
              evaluationMethod: z
                .enum(['BATCH', 'SERIAL'])
                .exactOptional()
                .openapi({
                  description:
                    'Information about the order in which events are evaluated and how actions are executed. ',
                }),
            })
            .openapi({ required: ['detectorModelDefinition', 'roleArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDetectorModelResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteDetectorModelsDetectorModelNameRoute = createRoute({
  method: 'delete',
  path: '/detector-models/{detectorModelName}',
  description:
    'Deletes a detector model. Any active instances of the detector model are also deleted.',
  operationId: 'DeleteDetectorModel',
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
    params: z.object({
      detectorModelName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'detectorModelName',
            in: 'path',
            required: true,
            description: 'The name of the detector model to be deleted.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDetectorModelResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getInputsInputNameRoute = createRoute({
  method: 'get',
  path: '/inputs/{inputName}',
  description: 'Describes an input.',
  operationId: 'DescribeInput',
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
    params: z.object({
      inputName: z
        .string()
        .regex(/^[a-zA-Z][a-zA-Z0-9_]*$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'inputName',
            in: 'path',
            required: true,
            description: 'The name of the input.',
            schema: {
              type: 'string',
              pattern: '^[a-zA-Z][a-zA-Z0-9_]*$',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeInputResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const putInputsInputNameRoute = createRoute({
  method: 'put',
  path: '/inputs/{inputName}',
  description: 'Updates an input.',
  operationId: 'UpdateInput',
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
    params: z.object({
      inputName: z
        .string()
        .regex(/^[a-zA-Z][a-zA-Z0-9_]*$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'inputName',
            in: 'path',
            required: true,
            description: 'The name of the input you want to update.',
            schema: {
              type: 'string',
              pattern: '^[a-zA-Z][a-zA-Z0-9_]*$',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              inputDescription: z
                .string()
                .max(128)
                .exactOptional()
                .openapi({ description: 'A brief description of the input.' }),
              inputDefinition: z
                .object({
                  attributes: AttributesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the AWS IoT Events system using <code>BatchPutMessage</code>. Each such message contains a JSON payload, and those attributes (and their paired values) specified here are available for use in the <code>condition</code> expressions used by detectors that monitor this input. ',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The definition of the input.', required: [] }),
            })
            .openapi({ required: ['inputDefinition'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateInputResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const deleteInputsInputNameRoute = createRoute({
  method: 'delete',
  path: '/inputs/{inputName}',
  description: 'Deletes an input.',
  operationId: 'DeleteInput',
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
    params: z.object({
      inputName: z
        .string()
        .regex(/^[a-zA-Z][a-zA-Z0-9_]*$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'inputName',
            in: 'path',
            required: true,
            description: 'The name of the input to delete.',
            schema: {
              type: 'string',
              pattern: '^[a-zA-Z][a-zA-Z0-9_]*$',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteInputResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const getAnalysisDetectorModelsAnalysisIdRoute = createRoute({
  method: 'get',
  path: '/analysis/detector-models/{analysisId}',
  description:
    '<p>Retrieves runtime information about a detector model analysis.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>',
  operationId: 'DescribeDetectorModelAnalysis',
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
    params: z.object({
      analysisId: z
        .string()
        .openapi({
          param: {
            name: 'analysisId',
            in: 'path',
            required: true,
            description: 'The ID of the analysis result that you want to retrieve.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDetectorModelAnalysisResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getLoggingRoute = createRoute({
  method: 'get',
  path: '/logging',
  description: 'Retrieves the current settings of the AWS IoT Events logging options.',
  operationId: 'DescribeLoggingOptions',
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLoggingOptionsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const putLoggingRoute = createRoute({
  method: 'put',
  path: '/logging',
  description:
    '<p>Sets or updates the AWS IoT Events logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. If you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect.</p>',
  operationId: 'PutLoggingOptions',
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
              loggingOptions: z
                .object({
                  roleArn: AmazonResourceNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The ARN of the role that grants permission to AWS IoT Events to perform logging.',
                      }),
                  ).exactOptional(),
                  level: LoggingLevelSchema.and(
                    z.any().openapi({ description: 'The logging level.' }),
                  ).exactOptional(),
                  enabled: LoggingEnabledSchema.and(
                    z
                      .any()
                      .openapi({ description: 'If TRUE, logging is enabled for AWS IoT Events.' }),
                  ).exactOptional(),
                  detectorDebugOptions: DetectorDebugOptionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Information that identifies those detector models and their detectors (instances) for which the logging level is given.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'The values of the AWS IoT Events logging options.',
                  required: [],
                }),
            })
            .openapi({ required: ['loggingOptions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    485: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const getAnalysisDetectorModelsAnalysisIdResultsRoute = createRoute({
  method: 'get',
  path: '/analysis/detector-models/{analysisId}/results',
  description:
    '<p>Retrieves one or more analysis results of the detector model.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>',
  operationId: 'GetDetectorModelAnalysisResults',
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
    params: z.object({
      analysisId: z
        .string()
        .openapi({
          param: {
            name: 'analysisId',
            in: 'path',
            required: true,
            description: 'The ID of the analysis result that you want to retrieve.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token that you can use to return the next set of results.',
            schema: { type: 'string' },
          },
        }),
      maxResults: z
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
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to be returned per request.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDetectorModelAnalysisResultsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getAlarmModelsAlarmModelNameVersionsRoute = createRoute({
  method: 'get',
  path: '/alarm-models/{alarmModelName}/versions',
  description:
    'Lists all the versions of an alarm model. The operation returns only the metadata associated with each alarm model version.',
  operationId: 'ListAlarmModelVersions',
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
    params: z.object({
      alarmModelName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'alarmModelName',
            in: 'path',
            required: true,
            description: 'The name of the alarm model.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token that you can use to return the next set of results.',
            schema: { type: 'string' },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to be returned per request.',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAlarmModelVersionsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getDetectorModelsDetectorModelNameVersionsRoute = createRoute({
  method: 'get',
  path: '/detector-models/{detectorModelName}/versions',
  description:
    'Lists all the versions of a detector model. Only the metadata associated with each detector model version is returned.',
  operationId: 'ListDetectorModelVersions',
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
    params: z.object({
      detectorModelName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'detectorModelName',
            in: 'path',
            required: true,
            description: 'The name of the detector model whose versions are returned.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token that you can use to return the next set of results.',
            schema: { type: 'string' },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to be returned per request.',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDetectorModelVersionsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postInputRoutingsRoute = createRoute({
  method: 'post',
  path: '/input-routings',
  description: ' Lists one or more input routings. ',
  operationId: 'ListInputRoutings',
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
              inputIdentifier: z
                .object({
                  iotEventsInputIdentifier: IotEventsInputIdentifierSchema.and(
                    z
                      .any()
                      .openapi({
                        description: ' The identifier of the input routed to AWS IoT Events. ',
                      }),
                  ).exactOptional(),
                  iotSiteWiseInputIdentifier: IotSiteWiseInputIdentifierSchema.and(
                    z
                      .any()
                      .openapi({
                        description: ' The identifer of the input routed from AWS IoT SiteWise. ',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: ' The identifer of the input. ', required: [] }),
              maxResults: z
                .int()
                .min(1)
                .max(250)
                .exactOptional()
                .openapi({
                  description: ' The maximum number of results to be returned per request. ',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description: ' The token that you can use to return the next set of results. ',
                }),
            })
            .openapi({ required: ['inputIdentifier'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListInputRoutingsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags#resourceArn',
  description: 'Lists the tags (metadata) you have assigned to the resource.',
  operationId: 'ListTagsForResource',
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
    query: z.object({
      resourceArn: z
        .string()
        .min(1)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description: 'The ARN of the resource.',
            schema: { type: 'string', minLength: 1, maxLength: 2048 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags#resourceArn',
  description:
    'Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.',
  operationId: 'TagResource',
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
    query: z.object({
      resourceArn: z
        .string()
        .min(1)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description: 'The ARN of the resource.',
            schema: { type: 'string', minLength: 1, maxLength: 2048 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .array(TagSchema)
                .openapi({ description: 'The new or modified tags for the resource.' }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
})

export const postAnalysisDetectorModelsIndexRoute = createRoute({
  method: 'post',
  path: '/analysis/detector-models/',
  description:
    'Performs an analysis of your detector model. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-analyze-api.html">Troubleshooting a detector model</a> in the <i>AWS IoT Events Developer Guide</i>.',
  operationId: 'StartDetectorModelAnalysis',
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
              detectorModelDefinition: z
                .object({
                  states: StatesSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Information about the states of the detector.' }),
                  ).exactOptional(),
                  initialStateName: StateNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The state that is entered at the creation of each detector (instance).',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'Information that defines how a detector operates.',
                  required: [],
                }),
            })
            .openapi({ required: ['detectorModelDefinition'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartDetectorModelAnalysisResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags#resourceArn&tagKeys',
  description: 'Removes the given tags (metadata) from the resource.',
  operationId: 'UntagResource',
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
    query: z.object({
      resourceArn: z
        .string()
        .min(1)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description: 'The ARN of the resource.',
            schema: { type: 'string', minLength: 1, maxLength: 2048 },
          },
        }),
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'A list of the keys of the tags to be removed from the resource.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/TagKey' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
})
