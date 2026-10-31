import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const StringArraySchema = z.array(StringSchema).openapi('StringArray')

const BasicJoinPolicySchema = z
  .object({ measurements: StringArraySchema })
  .openapi({ required: ['measurements'] })
  .openapi('BasicJoinPolicy')

const StringToStringSchema = z.record(z.string(), StringSchema).openapi('StringToString')

const Uint32Schema = z.int().min(0).max(4294967295).openapi('Uint32')

const TcbVersionPolicySchema = z
  .object({
    boot_loader: Uint32Schema.exactOptional(),
    fmc: Uint32Schema.exactOptional(),
    hexstring: StringSchema.exactOptional(),
    microcode: Uint32Schema.exactOptional(),
    snp: Uint32Schema.exactOptional(),
    tee: Uint32Schema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TcbVersionPolicy')

const StringToTcbVersionPolicySchema = z
  .record(z.string(), TcbVersionPolicySchema)
  .openapi('StringToTcbVersionPolicy')

const UVMEndorsementsDataSchema = z
  .object({ svn: StringSchema })
  .openapi({ required: ['svn'] })
  .openapi('UVMEndorsementsData')

const StringToUVMEndorsementsDataSchema = z
  .record(z.string(), UVMEndorsementsDataSchema)
  .openapi('StringToUVMEndorsementsData')

const StringToStringToUVMEndorsementsDataSchema = z
  .record(z.string(), StringToUVMEndorsementsDataSchema)
  .openapi('StringToStringToUVMEndorsementsData')

const SnpJoinPolicySchema = z
  .object({
    hostData: StringToStringSchema,
    measurements: StringArraySchema,
    tcbVersions: StringToTcbVersionPolicySchema,
    uvmEndorsements: StringToStringToUVMEndorsementsDataSchema,
  })
  .openapi({ required: ['measurements', 'hostData', 'uvmEndorsements', 'tcbVersions'] })
  .openapi('SnpJoinPolicy')

const VirtualJoinPolicySchema = z
  .object({ hostData: StringArraySchema, measurements: StringArraySchema })
  .openapi({ required: ['measurements', 'hostData'] })
  .openapi('VirtualJoinPolicy')

type JoinPolicyType = {
  sgx: z.infer<typeof BasicJoinPolicySchema>
  snp: z.infer<typeof SnpJoinPolicySchema>
  virtual: z.infer<typeof VirtualJoinPolicySchema>
}

const CCFErrorSchema = z
  .object({
    error: z
      .object({
        code: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Response error code. CCF error codes: https://microsoft.github.io/CCF/main/operations/troubleshooting.html#error-codes',
          }),
        message: z.string().exactOptional().openapi({ description: 'Response error message' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('CCFError')

const CoseSchema = z.file().openapi({ type: 'string', format: 'binary' }).openapi('Cose')

const MemberIdSchema = z
  .hex()
  .regex(/^[a-f0-9]{64}$/)
  .openapi('MemberId')

const EncryptedRecoveryShareSchema = z
  .object({ encryptedShare: StringSchema, memberId: MemberIdSchema })
  .openapi({ required: ['memberId', 'encryptedShare'] })
  .openapi('EncryptedRecoveryShare')

const FailureSchema = z
  .object({ reason: StringSchema, trace: StringSchema.exactOptional() })
  .openapi({ required: ['reason'] })
  .openapi('Failure')

const TransactionIdSchema = z
  .string()
  .regex(/^[0-9]+\.[0-9]+$/)
  .openapi('TransactionId')

const TransactionIdArraySchema = z.array(TransactionIdSchema).openapi('TransactionIdArray')

const GetCommitOutSchema = z
  .object({
    transaction_id: TransactionIdSchema,
    view_history: TransactionIdArraySchema.exactOptional(),
  })
  .openapi({ required: ['transaction_id'] })
  .openapi('GetCommitOut')

const TxStatusSchema = z.enum(['Unknown', 'Pending', 'Committed', 'Invalid']).openapi('TxStatus')

const GetTxStatusOutSchema = z
  .object({ status: TxStatusSchema, transaction_id: TransactionIdSchema })
  .openapi({ required: ['transaction_id', 'status'] })
  .openapi('GetTxStatusOut')

const JavascriptSchema = z.string().openapi('Javascript')

const JsonSchema = z.any().openapi('Json')

const JavascriptAppSchema = z
  .object({ endpoints: JsonSchema })
  .openapi({ required: ['endpoints'] })
  .openapi('JavascriptApp')

const JavascriptAppCaseSchema = z.literal('original').openapi('JavascriptAppCase')

const JavascriptModuleSchema = z
  .object({ moduleName: StringSchema })
  .openapi({ required: ['moduleName'] })
  .openapi('JavascriptModule')

const JavascriptModuleArraySchema = z.array(JavascriptModuleSchema).openapi('JavascriptModuleArray')

const JavascriptModulesSchema = z
  .object({ value: JavascriptModuleArraySchema })
  .openapi({ required: ['value'] })
  .openapi('JavascriptModules')

const JoinPolicySchema: z.ZodType<JoinPolicyType> = z
  .lazy(() =>
    z
      .object({
        sgx: BasicJoinPolicySchema,
        snp: SnpJoinPolicySchema,
        virtual: VirtualJoinPolicySchema,
      })
      .openapi({ required: ['sgx', 'virtual', 'snp'] }),
  )
  .openapi('JoinPolicy')

const JwkSchema = z
  .object({ constraint: JsonSchema, issuer: StringSchema, publicKey: StringSchema })
  .openapi({ required: ['publicKey', 'issuer', 'constraint'] })
  .openapi('Jwk')

const BooleanSchema = z.boolean().openapi('Boolean')

const JwtIssuerSchema = z
  .object({ autoRefresh: BooleanSchema, caCertBundleName: StringSchema.exactOptional() })
  .openapi({ required: ['autoRefresh'] })
  .openapi('JwtIssuer')

const StringToJwtIssuerSchema = z.record(z.string(), JwtIssuerSchema).openapi('StringToJwtIssuer')

const JwkArraySchema = z.array(JwkSchema).openapi('JwkArray')

const StringToJwkArraySchema = z.record(z.string(), JwkArraySchema).openapi('StringToJwkArray')

const JwkInfoSchema = z
  .object({
    caCertBundles: StringToStringSchema,
    issuers: StringToJwtIssuerSchema,
    keys: StringToJwkArraySchema,
  })
  .openapi({ required: ['issuers', 'keys', 'caCertBundles'] })
  .openapi('JwkInfo')

const MemberRecoveryRoleSchema = z
  .enum(['NonParticipant', 'Participant', 'Owner'])
  .openapi('MemberRecoveryRole')

const MemberStatusSchema = z.enum(['Accepted', 'Active']).openapi('MemberStatus')

const MemberSchema = z
  .object({
    certificate: StringSchema.exactOptional(),
    memberData: JsonSchema,
    memberId: MemberIdSchema,
    publicEncryptionKey: StringSchema.exactOptional(),
    recoveryRole: MemberRecoveryRoleSchema,
    status: MemberStatusSchema,
  })
  .openapi({ required: ['memberId', 'status', 'memberData', 'recoveryRole'] })
  .openapi('Member')

const MemberIdArraySchema = z.array(MemberIdSchema).openapi('MemberIdArray')

const MemberIdToFailureSchema = z.record(z.string(), FailureSchema).openapi('MemberIdToFailure')

const MemberIdToBooleanSchema = z.record(z.string(), BooleanSchema).openapi('MemberIdToBoolean')

const MemberArraySchema = z.array(MemberSchema).openapi('MemberArray')

const MembersSchema = z
  .object({ value: MemberArraySchema })
  .openapi({ required: ['value'] })
  .openapi('Members')

const NetworkInterfaceSchema = z
  .object({ protocol: StringSchema.exactOptional(), publishedAddress: StringSchema })
  .openapi({ required: ['publishedAddress'] })
  .openapi('NetworkInterface')

const NodeIdSchema = z
  .hex()
  .regex(/^[a-f0-9]{64}$/)
  .openapi('NodeId')

const StringToNetworkInterfaceSchema = z
  .record(z.string(), NetworkInterfaceSchema)
  .openapi('StringToNetworkInterface')

const NodeStatusSchema = z.enum(['Pending', 'Trusted', 'Retired']).openapi('NodeStatus')

const NodeSchema = z
  .object({
    certificate: StringSchema.exactOptional(),
    nodeData: JsonSchema,
    nodeId: NodeIdSchema,
    quoteInfo: JsonSchema,
    retiredCommitted: BooleanSchema,
    rpcInterfaces: StringToNetworkInterfaceSchema,
    status: NodeStatusSchema,
  })
  .openapi({
    required: ['nodeId', 'status', 'nodeData', 'retiredCommitted', 'quoteInfo', 'rpcInterfaces'],
  })
  .openapi('Node')

const NodeArraySchema = z.array(NodeSchema).openapi('NodeArray')

const NodesSchema = z
  .object({ value: NodeArraySchema })
  .openapi({ required: ['value'] })
  .openapi('Nodes')

const Uint64Schema = z.int().min(0).max(18446744073709552000).openapi('Uint64')

const ProposalStateSchema = z
  .enum(['Open', 'Accepted', 'Withdrawn', 'Rejected', 'Failed', 'Dropped'])
  .openapi('ProposalState')

const ProposalSchema = z
  .object({
    ballotCount: Uint64Schema,
    ballotSubmitters: MemberIdArraySchema,
    failure: FailureSchema.exactOptional(),
    finalVotes: MemberIdToBooleanSchema.exactOptional(),
    proposalId: StringSchema,
    proposalState: ProposalStateSchema,
    proposerId: MemberIdSchema,
    voteFailures: MemberIdToFailureSchema.exactOptional(),
  })
  .openapi({
    required: ['proposalId', 'proposerId', 'proposalState', 'ballotCount', 'ballotSubmitters'],
  })
  .openapi('Proposal')

const ProposalArraySchema = z.array(ProposalSchema).openapi('ProposalArray')

const ProposalListSchema = z
  .object({ value: ProposalArraySchema })
  .openapi({ required: ['value'] })
  .openapi('ProposalList')

const RecoveryResponseSchema = z
  .object({
    fullKeySubmitted: BooleanSchema,
    message: StringSchema,
    recoveryThreshold: Uint64Schema,
    submittedCount: Uint64Schema,
  })
  .openapi({ required: ['message', 'submittedCount', 'recoveryThreshold', 'fullKeySubmitted'] })
  .openapi('RecoveryResponse')

const ServiceConfigurationSchema = z
  .object({
    maximumNodeCertificateValidityDays: Uint64Schema,
    maximumServiceCertificateValidityDays: Uint64Schema,
    recentCoseProposalsWindowSize: Uint64Schema,
    recoveryThreshold: Uint64Schema,
  })
  .openapi({
    required: [
      'recoveryThreshold',
      'maximumNodeCertificateValidityDays',
      'maximumServiceCertificateValidityDays',
      'recentCoseProposalsWindowSize',
    ],
  })
  .openapi('ServiceConfiguration')

const ServiceStatusSchema = z
  .enum(['Opening', 'Open', 'WaitingForRecoveryShares', 'Recovering'])
  .openapi('ServiceStatus')

const ServiceInfoSchema = z
  .object({
    certificate: StringSchema,
    configuration: ServiceConfigurationSchema.exactOptional(),
    creationTransactionId: TransactionIdSchema.exactOptional(),
    previousServiceCreationTransactionId: TransactionIdSchema.exactOptional(),
    recoveryCount: Uint64Schema,
    serviceData: JsonSchema,
    status: ServiceStatusSchema,
  })
  .openapi({ required: ['status', 'certificate', 'recoveryCount', 'serviceData'] })
  .openapi('ServiceInfo')

const StateDigestSchema = z
  .object({ memberId: MemberIdSchema, stateDigest: StringSchema })
  .openapi({ required: ['memberId', 'stateDigest'] })
  .openapi('StateDigest')

const TransactionSchema = z
  .object({ status: TxStatusSchema, transactionId: TransactionIdSchema })
  .openapi({ required: ['status', 'transactionId'] })
  .openapi('Transaction')

const UserIdSchema = z
  .hex()
  .regex(/^[a-f0-9]{64}$/)
  .openapi('UserId')

const UserSchema = z
  .object({ certificate: StringSchema, userData: JsonSchema, userId: UserIdSchema })
  .openapi({ required: ['userId', 'certificate', 'userData'] })
  .openapi('User')

const UserArraySchema = z.array(UserSchema).openapi('UserArray')

const UsersSchema = z
  .object({ value: UserArraySchema })
  .openapi({ required: ['value'] })
  .openapi('Users')

const DefaultResponse = {
  description: 'An error occurred',
  content: { 'application/json': { schema: CCFErrorSchema } },
}

export const getGovApiRoute = createRoute({
  method: 'get',
  path: '/gov/api',
  summary: 'OpenAPI schema',
  operationId: 'GetGovApi',
  request: {
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: JsonSchema } },
    },
    default: DefaultResponse,
  },
})

export const getGovCommitRoute = createRoute({
  method: 'get',
  path: '/gov/commit',
  summary: 'Current commit level',
  description: 'Latest transaction ID that has been committed on the service',
  operationId: 'GetGovCommit',
  request: {
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
      view_history: z
        .preprocess(
          ((read) => (val: unknown) => {
            const result = read.safeParse(val)
            return result.success ? result.data : val
          })(z.stringbool()),
          BooleanSchema.openapi({
            param: {
              in: 'query',
              name: 'view_history',
              required: false,
              schema: { $ref: '#/components/schemas/boolean' },
            },
          }),
        )
        .exactOptional(),
      view_history_since: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          Uint64Schema.openapi({
            param: {
              in: 'query',
              name: 'view_history_since',
              required: false,
              schema: { $ref: '#/components/schemas/uint64' },
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: GetCommitOutSchema } },
    },
    default: DefaultResponse,
  },
})

export const getGovMembersProposalsRoute = createRoute({
  method: 'get',
  path: '/gov/members/proposals',
  summary: 'List governance proposals',
  operationId: 'GetGovMembersProposals',
  request: {
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: ProposalListSchema } },
    },
    default: DefaultResponse,
  },
})

export const getGovMembersProposalsProposalIdRoute = createRoute({
  method: 'get',
  path: '/gov/members/proposals/{proposalId}',
  summary: 'Get a governance proposal',
  operationId: 'GetGovMembersProposalsProposalId',
  request: {
    params: z.object({
      proposalId: z
        .string()
        .regex(/^[a-f0-9]{64}$/)
        .openapi({
          param: {
            in: 'path',
            name: 'proposalId',
            required: true,
            schema: { pattern: '^[a-f0-9]{64}$', type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: ProposalSchema } },
    },
    default: DefaultResponse,
  },
})

export const getGovMembersProposalsProposalIdActionsRoute = createRoute({
  method: 'get',
  path: '/gov/members/proposals/{proposalId}/actions',
  summary: "Get a proposal's actions",
  operationId: 'GetGovMembersProposalsProposalIdActions',
  request: {
    params: z.object({
      proposalId: z
        .string()
        .regex(/^[a-f0-9]{64}$/)
        .openapi({
          param: {
            in: 'path',
            name: 'proposalId',
            required: true,
            schema: { pattern: '^[a-f0-9]{64}$', type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: JsonSchema } },
    },
    default: DefaultResponse,
  },
})

export const getGovMembersProposalsProposalIdBallotsMemberIdRoute = createRoute({
  method: 'get',
  path: '/gov/members/proposals/{proposalId}/ballots/{memberId}',
  summary: "Get a member's ballot",
  operationId: 'GetGovMembersProposalsProposalIdBallotsMemberId',
  request: {
    params: z.object({
      proposalId: z
        .string()
        .regex(/^[a-f0-9]{64}$/)
        .openapi({
          param: {
            in: 'path',
            name: 'proposalId',
            required: true,
            schema: { pattern: '^[a-f0-9]{64}$', type: 'string' },
          },
        }),
      memberId: z
        .string()
        .regex(/^[a-f0-9]{64}$/)
        .openapi({
          param: {
            in: 'path',
            name: 'memberId',
            required: true,
            schema: { pattern: '^[a-f0-9]{64}$', type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'text/javascript': { schema: JavascriptSchema } },
    },
    default: DefaultResponse,
  },
})

export const postGovMembersProposalsProposalIdBallotsMemberIdSubmitRoute = createRoute({
  method: 'post',
  path: '/gov/members/proposals/{proposalId}/ballots/{memberId}:submit',
  summary: 'Submit a ballot',
  operationId: 'PostGovMembersProposalsProposalIdBallotsMemberIdSubmit',
  request: {
    params: z.object({
      proposalId: z
        .string()
        .regex(/^[a-f0-9]{64}$/)
        .openapi({
          param: {
            in: 'path',
            name: 'proposalId',
            required: true,
            schema: { pattern: '^[a-f0-9]{64}$', type: 'string' },
          },
        }),
      memberId: z
        .string()
        .regex(/^[a-f0-9]{64}$/)
        .openapi({
          param: {
            in: 'path',
            name: 'memberId',
            required: true,
            schema: { pattern: '^[a-f0-9]{64}$', type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Auto-generated request body schema',
      content: { 'application/cose': { schema: CoseSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: ProposalSchema } },
    },
    default: DefaultResponse,
  },
})

export const postGovMembersProposalsProposalIdWithdrawRoute = createRoute({
  method: 'post',
  path: '/gov/members/proposals/{proposalId}:withdraw',
  summary: 'Withdraw a governance proposal',
  operationId: 'PostGovMembersProposalsProposalIdWithdraw',
  request: {
    params: z.object({
      proposalId: z
        .string()
        .regex(/^[a-f0-9]{64}$/)
        .openapi({
          param: {
            in: 'path',
            name: 'proposalId',
            required: true,
            schema: { pattern: '^[a-f0-9]{64}$', type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Auto-generated request body schema',
      content: { 'application/cose': { schema: CoseSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: ProposalSchema } },
    },
    204: { description: 'The proposal no longer exists.' },
    default: DefaultResponse,
  },
})

export const postGovMembersProposalsCreateRoute = createRoute({
  method: 'post',
  path: '/gov/members/proposals:create',
  summary: 'Create a governance proposal',
  operationId: 'PostGovMembersProposalsCreate',
  request: {
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Auto-generated request body schema',
      content: { 'application/cose': { schema: CoseSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: ProposalSchema } },
    },
    default: DefaultResponse,
  },
})

export const getGovMembersStateDigestsMemberIdRoute = createRoute({
  method: 'get',
  path: '/gov/members/state-digests/{memberId}',
  summary: "Get a member's state digest",
  operationId: 'GetGovMembersStateDigestsMemberId',
  request: {
    params: z.object({
      memberId: z
        .string()
        .regex(/^[a-f0-9]{64}$/)
        .openapi({
          param: {
            in: 'path',
            name: 'memberId',
            required: true,
            schema: { pattern: '^[a-f0-9]{64}$', type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: StateDigestSchema } },
    },
    default: DefaultResponse,
  },
})

export const postGovMembersStateDigestsMemberIdAckRoute = createRoute({
  method: 'post',
  path: '/gov/members/state-digests/{memberId}:ack',
  summary: "Acknowledge a member's state digest",
  operationId: 'PostGovMembersStateDigestsMemberIdAck',
  request: {
    params: z.object({
      memberId: z
        .string()
        .regex(/^[a-f0-9]{64}$/)
        .openapi({
          param: {
            in: 'path',
            name: 'memberId',
            required: true,
            schema: { pattern: '^[a-f0-9]{64}$', type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Auto-generated request body schema',
      content: { 'application/cose': { schema: CoseSchema } },
      required: true,
    },
  },
  responses: { 204: { description: 'Default response description' }, default: DefaultResponse },
})

export const postGovMembersStateDigestsMemberIdUpdateRoute = createRoute({
  method: 'post',
  path: '/gov/members/state-digests/{memberId}:update',
  summary: "Update a member's state digest",
  operationId: 'PostGovMembersStateDigestsMemberIdUpdate',
  request: {
    params: z.object({
      memberId: z
        .string()
        .regex(/^[a-f0-9]{64}$/)
        .openapi({
          param: {
            in: 'path',
            name: 'memberId',
            required: true,
            schema: { pattern: '^[a-f0-9]{64}$', type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Auto-generated request body schema',
      content: { 'application/cose': { schema: CoseSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: StateDigestSchema } },
    },
    default: DefaultResponse,
  },
})

export const getGovReceiptRoute = createRoute({
  method: 'get',
  path: '/gov/receipt',
  summary: 'Receipt for a transaction',
  description: 'A signed statement from the service over a transaction entry in the ledger',
  operationId: 'GetGovReceipt',
  request: {
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
      transaction_id: TransactionIdSchema.openapi({
        param: {
          in: 'query',
          name: 'transaction_id',
          required: true,
          schema: { $ref: '#/components/schemas/TransactionId' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: JsonSchema } },
    },
    202: {
      description:
        'The transaction is not yet available. The response describes why and the Retry-After header indicates when to retry.',
      content: { 'text/plain': { schema: StringSchema } },
    },
    default: DefaultResponse,
  },
})

export const getGovReceiptCoseRoute = createRoute({
  method: 'get',
  path: '/gov/receipt/cose',
  summary: 'COSE receipt for a transaction',
  description:
    'A COSE Sign1 envelope containing a signed statement from the service over a transaction entry in the ledger, with a Merkle proof in the unprotected header. See https://datatracker.ietf.org/doc/draft-ietf-scitt-receipts-ccf-profile/ for a complete description.',
  operationId: 'GetGovReceiptCose',
  request: {
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
      transaction_id: TransactionIdSchema.openapi({
        param: {
          in: 'query',
          name: 'transaction_id',
          required: true,
          schema: { $ref: '#/components/schemas/TransactionId' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/cose': { schema: CoseSchema } },
    },
    202: {
      description:
        'The transaction is not yet available. The response describes why and the Retry-After header indicates when to retry.',
      content: { 'text/plain': { schema: StringSchema } },
    },
    default: DefaultResponse,
  },
})

export const getGovRecoveryEncryptedSharesMemberIdRoute = createRoute({
  method: 'get',
  path: '/gov/recovery/encrypted-shares/{memberId}',
  summary: 'Get an encrypted recovery share',
  operationId: 'GetGovRecoveryEncryptedSharesMemberId',
  request: {
    params: z.object({
      memberId: z
        .string()
        .regex(/^[a-f0-9]{64}$/)
        .openapi({
          param: {
            in: 'path',
            name: 'memberId',
            required: true,
            schema: { pattern: '^[a-f0-9]{64}$', type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: EncryptedRecoveryShareSchema } },
    },
    default: DefaultResponse,
  },
})

export const postGovRecoveryMembersMemberIdRecoverRoute = createRoute({
  method: 'post',
  path: '/gov/recovery/members/{memberId}:recover',
  summary: 'Submit a recovery share',
  operationId: 'PostGovRecoveryMembersMemberIdRecover',
  request: {
    params: z.object({
      memberId: z
        .string()
        .regex(/^[a-f0-9]{64}$/)
        .openapi({
          param: {
            in: 'path',
            name: 'memberId',
            required: true,
            schema: { pattern: '^[a-f0-9]{64}$', type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Auto-generated request body schema',
      content: { 'application/cose': { schema: CoseSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: RecoveryResponseSchema } },
    },
    default: DefaultResponse,
  },
})

export const getGovServiceConstitutionRoute = createRoute({
  method: 'get',
  path: '/gov/service/constitution',
  summary: 'Get the service constitution',
  operationId: 'GetGovServiceConstitution',
  request: {
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'text/javascript': { schema: JavascriptSchema } },
    },
    default: DefaultResponse,
  },
})

export const getGovServiceInfoRoute = createRoute({
  method: 'get',
  path: '/gov/service/info',
  summary: 'Get service information',
  operationId: 'GetGovServiceInfo',
  request: {
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: ServiceInfoSchema } },
    },
    default: DefaultResponse,
  },
})

export const getGovServiceJavascriptAppRoute = createRoute({
  method: 'get',
  path: '/gov/service/javascript-app',
  summary: 'Get the installed JavaScript application',
  operationId: 'GetGovServiceJavascriptApp',
  request: {
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
      case: JavascriptAppCaseSchema.openapi({
        param: {
          in: 'query',
          name: 'case',
          required: false,
          schema: { $ref: '#/components/schemas/JavascriptAppCase' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: JavascriptAppSchema } },
    },
    default: DefaultResponse,
  },
})

export const getGovServiceJavascriptModulesRoute = createRoute({
  method: 'get',
  path: '/gov/service/javascript-modules',
  summary: 'List JavaScript modules',
  operationId: 'GetGovServiceJavascriptModules',
  request: {
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: JavascriptModulesSchema } },
    },
    default: DefaultResponse,
  },
})

export const getGovServiceJavascriptModulesModuleNameRoute = createRoute({
  method: 'get',
  path: '/gov/service/javascript-modules/{moduleName}',
  summary: 'Get a JavaScript module',
  operationId: 'GetGovServiceJavascriptModulesModuleName',
  request: {
    params: z.object({
      moduleName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'moduleName', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'text/javascript': { schema: JavascriptSchema } },
    },
    default: DefaultResponse,
  },
})

export const getGovServiceJoinPolicyRoute = createRoute({
  method: 'get',
  path: '/gov/service/join-policy',
  summary: 'Get the service join policy',
  operationId: 'GetGovServiceJoinPolicy',
  request: {
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: JoinPolicySchema } },
    },
    default: DefaultResponse,
  },
})

export const getGovServiceJwkRoute = createRoute({
  method: 'get',
  path: '/gov/service/jwk',
  summary: 'Get accepted JWT issuers and keys',
  operationId: 'GetGovServiceJwk',
  request: {
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: JwkInfoSchema } },
    },
    default: DefaultResponse,
  },
})

export const getGovServiceMembersRoute = createRoute({
  method: 'get',
  path: '/gov/service/members',
  summary: 'List consortium members',
  operationId: 'GetGovServiceMembers',
  request: {
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: MembersSchema } },
    },
    default: DefaultResponse,
  },
})

export const getGovServiceMembersMemberIdRoute = createRoute({
  method: 'get',
  path: '/gov/service/members/{memberId}',
  summary: 'Get a consortium member',
  operationId: 'GetGovServiceMembersMemberId',
  request: {
    params: z.object({
      memberId: z
        .string()
        .regex(/^[a-f0-9]{64}$/)
        .openapi({
          param: {
            in: 'path',
            name: 'memberId',
            required: true,
            schema: { pattern: '^[a-f0-9]{64}$', type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: MemberSchema } },
    },
    default: DefaultResponse,
  },
})

export const getGovServiceNodesRoute = createRoute({
  method: 'get',
  path: '/gov/service/nodes',
  summary: 'List service nodes',
  operationId: 'GetGovServiceNodes',
  request: {
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: NodesSchema } },
    },
    default: DefaultResponse,
  },
})

export const getGovServiceNodesNodeIdRoute = createRoute({
  method: 'get',
  path: '/gov/service/nodes/{nodeId}',
  summary: 'Get a service node',
  operationId: 'GetGovServiceNodesNodeId',
  request: {
    params: z.object({
      nodeId: z
        .string()
        .regex(/^[a-f0-9]{64}$/)
        .openapi({
          param: {
            in: 'path',
            name: 'nodeId',
            required: true,
            schema: { pattern: '^[a-f0-9]{64}$', type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: NodeSchema } },
    },
    default: DefaultResponse,
  },
})

export const getGovServiceTransactionsCommitRoute = createRoute({
  method: 'get',
  path: '/gov/service/transactions/commit',
  summary: 'Get the latest committed transaction',
  operationId: 'GetGovServiceTransactionsCommit',
  request: {
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: TransactionSchema } },
    },
    default: DefaultResponse,
  },
})

export const getGovServiceTransactionsTransactionIdRoute = createRoute({
  method: 'get',
  path: '/gov/service/transactions/{transactionId}',
  summary: 'Get transaction status',
  operationId: 'GetGovServiceTransactionsTransactionId',
  request: {
    params: z.object({
      transactionId: z
        .string()
        .regex(/^[0-9]+\.[0-9]+$/)
        .openapi({
          param: {
            in: 'path',
            name: 'transactionId',
            required: true,
            schema: { pattern: '^[0-9]+\\.[0-9]+$', type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: TransactionSchema } },
    },
    default: DefaultResponse,
  },
})

export const getGovServiceUsersRoute = createRoute({
  method: 'get',
  path: '/gov/service/users',
  summary: 'List application users',
  operationId: 'GetGovServiceUsers',
  request: {
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: UsersSchema } },
    },
    default: DefaultResponse,
  },
})

export const getGovServiceUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/gov/service/users/{userId}',
  summary: 'Get an application user',
  operationId: 'GetGovServiceUsersUserId',
  request: {
    params: z.object({
      userId: z
        .string()
        .regex(/^[a-f0-9]{64}$/)
        .openapi({
          param: {
            in: 'path',
            name: 'userId',
            required: true,
            schema: { pattern: '^[a-f0-9]{64}$', type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: UserSchema } },
    },
    default: DefaultResponse,
  },
})

export const getGovTxRoute = createRoute({
  method: 'get',
  path: '/gov/tx',
  summary: 'Current status of a transaction',
  description: 'Possible statuses returned are Unknown, Pending, Committed or Invalid.',
  operationId: 'GetGovTx',
  request: {
    query: z.object({
      'api-version': z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.",
            in: 'query',
            name: 'api-version',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
      transaction_id: TransactionIdSchema.openapi({
        param: {
          in: 'query',
          name: 'transaction_id',
          required: true,
          schema: { $ref: '#/components/schemas/TransactionId' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: GetTxStatusOutSchema } },
    },
    default: DefaultResponse,
  },
})
