type AppResponse = {
  _links?: ({ [x: string]: unknown } | null) | undefined
  accountId?: string | undefined
  apnsUseSandboxEndpoint?: (boolean | null) | undefined
  id?: string | undefined
  name?: string | undefined
  status?: 'enabled' | 'disabled' | undefined
  tlsOnly?: (boolean | null) | undefined
}
type Error = {
  code: number
  details?: ({ [x: string]: unknown } | null) | undefined
  href: string
  message: string
  statusCode: number
}
type AppPost = {
  apnsCertificate?: (string | null) | undefined
  apnsPrivateKey?: (string | null) | undefined
  apnsUseSandboxEndpoint?: (boolean | null) | undefined
  fcmKey?: (string | null) | undefined
  name: string
  status?: 'enabled' | 'disabled' | undefined
  tlsOnly?: (boolean | null) | undefined
}
type KeyResponse = {
  appId?: string | undefined
  capability?:
    | {
        [x: string]: (
          | 'publish'
          | 'subscribe'
          | 'history'
          | 'presence'
          | 'channel-metadata'
          | 'push-admin'
          | 'push-subscribe'
          | 'statistics'
        )[]
      }
    | undefined
  created?: number | undefined
  id?: string | undefined
  key?: string | undefined
  modified?: number | undefined
  name?: string | undefined
}
type KeyPost = {
  capabilities: (
    | 'publish'
    | 'subscribe'
    | 'history'
    | 'presence'
    | 'channel-metadata'
    | 'push-admin'
    | 'push-subscribe'
    | 'statistics'
  )[]
  channels: string
  name: string
}
type KeyPatch = {
  capabilities?:
    | (
        | 'publish'
        | 'subscribe'
        | 'history'
        | 'presence'
        | 'channel-metadata'
        | 'push-admin'
        | 'push-subscribe'
        | 'statistics'
      )[]
    | undefined
  channels?: string | undefined
  name?: string | undefined
}
type NamespaceResponse = {
  authenticated?: boolean | undefined
  created?: number | undefined
  id?: string | undefined
  modified?: number | undefined
  persistLast?: boolean | undefined
  persisted?: boolean | undefined
  pushEnabled?: boolean | undefined
  tlsOnly?: boolean | undefined
}
type NamespacePost = {
  authenticated?: boolean | undefined
  id: string
  persistLast?: boolean | undefined
  persisted?: boolean | undefined
  pushEnabled?: boolean | undefined
  tlsOnly?: boolean | undefined
}
type NamespacePatch = {
  authenticated?: boolean | undefined
  persistLast?: boolean | undefined
  persisted?: boolean | undefined
  pushEnabled?: boolean | undefined
  tlsOnly?: boolean | undefined
}
type QueueResponse = {
  amqp?: { queueName?: string | undefined; uri?: string | undefined } | undefined
  appId?: string | undefined
  deadletter?: boolean | undefined
  deadletterId?: (string | null) | undefined
  id?: string | undefined
  maxLength?: number | undefined
  messages?:
    | {
        ready?: (number | null) | undefined
        total?: (number | null) | undefined
        unacknowledged?: (number | null) | undefined
      }
    | undefined
  name?: string | undefined
  region?: string | undefined
  state?: string | undefined
  stats?:
    | {
        acknowledgementRate?: (number | null) | undefined
        deliveryRate?: (number | null) | undefined
        publishRate?: (number | null) | undefined
      }
    | undefined
  stomp?:
    | { destination?: string | undefined; host?: string | undefined; uri?: string | undefined }
    | undefined
  ttl?: number | undefined
}
type Queue = { maxLength: number; name: string; region: string; ttl: number }
type RuleSource = {
  channelFilter: string
  type: 'channel.message' | 'channel.presence' | 'channel.lifecycle' | 'channel.occupancy'
}
type HttpRuleResponse = {
  _links?: ({ [x: string]: unknown } | null) | undefined
  appId?: string | undefined
  created?: number | undefined
  id?: string | undefined
  modified?: number | undefined
  requestMode: 'single' | 'batch'
  ruleType: 'http'
  source: RuleSource
  status?: 'enabled' | 'disabled' | undefined
  target: {
    enveloped?: (boolean | null) | undefined
    format: 'json' | 'msgpack'
    headers?: { name?: string | undefined; value?: string | undefined }[] | undefined
    signingKeyId?: (string | null) | undefined
    url: string
  }
  version?: string | undefined
}
type IftttRuleResponse = {
  _links?: ({ [x: string]: unknown } | null) | undefined
  appId?: string | undefined
  created?: number | undefined
  id?: string | undefined
  modified?: number | undefined
  requestMode: 'single'
  ruleType: 'http/ifttt'
  source: RuleSource
  status?: 'enabled' | 'disabled' | undefined
  target: { eventName: string; webhookKey: string }
  version?: string | undefined
}
type ZapierRuleResponse = {
  _links?: ({ [x: string]: unknown } | null) | undefined
  appId?: string | undefined
  created?: number | undefined
  id?: string | undefined
  modified?: number | undefined
  requestMode: 'single' | 'batch'
  ruleType: 'http/zapier'
  source: RuleSource
  status?: 'enabled' | 'disabled' | undefined
  target: {
    headers?: { name?: string | undefined; value?: string | undefined }[] | undefined
    signingKeyId?: (string | null) | undefined
    url: string
  }
  version?: string | undefined
}
type CloudflareWorkerRuleResponse = {
  _links?: ({ [x: string]: unknown } | null) | undefined
  appId?: string | undefined
  created?: number | undefined
  id?: string | undefined
  modified?: number | undefined
  requestMode: 'single' | 'batch'
  ruleType: 'http/cloudflare-worker'
  source: RuleSource
  status?: 'enabled' | 'disabled' | undefined
  target: {
    headers?: { name?: string | undefined; value?: string | undefined }[] | undefined
    signingKeyId?: (string | null) | undefined
    url: string
  }
  version?: string | undefined
}
type AzureFunctionRuleResponse = {
  _links?: ({ [x: string]: unknown } | null) | undefined
  appId?: string | undefined
  created?: number | undefined
  id?: string | undefined
  modified?: number | undefined
  requestMode: 'single' | 'batch'
  ruleType: 'http/azure-function'
  source: RuleSource
  status?: 'enabled' | 'disabled' | undefined
  target: {
    azureAppId: string
    azureFunctionName: string
    enveloped?: (boolean | null) | undefined
    format?: 'json' | undefined
    headers?: { name?: string | undefined; value?: string | undefined }[] | undefined
    signingKeyId?: (string | null) | undefined
  }
  version?: string | undefined
}
type GoogleCloudFunctionRuleResponse = {
  _links?: ({ [x: string]: unknown } | null) | undefined
  appId?: string | undefined
  created?: number | undefined
  id?: string | undefined
  modified?: number | undefined
  requestMode: 'single' | 'batch'
  ruleType: 'http/google-cloud-function'
  source: RuleSource
  status?: 'enabled' | 'disabled' | undefined
  target: {
    enveloped?: (boolean | null) | undefined
    format?: 'json' | undefined
    functionName: string
    headers?: { name?: string | undefined; value?: string | undefined }[] | undefined
    projectId: string
    region: string
    signingKeyId?: (string | null) | undefined
  }
  version?: string | undefined
}
type AwsAccessKeysResponse = {
  accessKeyId?: string | undefined
  authenticationMode?: 'credentials' | undefined
}
type AwsAssumeRole = { assumeRoleArn: string; authenticationMode?: 'assumeRole' | undefined }
type AwsLambdaRuleResponse = {
  _links?: ({ [x: string]: unknown } | null) | undefined
  appId?: string | undefined
  created?: number | undefined
  id?: string | undefined
  modified?: number | undefined
  requestMode: 'single'
  ruleType: 'aws/lambda'
  source: RuleSource
  status?: 'enabled' | 'disabled' | undefined
  target: {
    authentication: AwsAccessKeysResponse | AwsAssumeRole
    enveloped?: (boolean | null) | undefined
    format?: string | undefined
    functionName: string
    region: string
  }
  version?: string | undefined
}
type AwsKinesisRuleResponse = {
  _links?: ({ [x: string]: unknown } | null) | undefined
  appId?: string | undefined
  created?: number | undefined
  id?: string | undefined
  modified?: number | undefined
  requestMode: 'single'
  ruleType: 'aws/kinesis'
  source: RuleSource
  status?: 'enabled' | 'disabled' | undefined
  target: {
    authentication: AwsAccessKeysResponse | AwsAssumeRole
    enveloped?: (boolean | null) | undefined
    format: 'json'
    partitionKey: string
    region: string
    streamName: string
  }
  version?: string | undefined
}
type AwsSqsRuleResponse = {
  _links?: ({ [x: string]: unknown } | null) | undefined
  appId?: string | undefined
  created?: number | undefined
  id?: string | undefined
  modified?: number | undefined
  requestMode: 'single'
  ruleType: 'aws/sqs'
  source: RuleSource
  status?: 'enabled' | 'disabled' | undefined
  target: {
    authentication: AwsAccessKeysResponse | AwsAssumeRole
    awsAccountId: string
    enveloped?: (boolean | null) | undefined
    format?: string | undefined
    queueName: string
    region: string
  }
  version?: string | undefined
}
type AmqpRuleResponse = {
  _links?: ({ [x: string]: unknown } | null) | undefined
  appId?: string | undefined
  created?: number | undefined
  id?: string | undefined
  modified?: number | undefined
  requestMode: 'single'
  ruleType: 'amqp'
  source: RuleSource
  status?: 'enabled' | 'disabled' | undefined
  target: {
    enveloped?: (boolean | null) | undefined
    format?: string | undefined
    headers?: { name?: string | undefined; value?: string | undefined }[] | undefined
    queueId: string
  }
  version?: string | undefined
}
type AmqpExternalRuleResponse = {
  _links?: ({ [x: string]: unknown } | null) | undefined
  appId?: string | undefined
  created?: number | undefined
  id?: string | undefined
  modified?: number | undefined
  requestMode: 'single'
  ruleType: 'amqp/external'
  source: RuleSource
  status?: 'enabled' | 'disabled' | undefined
  target: {
    enveloped?: (boolean | null) | undefined
    format?: string | undefined
    headers?: { name?: string | undefined; value?: string | undefined }[] | undefined
    mandatoryRoute: boolean
    messageTtl?: number | undefined
    persistentMessages: boolean
    routingKey: string
    url: string
  }
  version?: string | undefined
}
type RuleResponse =
  | HttpRuleResponse
  | IftttRuleResponse
  | ZapierRuleResponse
  | CloudflareWorkerRuleResponse
  | AzureFunctionRuleResponse
  | GoogleCloudFunctionRuleResponse
  | AwsLambdaRuleResponse
  | AwsKinesisRuleResponse
  | AwsSqsRuleResponse
  | AmqpRuleResponse
  | AmqpExternalRuleResponse
type HttpRulePost = {
  requestMode: 'single' | 'batch'
  ruleType: 'http'
  source: RuleSource
  status?: 'enabled' | 'disabled' | undefined
  target: {
    enveloped?: (boolean | null) | undefined
    format: 'json' | 'msgpack'
    headers?: { name?: string | undefined; value?: string | undefined }[] | undefined
    signingKeyId?: (string | null) | undefined
    url: string
  }
}
type IftttRulePost = {
  requestMode: 'single'
  ruleType: 'http/ifttt'
  source: RuleSource
  status?: 'enabled' | 'disabled' | undefined
  target: { eventName: string; webhookKey: string }
}
type ZapierRulePost = {
  requestMode: 'single' | 'batch'
  ruleType: 'http/zapier'
  source: RuleSource
  status?: 'enabled' | 'disabled' | undefined
  target: {
    headers?: { name?: string | undefined; value?: string | undefined }[] | undefined
    signingKeyId?: (string | null) | undefined
    url: string
  }
}
type CloudflareWorkerRulePost = {
  requestMode: 'single' | 'batch'
  ruleType: 'http/cloudflare-worker'
  source: RuleSource
  status?: 'enabled' | 'disabled' | undefined
  target: {
    headers?: { name?: string | undefined; value?: string | undefined }[] | undefined
    signingKeyId?: (string | null) | undefined
    url: string
  }
}
type AzureFunctionRulePost = {
  requestMode: 'single' | 'batch'
  ruleType: 'http/azure-function'
  source: RuleSource
  status?: 'enabled' | 'disabled' | undefined
  target: {
    azureAppId: string
    azureFunctionName: string
    enveloped?: (boolean | null) | undefined
    format?: 'json' | undefined
    headers?: { name?: string | undefined; value?: string | undefined }[] | undefined
    signingKeyId?: (string | null) | undefined
  }
}
type GoogleCloudFunctionRulePost = {
  requestMode: 'single' | 'batch'
  ruleType: 'http/google-cloud-function'
  source: RuleSource
  target: {
    enveloped?: (boolean | null) | undefined
    format?: 'json' | undefined
    functionName: string
    headers?: { name?: string | undefined; value?: string | undefined }[] | undefined
    projectId: string
    region: string
    signingKeyId?: (string | null) | undefined
  }
}
type AwsAccessKeys = {
  accessKeyId: string
  authenticationMode?: 'credentials' | undefined
  secretAccessKey: string
}
type AwsLambdaRulePost = {
  requestMode: 'single'
  ruleType: 'aws/lambda'
  source: RuleSource
  status?: 'enabled' | 'disabled' | undefined
  target: {
    authentication: AwsAccessKeys | AwsAssumeRole
    enveloped?: (boolean | null) | undefined
    functionName: string
    region: string
  }
}
type AwsKinesisRulePost = {
  requestMode: 'single'
  ruleType: 'aws/kinesis'
  source: RuleSource
  status?: 'enabled' | 'disabled' | undefined
  target: {
    authentication: AwsAccessKeys | AwsAssumeRole
    enveloped?: (boolean | null) | undefined
    format: 'json'
    partitionKey: string
    region: string
    streamName: string
  }
}
type AwsSqsRulePost = {
  requestMode: 'single'
  ruleType: 'aws/sqs'
  source: RuleSource
  status?: 'enabled' | 'disabled' | undefined
  target: {
    authentication: AwsAccessKeys | AwsAssumeRole
    awsAccountId: string
    enveloped?: (boolean | null) | undefined
    format?: string | undefined
    queueName: string
    region: string
  }
}
type AmqpRulePost = {
  requestMode: 'single'
  ruleType: 'amqp'
  source: RuleSource
  status?: 'enabled' | 'disabled' | undefined
  target: {
    enveloped?: (boolean | null) | undefined
    format?: string | undefined
    headers?: { name?: string | undefined; value?: string | undefined }[] | undefined
    queueId: string
  }
}
type AmqpExternalRulePost = {
  requestMode: 'single'
  ruleType: 'amqp/external'
  source: RuleSource
  target: {
    enveloped?: (boolean | null) | undefined
    format?: string | undefined
    headers?: { name?: string | undefined; value?: string | undefined }[] | undefined
    mandatoryRoute: boolean
    messageTtl?: number | undefined
    persistentMessages: boolean
    routingKey: string
    url: string
  }
}
type UnsupportedRuleResponse = {
  _links?: ({ [x: string]: unknown } | null) | undefined
  appId?: string | undefined
  created?: number | undefined
  id?: string | undefined
  modified?: number | undefined
  requestMode: 'single' | 'batch'
  ruleType: 'unsupported'
  source: RuleSource
  status?: 'enabled' | 'disabled' | undefined
  target: { url: string }
  version?: string | undefined
}
type RulePost =
  | HttpRulePost
  | IftttRulePost
  | ZapierRulePost
  | CloudflareWorkerRulePost
  | AzureFunctionRulePost
  | GoogleCloudFunctionRulePost
  | AwsLambdaRulePost
  | AwsKinesisRulePost
  | AwsSqsRulePost
  | AmqpRulePost
  | AmqpExternalRulePost
  | UnsupportedRuleResponse
type HttpRulePatch = {
  requestMode?: 'single' | 'batch' | undefined
  ruleType?: 'http' | undefined
  source?: RuleSource | undefined
  status?: 'enabled' | 'disabled' | undefined
  target?:
    | {
        enveloped?: (boolean | null) | undefined
        format?: 'json' | 'msgpack' | undefined
        headers?: { name?: string | undefined; value?: string | undefined }[] | undefined
        signingKeyId?: (string | null) | undefined
        url?: string | undefined
      }
    | undefined
}
type IftttRulePatch = { [x: string]: unknown }
type ZapierRulePatch = {
  requestMode?: 'single' | 'batch' | undefined
  ruleType?: 'http/zapier' | undefined
  source?: RuleSource | undefined
  status?: 'enabled' | 'disabled' | undefined
  target?:
    | {
        headers?: { name?: string | undefined; value?: string | undefined }[] | undefined
        signingKeyId?: (string | null) | undefined
        url?: string | undefined
      }
    | undefined
}
type CloudflareWorkerRulePatch = {
  requestMode?: 'single' | 'batch' | undefined
  ruleType?: 'http/cloudflare-worker' | undefined
  source?: RuleSource | undefined
  status?: 'enabled' | 'disabled' | undefined
  target?:
    | {
        headers?: { name?: string | undefined; value?: string | undefined }[] | undefined
        signingKeyId?: (string | null) | undefined
        url?: string | undefined
      }
    | undefined
}
type AzureFunctionRulePatch = {
  requestMode?: 'single' | 'batch' | undefined
  ruleType?: 'http/azure-function' | undefined
  source?: RuleSource | undefined
  status?: 'enabled' | 'disabled' | undefined
  target?:
    | {
        azureAppId?: string | undefined
        azureFunctionName?: string | undefined
        enveloped?: (boolean | null) | undefined
        format?: 'json' | undefined
        headers?: { name?: string | undefined; value?: string | undefined }[] | undefined
        signingKeyId?: (string | null) | undefined
      }
    | undefined
}
type GoogleCloudFunctionRulePatch = {
  requestMode?: 'single' | 'batch' | undefined
  ruleType?: 'http/google-cloud-function' | undefined
  source?: RuleSource | undefined
  status?: 'enabled' | 'disabled' | undefined
  target?:
    | {
        enveloped?: (boolean | null) | undefined
        format?: 'json' | undefined
        functionName?: string | undefined
        headers?: { name?: string | undefined; value?: string | undefined }[] | undefined
        projectId?: string | undefined
        region?: string | undefined
        signingKeyId?: (string | null) | undefined
      }
    | undefined
}
type AwsLambdaRulePatch = {
  requestMode: 'single'
  ruleType: 'aws/lambda'
  source: RuleSource
  status?: 'enabled' | 'disabled' | undefined
  target: {
    authentication: AwsAccessKeys | AwsAssumeRole
    enveloped?: (boolean | null) | undefined
    functionName: string
    region: string
  }
}
type AwsKinesisRulePatch = {
  requestMode?: 'single' | undefined
  ruleType?: 'aws/kinesis' | undefined
  source?: RuleSource | undefined
  status?: 'enabled' | 'disabled' | undefined
  target?:
    | {
        authentication?: AwsAccessKeys | AwsAssumeRole | undefined
        enveloped?: (boolean | null) | undefined
        format?: 'json' | undefined
        partitionKey?: string | undefined
        region?: string | undefined
        streamName?: string | undefined
      }
    | undefined
}
type AwsSqsRulePatch = {
  requestMode?: 'single' | undefined
  ruleType?: 'aws/sqs' | undefined
  source?: RuleSource | undefined
  status?: 'enabled' | 'disabled' | undefined
  target?:
    | {
        authentication?: AwsAccessKeys | AwsAssumeRole | undefined
        awsAccountId?: string | undefined
        enveloped?: (boolean | null) | undefined
        format?: string | undefined
        queueName?: string | undefined
        region?: string | undefined
      }
    | undefined
}
type AmqpRulePatch = {
  requestMode?: 'single' | undefined
  ruleType?: 'amqp' | undefined
  source?: RuleSource | undefined
  status?: 'enabled' | 'disabled' | undefined
  target?:
    | {
        enveloped?: (boolean | null) | undefined
        format?: string | undefined
        headers?: { name?: string | undefined; value?: string | undefined }[] | undefined
        queueId?: string | undefined
      }
    | undefined
}
type AmqpExternalRulePatch = {
  requestMode?: 'single' | undefined
  ruleType?: 'amqp/external' | undefined
  source?: RuleSource | undefined
  status?: 'enabled' | 'disabled' | undefined
  target?:
    | {
        enveloped?: (boolean | null) | undefined
        format?: string | undefined
        headers?: { name?: string | undefined; value?: string | undefined }[] | undefined
        mandatoryRoute?: boolean | undefined
        messageTtl?: number | undefined
        persistentMessages?: boolean | undefined
        routingKey?: string | undefined
        url?: string | undefined
      }
    | undefined
}
type RulePatch =
  | HttpRulePatch
  | IftttRulePatch
  | ZapierRulePatch
  | CloudflareWorkerRulePatch
  | AzureFunctionRulePatch
  | GoogleCloudFunctionRulePatch
  | AwsLambdaRulePatch
  | AwsKinesisRulePatch
  | AwsSqsRulePatch
  | AmqpRulePatch
  | AmqpExternalRulePatch
type AppPatch = {
  apnsCertificate?: (string | null) | undefined
  apnsPrivateKey?: (string | null) | undefined
  apnsUseSandboxEndpoint?: (boolean | null) | undefined
  fcmKey?: (string | null) | undefined
  name?: string | undefined
  status?: 'enabled' | 'disabled' | undefined
  tlsOnly?: (boolean | null) | undefined
}
type AppPkcs12 = { p12File: File; p12Pass: string }
type Me = {
  account?: { id: string; name: string } | undefined
  token?: { capabilities: string[]; id: number; name: string } | undefined
  user?: { email: string; id: number } | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/accounts/:account_id/apps': {
      $get:
        | {
            input: { param: { account_id: string } }
            output: AppResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_id: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { account_id: string } } & { json: AppPost }
            output: AppResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { account_id: string } } & { json: AppPost }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_id: string } } & { json: AppPost }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: string } } & { json: AppPost }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_id: string } } & { json: AppPost }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { account_id: string } } & { json: AppPost }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/apps/:app_id/keys': {
      $get:
        | {
            input: { param: { app_id: string } }
            output: KeyResponse[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { app_id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { app_id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { app_id: string } }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { param: { app_id: string } }; output: Error; outputFormat: 'json'; status: 504 }
      $post:
        | {
            input: { param: { app_id: string } } & { json: KeyPost }
            output: KeyResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { app_id: string } } & { json: KeyPost }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { app_id: string } } & { json: KeyPost }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string } } & { json: KeyPost }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string } } & { json: KeyPost }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string } } & { json: KeyPost }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/apps/:app_id/keys/:key_id': {
      $patch:
        | {
            input: { param: { app_id: string; key_id: string } } & { json: KeyPatch }
            output: KeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string; key_id: string } } & { json: KeyPatch }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { app_id: string; key_id: string } } & { json: KeyPatch }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; key_id: string } } & { json: KeyPatch }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; key_id: string } } & { json: KeyPatch }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; key_id: string } } & { json: KeyPatch }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { app_id: string; key_id: string } } & { json: KeyPatch }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/apps/:app_id/keys/:key_id/revoke': {
      $post:
        | {
            input: { param: { app_id: string; key_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { app_id: string; key_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; key_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; key_id: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { app_id: string; key_id: string } }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/apps/:app_id/namespaces': {
      $get:
        | {
            input: { param: { app_id: string } }
            output: NamespaceResponse[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { app_id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { app_id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { app_id: string } }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { param: { app_id: string } }; output: Error; outputFormat: 'json'; status: 504 }
      $post:
        | {
            input: { param: { app_id: string } } & { json: NamespacePost }
            output: NamespaceResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { app_id: string } } & { json: NamespacePost }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { app_id: string } } & { json: NamespacePost }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string } } & { json: NamespacePost }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string } } & { json: NamespacePost }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string } } & { json: NamespacePost }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/apps/:app_id/namespaces/:namespace_id': {
      $delete:
        | {
            input: { param: { app_id: string; namespace_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { app_id: string; namespace_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; namespace_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; namespace_id: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { app_id: string; namespace_id: string } }
            output: Error
            outputFormat: 'json'
            status: 504
          }
      $patch:
        | {
            input: { param: { app_id: string; namespace_id: string } } & { json: NamespacePatch }
            output: NamespaceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string; namespace_id: string } } & { json: NamespacePatch }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { app_id: string; namespace_id: string } } & { json: NamespacePatch }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; namespace_id: string } } & { json: NamespacePatch }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; namespace_id: string } } & { json: NamespacePatch }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { app_id: string; namespace_id: string } } & { json: NamespacePatch }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/apps/:app_id/queues': {
      $get:
        | {
            input: { param: { app_id: string } }
            output: QueueResponse[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { app_id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { app_id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { app_id: string } }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { param: { app_id: string } }; output: Error; outputFormat: 'json'; status: 503 }
        | { input: { param: { app_id: string } }; output: Error; outputFormat: 'json'; status: 504 }
      $post:
        | {
            input: { param: { app_id: string } } & { json: Queue }
            output: QueueResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { app_id: string } } & { json: Queue }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { app_id: string } } & { json: Queue }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string } } & { json: Queue }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string } } & { json: Queue }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string } } & { json: Queue }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/apps/:app_id/queues/:queue_id': {
      $delete:
        | {
            input: { param: { app_id: string; queue_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { app_id: string; queue_id: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { app_id: string; queue_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; queue_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; queue_id: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { app_id: string; queue_id: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/apps/:app_id/rules': {
      $get:
        | {
            input: { param: { app_id: string } }
            output: RuleResponse[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { app_id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { app_id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { app_id: string } }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { param: { app_id: string } }; output: Error; outputFormat: 'json'; status: 504 }
      $post:
        | {
            input: { param: { app_id: string } } & { json: RulePost }
            output: RuleResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { app_id: string } } & { json: RulePost }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { app_id: string } } & { json: RulePost }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string } } & { json: RulePost }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string } } & { json: RulePost }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string } } & { json: RulePost }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { app_id: string } } & { json: RulePost }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/apps/:app_id/rules/:rule_id': {
      $delete:
        | {
            input: { param: { app_id: string; rule_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { app_id: string; rule_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; rule_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; rule_id: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { app_id: string; rule_id: string } }
            output: Error
            outputFormat: 'json'
            status: 504
          }
      $get:
        | {
            input: { param: { app_id: string; rule_id: string } }
            output: RuleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string; rule_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; rule_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; rule_id: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { app_id: string; rule_id: string } }
            output: Error
            outputFormat: 'json'
            status: 504
          }
      $patch:
        | {
            input: { param: { app_id: string; rule_id: string } } & { json: RulePatch }
            output: RuleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string; rule_id: string } } & { json: RulePatch }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { app_id: string; rule_id: string } } & { json: RulePatch }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; rule_id: string } } & { json: RulePatch }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; rule_id: string } } & { json: RulePatch }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; rule_id: string } } & { json: RulePatch }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { app_id: string; rule_id: string } } & { json: RulePatch }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/apps/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 422 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 500 }
      $patch:
        | {
            input: { param: { id: string } } & { json: AppPatch }
            output: AppResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AppPatch }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: AppPatch }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: AppPatch }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: AppPatch }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/apps/:id/pkcs12': {
      $post:
        | {
            input: { param: { id: string } } & { form: AppPkcs12 }
            output: AppResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { form: AppPkcs12 }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { form: AppPkcs12 }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { form: AppPkcs12 }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { form: AppPkcs12 }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/me': {
      $get:
        | { input: {}; output: Me; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
    }
  },
  '/'
>
export default routes
