import { createRoute, z } from '@hono/zod-openapi'

const ErrorSchema = z
  .object({ error: z.string().openapi({ description: 'Error message' }) })
  .openapi({ required: ['error'] })
  .openapi('Error')

const FlowControlKeySchema = z
  .object({
    flowControlKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'The flow control key name' }),
    waitlistSize: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of messages waiting due to flow control configuration.',
      }),
  })
  .openapi({ required: [] })
  .openapi('FlowControlKey')

const SigningKeysSchema = z
  .object({
    current: z.string().exactOptional().openapi({ description: 'The current signing key.' }),
    next: z.string().exactOptional().openapi({ description: 'The next signing key.' }),
  })
  .openapi({ required: [] })
  .openapi('SigningKeys')

const WorkflowDLQMessageSchema = z
  .object({
    dlqId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The DLQ ID of the failed workflow message.' }),
    workflowUrl: z.string().exactOptional().openapi({ description: 'The URL of the workflow.' }),
    workflowRunId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the workflow run.' }),
    workflowCreatedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The timestamp when the workflow run was created (Unix timestamp in milliseconds).',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the failed workflow step.' }),
    method: z
      .string()
      .exactOptional()
      .openapi({ description: 'The HTTP method used for the workflow step.' }),
    header: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({ description: 'The HTTP headers sent to the workflow step.' }),
    body: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The body of the message if it is composed of utf8 chars only, empty otherwise.',
      }),
    bodyBase64: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The base64 encoded body if the body contains a non-utf8 char only, empty otherwise.',
      }),
    maxRetries: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of retries that should be attempted in case of delivery failure.',
      }),
    createdAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The unix timestamp in milliseconds when the message was created.',
      }),
    failureCallback: z
      .string()
      .exactOptional()
      .openapi({ description: 'The url where we send a callback to after the workflow fails.' }),
    callerIP: z
      .string()
      .exactOptional()
      .openapi({ description: 'IP address of the publisher of this workflow.' }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'The label assigned to the workflow run. Deprecated in favor of `labels`.',
      }),
    labels: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of labels assigned to the workflow run.' }),
    flowControlKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'The flow control key used for rate limiting.' }),
    failureFunctionState: z
      .string()
      .exactOptional()
      .openapi({ description: 'The state of the failure function if applicable.' }),
    responseStatus: z
      .int()
      .exactOptional()
      .openapi({ description: 'The HTTP status code received from the destination API.' }),
    responseHeader: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({ description: 'The HTTP response headers received from the destination API.' }),
    responseBody: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The body of the response if it is composed of utf8 chars only, empty otherwise.',
      }),
    responseBodyBase64: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The base64 encoded body of the response if the body contains a non-utf8 char only, empty otherwise.',
      }),
  })
  .openapi({ required: [] })
  .openapi('WorkflowDLQMessage')

const WaiterSchema = z
  .object({
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL that is waiting for the event notification.' }),
    headers: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({ description: 'The HTTP headers to send with the notification.' }),
    deadline: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The Unix timestamp in seconds when the wait operation times out.',
      }),
    timeoutBody: z
      .string()
      .exactOptional()
      .openapi({ description: 'The body to send if the wait times out.' }),
    timeoutUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL to call if the wait times out.' }),
    timeoutHeaders: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({ description: 'The HTTP headers to send with the timeout callback.' }),
  })
  .openapi({ required: [] })
  .openapi('Waiter')

const NotifyResponseSchema = z
  .object({
    waiter: WaiterSchema.exactOptional().openapi({ description: 'The waiter that was notified.' }),
    messageId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the notification message that was published.' }),
    deduplicated: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this notification was deduplicated.' }),
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error message if the notification failed.' }),
    workflowRunId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The workflow run ID if the notification was sent within a workflow.',
      }),
    workflowCreatedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The timestamp when the workflow run was created (Unix timestamp in milliseconds).',
      }),
  })
  .openapi({ required: [] })
  .openapi('NotifyResponse')

const StepInfoSchema = z
  .object({
    stepId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The unique identifier for this step.',
      }),
    stepName: z.string().exactOptional().openapi({ description: 'The name of the step.' }),
    stepType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of step (e.g., call, wait, sleep, invoke).' }),
    callType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The call type (e.g., step, parallelPlan, parallelResult).' }),
    messageId: z.string().exactOptional().openapi({ description: 'The message ID for this step.' }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The state of the step (STEP_SUCCESS, STEP_RETRY, STEP_FAILED, STEP_PROGRESS, STEP_CANCELED).',
      }),
    createdAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'When the step was created (Unix timestamp in milliseconds).',
      }),
    out: z.string().exactOptional().openapi({ description: 'The output/result of the step.' }),
    callUrl: z.string().exactOptional().openapi({ description: 'The URL called in this step.' }),
    callMethod: z.string().exactOptional().openapi({ description: 'The HTTP method used.' }),
    callBody: z.string().exactOptional().openapi({ description: 'The request body sent.' }),
    callHeaders: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({ description: 'The request headers sent.' }),
    callResponseStatus: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'The HTTP status code received.' }),
    callResponseBody: z
      .string()
      .exactOptional()
      .openapi({ description: 'The response body received.' }),
    callResponseHeaders: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({ description: 'The response headers received.' }),
    waitEventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The event ID being waited for (wait steps only).' }),
    waitTimeout: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the wait timed out.' }),
    invokedWorkflowRunId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The run ID of the invoked workflow (invoke steps only).' }),
    invokedWorkflowUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the invoked workflow.' }),
    retries: z
      .int()
      .exactOptional()
      .openapi({ description: 'Maximum number of retries configured.' }),
    nextDeliveryTime: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Next scheduled retry time (Unix timestamp in milliseconds).',
      }),
  })
  .openapi({ required: [] })
  .openapi('StepInfo')

const WorkflowEventSchema = z
  .object({
    time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The timestamp of the event (Unix timestamp in milliseconds).',
      }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The state of the workflow or step (e.g., RUN_STARTED, STEP_SUCCESS, RUN_FAILED).',
      }),
    workflowRunId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the workflow run.' }),
    workflowUrl: z.string().exactOptional().openapi({ description: 'The URL of the workflow.' }),
    workflowCreatedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The timestamp when the workflow run was created (Unix timestamp in milliseconds).',
      }),
    stepInfo: StepInfoSchema.exactOptional(),
    nextDeliveryTime: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The next scheduled delivery time for a retrying step (Unix timestamp in milliseconds).',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error message if the state is error.' }),
    responseStatus: z
      .int()
      .exactOptional()
      .openapi({ description: 'HTTP status code of the response for error states.' }),
    responseBody: z
      .string()
      .exactOptional()
      .openapi({ description: 'Response body for error states.' }),
    responseHeaders: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({ description: 'Response headers for error states.' }),
    headers: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({ description: 'The headers of the message.' }),
    invokerWorkflowRunId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The run ID of the workflow that started this workflow (only in RUN_STARTED).',
      }),
    invokerWorkflowUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL of the workflow that started this workflow (only in RUN_STARTED).',
      }),
    invokerWorkflowCreatedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The creation timestamp of the invoker workflow (only in RUN_STARTED).',
      }),
    workflowRunResponse: z
      .string()
      .exactOptional()
      .openapi({ description: 'The response returned by the workflow run (only in RUN_SUCCESS).' }),
    dlqId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The DLQ ID if the workflow run failed (only in RUN_FAILED).' }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Label of the workflow run. Deprecated in favor of `labels`.',
      }),
    labels: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of labels assigned to the workflow run.' }),
    callerIp: z
      .string()
      .exactOptional()
      .openapi({ description: 'IP address of the client who submitted the workflow.' }),
  })
  .openapi({ required: [] })
  .openapi('WorkflowEvent')

const GroupedStepsSchema = z
  .object({
    steps: z
      .array(StepInfoSchema)
      .exactOptional()
      .openapi({ description: 'Array of steps in this group.' }),
    type: z
      .enum(['parallel', 'sequential', 'next'])
      .exactOptional()
      .openapi({ description: 'The type of grouping (parallel, sequential, or next).' }),
  })
  .openapi({ required: [] })
  .openapi('GroupedSteps')

const InvokerContextSchema = z
  .object({
    workflowRunId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The workflow run ID of the invoker.' }),
    workflowUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The workflow URL of the invoker.' }),
    workflowRunCreatedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The creation timestamp of the invoker workflow run.',
      }),
  })
  .openapi({ required: [] })
  .openapi('InvokerContext')

const FailureFunctionSchema = z
  .object({
    messageId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The message ID of the failure callback.' }),
    url: z.string().exactOptional().openapi({ description: 'The URL of the failure callback.' }),
    state: z
      .string()
      .exactOptional()
      .openapi({ description: 'The state of the failure callback.' }),
    dlqId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The DLQ ID of the failure callback if it failed.' }),
    failHeaders: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({ description: 'The headers from the failed workflow step.' }),
    failStatus: z
      .int()
      .exactOptional()
      .openapi({ description: 'The status code from the failed workflow step.' }),
    failResponse: z
      .string()
      .exactOptional()
      .openapi({ description: 'The response body from the failed workflow step.' }),
    responseBody: z
      .string()
      .exactOptional()
      .openapi({ description: 'The response body from the failure callback attempt.' }),
    responseHeaders: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({ description: 'The response headers from the failure callback attempt.' }),
    responseStatus: z
      .int()
      .exactOptional()
      .openapi({ description: 'The response status from the failure callback attempt.' }),
    maxRetries: z
      .int()
      .exactOptional()
      .openapi({ description: 'Maximum number of retries configured for the failure callback.' }),
  })
  .openapi({ required: [] })
  .openapi('FailureFunction')

const WorkflowRunSchema = z
  .object({
    workflowRunId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier for this workflow run.' }),
    workflowUrl: z.string().exactOptional().openapi({ description: 'The URL of the workflow.' }),
    workflowState: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The current state of the workflow run \n\n| Value          | Description                                                    |\n  | -------------- | -------------------------------------------------------------- |\n  | `RUN_STARTED`  | The workflow has started to run and currently in progress.     |\n  | `RUN_SUCCESS`  | The workflow run has completed succesfully.                    |\n  | `RUN_FAILED`   | Some errors has occured and workflow failed after all retries. |\n  | `RUN_CANCELED` | The workflow run has canceled upon user request.               |\n',
      }),
    workflowRunCreatedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'When the workflow run was created (Unix timestamp in milliseconds).',
      }),
    workflowRunCompletedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'When the workflow run completed (Unix timestamp in milliseconds).',
      }),
    workflowRunCallerIp: z
      .string()
      .exactOptional()
      .openapi({ description: 'IP address of the client who triggered the workflow.' }),
    steps: z
      .array(GroupedStepsSchema)
      .exactOptional()
      .openapi({ description: 'The workflow steps grouped by execution pattern.' }),
    workflowRunResponse: z
      .string()
      .exactOptional()
      .openapi({ description: 'The response returned by the workflow run.' }),
    invoker: InvokerContextSchema.exactOptional().openapi({
      description: 'Information about the workflow that invoked this one.',
    }),
    failureFunction: FailureFunctionSchema.exactOptional().openapi({
      description: 'Information about the failure callback if configured.',
    }),
    dlqId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The DLQ ID if the workflow run failed.' }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Label assigned to the workflow run. Deprecated in favor of `labels`.',
      }),
    labels: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of labels assigned to the workflow run.' }),
    flowControlKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'Flow Control Key assigned to the workflow run.' }),
  })
  .openapi({ required: [] })
  .openapi('WorkflowRun')

const BulkActionSchema = z
  .object({
    actionId: z.string().exactOptional().openapi({ description: 'The ID of the bulk action.' }),
    kind: z
      .literal('cancel')
      .exactOptional()
      .openapi({ description: 'The kind of the bulk action.' }),
    state: z
      .enum(['IN_PROGRESS', 'FINISHED'])
      .exactOptional()
      .openapi({
        description:
          'The state of the bulk action.\n\n|Value\t|Description|\n|-------|------------|\n| IN_PROGRESS\t|The bulk action is running in the background.|\n| FINISHED\t|The bulk action has finished.|\n',
      }),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The number of in-progress workflow runs that matched the filter when the bulk action was created.',
      }),
    processed: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The number of workflow runs processed by the bulk action so far.',
      }),
    createdAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The creation time of the bulk action, in milliseconds (Unix timestamp).',
      }),
    completedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The completion time of the bulk action, in milliseconds (Unix timestamp). Only present once the bulk action has finished.',
      }),
    filter: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({
        description:
          'The filter the bulk action was created with. Keys are the filter parameter names of the bulk cancel request, such as `workflowUrl`, `label` or `fromDate`, and values are the given values.\n',
        example: {
          workflowUrl: ['https://example.com/api/workflow'],
          label: ['label_1', 'label_2'],
        },
      }),
  })
  .openapi({ required: [] })
  .openapi('BulkAction')

const BearerAuthSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  bearerFormat: 'JWT',
  description: 'QStash authentication token',
}

const BearerAuthQuerySecurityScheme = {
  type: 'apiKey',
  in: 'query',
  name: 'qstash_token',
  description: 'QStash authentication token passed as a query parameter',
}

export const postV2TriggerWorkflowUrlRoute = createRoute({
  method: 'post',
  path: '/v2/trigger/{workflowUrl}',
  tags: ['Runs'],
  summary: 'Trigger Workflow Run',
  description: 'Start a new workflow run.',
  request: {
    params: z.object({
      workflowUrl: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'workflowUrl',
            required: true,
            schema: { type: 'string' },
            description: 'The URL of the workflow to trigger.',
          },
        }),
    }),
    headers: z.object({
      'Upstash-Workflow-RunId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Workflow-RunId',
            required: false,
            schema: { type: 'string' },
            description:
              'Optional custom run ID for the workflow run. A random ID will be generated if not provided.',
          },
        }),
      'Upstash-Forward-*': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Forward-*',
            in: 'header',
            schema: { type: 'string' },
            description:
              'You can send custom headers to your workflow.\n\nTo send a custom header, prefix the header name with `Upstash-Forward-`. We will strip prefix and send them to the destination.\n\n| Header | Forwarded To Destination As |\n|--------|--------------|\n| Upstash-Forward-My-Header: my-value | My-Header: my-value |\n| Upstash-Forward-Authorization: Bearer <token> | Authorization: Bearer <token> |\n',
            required: false,
          },
        }),
      'Upstash-Retries': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(3)
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Retries',
            required: false,
            schema: { type: 'integer', default: 3 },
            description: 'Number of retries for the workflow steps in case of failure.',
          },
        }),
      'Upstash-Delay': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Delay',
            in: 'header',
            schema: { type: 'string', examples: ['50s', '1d10h30m', '10h', '1d'] },
            description:
              'Delay the message delivery.\n\nThe format of this header is `<value><unit>` where value is a number and unit is one of:\n- `s` for seconds\n- `m` for minutes\n- `h` for hours.\n- `d` for days.\n',
            required: false,
          },
          examples: ['50s', '1d10h30m', '10h', '1d'],
        }),
      'Upstash-Not-Before': z
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
            name: 'Upstash-Not-Before',
            in: 'header',
            schema: { type: 'integer' },
            description:
              'Delay the message delivery until a certain timestamp in the future.\n\nThe format is a unix timestamp in seconds, based on the UTC timezone.\n\nWhen both `Upstash-Not-Before` and `Upstash-Delay` headers are provided, `Upstash-Not-Before` will take precedence.\n',
            required: false,
          },
        }),
      'Upstash-Label': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Label',
            required: false,
            schema: { type: 'string' },
            description:
              'Optional label(s) to attach to the workflow run for easier identification in logs and DLQ.\n\nYou can assign multiple labels by providing a comma-separated list.\n\nExample: `label_1,label_2`\n',
          },
        }),
      'Upstash-Flow-Control-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Flow-Control-Key',
            required: false,
            schema: { type: 'string' },
            description:
              'Flow control key to manage concurrency for the workflow run. Steps with the same key will respect the same concurrency limit.\nMake sure you pass `Upstash-Flow-Control-Value` header as well to define the limits for the key.',
          },
        }),
      'Upstash-Flow-Control-Value': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Flow-Control-Value',
            required: false,
            schema: { type: 'string' },
            description:
              'Parallelism and rate limit configuration for the flow control key in the format:\n `parallelism=<value>, rate=<value>, period=<value>`.\nSee [flow control](/workflow/features/flow-control) for details.\n',
          },
        }),
      'Upstash-Failure-Callback': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Failure-Callback',
            required: false,
            schema: { type: 'string' },
            description:
              'Failure callback URL to be called if the workflow run fails after all retries. That is when all the defined retries are exhausted. To call the failure function defined on server, this options should be left empty. A url should be given with this header only to call a different endpoint on failure. See [failureUrl](https://upstash.com/docs/workflow/features/failureFunction/advanced).\n\n- Failure callback URL must be prefixed with a valid protocol (http:// or https://)\n- Failure callbacks are charged as a regular message.\n- Failure callbacks will use the retry setting from the original request.\n',
          },
        }),
      'Upstash-Failure-Callback-Forward-*': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Failure-Callback-Forward-*',
            in: 'header',
            schema: { type: 'string' },
            description:
              'You can send custom headers along with your failure callback message.\nTo send a custom header, prefix the header name with `Upstash-Failure-Callback-Forward-`. We will strip prefix and them to the failure callback URL.\n\n| Header | Forwarded To Callback Destination As |\n|--------|--------------|\n| Upstash-Failure-Callback-Forward-My-Header: my-value | My-Header: my-value |\n| Upstash-Failure-Callback-Forward-Authorization: Bearer <token> | Authorization: Bearer <token> |\n',
            required: false,
          },
        }),
      'Upstash-Retry-Delay': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Retry-Delay',
            in: 'header',
            schema: { type: 'string' },
            description:
              'Customize the delay between retry attempts when step delivery fails.\n\nBy default, Upstash Workflow uses [exponential backoff](/qstash/features/retry). You can override this by providing a mathematical expressions to compute next delay. This expression is computed after each failed attempt.\n\nYou can use the special variable `retried`, which is how many times the message has been retried. The `retried` is 0 for the first retry.\n\nSupported functions: \n| Function    | Description                          |\n|-------------|--------------------------------------|\n| `pow(x, y)`| Returns x raised to the power of y|\n| `exp(x)`| Returns e raised to the power of x|\n| `sqrt(x)`| Takes the square root of x|\n| `abs(x)`| Returns the absolute value of x|\n| `floor(x)`| Returns the largest integer less than or equal to x|\n| `ceil(x)`| Returns the smallest integer greater than or equal to x|\n| `round(x)`| Rounds x to the nearest integer|\n| `min(x, y)`| Returns the smaller of x and y|\n| `max(x, y)`| Returns the larger of x and y|\n\nExamples:\n- `1000`: Fixed 1 second delay\n- `1000 * (1 + retried)`: Linear backoff\n- `pow(2, retried) * 1000`: Exponential backoff\n- `max(1000, pow(2, retried) * 100)`: Exponential with minimum 1s delay\n',
            required: false,
          },
        }),
    }),
    body: {
      description:
        'The raw request payload passed to the workflow endpoints as is. You can access it via requestPayload parameter on the context object.',
      content: {
        'text/plain': { schema: z.string() },
        'application/json': { schema: z.looseObject({}) },
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Workflow triggered successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              workflowRunId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The ID of the triggered workflow run.' }),
              workflowCreatedAt: z
                .number()
                .exactOptional()
                .openapi({ description: 'The timestamp when the workflow run was created.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorSchema } } },
    401: { description: 'Unauthorized', content: { 'application/json': { schema: ErrorSchema } } },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2BatchTriggerRoute = createRoute({
  method: 'post',
  path: '/v2/batch/trigger',
  tags: ['Runs'],
  summary: 'Batch Trigger Workflow Runs',
  description: 'Start multiple workflow runs in a single request.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                destination: z
                  .string()
                  .openapi({ description: 'The URL of the workflow to trigger.' }),
                body: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The raw request payload passed to the workflow endpoint as is. You can access it via request payload parameter on the context object.',
                  }),
                headers: z
                  .record(z.string(), z.string())
                  .exactOptional()
                  .openapi({
                    description:
                      'HTTP headers to forward to the workflow. You can pass any headers supported in the single trigger API.',
                  }),
              })
              .openapi({ required: ['destination'] }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Workflow runs triggered successfully',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                workflowRunId: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The ID of the triggered workflow run.' }),
                workflowCreatedAt: z
                  .preprocess(
                    (val) =>
                      typeof val === 'number' && Number.isSafeInteger(val)
                        ? BigInt(val)
                        : typeof val === 'string' && /^-?\d+$/.test(val)
                          ? BigInt(val)
                          : val,
                    z.int64(),
                  )
                  .exactOptional()
                  .openapi({
                    type: 'integer',
                    format: 'int64',
                    description:
                      'The unix timestamp in milliseconds when the workflow run was created.',
                  }),
                deduplicated: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      'Whether the workflow run was deduplicated (i.e. a run with the same ID already existed and a new one was not created).',
                  }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorSchema } } },
    401: { description: 'Unauthorized', content: { 'application/json': { schema: ErrorSchema } } },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteV2WorkflowsRunsWorkflowRunIdRoute = createRoute({
  method: 'delete',
  path: '/v2/workflows/runs/{workflowRunId}',
  tags: ['Runs'],
  summary: 'Cancel Workflow Run',
  description: 'Cancel an ongoing workflow run.',
  request: {
    params: z.object({
      workflowRunId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'workflowRunId',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the workflow run to cancel.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Workflow run cancelled successfully' },
    404: { description: 'A workflow run is not found with the given id.' },
    500: { description: 'An unexpected error occured.' },
  },
})

export const deleteV2WorkflowsRunsRoute = createRoute({
  method: 'delete',
  path: '/v2/workflows/runs',
  tags: ['Runs'],
  summary: 'Bulk Cancel Workflow Runs',
  description: 'Cancel all matching workflow runs.',
  request: {
    query: z.object({
      workflowRunIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'workflowRunIds',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Optional list of specific workflow run IDs to cancel. If provided, the other filters are ignored.',
          },
        }),
      workflowUrl: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'workflowUrl',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description: 'The URL of the workflow whose runs to cancel. Supports multiple values.',
          },
        }),
      workflowUrlExactMatch: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'workflowUrlExactMatch',
            required: false,
            schema: { type: 'boolean', default: false },
            description:
              'workflow url is searched as a prefix by default. To make it exact match, `workflowUrlExactMatch` can be set to true.',
          },
        }),
      fromDate: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'fromDate',
            required: false,
            schema: { type: 'number', format: 'date-time' },
            description:
              'Optional start date to filter workflow runs to cancel. Unix timestamp in milliseconds.',
          },
        }),
      toDate: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'toDate',
            required: false,
            schema: { type: 'number', format: 'date-time' },
            description:
              'Optional end date to filter workflow runs to cancel. Unix timestamp in milliseconds.',
          },
        }),
      callerIp: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'callerIp',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Optional caller IP address to filter workflow runs to cancel. Supports multiple values.',
          },
        }),
      flowControlKey: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'flowControlKey',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Optional flow control key to filter workflow runs to cancel. Supports multiple values.',
          },
        }),
      label: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'label',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Optional label to filter workflow runs to cancel. Supports multiple values. You can pass multiple values to match workflow runs with any of the given labels (OR logic).\n\nExamples:\n- `label=my_label`\n- `label=label_1&label=label_2`\n- `label=label_1,label_2`\n',
          },
        }),
      host: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'host',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Optional host of the workflow URL to filter workflow runs to cancel. Supports multiple values.',
          },
        }),
      path: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'path',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Optional path of the workflow URL to filter workflow runs to cancel. Supports multiple values.',
          },
        }),
      async: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'async',
            required: false,
            schema: { type: 'boolean', default: false },
            description:
              'Only applies to filter-based cancels. If `true`, the request returns as soon as the bulk action is created, without waiting for it to finish. The response includes the `actionId` of the bulk action.\n',
          },
        }),
      count: z
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
            in: 'query',
            name: 'count',
            required: false,
            deprecated: true,
            schema: { type: 'integer' },
            description:
              'Deprecated. This parameter is ignored, and all workflow runs matching the filters are cancelled.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Workflow runs cancelled, or the bulk action is created when `async=true`.',
      content: {
        'application/json': {
          schema: z
            .object({
              cancelled: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'When cancelling by `workflowRunIds`, the number of workflow runs cancelled.\n\nFor filter-based cancels, the number of in-progress workflow runs that matched the filters when the request was accepted.\n',
                }),
              actionId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the bulk action. Only returned for filter-based cancels with `async=true`.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorSchema } } },
    412: {
      description:
        'Too many bulk actions are in progress. Up to 1000 bulk actions can be in progress at the same time.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    429: {
      description:
        'The bulk action did not finish within one minute. It keeps running in the background and can be tracked via `GET /v2/workflows/bulkActions`.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2MessagesMessageIdRetryRoute = createRoute({
  method: 'post',
  path: '/v2/messages/{messageId}/retry',
  tags: ['Runs'],
  summary: 'Retry a Step Now',
  description: 'Execute a workflow step that is waiting for its next retry immediately',
  request: {
    params: z.object({
      messageId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'messageId',
            required: true,
            schema: { type: 'string' },
            description: 'The message ID of the retrying step.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The step is scheduled for immediate execution.' },
    400: {
      description: 'The message id is invalid.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Step not found, or the step is not waiting for a retry.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV2WorkflowsBulkActionsRoute = createRoute({
  method: 'get',
  path: '/v2/workflows/bulkActions',
  tags: ['Bulk Actions'],
  summary: 'List Bulk Actions',
  description: 'List the bulk actions created by filter-based workflow run cancels',
  request: {
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'cursor',
            required: false,
            schema: { type: 'string' },
            description: 'By providing a cursor you can paginate through all of the bulk actions.',
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'count',
            required: false,
            schema: { type: 'integer', minimum: 1, default: 100, maximum: 1000 },
            description:
              'The number of bulk actions to scan per page. Values above 1000 are treated as 1000.',
          },
        }),
      state: z
        .enum(['IN_PROGRESS', 'FINISHED'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'state',
            required: false,
            schema: { type: 'string', enum: ['IN_PROGRESS', 'FINISHED'] },
            description: 'Filter bulk actions by state.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of bulk actions',
      content: {
        'application/json': {
          schema: z
            .object({
              bulkActions: z.array(BulkActionSchema).exactOptional(),
              cursor: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A cursor which you can use in subsequent requests to paginate through all bulk actions.\nIf no cursor is returned, you have reached the end of the bulk actions.\n',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Invalid `count`, `cursor` or `state`',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV2WorkflowsBulkActionsActionIdRoute = createRoute({
  method: 'get',
  path: '/v2/workflows/bulkActions/{actionId}',
  tags: ['Bulk Actions'],
  summary: 'Get a Bulk Action',
  description: 'Retrieve the details and progress of a bulk action',
  request: {
    params: z.object({
      actionId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'actionId',
            required: true,
            schema: { type: 'string' },
            description:
              'The ID of the bulk action, as returned by a filter-based bulk cancel with `async=true`.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Bulk action details',
      content: { 'application/json': { schema: BulkActionSchema } },
    },
    404: {
      description: 'Bulk action not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV2WorkflowsLogsRoute = createRoute({
  method: 'get',
  path: '/v2/workflows/logs',
  tags: ['Logs'],
  summary: 'List Workflow Run Logs',
  description:
    'List and filter workflow runs with their state, completed and in-progress steps, and step details.',
  request: {
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'cursor',
            required: false,
            schema: { type: 'string' },
            description: 'Pagination cursor for fetching the next page of results.',
          },
        }),
      workflowUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'workflowUrl',
            required: false,
            schema: { type: 'string' },
            description:
              'Filter by workflow URL (exact match). Must start with http:// or https://.',
          },
        }),
      workflowRunId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'workflowRunId',
            required: false,
            schema: { type: 'string' },
            description: 'Filter by specific workflow run ID..',
          },
        }),
      workflowCreatedAt: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'workflowCreatedAt',
            required: false,
            schema: { type: 'integer', format: 'int64' },
            description: 'Filter by workflow creation timestamp in milliseconds (Unix timestamp).',
          },
        }),
      workflowRuns: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'workflowRuns',
            required: false,
            schema: { type: 'string' },
            description:
              'Filter by multiple workflow runs. Provide a comma-separated list of `workflowRunId@workflowCreatedAt` pairs to query specific runs in a single request.\n\nExample: `workflowRuns=ID1@TS1,ID2@TS2`\n\nWhen this parameter is provided, all other filters are ignored.\n',
          },
        }),
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'state',
            required: false,
            schema: { type: 'string' },
            description:
              'Filter by workflow or step state. Common states include:\n\n| Value          | Description                                                    |\n| -------------- | -------------------------------------------------------------- |\n| `RUN_STARTED`  | The workflow has started to run and currently in progress.     |\n| `RUN_SUCCESS`  | The workflow run has completed succesfully.                    |\n| `RUN_FAILED`   | Some errors has occured and workflow failed after all retries. |\n| `RUN_CANCELED` | The workflow run has canceled upon user request.               |\n| `STEP_SUCCESS` | The step succesfully fnished.               |\n| `STEP_RETRY` | The step is being retried.               |\n| `STEP_FAILED` | The step is failed.               |\n| `STEP_PROGRESS` | The step is in progress.                |\n| `STEP_CANCELED` | The step is cancelled manually.               |\n',
          },
        }),
      fromDate: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'fromDate',
            required: false,
            schema: { type: 'integer', format: 'int64' },
            description:
              'Filter events from this date onwards in milliseconds (Unix timestamp). Inclusive.',
          },
        }),
      toDate: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'toDate',
            required: false,
            schema: { type: 'integer', format: 'int64' },
            description:
              'Filter events up to this date in milliseconds (Unix timestamp). Inclusive.',
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(1000),
        )
        .default(1000)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'count',
            required: false,
            schema: { type: 'integer', default: 1000, maximum: 1000 },
            description:
              'Maximum number of results to return per page.\n- Event mode: Max 1000 (default 1000)\n- Run mode (groupBy=workflowRunId): Max 10 (default 10)\n',
          },
        }),
      trimBody: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'trimBody',
            required: false,
            schema: { type: 'integer', default: -1 },
            description:
              'Trim request/response bodies to this many bytes. Use -1 to exclude bodies entirely.\nUseful for reducing response size when bodies are large.\n',
          },
        }),
      label: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'label',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            style: 'form',
            explode: true,
            description:
              'Filter workflow run by label. Supports multi-value filtering. You can pass multiple values to match workflow runs with any of the given labels (OR logic).\n\nExamples:\n- `label=my_label`\n- `label=label_1&label=label_2`\n',
          },
        }),
      flowControlKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'flowControlKey',
            required: false,
            schema: { type: 'string' },
            description:
              'Filter workflow run by the flow control key assigned by the user on trigger.\n',
          },
        }),
      callerIp: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'callerIp',
            required: false,
            schema: { type: 'string' },
            description: 'Filter workflow run by the callerIp that started to workflow run.\n',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Workflow logs retrieved successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              cursor: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Pagination cursor for the next page. Empty if no more results.',
                }),
              runs: z
                .array(WorkflowRunSchema)
                .exactOptional()
                .openapi({
                  description: 'Array of complete workflow runs with all steps and metadata.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        'Bad Request - Invalid parameters (e.g., invalid cursor, state, or groupBy value)',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: { description: 'Unauthorized', content: { 'application/json': { schema: ErrorSchema } } },
    429: {
      description: 'Too Many Requests - Rate limit exceeded',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV2WorkflowsDlqRoute = createRoute({
  method: 'get',
  path: '/v2/workflows/dlq',
  tags: ['DLQ'],
  summary: 'List Failed Workflow Runs',
  description:
    'List and paginate through all failed workflow runs currently in the DLQ.\n\nFailed workflows end up in the DLQ after exhausting all retry attempts. You can filter,\npaginate, and inspect these failures to understand what went wrong and decide whether to\nresume, restart, or delete them.\n',
  request: {
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'cursor',
            required: false,
            schema: { type: 'string' },
            description: 'Pagination cursor. If provided, returns the next page of results.',
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'count',
            required: false,
            schema: { type: 'integer', default: 100, maximum: 100 },
            description: 'The maximum number of failed workflow runs to return per page.',
          },
        }),
      fromDate: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'fromDate',
            required: false,
            schema: { type: 'integer', format: 'int64' },
            description:
              'Filter by starting date in milliseconds (Unix timestamp). This is inclusive.',
          },
        }),
      toDate: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'toDate',
            required: false,
            schema: { type: 'integer', format: 'int64' },
            description:
              'Filter by ending date in milliseconds (Unix timestamp). This is inclusive.',
          },
        }),
      workflowUrl: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'workflowUrl',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter by workflow URL. Supports multiple values.',
          },
        }),
      workflowRunId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'workflowRunId',
            required: false,
            schema: { type: 'string' },
            description: 'Filter by workflow run ID.',
          },
        }),
      workflowCreatedAt: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'workflowCreatedAt',
            required: false,
            schema: { type: 'integer', format: 'int64' },
            description: 'Filter by workflow creation timestamp in milliseconds (Unix timestamp).',
          },
        }),
      label: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'label',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Filter by label assigned to the workflow run. Supports multiple values. You can pass multiple values to match workflow runs with any of the given labels (OR logic).\n\nExamples:\n- `label=my_label`\n- `label=label_1&label=label_2`\n- `label=label_1,label_2`\n',
          },
        }),
      failureFunctionState: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'failureFunctionState',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Filter by failure function state. Supports multiple values.\n\n | State | Description |\n|--------|--------------|\n| CALLBACK_INPROGRESS | The failure function is in progress. |\n| CALLBACK_SUCCESS | The failure function run successfully. |\n| CALLBACK_FAIL | The failure function failed to run. |\n| CALLBACK_CANCELED | The failure function was manually canceled |\n',
          },
        }),
      callerIp: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'callerIp',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter by IP address of the publisher. Supports multiple values.',
          },
        }),
      flowControlKey: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'flowControlKey',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter by Flow Control Key. Supports multiple values.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of failed workflow runs',
      content: {
        'application/json': {
          schema: z
            .object({
              cursor: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Pagination cursor for the next page. Empty if no more results.',
                }),
              messages: z
                .array(WorkflowDLQMessageSchema)
                .exactOptional()
                .openapi({ description: 'Array of failed workflow messages.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorSchema } } },
    401: { description: 'Unauthorized', content: { 'application/json': { schema: ErrorSchema } } },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteV2WorkflowsDlqRoute = createRoute({
  method: 'delete',
  path: '/v2/workflows/dlq',
  tags: ['DLQ'],
  summary: 'Bulk Delete Failed Workflow Runs',
  description:
    'Delete multiple failed workflow runs from the DLQ.\n\nWhen a workflow run fails, it is moved to the DLQ. You can manually remove a failed workflow run from the DLQ using this endpoint. This is useful for cleaning up failed runs that you no longer wish to retry or analyze.\n\nYou can either specify specific DLQ IDs to delete, or use filters to delete matching workflows.\nWhen using filters without DLQ IDs, the operation supports pagination via cursor.\n',
  request: {
    query: z.object({
      dlqIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dlqIds',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'List of specific DLQ IDs to delete. If provided, other filters are ignored.',
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'cursor',
            required: false,
            schema: { type: 'string' },
            description: 'Pagination cursor for deleting in batches.',
          },
        }),
      count: z
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
            in: 'query',
            name: 'count',
            required: false,
            schema: { type: 'integer' },
            description: 'Maximum number of workflows to delete per request.',
          },
        }),
      fromDate: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'fromDate',
            required: false,
            schema: { type: 'integer', format: 'int64' },
            description:
              'Filter by starting date in milliseconds (Unix timestamp). This is inclusive.',
          },
        }),
      toDate: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'toDate',
            required: false,
            schema: { type: 'integer', format: 'int64' },
            description:
              'Filter by ending date in milliseconds (Unix timestamp). This is inclusive.',
          },
        }),
      workflowUrl: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'workflowUrl',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter by workflow URL. Supports multiple values.',
          },
        }),
      workflowRunId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'workflowRunId',
            required: false,
            schema: { type: 'string' },
            description: 'Filter by workflow run ID.',
          },
        }),
      workflowCreatedAt: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'workflowCreatedAt',
            required: false,
            schema: { type: 'integer', format: 'int64' },
            description: 'Filter by workflow creation timestamp in milliseconds (Unix timestamp).',
          },
        }),
      label: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'label',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Filter by label assigned to the workflow run. Supports multiple values. You can pass multiple values to match workflow runs with any of the given labels (OR logic).\n\nExamples:\n- `label=my_label`\n- `label=label_1&label=label_2`\n- `label=label_1,label_2`\n',
          },
        }),
      failureFunctionState: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'failureFunctionState',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Filter by failure function state. Supports multiple values.\n\n| State | Description |\n|--------|--------------|\n| CALLBACK_INPROGRESS | The failure function is in progress. |\n| CALLBACK_SUCCESS | The failure function run successfully. |\n| CALLBACK_FAIL | The failure function failed to run. |\n| CALLBACK_CANCELED | The failure function was manually canceled |\n',
          },
        }),
      callerIp: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'callerIp',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter by IP address of the publisher. Supports multiple values.',
          },
        }),
      flowControlKey: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'flowControlKey',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter by Flow Control Key. Supports multiple values.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Workflows deleted successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              deleted: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description: 'The number of workflow runs that were deleted.',
                }),
              cursor: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Pagination cursor for the next batch. Only present when using filters without DLQ IDs.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorSchema } } },
    401: { description: 'Unauthorized', content: { 'application/json': { schema: ErrorSchema } } },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV2WorkflowsDlqDlqIdRoute = createRoute({
  method: 'get',
  path: '/v2/workflows/dlq/{dlqId}',
  tags: ['DLQ'],
  summary: 'Get Failed Workflow Run',
  description: 'Get details of a specific failed workflow run from the DLQ.\n',
  request: {
    params: z.object({
      dlqId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dlqId',
            required: true,
            schema: { type: 'string' },
            description: 'The DLQ ID of the failed workflow run.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Failed workflow run details',
      content: { 'application/json': { schema: WorkflowDLQMessageSchema } },
    },
    400: {
      description: 'Bad Request - Invalid DLQ ID',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: { description: 'Unauthorized', content: { 'application/json': { schema: ErrorSchema } } },
    404: {
      description: 'DLQ message not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteV2WorkflowsDlqDlqIdRoute = createRoute({
  method: 'delete',
  path: '/v2/workflows/dlq/{dlqId}',
  tags: ['DLQ'],
  summary: 'Delete Failed Workflow Run',
  description:
    'Delete a specific failed workflow run from the DLQ.\n\nUse this endpoint to remove a workflow from the DLQ after you have addressed the issue\nor determined that the workflow should not be retried.\n',
  request: {
    params: z.object({
      dlqId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dlqId',
            required: true,
            schema: { type: 'string' },
            description: 'The DLQ ID of the failed workflow run to delete.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Workflow deleted successfully' },
    400: {
      description: 'Bad Request - Invalid DLQ ID',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: { description: 'Unauthorized', content: { 'application/json': { schema: ErrorSchema } } },
    404: { description: 'DLQ message not found' },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2WorkflowsDlqResumeDlqIdRoute = createRoute({
  method: 'post',
  path: '/v2/workflows/dlq/resume/{dlqId}',
  tags: ['DLQ'],
  summary: 'Resume Workflow from DLQ',
  description:
    'Resume a failed workflow run from the DLQ at the step where it failed, without re-running completed steps.',
  request: {
    params: z.object({
      dlqId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dlqId',
            required: true,
            schema: { type: 'string' },
            description: 'The DLQ ID of the workflow run to resume.',
          },
        }),
    }),
    headers: z.object({
      'Upstash-Retries': z
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
            in: 'header',
            name: 'Upstash-Retries',
            required: false,
            schema: { type: 'integer' },
            description: 'Override the number of retries for the remaining workflow steps.',
          },
        }),
      'Upstash-Delay': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Delay',
            required: false,
            schema: { type: 'string' },
            description:
              'Override the delay before executing the next workflow step. Format is `<value><unit>` (e.g., "10s", "5m").',
          },
        }),
      'Upstash-Retry-Delay': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Retry-Delay',
            required: false,
            schema: { type: 'string' },
            description: 'Override the retry delay expression for the remaining workflow steps.',
          },
        }),
      'Upstash-Flow-Control-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Flow-Control-Key',
            required: false,
            schema: { type: 'string' },
            description: 'Override the flow control key for the remaining workflow steps.',
          },
        }),
      'Upstash-Flow-Control-Value': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Flow-Control-Value',
            required: false,
            schema: { type: 'string' },
            description:
              'Override the flow control configuration in the format `parallelism=<value>, rate=<value>, period=<value>`.',
          },
        }),
      'Upstash-Label': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Label',
            required: false,
            schema: { type: 'string' },
            description:
              'Override the label(s) for the remaining workflow steps.\n\nYou can assign multiple labels by providing a comma-separated list.\n\nExample: `label_1,label_2`\n',
          },
        }),
      'Upstash-Failure-Callback': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Failure-Callback',
            required: false,
            schema: { type: 'string' },
            description: 'Override the failure callback URL for the remaining workflow steps.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Workflow resumed successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              workflowRunId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the resumed workflow run (a new ID is generated for the resumed run).',
                }),
              workflowCreatedAt: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    'The timestamp when the resumed workflow run was created (Unix timestamp in milliseconds).',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        "Bad Request - Invalid DLQ ID, not a workflow message, or workflow doesn't support resume",
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: { description: 'Unauthorized', content: { 'application/json': { schema: ErrorSchema } } },
    404: {
      description: 'DLQ message not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2WorkflowsDlqResumeRoute = createRoute({
  method: 'post',
  path: '/v2/workflows/dlq/resume',
  tags: ['DLQ'],
  summary: 'Bulk Resume Workflows from DLQ',
  description:
    "When a workflow run fails, it's automatically moved to the DLQ (Dead Letter Queue) where it can be analyzed and resumed. \n  The resume feature allows you to continue a failed workflow run from exactly where it failed, without re-executing successfully completed steps.\n\n  This is particularly useful for long-running workflows where you don't want to lose progress from successful steps when a single step fails.\n\n  When a workflow is resumed, it continues execution from the last failed step. A new workflow run ID is generated,\n  but the workflow maintains the state and results from previously completed steps.\n\n  <Note>\n    You can make changes to the workflow code as long as these changes come after the failed steps. \n    However, making changes before the failed step will break the code and is not allowed.\n\n    For more details, check out [Handle workflow route code changes](/workflow/howto/changes) page.\n  </Note>\n",
  request: {
    query: z.object({
      dlqIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dlqIds',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'List of specific DLQ IDs to resume. If provided, other filters are ignored.',
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'cursor',
            required: false,
            schema: { type: 'string' },
            description: 'Pagination cursor for resuming workflows in batches.',
          },
        }),
      count: z
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
            in: 'query',
            name: 'count',
            required: false,
            schema: { type: 'integer' },
            description:
              'Maximum number of workflows to resume. If not provided, all matching workflows will be resumed.',
          },
        }),
      fromDate: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'fromDate',
            required: false,
            schema: { type: 'integer', format: 'int64' },
            description:
              'Filter workflows by starting date, in milliseconds (Unix timestamp). This is inclusive.',
          },
        }),
      toDate: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'toDate',
            required: false,
            schema: { type: 'integer', format: 'int64' },
            description:
              'Filter workflows by ending date, in milliseconds (Unix timestamp). This is inclusive.',
          },
        }),
      workflowUrl: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'workflowUrl',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter workflows by workflow URL. Supports multiple values.',
          },
        }),
      workflowRunId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'workflowRunId',
            required: false,
            schema: { type: 'string' },
            description: 'Filter workflows by workflow run ID.',
          },
        }),
      workflowCreatedAt: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'workflowCreatedAt',
            required: false,
            schema: { type: 'integer', format: 'int64' },
            description: 'Filter workflows by creation timestamp in milliseconds (Unix timestamp).',
          },
        }),
      label: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'label',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Filter workflows by label. Supports multiple values. You can pass multiple values to match workflows with any of the given labels (OR logic).\n\nExamples:\n- `label=my_label`\n- `label=label_1&label=label_2`\n- `label=label_1,label_2`\n',
          },
        }),
      failureFunctionState: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'failureFunctionState',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Filter workflows by failure function state. Supports multiple values.\n\n| State | Description |\n|--------|--------------|\n| CALLBACK_INPROGRESS | The failure function is in progress. |\n| CALLBACK_SUCCESS | The failure function run successfully. |\n| CALLBACK_FAIL | The failure function failed to run. |\n| CALLBACK_CANCELED | The failure function was manually canceled |\n',
          },
        }),
      callerIp: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'callerIp',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Filter workflows by IP address of the publisher. Supports multiple values.',
          },
        }),
      flowControlKey: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'flowControlKey',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter workflows by Flow Control Key. Supports multiple values.',
          },
        }),
    }),
    headers: z.object({
      'Upstash-Retries': z
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
            in: 'header',
            name: 'Upstash-Retries',
            required: false,
            schema: { type: 'integer' },
            description: 'Override the number of retries for the remaining workflow steps.',
          },
        }),
      'Upstash-Delay': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Delay',
            required: false,
            schema: { type: 'string' },
            description:
              'Override the delay before executing the next workflow step. Format is `<value><unit>` (e.g., "10s", "5m").',
          },
        }),
      'Upstash-Retry-Delay': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Retry-Delay',
            required: false,
            schema: { type: 'string' },
            description: 'Override the retry delay expression for the remaining workflow steps.',
          },
        }),
      'Upstash-Flow-Control-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Flow-Control-Key',
            required: false,
            schema: { type: 'string' },
            description: 'Override the flow control key for the remaining workflow steps.',
          },
        }),
      'Upstash-Flow-Control-Value': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Flow-Control-Value',
            required: false,
            schema: { type: 'string' },
            description:
              'Override the flow control configuration in the format `parallelism=<value>, rate=<value>, period=<value>`.',
          },
        }),
      'Upstash-Label': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Label',
            required: false,
            schema: { type: 'string' },
            description:
              'Override the label(s) for the remaining workflow steps.\n\nYou can assign multiple labels by providing a comma-separated list.\n\nExample: `label_1,label_2`\n',
          },
        }),
      'Upstash-Failure-Callback': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Failure-Callback',
            required: false,
            schema: { type: 'string' },
            description: 'Override the failure callback URL for the remaining workflow steps.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Workflows resumed successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              workflowRuns: z
                .array(
                  z
                    .object({
                      workflowRunId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The ID of the resumed workflow run (a new ID is generated for each resumed run).',
                        }),
                      workflowCreatedAt: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64(),
                        )
                        .exactOptional()
                        .openapi({
                          type: 'integer',
                          format: 'int64',
                          description:
                            'The timestamp when the resumed workflow run was created (Unix timestamp in milliseconds).',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Array of resumed workflow runs.' }),
              cursor: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Pagination cursor to use in subsequent requests. If empty, all matching workflows have been processed.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorSchema } } },
    401: { description: 'Unauthorized', content: { 'application/json': { schema: ErrorSchema } } },
    404: {
      description: 'Some DLQ messages were not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2WorkflowsDlqRestartDlqIdRoute = createRoute({
  method: 'post',
  path: '/v2/workflows/dlq/restart/{dlqId}',
  tags: ['DLQ'],
  summary: 'Restart Workflow from DLQ',
  description:
    'Restart a failed workflow run from the DLQ. The workflow will start from the beginning.\n\nUnlike resume, which continues from where the workflow failed, restart executes the entire workflow\nfrom the first step. A new workflow run ID is generated and all steps will be executed again.\n',
  request: {
    params: z.object({
      dlqId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dlqId',
            required: true,
            schema: { type: 'string' },
            description: 'The DLQ ID of the workflow run to restart.',
          },
        }),
    }),
    headers: z.object({
      'Upstash-Retries': z
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
            in: 'header',
            name: 'Upstash-Retries',
            required: false,
            schema: { type: 'integer' },
            description: 'Override the number of retries for the workflow steps.',
          },
        }),
      'Upstash-Delay': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Delay',
            required: false,
            schema: { type: 'string' },
            description:
              'Override the delay before executing the workflow. Format is `<value><unit>` (e.g., "10s", "5m").',
          },
        }),
      'Upstash-Retry-Delay': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Retry-Delay',
            required: false,
            schema: { type: 'string' },
            description: 'Override the retry delay expression for the workflow steps.',
          },
        }),
      'Upstash-Flow-Control-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Flow-Control-Key',
            required: false,
            schema: { type: 'string' },
            description: 'Override the flow control key for the workflow.',
          },
        }),
      'Upstash-Flow-Control-Value': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Flow-Control-Value',
            required: false,
            schema: { type: 'string' },
            description:
              'Override the flow control configuration in the format `parallelism=<value>, rate=<value>, period=<value>`.',
          },
        }),
      'Upstash-Label': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Label',
            required: false,
            schema: { type: 'string' },
            description:
              'Override the label(s) for the workflow.\n\nYou can assign multiple labels by providing a comma-separated list.\n\nExample: `label_1,label_2`\n',
          },
        }),
      'Upstash-Failure-Callback': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Failure-Callback',
            required: false,
            schema: { type: 'string' },
            description: 'Override the failure callback URL for the workflow.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Workflow restarted successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              workflowRunId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the restarted workflow run (a new ID is generated for the restarted run).',
                }),
              workflowCreatedAt: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    'The timestamp when the restarted workflow run was created (Unix timestamp in milliseconds).',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        "Bad Request - Invalid DLQ ID, not a workflow message, or workflow doesn't support restart",
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: { description: 'Unauthorized', content: { 'application/json': { schema: ErrorSchema } } },
    404: {
      description: 'DLQ message not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2WorkflowsDlqRestartRoute = createRoute({
  method: 'post',
  path: '/v2/workflows/dlq/restart',
  tags: ['DLQ'],
  summary: 'Bulk Restart Workflows from DLQ',
  description:
    'Restart multiple failed workflow runs from the DLQ. Each workflow will start from the beginning.\n\nUnlike resume, which continues from where workflows failed, restart executes the entire workflows\nfrom the first step. New workflow run IDs are generated and all steps will be executed again.\n\nA maximum of 50 workflow runs can be restarted per request. If more runs are available, a cursor is returned, which can be used in subsequent requests to continue the operation. When no cursor is returned, all entries have been processed.\nEach restarted workflow run is assigned a new random Run ID.\n',
  request: {
    query: z.object({
      dlqIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dlqIds',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'List of specific DLQ IDs to restart. If provided, other filters are ignored.',
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'cursor',
            required: false,
            schema: { type: 'string' },
            description: 'Pagination cursor for restarting workflows in batches.',
          },
        }),
      count: z
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
            in: 'query',
            name: 'count',
            required: false,
            schema: { type: 'integer' },
            description:
              'Maximum number of workflows to restart. If not provided, all matching workflows will be restarted.',
          },
        }),
      fromDate: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'fromDate',
            required: false,
            schema: { type: 'integer', format: 'int64' },
            description:
              'Filter workflows by starting date, in milliseconds (Unix timestamp). This is inclusive.',
          },
        }),
      toDate: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'toDate',
            required: false,
            schema: { type: 'integer', format: 'int64' },
            description:
              'Filter workflows by ending date, in milliseconds (Unix timestamp). This is inclusive.',
          },
        }),
      workflowUrl: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'workflowUrl',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter workflows by workflow URL. Supports multiple values.',
          },
        }),
      workflowRunId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'workflowRunId',
            required: false,
            schema: { type: 'string' },
            description: 'Filter workflows by workflow run ID.',
          },
        }),
      workflowCreatedAt: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'workflowCreatedAt',
            required: false,
            schema: { type: 'integer', format: 'int64' },
            description: 'Filter workflows by creation timestamp in milliseconds (Unix timestamp).',
          },
        }),
      label: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'label',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Filter workflows by label. Supports multiple values. You can pass multiple values to match workflows with any of the given labels (OR logic).\n\nExamples:\n- `label=my_label`\n- `label=label_1&label=label_2`\n- `label=label_1,label_2`\n',
          },
        }),
      failureFunctionState: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'failureFunctionState',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Filter workflows by failure function state. Supports multiple values.\n\n| State | Description |\n|--------|--------------|\n| CALLBACK_INPROGRESS | The failure function is in progress. |\n| CALLBACK_SUCCESS | The failure function run successfully. |\n| CALLBACK_FAIL | The failure function failed to run. |\n| CALLBACK_CANCELED | The failure function was manually canceled |\n',
          },
        }),
      callerIp: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'callerIp',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Filter workflows by IP address of the publisher. Supports multiple values.',
          },
        }),
      flowControlKey: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'flowControlKey',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter workflows by Flow Control Key. Supports multiple values.',
          },
        }),
    }),
    headers: z.object({
      'Upstash-Retries': z
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
            in: 'header',
            name: 'Upstash-Retries',
            required: false,
            schema: { type: 'integer' },
            description: 'Override the number of retries for the workflow steps.',
          },
        }),
      'Upstash-Delay': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Delay',
            required: false,
            schema: { type: 'string' },
            description:
              'Override the delay before executing the workflows. Format is `<value><unit>` (e.g., "10s", "5m").',
          },
        }),
      'Upstash-Retry-Delay': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Retry-Delay',
            required: false,
            schema: { type: 'string' },
            description: 'Override the retry delay expression for the workflow steps.',
          },
        }),
      'Upstash-Flow-Control-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Flow-Control-Key',
            required: false,
            schema: { type: 'string' },
            description: 'Override the flow control key for the workflows.',
          },
        }),
      'Upstash-Flow-Control-Value': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Flow-Control-Value',
            required: false,
            schema: { type: 'string' },
            description:
              'Override the flow control configuration in the format `parallelism=<value>, rate=<value>, period=<value>`.',
          },
        }),
      'Upstash-Label': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Label',
            required: false,
            schema: { type: 'string' },
            description:
              'Override the label(s) for the workflows.\n\nYou can assign multiple labels by providing a comma-separated list.\n\nExample: `label_1,label_2`\n',
          },
        }),
      'Upstash-Failure-Callback': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upstash-Failure-Callback',
            required: false,
            schema: { type: 'string' },
            description: 'Override the failure callback URL for the workflows.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Workflows restarted successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              workflowRuns: z
                .array(
                  z
                    .object({
                      workflowRunId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The ID of the restarted workflow run (a new ID is generated for each restarted run).',
                        }),
                      workflowCreatedAt: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64(),
                        )
                        .exactOptional()
                        .openapi({
                          type: 'integer',
                          format: 'int64',
                          description:
                            'The timestamp when the restarted workflow run was created (Unix timestamp in milliseconds).',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Array of restarted workflow runs.' }),
              cursor: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Pagination cursor to use in subsequent requests. If empty, all matching workflows have been processed.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorSchema } } },
    401: { description: 'Unauthorized', content: { 'application/json': { schema: ErrorSchema } } },
    404: {
      description: 'Some DLQ messages were not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2WorkflowsDlqCallbackDlqIdRoute = createRoute({
  method: 'post',
  path: '/v2/workflows/dlq/callback/{dlqId}',
  tags: ['DLQ'],
  summary: 'Retry Failure Callback',
  description:
    'If the failure callback for a workflow run has failed, you can use this endpoint to manually trigger the failure callback again. \nThis is useful for ensuring that your system is notified of workflow failures even if the original callback attempt did not succeed.\n\nThe state of the failure callback for each workflow run is included in the DLQ message response as failureCallbackInfo.state. \nYou can filter for all workflow runs with a failed failure callback by using the failureCallbackState filter when listing workflow runs in the DLQ with the `/v2/workflows/dlq` endpoint.\n',
  request: {
    params: z.object({
      dlqId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dlqId',
            required: true,
            schema: { type: 'string' },
            description:
              'The DLQ ID of the failed workflow run whose failure callback should be retried.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Failure callback retried successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              workflowRunId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The ID of the workflow run.' }),
              workflowCreatedAt: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    'The timestamp when the workflow run was created (Unix timestamp in milliseconds).',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        "Bad Request. Workflow doesn't have a failed callback, callback is already in-progress, succeeded, or was canceled",
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: { description: 'Unauthorized', content: { 'application/json': { schema: ErrorSchema } } },
    404: {
      description: 'DLQ message not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteV2WorkflowsDlqCallbackDlqIdRoute = createRoute({
  method: 'delete',
  path: '/v2/workflows/dlq/callback/{dlqId}',
  tags: ['DLQ'],
  summary: 'Cancel In-Progress Failure Callback',
  description:
    "Cancel an in-progress failure callback for a failed workflow.\n\nWhen you retry a failed failure callback using the POST endpoint, it enters an in-progress state.\nThis endpoint allows you to cancel that in-progress callback before it completes.\n\nThe callback must be in an in-progress state. If there's no in-progress callback,\nthe request will fail with a 400 error.\n",
  request: {
    params: z.object({
      dlqId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dlqId',
            required: true,
            schema: { type: 'string' },
            description:
              'The DLQ ID of the workflow run whose in-progress failure callback should be canceled.',
          },
        }),
    }),
  },
  responses: {
    302: { description: 'Failure callback canceled successfully' },
    400: {
      description:
        'Bad Request - No in-progress failure callback to cancel, or callback information is invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: { description: 'Unauthorized', content: { 'application/json': { schema: ErrorSchema } } },
    404: {
      description: 'Failure callback not found or message not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV2FlowControlRoute = createRoute({
  method: 'get',
  path: '/v2/flowControl',
  tags: ['Flow Control'],
  summary: 'List Flow Control Keys',
  description: 'List all Flow Control keys',
  responses: {
    200: {
      description: 'Flow control keys retrieved successfully',
      content: { 'application/json': { schema: z.array(FlowControlKeySchema) } },
    },
  },
})

export const getV2FlowControlFlowControlKeyRoute = createRoute({
  method: 'get',
  path: '/v2/flowControl/{flowControlKey}',
  tags: ['Flow Control'],
  summary: 'Get Flow Control Key',
  description: 'Get details of a specific Flow Control key',
  request: {
    params: z.object({
      flowControlKey: z
        .string()
        .openapi({
          param: {
            name: 'flowControlKey',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Flow Control key to retrieve',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Flow control key details',
      content: { 'application/json': { schema: FlowControlKeySchema } },
    },
    404: {
      description: 'Flow Control key not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2FlowControlFlowControlKeyPauseRoute = createRoute({
  method: 'post',
  path: '/v2/flowControl/{flowControlKey}/pause',
  tags: ['Flow Control'],
  summary: 'Pause Flow Control Key',
  description: 'Pauses the delivery of messages associated with a specific flow-control key.',
  request: {
    params: z.object({
      flowControlKey: z
        .string()
        .openapi({
          param: {
            name: 'flowControlKey',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The flow-control key to pause.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The flow-control key has been paused.' },
    400: {
      description: 'Bad request. Returned when the flow-control key is not provided.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2FlowControlFlowControlKeyResumeRoute = createRoute({
  method: 'post',
  path: '/v2/flowControl/{flowControlKey}/resume',
  tags: ['Flow Control'],
  summary: 'Resume Flow Control Key',
  description: 'Resumes the delivery of messages associated with a specific flow-control key.',
  request: {
    params: z.object({
      flowControlKey: z
        .string()
        .openapi({
          param: {
            name: 'flowControlKey',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The flow-control key to resume.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The flow-control key has been resumed.' },
    400: {
      description: 'Bad request. Returned when the flow-control key is not provided.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2FlowControlFlowControlKeyPinRoute = createRoute({
  method: 'post',
  path: '/v2/flowControl/{flowControlKey}/pin',
  tags: ['Flow Control'],
  summary: 'Pin Configuration for Flow Control Key',
  description: 'Pins a processing configuration for a specific flow-control key.',
  request: {
    params: z.object({
      flowControlKey: z
        .string()
        .openapi({
          param: {
            name: 'flowControlKey',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The flow-control key for which the configuration will be pinned.',
          },
        }),
    }),
    query: z.object({
      parallelism: z
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
            name: 'parallelism',
            in: 'query',
            schema: { type: 'integer' },
            description: 'The parallelism value to apply to the flow-control key.',
            required: false,
          },
        }),
      rate: z
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
            name: 'rate',
            in: 'query',
            schema: { type: 'integer' },
            description: 'The rate value to apply to the flow-control key.',
            required: false,
          },
        }),
      period: z
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
            name: 'period',
            in: 'query',
            schema: { type: 'integer' },
            description: 'The period value to apply to the flow-control key, in seconds.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The flow-control key configuration has been pinned.' },
    400: {
      description:
        'Bad request. Returned when the flow-control key is not provided, or when the parallelism, rate or period values are invalid.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2FlowControlFlowControlKeyUnpinRoute = createRoute({
  method: 'post',
  path: '/v2/flowControl/{flowControlKey}/unpin',
  tags: ['Flow Control'],
  summary: 'Unpin Configuration for Flow Control Key',
  description: 'Removes the pinned configuration for a specific flow-control key.',
  request: {
    params: z.object({
      flowControlKey: z
        .string()
        .openapi({
          param: {
            name: 'flowControlKey',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The flow-control key for which the configuration will be unpinned.',
          },
        }),
    }),
    query: z.object({
      parallelism: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'parallelism',
            in: 'query',
            schema: { type: 'boolean', default: false },
            description: 'The flag to indicate whether to unpin the parallelism configuration.',
            required: false,
          },
        }),
      rate: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'rate',
            in: 'query',
            schema: { type: 'boolean', default: false },
            description: 'The flag to indicate whether to unpin the rate configuration.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The flow-control key configuration is pinned' },
    400: {
      description: 'Bad request. Returned when the flow-control key is not provided.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2FlowControlFlowControlKeyResetRateRoute = createRoute({
  method: 'post',
  path: '/v2/flowControl/{flowControlKey}/resetRate',
  tags: ['Flow Control'],
  summary: 'Reset Rate for Flow Control Key',
  description: 'Resets the rate configuration state for a specific flow-control key.',
  request: {
    params: z.object({
      flowControlKey: z
        .string()
        .openapi({
          param: {
            name: 'flowControlKey',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The flow-control key for which the rate state will be reset.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The rate state for the flow-control key has been reset.' },
    400: {
      description: 'Bad request. Returned when the flow-control key is not provided.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error. Returned when an unexpected error occurs.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV2GlobalParallelismRoute = createRoute({
  method: 'get',
  path: '/v2/globalParallelism',
  tags: ['Flow Control'],
  summary: 'Get Global Parallelism',
  description: 'Returns the current global parallelism usage across all flow control keys',
  responses: {
    200: {
      description: 'Global parallelism info retrieved successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              parallelismMax: z
                .int()
                .exactOptional()
                .openapi({ description: 'The configured maximum global parallelism' }),
              parallelismCount: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The current number of messages running globally in parallel',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getV2KeysRoute = createRoute({
  method: 'get',
  path: '/v2/keys',
  tags: ['Signing Keys'],
  summary: 'Get Signing Keys',
  description: 'Retrieve your current and next signing keys',
  responses: {
    200: {
      description: 'Signing keys retrieved successfully',
      content: { 'application/json': { schema: SigningKeysSchema } },
    },
  },
})

export const getV2KeysRotateRoute = createRoute({
  method: 'get',
  path: '/v2/keys/rotate',
  tags: ['Flow Control'],
  summary: 'Get Flow Control Key',
  description:
    'Get details of a specific Flow Control key.\n\nFlow Control keys are used to manage concurrency and rate limiting for workflow steps.\nThis endpoint returns the current waitlist size for the specified flow control key,\nwhich indicates how many workflow steps are currently waiting due to flow control constraints.\n',
  request: {
    params: z.object({
      flowControlKey: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'flowControlKey',
            required: true,
            schema: { type: 'string' },
            description: 'The Flow Control key to retrieve.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Flow control key details',
      content: { 'application/json': { schema: FlowControlKeySchema } },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorSchema } } },
    401: { description: 'Unauthorized', content: { 'application/json': { schema: ErrorSchema } } },
    404: {
      description: 'Flow Control key not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2KeysRotateRoute = createRoute({
  method: 'post',
  path: '/v2/keys/rotate',
  tags: ['Signing Keys'],
  summary: 'Rotate Signing Keys',
  description: 'Rotate your signing keys',
  responses: {
    200: {
      description: 'Keys rotated successfully',
      content: { 'application/json': { schema: SigningKeysSchema } },
    },
  },
})

export const postV2NotifyEventIdRoute = createRoute({
  method: 'post',
  path: '/v2/notify/{eventId}',
  tags: ['Notify'],
  summary: 'Notify Event',
  description:
    'Notify an event to all waiters listening for that event ID.\n\nThis endpoint broadcasts an event to all active waiters that are waiting for the specified event.\nEach waiting workflow step receives the event data and continues execution.\n\n**Important:** This is an "unsafe notify" operation - if there are no active waiters when the\nnotification is sent, the event is lost and will not be delivered later. For guaranteed delivery\nwithin a specific workflow run, use the `/v2/notify/{workflowRunId}/{eventId}` endpoint instead.\n',
  request: {
    params: z.object({
      eventId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'eventId',
            required: true,
            schema: { type: 'string' },
            description: 'The event ID that waiters are listening for.',
          },
        }),
    }),
    body: {
      description:
        'The event data to send to all waiters. This will be the request payload for waiting workflow steps.',
      content: {
        'application/json': { schema: z.looseObject({}) },
        'text/plain': { schema: z.string() },
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Event notification sent successfully',
      content: {
        'application/json': {
          schema: z
            .array(NotifyResponseSchema)
            .openapi({
              description: 'Array of notification results, one for each notified waiter.',
            }),
        },
      },
    },
    400: {
      description: 'Bad Request - Invalid event ID',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: { description: 'Unauthorized', content: { 'application/json': { schema: ErrorSchema } } },
    429: {
      description: 'Rate Limit Exceeded',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2NotifyWorkflowRunIdEventIdRoute = createRoute({
  method: 'post',
  path: '/v2/notify/{workflowRunId}/{eventId}',
  tags: ['Notify'],
  summary: 'Notify Workflow Run Event',
  description:
    'Notify an event to a specific workflow run\'s waiters.\n\nThis endpoint sends an event notification to waiters within a specific workflow run.\nUnlike the general notify endpoint, this uses a "safe notify" mechanism that guarantees\ndelivery even if no waiter is currently active.\n\n**Safe Notify Behavior:**\n- If a waiter is currently active, it receives the notification immediately\n- If no waiter is active, the notification is saved in the database\n- When a waiter becomes active later, it will consume the saved notification\n- This ensures events are never lost due to timing issues\n',
  request: {
    params: z.object({
      workflowRunId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'workflowRunId',
            required: true,
            schema: { type: 'string' },
            description: 'The workflow run ID to notify.',
          },
        }),
      eventId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'eventId',
            required: true,
            schema: { type: 'string' },
            description: 'The event ID that waiters are listening for.',
          },
        }),
    }),
    body: {
      description:
        'The event data to send to the waiter. This will be the request payload for the waiting workflow step.',
      content: {
        'application/json': { schema: z.looseObject({}) },
        'text/plain': { schema: z.string() },
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Event notification sent or saved successfully',
      content: { 'application/json': { schema: NotifyResponseSchema } },
    },
    400: {
      description: 'Bad Request - Invalid workflow run ID or event ID',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: { description: 'Unauthorized', content: { 'application/json': { schema: ErrorSchema } } },
    429: {
      description: 'Rate Limit Exceeded',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV2WaitersEventIdRoute = createRoute({
  method: 'get',
  path: '/v2/waiters/{eventId}',
  tags: ['Notify'],
  summary: 'List Waiters',
  description:
    'List all active waiters for a specific event ID.\n\nReturns information about all workflow runs that are currently waiting for the specified event.\n',
  request: {
    params: z.object({
      eventId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'eventId',
            required: true,
            schema: { type: 'string' },
            description: 'The event ID to list waiters for.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of active waiters',
      content: {
        'application/json': {
          schema: z
            .array(WaiterSchema)
            .openapi({ description: 'Array of waiters currently listening for this event.' }),
        },
      },
    },
    400: {
      description: 'Bad Request - Invalid event ID',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: { description: 'Unauthorized', content: { 'application/json': { schema: ErrorSchema } } },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})
