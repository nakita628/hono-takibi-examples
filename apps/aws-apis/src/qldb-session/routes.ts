import { createRoute, z } from '@hono/zod-openapi'

const SessionTokenSchema = z
  .string()
  .regex(/^[A-Za-z-0-9+\/=]+$/)
  .min(4)
  .max(1024)
  .openapi('SessionToken')

const ProcessingTimeMillisecondsSchema = z.int().openapi('ProcessingTimeMilliseconds')

const TimingInformationSchema = z
  .object({
    ProcessingTimeMilliseconds: ProcessingTimeMillisecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time that QLDB spent on processing the command, measured in milliseconds.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains server-side performance information for a command. Amazon QLDB captures timing information between the times when it receives the request and when it sends the corresponding response.',
    required: [],
  })
  .openapi('TimingInformation')

const StartSessionResultSchema = z
  .object({
    SessionToken: SessionTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Session token of the started session. This <code>SessionToken</code> is required for every subsequent command that is issued during the current session.',
        }),
    ).exactOptional(),
    TimingInformation: TimingInformationSchema.and(
      z
        .any()
        .openapi({ description: 'Contains server-side performance information for the command.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains the details of the started session.', required: [] })
  .openapi('StartSessionResult')

const TransactionIdSchema = z
  .string()
  .regex(/^[A-Za-z-0-9]+$/)
  .length(22)
  .openapi('TransactionId')

const StartTransactionResultSchema = z
  .object({
    TransactionId: TransactionIdSchema.and(
      z.any().openapi({ description: 'The transaction ID of the started transaction.' }),
    ).exactOptional(),
    TimingInformation: TimingInformationSchema.and(
      z
        .any()
        .openapi({ description: 'Contains server-side performance information for the command.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains the details of the started transaction.', required: [] })
  .openapi('StartTransactionResult')

const EndSessionResultSchema = z
  .object({
    TimingInformation: TimingInformationSchema.and(
      z
        .any()
        .openapi({ description: 'Contains server-side performance information for the command.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains the details of the ended session.', required: [] })
  .openapi('EndSessionResult')

const CommitDigestSchema = z.string().openapi('CommitDigest')

const ReadIOsSchema = z.int().openapi('ReadIOs')

const WriteIOsSchema = z.int().openapi('WriteIOs')

const IOUsageSchema = z
  .object({
    ReadIOs: ReadIOsSchema.and(
      z.any().openapi({ description: 'The number of read I/O requests that the command made.' }),
    ).exactOptional(),
    WriteIOs: WriteIOsSchema.and(
      z.any().openapi({ description: 'The number of write I/O requests that the command made.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains I/O usage metrics for a command that was invoked.',
    required: [],
  })
  .openapi('IOUsage')

const CommitTransactionResultSchema = z
  .object({
    TransactionId: TransactionIdSchema.and(
      z.any().openapi({ description: 'The transaction ID of the committed transaction.' }),
    ).exactOptional(),
    CommitDigest: CommitDigestSchema.and(
      z.any().openapi({ description: 'The commit digest of the committed transaction.' }),
    ).exactOptional(),
    TimingInformation: TimingInformationSchema.and(
      z
        .any()
        .openapi({ description: 'Contains server-side performance information for the command.' }),
    ).exactOptional(),
    ConsumedIOs: IOUsageSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains metrics about the number of I/O requests that were consumed.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains the details of the committed transaction.', required: [] })
  .openapi('CommitTransactionResult')

const AbortTransactionResultSchema = z
  .object({
    TimingInformation: TimingInformationSchema.and(
      z
        .any()
        .openapi({ description: 'Contains server-side performance information for the command.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains the details of the aborted transaction.', required: [] })
  .openapi('AbortTransactionResult')

const IonBinarySchema = z.string().min(1).max(131072).openapi('IonBinary')

const IonTextSchema = z.string().min(1).max(1048576).openapi('IonText')

const ValueHolderSchema = z
  .object({
    IonBinary: IonBinarySchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Ion binary value contained in a <code>ValueHolder</code> structure.',
        }),
    ).exactOptional(),
    IonText: IonTextSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Ion plaintext value contained in a <code>ValueHolder</code> structure.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A structure that can contain a value in multiple encoding formats.',
    required: [],
  })
  .openapi('ValueHolder')

const ValueHoldersSchema = z.array(ValueHolderSchema).openapi('ValueHolders')

const PageTokenSchema = z
  .string()
  .regex(/^[A-Za-z-0-9+\/=]+$/)
  .min(4)
  .max(1024)
  .openapi('PageToken')

const PageSchema = z
  .object({
    Values: ValueHoldersSchema.and(
      z
        .any()
        .openapi({ description: 'A structure that contains values in multiple encoding formats.' }),
    ).exactOptional(),
    NextPageToken: PageTokenSchema.and(
      z.any().openapi({ description: 'The token of the next page.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains details of the fetched page.', required: [] })
  .openapi('Page')

const ExecuteStatementResultSchema = z
  .object({
    FirstPage: PageSchema.and(
      z.any().openapi({ description: 'Contains the details of the first fetched page.' }),
    ).exactOptional(),
    TimingInformation: TimingInformationSchema.and(
      z
        .any()
        .openapi({ description: 'Contains server-side performance information for the command.' }),
    ).exactOptional(),
    ConsumedIOs: IOUsageSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains metrics about the number of I/O requests that were consumed.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains the details of the executed statement.', required: [] })
  .openapi('ExecuteStatementResult')

const FetchPageResultSchema = z
  .object({
    Page: PageSchema.and(
      z.any().openapi({ description: 'Contains details of the fetched page.' }),
    ).exactOptional(),
    TimingInformation: TimingInformationSchema.and(
      z
        .any()
        .openapi({ description: 'Contains server-side performance information for the command.' }),
    ).exactOptional(),
    ConsumedIOs: IOUsageSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains metrics about the number of I/O requests that were consumed.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains the page that was fetched.', required: [] })
  .openapi('FetchPageResult')

const SendCommandResultSchema = z
  .object({
    StartSession: StartSessionResultSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the details of the started session that includes a session token. This <code>SessionToken</code> is required for every subsequent command that is issued during the current session.',
        }),
    ).exactOptional(),
    StartTransaction: StartTransactionResultSchema.and(
      z.any().openapi({ description: 'Contains the details of the started transaction.' }),
    ).exactOptional(),
    EndSession: EndSessionResultSchema.and(
      z.any().openapi({ description: 'Contains the details of the ended session.' }),
    ).exactOptional(),
    CommitTransaction: CommitTransactionResultSchema.and(
      z.any().openapi({ description: 'Contains the details of the committed transaction.' }),
    ).exactOptional(),
    AbortTransaction: AbortTransactionResultSchema.and(
      z.any().openapi({ description: 'Contains the details of the aborted transaction.' }),
    ).exactOptional(),
    ExecuteStatement: ExecuteStatementResultSchema.and(
      z.any().openapi({ description: 'Contains the details of the executed statement.' }),
    ).exactOptional(),
    FetchPage: FetchPageResultSchema.and(
      z.any().openapi({ description: 'Contains the details of the fetched page.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SendCommandResult')

const LedgerNameSchema = z
  .string()
  .regex(/(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$/)
  .min(1)
  .max(32)
  .openapi('LedgerName')

const StartSessionRequestSchema = z
  .object({
    LedgerName: LedgerNameSchema.and(
      z.any().openapi({ description: 'The name of the ledger to start a new session against.' }),
    ),
  })
  .openapi({ required: ['LedgerName'], description: 'Specifies a request to start a new session.' })
  .openapi('StartSessionRequest')

const StartTransactionRequestSchema = z
  .object({})
  .openapi({ description: 'Specifies a request to start a transaction.' })
  .openapi('StartTransactionRequest')

const EndSessionRequestSchema = z
  .object({})
  .openapi({ description: 'Specifies a request to end the session.' })
  .openapi('EndSessionRequest')

const CommitTransactionRequestSchema = z
  .object({
    TransactionId: TransactionIdSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies the transaction ID of the transaction to commit.' }),
    ),
    CommitDigest: CommitDigestSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the commit digest for the transaction to commit. For every active transaction, the commit digest must be passed. QLDB validates <code>CommitDigest</code> and rejects the commit with an error if the digest computed on the client does not match the digest computed by QLDB.</p> <p>The purpose of the <code>CommitDigest</code> parameter is to ensure that QLDB commits a transaction if and only if the server has processed the exact set of statements sent by the client, in the same order that client sent them, and with no duplicates.</p>',
        }),
    ),
  })
  .openapi({
    required: ['TransactionId', 'CommitDigest'],
    description: 'Contains the details of the transaction to commit.',
  })
  .openapi('CommitTransactionRequest')

const AbortTransactionRequestSchema = z
  .object({})
  .openapi({ description: 'Contains the details of the transaction to abort.' })
  .openapi('AbortTransactionRequest')

const StatementSchema = z.string().min(1).max(100000).openapi('Statement')

const StatementParametersSchema = z.array(ValueHolderSchema).openapi('StatementParameters')

const ExecuteStatementRequestSchema = z
  .object({
    TransactionId: TransactionIdSchema.and(
      z.any().openapi({ description: 'Specifies the transaction ID of the request.' }),
    ),
    Statement: StatementSchema.and(
      z.any().openapi({ description: 'Specifies the statement of the request.' }),
    ),
    Parameters: StatementParametersSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the parameters for the parameterized statement in the request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TransactionId', 'Statement'],
    description: 'Specifies a request to execute a statement.',
  })
  .openapi('ExecuteStatementRequest')

const FetchPageRequestSchema = z
  .object({
    TransactionId: TransactionIdSchema.and(
      z.any().openapi({ description: 'Specifies the transaction ID of the page to be fetched.' }),
    ),
    NextPageToken: PageTokenSchema.and(
      z.any().openapi({ description: 'Specifies the next page token of the page to be fetched.' }),
    ),
  })
  .openapi({
    required: ['TransactionId', 'NextPageToken'],
    description: 'Specifies the details of the page to be fetched.',
  })
  .openapi('FetchPageRequest')

const SendCommandRequestSchema = z
  .object({
    SessionToken: SessionTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the session token for the current command. A session token is constant throughout the life of the session.</p> <p>To obtain a session token, run the <code>StartSession</code> command. This <code>SessionToken</code> is required for every subsequent command that is issued during the current session.</p>',
        }),
    ).exactOptional(),
    StartSession: StartSessionRequestSchema.and(
      z
        .any()
        .openapi({
          description:
            'Command to start a new session. A session token is obtained as part of the response.',
        }),
    ).exactOptional(),
    StartTransaction: StartTransactionRequestSchema.and(
      z.any().openapi({ description: 'Command to start a new transaction.' }),
    ).exactOptional(),
    EndSession: EndSessionRequestSchema.and(
      z.any().openapi({ description: 'Command to end the current session.' }),
    ).exactOptional(),
    CommitTransaction: CommitTransactionRequestSchema.and(
      z.any().openapi({ description: 'Command to commit the specified transaction.' }),
    ).exactOptional(),
    AbortTransaction: AbortTransactionRequestSchema.and(
      z.any().openapi({ description: 'Command to abort the current transaction.' }),
    ).exactOptional(),
    ExecuteStatement: ExecuteStatementRequestSchema.and(
      z
        .any()
        .openapi({ description: 'Command to execute a statement in the specified transaction.' }),
    ).exactOptional(),
    FetchPage: FetchPageRequestSchema.and(
      z.any().openapi({ description: 'Command to fetch a page.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'SendCommandRequest', required: [] })
  .openapi('SendCommandRequest')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const InvalidSessionExceptionSchema = z.any().openapi('InvalidSessionException')

const OccConflictExceptionSchema = z.any().openapi('OccConflictException')

const RateExceededExceptionSchema = z.any().openapi('RateExceededException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const CapacityExceededExceptionSchema = z.any().openapi('CapacityExceededException')

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

export const postXAmzTargetQLDBSessionSendCommandRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=QLDBSession.SendCommand',
  description:
    '<p>Sends a command to an Amazon QLDB ledger.</p> <note> <p>Instead of interacting directly with this API, we recommend using the QLDB driver or the QLDB shell to execute data transactions on a ledger.</p> <ul> <li> <p>If you are working with an AWS SDK, use the QLDB driver. The driver provides a high-level abstraction layer above this <i>QLDB Session</i> data plane and manages <code>SendCommand</code> API calls for you. For information and a list of supported programming languages, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-driver.html">Getting started with the driver</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> <li> <p>If you are working with the AWS Command Line Interface (AWS CLI), use the QLDB shell. The shell is a command line interface that uses the QLDB driver to interact with a ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/data-shell.html">Accessing Amazon QLDB using the QLDB shell</a>.</p> </li> </ul> </note>',
  operationId: 'SendCommand',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('QLDBSession.SendCommand')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['QLDBSession.SendCommand'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SendCommandRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendCommandResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InvalidSessionException',
      content: { 'application/json': { schema: InvalidSessionExceptionSchema } },
    },
    482: {
      description: 'OccConflictException',
      content: { 'application/json': { schema: OccConflictExceptionSchema } },
    },
    483: {
      description: 'RateExceededException',
      content: { 'application/json': { schema: RateExceededExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'CapacityExceededException',
      content: { 'application/json': { schema: CapacityExceededExceptionSchema } },
    },
  },
})
