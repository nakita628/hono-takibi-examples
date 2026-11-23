type Json = { [x: string]: unknown }
type CCFError = { error?: { code?: string | undefined; message?: string | undefined } | undefined }
type Boolean = boolean
type Uint64 = number
type TransactionId = string
type TransactionIdArray = TransactionId[]
type GetCommitOut = { transaction_id: TransactionId; view_history?: TransactionIdArray | undefined }
type MemberId = string
type MemberIdArray = MemberId[]
type String = string
type Failure = { reason: String; trace?: String | undefined }
type MemberIdToBoolean = { [x: string]: Boolean }
type ProposalState = 'Open' | 'Accepted' | 'Withdrawn' | 'Rejected' | 'Failed' | 'Dropped'
type MemberIdToFailure = { [x: string]: Failure }
type Proposal = {
  ballotCount: Uint64
  ballotSubmitters: MemberIdArray
  failure?: Failure | undefined
  finalVotes?: MemberIdToBoolean | undefined
  proposalId: String
  proposalState: ProposalState
  proposerId: MemberId
  voteFailures?: MemberIdToFailure | undefined
}
type ProposalArray = Proposal[]
type ProposalList = { value: ProposalArray }
type Javascript = string
type Cose = File
type StateDigest = { memberId: MemberId; stateDigest: String }
type EncryptedRecoveryShare = { encryptedShare: String; memberId: MemberId }
type RecoveryResponse = {
  fullKeySubmitted: Boolean
  message: String
  recoveryThreshold: Uint64
  submittedCount: Uint64
}
type ServiceConfiguration = {
  maximumNodeCertificateValidityDays: Uint64
  maximumServiceCertificateValidityDays: Uint64
  recentCoseProposalsWindowSize: Uint64
  recoveryThreshold: Uint64
}
type ServiceStatus = 'Opening' | 'Open' | 'WaitingForRecoveryShares' | 'Recovering'
type ServiceInfo = {
  certificate: String
  configuration?: ServiceConfiguration | undefined
  creationTransactionId?: TransactionId | undefined
  pqCertificate?: String | undefined
  previousServiceCreationTransactionId?: TransactionId | undefined
  recoveryCount: Uint64
  serviceData: Json
  status: ServiceStatus
}
type JavascriptAppCase = 'original'
type JavascriptApp = { endpoints: Json }
type JavascriptModule = { moduleName: String }
type JavascriptModuleArray = JavascriptModule[]
type JavascriptModules = { value: JavascriptModuleArray }
type StringArray = String[]
type BasicJoinPolicy = { measurements: StringArray }
type StringToString = { [x: string]: String }
type Uint32 = number
type TcbVersionPolicy = {
  boot_loader?: Uint32 | undefined
  fmc?: Uint32 | undefined
  hexstring?: String | undefined
  microcode?: Uint32 | undefined
  snp?: Uint32 | undefined
  tee?: Uint32 | undefined
}
type StringToTcbVersionPolicy = { [x: string]: TcbVersionPolicy }
type UVMEndorsementsData = { svn: String }
type StringToUVMEndorsementsData = { [x: string]: UVMEndorsementsData }
type StringToStringToUVMEndorsementsData = { [x: string]: StringToUVMEndorsementsData }
type SnpJoinPolicy = {
  hostData: StringToString
  measurements: StringArray
  tcbVersions: StringToTcbVersionPolicy
  uvmEndorsements: StringToStringToUVMEndorsementsData
}
type VirtualJoinPolicy = { hostData: StringArray; measurements: StringArray }
type JoinPolicy = { sgx: BasicJoinPolicy; snp: SnpJoinPolicy; virtual: VirtualJoinPolicy }
type JwtIssuer = { autoRefresh: Boolean; caCertBundleName?: String | undefined }
type StringToJwtIssuer = { [x: string]: JwtIssuer }
type Jwk = { constraint: Json; issuer: String; publicKey: String }
type JwkArray = Jwk[]
type StringToJwkArray = { [x: string]: JwkArray }
type JwkInfo = { caCertBundles: StringToString; issuers: StringToJwtIssuer; keys: StringToJwkArray }
type MemberRecoveryRole = 'NonParticipant' | 'Participant' | 'Owner'
type MemberStatus = 'Accepted' | 'Active'
type Member = {
  certificate?: String | undefined
  memberData: Json
  memberId: MemberId
  publicEncryptionKey?: String | undefined
  recoveryRole: MemberRecoveryRole
  status: MemberStatus
}
type MemberArray = Member[]
type Members = { value: MemberArray }
type NodeId = string
type NetworkInterface = { protocol?: String | undefined; publishedAddress: String }
type StringToNetworkInterface = { [x: string]: NetworkInterface }
type NodeStatus = 'Pending' | 'Trusted' | 'Retired'
type Node = {
  certificate?: String | undefined
  nodeData: Json
  nodeId: NodeId
  quoteInfo: Json
  retiredCommitted: Boolean
  rpcInterfaces: StringToNetworkInterface
  status: NodeStatus
}
type NodeArray = Node[]
type Nodes = { value: NodeArray }
type TxStatus = 'Unknown' | 'Pending' | 'Committed' | 'Invalid'
type Transaction = { status: TxStatus; transactionId: TransactionId }
type UserId = string
type User = { certificate?: String | undefined; userData: Json; userId: UserId }
type UserArray = User[]
type Users = { value: UserArray }
type GetTxStatusOut = { status: TxStatus; transaction_id: TransactionId }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/gov/api': {
      $get:
        | {
            input: { query: { 'api-version'?: string | undefined } }
            output: Json
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'api-version'?: string | undefined } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/commit': {
      $get:
        | {
            input: {
              query: {
                view_history?: Boolean | undefined
                view_history_since?: Uint64 | undefined
                'api-version'?: string | undefined
              }
            }
            output: GetCommitOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                view_history?: Boolean | undefined
                view_history_since?: Uint64 | undefined
                'api-version'?: string | undefined
              }
            }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/members/proposals': {
      $get:
        | {
            input: { query: { 'api-version'?: string | undefined } }
            output: ProposalList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'api-version'?: string | undefined } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/members/proposals/:proposalId': {
      $get:
        | {
            input: { param: { proposalId: string } } & {
              query: { 'api-version'?: string | undefined }
            }
            output: Proposal
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { proposalId: string } } & {
              query: { 'api-version'?: string | undefined }
            }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/members/proposals/:proposalId/actions': {
      $get:
        | {
            input: { param: { proposalId: string } } & {
              query: { 'api-version'?: string | undefined }
            }
            output: Json
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { proposalId: string } } & {
              query: { 'api-version'?: string | undefined }
            }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/members/proposals/:proposalId/ballots/:memberId': {
      $get:
        | {
            input: { param: { proposalId: string; memberId: string } } & {
              query: { 'api-version'?: string | undefined }
            }
            output: Javascript
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { proposalId: string; memberId: string } } & {
              query: { 'api-version'?: string | undefined }
            }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/members/proposals/:proposalId/ballots/:memberId:submit': {
      $post:
        | {
            input: { param: { proposalId: string; memberId: string } } & {
              query: { 'api-version'?: string | undefined }
            } & { json: Cose }
            output: Proposal
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { proposalId: string; memberId: string } } & {
              query: { 'api-version'?: string | undefined }
            } & { json: Cose }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/members/proposals/:proposalId:withdraw': {
      $post:
        | {
            input: { param: { proposalId: string } } & {
              query: { 'api-version'?: string | undefined }
            } & { json: Cose }
            output: Proposal
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { proposalId: string } } & {
              query: { 'api-version'?: string | undefined }
            } & { json: Cose }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { proposalId: string } } & {
              query: { 'api-version'?: string | undefined }
            } & { json: Cose }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/members/proposals:create': {
      $post:
        | {
            input: { query: { 'api-version'?: string | undefined } } & { json: Cose }
            output: Proposal
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'api-version'?: string | undefined } } & { json: Cose }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/members/state-digests/:memberId': {
      $get:
        | {
            input: { param: { memberId: string } } & {
              query: { 'api-version'?: string | undefined }
            }
            output: StateDigest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { memberId: string } } & {
              query: { 'api-version'?: string | undefined }
            }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/members/state-digests/:memberId:ack': {
      $post:
        | {
            input: { param: { memberId: string } } & {
              query: { 'api-version'?: string | undefined }
            } & { json: Cose }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { memberId: string } } & {
              query: { 'api-version'?: string | undefined }
            } & { json: Cose }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/members/state-digests/:memberId:update': {
      $post:
        | {
            input: { param: { memberId: string } } & {
              query: { 'api-version'?: string | undefined }
            } & { json: Cose }
            output: StateDigest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { memberId: string } } & {
              query: { 'api-version'?: string | undefined }
            } & { json: Cose }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/receipt': {
      $get:
        | {
            input: { query: { transaction_id: TransactionId; 'api-version'?: string | undefined } }
            output: Json
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { transaction_id: TransactionId; 'api-version'?: string | undefined } }
            output: String
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { query: { transaction_id: TransactionId; 'api-version'?: string | undefined } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/receipt/cose': {
      $get:
        | {
            input: { query: { transaction_id: TransactionId; 'api-version'?: string | undefined } }
            output: Cose
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { transaction_id: TransactionId; 'api-version'?: string | undefined } }
            output: String
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { query: { transaction_id: TransactionId; 'api-version'?: string | undefined } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/recovery/encrypted-shares/:memberId': {
      $get:
        | {
            input: { param: { memberId: string } } & {
              query: { 'api-version'?: string | undefined }
            }
            output: EncryptedRecoveryShare
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { memberId: string } } & {
              query: { 'api-version'?: string | undefined }
            }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/recovery/members/:memberId:recover': {
      $post:
        | {
            input: { param: { memberId: string } } & {
              query: { 'api-version'?: string | undefined }
            } & { json: Cose }
            output: RecoveryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { memberId: string } } & {
              query: { 'api-version'?: string | undefined }
            } & { json: Cose }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/service/constitution': {
      $get:
        | {
            input: { query: { 'api-version'?: string | undefined } }
            output: Javascript
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { 'api-version'?: string | undefined } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/service/info': {
      $get:
        | {
            input: { query: { 'api-version'?: string | undefined } }
            output: ServiceInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'api-version'?: string | undefined } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/service/javascript-app': {
      $get:
        | {
            input: {
              query: { case?: JavascriptAppCase | undefined; 'api-version'?: string | undefined }
            }
            output: JavascriptApp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { case?: JavascriptAppCase | undefined; 'api-version'?: string | undefined }
            }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/service/javascript-modules': {
      $get:
        | {
            input: { query: { 'api-version'?: string | undefined } }
            output: JavascriptModules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'api-version'?: string | undefined } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/service/javascript-modules/:moduleName': {
      $get:
        | {
            input: { param: { moduleName: string } } & {
              query: { 'api-version'?: string | undefined }
            }
            output: Javascript
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { moduleName: string } } & {
              query: { 'api-version'?: string | undefined }
            }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/service/join-policy': {
      $get:
        | {
            input: { query: { 'api-version'?: string | undefined } }
            output: JoinPolicy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'api-version'?: string | undefined } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/service/jwk': {
      $get:
        | {
            input: { query: { 'api-version'?: string | undefined } }
            output: JwkInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'api-version'?: string | undefined } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/service/members': {
      $get:
        | {
            input: { query: { 'api-version'?: string | undefined } }
            output: Members
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'api-version'?: string | undefined } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/service/members/:memberId': {
      $get:
        | {
            input: { param: { memberId: string } } & {
              query: { 'api-version'?: string | undefined }
            }
            output: Member
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { memberId: string } } & {
              query: { 'api-version'?: string | undefined }
            }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/service/nodes': {
      $get:
        | {
            input: { query: { 'api-version'?: string | undefined } }
            output: Nodes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'api-version'?: string | undefined } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/service/nodes/:nodeId': {
      $get:
        | {
            input: { param: { nodeId: string } } & { query: { 'api-version'?: string | undefined } }
            output: Node
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { nodeId: string } } & { query: { 'api-version'?: string | undefined } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/service/transactions/commit': {
      $get:
        | {
            input: { query: { 'api-version'?: string | undefined } }
            output: Transaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'api-version'?: string | undefined } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/service/transactions/:transactionId': {
      $get:
        | {
            input: { param: { transactionId: string } } & {
              query: { 'api-version'?: string | undefined }
            }
            output: Transaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transactionId: string } } & {
              query: { 'api-version'?: string | undefined }
            }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/service/users': {
      $get:
        | {
            input: { query: { 'api-version'?: string | undefined } }
            output: Users
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'api-version'?: string | undefined } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/service/users/:userId': {
      $get:
        | {
            input: { param: { userId: string } } & { query: { 'api-version'?: string | undefined } }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { query: { 'api-version'?: string | undefined } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gov/tx': {
      $get:
        | {
            input: { query: { transaction_id: TransactionId; 'api-version'?: string | undefined } }
            output: GetTxStatusOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { transaction_id: TransactionId; 'api-version'?: string | undefined } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
