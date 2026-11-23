import { createRoute, z } from '@hono/zod-openapi'

type Uint64Type = string

const Uint64Schema: z.ZodType<Uint64Type> = z.string().openapi({ example: '1' }).openapi('Uint64')

const ValidatorStatusSchema = z
  .enum([
    'pending_initialized',
    'pending_queued',
    'active_ongoing',
    'active_exiting',
    'active_slashed',
    'exited_unslashed',
    'exited_slashed',
    'withdrawal_possible',
    'withdrawal_done',
  ])
  .openapi({
    description:
      "Possible statuses:\n- **pending_initialized** - When the first deposit is processed, but not enough funds are available (or not yet the end of the first epoch) to get validator into the activation queue.\n- **pending_queued** - When validator is waiting to get activated, and have enough funds etc. while in the queue, validator activation epoch keeps changing until it gets to the front and make it through (finalization is a requirement here too).\n- **active_ongoing** - When validator must be attesting, and have not initiated any exit.\n- **active_exiting** - When validator is still active, but filed a voluntary request to exit.\n- **active_slashed** - When validator is still active, but have a slashed status and is scheduled to exit.\n- **exited_unslashed** - When validator has reached regular exit epoch, not being slashed, and doesn't have to attest any more, but cannot withdraw yet.\n- **exited_slashed** - When validator has reached regular exit epoch, but was slashed, have to wait for a longer withdrawal period.\n- **withdrawal_possible** - After validator has exited, a while later is permitted to move funds, and is truly out of the system.\n- **withdrawal_done** - (not possible in phase0, except slashing full balance) - actually having moved funds away\n\n[Validator status specification](https://hackmd.io/ofFJ5gOmQpu1jjHilHbdQQ)\n",
    example: 'active_ongoing',
  })
  .openapi('ValidatorStatus')

const GloasBuilderRequestAuthSchema = z
  .object({
    data: z
      .hex()
      .regex(/^0x(?:[a-fA-F0-9]{2}){1,4096}$/)
      .openapi({
        description:
          "Opaque authentication data unique to the builder, agreed upon out of band. The meaning of\nthe up to `MAX_BUILDER_AUTH_DATA_SIZE` (4096) bytes is left to the two parties; the builder checks the\nexact bytes when it verifies. When no value has been agreed out of band, implementations\nSHOULD default to the builder's hostname derived from its URL, see\n[default auth data](https://github.com/ethereum/builder-specs/blob/main/specs/gloas/validator.md#default-auth-data),\nso proposers with no prior relationship can construct an identical `data`\ndeterministically. A zero-length `data` is invalid.\n",
        example: '0x1234567890abcdef',
      }),
    slot: Uint64Schema.openapi({
      description: 'The proposal slot this request is authorized for.',
    }),
  })
  .openapi({
    description:
      'The [`BuilderRequestAuth`](https://github.com/ethereum/builder-specs/blob/main/specs/gloas/validator.md#builderrequestauth) object from the Builder API Gloas spec.',
    required: ['data', 'slot'],
  })
  .openapi('GloasBuilderRequestAuth')

const SignatureSchema = z
  .hex()
  .regex(/^0x[a-fA-F0-9]{192}$/)
  .openapi({
    example:
      '0x1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505cc411d61252fb6cb3fa0017b679f8bb2305b26a285fa2737f175668d0dff91cc1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505',
  })
  .openapi('Signature')

const GloasSignedBuilderRequestAuthSchema = z
  .object({ message: GloasBuilderRequestAuthSchema, signature: SignatureSchema })
  .openapi({
    description:
      'The [`SignedBuilderRequestAuth`](https://github.com/ethereum/builder-specs/blob/main/specs/gloas/validator.md#signedbuilderrequestauth) object from the Builder API Gloas spec.',
    required: ['message', 'signature'],
  })
  .openapi('GloasSignedBuilderRequestAuth')

type GloasBuilderPreferencesEntryType = {
  proposer_pubkey: string
  url: string
  auth: z.infer<typeof GloasSignedBuilderRequestAuthSchema>
  max_execution_payment: z.infer<typeof Uint64Schema> & unknown
}

const GloasBuilderPreferencesEntrySchema: z.ZodType<GloasBuilderPreferencesEntryType> = z
  .object({
    proposer_pubkey: z
      .hex()
      .regex(/^0x[a-fA-F0-9]{96}$/)
      .openapi({
        description:
          "The validator's BLS public key, uniquely identifying them. _48-bytes, hex encoded with 0x prefix, case insensitive._",
        example:
          '0x93247f2209abcacf57b75a51dafae777f9dd38bc7053d1af526f220a7489a6d3a2753e5f3e8b1cfe39b56f43611df74a',
      })
      .openapi({ description: 'The BLS public key of the proposer these preferences apply to.' }),
    url: z
      .url()
      .max(2048)
      .openapi({
        description:
          "The URL this entry's preferences are submitted to. Multiple entries MAY share a `url`; the beacon node makes one submission per entry.",
        example: 'https://builder.example.com',
      }),
    auth: GloasSignedBuilderRequestAuthSchema.openapi({
      description:
        'Authenticates this submission to the builder. The beacon node MUST forward `message` and `signature` byte-for-byte unchanged.',
    }),
    max_execution_payment: Uint64Schema.openapi({
      description:
        'Maximum execution-layer payment, in Gwei, submitted to this builder so it can shape its bid.',
      example: '1000000000',
    }),
  })
  .openapi({
    description:
      "A per-builder preference the validator client asks the beacon node to submit ahead of the bid\nrequest, one entry per builder per proposer. A single submission batches these across the\nvalidator client's proposers, so each entry names the proposer it belongs to in\n`proposer_pubkey`. It is a dedicated type, distinct from the block-production `BuilderEntry`.\n\nThe entry pairs the beacon node's routing with the payload the builder receives, so like\n`BuilderEntry` it has no Builder API definition. Its SSZ container uses that type's constants\nand the `SignedBuilderRequestAuth` object from the Builder API Gloas spec:\n\n    class BuilderPreferencesEntry(Container):\n        proposer_pubkey: BLSPubkey  # the proposer these preferences belong to\n        url: ByteList[MAX_BUILDER_URL_SIZE]  # UTF-8 bytes of `url`, exactly as in JSON\n        auth: SignedBuilderRequestAuth\n        max_execution_payment: Gwei\n\nIn either encoding, a zero-length `url` is invalid.\n",
    required: ['proposer_pubkey', 'url', 'auth', 'max_execution_payment'],
  })
  .openapi('GloasBuilderPreferencesEntry')

type RootType = string

const RootSchema: z.ZodType<RootType> = z
  .hex()
  .regex(/^0x[a-fA-F0-9]{64}$/)
  .openapi({ example: '0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2' })
  .openapi('Root')

type ValidatorResponseType = {
  index: z.infer<typeof Uint64Schema>
  balance: z.infer<typeof Uint64Schema>
  status: z.infer<typeof ValidatorStatusSchema>
  validator: {
    pubkey: z.infer<typeof GloasBuilderPreferencesEntrySchema>
    withdrawal_credentials: z.infer<typeof RootSchema>
    effective_balance: z.infer<typeof Uint64Schema>
    slashed: boolean
    activation_eligibility_epoch: z.infer<typeof Uint64Schema>
    activation_epoch: z.infer<typeof Uint64Schema>
    exit_epoch: z.infer<typeof Uint64Schema>
    withdrawable_epoch: z.infer<typeof Uint64Schema>
  }
}

const ForkVersionSchema = z
  .hex()
  .regex(/^0x[a-fA-F0-9]{8}$/)
  .openapi({ description: 'a fork version number', example: '0x00000000' })
  .openapi('ForkVersion')

type ForkType = {
  previous_version: z.infer<typeof ForkVersionSchema>
  current_version: z.infer<typeof ForkVersionSchema>
  epoch: z.infer<typeof Uint64Schema>
}

type CheckpointType = { epoch: z.infer<typeof Uint64Schema>; root: z.infer<typeof RootSchema> }

const PeerIdSchema = z
  .string()
  .openapi({
    description:
      'Cryptographic hash of a peer’s public key. [Read more](https://docs.libp2p.io/concepts/peer-id/)',
    example: 'QmYyQSo1c1Ym7orWxLYvCrM2EmxFTANf8wXmmE7DWjhx5N',
  })
  .openapi('PeerId')

const GloasBeaconStateSchema: z.ZodType<GloasBeaconStateType> = z
  .lazy(() =>
    z
      .object({
        genesis_time: Uint64Schema,
        genesis_validators_root: RootSchema,
        slot: Uint64Schema,
        fork: ForkSchema,
        latest_block_header: z
          .object({
            slot: Uint64Schema.openapi({
              description: 'The slot to which this block corresponds.',
            }),
            proposer_index: Uint64Schema.openapi({
              description: 'Index of validator in validator registry.',
            }),
            parent_root: RootSchema.openapi({
              description: 'The signing merkle root of the parent `BeaconBlock`.',
            }),
            state_root: RootSchema.openapi({
              description: 'The tree hash merkle root of the `BeaconState` for the `BeaconBlock`.',
            }),
          })
          .openapi({ required: ['slot', 'proposer_index', 'parent_root', 'state_root'] })
          .and(
            z
              .object({
                body_root: RootSchema.openapi({
                  description:
                    'The tree hash merkle root of the `BeaconBlockBody` for the `BeaconBlock`',
                }),
              })
              .openapi({ required: ['body_root'] }),
          )
          .openapi({
            description:
              'The [`BeaconBlockHeader`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#beaconblockheader) object from the CL spec.',
          }),
        block_roots: z
          .array(RootSchema)
          .length(8192)
          .openapi({ description: 'Fixed vector of 8192 roots.' }),
        state_roots: z
          .array(RootSchema)
          .length(8192)
          .openapi({ description: 'Fixed vector of 8192 roots.' }),
        historical_roots: z
          .array(RootSchema)
          .max(16777216)
          .openapi({
            description:
              'Variable length list, maximum 16777216 items. Frozen in Capella, replaced by `historical_summaries`.',
          }),
        eth1_data: z
          .object({
            deposit_root: RootSchema.openapi({ description: 'Root of the deposit tree.' }),
            deposit_count: Uint64Schema.openapi({ description: 'Total number of deposits.' }),
            block_hash: z
              .lazy(() => GloasBeaconStateSchema)
              .openapi({ description: 'Ethereum 1.x block hash.' }),
          })
          .openapi({
            description:
              'The [`Eth1Data`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#eth1data) object from the CL spec.',
            required: ['deposit_root', 'deposit_count', 'block_hash'],
          }),
        eth1_data_votes: z
          .array(z.lazy(() => GloasBeaconStateSchema))
          .max(2048)
          .openapi({ description: 'Variable length list, maximum 2048 items.' }),
        eth1_deposit_index: Uint64Schema,
        validators: z
          .array(z.lazy(() => ValidatorResponseSchema))
          .openapi({ description: 'Progressive list of validators.' }),
        balances: z
          .array(Uint64Schema)
          .openapi({ description: 'Progressive list of validator balances in gwei.' }),
        randao_mixes: z
          .array(
            z
              .hex()
              .regex(/^0x[a-fA-F0-9]{64}$/)
              .openapi({
                example: '0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2',
              }),
          )
          .length(65536)
          .openapi({ description: 'Fixed vector of 65536 roots.' }),
        slashings: z
          .array(Uint64Schema)
          .length(8192)
          .openapi({
            description: 'Fixed vector of 8192 per-epoch slashed effective balance totals.',
          }),
        previous_epoch_participation: z
          .array(z.lazy(() => GloasBeaconStateSchema))
          .openapi({
            description:
              'Progressive list of validator participation flags for the previous epoch.',
          }),
        current_epoch_participation: z
          .array(
            z
              .string()
              .regex(/^([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/)
              .openapi({ description: 'Unsigned 8 bit integer, max value 255', example: '0' }),
          )
          .openapi({
            description: 'Progressive list of validator participation flags for the current epoch.',
          }),
        justification_bits: z
          .hex()
          .regex(/^0x[a-fA-F0-9]{2,}$/)
          .openapi({ description: 'Bit set for every recent justified epoch.', example: '0x01' }),
        previous_justified_checkpoint: CheckpointSchema,
        current_justified_checkpoint: CheckpointSchema,
        finalized_checkpoint: CheckpointSchema,
        inactivity_scores: z
          .array(Uint64Schema)
          .openapi({ description: 'Progressive list of per-validator inactivity scores.' }),
        current_sync_committee: z.lazy(() => GloasBeaconStateSchema),
        next_sync_committee: z
          .object({
            pubkeys: z.array(z.lazy(() => GloasBuilderPreferencesEntrySchema)).length(512),
            aggregate_pubkey: z.lazy(() => GloasBuilderPreferencesEntrySchema),
          })
          .openapi({ required: ['pubkeys', 'aggregate_pubkey'] }),
        latest_block_hash: z
          .hex()
          .regex(/^0x[a-fA-F0-9]{64}$/)
          .openapi({
            example: '0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2',
          }),
        next_withdrawal_index: Uint64Schema,
        next_withdrawal_validator_index: Uint64Schema,
        historical_summaries: z
          .array(
            z
              .object({ block_summary_root: RootSchema, state_summary_root: RootSchema })
              .openapi({
                description:
                  'The [`HistoricalSummary`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/capella/beacon-chain.md#historicalsummary) object from the CL Capella spec.',
                required: ['block_summary_root', 'state_summary_root'],
              }),
          )
          .max(16777216)
          .openapi({ description: 'Variable length list, maximum 16777216 items.' }),
        deposit_requests_start_index: Uint64Schema,
        deposit_balance_to_consume: Uint64Schema,
        exit_balance_to_consume: Uint64Schema,
        earliest_exit_epoch: Uint64Schema,
        consolidation_balance_to_consume: Uint64Schema,
        earliest_consolidation_epoch: Uint64Schema,
        pending_deposits: GloasPendingDepositsSchema,
        pending_partial_withdrawals: GloasPendingPartialWithdrawalsSchema,
        pending_consolidations: GloasPendingConsolidationsSchema,
        proposer_lookahead: z
          .array(Uint64Schema)
          .length(64)
          .openapi({
            description: 'Fixed vector of proposer indices for the current and next epoch.',
          }),
        builders: z
          .array(GloasBuilderSchema)
          .openapi({ description: 'Progressive list of builders.' }),
        next_withdrawal_builder_index: Uint64Schema,
        execution_payload_availability: z
          .lazy(() => GloasBeaconStateSchema)
          .openapi({
            description: 'Payload availability for the slots in SLOTS_PER_HISTORICAL_ROOT (8192).',
            example:
              '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
          }),
        builder_pending_payments: GloasBuilderPendingPaymentsSchema,
        builder_pending_withdrawals: GloasBuilderPendingWithdrawalsSchema,
        latest_execution_payload_bid: GloasExecutionPayloadBidSchema,
        payload_expected_withdrawals: z
          .array(CapellaWithdrawalSchema)
          .max(16)
          .openapi({
            description: 'Progressive list of withdrawals expected in the next execution payload.',
          }),
        ptc_window: z
          .array(GloasPayloadTimelinessCommitteeSchema)
          .length(96)
          .openapi({ description: 'Fixed vector of 96 payload-timeliness committees.' }),
      })
      .openapi({
        description:
          'The [`BeaconState`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/beacon-chain.md#beaconstate) object from the CL Gloas spec.',
        required: [
          'genesis_time',
          'genesis_validators_root',
          'slot',
          'fork',
          'latest_block_header',
          'block_roots',
          'state_roots',
          'historical_roots',
          'eth1_data',
          'eth1_data_votes',
          'eth1_deposit_index',
          'validators',
          'balances',
          'randao_mixes',
          'slashings',
          'previous_epoch_participation',
          'current_epoch_participation',
          'justification_bits',
          'previous_justified_checkpoint',
          'current_justified_checkpoint',
          'finalized_checkpoint',
          'inactivity_scores',
          'current_sync_committee',
          'next_sync_committee',
          'latest_block_hash',
          'next_withdrawal_index',
          'next_withdrawal_validator_index',
          'historical_summaries',
          'deposit_requests_start_index',
          'deposit_balance_to_consume',
          'exit_balance_to_consume',
          'earliest_exit_epoch',
          'consolidation_balance_to_consume',
          'earliest_consolidation_epoch',
          'pending_deposits',
          'pending_partial_withdrawals',
          'pending_consolidations',
          'proposer_lookahead',
          'builders',
          'next_withdrawal_builder_index',
          'execution_payload_availability',
          'builder_pending_payments',
          'builder_pending_withdrawals',
          'latest_execution_payload_bid',
          'payload_expected_withdrawals',
          'ptc_window',
        ],
      }),
  )
  .openapi('GloasBeaconState')

type NetworkIdentityType = {
  peer_id: z.infer<typeof PeerIdSchema>
  enr: string
  p2p_addresses: string[]
  discovery_addresses: NetworkIdentityType[]
  metadata: {
    seq_number: z.infer<typeof Uint64Schema>
    attnets: z.infer<typeof GloasBeaconStateSchema>
    syncnets?: z.infer<typeof GloasBeaconStateSchema>
    custody_group_count?: z.infer<typeof Uint64Schema>
  }
}

const ForkSchema: z.ZodType<ForkType> = z
  .object({
    previous_version: ForkVersionSchema,
    current_version: ForkVersionSchema,
    epoch: Uint64Schema,
  })
  .openapi({
    description:
      'The [`Fork`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#fork) object from the CL spec.',
    required: ['previous_version', 'current_version', 'epoch'],
  })
  .openapi('Fork')

const ValidatorResponseSchema: z.ZodType<ValidatorResponseType> = z
  .object({
    index: Uint64Schema.openapi({ description: 'Index of validator in validator registry.' }),
    balance: Uint64Schema.openapi({ description: 'Current validator balance in gwei.' }),
    status: ValidatorStatusSchema,
    validator: z
      .object({
        pubkey: z.lazy(() => GloasBuilderPreferencesEntrySchema),
        withdrawal_credentials: RootSchema.openapi({
          description: 'Root of withdrawal credentials',
        }),
        effective_balance: Uint64Schema.openapi({ description: 'Balance at stake in Gwei.' }),
        slashed: z
          .boolean()
          .openapi({ example: false, description: 'Was validator slashed (not longer active).' }),
        activation_eligibility_epoch: Uint64Schema.openapi({
          description: 'When criteria for activation were met.',
        }),
        activation_epoch: Uint64Schema.openapi({
          description: "Epoch when validator activated. 'FAR_FUTURE_EPOCH' if not activated",
        }),
        exit_epoch: Uint64Schema.openapi({
          description: "Epoch when validator exited. 'FAR_FUTURE_EPOCH' if not exited.",
        }),
        withdrawable_epoch: Uint64Schema.openapi({
          description:
            "When validator can withdraw or transfer funds. 'FAR_FUTURE_EPOCH' if not defined",
        }),
      })
      .openapi({
        description:
          'The [`Validator`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#validator) object from the CL spec.',
        required: [
          'pubkey',
          'withdrawal_credentials',
          'effective_balance',
          'slashed',
          'activation_eligibility_epoch',
          'activation_epoch',
          'exit_epoch',
          'withdrawable_epoch',
        ],
      }),
  })
  .openapi({ required: ['index', 'balance', 'status', 'validator'] })
  .openapi('ValidatorResponse')

const CheckpointSchema: z.ZodType<CheckpointType> = z
  .object({ epoch: Uint64Schema, root: RootSchema })
  .openapi({
    description:
      'The [`Checkpoint`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#checkpoint) object from the CL spec.',
    required: ['epoch', 'root'],
  })
  .openapi('Checkpoint')

const Phase0AttestationDataSchema = z
  .object({
    slot: Uint64Schema,
    index: Uint64Schema.openapi({ example: '0' }),
    beacon_block_root: RootSchema.openapi({ description: 'LMD GHOST vote.' }),
    source: CheckpointSchema,
    target: CheckpointSchema,
  })
  .openapi({
    description:
      'The [`AttestationData`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#attestationdata) object from the CL spec.',
    required: ['slot', 'index', 'beacon_block_root', 'source', 'target'],
  })
  .openapi('Phase0AttestationData')

type Phase0BeaconStateType = {
  genesis_time: z.infer<typeof Uint64Schema>
  genesis_validators_root: z.infer<typeof RootSchema>
  slot: z.infer<typeof Uint64Schema>
  fork: z.infer<typeof ForkSchema>
  latest_block_header: z.infer<typeof GloasBeaconStateSchema>
  block_roots: z.infer<typeof RootSchema>[]
  state_roots: z.infer<typeof RootSchema>[]
  historical_roots: z.infer<typeof RootSchema>[]
  eth1_data: z.infer<typeof GloasBeaconStateSchema>
  eth1_data_votes: z.infer<typeof GloasBeaconStateSchema>[]
  eth1_deposit_index: z.infer<typeof Uint64Schema>
  validators: z.infer<typeof ValidatorResponseSchema>[]
  balances: z.infer<typeof Uint64Schema>[]
  randao_mixes: z.infer<typeof GloasBeaconStateSchema>[]
  slashings: z.infer<typeof Uint64Schema>[]
  previous_epoch_attestations: Phase0BeaconStateType[]
  current_epoch_attestations: {
    aggregation_bits: string
    data: z.infer<typeof Phase0AttestationDataSchema>
    inclusion_delay: z.infer<typeof Uint64Schema>
    proposer_index: z.infer<typeof Uint64Schema>
  }[]
  justification_bits: z.infer<typeof GloasBeaconStateSchema>
  previous_justified_checkpoint: z.infer<typeof CheckpointSchema>
  current_justified_checkpoint: z.infer<typeof CheckpointSchema>
  finalized_checkpoint: z.infer<typeof CheckpointSchema>
}

const GraffitiSchema = z
  .hex()
  .regex(/^0x[a-fA-F0-9]{64}$/)
  .openapi({ example: '0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2' })
  .openapi('Graffiti')

const Phase0SignedBeaconBlockHeaderSchema = z
  .object({ message: z.lazy(() => GloasBeaconStateSchema), signature: SignatureSchema })
  .openapi({
    description:
      'The [`SignedBeaconBlockHeader`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#signedbeaconblockheader) object envelope from the CL spec.',
    required: ['message', 'signature'],
  })
  .openapi('Phase0SignedBeaconBlockHeader')

const Phase0ProposerSlashingSchema = z
  .object({
    signed_header_1: Phase0SignedBeaconBlockHeaderSchema,
    signed_header_2: Phase0SignedBeaconBlockHeaderSchema,
  })
  .openapi({
    description:
      'The [`ProposerSlashing`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#proposerslashing) object from the CL spec.',
    required: ['signed_header_1', 'signed_header_2'],
  })
  .openapi('Phase0ProposerSlashing')

const Phase0AttesterSlashingSchema = z
  .object({
    attestation_1: z
      .object({
        attesting_indices: z
          .array(Uint64Schema)
          .max(2048)
          .openapi({ description: 'Attesting validator indices' }),
        data: Phase0AttestationDataSchema,
        signature: SignatureSchema.openapi({
          description:
            'The BLS signature of the `IndexedAttestation`, created by the validator of the attestation.',
        }),
      })
      .openapi({
        description:
          'The [`IndexedAttestation`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#indexedattestation) object from the CL spec.',
        required: ['attesting_indices', 'data', 'signature'],
      }),
    attestation_2: Attestation_1Schema,
  })
  .openapi({
    description:
      'The [`AttesterSlashing`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#attesterslashing) object from the CL spec.',
    required: ['attestation_1', 'attestation_2'],
  })
  .openapi('Phase0AttesterSlashing')

const Phase0BeaconStateSchema: z.ZodType<Phase0BeaconStateType> = z
  .lazy(() =>
    z
      .object({
        genesis_time: Uint64Schema,
        genesis_validators_root: RootSchema,
        slot: Uint64Schema,
        fork: ForkSchema,
        latest_block_header: z.lazy(() => GloasBeaconStateSchema),
        block_roots: z.array(RootSchema).openapi({ description: 'Fixed length of 8192 items' }),
        state_roots: z.array(RootSchema).openapi({ description: 'Fixed length of 8192 items' }),
        historical_roots: z
          .array(RootSchema)
          .openapi({ description: 'Variable length list, maximum 16777216 items' }),
        eth1_data: z.lazy(() => GloasBeaconStateSchema),
        eth1_data_votes: z
          .array(z.lazy(() => GloasBeaconStateSchema))
          .max(2048)
          .openapi({ description: 'Variable length list, maximum 2048 items.' }),
        eth1_deposit_index: Uint64Schema,
        validators: z
          .array(z.lazy(() => ValidatorResponseSchema))
          .openapi({ description: 'Variable length list, maximum 1099511627776 items' }),
        balances: z
          .array(Uint64Schema)
          .openapi({
            description:
              'Validator balances in gwei. Variable length list, maximum 1099511627776 items',
          }),
        randao_mixes: z
          .array(z.lazy(() => GloasBeaconStateSchema))
          .openapi({ description: 'Fixed length of 65536 items' }),
        slashings: z
          .array(Uint64Schema)
          .openapi({
            description: 'Per-epoch sums of slashed effective balances. Fixed length of 8192 items',
          }),
        previous_epoch_attestations: z.array(z.lazy(() => Phase0BeaconStateSchema)),
        current_epoch_attestations: z.array(
          z
            .object({
              aggregation_bits: z
                .hex()
                .regex(/^0x[a-fA-F0-9]{2,}$/)
                .openapi({ description: 'Attester aggregation bits.', example: '0x01' }),
              data: Phase0AttestationDataSchema,
              inclusion_delay: Uint64Schema,
              proposer_index: Uint64Schema,
            })
            .openapi({
              description:
                'The [`PendingAttestation`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#pendingattestation) object from the CL spec.',
              required: ['aggregation_bits', 'data', 'inclusion_delay', 'proposer_index'],
            }),
        ),
        justification_bits: z
          .lazy(() => GloasBeaconStateSchema)
          .openapi({ description: 'Bit set for every recent justified epoch' }),
        previous_justified_checkpoint: CheckpointSchema,
        current_justified_checkpoint: CheckpointSchema,
        finalized_checkpoint: CheckpointSchema,
      })
      .openapi({
        description:
          'The [`BeaconState`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#beacon-state) object from the CL spec.',
        required: [
          'genesis_time',
          'genesis_validators_root',
          'slot',
          'fork',
          'latest_block_header',
          'block_roots',
          'state_roots',
          'historical_roots',
          'eth1_data',
          'eth1_data_votes',
          'eth1_deposit_index',
          'validators',
          'balances',
          'randao_mixes',
          'slashings',
          'previous_epoch_attestations',
          'current_epoch_attestations',
          'justification_bits',
          'previous_justified_checkpoint',
          'current_justified_checkpoint',
          'finalized_checkpoint',
        ],
      }),
  )
  .openapi('Phase0BeaconState')

const Phase0AttestationSchema = z
  .object({
    aggregation_bits: z
      .lazy(() => Phase0BeaconStateSchema)
      .openapi({ description: 'Attester aggregation bits.' }),
    data: Phase0AttestationDataSchema,
    signature: SignatureSchema.openapi({ description: 'BLS aggregate signature.' }),
  })
  .openapi({
    description:
      'The [`Attestation`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#attestation) object from the CL spec.',
    required: ['aggregation_bits', 'data', 'signature'],
  })
  .openapi('Phase0Attestation')

const Phase0SignedVoluntaryExitSchema = z
  .object({
    message: z
      .object({
        epoch: Uint64Schema.openapi({ description: 'Minimum epoch for processing exit.' }),
        validator_index: Uint64Schema.openapi({ description: 'Index of the exiting validator.' }),
      })
      .openapi({
        description:
          'The [`VoluntaryExit`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#voluntaryexit) object from the CL spec.',
        required: ['epoch', 'validator_index'],
      }),
    signature: SignatureSchema,
  })
  .openapi({
    description:
      'The [`SignedVoluntaryExit`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#signedvoluntaryexit) object from the CL spec.',
    required: ['message', 'signature'],
  })
  .openapi('Phase0SignedVoluntaryExit')

const Phase0BeaconBlockSchema = z
  .object({
    slot: Uint64Schema.openapi({ description: 'The slot to which this block corresponds.' }),
    proposer_index: Uint64Schema.openapi({
      description: 'Index of validator in validator registry.',
    }),
    parent_root: RootSchema.openapi({
      description: 'The signing merkle root of the parent `BeaconBlock`.',
    }),
    state_root: RootSchema.openapi({
      description: 'The tree hash merkle root of the `BeaconState` for the `BeaconBlock`.',
    }),
  })
  .openapi({ required: ['slot', 'proposer_index', 'parent_root', 'state_root'] })
  .and(
    z
      .object({
        body: z
          .object({
            randao_reveal: SignatureSchema.openapi({
              description: 'The RanDAO reveal value provided by the validator.',
            }),
            eth1_data: z.lazy(() => GloasBeaconStateSchema),
            graffiti: GraffitiSchema,
            proposer_slashings: z.array(Phase0ProposerSlashingSchema),
            attester_slashings: z.array(Phase0AttesterSlashingSchema),
            attestations: z.array(Phase0AttestationSchema),
            deposits: z.array(
              z
                .object({
                  proof: z
                    .array(RootSchema)
                    .length(33)
                    .openapi({ description: 'Branch in the deposit tree.' }),
                  data: z
                    .object({
                      pubkey: z.lazy(() => GloasBuilderPreferencesEntrySchema),
                      withdrawal_credentials: RootSchema.openapi({
                        description: 'The withdrawal credentials.',
                      }),
                      amount: Uint64Schema.openapi({ description: 'Amount in Gwei.' }),
                      signature: SignatureSchema.openapi({
                        description: 'Container self-signature.',
                      }),
                    })
                    .openapi({
                      description:
                        'The [`DepositData`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#depositdata) object from the CL spec.',
                      required: ['pubkey', 'withdrawal_credentials', 'amount', 'signature'],
                    }),
                })
                .openapi({
                  description:
                    'The [`Deposit`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#deposit) object from the CL spec.',
                  required: ['proof', 'data'],
                }),
            ),
            voluntary_exits: z.array(Phase0SignedVoluntaryExitSchema),
          })
          .openapi({
            description:
              'The [`BeaconBlockBody`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#beaconblockbody) object from the CL spec.',
            required: [
              'randao_reveal',
              'eth1_data',
              'graffiti',
              'proposer_slashings',
              'attester_slashings',
              'attestations',
              'deposits',
              'voluntary_exits',
            ],
          }),
      })
      .openapi({ required: ['body'] }),
  )
  .openapi({
    description:
      'The [`BeaconBlock`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#beaconblock) object from the CL spec.',
  })
  .openapi('Phase0BeaconBlock')

type Phase0SignedBeaconBlockType = {
  message: z.infer<typeof Phase0BeaconBlockSchema>
  signature: z.infer<typeof SignatureSchema>
}

const GloasLightClientBootstrapSchema = z
  .object({
    header: z
      .object({
        beacon: z.lazy(() => GloasBeaconStateSchema),
        execution_block_hash: z.lazy(() => GloasBeaconStateSchema),
        execution_branch: z
          .array(RootSchema)
          .length(11)
          .openapi({
            description:
              'Merkle proof consisting of [`floorlog2(EXECUTION_BLOCK_HASH_GINDEX_GLOAS)`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/light-client/sync-protocol.md#new-constants) roots',
          }),
      })
      .openapi({
        description:
          'The [`LightClientHeader`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/light-client/sync-protocol.md#modified-lightclientheader) object from the CL Gloas spec.',
        required: ['beacon', 'execution_block_hash', 'execution_branch'],
      }),
    current_sync_committee: z.lazy(() => GloasBeaconStateSchema),
    current_sync_committee_branch: z
      .array(RootSchema)
      .length(11)
      .openapi({
        description:
          'Merkle proof consisting of [`floorlog2(CURRENT_SYNC_COMMITTEE_GINDEX_GLOAS)`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/light-client/sync-protocol.md#new-constants) roots',
      }),
  })
  .openapi({ required: ['header', 'current_sync_committee', 'current_sync_committee_branch'] })
  .openapi('GloasLightClientBootstrap')

const GloasLightClientFinalityUpdateSchema = z
  .object({
    attested_header: z.lazy(() => GloasLightClientBootstrapSchema),
    finalized_header: z.lazy(() => GloasLightClientBootstrapSchema),
    finality_branch: z
      .array(RootSchema)
      .length(9)
      .openapi({
        description:
          'Merkle proof consisting of [`floorlog2(FINALIZED_ROOT_GINDEX_GLOAS)`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/light-client/sync-protocol.md#new-constants) roots',
      }),
    sync_aggregate: z
      .object({
        sync_committee_bits: z
          .lazy(() => GloasBeaconStateSchema)
          .openapi({
            description: 'Aggregation bits of sync',
            example:
              '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
          }),
        sync_committee_signature: SignatureSchema,
      })
      .openapi({
        description:
          'The [`SyncAggregate`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/altair/beacon-chain.md#syncaggregate) object from the CL Altair spec.',
        required: ['sync_committee_bits', 'sync_committee_signature'],
      }),
    signature_slot: Uint64Schema,
  })
  .openapi({
    required: [
      'attested_header',
      'finalized_header',
      'finality_branch',
      'sync_aggregate',
      'signature_slot',
    ],
  })
  .openapi('GloasLightClientFinalityUpdate')

const AltairBeaconBlockSchema = z
  .object({
    slot: Uint64Schema.openapi({ description: 'The slot to which this block corresponds.' }),
    proposer_index: Uint64Schema.openapi({
      description: 'Index of validator in validator registry.',
    }),
    parent_root: RootSchema.openapi({
      description: 'The signing Merkle root of the parent `BeaconBlock`.',
    }),
    state_root: RootSchema.openapi({
      description: 'The tree hash Merkle root of the `BeaconState` for the `BeaconBlock`.',
    }),
  })
  .openapi({ required: ['slot', 'proposer_index', 'parent_root', 'state_root'] })
  .and(
    z
      .object({
        body: z
          .object({
            randao_reveal: SignatureSchema.openapi({
              description: 'The RanDAO reveal value provided by the validator.',
            }),
            eth1_data: z.lazy(() => GloasBeaconStateSchema),
            graffiti: GraffitiSchema,
            proposer_slashings: z.array(Phase0ProposerSlashingSchema),
            attester_slashings: z.array(Phase0AttesterSlashingSchema),
            attestations: z.array(Phase0AttestationSchema),
            deposits: z.array(
              z
                .object({
                  proof: z
                    .array(RootSchema)
                    .length(33)
                    .openapi({ description: 'Branch in the deposit tree.' }),
                  data: z
                    .object({
                      pubkey: z.lazy(() => GloasBuilderPreferencesEntrySchema),
                      withdrawal_credentials: RootSchema.openapi({
                        description: 'The withdrawal credentials.',
                      }),
                      amount: Uint64Schema.openapi({ description: 'Amount in Gwei.' }),
                      signature: SignatureSchema.openapi({
                        description: 'Container self-signature.',
                      }),
                    })
                    .openapi({
                      description:
                        'The [`DepositData`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#depositdata) object from the CL spec.',
                      required: ['pubkey', 'withdrawal_credentials', 'amount', 'signature'],
                    }),
                })
                .openapi({
                  description:
                    'The [`Deposit`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#deposit) object from the CL spec.',
                  required: ['proof', 'data'],
                }),
            ),
            voluntary_exits: z.array(Phase0SignedVoluntaryExitSchema),
            sync_aggregate: z.lazy(() => GloasLightClientFinalityUpdateSchema),
          })
          .openapi({
            description:
              'The [`BeaconBlockBody`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/altair/beacon-chain.md#beaconblockbody) object from the CL Altair spec.',
            required: [
              'randao_reveal',
              'eth1_data',
              'graffiti',
              'proposer_slashings',
              'attester_slashings',
              'attestations',
              'deposits',
              'voluntary_exits',
              'sync_aggregate',
            ],
          }),
      })
      .openapi({ required: ['body'] }),
  )
  .openapi({
    description:
      'The [`BeaconBlock`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#beaconblock) object from the CL Altair spec.',
  })
  .openapi('AltairBeaconBlock')

type AltairSignedBeaconBlockType = {
  message: z.infer<typeof AltairBeaconBlockSchema>
  signature: z.infer<typeof SignatureSchema>
}

type AltairSyncCommitteeType = {
  validators: z.infer<typeof Uint64Schema>[]
  validator_aggregates: AltairSyncCommitteeType[]
}

type ExecutionAddressType = string

const ExecutionAddressSchema: z.ZodType<ExecutionAddressType> = z
  .hex()
  .regex(/^0x[a-fA-F0-9]{40}$/)
  .openapi({
    description: 'An address on the execution (Ethereum 1) network.',
    example: '0xAbcF8e0d4e9587369b2301D0790347320302cc09',
  })
  .openapi('ExecutionAddress')

type CapellaWithdrawalType = {
  index: z.infer<typeof Uint64Schema>
  validator_index: z.infer<typeof Uint64Schema>
  address: z.infer<typeof ExecutionAddressSchema>
  amount: z.infer<typeof Uint64Schema>
}

const CapellaWithdrawalSchema: z.ZodType<CapellaWithdrawalType> = z
  .object({
    index: Uint64Schema.openapi({ description: 'The index of the withdrawal.' }),
    validator_index: Uint64Schema.openapi({
      description: 'The index of the withdrawing validator.',
    }),
    address: ExecutionAddressSchema.openapi({
      description: 'The address to which the withdrawal is credited.',
    }),
    amount: Uint64Schema.openapi({ description: 'The value withdrawn (gwei).' }),
  })
  .openapi({ required: ['index', 'validator_index', 'address', 'amount'] })
  .openapi('CapellaWithdrawal')

const GloasExecutionPayloadSchema = z
  .object({
    parent_hash: z.lazy(() => GloasBeaconStateSchema),
    fee_recipient: ExecutionAddressSchema,
    state_root: z.lazy(() => GloasBeaconStateSchema),
    receipts_root: z.lazy(() => GloasBeaconStateSchema),
    logs_bloom: z
      .hex()
      .regex(/^0x[a-fA-F0-9]{512}$/)
      .openapi({
        example:
          '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
      }),
    prev_randao: z.lazy(() => GloasBeaconStateSchema),
    block_number: Uint64Schema,
    gas_limit: Uint64Schema,
    gas_used: Uint64Schema,
    timestamp: Uint64Schema,
    extra_data: z
      .hex()
      .regex(/^0x[a-fA-F0-9]{0,64}$/)
      .openapi({
        description: 'Extra data on the execution (Ethereum 1) network.',
        example: '0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2',
      }),
    base_fee_per_gas: z.string().openapi({ example: '1' }),
    block_hash: z.lazy(() => GloasBeaconStateSchema),
    transactions: z
      .array(
        z
          .hex()
          .regex(/^0x([a-fA-F0-9]{2})*$/)
          .openapi({
            description: 'A transaction encoded as a `ProgressiveByteList`.',
            example:
              '0x02f878831469668303f51d843b9ac9f9843b9aca0082520894c93269b73096998db66be0441e836d873535cb9c8894a19041886f000080c001a031cc29234036afbf9a1fb9476b463367cb1f957ac0b919b69bbc798436e604aaa018c4e9c3914eb27aadd0b91e10b18655739fcf8c1fc398763a9f1beecb8ddc86',
          }),
      )
      .max(1048576)
      .openapi({ description: 'Progressive list of transactions.' }),
    withdrawals: z
      .array(CapellaWithdrawalSchema)
      .max(16)
      .openapi({ description: 'Progressive list of withdrawals.' }),
    blob_gas_used: Uint64Schema,
    excess_blob_gas: Uint64Schema,
    block_access_list: z
      .hex()
      .regex(/^0x([a-fA-F0-9]{2})*$/)
      .openapi({
        description:
          'RLP encoded `BlockAccessList` represented as a `ProgressiveByteList`, as defined in [EIP-7928](https://eips.ethereum.org/EIPS/eip-7928)',
        example: '0xe5e494abcf8e0d4e9587369b2301d0790347320302cc09c0c0cac90187b1a2bc2ec50000c0c0',
      }),
    slot_number: Uint64Schema,
  })
  .openapi({
    description:
      'The [`ExecutionPayload`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/beacon-chain.md#executionpayload) object from the CL Gloas spec.',
    required: [
      'parent_hash',
      'fee_recipient',
      'state_root',
      'receipts_root',
      'logs_bloom',
      'prev_randao',
      'block_number',
      'gas_limit',
      'gas_used',
      'timestamp',
      'extra_data',
      'base_fee_per_gas',
      'block_hash',
      'transactions',
      'withdrawals',
      'blob_gas_used',
      'excess_blob_gas',
      'block_access_list',
      'slot_number',
    ],
  })
  .openapi('GloasExecutionPayload')

const BellatrixBeaconBlockSchema = z
  .object({
    slot: Uint64Schema.openapi({ description: 'The slot to which this block corresponds.' }),
    proposer_index: Uint64Schema.openapi({
      description: 'Index of validator in validator registry.',
    }),
    parent_root: RootSchema.openapi({
      description: 'The signing Merkle root of the parent `BeaconBlock`.',
    }),
    state_root: RootSchema.openapi({
      description: 'The tree hash Merkle root of the `BeaconState` for the `BeaconBlock`.',
    }),
  })
  .openapi({ required: ['slot', 'proposer_index', 'parent_root', 'state_root'] })
  .and(
    z
      .object({
        body: z
          .object({
            randao_reveal: SignatureSchema.openapi({
              description: 'The RanDAO reveal value provided by the validator.',
            }),
            eth1_data: z.lazy(() => GloasBeaconStateSchema),
            graffiti: GraffitiSchema,
            proposer_slashings: z.array(Phase0ProposerSlashingSchema),
            attester_slashings: z.array(Phase0AttesterSlashingSchema),
            attestations: z.array(Phase0AttestationSchema),
            deposits: z.array(
              z
                .object({
                  proof: z
                    .array(RootSchema)
                    .length(33)
                    .openapi({ description: 'Branch in the deposit tree.' }),
                  data: z
                    .object({
                      pubkey: z.lazy(() => GloasBuilderPreferencesEntrySchema),
                      withdrawal_credentials: RootSchema.openapi({
                        description: 'The withdrawal credentials.',
                      }),
                      amount: Uint64Schema.openapi({ description: 'Amount in Gwei.' }),
                      signature: SignatureSchema.openapi({
                        description: 'Container self-signature.',
                      }),
                    })
                    .openapi({
                      description:
                        'The [`DepositData`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#depositdata) object from the CL spec.',
                      required: ['pubkey', 'withdrawal_credentials', 'amount', 'signature'],
                    }),
                })
                .openapi({
                  description:
                    'The [`Deposit`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#deposit) object from the CL spec.',
                  required: ['proof', 'data'],
                }),
            ),
            voluntary_exits: z.array(Phase0SignedVoluntaryExitSchema),
            sync_aggregate: z.lazy(() => GloasLightClientFinalityUpdateSchema),
          })
          .openapi({
            description:
              'The [`BeaconBlockBody`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/bellatrix/beacon-chain.md#beaconblockbody) object from the CL Bellatrix spec.',
            required: [
              'randao_reveal',
              'eth1_data',
              'graffiti',
              'proposer_slashings',
              'attester_slashings',
              'attestations',
              'deposits',
              'voluntary_exits',
              'sync_aggregate',
            ],
          })
          .and(
            z
              .object({
                execution_payload: z
                  .object({
                    parent_hash: z.lazy(() => GloasBeaconStateSchema),
                    fee_recipient: ExecutionAddressSchema,
                    state_root: RootSchema,
                    receipts_root: RootSchema,
                    logs_bloom: z.lazy(() => GloasExecutionPayloadSchema),
                    prev_randao: z.lazy(() => GloasBeaconStateSchema),
                    block_number: Uint64Schema,
                    gas_limit: Uint64Schema,
                    gas_used: Uint64Schema,
                    timestamp: Uint64Schema,
                    extra_data: z.lazy(() => GloasExecutionPayloadSchema),
                    base_fee_per_gas: z.string().openapi({ example: '1' }),
                    block_hash: z.lazy(() => GloasBeaconStateSchema),
                  })
                  .openapi({
                    description:
                      'The [`ExecutionPayload`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/bellatrix/beacon-chain.md#executionpayload) object from the CL Bellatrix spec.',
                    required: [
                      'parent_hash',
                      'fee_recipient',
                      'state_root',
                      'receipts_root',
                      'logs_bloom',
                      'prev_randao',
                      'block_number',
                      'gas_limit',
                      'gas_used',
                      'timestamp',
                      'extra_data',
                      'base_fee_per_gas',
                      'block_hash',
                    ],
                  })
                  .and(
                    z
                      .object({
                        transactions: z
                          .array(
                            z
                              .hex()
                              .regex(/^0x[a-fA-F0-9]{0,2147483648}$/)
                              .openapi({
                                description: 'A transaction on the execution (Ethereum 1) network.',
                                example:
                                  '0x02f878831469668303f51d843b9ac9f9843b9aca0082520894c93269b73096998db66be0441e836d873535cb9c8894a19041886f000080c001a031cc29234036afbf9a1fb9476b463367cb1f957ac0b919b69bbc798436e604aaa018c4e9c3914eb27aadd0b91e10b18655739fcf8c1fc398763a9f1beecb8ddc86',
                              }),
                          )
                          .max(1048576),
                      })
                      .openapi({ required: ['transactions'] }),
                  ),
              })
              .openapi({ required: ['execution_payload'] }),
          ),
      })
      .openapi({ required: ['body'] }),
  )
  .openapi({
    description:
      'The [`BeaconBlock`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#beaconblock) object from the CL Bellatrix spec.',
  })
  .openapi('BellatrixBeaconBlock')

type BellatrixSignedBeaconBlockType = {
  message: z.infer<typeof BellatrixBeaconBlockSchema>
  signature: z.infer<typeof SignatureSchema>
}

const FuluBeaconStateSchema: z.ZodType<FuluBeaconStateType> = z
  .lazy(() =>
    z
      .object({
        genesis_time: Uint64Schema,
        genesis_validators_root: RootSchema,
        slot: Uint64Schema,
        fork: ForkSchema,
        latest_block_header: z.lazy(() => GloasBeaconStateSchema),
        block_roots: z.array(RootSchema).openapi({ description: 'Fixed length of 8192 items' }),
        state_roots: z.array(RootSchema).openapi({ description: 'Fixed length of 8192 items' }),
        historical_roots: z
          .array(RootSchema)
          .openapi({
            description:
              'Variable length list, maximum 16777216 items. Frozen in Capella, replaced by historical_summaries.',
          }),
        eth1_data: z.lazy(() => GloasBeaconStateSchema),
        eth1_data_votes: z
          .array(z.lazy(() => GloasBeaconStateSchema))
          .max(2048)
          .openapi({ description: 'Variable length list, maximum 2048 items.' }),
        eth1_deposit_index: Uint64Schema,
        validators: z
          .array(z.lazy(() => ValidatorResponseSchema))
          .openapi({ description: 'Variable length list, maximum 1099511627776 items' }),
        balances: z
          .array(Uint64Schema)
          .openapi({
            description:
              'Validator balances in gwei. Variable length list, maximum 1099511627776 items',
          }),
        randao_mixes: z
          .array(z.lazy(() => GloasBeaconStateSchema))
          .openapi({ description: 'Fixed length of 65536 items' }),
        slashings: z
          .array(Uint64Schema)
          .openapi({
            description: 'Per-epoch sums of slashed effective balances. Fixed length of 8192 items',
          }),
        previous_epoch_participation: z.lazy(() => FuluBeaconStateSchema),
        current_epoch_participation: z
          .array(z.lazy(() => GloasBeaconStateSchema))
          .max(1099511627776),
        justification_bits: z
          .lazy(() => GloasBeaconStateSchema)
          .openapi({ description: 'Bit set for every recent justified epoch' }),
        previous_justified_checkpoint: CheckpointSchema,
        current_justified_checkpoint: CheckpointSchema,
        finalized_checkpoint: CheckpointSchema,
        inactivity_scores: z
          .array(Uint64Schema)
          .openapi({
            description:
              'Per-validator inactivity scores. Introduced in Altair. Variable length list, maximum 1099511627776 items',
          }),
        current_sync_committee: z.lazy(() => GloasBeaconStateSchema),
        next_sync_committee: z.lazy(() => GloasBeaconStateSchema),
        latest_execution_payload_header: z
          .object({
            parent_hash: z.lazy(() => GloasBeaconStateSchema),
            fee_recipient: ExecutionAddressSchema,
            state_root: RootSchema,
            receipts_root: RootSchema,
            logs_bloom: z.lazy(() => GloasExecutionPayloadSchema),
            prev_randao: z.lazy(() => GloasBeaconStateSchema),
            block_number: Uint64Schema,
            gas_limit: Uint64Schema,
            gas_used: Uint64Schema,
            timestamp: Uint64Schema,
            extra_data: z.lazy(() => GloasExecutionPayloadSchema),
            base_fee_per_gas: z.string().openapi({ example: '1' }),
            blob_gas_used: Uint64Schema,
            excess_blob_gas: Uint64Schema,
            block_hash: z.lazy(() => GloasBeaconStateSchema),
          })
          .openapi({
            description:
              'The [`ExecutionPayload`](https://github.com/ethereum/consensus-specs/blob/v1.4.0/specs/deneb/beacon-chain.md#executionpayload) object from the CL Deneb spec.',
            required: [
              'parent_hash',
              'fee_recipient',
              'state_root',
              'receipts_root',
              'logs_bloom',
              'prev_randao',
              'block_number',
              'gas_limit',
              'gas_used',
              'timestamp',
              'extra_data',
              'base_fee_per_gas',
              'blob_gas_used',
              'excess_blob_gas',
              'block_hash',
            ],
          })
          .and(
            z
              .object({ transactions_root: RootSchema, withdrawals_root: RootSchema })
              .openapi({ required: ['transactions_root', 'withdrawals_root'] }),
          )
          .openapi({
            description:
              'The [`ExecutionPayloadHeader`](https://github.com/ethereum/consensus-specs/blob/v1.4.0/specs/deneb/beacon-chain.md#executionpayloadheader) object from the CL Deneb spec.',
          }),
        next_withdrawal_index: Uint64Schema,
        next_withdrawal_validator_index: Uint64Schema,
        historical_summaries: z
          .array(z.lazy(() => GloasBeaconStateSchema))
          .openapi({ description: 'Variable length list, maximum 16777216 items' }),
        deposit_requests_start_index: Uint64Schema,
        deposit_balance_to_consume: Uint64Schema,
        exit_balance_to_consume: Uint64Schema,
        earliest_exit_epoch: Uint64Schema,
        consolidation_balance_to_consume: Uint64Schema,
        earliest_consolidation_epoch: Uint64Schema,
        pending_deposits: ElectraPendingDepositsSchema,
        pending_partial_withdrawals: ElectraPendingPartialWithdrawalsSchema,
        pending_consolidations: ElectraPendingConsolidationsSchema,
        proposer_lookahead: z.array(Uint64Schema).length(64),
      })
      .openapi({
        description:
          'The [`BeaconState`](https://github.com/ethereum/consensus-specs/blob/v1.6.0/specs/fulu/beacon-chain.md#beaconstate) object from the CL Fulu spec.',
        required: [
          'genesis_time',
          'genesis_validators_root',
          'slot',
          'fork',
          'latest_block_header',
          'block_roots',
          'state_roots',
          'historical_roots',
          'eth1_data',
          'eth1_data_votes',
          'eth1_deposit_index',
          'validators',
          'balances',
          'randao_mixes',
          'slashings',
          'previous_epoch_participation',
          'current_epoch_participation',
          'justification_bits',
          'previous_justified_checkpoint',
          'current_justified_checkpoint',
          'finalized_checkpoint',
          'inactivity_scores',
          'current_sync_committee',
          'next_sync_committee',
          'latest_execution_payload_header',
          'next_withdrawal_index',
          'next_withdrawal_validator_index',
          'historical_summaries',
          'deposit_requests_start_index',
          'deposit_balance_to_consume',
          'exit_balance_to_consume',
          'earliest_exit_epoch',
          'consolidation_balance_to_consume',
          'earliest_consolidation_epoch',
          'pending_deposits',
          'pending_partial_withdrawals',
          'pending_consolidations',
          'proposer_lookahead',
        ],
      }),
  )
  .openapi('FuluBeaconState')

const BellatrixBeaconStateSchema = z
  .object({
    genesis_time: Uint64Schema,
    genesis_validators_root: RootSchema,
    slot: Uint64Schema,
    fork: ForkSchema,
    latest_block_header: z.lazy(() => GloasBeaconStateSchema),
    block_roots: z.array(RootSchema).openapi({ description: 'Fixed length of 8192 items' }),
    state_roots: z.array(RootSchema).openapi({ description: 'Fixed length of 8192 items' }),
    historical_roots: z
      .array(RootSchema)
      .openapi({ description: 'Variable length list, maximum 16777216 items' }),
    eth1_data: z.lazy(() => GloasBeaconStateSchema),
    eth1_data_votes: z
      .array(z.lazy(() => GloasBeaconStateSchema))
      .max(2048)
      .openapi({ description: 'Variable length list, maximum 2048 items.' }),
    eth1_deposit_index: Uint64Schema,
    validators: z
      .array(z.lazy(() => ValidatorResponseSchema))
      .openapi({ description: 'Variable length list, maximum 1099511627776 items' }),
    balances: z
      .array(Uint64Schema)
      .openapi({
        description:
          'Validator balances in Gwei. Variable length list, maximum 1099511627776 items',
      }),
    randao_mixes: z
      .array(z.lazy(() => GloasBeaconStateSchema))
      .openapi({ description: 'Fixed length of 65536 items' }),
    slashings: z
      .array(Uint64Schema)
      .openapi({
        description: 'Per-epoch sums of slashed effective balances. Fixed length of 8192 items',
      }),
    previous_epoch_participation: z.lazy(() => FuluBeaconStateSchema),
    current_epoch_participation: z.lazy(() => FuluBeaconStateSchema),
    justification_bits: z
      .lazy(() => GloasBeaconStateSchema)
      .openapi({ description: 'Bit set for every recent justified epoch' }),
    previous_justified_checkpoint: CheckpointSchema,
    current_justified_checkpoint: CheckpointSchema,
    finalized_checkpoint: CheckpointSchema,
    inactivity_scores: z
      .array(Uint64Schema)
      .openapi({
        description:
          'Per-validator inactivity scores. Introduced in Altair. Variable length list, maximum 1099511627776 items',
      }),
    current_sync_committee: z.lazy(() => GloasBeaconStateSchema),
    next_sync_committee: z.lazy(() => GloasBeaconStateSchema),
    latest_execution_payload_header: z
      .object({
        parent_hash: z.lazy(() => GloasBeaconStateSchema),
        fee_recipient: ExecutionAddressSchema,
        state_root: RootSchema,
        receipts_root: RootSchema,
        logs_bloom: z.lazy(() => GloasExecutionPayloadSchema),
        prev_randao: z.lazy(() => GloasBeaconStateSchema),
        block_number: Uint64Schema,
        gas_limit: Uint64Schema,
        gas_used: Uint64Schema,
        timestamp: Uint64Schema,
        extra_data: z.lazy(() => GloasExecutionPayloadSchema),
        base_fee_per_gas: z.string().openapi({ example: '1' }),
        block_hash: z.lazy(() => GloasBeaconStateSchema),
      })
      .openapi({
        description:
          'The [`ExecutionPayload`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/bellatrix/beacon-chain.md#executionpayload) object from the CL Bellatrix spec.',
        required: [
          'parent_hash',
          'fee_recipient',
          'state_root',
          'receipts_root',
          'logs_bloom',
          'prev_randao',
          'block_number',
          'gas_limit',
          'gas_used',
          'timestamp',
          'extra_data',
          'base_fee_per_gas',
          'block_hash',
        ],
      })
      .and(z.object({ transactions_root: RootSchema }).openapi({ required: ['transactions_root'] }))
      .openapi({
        description:
          'The [`ExecutionPayloadHeader`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/bellatrix/beacon-chain.md#executionpayloadheader) object from the CL Bellatrix spec.',
      }),
  })
  .openapi({
    description:
      'The [`BeaconState`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/bellatrix/beacon-chain.md#beaconstate) object from the Eth2.0 Bellatrix spec.',
    required: [
      'genesis_time',
      'genesis_validators_root',
      'slot',
      'fork',
      'latest_block_header',
      'block_roots',
      'state_roots',
      'historical_roots',
      'eth1_data',
      'eth1_data_votes',
      'eth1_deposit_index',
      'validators',
      'balances',
      'randao_mixes',
      'slashings',
      'previous_epoch_participation',
      'current_epoch_participation',
      'justification_bits',
      'previous_justified_checkpoint',
      'current_justified_checkpoint',
      'finalized_checkpoint',
      'inactivity_scores',
      'current_sync_committee',
      'next_sync_committee',
      'latest_execution_payload_header',
    ],
  })
  .openapi('BellatrixBeaconState')

const BellatrixBlindedBeaconBlockSchema = z
  .object({
    slot: Uint64Schema.openapi({ description: 'The slot to which this block corresponds.' }),
    proposer_index: Uint64Schema.openapi({
      description: 'Index of validator in validator registry.',
    }),
    parent_root: RootSchema.openapi({
      description: 'The signing Merkle root of the parent `BeaconBlock`.',
    }),
    state_root: RootSchema.openapi({
      description: 'The tree hash Merkle root of the `BeaconState` for the `BeaconBlock`.',
    }),
  })
  .openapi({ required: ['slot', 'proposer_index', 'parent_root', 'state_root'] })
  .and(
    z
      .object({
        body: z
          .object({
            randao_reveal: SignatureSchema.openapi({
              description: 'The RanDAO reveal value provided by the validator.',
            }),
            eth1_data: z.lazy(() => GloasBeaconStateSchema),
            graffiti: GraffitiSchema,
            proposer_slashings: z.array(Phase0ProposerSlashingSchema),
            attester_slashings: z.array(Phase0AttesterSlashingSchema),
            attestations: z.array(Phase0AttestationSchema),
            deposits: z.array(
              z
                .object({
                  proof: z
                    .array(RootSchema)
                    .length(33)
                    .openapi({ description: 'Branch in the deposit tree.' }),
                  data: z
                    .object({
                      pubkey: z.lazy(() => GloasBuilderPreferencesEntrySchema),
                      withdrawal_credentials: RootSchema.openapi({
                        description: 'The withdrawal credentials.',
                      }),
                      amount: Uint64Schema.openapi({ description: 'Amount in Gwei.' }),
                      signature: SignatureSchema.openapi({
                        description: 'Container self-signature.',
                      }),
                    })
                    .openapi({
                      description:
                        'The [`DepositData`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#depositdata) object from the CL spec.',
                      required: ['pubkey', 'withdrawal_credentials', 'amount', 'signature'],
                    }),
                })
                .openapi({
                  description:
                    'The [`Deposit`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#deposit) object from the CL spec.',
                  required: ['proof', 'data'],
                }),
            ),
            voluntary_exits: z.array(Phase0SignedVoluntaryExitSchema),
            sync_aggregate: z.lazy(() => GloasLightClientFinalityUpdateSchema),
          })
          .openapi({
            description:
              'The [`BeaconBlockBody`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/bellatrix/beacon-chain.md#beaconblockbody) object from the CL Bellatrix spec.',
            required: [
              'randao_reveal',
              'eth1_data',
              'graffiti',
              'proposer_slashings',
              'attester_slashings',
              'attestations',
              'deposits',
              'voluntary_exits',
              'sync_aggregate',
            ],
          })
          .and(
            z
              .object({ execution_payload_header: z.lazy(() => BellatrixBeaconStateSchema) })
              .openapi({ required: ['execution_payload_header'] }),
          )
          .openapi({
            description:
              'A variant of the [`BeaconBlockBody`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/bellatrix/beacon-chain.md#beaconblockbody) object from the CL Bellatrix spec, which contains a transactions root rather than a full transactions list.',
          }),
      })
      .openapi({ required: ['body'] }),
  )
  .openapi({
    description:
      'A variant of the [`BeaconBlock`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#beaconblock) object from the CL Bellatrix spec, which contains a `BlindedBeaconBlockBody` rather than a `BeaconBlockBody`.',
  })
  .openapi('BellatrixBlindedBeaconBlock')

type BellatrixSignedBlindedBeaconBlockType = {
  message: z.infer<typeof BellatrixBlindedBeaconBlockSchema>
  signature: z.infer<typeof SignatureSchema>
}

const CapellaSignedBLSToExecutionChangeSchema = z
  .object({
    message: z
      .object({
        validator_index: Uint64Schema.openapi({
          description: 'Index of the validator for which credentials will be changed.',
        }),
        from_bls_pubkey: z
          .lazy(() => GloasBuilderPreferencesEntrySchema)
          .openapi({ description: 'Public key of existing credentials.' }),
        to_execution_address: ExecutionAddressSchema.openapi({
          description: 'Execution address to which the credentials will be changed.',
        }),
      })
      .openapi({
        description:
          'The [`BLSToExecutionChange`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/capella/beacon-chain.md#blstoexecutionchange) object from the CL spec.',
        required: ['validator_index', 'from_bls_pubkey', 'to_execution_address'],
      }),
    signature: SignatureSchema,
  })
  .openapi({
    description:
      'The [`SignedBLSToExecutionChange`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/capella/beacon-chain.md#signedblstoexecutionchange) object from the CL spec.',
    required: ['message', 'signature'],
  })
  .openapi('CapellaSignedBLSToExecutionChange')

const CapellaBeaconBlockSchema = z
  .object({
    slot: Uint64Schema.openapi({ description: 'The slot to which this block corresponds.' }),
    proposer_index: Uint64Schema.openapi({
      description: 'Index of validator in validator registry.',
    }),
    parent_root: RootSchema.openapi({
      description: 'The signing Merkle root of the parent `BeaconBlock`.',
    }),
    state_root: RootSchema.openapi({
      description: 'The tree hash Merkle root of the `BeaconState` for the `BeaconBlock`.',
    }),
  })
  .openapi({ required: ['slot', 'proposer_index', 'parent_root', 'state_root'] })
  .and(
    z
      .object({
        body: z
          .object({
            randao_reveal: SignatureSchema.openapi({
              description: 'The RanDAO reveal value provided by the validator.',
            }),
            eth1_data: z.lazy(() => GloasBeaconStateSchema),
            graffiti: GraffitiSchema,
            proposer_slashings: z.array(Phase0ProposerSlashingSchema),
            attester_slashings: z.array(Phase0AttesterSlashingSchema),
            attestations: z.array(Phase0AttestationSchema),
            deposits: z.array(
              z
                .object({
                  proof: z
                    .array(RootSchema)
                    .length(33)
                    .openapi({ description: 'Branch in the deposit tree.' }),
                  data: z
                    .object({
                      pubkey: z.lazy(() => GloasBuilderPreferencesEntrySchema),
                      withdrawal_credentials: RootSchema.openapi({
                        description: 'The withdrawal credentials.',
                      }),
                      amount: Uint64Schema.openapi({ description: 'Amount in Gwei.' }),
                      signature: SignatureSchema.openapi({
                        description: 'Container self-signature.',
                      }),
                    })
                    .openapi({
                      description:
                        'The [`DepositData`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#depositdata) object from the CL spec.',
                      required: ['pubkey', 'withdrawal_credentials', 'amount', 'signature'],
                    }),
                })
                .openapi({
                  description:
                    'The [`Deposit`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#deposit) object from the CL spec.',
                  required: ['proof', 'data'],
                }),
            ),
            voluntary_exits: z.array(Phase0SignedVoluntaryExitSchema),
            sync_aggregate: z.lazy(() => GloasLightClientFinalityUpdateSchema),
            bls_to_execution_changes: z.array(CapellaSignedBLSToExecutionChangeSchema),
          })
          .openapi({
            description:
              'The [`BeaconBlockBody`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/capella/beacon-chain.md#beaconblockbody) object from the CL Capella spec.',
            required: [
              'randao_reveal',
              'eth1_data',
              'graffiti',
              'proposer_slashings',
              'attester_slashings',
              'attestations',
              'deposits',
              'voluntary_exits',
              'sync_aggregate',
              'bls_to_execution_changes',
            ],
          })
          .and(
            z
              .object({
                execution_payload: z
                  .object({
                    parent_hash: z.lazy(() => GloasBeaconStateSchema),
                    fee_recipient: ExecutionAddressSchema,
                    state_root: RootSchema,
                    receipts_root: RootSchema,
                    logs_bloom: z.lazy(() => GloasExecutionPayloadSchema),
                    prev_randao: z.lazy(() => GloasBeaconStateSchema),
                    block_number: Uint64Schema,
                    gas_limit: Uint64Schema,
                    gas_used: Uint64Schema,
                    timestamp: Uint64Schema,
                    extra_data: z.lazy(() => GloasExecutionPayloadSchema),
                    base_fee_per_gas: z.string().openapi({ example: '1' }),
                    block_hash: z.lazy(() => GloasBeaconStateSchema),
                  })
                  .openapi({
                    description:
                      'The [`ExecutionPayload`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/capella/beacon-chain.md#executionpayload) object from the CL Capella spec.',
                    required: [
                      'parent_hash',
                      'fee_recipient',
                      'state_root',
                      'receipts_root',
                      'logs_bloom',
                      'prev_randao',
                      'block_number',
                      'gas_limit',
                      'gas_used',
                      'timestamp',
                      'extra_data',
                      'base_fee_per_gas',
                      'block_hash',
                    ],
                  })
                  .and(
                    z
                      .object({
                        transactions: z
                          .array(
                            z
                              .hex()
                              .regex(/^0x[a-fA-F0-9]{0,2147483648}$/)
                              .openapi({
                                description: 'A transaction on the execution (Ethereum 1) network.',
                                example:
                                  '0x02f878831469668303f51d843b9ac9f9843b9aca0082520894c93269b73096998db66be0441e836d873535cb9c8894a19041886f000080c001a031cc29234036afbf9a1fb9476b463367cb1f957ac0b919b69bbc798436e604aaa018c4e9c3914eb27aadd0b91e10b18655739fcf8c1fc398763a9f1beecb8ddc86',
                              }),
                          )
                          .max(1048576),
                        withdrawals: z.array(CapellaWithdrawalSchema).max(16),
                      })
                      .openapi({ required: ['transactions', 'withdrawals'] }),
                  ),
              })
              .openapi({ required: ['execution_payload'] }),
          ),
      })
      .openapi({ required: ['body'] }),
  )
  .openapi({
    description:
      'The [`BeaconBlock`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#beaconblock) object from the CL Capella spec.',
  })
  .openapi('CapellaBeaconBlock')

type CapellaSignedBeaconBlockType = {
  message: z.infer<typeof CapellaBeaconBlockSchema>
  signature: z.infer<typeof SignatureSchema>
}

const CapellaBeaconStateSchema = z
  .object({
    genesis_time: Uint64Schema,
    genesis_validators_root: RootSchema,
    slot: Uint64Schema,
    fork: ForkSchema,
    latest_block_header: z.lazy(() => GloasBeaconStateSchema),
    block_roots: z.array(RootSchema).openapi({ description: 'Fixed length of 8192 items' }),
    state_roots: z.array(RootSchema).openapi({ description: 'Fixed length of 8192 items' }),
    historical_roots: z
      .array(RootSchema)
      .openapi({
        description:
          'Variable length list, maximum 16777216 items. Frozen in Capella, replaced by historical_summaries.',
      }),
    eth1_data: z.lazy(() => GloasBeaconStateSchema),
    eth1_data_votes: z
      .array(z.lazy(() => GloasBeaconStateSchema))
      .max(2048)
      .openapi({ description: 'Variable length list, maximum 2048 items.' }),
    eth1_deposit_index: Uint64Schema,
    validators: z
      .array(z.lazy(() => ValidatorResponseSchema))
      .openapi({ description: 'Variable length list, maximum 1099511627776 items' }),
    balances: z
      .array(Uint64Schema)
      .openapi({
        description:
          'Validator balances in gwei. Variable length list, maximum 1099511627776 items',
      }),
    randao_mixes: z
      .array(z.lazy(() => GloasBeaconStateSchema))
      .openapi({ description: 'Fixed length of 65536 items' }),
    slashings: z
      .array(Uint64Schema)
      .openapi({
        description: 'Per-epoch sums of slashed effective balances. Fixed length of 8192 items',
      }),
    previous_epoch_participation: z.lazy(() => FuluBeaconStateSchema),
    current_epoch_participation: z.lazy(() => FuluBeaconStateSchema),
    justification_bits: z
      .lazy(() => GloasBeaconStateSchema)
      .openapi({ description: 'Bit set for every recent justified epoch' }),
    previous_justified_checkpoint: CheckpointSchema,
    current_justified_checkpoint: CheckpointSchema,
    finalized_checkpoint: CheckpointSchema,
    inactivity_scores: z
      .array(Uint64Schema)
      .openapi({
        description:
          'Per-validator inactivity scores. Introduced in Altair. Variable length list, maximum 1099511627776 items',
      }),
    current_sync_committee: z.lazy(() => GloasBeaconStateSchema),
    next_sync_committee: z.lazy(() => GloasBeaconStateSchema),
    latest_execution_payload_header: z
      .object({
        parent_hash: z.lazy(() => GloasBeaconStateSchema),
        fee_recipient: ExecutionAddressSchema,
        state_root: RootSchema,
        receipts_root: RootSchema,
        logs_bloom: z.lazy(() => GloasExecutionPayloadSchema),
        prev_randao: z.lazy(() => GloasBeaconStateSchema),
        block_number: Uint64Schema,
        gas_limit: Uint64Schema,
        gas_used: Uint64Schema,
        timestamp: Uint64Schema,
        extra_data: z.lazy(() => GloasExecutionPayloadSchema),
        base_fee_per_gas: z.string().openapi({ example: '1' }),
        block_hash: z.lazy(() => GloasBeaconStateSchema),
      })
      .openapi({
        description:
          'The [`ExecutionPayload`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/capella/beacon-chain.md#executionpayload) object from the CL Capella spec.',
        required: [
          'parent_hash',
          'fee_recipient',
          'state_root',
          'receipts_root',
          'logs_bloom',
          'prev_randao',
          'block_number',
          'gas_limit',
          'gas_used',
          'timestamp',
          'extra_data',
          'base_fee_per_gas',
          'block_hash',
        ],
      })
      .and(
        z
          .object({ transactions_root: RootSchema, withdrawals_root: RootSchema })
          .openapi({ required: ['transactions_root', 'withdrawals_root'] }),
      )
      .openapi({
        description:
          'The [`ExecutionPayloadHeader`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/capella/beacon-chain.md#executionpayloadheader) object from the CL Capella spec.',
      }),
    next_withdrawal_index: Uint64Schema,
    next_withdrawal_validator_index: Uint64Schema,
    historical_summaries: z
      .array(z.lazy(() => GloasBeaconStateSchema))
      .openapi({ description: 'Variable length list, maximum 16777216 items' }),
  })
  .openapi({
    description:
      'The [`BeaconState`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/capella/beacon-chain.md#beaconstate) object from the Eth2.0 Capella spec.',
    required: [
      'genesis_time',
      'genesis_validators_root',
      'slot',
      'fork',
      'latest_block_header',
      'block_roots',
      'state_roots',
      'historical_roots',
      'eth1_data',
      'eth1_data_votes',
      'eth1_deposit_index',
      'validators',
      'balances',
      'randao_mixes',
      'slashings',
      'previous_epoch_participation',
      'current_epoch_participation',
      'justification_bits',
      'previous_justified_checkpoint',
      'current_justified_checkpoint',
      'finalized_checkpoint',
      'inactivity_scores',
      'current_sync_committee',
      'next_sync_committee',
      'latest_execution_payload_header',
      'next_withdrawal_index',
      'next_withdrawal_validator_index',
      'historical_summaries',
    ],
  })
  .openapi('CapellaBeaconState')

const CapellaBlindedBeaconBlockSchema = z
  .object({
    slot: Uint64Schema.openapi({ description: 'The slot to which this block corresponds.' }),
    proposer_index: Uint64Schema.openapi({
      description: 'Index of validator in validator registry.',
    }),
    parent_root: RootSchema.openapi({
      description: 'The signing Merkle root of the parent `BeaconBlock`.',
    }),
    state_root: RootSchema.openapi({
      description: 'The tree hash Merkle root of the `BeaconState` for the `BeaconBlock`.',
    }),
  })
  .openapi({ required: ['slot', 'proposer_index', 'parent_root', 'state_root'] })
  .and(
    z
      .object({
        body: z
          .object({
            randao_reveal: SignatureSchema.openapi({
              description: 'The RanDAO reveal value provided by the validator.',
            }),
            eth1_data: z.lazy(() => GloasBeaconStateSchema),
            graffiti: GraffitiSchema,
            proposer_slashings: z.array(Phase0ProposerSlashingSchema),
            attester_slashings: z.array(Phase0AttesterSlashingSchema),
            attestations: z.array(Phase0AttestationSchema),
            deposits: z.array(
              z
                .object({
                  proof: z
                    .array(RootSchema)
                    .length(33)
                    .openapi({ description: 'Branch in the deposit tree.' }),
                  data: z
                    .object({
                      pubkey: z.lazy(() => GloasBuilderPreferencesEntrySchema),
                      withdrawal_credentials: RootSchema.openapi({
                        description: 'The withdrawal credentials.',
                      }),
                      amount: Uint64Schema.openapi({ description: 'Amount in Gwei.' }),
                      signature: SignatureSchema.openapi({
                        description: 'Container self-signature.',
                      }),
                    })
                    .openapi({
                      description:
                        'The [`DepositData`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#depositdata) object from the CL spec.',
                      required: ['pubkey', 'withdrawal_credentials', 'amount', 'signature'],
                    }),
                })
                .openapi({
                  description:
                    'The [`Deposit`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#deposit) object from the CL spec.',
                  required: ['proof', 'data'],
                }),
            ),
            voluntary_exits: z.array(Phase0SignedVoluntaryExitSchema),
            sync_aggregate: z.lazy(() => GloasLightClientFinalityUpdateSchema),
            bls_to_execution_changes: z.array(CapellaSignedBLSToExecutionChangeSchema),
          })
          .openapi({
            description:
              'The [`BeaconBlockBody`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/capella/beacon-chain.md#beaconblockbody) object from the CL Capella spec.',
            required: [
              'randao_reveal',
              'eth1_data',
              'graffiti',
              'proposer_slashings',
              'attester_slashings',
              'attestations',
              'deposits',
              'voluntary_exits',
              'sync_aggregate',
              'bls_to_execution_changes',
            ],
          })
          .and(
            z
              .object({ execution_payload_header: z.lazy(() => CapellaBeaconStateSchema) })
              .openapi({ required: ['execution_payload_header'] }),
          )
          .openapi({
            description:
              'A variant of the [`BeaconBlockBody`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/capella/beacon-chain.md#beaconblockbody) object from the CL Capella spec, which contains a transactions root rather than a full transactions list.',
          }),
      })
      .openapi({ required: ['body'] }),
  )
  .openapi({
    description:
      'A variant of the [`BeaconBlock`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#beaconblock) object from the CL Capella spec, which contains a `BlindedBeaconBlockBody` rather than a `BeaconBlockBody`.',
  })
  .openapi('CapellaBlindedBeaconBlock')

type CapellaSignedBlindedBeaconBlockType = {
  message: z.infer<typeof CapellaBlindedBeaconBlockSchema>
  signature: z.infer<typeof SignatureSchema>
}

const DenebBeaconBlockSchema = z
  .object({
    slot: Uint64Schema.openapi({ description: 'The slot to which this block corresponds.' }),
    proposer_index: Uint64Schema.openapi({
      description: 'Index of validator in validator registry.',
    }),
    parent_root: RootSchema.openapi({
      description: 'The signing Merkle root of the parent `BeaconBlock`.',
    }),
    state_root: RootSchema.openapi({
      description: 'The tree hash Merkle root of the `BeaconState` for the `BeaconBlock`.',
    }),
  })
  .openapi({ required: ['slot', 'proposer_index', 'parent_root', 'state_root'] })
  .and(
    z
      .object({
        body: z
          .object({
            randao_reveal: SignatureSchema.openapi({
              description: 'The RANDAO reveal value provided by the validator.',
            }),
            eth1_data: z.lazy(() => GloasBeaconStateSchema),
            graffiti: GraffitiSchema,
            proposer_slashings: z.array(Phase0ProposerSlashingSchema),
            attester_slashings: z.array(Phase0AttesterSlashingSchema),
            attestations: z.array(Phase0AttestationSchema),
            deposits: z.array(
              z
                .object({
                  proof: z
                    .array(RootSchema)
                    .length(33)
                    .openapi({ description: 'Branch in the deposit tree.' }),
                  data: z
                    .object({
                      pubkey: z.lazy(() => GloasBuilderPreferencesEntrySchema),
                      withdrawal_credentials: RootSchema.openapi({
                        description: 'The withdrawal credentials.',
                      }),
                      amount: Uint64Schema.openapi({ description: 'Amount in Gwei.' }),
                      signature: SignatureSchema.openapi({
                        description: 'Container self-signature.',
                      }),
                    })
                    .openapi({
                      description:
                        'The [`DepositData`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#depositdata) object from the CL spec.',
                      required: ['pubkey', 'withdrawal_credentials', 'amount', 'signature'],
                    }),
                })
                .openapi({
                  description:
                    'The [`Deposit`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#deposit) object from the CL spec.',
                  required: ['proof', 'data'],
                }),
            ),
            voluntary_exits: z.array(Phase0SignedVoluntaryExitSchema),
            sync_aggregate: z.lazy(() => GloasLightClientFinalityUpdateSchema),
            bls_to_execution_changes: z.array(CapellaSignedBLSToExecutionChangeSchema),
            blob_kzg_commitments: z.array(
              z
                .hex()
                .regex(/^0x[a-fA-F0-9]{96}$/)
                .openapi({
                  description:
                    'A G1 curve point. Same as BLS standard "is valid pubkey" check but also allows `0x00..00` for point-at-infinity',
                  example:
                    '0x93247f2209abcacf57b75a51dafae777f9dd38bc7053d1af526f220a7489a6d3a2753e5f3e8b1cfe39b56f43611df74a',
                }),
            ),
          })
          .openapi({
            description:
              'The [`BeaconBlockBody`](https://github.com/ethereum/consensus-specs/blob/v1.4.0/specs/deneb/beacon-chain.md#beaconblockbody) object from the CL Deneb spec.',
            required: [
              'randao_reveal',
              'eth1_data',
              'graffiti',
              'proposer_slashings',
              'attester_slashings',
              'attestations',
              'deposits',
              'voluntary_exits',
              'sync_aggregate',
              'bls_to_execution_changes',
              'blob_kzg_commitments',
            ],
          })
          .and(
            z
              .object({ execution_payload: ExecutionPayloadSchema })
              .openapi({ required: ['execution_payload'] }),
          ),
      })
      .openapi({ required: ['body'] }),
  )
  .openapi({
    description:
      'The [`BeaconBlock`](https://github.com/ethereum/consensus-specs/blob/v1.4.0/specs/phase0/beacon-chain.md#beaconblock) object from the CL Deneb spec.',
  })
  .openapi('DenebBeaconBlock')

const ElectraAttesterSlashingSchema = z
  .object({
    attestation_1: z
      .object({
        attesting_indices: z
          .array(Uint64Schema)
          .max(131072)
          .openapi({ description: 'Attesting validator indices' }),
        data: Phase0AttestationDataSchema,
        signature: SignatureSchema.openapi({
          description:
            'The BLS signature of the `IndexedAttestation`, created by the validator of the attestation.',
        }),
      })
      .openapi({
        description:
          'The [`IndexedAttestation`](https://github.com/ethereum/consensus-specs/blob/v1.5.0/specs/electra/beacon-chain.md#indexedattestation) object from the CL spec.',
        required: ['attesting_indices', 'data', 'signature'],
      }),
    attestation_2: Attestation_1Schema,
  })
  .openapi({
    description:
      'The [`AttesterSlashing`](https://github.com/ethereum/consensus-specs/blob/v1.5.0/specs/electra/beacon-chain.md#attesterslashing) object from the CL spec.',
    required: ['attestation_1', 'attestation_2'],
  })
  .openapi('ElectraAttesterSlashing')

const ElectraAttestationSchema = z
  .object({
    aggregation_bits: z
      .lazy(() => Phase0BeaconStateSchema)
      .openapi({ description: 'Attester aggregation bits.' }),
    data: Phase0AttestationDataSchema,
    signature: SignatureSchema.openapi({ description: 'BLS aggregate signature.' }),
    committee_bits: z
      .lazy(() => GloasBeaconStateSchema)
      .openapi({ description: 'Committee bits.', example: '0x0000000000000001' }),
  })
  .openapi({
    description:
      'The [`Attestation`](https://github.com/ethereum/consensus-specs/blob/v1.5.0/specs/electra/beacon-chain.md#attestation) object from the CL spec.',
    required: ['aggregation_bits', 'data', 'signature', 'committee_bits'],
  })
  .openapi('ElectraAttestation')

const GloasExecutionPayloadEnvelopeSchema = z
  .object({
    payload: GloasExecutionPayloadSchema,
    execution_requests: z
      .object({
        deposits: z
          .array(
            z
              .object({
                pubkey: z
                  .lazy(() => GloasBuilderPreferencesEntrySchema)
                  .openapi({ description: 'BLS public key of validator.' }),
                withdrawal_credentials: RootSchema.openapi({
                  description: 'The withdrawal credentials.',
                }),
                amount: Uint64Schema.openapi({ description: 'The value to be deposited (gwei).' }),
                signature: SignatureSchema,
                index: Uint64Schema.openapi({ description: 'The index of the deposit request.' }),
              })
              .openapi({
                description:
                  'The [`DepositRequest`](https://github.com/ethereum/consensus-specs/blob/v1.5.0/specs/electra/beacon-chain.md#depositrequest) object from the CL Electra spec.',
                required: ['pubkey', 'withdrawal_credentials', 'amount', 'signature', 'index'],
              }),
          )
          .openapi({ description: 'Progressive list of deposit requests.' }),
        withdrawals: z
          .array(
            z
              .object({
                source_address: ExecutionAddressSchema.openapi({
                  description: 'Execution address which sent the request.',
                }),
                validator_pubkey: z
                  .lazy(() => GloasBuilderPreferencesEntrySchema)
                  .openapi({ description: 'BLS public key of validator.' }),
                amount: Uint64Schema.openapi({ description: 'The value to be withdrawn (gwei).' }),
              })
              .openapi({
                description:
                  'The [`WithdrawalRequest`](https://github.com/ethereum/consensus-specs/blob/v1.5.0/specs/electra/beacon-chain.md#withdrawalrequest) object from the CL Electra spec.',
                required: ['source_address', 'validator_pubkey', 'amount'],
              }),
          )
          .max(16)
          .openapi({ description: 'Progressive list of withdrawal requests.' }),
        consolidations: z
          .array(
            z
              .object({
                source_address: ExecutionAddressSchema.openapi({
                  description: 'Execution address which sent the request.',
                }),
                source_pubkey: z
                  .lazy(() => GloasBuilderPreferencesEntrySchema)
                  .openapi({ description: 'BLS public key of validator to consolidate from.' }),
                target_pubkey: z
                  .lazy(() => GloasBuilderPreferencesEntrySchema)
                  .openapi({ description: 'BLS public key of validator to consolidate to.' }),
              })
              .openapi({
                description:
                  'The [`ConsolidationRequest`](https://github.com/ethereum/consensus-specs/blob/v1.5.0/specs/electra/beacon-chain.md#consolidationrequest) object from the CL Electra spec.',
                required: ['source_address', 'source_pubkey', 'target_pubkey'],
              }),
          )
          .max(2)
          .openapi({ description: 'Progressive list of consolidation requests.' }),
        builder_deposits: z
          .array(
            z
              .object({
                pubkey: z
                  .lazy(() => GloasBuilderPreferencesEntrySchema)
                  .openapi({ description: 'BLS public key of builder.' }),
                withdrawal_credentials: z
                  .lazy(() => GloasBeaconStateSchema)
                  .openapi({ description: 'The withdrawal credentials.' }),
                amount: Uint64Schema.openapi({ description: 'The value to be deposited (gwei).' }),
                signature: SignatureSchema,
              })
              .openapi({
                description:
                  'The [`BuilderDepositRequest`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/beacon-chain.md#builderdepositrequest) object from the CL Gloas spec.',
                required: ['pubkey', 'withdrawal_credentials', 'amount', 'signature'],
              }),
          )
          .max(64)
          .openapi({ description: 'Progressive list of builder deposit requests.' }),
        builder_exits: z
          .array(
            z
              .object({
                source_address: ExecutionAddressSchema.openapi({
                  description: 'Execution address which sent the request.',
                }),
                pubkey: z
                  .lazy(() => GloasBuilderPreferencesEntrySchema)
                  .openapi({ description: 'BLS public key of builder.' }),
              })
              .openapi({
                description:
                  'The [`BuilderExitRequest`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/beacon-chain.md#builderexitrequest) object from the CL Gloas spec.',
                required: ['source_address', 'pubkey'],
              }),
          )
          .max(16)
          .openapi({ description: 'Progressive list of builder exit requests.' }),
      })
      .openapi({
        description:
          'The [`ExecutionRequests`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/beacon-chain.md#executionrequests) object from the CL Gloas spec.',
        required: [
          'deposits',
          'withdrawals',
          'consolidations',
          'builder_deposits',
          'builder_exits',
        ],
      }),
    builder_index: Uint64Schema.openapi({
      description: 'Index of the builder that created this execution payload',
    }),
    beacon_block_root: RootSchema.openapi({
      description: 'Root of the beacon block for this payload',
    }),
    parent_beacon_block_root: RootSchema.openapi({
      description: 'Root of the parent beacon block',
    }),
  })
  .openapi({
    description:
      'The [`ExecutionPayloadEnvelope`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/beacon-chain.md#executionpayloadenvelope) object from the CL Gloas spec.',
    required: [
      'payload',
      'execution_requests',
      'builder_index',
      'beacon_block_root',
      'parent_beacon_block_root',
    ],
  })
  .openapi('GloasExecutionPayloadEnvelope')

const GloasSignedExecutionPayloadEnvelopeSchema = z
  .object({
    message: GloasExecutionPayloadEnvelopeSchema,
    signature: SignatureSchema.openapi({
      description: 'BLS signature of the execution payload envelope',
    }),
  })
  .openapi({
    description:
      'The [`SignedExecutionPayloadEnvelope`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/beacon-chain.md#signedexecutionpayloadenvelope) object from the CL Gloas spec.',
    required: ['message', 'signature'],
  })
  .openapi('GloasSignedExecutionPayloadEnvelope')

const BlobSchema = z
  .hex()
  .regex(/^0x[a-fA-F0-9]{262144}$/)
  .openapi({
    description:
      'A blob is `FIELD_ELEMENTS_PER_BLOB * size_of(BLSFieldElement) = 4096 * 32 = 131072` bytes (`DATA`) representing a Blob as defined in Deneb',
  })
  .openapi('Blob')

const BlobsSchema = z.array(BlobSchema).min(0).max(4096).openapi('Blobs')

const GloasSignedExecutionPayloadEnvelopeContentsSchema = z
  .object({
    signed_execution_payload_envelope: GloasSignedExecutionPayloadEnvelopeSchema,
    kzg_proofs: z
      .array(
        z
          .hex()
          .regex(/^0x[a-fA-F0-9]{96}$/)
          .openapi({
            description:
              'A G1 curve point. Used for verifying that the `KZGCommitment` for a given `Blob` is correct.',
          }),
      )
      .min(0)
      .max(33554432),
    blobs: BlobsSchema,
  })
  .openapi({
    description:
      'Signed execution payload envelope bundled with blobs and KZG proofs for stateless\npublishing. Used when the validator client publishes to a beacon node that does not\nhave the blobs cached (e.g. multi-BN setups, distributed validators, failover).\n',
    required: ['signed_execution_payload_envelope', 'kzg_proofs', 'blobs'],
  })
  .openapi('GloasSignedExecutionPayloadEnvelopeContents')

type FuluBlockContentsType = {
  block: {
    slot: z.infer<typeof Uint64Schema>
    proposer_index: z.infer<typeof Uint64Schema>
    parent_root: z.infer<typeof RootSchema>
    state_root: z.infer<typeof RootSchema>
  } & {
    body: {
      randao_reveal: z.infer<typeof SignatureSchema> & unknown
      eth1_data: z.infer<typeof GloasBeaconStateSchema>
      graffiti: z.infer<typeof GraffitiSchema>
      proposer_slashings: z.infer<typeof Phase0ProposerSlashingSchema>[]
      attester_slashings: z.infer<typeof ElectraAttesterSlashingSchema>[]
      attestations: z.infer<typeof ElectraAttestationSchema>[]
      deposits: {
        proof: z.infer<typeof RootSchema>[]
        data: {
          pubkey: z.infer<typeof GloasBuilderPreferencesEntrySchema>
          withdrawal_credentials: z.infer<typeof RootSchema>
          amount: z.infer<typeof Uint64Schema>
          signature: z.infer<typeof SignatureSchema>
        }
      }[]
      voluntary_exits: z.infer<typeof Phase0SignedVoluntaryExitSchema>[]
      sync_aggregate: z.infer<typeof GloasLightClientFinalityUpdateSchema>
      bls_to_execution_changes: z.infer<typeof CapellaSignedBLSToExecutionChangeSchema>[]
      blob_kzg_commitments: string[]
    } & {
      execution_payload: z.infer<typeof _0Schema> & {
        transactions: string[]
        withdrawals: z.infer<typeof CapellaWithdrawalSchema>[]
      }
      execution_requests: {
        deposits: z.infer<typeof ItemsSchema>[]
        withdrawals: z.infer<typeof ItemsSchema>[]
        consolidations: z.infer<typeof ItemsSchema>[]
      }
    }
  }
  kzg_proofs: z.infer<typeof GloasSignedExecutionPayloadEnvelopeContentsSchema>
  blobs: z.infer<typeof BlobsSchema>
}

const FuluBlockContentsSchema: z.ZodType<FuluBlockContentsType> = z
  .object({
    block: z
      .object({
        slot: Uint64Schema.openapi({ description: 'The slot to which this block corresponds.' }),
        proposer_index: Uint64Schema.openapi({
          description: 'Index of validator in validator registry.',
        }),
        parent_root: RootSchema.openapi({
          description: 'The signing Merkle root of the parent `BeaconBlock`.',
        }),
        state_root: RootSchema.openapi({
          description: 'The tree hash Merkle root of the `BeaconState` for the `BeaconBlock`.',
        }),
      })
      .openapi({ required: ['slot', 'proposer_index', 'parent_root', 'state_root'] })
      .and(
        z
          .object({
            body: z
              .object({
                randao_reveal: SignatureSchema.openapi({
                  description: 'The RANDAO reveal value provided by the validator.',
                }),
                eth1_data: z.lazy(() => GloasBeaconStateSchema),
                graffiti: GraffitiSchema,
                proposer_slashings: z.array(Phase0ProposerSlashingSchema),
                attester_slashings: z.array(ElectraAttesterSlashingSchema),
                attestations: z.array(ElectraAttestationSchema),
                deposits: z.array(
                  z
                    .object({
                      proof: z
                        .array(RootSchema)
                        .length(33)
                        .openapi({ description: 'Branch in the deposit tree.' }),
                      data: z
                        .object({
                          pubkey: z.lazy(() => GloasBuilderPreferencesEntrySchema),
                          withdrawal_credentials: RootSchema.openapi({
                            description: 'The withdrawal credentials.',
                          }),
                          amount: Uint64Schema.openapi({ description: 'Amount in Gwei.' }),
                          signature: SignatureSchema.openapi({
                            description: 'Container self-signature.',
                          }),
                        })
                        .openapi({
                          description:
                            'The [`DepositData`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#depositdata) object from the CL spec.',
                          required: ['pubkey', 'withdrawal_credentials', 'amount', 'signature'],
                        }),
                    })
                    .openapi({
                      description:
                        'The [`Deposit`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#deposit) object from the CL spec.',
                      required: ['proof', 'data'],
                    }),
                ),
                voluntary_exits: z.array(Phase0SignedVoluntaryExitSchema),
                sync_aggregate: z.lazy(() => GloasLightClientFinalityUpdateSchema),
                bls_to_execution_changes: z.array(CapellaSignedBLSToExecutionChangeSchema),
                blob_kzg_commitments: z.array(
                  z
                    .hex()
                    .regex(/^0x[a-fA-F0-9]{96}$/)
                    .openapi({
                      description:
                        'A G1 curve point. Same as BLS standard "is valid pubkey" check but also allows `0x00..00` for point-at-infinity',
                      example:
                        '0x93247f2209abcacf57b75a51dafae777f9dd38bc7053d1af526f220a7489a6d3a2753e5f3e8b1cfe39b56f43611df74a',
                    }),
                ),
              })
              .openapi({
                description:
                  'The [`BeaconBlockBody`](https://github.com/ethereum/consensus-specs/blob/v1.5.0/specs/electra/beacon-chain.md#beaconblockbody) object from the CL Electra spec.',
                required: [
                  'randao_reveal',
                  'eth1_data',
                  'graffiti',
                  'proposer_slashings',
                  'attester_slashings',
                  'attestations',
                  'deposits',
                  'voluntary_exits',
                  'sync_aggregate',
                  'bls_to_execution_changes',
                  'blob_kzg_commitments',
                ],
              })
              .and(
                z
                  .object({
                    execution_payload: _0Schema.and(
                      z
                        .object({
                          transactions: z
                            .array(
                              z
                                .hex()
                                .regex(/^0x[a-fA-F0-9]{0,2147483648}$/)
                                .openapi({
                                  description:
                                    'A transaction on the execution (Ethereum 1) network.',
                                  example:
                                    '0x02f878831469668303f51d843b9ac9f9843b9aca0082520894c93269b73096998db66be0441e836d873535cb9c8894a19041886f000080c001a031cc29234036afbf9a1fb9476b463367cb1f957ac0b919b69bbc798436e604aaa018c4e9c3914eb27aadd0b91e10b18655739fcf8c1fc398763a9f1beecb8ddc86',
                                }),
                            )
                            .max(1048576),
                          withdrawals: z.array(CapellaWithdrawalSchema).max(16),
                        })
                        .openapi({ required: ['transactions', 'withdrawals'] }),
                    ),
                    execution_requests: z
                      .object({
                        deposits: z
                          .array(ItemsSchema)
                          .max(8192)
                          .openapi({ description: 'List of deposit requests.' }),
                        withdrawals: z
                          .array(ItemsSchema)
                          .max(16)
                          .openapi({ description: 'List of withdrawal requests.' }),
                        consolidations: z
                          .array(ItemsSchema)
                          .max(2)
                          .openapi({ description: 'List of consolidation requests.' }),
                      })
                      .openapi({
                        description:
                          'The [`ExecutionRequests`](https://github.com/ethereum/consensus-specs/blob/v1.5.0/specs/electra/beacon-chain.md#executionrequests) object from the CL Electra spec.',
                        required: ['deposits', 'withdrawals', 'consolidations'],
                      }),
                  })
                  .openapi({ required: ['execution_payload', 'execution_requests'] }),
              ),
          })
          .openapi({ required: ['body'] }),
      )
      .openapi({
        description:
          'The [`BeaconBlock`](https://github.com/ethereum/consensus-specs/blob/v1.5.0/specs/phase0/beacon-chain.md#beaconblock) object from the CL Electra spec.',
      }),
    kzg_proofs: z
      .lazy(() => GloasSignedExecutionPayloadEnvelopeContentsSchema)
      .openapi({ description: 'Cell proofs of the blobs as defined in EIP-7594' }),
    blobs: BlobsSchema,
  })
  .openapi({
    description: 'The required object for block production according to the Fulu CL spec.',
    required: ['block', 'kzg_proofs', 'blobs'],
  })
  .openapi('FuluBlockContents')

const ElectraSignedBeaconBlockSchema = z
  .object({ message: z.lazy(() => FuluBlockContentsSchema), signature: SignatureSchema })
  .openapi({
    description:
      'The [`SignedBeaconBlock`](https://github.com/ethereum/consensus-specs/blob/v1.5.0/specs/phase0/beacon-chain.md#signedbeaconblock) object envelope from the CL Electra spec.',
    required: ['message', 'signature'],
  })
  .openapi('ElectraSignedBeaconBlock')

const ElectraSignedBlockContentsSchema = z
  .object({
    signed_block: ElectraSignedBeaconBlockSchema,
    kzg_proofs: z.array(ItemsSchema).min(0).max(4096),
    blobs: BlobsSchema,
  })
  .openapi({
    description:
      'The required signed components of block production according to the Electra CL spec.',
    required: ['signed_block', 'kzg_proofs', 'blobs'],
  })
  .openapi('ElectraSignedBlockContents')

type DenebBlockContentsType = {
  block: z.infer<typeof DenebBeaconBlockSchema>
  kzg_proofs: z.infer<typeof ElectraSignedBlockContentsSchema>
  blobs: z.infer<typeof BlobsSchema>
}

type DenebSignedBeaconBlockType = {
  message: z.infer<typeof DenebBeaconBlockSchema>
  signature: z.infer<typeof SignatureSchema>
}

const DenebSignedBeaconBlockSchema: z.ZodType<DenebSignedBeaconBlockType> = z
  .object({ message: DenebBeaconBlockSchema, signature: SignatureSchema })
  .openapi({
    description:
      'The [`SignedBeaconBlock`](https://github.com/ethereum/consensus-specs/blob/v1.4.0/specs/phase0/beacon-chain.md#signedbeaconblock) object envelope from the CL Deneb spec.',
    required: ['message', 'signature'],
  })
  .openapi('DenebSignedBeaconBlock')

type DenebSignedBlockContentsType = {
  signed_block: z.infer<typeof DenebSignedBeaconBlockSchema>
  kzg_proofs: z.infer<typeof ElectraSignedBlockContentsSchema>
  blobs: z.infer<typeof BlobsSchema>
}

const DenebBlindedBeaconBlockSchema = z
  .object({
    slot: Uint64Schema.openapi({ description: 'The slot to which this block corresponds.' }),
    proposer_index: Uint64Schema.openapi({
      description: 'Index of validator in validator registry.',
    }),
    parent_root: RootSchema.openapi({
      description: 'The signing Merkle root of the parent `BeaconBlock`.',
    }),
    state_root: RootSchema.openapi({
      description: 'The tree hash Merkle root of the `BeaconState` for the `BeaconBlock`.',
    }),
  })
  .openapi({ required: ['slot', 'proposer_index', 'parent_root', 'state_root'] })
  .and(
    z
      .object({
        body: z
          .object({
            randao_reveal: SignatureSchema.openapi({
              description: 'The RANDAO reveal value provided by the validator.',
            }),
            eth1_data: z.lazy(() => GloasBeaconStateSchema),
            graffiti: GraffitiSchema,
            proposer_slashings: z.array(Phase0ProposerSlashingSchema),
            attester_slashings: z.array(Phase0AttesterSlashingSchema),
            attestations: z.array(Phase0AttestationSchema),
            deposits: z.array(
              z
                .object({
                  proof: z
                    .array(RootSchema)
                    .length(33)
                    .openapi({ description: 'Branch in the deposit tree.' }),
                  data: z
                    .object({
                      pubkey: z.lazy(() => GloasBuilderPreferencesEntrySchema),
                      withdrawal_credentials: RootSchema.openapi({
                        description: 'The withdrawal credentials.',
                      }),
                      amount: Uint64Schema.openapi({ description: 'Amount in Gwei.' }),
                      signature: SignatureSchema.openapi({
                        description: 'Container self-signature.',
                      }),
                    })
                    .openapi({
                      description:
                        'The [`DepositData`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#depositdata) object from the CL spec.',
                      required: ['pubkey', 'withdrawal_credentials', 'amount', 'signature'],
                    }),
                })
                .openapi({
                  description:
                    'The [`Deposit`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#deposit) object from the CL spec.',
                  required: ['proof', 'data'],
                }),
            ),
            voluntary_exits: z.array(Phase0SignedVoluntaryExitSchema),
            sync_aggregate: z.lazy(() => GloasLightClientFinalityUpdateSchema),
            bls_to_execution_changes: z.array(CapellaSignedBLSToExecutionChangeSchema),
            blob_kzg_commitments: z.array(
              z
                .hex()
                .regex(/^0x[a-fA-F0-9]{96}$/)
                .openapi({
                  description:
                    'A G1 curve point. Same as BLS standard "is valid pubkey" check but also allows `0x00..00` for point-at-infinity',
                  example:
                    '0x93247f2209abcacf57b75a51dafae777f9dd38bc7053d1af526f220a7489a6d3a2753e5f3e8b1cfe39b56f43611df74a',
                }),
            ),
          })
          .openapi({
            description:
              'The [`BeaconBlockBody`](https://github.com/ethereum/consensus-specs/blob/v1.4.0/specs/deneb/beacon-chain.md#beaconblockbody) object from the CL Deneb spec.',
            required: [
              'randao_reveal',
              'eth1_data',
              'graffiti',
              'proposer_slashings',
              'attester_slashings',
              'attestations',
              'deposits',
              'voluntary_exits',
              'sync_aggregate',
              'bls_to_execution_changes',
              'blob_kzg_commitments',
            ],
          })
          .and(
            z
              .object({ execution_payload_header: z.lazy(() => FuluBeaconStateSchema) })
              .openapi({ required: ['execution_payload_header'] }),
          )
          .openapi({
            description:
              'A variant of the [`BeaconBlockBody`](https://github.com/ethereum/consensus-specs/blob/v1.4.0/specs/deneb/beacon-chain.md#beaconblockbody) object from the CL Deneb spec, which contains a transactions root rather than a full transactions list.',
          }),
      })
      .openapi({ required: ['body'] }),
  )
  .openapi({
    description:
      'A variant of the [`BeaconBlock`](https://github.com/ethereum/consensus-specs/blob/v1.4.0/specs/phase0/beacon-chain.md#beaconblock) object from the CL Deneb spec, which contains a `BlindedBeaconBlockBody` rather than a `BeaconBlockBody`.',
  })
  .openapi('DenebBlindedBeaconBlock')

type DenebSignedBlindedBeaconBlockType = {
  message: z.infer<typeof DenebBlindedBeaconBlockSchema>
  signature: z.infer<typeof SignatureSchema>
}

const ElectraBlindedBeaconBlockSchema = z
  .object({
    slot: Uint64Schema.openapi({ description: 'The slot to which this block corresponds.' }),
    proposer_index: Uint64Schema.openapi({
      description: 'Index of validator in validator registry.',
    }),
    parent_root: RootSchema.openapi({
      description: 'The signing Merkle root of the parent `BeaconBlock`.',
    }),
    state_root: RootSchema.openapi({
      description: 'The tree hash Merkle root of the `BeaconState` for the `BeaconBlock`.',
    }),
  })
  .openapi({ required: ['slot', 'proposer_index', 'parent_root', 'state_root'] })
  .and(
    z
      .object({
        body: z
          .object({
            randao_reveal: SignatureSchema.openapi({
              description: 'The RANDAO reveal value provided by the validator.',
            }),
            eth1_data: z.lazy(() => GloasBeaconStateSchema),
            graffiti: GraffitiSchema,
            proposer_slashings: z.array(Phase0ProposerSlashingSchema),
            attester_slashings: z.array(ElectraAttesterSlashingSchema),
            attestations: z.array(ElectraAttestationSchema),
            deposits: z.array(
              z
                .object({
                  proof: z
                    .array(RootSchema)
                    .length(33)
                    .openapi({ description: 'Branch in the deposit tree.' }),
                  data: z
                    .object({
                      pubkey: z.lazy(() => GloasBuilderPreferencesEntrySchema),
                      withdrawal_credentials: RootSchema.openapi({
                        description: 'The withdrawal credentials.',
                      }),
                      amount: Uint64Schema.openapi({ description: 'Amount in Gwei.' }),
                      signature: SignatureSchema.openapi({
                        description: 'Container self-signature.',
                      }),
                    })
                    .openapi({
                      description:
                        'The [`DepositData`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#depositdata) object from the CL spec.',
                      required: ['pubkey', 'withdrawal_credentials', 'amount', 'signature'],
                    }),
                })
                .openapi({
                  description:
                    'The [`Deposit`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#deposit) object from the CL spec.',
                  required: ['proof', 'data'],
                }),
            ),
            voluntary_exits: z.array(Phase0SignedVoluntaryExitSchema),
            sync_aggregate: z.lazy(() => GloasLightClientFinalityUpdateSchema),
            bls_to_execution_changes: z.array(CapellaSignedBLSToExecutionChangeSchema),
            blob_kzg_commitments: z.array(
              z
                .hex()
                .regex(/^0x[a-fA-F0-9]{96}$/)
                .openapi({
                  description:
                    'A G1 curve point. Same as BLS standard "is valid pubkey" check but also allows `0x00..00` for point-at-infinity',
                  example:
                    '0x93247f2209abcacf57b75a51dafae777f9dd38bc7053d1af526f220a7489a6d3a2753e5f3e8b1cfe39b56f43611df74a',
                }),
            ),
          })
          .openapi({
            description:
              'The [`BeaconBlockBody`](https://github.com/ethereum/consensus-specs/blob/v1.5.0/specs/electra/beacon-chain.md#beaconblockbody) object from the CL Electra spec.',
            required: [
              'randao_reveal',
              'eth1_data',
              'graffiti',
              'proposer_slashings',
              'attester_slashings',
              'attestations',
              'deposits',
              'voluntary_exits',
              'sync_aggregate',
              'bls_to_execution_changes',
              'blob_kzg_commitments',
            ],
          })
          .and(
            z
              .object({
                execution_payload_header: z.lazy(() => FuluBeaconStateSchema),
                execution_requests: z
                  .object({
                    deposits: z
                      .array(ItemsSchema)
                      .max(8192)
                      .openapi({ description: 'List of deposit requests.' }),
                    withdrawals: z
                      .array(ItemsSchema)
                      .max(16)
                      .openapi({ description: 'List of withdrawal requests.' }),
                    consolidations: z
                      .array(ItemsSchema)
                      .max(2)
                      .openapi({ description: 'List of consolidation requests.' }),
                  })
                  .openapi({
                    description:
                      'The [`ExecutionRequests`](https://github.com/ethereum/consensus-specs/blob/v1.5.0/specs/electra/beacon-chain.md#executionrequests) object from the CL Electra spec.',
                    required: ['deposits', 'withdrawals', 'consolidations'],
                  }),
              })
              .openapi({ required: ['execution_payload_header', 'execution_requests'] }),
          )
          .openapi({
            description:
              'A variant of the [`BeaconBlockBody`](https://github.com/ethereum/consensus-specs/blob/v1.5.0/specs/electra/beacon-chain.md#beaconblockbody) object from the CL Electra spec, which contains a transactions root rather than a full transactions list.',
          }),
      })
      .openapi({ required: ['body'] }),
  )
  .openapi({
    description:
      'A variant of the [`BeaconBlock`](https://github.com/ethereum/consensus-specs/blob/v1.5.0/specs/phase0/beacon-chain.md#beaconblock) object from the CL Electra spec, which contains a `BlindedBeaconBlockBody` rather than a `BeaconBlockBody`.',
  })
  .openapi('ElectraBlindedBeaconBlock')

type ElectraSignedBlindedBeaconBlockType = {
  message: z.infer<typeof ElectraBlindedBeaconBlockSchema>
  signature: z.infer<typeof SignatureSchema>
}

const ElectraPendingDepositSchema = z
  .object({
    pubkey: z
      .lazy(() => GloasBuilderPreferencesEntrySchema)
      .openapi({ description: 'BLS public key of validator.' }),
    withdrawal_credentials: RootSchema.openapi({ description: 'The withdrawal credentials.' }),
    amount: Uint64Schema.openapi({ description: 'The value to be deposited (gwei).' }),
    signature: SignatureSchema,
    slot: Uint64Schema.openapi({
      description: 'The slot at which the deposit request was processed.',
    }),
  })
  .openapi({
    description:
      'The [`PendingDeposit`](https://github.com/ethereum/consensus-specs/blob/v1.5.0/specs/electra/beacon-chain.md#pendingdeposit) object from the CL Electra spec.',
    required: ['pubkey', 'withdrawal_credentials', 'amount', 'signature', 'slot'],
  })
  .openapi('ElectraPendingDeposit')

const ElectraPendingDepositsSchema = z
  .array(ElectraPendingDepositSchema)
  .max(134217728)
  .openapi({ description: 'List of pending deposits.' })
  .openapi('ElectraPendingDeposits')

const ElectraPendingPartialWithdrawalSchema = z
  .object({
    validator_index: Uint64Schema.openapi({
      description: 'Index of validator in validator registry.',
    }),
    amount: Uint64Schema.openapi({ description: 'The value to be withdrawn (gwei).' }),
    withdrawable_epoch: Uint64Schema.openapi({
      description: 'The epoch when the amount is withdrawable.',
    }),
  })
  .openapi({
    description:
      'The [`PendingPartialWithdrawal`](https://github.com/ethereum/consensus-specs/blob/v1.5.0/specs/electra/beacon-chain.md#pendingpartialwithdrawal) object from the CL Electra spec.',
    required: ['validator_index', 'amount', 'withdrawable_epoch'],
  })
  .openapi('ElectraPendingPartialWithdrawal')

const ElectraPendingPartialWithdrawalsSchema = z
  .array(ElectraPendingPartialWithdrawalSchema)
  .max(134217728)
  .openapi({ description: 'List of pending partial withdrawals.' })
  .openapi('ElectraPendingPartialWithdrawals')

const ElectraPendingConsolidationSchema = z
  .object({
    source_index: Uint64Schema.openapi({ description: 'Index of validator to consolidate from.' }),
    target_index: Uint64Schema.openapi({ description: 'Index of validator to consolidate to.' }),
  })
  .openapi({
    description:
      'The [`PendingConsolidation`](https://github.com/ethereum/consensus-specs/blob/v1.5.0/specs/electra/beacon-chain.md#pendingconsolidation) object from the CL Electra spec.',
    required: ['source_index', 'target_index'],
  })
  .openapi('ElectraPendingConsolidation')

const ElectraPendingConsolidationsSchema = z
  .array(ElectraPendingConsolidationSchema)
  .max(262144)
  .openapi({ description: 'List of pending consolidations.' })
  .openapi('ElectraPendingConsolidations')

type FuluBeaconStateType = {
  genesis_time: z.infer<typeof Uint64Schema>
  genesis_validators_root: z.infer<typeof RootSchema>
  slot: z.infer<typeof Uint64Schema>
  fork: z.infer<typeof ForkSchema>
  latest_block_header: z.infer<typeof GloasBeaconStateSchema>
  block_roots: z.infer<typeof RootSchema>[]
  state_roots: z.infer<typeof RootSchema>[]
  historical_roots: z.infer<typeof RootSchema>[]
  eth1_data: z.infer<typeof GloasBeaconStateSchema>
  eth1_data_votes: z.infer<typeof GloasBeaconStateSchema>[]
  eth1_deposit_index: z.infer<typeof Uint64Schema>
  validators: z.infer<typeof ValidatorResponseSchema>[]
  balances: z.infer<typeof Uint64Schema>[]
  randao_mixes: z.infer<typeof GloasBeaconStateSchema>[]
  slashings: z.infer<typeof Uint64Schema>[]
  previous_epoch_participation: FuluBeaconStateType
  current_epoch_participation: z.infer<typeof GloasBeaconStateSchema>[]
  justification_bits: z.infer<typeof GloasBeaconStateSchema>
  previous_justified_checkpoint: z.infer<typeof CheckpointSchema>
  current_justified_checkpoint: z.infer<typeof CheckpointSchema>
  finalized_checkpoint: z.infer<typeof CheckpointSchema>
  inactivity_scores: z.infer<typeof Uint64Schema>[]
  current_sync_committee: z.infer<typeof GloasBeaconStateSchema>
  next_sync_committee: z.infer<typeof GloasBeaconStateSchema>
  latest_execution_payload_header: {
    parent_hash: z.infer<typeof GloasBeaconStateSchema>
    fee_recipient: z.infer<typeof ExecutionAddressSchema>
    state_root: z.infer<typeof RootSchema>
    receipts_root: z.infer<typeof RootSchema>
    logs_bloom: z.infer<typeof GloasExecutionPayloadSchema>
    prev_randao: z.infer<typeof GloasBeaconStateSchema>
    block_number: z.infer<typeof Uint64Schema>
    gas_limit: z.infer<typeof Uint64Schema>
    gas_used: z.infer<typeof Uint64Schema>
    timestamp: z.infer<typeof Uint64Schema>
    extra_data: z.infer<typeof GloasExecutionPayloadSchema>
    base_fee_per_gas: string
    blob_gas_used: z.infer<typeof Uint64Schema>
    excess_blob_gas: z.infer<typeof Uint64Schema>
    block_hash: z.infer<typeof GloasBeaconStateSchema>
  } & {
    transactions_root: z.infer<typeof RootSchema>
    withdrawals_root: z.infer<typeof RootSchema>
  }
  next_withdrawal_index: z.infer<typeof Uint64Schema>
  next_withdrawal_validator_index: z.infer<typeof Uint64Schema>
  historical_summaries: z.infer<typeof GloasBeaconStateSchema>[]
  deposit_requests_start_index: z.infer<typeof Uint64Schema>
  deposit_balance_to_consume: z.infer<typeof Uint64Schema>
  exit_balance_to_consume: z.infer<typeof Uint64Schema>
  earliest_exit_epoch: z.infer<typeof Uint64Schema>
  consolidation_balance_to_consume: z.infer<typeof Uint64Schema>
  earliest_consolidation_epoch: z.infer<typeof Uint64Schema>
  pending_deposits: z.infer<typeof ElectraPendingDepositsSchema>
  pending_partial_withdrawals: z.infer<typeof ElectraPendingPartialWithdrawalsSchema>
  pending_consolidations: z.infer<typeof ElectraPendingConsolidationsSchema>
  proposer_lookahead: z.infer<typeof Uint64Schema>[]
}

type GloasPendingDepositsType = z.infer<typeof ElectraPendingDepositSchema>[]

type GloasPendingPartialWithdrawalsType = z.infer<typeof ElectraPendingPartialWithdrawalSchema>[]

type GloasPendingConsolidationsType = z.infer<typeof ElectraPendingConsolidationSchema>[]

const GloasPendingDepositsSchema: z.ZodType<GloasPendingDepositsType> = z
  .array(ElectraPendingDepositSchema)
  .openapi({ description: 'Progressive list of pending deposits.' })
  .openapi('GloasPendingDeposits')

const GloasPendingPartialWithdrawalsSchema: z.ZodType<GloasPendingPartialWithdrawalsType> = z
  .array(ElectraPendingPartialWithdrawalSchema)
  .openapi({ description: 'Progressive list of pending partial withdrawals.' })
  .openapi('GloasPendingPartialWithdrawals')

const GloasPendingConsolidationsSchema: z.ZodType<GloasPendingConsolidationsType> = z
  .array(ElectraPendingConsolidationSchema)
  .openapi({ description: 'Progressive list of pending consolidations.' })
  .openapi('GloasPendingConsolidations')

const GloasBuilderSchema: z.ZodType<GloasBuilderType> = z
  .lazy(() =>
    z
      .object({
        pubkey: z.lazy(() => GloasBuilderPreferencesEntrySchema),
        version: z.lazy(() => GloasBeaconStateSchema).openapi({ description: 'Builder version.' }),
        execution_address: ExecutionAddressSchema.openapi({
          description: 'Execution-layer address that receives builder withdrawals.',
        }),
        balance: Uint64Schema.openapi({ description: 'Current builder balance in gwei.' }),
        deposit_epoch: Uint64Schema.openapi({
          description: 'Epoch when the builder deposit was processed.',
        }),
        withdrawable_epoch: Uint64Schema.openapi({
          description: "Epoch when the builder can withdraw. 'FAR_FUTURE_EPOCH' if not exiting.",
        }),
      })
      .openapi({
        description:
          'The [`Builder`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/beacon-chain.md#builder) object from the CL Gloas spec.',
        required: [
          'pubkey',
          'version',
          'execution_address',
          'balance',
          'deposit_epoch',
          'withdrawable_epoch',
        ],
      }),
  )
  .openapi('GloasBuilder')

const GloasBuilderPendingWithdrawalSchema = z
  .object({
    fee_recipient: ExecutionAddressSchema,
    amount: Uint64Schema,
    builder_index: Uint64Schema,
  })
  .openapi({
    description:
      'The [`BuilderPendingWithdrawal`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/beacon-chain.md#builderpendingwithdrawal) object from the CL Gloas spec.',
    required: ['fee_recipient', 'amount', 'builder_index'],
  })
  .openapi('GloasBuilderPendingWithdrawal')

const GloasBuilderPendingPaymentSchema = z
  .object({
    weight: Uint64Schema,
    withdrawal: GloasBuilderPendingWithdrawalSchema,
    proposer_index: Uint64Schema,
  })
  .openapi({
    description:
      'The [`BuilderPendingPayment`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/beacon-chain.md#builderpendingpayment) object from the CL Gloas spec.',
    required: ['weight', 'withdrawal', 'proposer_index'],
  })
  .openapi('GloasBuilderPendingPayment')

type GloasBuilderPendingPaymentsType = z.infer<typeof GloasBuilderPendingPaymentSchema>[]

const GloasBuilderPendingPaymentsSchema: z.ZodType<GloasBuilderPendingPaymentsType> = z
  .array(GloasBuilderPendingPaymentSchema)
  .length(64)
  .openapi({ description: 'Fixed vector of pending builder payments covering two epochs.' })
  .openapi('GloasBuilderPendingPayments')

type GloasBuilderPendingWithdrawalsType = z.infer<typeof GloasBuilderPendingWithdrawalSchema>[]

const GloasBuilderPendingWithdrawalsSchema: z.ZodType<GloasBuilderPendingWithdrawalsType> = z
  .array(GloasBuilderPendingWithdrawalSchema)
  .openapi({ description: 'Progressive list of pending builder withdrawals.' })
  .openapi('GloasBuilderPendingWithdrawals')

const GloasExecutionPayloadBidSchema: z.ZodType<GloasExecutionPayloadBidType> = z
  .lazy(() =>
    z
      .object({
        parent_block_hash: z.lazy(() => GloasBeaconStateSchema),
        parent_block_root: RootSchema,
        block_hash: z.lazy(() => GloasBeaconStateSchema),
        prev_randao: z.lazy(() => GloasBeaconStateSchema),
        fee_recipient: ExecutionAddressSchema,
        gas_limit: Uint64Schema,
        builder_index: Uint64Schema,
        slot: Uint64Schema,
        value: Uint64Schema,
        execution_payment: Uint64Schema,
        blob_kzg_commitments: z
          .array(
            z
              .hex()
              .regex(/^0x[a-fA-F0-9]{96}$/)
              .openapi({
                description:
                  'A G1 curve point. Same as BLS standard "is valid pubkey" check but also allows `0x00..00` for point-at-infinity',
                example:
                  '0x93247f2209abcacf57b75a51dafae777f9dd38bc7053d1af526f220a7489a6d3a2753e5f3e8b1cfe39b56f43611df74a',
              }),
          )
          .max(4096),
        execution_requests_root: RootSchema,
      })
      .openapi({
        description:
          'The [`ExecutionPayloadBid`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/beacon-chain.md#executionpayloadbid) object from the CL Gloas spec.',
        required: [
          'parent_block_hash',
          'parent_block_root',
          'block_hash',
          'prev_randao',
          'fee_recipient',
          'gas_limit',
          'builder_index',
          'slot',
          'value',
          'execution_payment',
          'blob_kzg_commitments',
          'execution_requests_root',
        ],
      }),
  )
  .openapi('GloasExecutionPayloadBid')

type GloasPayloadTimelinessCommitteeType = z.infer<typeof Uint64Schema>[]

const GloasPayloadTimelinessCommitteeSchema: z.ZodType<GloasPayloadTimelinessCommitteeType> = z
  .array(Uint64Schema)
  .length(512)
  .openapi({
    description:
      'The [`PayloadTimelinessCommittee`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/beacon-chain.md#new-payloadtimelinesscommittee) vector from the CL Gloas spec. Validator indices are in committee order and may contain duplicates.',
  })
  .openapi('GloasPayloadTimelinessCommittee')

type GloasBeaconStateType = {
  genesis_time: z.infer<typeof Uint64Schema>
  genesis_validators_root: z.infer<typeof RootSchema>
  slot: z.infer<typeof Uint64Schema>
  fork: z.infer<typeof ForkSchema>
  latest_block_header: {
    slot: z.infer<typeof Uint64Schema>
    proposer_index: z.infer<typeof Uint64Schema>
    parent_root: z.infer<typeof RootSchema>
    state_root: z.infer<typeof RootSchema>
  } & { body_root: z.infer<typeof RootSchema> }
  block_roots: z.infer<typeof RootSchema>[]
  state_roots: z.infer<typeof RootSchema>[]
  historical_roots: z.infer<typeof RootSchema>[]
  eth1_data: {
    deposit_root: z.infer<typeof RootSchema>
    deposit_count: z.infer<typeof Uint64Schema>
    block_hash: GloasBeaconStateType
  }
  eth1_data_votes: GloasBeaconStateType[]
  eth1_deposit_index: z.infer<typeof Uint64Schema>
  validators: z.infer<typeof ValidatorResponseSchema>[]
  balances: z.infer<typeof Uint64Schema>[]
  randao_mixes: string[]
  slashings: z.infer<typeof Uint64Schema>[]
  previous_epoch_participation: GloasBeaconStateType[]
  current_epoch_participation: string[]
  justification_bits: string
  previous_justified_checkpoint: z.infer<typeof CheckpointSchema>
  current_justified_checkpoint: z.infer<typeof CheckpointSchema>
  finalized_checkpoint: z.infer<typeof CheckpointSchema>
  inactivity_scores: z.infer<typeof Uint64Schema>[]
  current_sync_committee: GloasBeaconStateType
  next_sync_committee: {
    pubkeys: z.infer<typeof GloasBuilderPreferencesEntrySchema>[]
    aggregate_pubkey: z.infer<typeof GloasBuilderPreferencesEntrySchema>
  }
  latest_block_hash: string
  next_withdrawal_index: z.infer<typeof Uint64Schema>
  next_withdrawal_validator_index: z.infer<typeof Uint64Schema>
  historical_summaries: {
    block_summary_root: z.infer<typeof RootSchema>
    state_summary_root: z.infer<typeof RootSchema>
  }[]
  deposit_requests_start_index: z.infer<typeof Uint64Schema>
  deposit_balance_to_consume: z.infer<typeof Uint64Schema>
  exit_balance_to_consume: z.infer<typeof Uint64Schema>
  earliest_exit_epoch: z.infer<typeof Uint64Schema>
  consolidation_balance_to_consume: z.infer<typeof Uint64Schema>
  earliest_consolidation_epoch: z.infer<typeof Uint64Schema>
  pending_deposits: z.infer<typeof GloasPendingDepositsSchema>
  pending_partial_withdrawals: z.infer<typeof GloasPendingPartialWithdrawalsSchema>
  pending_consolidations: z.infer<typeof GloasPendingConsolidationsSchema>
  proposer_lookahead: z.infer<typeof Uint64Schema>[]
  builders: z.infer<typeof GloasBuilderSchema>[]
  next_withdrawal_builder_index: z.infer<typeof Uint64Schema>
  execution_payload_availability: GloasBeaconStateType
  builder_pending_payments: z.infer<typeof GloasBuilderPendingPaymentsSchema>
  builder_pending_withdrawals: z.infer<typeof GloasBuilderPendingWithdrawalsSchema>
  latest_execution_payload_bid: z.infer<typeof GloasExecutionPayloadBidSchema>
  payload_expected_withdrawals: z.infer<typeof CapellaWithdrawalSchema>[]
  ptc_window: z.infer<typeof GloasPayloadTimelinessCommitteeSchema>[]
}

const GloasAttesterSlashingSchema: z.ZodType<GloasAttesterSlashingType> = z
  .lazy(() =>
    z
      .object({
        attestation_1: z
          .object({
            attesting_indices: z
              .array(Uint64Schema)
              .max(131072)
              .openapi({ description: 'Progressive list of attesting validator indices.' }),
            data: Phase0AttestationDataSchema,
            signature: SignatureSchema.openapi({
              description: 'The BLS signature of the indexed attestation.',
            }),
          })
          .openapi({
            description:
              'The [`IndexedAttestation`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/beacon-chain.md#indexedattestation) object from the CL Gloas spec.',
            required: ['attesting_indices', 'data', 'signature'],
          }),
        attestation_2: z.lazy(() => GloasAttesterSlashingSchema),
      })
      .openapi({
        description:
          'The [`AttesterSlashing`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/electra/beacon-chain.md#attesterslashing) object from the CL spec.',
        required: ['attestation_1', 'attestation_2'],
      }),
  )
  .openapi('GloasAttesterSlashing')

const GloasAttestationSchema = z
  .object({
    aggregation_bits: z
      .lazy(() => Phase0BeaconStateSchema)
      .openapi({
        description:
          'Progressive bitlist of attester aggregation bits, limited to MAX_VALIDATORS_PER_COMMITTEE * MAX_COMMITTEES_PER_SLOT (131072) bits.',
      }),
    data: Phase0AttestationDataSchema,
    signature: SignatureSchema.openapi({ description: 'BLS aggregate signature.' }),
    committee_bits: z
      .lazy(() => GloasBeaconStateSchema)
      .openapi({
        description: 'Committee bits, a fixed vector of MAX_COMMITTEES_PER_SLOT (64) bits.',
        example: '0x0000000000000001',
      }),
  })
  .openapi({
    description:
      'The [`Attestation`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/beacon-chain.md#attestation) object from the CL Gloas spec.',
    required: ['aggregation_bits', 'data', 'signature', 'committee_bits'],
  })
  .openapi('GloasAttestation')

const GloasSignedExecutionPayloadBidSchema = z
  .object({ message: GloasExecutionPayloadBidSchema, signature: SignatureSchema })
  .openapi({
    description:
      'The [`SignedExecutionPayloadBid`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/beacon-chain.md#signedexecutionpayloadbid) object from the CL Gloas spec.',
    required: ['message', 'signature'],
  })
  .openapi('GloasSignedExecutionPayloadBid')

const GloasPayloadAttestationDataSchema = z
  .object({
    beacon_block_root: RootSchema.openapi({
      description: 'Hash tree root of the beacon block associated with this PTC attestation',
    }),
    slot: Uint64Schema.openapi({
      description: 'The slot for which the payload attestation is being made',
    }),
    payload_present: z
      .boolean()
      .openapi({
        description:
          'True if a `SignedExecutionPayloadEnvelope` has been seen referencing this block',
      }),
    blob_data_available: z
      .boolean()
      .openapi({ description: 'True if blob data is available for this block' }),
  })
  .openapi({
    description:
      'The [`PayloadAttestationData`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/beacon-chain.md#payloadattestationdata) object from the CL Gloas spec.',
    required: ['beacon_block_root', 'slot', 'payload_present', 'blob_data_available'],
  })
  .openapi('GloasPayloadAttestationData')

const GloasPayloadAttestationSchema = z
  .object({
    aggregation_bits: z
      .lazy(() => GloasBeaconStateSchema)
      .openapi({
        description: 'Fixed vector of PTC_SIZE (512) bits.',
        example:
          '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
      }),
    data: GloasPayloadAttestationDataSchema,
    signature: SignatureSchema,
  })
  .openapi({
    description:
      'The [`PayloadAttestation`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/beacon-chain.md#payloadattestation) object from the CL Gloas spec.',
    required: ['aggregation_bits', 'data', 'signature'],
  })
  .openapi('GloasPayloadAttestation')

const GloasBeaconBlockSchema = z
  .object({
    slot: Uint64Schema.openapi({ description: 'The slot to which this block corresponds.' }),
    proposer_index: Uint64Schema.openapi({
      description: 'Index of validator in validator registry.',
    }),
    parent_root: RootSchema.openapi({
      description: 'The signing Merkle root of the parent `BeaconBlock`.',
    }),
    state_root: RootSchema.openapi({
      description: 'The tree hash Merkle root of the `BeaconState` for the `BeaconBlock`.',
    }),
  })
  .openapi({ required: ['slot', 'proposer_index', 'parent_root', 'state_root'] })
  .and(
    z
      .object({
        body: z
          .object({
            randao_reveal: SignatureSchema.openapi({
              description: 'The RANDAO reveal value provided by the validator.',
            }),
            eth1_data: z.lazy(() => GloasBeaconStateSchema),
            graffiti: GraffitiSchema,
            proposer_slashings: z.array(Phase0ProposerSlashingSchema).max(16),
            attester_slashings: z.array(GloasAttesterSlashingSchema).max(1),
            attestations: z.array(GloasAttestationSchema).max(8),
            deposits: z
              .array(
                z
                  .object({
                    proof: z
                      .array(RootSchema)
                      .length(33)
                      .openapi({ description: 'Branch in the deposit tree.' }),
                    data: z
                      .object({
                        pubkey: z.lazy(() => GloasBuilderPreferencesEntrySchema),
                        withdrawal_credentials: RootSchema.openapi({
                          description: 'The withdrawal credentials.',
                        }),
                        amount: Uint64Schema.openapi({ description: 'Amount in Gwei.' }),
                        signature: SignatureSchema.openapi({
                          description: 'Container self-signature.',
                        }),
                      })
                      .openapi({
                        description:
                          'The [`DepositData`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#depositdata) object from the CL spec.',
                        required: ['pubkey', 'withdrawal_credentials', 'amount', 'signature'],
                      }),
                  })
                  .openapi({
                    description:
                      'The [`Deposit`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#deposit) object from the CL spec.',
                    required: ['proof', 'data'],
                  }),
              )
              .max(0)
              .openapi({
                description:
                  'Legacy deposits have been disabled since Fulu. This list must be empty.',
              }),
            voluntary_exits: z.array(Phase0SignedVoluntaryExitSchema).max(16),
            sync_aggregate: z.lazy(() => GloasLightClientFinalityUpdateSchema),
            bls_to_execution_changes: z.array(CapellaSignedBLSToExecutionChangeSchema).max(16),
            signed_execution_payload_bid: GloasSignedExecutionPayloadBidSchema,
            payload_attestations: z
              .array(GloasPayloadAttestationSchema)
              .max(4)
              .openapi({ description: 'Payload attestations for the parent beacon block.' }),
            parent_execution_requests: z.lazy(() => GloasExecutionPayloadEnvelopeSchema),
          })
          .openapi({
            description:
              'The [`BeaconBlockBody`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/beacon-chain.md#beaconblockbody) object from the CL Gloas spec.',
            required: [
              'randao_reveal',
              'eth1_data',
              'graffiti',
              'proposer_slashings',
              'attester_slashings',
              'attestations',
              'deposits',
              'voluntary_exits',
              'sync_aggregate',
              'bls_to_execution_changes',
              'signed_execution_payload_bid',
              'payload_attestations',
              'parent_execution_requests',
            ],
          }),
      })
      .openapi({ required: ['body'] }),
  )
  .openapi({
    description:
      'The [`BeaconBlock`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/phase0/beacon-chain.md#beaconblock) object from the CL Gloas spec.',
  })
  .openapi('GloasBeaconBlock')

type GloasSignedBeaconBlockType = {
  message: z.infer<typeof GloasBeaconBlockSchema>
  signature: z.infer<typeof SignatureSchema>
}

type GloasBuilderType = {
  pubkey: z.infer<typeof GloasBuilderPreferencesEntrySchema>
  version: z.infer<typeof GloasBeaconStateSchema>
  execution_address: z.infer<typeof ExecutionAddressSchema>
  balance: z.infer<typeof Uint64Schema>
  deposit_epoch: z.infer<typeof Uint64Schema>
  withdrawable_epoch: z.infer<typeof Uint64Schema>
}

type GloasBlockContentsType = {
  block: z.infer<typeof GloasBeaconBlockSchema>
  execution_payload_envelope: z.infer<typeof GloasExecutionPayloadEnvelopeSchema>
  kzg_proofs: z.infer<typeof GloasSignedExecutionPayloadEnvelopeContentsSchema>
  blobs: z.infer<typeof BlobsSchema>
}

type GloasExecutionPayloadBidType = {
  parent_block_hash: z.infer<typeof GloasBeaconStateSchema>
  parent_block_root: z.infer<typeof RootSchema>
  block_hash: z.infer<typeof GloasBeaconStateSchema>
  prev_randao: z.infer<typeof GloasBeaconStateSchema>
  fee_recipient: z.infer<typeof ExecutionAddressSchema>
  gas_limit: z.infer<typeof Uint64Schema>
  builder_index: z.infer<typeof Uint64Schema>
  slot: z.infer<typeof Uint64Schema>
  value: z.infer<typeof Uint64Schema>
  execution_payment: z.infer<typeof Uint64Schema>
  blob_kzg_commitments: string[]
  execution_requests_root: z.infer<typeof RootSchema>
}

type GloasAttesterSlashingType = {
  attestation_1: {
    attesting_indices: z.infer<typeof Uint64Schema>[]
    data: z.infer<typeof Phase0AttestationDataSchema>
    signature: z.infer<typeof SignatureSchema>
  }
  attestation_2: GloasAttesterSlashingType
}

const BroadcastValidationSchema = z
  .enum(['gossip', 'consensus', 'consensus_and_equivocation'])
  .openapi({
    description: 'Level of validation that must be applied to a block before it is broadcast.',
  })
  .openapi('BroadcastValidation')

const ValidatorBalanceResponseSchema = z
  .object({
    index: Uint64Schema.openapi({ description: 'Index of validator in validator registry.' }),
    balance: Uint64Schema.openapi({ description: 'Current validator balance in gwei.' }),
  })
  .openapi({ required: ['index', 'balance'] })
  .openapi('ValidatorBalanceResponse')

const ValidatorIdentityResponseSchema = z
  .object({
    index: Uint64Schema.openapi({ description: 'Index of validator in validator registry.' }),
    pubkey: z
      .lazy(() => GloasBuilderPreferencesEntrySchema)
      .openapi({ description: 'Public key of validator.' }),
    activation_epoch: Uint64Schema.openapi({
      description: "Epoch when validator activated. 'FAR_FUTURE_EPOCH' if not activated",
    }),
  })
  .openapi({ required: ['index', 'pubkey', 'activation_epoch'] })
  .openapi('ValidatorIdentityResponse')

const BuilderStatusSchema = z
  .enum(['pending', 'active', 'exited'])
  .openapi({
    description:
      'Possible statuses:\n- **pending** - When builder has not exited and is not yet active; `builder.withdrawable_epoch == FAR_FUTURE_EPOCH` and `is_active_builder(state, index)` returns `False`.\n- **active** - When builder is active; `is_active_builder(state, index)` returns `True`, i.e. `builder.deposit_epoch < state.finalized_checkpoint.epoch` and `builder.withdrawable_epoch == FAR_FUTURE_EPOCH`.\n- **exited** - When builder has exited; `builder.withdrawable_epoch != FAR_FUTURE_EPOCH`.\n',
    example: 'active',
  })
  .openapi('BuilderStatus')

const BuilderResponseSchema = z
  .object({
    index: Uint64Schema.openapi({ description: 'Index of builder in builder registry.' }),
    status: BuilderStatusSchema,
    builder: GloasBuilderSchema,
  })
  .openapi({ required: ['index', 'status', 'builder'] })
  .openapi('BuilderResponse')

const CommitteeSchema = z
  .object({
    index: Uint64Schema.openapi({ description: 'Committee index at a slot' }),
    slot: Uint64Schema,
    validators: z
      .array(Uint64Schema)
      .openapi({ description: 'List of validator indices assigned to this committee' }),
  })
  .openapi({
    description:
      'Group of validators assigned to attest at specific slot and that have the same committee index (shard in phase 1)',
    required: ['index', 'slot', 'validators'],
  })
  .openapi('Committee')

const AttesterDutySchema = z
  .object({
    pubkey: z.lazy(() => GloasBuilderPreferencesEntrySchema),
    validator_index: Uint64Schema.openapi({
      description: 'Index of validator in validator registry',
    }),
    committee_index: Uint64Schema.openapi({ description: 'The committee index' }),
    committee_length: Uint64Schema.openapi({ description: 'Number of validators in committee' }),
    committees_at_slot: Uint64Schema.openapi({
      description: 'Number of committees at the provided slot',
    }),
    validator_committee_index: Uint64Schema.openapi({
      description: 'Index of validator in committee',
    }),
    slot: Uint64Schema.openapi({ description: 'The slot at which the validator must attest.' }),
  })
  .openapi({
    required: [
      'pubkey',
      'validator_index',
      'committee_index',
      'committee_length',
      'committees_at_slot',
      'validator_committee_index',
      'slot',
    ],
  })
  .openapi('AttesterDuty')

const ProposerDutySchema = z
  .object({
    pubkey: z.lazy(() => GloasBuilderPreferencesEntrySchema),
    validator_index: Uint64Schema.openapi({
      description: 'Index of validator in validator registry.',
    }),
    slot: Uint64Schema.openapi({
      description: 'The slot at which the validator must propose block.',
    }),
  })
  .openapi({ required: ['pubkey', 'validator_index', 'slot'] })
  .openapi('ProposerDuty')

const PtcDutySchema = z
  .object({
    pubkey: z.lazy(() => GloasBuilderPreferencesEntrySchema),
    validator_index: Uint64Schema.openapi({
      description: 'Index of validator in validator registry.',
    }),
    slot: Uint64Schema.openapi({
      description: 'The slot at which the validator must perform PTC duties.',
    }),
  })
  .openapi({ required: ['pubkey', 'validator_index', 'slot'] })
  .openapi('PtcDuty')

const AltairSyncDutySchema = z
  .object({
    pubkey: z.lazy(() => GloasBuilderPreferencesEntrySchema),
    validator_index: Uint64Schema.openapi({
      description: 'Index of validator in validator registry.',
    }),
    validator_sync_committee_indices: z
      .array(Uint64Schema)
      .min(1)
      .openapi({ description: 'The indices of the validator in the sync committee.' }),
  })
  .openapi({ required: ['pubkey', 'validator_index', 'validator_sync_committee_indices'] })
  .openapi('AltairSyncDuty')

const BeaconCommitteeSelectionSchema = z
  .object({
    validator_index: Uint64Schema.openapi({ description: 'Index of the validator' }),
    slot: Uint64Schema.openapi({
      description: 'The slot at which a validator is assigned to attest',
    }),
    selection_proof: SignatureSchema.openapi({
      description:
        'The `slot_signature` calculated by the validator for the upcoming attestation slot',
    }),
  })
  .openapi({ required: ['validator_index', 'slot', 'selection_proof'] })
  .openapi('BeaconCommitteeSelection')

const SyncCommitteeSelectionSchema = z
  .object({
    validator_index: Uint64Schema.openapi({ description: 'Index of the validator' }),
    slot: Uint64Schema.openapi({
      description:
        'The slot at which validator is assigned to produce a sync committee contribution',
    }),
    subcommittee_index: Uint64Schema.openapi({
      description: 'SubcommitteeIndex to which the validator is assigned',
    }),
    selection_proof: SignatureSchema.openapi({
      description:
        'The `slot_signature` calculated by the validator for the upcoming sync committee slot',
    }),
  })
  .openapi({ required: ['validator_index', 'slot', 'subcommittee_index', 'selection_proof'] })
  .openapi('SyncCommitteeSelection')

const NetworkIdentitySchema: z.ZodType<NetworkIdentityType> = z
  .lazy(() =>
    z
      .object({
        peer_id: PeerIdSchema,
        enr: z
          .string()
          .openapi({
            description:
              'Ethereum node record. [Read more](https://eips.ethereum.org/EIPS/eip-778)',
            example:
              'enr:-IS4QHCYrYZbAKWCBRlAy5zzaDZXJBGkcnh4MHcBFZntXNFrdvJjX04jRzjzCBOonrkTfj499SZuOh8R33Ls8RRcy5wBgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQPKY0yuDUmstAHYpMa2_oxVtw0RW_QAdpzBQA8yWM0xOIN1ZHCCdl8',
          }),
        p2p_addresses: z.array(
          z
            .string()
            .openapi({
              description:
                "Node's addresses on which eth2 RPC requests are served. [Read more](https://docs.libp2p.io/reference/glossary/#multiaddr)",
              example: '/ip4/7.7.7.7/tcp/4242/p2p/QmYyQSo1c1Ym7orWxLYvCrM2EmxFTANf8wXmmE7DWjhx5N',
            }),
        ),
        discovery_addresses: z.array(z.lazy(() => NetworkIdentitySchema)),
        metadata: z
          .object({
            seq_number: Uint64Schema.openapi({
              description:
                "Uint64 starting at 0 used to version the node's metadata. If any other field in the local MetaData changes, the node MUST increment seq_number by 1.",
            }),
            attnets: z
              .lazy(() => GloasBeaconStateSchema)
              .openapi({
                description:
                  "Bitvector representing the node's persistent attestation subnet subscriptions.",
                example: '0x0000000000000000',
              }),
            syncnets: z
              .lazy(() => GloasBeaconStateSchema)
              .exactOptional()
              .openapi({
                description:
                  "Bitvector representing the node's sync committee subnet subscriptions. This metadata is not present in phase0, but will be present in Altair.",
                example: '0x0f',
              }),
            custody_group_count: Uint64Schema.exactOptional().openapi({
              description:
                "Uint64 representing the node's custody group count. The metadata is present from the Fulu fork.",
            }),
          })
          .openapi({
            description:
              'Based on eth2 [Metadata object](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/p2p-interface.md#metadata)',
            required: ['seq_number', 'attnets'],
          }),
      })
      .openapi({
        required: ['peer_id', 'enr', 'p2p_addresses', 'discovery_addresses', 'metadata'],
      }),
  )
  .openapi('NetworkIdentity')

const PeerConnectionStateSchema = z
  .enum(['disconnected', 'connecting', 'connected', 'disconnecting'])
  .openapi('PeerConnectionState')

const PeerConnectionDirectionSchema = z
  .enum(['inbound', 'outbound'])
  .openapi('PeerConnectionDirection')

const PeerSchema = z
  .object({
    peer_id: PeerIdSchema,
    enr: z.xor([z.null().nullable(), z.lazy(() => NetworkIdentitySchema)]),
    last_seen_p2p_address: z
      .lazy(() => NetworkIdentitySchema)
      .openapi({ description: 'Multiaddrs used in last peer connection.' }),
    state: PeerConnectionStateSchema,
    direction: PeerConnectionDirectionSchema,
  })
  .openapi({ required: ['peer_id', 'enr', 'last_seen_p2p_address', 'state', 'direction'] })
  .openapi('Peer')

const GenesisTimeSchema = z
  .string()
  .openapi({
    example: '1590832934',
    description:
      'The genesis_time configured for the beacon node, which is the unix time in seconds at which the Eth2.0 chain began.',
  })
  .openapi('GenesisTime')

const VersionSchema = z
  .string()
  .openapi({
    description:
      'A string which uniquely identifies the client implementation and its version; similar to [HTTP User-Agent](https://tools.ietf.org/html/rfc7231#section-5.5.3).',
    example: 'Lighthouse/v0.1.5 (Linux x86_64)',
  })
  .openapi('Version')

const ClientVersionV1Schema = z
  .object({
    code: z
      .enum(['BU', 'EJ', 'EG', 'GE', 'GR', 'LH', 'LS', 'NM', 'NB', 'TE', 'TK', 'PM', 'RH'])
      .openapi({
        description:
          'A two-character client code that uniquely maps to a client name as defined in the [Engine API](https://github.com/ethereum/execution-apis/blob/dc4dbca37ef8697d782f431af19120beaf5517f5/src/engine/identification.md#clientcode).',
        example: 'LS',
      }),
    name: z
      .string()
      .openapi({
        description: 'Human-readable name of the client, e.g. `Lighthouse` or `go-ethereum`.',
        example: 'Lodestar',
      }),
    version: z
      .string()
      .openapi({
        description:
          'The version string of the current implementation e.g. `v4.6.0` or `1.0.0-alpha.1` or `1.0.0+20130313144700`.',
        example: 'v1.23.4',
      }),
    commit: z
      .hex()
      .regex(/^0x[a-fA-F0-9]{8}$/)
      .openapi({
        description:
          '4 bytes - first four bytes of the latest commit hash of this build e.g. `0xfa4ff922`.',
        example: '0xfa4ff922',
      }),
  })
  .openapi({
    description:
      'A structure which uniquely identifies a client implementation and its version. Mirrors the client version specification in the [Engine API](https://github.com/ethereum/execution-apis/blob/dc4dbca37ef8697d782f431af19120beaf5517f5/src/engine/identification.md).',
    required: ['code', 'name', 'version', 'commit'],
  })
  .openapi('ClientVersionV1')

const DependentRootSchema = z
  .hex()
  .regex(/^0x[a-fA-F0-9]{64}$/)
  .openapi({
    description: 'The block root that this response is dependent on.',
    example: '0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2',
  })
  .openapi('DependentRoot')

const ExecutionOptimisticSchema = z
  .boolean()
  .openapi({
    example: false,
    description:
      'True if the response references an unverified execution payload. Optimistic information may be invalidated at a later time. If the field is not present, assume the False value.',
  })
  .openapi('ExecutionOptimistic')

const FinalizedSchema = z
  .boolean()
  .openapi({
    example: false,
    description:
      'True if the response references the finalized history of the chain, as determined by fork choice. If the field is not present, additional calls are necessary to compare the epoch of the requested information with the finalized checkpoint.',
  })
  .openapi('Finalized')

const ErrorMessageSchema = z
  .object({
    code: z
      .number()
      .openapi({
        description: 'Either specific error code in case of invalid request or http status code',
        example: 404,
      }),
    message: z.string().openapi({ description: 'Message describing error' }),
    stacktraces: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Optional stacktraces, sent when node is in debug mode' }),
  })
  .openapi({ required: ['code', 'message'] })
  .openapi('ErrorMessage')

const IndexedErrorMessageSchema = z
  .object({
    code: z
      .number()
      .openapi({
        description: 'Either specific error code in case of invalid request or http status code',
        example: 400,
      }),
    message: z
      .string()
      .openapi({ description: 'Message describing error', example: 'some failures' }),
    failures: z
      .array(
        z
          .object({
            index: z
              .number()
              .openapi({
                description: 'Index of item in the request list that caused the error',
                example: 3,
              }),
            message: z
              .string()
              .openapi({ description: 'Message describing error', example: 'invalid signature' }),
          })
          .openapi({ required: ['index', 'message'] }),
      )
      .openapi({ description: 'List of individual items that have failed' }),
  })
  .openapi({ required: ['code', 'message', 'failures'] })
  .openapi('IndexedErrorMessage')

const Phase0SignedBeaconBlockSchema: z.ZodType<Phase0SignedBeaconBlockType> = z
  .object({ message: Phase0BeaconBlockSchema, signature: SignatureSchema })
  .openapi({
    description:
      'The [`SignedBeaconBlock`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#signedbeaconblock) object envelope from the CL spec.',
    required: ['message', 'signature'],
  })
  .openapi('Phase0SignedBeaconBlock')

const Phase0SignedAggregateAndProofSchema = z
  .object({
    message: z
      .object({ aggregator_index: Uint64Schema, aggregate: Phase0AttestationSchema })
      .openapi({
        description:
          'The [`AggregateAndProof`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/validator.md#aggregateandproof) without selection_proof',
        required: ['aggregator_index', 'aggregate'],
      })
      .and(
        z.object({ selection_proof: SignatureSchema }).openapi({ required: ['selection_proof'] }),
      ),
    signature: SignatureSchema,
  })
  .openapi({
    description:
      'The [`SignedAggregateAndProof`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/validator.md#signedaggregateandproof) object',
    required: ['message', 'signature'],
  })
  .openapi('Phase0SignedAggregateAndProof')

const AltairSignedBeaconBlockSchema: z.ZodType<AltairSignedBeaconBlockType> = z
  .object({ message: AltairBeaconBlockSchema, signature: SignatureSchema })
  .openapi({
    description:
      'The [`SignedBeaconBlock`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#signedbeaconblock) object envelope from the CL Altair spec.',
    required: ['message', 'signature'],
  })
  .openapi('AltairSignedBeaconBlock')

const ElectraLightClientBootstrapSchema = z
  .object({
    header: z
      .object({
        beacon: z.lazy(() => GloasBeaconStateSchema),
        execution: z.lazy(() => FuluBeaconStateSchema),
        execution_branch: z.array(RootSchema).length(4),
      })
      .openapi({ required: ['beacon', 'execution', 'execution_branch'] }),
    current_sync_committee: z.lazy(() => GloasBeaconStateSchema),
    current_sync_committee_branch: z.array(RootSchema).length(6),
  })
  .openapi({ required: ['header', 'current_sync_committee', 'current_sync_committee_branch'] })
  .openapi('ElectraLightClientBootstrap')

const DenebLightClientBootstrapSchema = z
  .object({
    header: z.lazy(() => ElectraLightClientBootstrapSchema),
    current_sync_committee: z.lazy(() => GloasBeaconStateSchema),
    current_sync_committee_branch: z.array(RootSchema).length(5),
  })
  .openapi({ required: ['header', 'current_sync_committee', 'current_sync_committee_branch'] })
  .openapi('DenebLightClientBootstrap')

const AltairLightClientBootstrapSchema = z
  .object({
    header: z
      .object({ beacon: z.lazy(() => GloasBeaconStateSchema) })
      .openapi({ required: ['beacon'] }),
    current_sync_committee: z.lazy(() => GloasBeaconStateSchema),
    current_sync_committee_branch: z.lazy(() => DenebLightClientBootstrapSchema),
  })
  .openapi({ required: ['header', 'current_sync_committee', 'current_sync_committee_branch'] })
  .openapi('AltairLightClientBootstrap')

const DenebLightClientFinalityUpdateSchema = z
  .object({
    attested_header: z.lazy(() => ElectraLightClientBootstrapSchema),
    finalized_header: z.lazy(() => ElectraLightClientBootstrapSchema),
    finality_branch: z.array(RootSchema).length(6),
    sync_aggregate: z.lazy(() => GloasLightClientFinalityUpdateSchema),
    signature_slot: Uint64Schema,
  })
  .openapi({
    required: [
      'attested_header',
      'finalized_header',
      'finality_branch',
      'sync_aggregate',
      'signature_slot',
    ],
  })
  .openapi('DenebLightClientFinalityUpdate')

const DenebLightClientUpdateSchema = z
  .object({
    attested_header: z.lazy(() => ElectraLightClientBootstrapSchema),
    next_sync_committee: z.lazy(() => GloasBeaconStateSchema),
    next_sync_committee_branch: z.array(RootSchema).length(5),
    finalized_header: z.lazy(() => ElectraLightClientBootstrapSchema),
    finality_branch: z.lazy(() => DenebLightClientFinalityUpdateSchema),
    sync_aggregate: z.lazy(() => GloasLightClientFinalityUpdateSchema),
    signature_slot: Uint64Schema,
  })
  .openapi({
    required: [
      'attested_header',
      'next_sync_committee',
      'next_sync_committee_branch',
      'finalized_header',
      'finality_branch',
      'sync_aggregate',
      'signature_slot',
    ],
  })
  .openapi('DenebLightClientUpdate')

const AltairLightClientUpdateSchema = z
  .object({
    attested_header: z.lazy(() => AltairLightClientBootstrapSchema),
    next_sync_committee: z.lazy(() => GloasBeaconStateSchema),
    next_sync_committee_branch: z.lazy(() => DenebLightClientUpdateSchema),
    finalized_header: z.lazy(() => AltairLightClientBootstrapSchema),
    finality_branch: z.lazy(() => DenebLightClientFinalityUpdateSchema),
    sync_aggregate: z.lazy(() => GloasLightClientFinalityUpdateSchema),
    signature_slot: Uint64Schema,
  })
  .openapi({
    required: [
      'attested_header',
      'next_sync_committee',
      'next_sync_committee_branch',
      'finalized_header',
      'finality_branch',
      'sync_aggregate',
      'signature_slot',
    ],
  })
  .openapi('AltairLightClientUpdate')

const AltairLightClientFinalityUpdateSchema = z
  .object({
    attested_header: z.lazy(() => AltairLightClientBootstrapSchema),
    finalized_header: z.lazy(() => AltairLightClientBootstrapSchema),
    finality_branch: z.lazy(() => DenebLightClientFinalityUpdateSchema),
    sync_aggregate: z.lazy(() => GloasLightClientFinalityUpdateSchema),
    signature_slot: Uint64Schema,
  })
  .openapi({
    required: [
      'attested_header',
      'finalized_header',
      'finality_branch',
      'sync_aggregate',
      'signature_slot',
    ],
  })
  .openapi('AltairLightClientFinalityUpdate')

const AltairLightClientOptimisticUpdateSchema = z
  .object({
    attested_header: z.lazy(() => AltairLightClientBootstrapSchema),
    sync_aggregate: z.lazy(() => GloasLightClientFinalityUpdateSchema),
    signature_slot: Uint64Schema,
  })
  .openapi({ required: ['attested_header', 'sync_aggregate', 'signature_slot'] })
  .openapi('AltairLightClientOptimisticUpdate')

const AltairBeaconStateSchema = z
  .object({
    genesis_time: Uint64Schema,
    genesis_validators_root: RootSchema,
    slot: Uint64Schema,
    fork: ForkSchema,
    latest_block_header: z.lazy(() => GloasBeaconStateSchema),
    block_roots: z.array(RootSchema).openapi({ description: 'Fixed length of 8192 items' }),
    state_roots: z.array(RootSchema).openapi({ description: 'Fixed length of 8192 items' }),
    historical_roots: z
      .array(RootSchema)
      .openapi({ description: 'Variable length list, maximum 16777216 items' }),
    eth1_data: z.lazy(() => GloasBeaconStateSchema),
    eth1_data_votes: z
      .array(z.lazy(() => GloasBeaconStateSchema))
      .max(2048)
      .openapi({ description: 'Variable length list, maximum 2048 items.' }),
    eth1_deposit_index: Uint64Schema,
    validators: z
      .array(z.lazy(() => ValidatorResponseSchema))
      .openapi({ description: 'Variable length list, maximum 1099511627776 items' }),
    balances: z
      .array(Uint64Schema)
      .openapi({
        description:
          'Validator balances in gwei. Variable length list, maximum 1099511627776 items',
      }),
    randao_mixes: z
      .array(z.lazy(() => GloasBeaconStateSchema))
      .openapi({ description: 'Fixed length of 65536 items' }),
    slashings: z
      .array(Uint64Schema)
      .openapi({
        description: 'Per-epoch sums of slashed effective balances. Fixed length of 8192 items',
      }),
    previous_epoch_participation: z.lazy(() => FuluBeaconStateSchema),
    current_epoch_participation: z.lazy(() => FuluBeaconStateSchema),
    justification_bits: z
      .lazy(() => GloasBeaconStateSchema)
      .openapi({ description: 'Bit set for every recent justified epoch' }),
    previous_justified_checkpoint: CheckpointSchema,
    current_justified_checkpoint: CheckpointSchema,
    finalized_checkpoint: CheckpointSchema,
    inactivity_scores: z
      .array(Uint64Schema)
      .openapi({
        description:
          'Per-validator inactivity scores. New in Altair. Variable length list, maximum 1099511627776 items',
      }),
    current_sync_committee: z.lazy(() => GloasBeaconStateSchema),
    next_sync_committee: z.lazy(() => GloasBeaconStateSchema),
  })
  .openapi({
    description:
      'The [`BeaconState`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/altair/beacon-chain.md#beaconstate) object from the CL Altair spec.',
    required: [
      'genesis_time',
      'genesis_validators_root',
      'slot',
      'fork',
      'latest_block_header',
      'block_roots',
      'state_roots',
      'historical_roots',
      'eth1_data',
      'eth1_data_votes',
      'eth1_deposit_index',
      'validators',
      'balances',
      'randao_mixes',
      'slashings',
      'previous_epoch_participation',
      'current_epoch_participation',
      'justification_bits',
      'previous_justified_checkpoint',
      'current_justified_checkpoint',
      'finalized_checkpoint',
      'inactivity_scores',
      'current_sync_committee',
      'next_sync_committee',
    ],
  })
  .openapi('AltairBeaconState')

const AltairSyncCommitteeSignatureSchema = z
  .object({
    slot: Uint64Schema,
    beacon_block_root: RootSchema,
    validator_index: Uint64Schema,
    signature: SignatureSchema,
  })
  .openapi({ required: ['slot', 'beacon_block_root', 'validator_index', 'signature'] })
  .openapi('AltairSyncCommitteeSignature')

const AltairSyncCommitteeSubscriptionSchema = z
  .object({
    validator_index: Uint64Schema,
    sync_committee_indices: z.array(Uint64Schema),
    until_epoch: Uint64Schema.openapi({
      description:
        'The final epoch (exclusive value) that the specified validator requires the subscription for.',
    }),
  })
  .openapi({ required: ['validator_index', 'sync_committee_indices', 'until_epoch'] })
  .openapi('AltairSyncCommitteeSubscription')

const AltairSyncCommitteeContributionSchema = z
  .object({
    slot: Uint64Schema.openapi({
      description: 'The slot at which the validator is providing a sync committee contribution.',
    }),
    beacon_block_root: RootSchema.openapi({ description: 'Block root for this contribution.' }),
    subcommittee_index: Uint64Schema.openapi({
      description: 'The index of the subcommittee that the contribution pertains to.',
    }),
    aggregation_bits: z
      .lazy(() => GloasBeaconStateSchema)
      .openapi({
        description:
          'A bit is set if a signature from the validator at the corresponding index in the subcommittee is present in the aggregate `signature`.',
        example: '0xffffffffffffffffffffffffffffffff',
      }),
    signature: SignatureSchema.openapi({
      description: 'Signature by the validator(s) over the block root of `slot`',
    }),
  })
  .openapi({
    required: ['slot', 'beacon_block_root', 'subcommittee_index', 'aggregation_bits', 'signature'],
  })
  .openapi('AltairSyncCommitteeContribution')

const AltairContributionAndProofSchema = z
  .object({
    aggregator_index: Uint64Schema.openapi({
      description: 'Index of validator in validator registry.',
    }),
    selection_proof: SignatureSchema,
    contribution: AltairSyncCommitteeContributionSchema,
  })
  .openapi({ required: ['aggregator_index', 'selection_proof', 'contribution'] })
  .openapi('AltairContributionAndProof')

const AltairSignedContributionAndProofSchema = z
  .object({ message: AltairContributionAndProofSchema, signature: SignatureSchema })
  .openapi({ required: ['message', 'signature'] })
  .openapi('AltairSignedContributionAndProof')

const AltairSyncCommitteeSchema: z.ZodType<AltairSyncCommitteeType> = z
  .lazy(() =>
    z
      .object({
        validators: z
          .array(Uint64Schema)
          .openapi({ description: 'all of the validator indices in the current sync committee' }),
        validator_aggregates: z.array(z.lazy(() => AltairSyncCommitteeSchema)),
      })
      .openapi({ required: ['validators', 'validator_aggregates'] }),
  )
  .openapi('AltairSyncCommittee')

const BellatrixSignedBeaconBlockSchema: z.ZodType<BellatrixSignedBeaconBlockType> = z
  .object({ message: BellatrixBeaconBlockSchema, signature: SignatureSchema })
  .openapi({
    description:
      'The [`SignedBeaconBlock`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#signedbeaconblock) object envelope from the CL Bellatrix spec.',
    required: ['message', 'signature'],
  })
  .openapi('BellatrixSignedBeaconBlock')

const BellatrixSignedBlindedBeaconBlockSchema: z.ZodType<BellatrixSignedBlindedBeaconBlockType> = z
  .object({ message: BellatrixBlindedBeaconBlockSchema, signature: SignatureSchema })
  .openapi({
    description:
      'A variant of the [`SignedBeaconBlock`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#signedbeaconblock) object envelope from the CL Bellatrix spec, which contains a `BlindedBeaconBlock` rather than a `BeaconBlock`.',
    required: ['message', 'signature'],
  })
  .openapi('BellatrixSignedBlindedBeaconBlock')

const ConsensusVersionSchema = z
  .enum(['phase0', 'altair', 'bellatrix', 'capella', 'deneb', 'electra', 'fulu', 'gloas'])
  .openapi({ example: 'gloas' })
  .openapi('ConsensusVersion')

const SignedValidatorRegistrationSchema = z
  .object({
    message: z
      .object({
        fee_recipient: ExecutionAddressSchema.openapi({
          description: 'Address to receive fees from the block.',
        }),
        gas_limit: Uint64Schema.openapi({ description: 'Preferred gas limit of validator.' }),
        timestamp: Uint64Schema.openapi({ description: 'Unix timestamp of registration.' }),
        pubkey: z
          .lazy(() => GloasBuilderPreferencesEntrySchema)
          .openapi({ description: 'BLS public key of validator.' }),
      })
      .openapi({
        description: 'The `ValidatorRegistration` object from the Builder API specification.',
        required: ['fee_recipient', 'gas_limit', 'timestamp', 'pubkey'],
      }),
    signature: SignatureSchema,
  })
  .openapi({
    description: 'The `SignedValidatorRegistration` object from the Builder API specification.',
    required: ['message', 'signature'],
  })
  .openapi('SignedValidatorRegistration')

const CapellaSignedBeaconBlockSchema: z.ZodType<CapellaSignedBeaconBlockType> = z
  .object({ message: CapellaBeaconBlockSchema, signature: SignatureSchema })
  .openapi({
    description:
      'The [`SignedBeaconBlock`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#signedbeaconblock) object envelope from the CL Capella spec.',
    required: ['message', 'signature'],
  })
  .openapi('CapellaSignedBeaconBlock')

const CapellaSignedBlindedBeaconBlockSchema: z.ZodType<CapellaSignedBlindedBeaconBlockType> = z
  .object({ message: CapellaBlindedBeaconBlockSchema, signature: SignatureSchema })
  .openapi({
    description:
      'A variant of the [`SignedBeaconBlock`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#signedbeaconblock) object envelope from the CL Capella spec, which contains a `BlindedBeaconBlock` rather than a `BeaconBlock`.',
    required: ['message', 'signature'],
  })
  .openapi('CapellaSignedBlindedBeaconBlock')

const CapellaLightClientBootstrapSchema = z
  .object({
    header: z
      .object({
        beacon: z.lazy(() => GloasBeaconStateSchema),
        execution: z.lazy(() => CapellaBeaconStateSchema),
        execution_branch: ExecutionBranchSchema,
      })
      .openapi({ required: ['beacon', 'execution', 'execution_branch'] }),
    current_sync_committee: z.lazy(() => GloasBeaconStateSchema),
    current_sync_committee_branch: z.lazy(() => DenebLightClientBootstrapSchema),
  })
  .openapi({ required: ['header', 'current_sync_committee', 'current_sync_committee_branch'] })
  .openapi('CapellaLightClientBootstrap')

const CapellaLightClientUpdateSchema = z
  .object({
    attested_header: z.lazy(() => CapellaLightClientBootstrapSchema),
    next_sync_committee: z.lazy(() => GloasBeaconStateSchema),
    next_sync_committee_branch: z.lazy(() => DenebLightClientUpdateSchema),
    finalized_header: z.lazy(() => CapellaLightClientBootstrapSchema),
    finality_branch: z.lazy(() => DenebLightClientFinalityUpdateSchema),
    sync_aggregate: z.lazy(() => GloasLightClientFinalityUpdateSchema),
    signature_slot: Uint64Schema,
  })
  .openapi({
    required: [
      'attested_header',
      'next_sync_committee',
      'next_sync_committee_branch',
      'finalized_header',
      'finality_branch',
      'sync_aggregate',
      'signature_slot',
    ],
  })
  .openapi('CapellaLightClientUpdate')

const CapellaLightClientFinalityUpdateSchema = z
  .object({
    attested_header: z.lazy(() => CapellaLightClientBootstrapSchema),
    finalized_header: z.lazy(() => CapellaLightClientBootstrapSchema),
    finality_branch: z.lazy(() => DenebLightClientFinalityUpdateSchema),
    sync_aggregate: z.lazy(() => GloasLightClientFinalityUpdateSchema),
    signature_slot: Uint64Schema,
  })
  .openapi({
    required: [
      'attested_header',
      'finalized_header',
      'finality_branch',
      'sync_aggregate',
      'signature_slot',
    ],
  })
  .openapi('CapellaLightClientFinalityUpdate')

const CapellaLightClientOptimisticUpdateSchema = z
  .object({
    attested_header: z.lazy(() => CapellaLightClientBootstrapSchema),
    sync_aggregate: z.lazy(() => GloasLightClientFinalityUpdateSchema),
    signature_slot: Uint64Schema,
  })
  .openapi({ required: ['attested_header', 'sync_aggregate', 'signature_slot'] })
  .openapi('CapellaLightClientOptimisticUpdate')

const DenebBeaconStateSchema = z
  .object({
    genesis_time: Uint64Schema,
    genesis_validators_root: RootSchema,
    slot: Uint64Schema,
    fork: ForkSchema,
    latest_block_header: z.lazy(() => GloasBeaconStateSchema),
    block_roots: z.array(RootSchema).openapi({ description: 'Fixed length of 8192 items' }),
    state_roots: z.array(RootSchema).openapi({ description: 'Fixed length of 8192 items' }),
    historical_roots: z
      .array(RootSchema)
      .openapi({
        description:
          'Variable length list, maximum 16777216 items. Frozen in Capella, replaced by historical_summaries.',
      }),
    eth1_data: z.lazy(() => GloasBeaconStateSchema),
    eth1_data_votes: z
      .array(z.lazy(() => GloasBeaconStateSchema))
      .max(2048)
      .openapi({ description: 'Variable length list, maximum 2048 items.' }),
    eth1_deposit_index: Uint64Schema,
    validators: z
      .array(z.lazy(() => ValidatorResponseSchema))
      .openapi({ description: 'Variable length list, maximum 1099511627776 items' }),
    balances: z
      .array(Uint64Schema)
      .openapi({
        description:
          'Validator balances in gwei. Variable length list, maximum 1099511627776 items',
      }),
    randao_mixes: z
      .array(z.lazy(() => GloasBeaconStateSchema))
      .openapi({ description: 'Fixed length of 65536 items' }),
    slashings: z
      .array(Uint64Schema)
      .openapi({
        description: 'Per-epoch sums of slashed effective balances. Fixed length of 8192 items',
      }),
    previous_epoch_participation: z.lazy(() => FuluBeaconStateSchema),
    current_epoch_participation: z.lazy(() => FuluBeaconStateSchema),
    justification_bits: z
      .lazy(() => GloasBeaconStateSchema)
      .openapi({ description: 'Bit set for every recent justified epoch' }),
    previous_justified_checkpoint: CheckpointSchema,
    current_justified_checkpoint: CheckpointSchema,
    finalized_checkpoint: CheckpointSchema,
    inactivity_scores: z
      .array(Uint64Schema)
      .openapi({
        description:
          'Per-validator inactivity scores. Introduced in Altair. Variable length list, maximum 1099511627776 items',
      }),
    current_sync_committee: z.lazy(() => GloasBeaconStateSchema),
    next_sync_committee: z.lazy(() => GloasBeaconStateSchema),
    latest_execution_payload_header: z.lazy(() => FuluBeaconStateSchema),
    next_withdrawal_index: Uint64Schema,
    next_withdrawal_validator_index: Uint64Schema,
    historical_summaries: z
      .array(z.lazy(() => GloasBeaconStateSchema))
      .openapi({ description: 'Variable length list, maximum 16777216 items' }),
  })
  .openapi({
    description:
      'The [`BeaconState`](https://github.com/ethereum/consensus-specs/blob/v1.5.0/specs/deneb/beacon-chain.md#beaconstate) object from the Eth2.0 Deneb spec.',
    required: [
      'genesis_time',
      'genesis_validators_root',
      'slot',
      'fork',
      'latest_block_header',
      'block_roots',
      'state_roots',
      'historical_roots',
      'eth1_data',
      'eth1_data_votes',
      'eth1_deposit_index',
      'validators',
      'balances',
      'randao_mixes',
      'slashings',
      'previous_epoch_participation',
      'current_epoch_participation',
      'justification_bits',
      'previous_justified_checkpoint',
      'current_justified_checkpoint',
      'finalized_checkpoint',
      'inactivity_scores',
      'current_sync_committee',
      'next_sync_committee',
      'latest_execution_payload_header',
      'next_withdrawal_index',
      'next_withdrawal_validator_index',
      'historical_summaries',
    ],
  })
  .openapi('DenebBeaconState')

const DenebBlockContentsSchema: z.ZodType<DenebBlockContentsType> = z
  .object({
    block: DenebBeaconBlockSchema,
    kzg_proofs: z.lazy(() => ElectraSignedBlockContentsSchema),
    blobs: BlobsSchema,
  })
  .openapi({
    description: 'The required object for block production according to the Deneb CL spec.',
    required: ['block', 'kzg_proofs', 'blobs'],
  })
  .openapi('DenebBlockContents')

const DenebSignedBlockContentsSchema: z.ZodType<DenebSignedBlockContentsType> = z
  .object({
    signed_block: DenebSignedBeaconBlockSchema,
    kzg_proofs: z.lazy(() => ElectraSignedBlockContentsSchema),
    blobs: BlobsSchema,
  })
  .openapi({
    description:
      'The required signed components of block production according to the Deneb CL spec.',
    required: ['signed_block', 'kzg_proofs', 'blobs'],
  })
  .openapi('DenebSignedBlockContents')

const DenebSignedBlindedBeaconBlockSchema: z.ZodType<DenebSignedBlindedBeaconBlockType> = z
  .object({ message: DenebBlindedBeaconBlockSchema, signature: SignatureSchema })
  .openapi({
    description:
      'A variant of the [`SignedBeaconBlock`](https://github.com/ethereum/consensus-specs/blob/v1.4.0/specs/phase0/beacon-chain.md#signedbeaconblock) object envelope from the CL Deneb spec, which contains a `BlindedBeaconBlock` rather than a `BeaconBlock`.',
    required: ['message', 'signature'],
  })
  .openapi('DenebSignedBlindedBeaconBlock')

const DenebLightClientOptimisticUpdateSchema = z
  .object({
    attested_header: z.lazy(() => ElectraLightClientBootstrapSchema),
    sync_aggregate: z.lazy(() => GloasLightClientFinalityUpdateSchema),
    signature_slot: Uint64Schema,
  })
  .openapi({ required: ['attested_header', 'sync_aggregate', 'signature_slot'] })
  .openapi('DenebLightClientOptimisticUpdate')

const VersionedHashSchema = z
  .hex()
  .regex(/^0x[a-fA-F0-9]{64}$/)
  .openapi({
    description: 'A versioned hash used to identify a Blob.',
    example: '0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2',
  })
  .openapi('VersionedHash')

const ElectraBeaconStateSchema = z
  .object({
    genesis_time: Uint64Schema,
    genesis_validators_root: RootSchema,
    slot: Uint64Schema,
    fork: ForkSchema,
    latest_block_header: z.lazy(() => GloasBeaconStateSchema),
    block_roots: z.array(RootSchema).openapi({ description: 'Fixed length of 8192 items' }),
    state_roots: z.array(RootSchema).openapi({ description: 'Fixed length of 8192 items' }),
    historical_roots: z
      .array(RootSchema)
      .openapi({
        description:
          'Variable length list, maximum 16777216 items. Frozen in Capella, replaced by historical_summaries.',
      }),
    eth1_data: z.lazy(() => GloasBeaconStateSchema),
    eth1_data_votes: z
      .array(z.lazy(() => GloasBeaconStateSchema))
      .max(2048)
      .openapi({ description: 'Variable length list, maximum 2048 items.' }),
    eth1_deposit_index: Uint64Schema,
    validators: z
      .array(z.lazy(() => ValidatorResponseSchema))
      .openapi({ description: 'Variable length list, maximum 1099511627776 items' }),
    balances: z
      .array(Uint64Schema)
      .openapi({
        description:
          'Validator balances in gwei. Variable length list, maximum 1099511627776 items',
      }),
    randao_mixes: z
      .array(z.lazy(() => GloasBeaconStateSchema))
      .openapi({ description: 'Fixed length of 65536 items' }),
    slashings: z
      .array(Uint64Schema)
      .openapi({
        description: 'Per-epoch sums of slashed effective balances. Fixed length of 8192 items',
      }),
    previous_epoch_participation: z.lazy(() => FuluBeaconStateSchema),
    current_epoch_participation: z.lazy(() => FuluBeaconStateSchema),
    justification_bits: z
      .lazy(() => GloasBeaconStateSchema)
      .openapi({ description: 'Bit set for every recent justified epoch' }),
    previous_justified_checkpoint: CheckpointSchema,
    current_justified_checkpoint: CheckpointSchema,
    finalized_checkpoint: CheckpointSchema,
    inactivity_scores: z
      .array(Uint64Schema)
      .openapi({
        description:
          'Per-validator inactivity scores. Introduced in Altair. Variable length list, maximum 1099511627776 items',
      }),
    current_sync_committee: z.lazy(() => GloasBeaconStateSchema),
    next_sync_committee: z.lazy(() => GloasBeaconStateSchema),
    latest_execution_payload_header: z.lazy(() => FuluBeaconStateSchema),
    next_withdrawal_index: Uint64Schema,
    next_withdrawal_validator_index: Uint64Schema,
    historical_summaries: z
      .array(z.lazy(() => GloasBeaconStateSchema))
      .openapi({ description: 'Variable length list, maximum 16777216 items' }),
    deposit_requests_start_index: Uint64Schema,
    deposit_balance_to_consume: Uint64Schema,
    exit_balance_to_consume: Uint64Schema,
    earliest_exit_epoch: Uint64Schema,
    consolidation_balance_to_consume: Uint64Schema,
    earliest_consolidation_epoch: Uint64Schema,
    pending_deposits: ElectraPendingDepositsSchema,
    pending_partial_withdrawals: ElectraPendingPartialWithdrawalsSchema,
    pending_consolidations: ElectraPendingConsolidationsSchema,
  })
  .openapi({
    description:
      'The [`BeaconState`](https://github.com/ethereum/consensus-specs/blob/v1.5.0/specs/electra/beacon-chain.md#beaconstate) object from the CL Electra spec.',
    required: [
      'genesis_time',
      'genesis_validators_root',
      'slot',
      'fork',
      'latest_block_header',
      'block_roots',
      'state_roots',
      'historical_roots',
      'eth1_data',
      'eth1_data_votes',
      'eth1_deposit_index',
      'validators',
      'balances',
      'randao_mixes',
      'slashings',
      'previous_epoch_participation',
      'current_epoch_participation',
      'justification_bits',
      'previous_justified_checkpoint',
      'current_justified_checkpoint',
      'finalized_checkpoint',
      'inactivity_scores',
      'current_sync_committee',
      'next_sync_committee',
      'latest_execution_payload_header',
      'next_withdrawal_index',
      'next_withdrawal_validator_index',
      'historical_summaries',
      'deposit_requests_start_index',
      'deposit_balance_to_consume',
      'exit_balance_to_consume',
      'earliest_exit_epoch',
      'consolidation_balance_to_consume',
      'earliest_consolidation_epoch',
      'pending_deposits',
      'pending_partial_withdrawals',
      'pending_consolidations',
    ],
  })
  .openapi('ElectraBeaconState')

const ElectraBlockContentsSchema = z
  .object({
    block: z.lazy(() => FuluBlockContentsSchema),
    kzg_proofs: z.lazy(() => ElectraSignedBlockContentsSchema),
    blobs: BlobsSchema,
  })
  .openapi({
    description: 'The required object for block production according to the Electra CL spec.',
    required: ['block', 'kzg_proofs', 'blobs'],
  })
  .openapi('ElectraBlockContents')

const ElectraSignedBlindedBeaconBlockSchema: z.ZodType<ElectraSignedBlindedBeaconBlockType> = z
  .object({ message: ElectraBlindedBeaconBlockSchema, signature: SignatureSchema })
  .openapi({
    description:
      'A variant of the [`SignedBeaconBlock`](https://github.com/ethereum/consensus-specs/blob/v1.5.0/specs/phase0/beacon-chain.md#signedbeaconblock) object envelope from the CL Electra spec, which contains a `BlindedBeaconBlock` rather than a `BeaconBlock`.',
    required: ['message', 'signature'],
  })
  .openapi('ElectraSignedBlindedBeaconBlock')

const ElectraSingleAttestationSchema = z
  .object({
    committee_index: Uint64Schema.openapi({ description: 'The attestations committee index.' }),
    attester_index: Uint64Schema.openapi({
      description: 'The validator index that signed this attestation.',
    }),
    data: Phase0AttestationDataSchema,
    signature: SignatureSchema.openapi({ description: 'BLS aggregate signature.' }),
  })
  .openapi({
    description:
      'The [`SingleAttestation`](https://github.com/ethereum/consensus-specs/blob/v1.5.0/specs/electra/beacon-chain.md#singleattestation) object from the CL spec.',
    required: ['committee_index', 'attester_index', 'data', 'signature'],
  })
  .openapi('ElectraSingleAttestation')

const ElectraSignedAggregateAndProofSchema = z
  .object({
    message: z
      .object({ aggregator_index: Uint64Schema, aggregate: ElectraAttestationSchema })
      .openapi({
        description:
          'The [`AggregateAndProof`](https://github.com/ethereum/consensus-specs/blob/v1.5.0/specs/electra/validator.md#aggregateandproof) without selection_proof',
        required: ['aggregator_index', 'aggregate'],
      })
      .and(
        z.object({ selection_proof: SignatureSchema }).openapi({ required: ['selection_proof'] }),
      ),
    signature: SignatureSchema,
  })
  .openapi({
    description:
      'The [`SignedAggregateAndProof`](https://github.com/ethereum/consensus-specs/blob/v1.5.0/specs/electra/validator.md#signedaggregateandproof) object',
    required: ['message', 'signature'],
  })
  .openapi('ElectraSignedAggregateAndProof')

const ElectraLightClientFinalityUpdateSchema = z
  .object({
    attested_header: z.lazy(() => ElectraLightClientBootstrapSchema),
    finalized_header: z.lazy(() => ElectraLightClientBootstrapSchema),
    finality_branch: z.array(RootSchema).length(7),
    sync_aggregate: z.lazy(() => GloasLightClientFinalityUpdateSchema),
    signature_slot: Uint64Schema,
  })
  .openapi({
    required: [
      'attested_header',
      'finalized_header',
      'finality_branch',
      'sync_aggregate',
      'signature_slot',
    ],
  })
  .openapi('ElectraLightClientFinalityUpdate')

const ElectraLightClientUpdateSchema = z
  .object({
    attested_header: z.lazy(() => ElectraLightClientBootstrapSchema),
    next_sync_committee: z.lazy(() => GloasBeaconStateSchema),
    next_sync_committee_branch: z.array(RootSchema).length(6),
    finalized_header: z.lazy(() => ElectraLightClientBootstrapSchema),
    finality_branch: z.lazy(() => ElectraLightClientFinalityUpdateSchema),
    sync_aggregate: z.lazy(() => GloasLightClientFinalityUpdateSchema),
    signature_slot: Uint64Schema,
  })
  .openapi({
    required: [
      'attested_header',
      'next_sync_committee',
      'next_sync_committee_branch',
      'finalized_header',
      'finality_branch',
      'sync_aggregate',
      'signature_slot',
    ],
  })
  .openapi('ElectraLightClientUpdate')

const ElectraLightClientOptimisticUpdateSchema = z
  .object({
    attested_header: z.lazy(() => ElectraLightClientBootstrapSchema),
    sync_aggregate: z.lazy(() => GloasLightClientFinalityUpdateSchema),
    signature_slot: Uint64Schema,
  })
  .openapi({ required: ['attested_header', 'sync_aggregate', 'signature_slot'] })
  .openapi('ElectraLightClientOptimisticUpdate')

const GloasLightClientUpdateSchema = z
  .object({
    attested_header: z.lazy(() => GloasLightClientBootstrapSchema),
    next_sync_committee: z.lazy(() => GloasBeaconStateSchema),
    next_sync_committee_branch: z
      .array(RootSchema)
      .length(11)
      .openapi({
        description:
          'Merkle proof consisting of [`floorlog2(NEXT_SYNC_COMMITTEE_GINDEX_GLOAS)`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/light-client/sync-protocol.md#new-constants) roots',
      }),
    finalized_header: z.lazy(() => GloasLightClientBootstrapSchema),
    finality_branch: z.lazy(() => GloasLightClientFinalityUpdateSchema),
    sync_aggregate: z.lazy(() => GloasLightClientFinalityUpdateSchema),
    signature_slot: Uint64Schema,
  })
  .openapi({
    required: [
      'attested_header',
      'next_sync_committee',
      'next_sync_committee_branch',
      'finalized_header',
      'finality_branch',
      'sync_aggregate',
      'signature_slot',
    ],
  })
  .openapi('GloasLightClientUpdate')

const GloasLightClientOptimisticUpdateSchema = z
  .object({
    attested_header: z.lazy(() => GloasLightClientBootstrapSchema),
    sync_aggregate: z.lazy(() => GloasLightClientFinalityUpdateSchema),
    signature_slot: Uint64Schema,
  })
  .openapi({ required: ['attested_header', 'sync_aggregate', 'signature_slot'] })
  .openapi('GloasLightClientOptimisticUpdate')

const GloasSignedBeaconBlockSchema: z.ZodType<GloasSignedBeaconBlockType> = z
  .object({ message: GloasBeaconBlockSchema, signature: SignatureSchema })
  .openapi({
    description:
      'The [`SignedBeaconBlock`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/phase0/beacon-chain.md#signedbeaconblock) object envelope from the CL Gloas spec.',
    required: ['message', 'signature'],
  })
  .openapi('GloasSignedBeaconBlock')

const GloasBlockContentsSchema: z.ZodType<GloasBlockContentsType> = z
  .object({
    block: GloasBeaconBlockSchema,
    execution_payload_envelope: GloasExecutionPayloadEnvelopeSchema,
    kzg_proofs: z.lazy(() => GloasSignedExecutionPayloadEnvelopeContentsSchema),
    blobs: BlobsSchema,
  })
  .openapi({
    description:
      'Block contents for self-building, including the execution payload envelope\nand blobs. This enables stateless failover to another beacon node for publishing,\nas all required data is returned in a single response.\n',
    required: ['block', 'execution_payload_envelope', 'kzg_proofs', 'blobs'],
  })
  .openapi('GloasBlockContents')

const GloasPayloadAttestationMessageSchema = z
  .object({
    validator_index: Uint64Schema.openapi({
      description: 'Index of the validator submitting the payload attestation',
    }),
    data: GloasPayloadAttestationDataSchema,
    signature: SignatureSchema.openapi({
      description: 'BLS signature of the payload attestation data',
    }),
  })
  .openapi({
    description:
      'The [`PayloadAttestationMessage`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/beacon-chain.md#payloadattestationmessage) object from the CL Gloas spec.',
    required: ['validator_index', 'data', 'signature'],
  })
  .openapi('GloasPayloadAttestationMessage')

const GloasSignedAggregateAndProofSchema = z
  .object({
    message: z
      .object({ aggregator_index: Uint64Schema, aggregate: GloasAttestationSchema })
      .openapi({
        description:
          'The [`AggregateAndProof`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/electra/validator.md#aggregateandproof) without selection_proof',
        required: ['aggregator_index', 'aggregate'],
      })
      .and(
        z.object({ selection_proof: SignatureSchema }).openapi({ required: ['selection_proof'] }),
      ),
    signature: SignatureSchema,
  })
  .openapi({
    description:
      'The [`SignedAggregateAndProof`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/electra/validator.md#signedaggregateandproof) object',
    required: ['message', 'signature'],
  })
  .openapi('GloasSignedAggregateAndProof')

const GloasProposerPreferencesSchema = z
  .object({
    dependent_root: RootSchema.openapi({
      description:
        "Shuffling dependent root for the epoch of `proposal_slot`, based on the validator's head.",
    }),
    proposal_slot: Uint64Schema.openapi({
      description: 'Slot for which the validator is the proposer.',
    }),
    validator_index: Uint64Schema.openapi({ description: 'Index of the proposing validator.' }),
    fee_recipient: ExecutionAddressSchema.openapi({
      description: 'Address to receive the builder payment.',
    }),
    target_gas_limit: Uint64Schema.openapi({
      description: 'Preferred gas limit for the execution payload.',
    }),
  })
  .openapi({
    description:
      'The [`ProposerPreferences`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/p2p-interface.md#new-proposerpreferences) object from the CL Gloas spec.',
    required: [
      'dependent_root',
      'proposal_slot',
      'validator_index',
      'fee_recipient',
      'target_gas_limit',
    ],
  })
  .openapi('GloasProposerPreferences')

const GloasSignedProposerPreferencesSchema = z
  .object({ message: GloasProposerPreferencesSchema, signature: SignatureSchema })
  .openapi({
    description:
      'The [`SignedProposerPreferences`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/p2p-interface.md#new-signedproposerpreferences) object from the CL Gloas spec.',
    required: ['message', 'signature'],
  })
  .openapi('GloasSignedProposerPreferences')

const FuluSignedBlockContentsSchema = z
  .object({
    signed_block: ElectraSignedBeaconBlockSchema,
    kzg_proofs: z
      .lazy(() => GloasSignedExecutionPayloadEnvelopeContentsSchema)
      .openapi({ description: 'Cell proofs of the blobs as defined in EIP-7594' }),
    blobs: BlobsSchema,
  })
  .openapi({
    description:
      'The required signed components of block production according to the Fulu CL spec.',
    required: ['signed_block', 'kzg_proofs', 'blobs'],
  })
  .openapi('FuluSignedBlockContents')

const FuluDataColumnSidecarsSchema = z
  .array(
    z
      .object({
        index: Uint64Schema,
        column: z
          .array(
            z
              .hex()
              .regex(/^0x[a-fA-F0-9]{4096}$/)
              .openapi({
                description:
                  'A data column is `FIELD_ELEMENTS_PER_CELL * size_of(BLSFieldElement) = 64 * 32 = 2048` bytes (`DATA`) representing a Cell as defined in Fulu',
              }),
          )
          .min(0)
          .max(4096),
        kzg_commitments: z
          .array(
            z
              .hex()
              .regex(/^0x[a-fA-F0-9]{96}$/)
              .openapi({
                description:
                  'A G1 curve point. Same as BLS standard "is valid pubkey" check but also allows `0x00..00` for point-at-infinity',
                example:
                  '0x93247f2209abcacf57b75a51dafae777f9dd38bc7053d1af526f220a7489a6d3a2753e5f3e8b1cfe39b56f43611df74a',
              }),
          )
          .min(0)
          .max(4096),
        kzg_proofs: z.array(ItemsSchema).min(0).max(4096),
        signed_block_header: Phase0SignedBeaconBlockHeaderSchema,
        kzg_commitments_inclusion_proof: z.array(z.lazy(() => GloasBeaconStateSchema)).length(4),
      })
      .openapi({
        description:
          'A [`DataColumnSidecar`](https://github.com/ethereum/consensus-specs/blob/v1.6.0/specs/fulu/das-core.md#datacolumnsidecar) as defined in the Fulu consensus spec.',
        required: [
          'index',
          'column',
          'kzg_commitments',
          'kzg_proofs',
          'signed_block_header',
          'kzg_commitments_inclusion_proof',
        ],
      }),
  )
  .min(0)
  .max(128)
  .openapi('FuluDataColumnSidecars')

const GloasDataColumnSidecarsSchema = z
  .array(
    z
      .object({
        index: Uint64Schema,
        column: z
          .array(
            z
              .hex()
              .regex(/^0x[a-fA-F0-9]{4096}$/)
              .openapi({
                description:
                  'A data column is `FIELD_ELEMENTS_PER_CELL * size_of(BLSFieldElement) = 64 * 32 = 2048` bytes (`DATA`) representing a Cell as defined in Fulu',
              }),
          )
          .max(4096)
          .openapi({ description: 'Progressive list of cells.' }),
        kzg_proofs: z
          .array(ItemsSchema)
          .max(4096)
          .openapi({ description: 'Progressive list of KZG proofs.' }),
        slot: Uint64Schema,
        beacon_block_root: RootSchema,
      })
      .openapi({
        description:
          'The [`DataColumnSidecar`](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/p2p-interface.md#modified-datacolumnsidecar) object from the CL Gloas spec.',
        required: ['index', 'column', 'kzg_proofs', 'slot', 'beacon_block_root'],
      }),
  )
  .min(0)
  .max(128)
  .openapi('GloasDataColumnSidecars')

const GloasBuilderEntrySchema = z
  .object({
    url: z
      .url()
      .max(2048)
      .openapi({
        description: "Where this entry's bid request is sent.",
        example: 'https://builder.example.com',
      }),
    auth: GloasSignedBuilderRequestAuthSchema.openapi({
      description:
        "Authenticates this entry's bid request to the builder. The beacon node MUST forward `message` and `signature` byte-for-byte unchanged.",
    }),
    builder_pubkeys: z
      .array(
        z
          .lazy(() => GloasBuilderPreferencesEntrySchema)
          .openapi({ description: "A builder's BLS public key." }),
      )
      .max(64)
      .openapi({
        description:
          'The builder BLS public keys this entry accepts bids from. Empty accepts any builder; otherwise a bid not signed by one of them MUST NOT be accepted.',
      }),
    max_execution_payment: Uint64Schema.openapi({
      description:
        "Cap, in Gwei, on the `execution_payment` counted. The builder's bid is valued at `value` plus `min(execution_payment, max_execution_payment)`, for both the `min_bid` floor and the bid weighting. A builder with stored preferences MUST NOT set `execution_payment` above it, per the builder-specs.",
      example: '1000000000',
    }),
    min_bid: Uint64Schema.openapi({
      description:
        'Minimum total payment, in Gwei, accepted from this builder. A bid whose `value` plus counted `execution_payment` (see `max_execution_payment`) is below this MUST be rejected.',
      example: '10000000',
    }),
    builder_boost_factor: Uint64Schema.openapi({
      description:
        "Percentage multiplier applied to this builder's bid once it has passed the `min_bid`\ncheck. Its weighted value is `builder_boost_factor * builder_bid_value`, where\n`builder_bid_value` is the bid's `value` plus `min(execution_payment, max_execution_payment)`.\nThe sum saturates at `2**64 - 1`, so the weighted value fits in 128 bits.\n\nBids are compared by weighted value. Against the local payload, the local value is\nweighted by `100`, so a factor below `100` favors the local payload and one above\n`100` favors this builder.\n\nServers must support the following values, which encode common preferences:\n\n* `builder_boost_factor=0`: prefer the local payload unless an error makes it unviable.\n* `builder_boost_factor=100`: profit maximization mode; choose whichever pays more.\n* `builder_boost_factor=2**64 - 1`: prefer this builder unless an error or health check\n  makes it unviable.\n\nServers should compute weighted values without overflow or loss of precision.\n",
      example: '100',
    }),
  })
  .openapi({
    description:
      "A per-builder input the validator client supplies on a block-production request.\n\nEach entry is a bid request sent to its `url`, authenticated by its `auth`, which the\nbuilder requires on every request. No two entries may share both their `url` and their\n`auth`'s `data`, and one request is made per entry, so several MAY share a `url` with\ndifferent `data`.\n\n`auth` is the `SignedBuilderRequestAuth` object from the Builder API Gloas spec.\n\nA `BuilderEntry` never reaches a builder, so it has no Builder API definition. Its SSZ\ncontainer and constants are:\n\n    MAX_BUILDER_ENTRIES = 64\n    MAX_BUILDER_URL_SIZE = 2048\n    MAX_BUILDER_PUBKEYS = 64\n\n    class BuilderEntry(Container):\n        url: ByteList[MAX_BUILDER_URL_SIZE]  # UTF-8 bytes of `url`, exactly as in JSON\n        auth: SignedBuilderRequestAuth\n        builder_pubkeys: List[BLSPubkey, MAX_BUILDER_PUBKEYS]\n        max_execution_payment: Gwei\n        min_bid: Gwei\n        builder_boost_factor: uint64\n\nIn either encoding, a zero-length `url` is invalid.\n",
    required: [
      'url',
      'auth',
      'builder_pubkeys',
      'max_execution_payment',
      'min_bid',
      'builder_boost_factor',
    ],
  })
  .openapi('GloasBuilderEntry')

const GloasBuilderConfigSchema = z
  .object({
    min_bid: Uint64Schema.openapi({
      description:
        'Minimum total payment, in Gwei, accepted from a p2p bid. A bid whose `value` plus `execution_payment` is below this MUST be rejected.',
      example: '10000000',
    }),
    builder_boost_factor: Uint64Schema.openapi({
      description:
        "Percentage multiplier applied to a p2p bid, exactly as a `BuilderEntry`'s\n`builder_boost_factor` is applied to a bid from that entry: `0` prefers the local\npayload, `100` is profit maximization, and `2**64 - 1` prefers the bid, each unless\nan error or health check makes the preferred payload unviable.\n",
      example: '100',
    }),
    builders: z
      .array(GloasBuilderEntrySchema)
      .max(64)
      .openapi({
        description:
          'The builders to request bids from, one `BuilderEntry` each. Empty means request none, so only p2p bids are considered.',
      }),
  })
  .openapi({
    description:
      'The resolved per-key builder config the validator client sends on a block-production request.\nEntries arrive fully resolved, so a requested bid is governed by its own `BuilderEntry`; the\ntop-level `min_bid` and `builder_boost_factor` apply to bids received over p2p.\n\nIts SSZ container is:\n\n    class BuilderConfig(Container):\n        min_bid: Gwei\n        builder_boost_factor: uint64\n        builders: List[BuilderEntry, MAX_BUILDER_ENTRIES]\n',
    required: ['min_bid', 'builder_boost_factor', 'builders'],
  })
  .openapi('GloasBuilderConfig')

const ExtraDataSchema = z
  .looseObject({})
  .openapi({
    description:
      'Extra data that may differ between clients, or an empty object if none is provided.',
  })
  .openapi('ExtraData')

const NodeSchema = z
  .object({
    slot: Uint64Schema.openapi({ description: 'The slot to which this block corresponds.' }),
    block_root: RootSchema.openapi({
      description: 'The signing merkle root of the `BeaconBlock`.',
    }),
    parent_root: RootSchema.openapi({
      description: 'The signing merkle root of the parent `BeaconBlock`.',
    }),
    justified_epoch: Uint64Schema,
    finalized_epoch: Uint64Schema,
    weight: Uint64Schema,
    validity: z.enum(['valid', 'invalid', 'optimistic']),
    execution_block_hash: z
      .lazy(() => GloasBeaconStateSchema)
      .openapi({
        description: 'The `block_hash` from the `execution_payload` of the `BeaconBlock`',
      }),
    extra_data: ExtraDataSchema.exactOptional(),
  })
  .openapi({
    description: 'fork choice node attributes',
    required: [
      'slot',
      'block_root',
      'parent_root',
      'justified_epoch',
      'finalized_epoch',
      'weight',
      'validity',
      'execution_block_hash',
    ],
  })
  .openapi('Node')

const NodeV2Schema = z
  .object({
    slot: Uint64Schema.openapi({ description: 'The slot of the beacon block.' }),
    block_root: RootSchema.openapi({ description: 'The hash tree root of the beacon block.' }),
    payload_status: z
      .enum(['pending', 'empty', 'full'])
      .openapi({
        description:
          "- `pending`: the parent of this block's `empty` and `full` nodes. This node remains after the payload is received.\n- `empty`: the node representing this block without its execution payload, even if the payload has been received.\n- `full`: the node representing this block with its execution payload.\n",
      }),
    parent_root: RootSchema.openapi({
      description:
        "The block root of the parent fork choice node. For Gloas `empty` and `full` nodes, this equals\n`block_root`, pointing to the same block's `pending` node. Otherwise, it is the beacon block's `parent_root`.\n",
    }),
    parent_payload_status: z
      .xor([z.null().nullable(), z.enum(['pending', 'empty', 'full'])])
      .openapi({
        description:
          'The payload status of the parent fork choice node. Null if the parent is not retained in the fork choice tree.',
      }),
    justified_checkpoint: CheckpointSchema.openapi({
      description: 'The justified checkpoint recorded for this fork choice node.',
    }),
    finalized_checkpoint: CheckpointSchema.openapi({
      description: 'The finalized checkpoint recorded for this fork choice node.',
    }),
    weight: Uint64Schema.openapi({
      description: 'The raw stored weight of this fork choice node in Gwei.',
    }),
    validity: z
      .enum(['valid', 'invalid', 'optimistic'])
      .openapi({
        description: 'The execution validity of the chain ending at `execution_block_hash`.',
      }),
    execution_block_hash: z
      .lazy(() => GloasBeaconStateSchema)
      .openapi({
        description:
          "For `full` nodes, the block's execution payload hash. For Gloas `pending` and `empty` nodes,\nthe bid's `parent_block_hash`.\n",
      }),
    payload_attester_count: Uint64Schema.openapi({
      description: 'Number of PTC positions with a recorded vote.',
    }),
    payload_availability_yes_count: Uint64Schema.openapi({
      description: 'Number of PTC positions voting that the payload was received on time.',
    }),
    payload_data_availability_yes_count: Uint64Schema.openapi({
      description: 'Number of PTC positions voting that the blob data is available.',
    }),
    extra_data: ExtraDataSchema,
  })
  .openapi({
    description: 'A fork choice node, identified by its block root and payload status.',
    required: [
      'slot',
      'block_root',
      'payload_status',
      'parent_root',
      'parent_payload_status',
      'justified_checkpoint',
      'finalized_checkpoint',
      'weight',
      'validity',
      'execution_block_hash',
      'payload_attester_count',
      'payload_availability_yes_count',
      'payload_data_availability_yes_count',
      'extra_data',
    ],
  })
  .openapi('NodeV2')

const SyncCommitteeRewardsSchema = z
  .array(
    z
      .object({
        validator_index: Uint64Schema.openapi({
          example: '0',
          description: 'one entry for every validator participating in the sync committee',
        }),
        reward: z
          .string()
          .openapi({
            example: '2000',
            description: 'sync committee reward in gwei for the validator',
          }),
      })
      .openapi({
        description: 'Rewards info for a single sync committee member',
        required: ['validator_index', 'reward'],
      }),
  )
  .openapi({ description: 'Rewards info for sync committee members' })
  .openapi('SyncCommitteeRewards')

const BlockRewardsSchema = z
  .object({
    proposer_index: Uint64Schema.openapi({
      example: '123',
      description: 'proposer of the block, the proposer index who receives these rewards',
    }),
    total: Uint64Schema.openapi({
      example: '123',
      description:
        'total block reward in gwei, equal to attestations + sync_aggregate + proposer_slashings + attester_slashings',
    }),
    attestations: Uint64Schema.openapi({
      example: '123',
      description: 'block reward component due to included attestations in gwei',
    }),
    sync_aggregate: Uint64Schema.openapi({
      example: '123',
      description: 'block reward component due to included sync_aggregate in gwei',
    }),
    proposer_slashings: Uint64Schema.openapi({
      example: '123',
      description: 'block reward component due to included proposer_slashings in gwei',
    }),
    attester_slashings: Uint64Schema.openapi({
      example: '123',
      description: 'block reward component due to included attester_slashings in gwei',
    }),
  })
  .openapi({
    description: 'Rewards info for a single block',
    required: [
      'proposer_index',
      'total',
      'attestations',
      'sync_aggregate',
      'proposer_slashings',
      'attester_slashings',
    ],
  })
  .openapi('BlockRewards')

const AttestationsRewardsSchema = z
  .object({
    ideal_rewards: z.array(
      z
        .object({
          effective_balance: Uint64Schema.openapi({
            example: '1000000000',
            description: "validator's effective balance in gwei",
          }),
          head: z
            .string()
            .openapi({
              example: '2500',
              description: "Ideal attester's reward for head vote in gwei",
            }),
          target: z
            .string()
            .openapi({
              example: '5000',
              description: "Ideal attester's reward for target vote in gwei",
            }),
          source: z
            .string()
            .openapi({
              example: '5000',
              description: "Ideal attester's reward for source vote in gwei",
            }),
          inclusion_delay: Uint64Schema.exactOptional().openapi({
            example: '5000',
            description: "Ideal attester's inclusion_delay reward in gwei (phase0 only)",
          }),
          inactivity: z
            .string()
            .openapi({
              example: '5000',
              description: "Ideal attester's inactivity penalty in gwei",
            }),
        })
        .openapi({
          description: 'Ideal rewards info for a single attestation',
          required: ['effective_balance', 'head', 'target', 'source', 'inactivity'],
        }),
    ),
    total_rewards: z.array(
      z
        .object({
          validator_index: Uint64Schema.openapi({
            example: '0',
            description: 'one entry for every validator based on their attestations in the epoch',
          }),
          head: z
            .string()
            .openapi({ example: '2000', description: "attester's reward for head vote in gwei" }),
          target: z
            .string()
            .openapi({ example: '2000', description: "attester's reward for target vote in gwei" }),
          source: z
            .string()
            .openapi({ example: '4000', description: "attester's reward for source vote in gwei" }),
          inclusion_delay: Uint64Schema.exactOptional().openapi({
            example: '2000',
            description: "attester's inclusion_delay reward in gwei (phase0 only)",
          }),
          inactivity: z
            .string()
            .openapi({ example: '2000', description: "attester's inactivity penalty in gwei" }),
        })
        .openapi({
          description: 'Rewards info for a single attestation',
          required: ['validator_index', 'head', 'target', 'source', 'inactivity'],
        }),
    ),
  })
  .openapi({
    description: 'Rewards info for attestations',
    required: ['ideal_rewards', 'total_rewards'],
  })
  .openapi('AttestationsRewards')

const InvalidRequestResponse = {
  description: 'Invalid request syntax.',
  content: {
    'application/json': {
      schema: z
        .object({
          code: z
            .number()
            .openapi({
              description:
                'Either specific error code in case of invalid request or http status code',
              example: 400,
            }),
          message: z.string().openapi({ description: 'Message describing error' }),
          stacktraces: z
            .array(z.string())
            .exactOptional()
            .openapi({ description: 'Optional stacktraces, sent when node is in debug mode' }),
        })
        .openapi({ required: ['code', 'message'] }),
    },
  },
}

const NotFoundResponse = {
  description: 'Not found',
  content: {
    'application/json': {
      schema: z
        .object({
          code: z
            .number()
            .openapi({
              description:
                'Either specific error code in case of invalid request or http status code',
              example: 404,
            }),
          message: z.string().openapi({ description: 'Message describing error' }),
          stacktraces: z
            .array(z.string())
            .exactOptional()
            .openapi({ description: 'Optional stacktraces, sent when node is in debug mode' }),
        })
        .openapi({ required: ['code', 'message'] }),
      example: { code: 404, message: 'Requested item not found' },
    },
  },
}

const NotAcceptableResponse = {
  description: 'Accepted media type is not supported.',
  content: {
    'application/json': {
      schema: z
        .object({
          code: z
            .number()
            .openapi({
              description:
                'The media type in "Accept" header is unsupported, and the request has been rejected. This occurs when the server cannot produce a response in the format accepted by the client.',
              example: 406,
            }),
          message: z.string().openapi({ description: 'Message describing error' }),
          stacktraces: z
            .array(z.string())
            .exactOptional()
            .openapi({ description: 'Optional stacktraces, sent when node is in debug mode' }),
        })
        .openapi({ required: ['code', 'message'] }),
      example: { code: 406, message: 'Accepted media type not supported' },
    },
  },
}

const UnsupportedMediaTypeResponse = {
  description: 'Supplied content-type is not supported.',
  content: {
    'application/json': {
      schema: z
        .object({
          code: z
            .number()
            .openapi({
              description:
                'The media type in "Content-Type" header is unsupported, and the request has been rejected. This occurs when a HTTP request supplies a payload in a content-type that the server is not able to handle.',
              example: 415,
            }),
          message: z.string().openapi({ description: 'Message describing error' }),
          stacktraces: z
            .array(z.string())
            .exactOptional()
            .openapi({ description: 'Optional stacktraces, sent when node is in debug mode' }),
        })
        .openapi({ required: ['code', 'message'] }),
      example: { code: 415, message: 'Cannot read the supplied content type.' },
    },
  },
}

const InternalErrorResponse = {
  description: 'Beacon node internal error.',
  content: {
    'application/json': {
      schema: z
        .object({
          code: z
            .number()
            .openapi({
              description:
                'Either specific error code in case of invalid request or http status code',
              example: 500,
            }),
          message: z.string().openapi({ description: 'Message describing error' }),
          stacktraces: z
            .array(z.string())
            .exactOptional()
            .openapi({ description: 'Optional stacktraces, sent when node is in debug mode' }),
        })
        .openapi({ required: ['code', 'message'] }),
      example: { code: 500, message: 'Internal server error' },
    },
  },
}

const NotImplementedErrorResponse = {
  description: 'Endpoint not implemented.',
  content: {
    'application/json': {
      schema: z
        .object({
          code: z
            .number()
            .openapi({
              description:
                'Either specific error code in case of invalid request or http status code',
              example: 501,
            }),
          message: z.string().openapi({ description: 'Message describing error' }),
          stacktraces: z
            .array(z.string())
            .exactOptional()
            .openapi({ description: 'Optional stacktraces, sent when node is in debug mode' }),
        })
        .openapi({ required: ['code', 'message'] }),
      example: { code: 501, message: 'Endpoint not implemented' },
    },
  },
}

const CurrentlySyncingResponse = {
  description: 'Beacon node is currently syncing, try again later.',
  content: {
    'application/json': {
      schema: z
        .object({
          code: z
            .number()
            .openapi({
              description:
                'Either specific error code in case of invalid request or http status code',
              example: 503,
            }),
          message: z.string().openapi({ description: 'Message describing error' }),
          stacktraces: z
            .array(z.string())
            .exactOptional()
            .openapi({ description: 'Optional stacktraces, sent when node is in debug mode' }),
        })
        .openapi({ required: ['code', 'message'] }),
      example: {
        code: 503,
        message: 'Beacon node is currently syncing and not serving request on that endpoint',
      },
    },
  },
}

const StateIdParamsSchema = z
  .string()
  .openapi({
    param: {
      required: true,
      name: 'state_id',
      in: 'path',
      example: 'head',
      schema: { type: 'string' },
      description:
        'State identifier.\nCan be one of: "head" (canonical head in node\'s view), "genesis", "finalized", "justified", \\<slot\\>, \\<hex encoded stateRoot with 0x prefix\\>.\n',
    },
  })

const BlockIdParamsSchema = z
  .string()
  .openapi({
    param: {
      required: true,
      name: 'block_id',
      in: 'path',
      example: 'head',
      schema: { type: 'string' },
      description:
        'Block identifier.\nCan be one of: "head" (canonical head in node\'s view), "genesis", "finalized", \\<slot\\>, \\<hex encoded blockRoot with 0x prefix\\>.\n',
    },
  })

const BlockRootParamsSchema = RootSchema.openapi({
  param: {
    required: true,
    name: 'block_root',
    in: 'path',
    schema: { $ref: '#/components/schemas/Root' },
    description: 'Block root.\n\\<hex encoded blockRoot with 0x prefix\\>.\n',
  },
})

const SkipRandaoVerificationParamsSchema = z
  .string()
  .length(0)
  .exactOptional()
  .openapi({
    param: {
      name: 'skip_randao_verification',
      in: 'query',
      required: false,
      description:
        'Skip verification of the `randao_reveal` value. If this flag is set then the\n`randao_reveal` must be set to the point at infinity (`0xc0..00`). \n',
      schema: { type: 'string', minLength: 0, maxLength: 0 },
      allowEmptyValue: true,
    },
  })

const EthConsensusVersionHeaderSchema = ConsensusVersionSchema.openapi({
  description:
    'The active consensus version to which the data belongs. Required in response so client can deserialize returned json or ssz data\nmore effectively.\n',
})

const EthExecutionPayloadBlindedHeaderSchema = z
  .boolean()
  .openapi({
    description:
      'Required in response so client can deserialize returned json or ssz data to the correct object.',
  })

const EthExecutionPayloadValueHeaderSchema = z
  .string()
  .openapi({
    description:
      'Execution payload value in Wei. Required in response so client can determine relative value\nof execution payloads.\n',
    example: '1',
  })

const EthConsensusBlockValueHeaderSchema = z
  .string()
  .openapi({
    description:
      'Consensus rewards for this block in Wei paid to the proposer. The\nrewards value is the sum of values of the proposer rewards from\nattestations, sync committees and slashings included in the proposal.\nRequired in response so client can determine relative value of\nconsensus blocks.\n',
    example: '1',
  })

const EthExecutionPayloadIncludedHeaderSchema = z
  .boolean()
  .openapi({
    description:
      'Indicates whether the execution payload envelope, blobs, and KZG proofs are included in the response. Required in response so client can deserialize returned data.\n',
  })

export const getEthV1BeaconGenesisRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/genesis',
  tags: ['Beacon', 'ValidatorRequiredApi'],
  summary: "Retrieve details of the chain's genesis.",
  description: "Retrieve details of the chain's genesis which can be used to identify chain.",
  operationId: 'getGenesis',
  responses: {
    200: {
      description: 'Request successful',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  genesis_time: GenesisTimeSchema,
                  genesis_validators_root: RootSchema,
                  genesis_fork_version: ForkVersionSchema,
                })
                .openapi({
                  required: ['genesis_time', 'genesis_validators_root', 'genesis_fork_version'],
                }),
            })
            .openapi({ title: 'GetGenesisResponse', required: ['data'] }),
        },
      },
    },
    404: {
      description: 'Chain genesis info is not yet known',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'Chain genesis info is not yet known' },
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconStatesStateIdRootRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/states/{state_id}/root',
  tags: ['Beacon'],
  summary: 'Get state SSZ HashTreeRoot',
  description:
    "Calculates HashTreeRoot for state with given 'stateId'. If stateId is root, same value will be returned.",
  operationId: 'getStateRoot',
  request: { params: z.object({ state_id: StateIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: z
                .object({
                  root: RootSchema.openapi({ description: 'HashTreeRoot of BeaconState object' }),
                })
                .openapi({ required: ['root'] }),
            })
            .openapi({
              title: 'GetStateRootResponse',
              required: ['execution_optimistic', 'finalized', 'data'],
            }),
        },
      },
    },
    400: {
      description: 'Invalid state ID',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid state ID: current' },
        },
      },
    },
    404: {
      description: 'State not found',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'State not found' },
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconStatesStateIdForkRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/states/{state_id}/fork',
  tags: ['Beacon', 'ValidatorRequiredApi'],
  summary: 'Get Fork object for requested state',
  description:
    "Returns [Fork](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#fork) object for state with given 'stateId'.",
  operationId: 'getStateFork',
  request: { params: z.object({ state_id: StateIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: ForkSchema,
            })
            .openapi({
              title: 'GetStateForkResponse',
              required: ['execution_optimistic', 'finalized', 'data'],
            }),
        },
      },
    },
    400: {
      description: 'Invalid state ID',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid state ID: current' },
        },
      },
    },
    404: {
      description: 'State not found',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'State not found' },
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconStatesStateIdFinalityCheckpointsRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/states/{state_id}/finality_checkpoints',
  tags: ['Beacon'],
  summary: 'Get state finality checkpoints',
  description:
    "Returns finality checkpoints for state with given 'stateId'.\nIn case finality is not yet achieved, checkpoint should return epoch 0 and ZERO_HASH as root.\n",
  operationId: 'getStateFinalityCheckpoints',
  request: { params: z.object({ state_id: StateIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: z
                .object({
                  previous_justified: CheckpointSchema,
                  current_justified: CheckpointSchema,
                  finalized: CheckpointSchema,
                })
                .openapi({ required: ['previous_justified', 'current_justified', 'finalized'] }),
            })
            .openapi({
              title: 'GetStateFinalityCheckpointsResponse',
              required: ['execution_optimistic', 'finalized', 'data'],
            }),
        },
      },
    },
    400: {
      description: 'Invalid state ID',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid state ID: current' },
        },
      },
    },
    404: {
      description: 'State not found',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'State not found' },
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconStatesStateIdValidatorsRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/states/{state_id}/validators',
  tags: ['Beacon'],
  summary: 'Get validators from state',
  description:
    'Returns filterable list of validators with their balance, status and index.\n\nInformation will be returned for all indices or public key that match known validators.  If an index or public key does not\nmatch any known validator, no information will be returned but this will not cause an error.  There are no guarantees for the\nreturned data in terms of ordering; both the index and public key are returned for each validator, and can be used to confirm\nfor which inputs a response has been returned.\n',
  operationId: 'getStateValidators',
  request: {
    params: z.object({ state_id: StateIdParamsSchema }),
    query: z.object({
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z
            .array(
              z
                .string()
                .openapi({
                  description:
                    'Either hex encoded public key (any bytes48 with 0x prefix) or validator index',
                }),
            )
            .max(64)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            }),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            description:
              'Either hex encoded public key (any bytes48 with 0x prefix) or validator index',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              maxItems: 64,
              uniqueItems: true,
              items: {
                description:
                  'Either hex encoded public key (any bytes48 with 0x prefix) or validator index',
                type: 'string',
              },
            },
          },
        }),
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z
            .array(
              z.xor([ValidatorStatusSchema, z.enum(['active', 'pending', 'exited', 'withdrawal'])]),
            )
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            }),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            description:
              '[Validator status specification](https://hackmd.io/ofFJ5gOmQpu1jjHilHbdQQ)',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                oneOf: [
                  { $ref: '#/components/schemas/ValidatorStatus' },
                  { enum: ['active', 'pending', 'exited', 'withdrawal'] },
                ],
              },
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: z.array(ValidatorResponseSchema),
            })
            .openapi({
              title: 'GetStateValidatorsResponse',
              required: ['execution_optimistic', 'finalized', 'data'],
            }),
        },
      },
    },
    400: {
      description: 'Invalid state or validator ID, or status',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid state ID: current' },
        },
      },
    },
    404: {
      description: 'State not found',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'State not found' },
        },
      },
    },
    414: {
      description: 'Too many validator IDs',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 414, message: 'Too many validator IDs in request' },
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const postEthV1BeaconStatesStateIdValidatorsRoute = createRoute({
  method: 'post',
  path: '/eth/v1/beacon/states/{state_id}/validators',
  tags: ['Beacon'],
  summary: 'Get validators from state',
  description:
    'Returns filterable list of validators with their balance, status and index.\n\nInformation will be returned for all indices or public key that match known validators.  If an index or public key does not\nmatch any known validator, no information will be returned but this will not cause an error.  There are no guarantees for the\nreturned data in terms of ordering; both the index and public key are returned for each validator, and can be used to confirm\nfor which inputs a response has been returned.\n\nThe POST variant of this endpoint has the same semantics as the GET endpoint but passes\nthe lists of IDs and statuses via a POST body in order to enable larger requests.\n',
  operationId: 'postStateValidators',
  request: {
    params: z.object({ state_id: StateIdParamsSchema }),
    body: {
      description:
        'The lists of validator IDs and statuses to filter on. Either or both may be `null` to signal that no filtering on that attribute is desired.',
      content: {
        'application/json': {
          schema: z
            .object({
              ids: z
                .array(z.string())
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional()
                .openapi({
                  description:
                    'An array of values, with each value either a hex encoded public key (any bytes48 with 0x prefix) or a validator index.\n\nIf the supplied list is empty (i.e. the value is `[]`) or the property is omitted then all validators will be returned.\n',
                }),
              statuses: z
                .array(
                  z.xor([
                    ValidatorStatusSchema,
                    z.enum(['active', 'pending', 'exited', 'withdrawal']),
                  ]),
                )
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional()
                .openapi({
                  description:
                    'An array of validator statuses to filter on.\n\nIf the supplied list is empty (i.e. the value is `[]`) or the property is omitted then validators with all statuses will be returned.\n',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: z.array(ValidatorResponseSchema),
            })
            .openapi({
              title: 'GetStateValidatorsResponse',
              required: ['execution_optimistic', 'finalized', 'data'],
            }),
        },
      },
    },
    400: {
      description: 'Invalid state or validator ID, or status',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid state ID: current' },
        },
      },
    },
    404: {
      description: 'State not found',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'State not found' },
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconStatesStateIdValidatorsValidatorIdRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/states/{state_id}/validators/{validator_id}',
  tags: ['Beacon', 'ValidatorRequiredApi'],
  summary: 'Get validator from state by id',
  description:
    'Returns validator specified by state and id or public key along with status and balance.',
  operationId: 'getStateValidator',
  request: {
    params: z.object({
      state_id: StateIdParamsSchema,
      validator_id: z
        .string()
        .openapi({
          param: {
            name: 'validator_id',
            description:
              'Either hex encoded public key (any bytes48 with 0x prefix) or validator index',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: ValidatorResponseSchema,
            })
            .openapi({
              title: 'GetStateValidatorResponse',
              required: ['execution_optimistic', 'finalized', 'data'],
            }),
        },
      },
    },
    400: {
      description: 'Invalid state or validator ID',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid state ID: current' },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          examples: {
            StateNotFound: { value: { code: 404, message: 'State not found' } },
            ValidatorNotFound: { value: { code: 404, message: 'Validator not found' } },
          },
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconStatesStateIdValidatorBalancesRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/states/{state_id}/validator_balances',
  tags: ['Beacon'],
  summary: 'Get validator balances from state',
  description:
    'Returns filterable list of validators balances.\n\nBalances will be returned for all indices or public key that match known validators. If an index or public key does not\nmatch any known validator, no balance will be returned but this will not cause an error. There are no guarantees for the\nreturned data in terms of ordering; the index is returned for each balance, and can be used to confirm for which inputs a\nresponse has been returned.\n\nDepending on `Accept` header data can be returned either as JSON or as bytes serialized by SSZ.\n',
  operationId: 'getStateValidatorBalances',
  request: {
    params: z.object({ state_id: StateIdParamsSchema }),
    query: z.object({
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z
            .array(
              z
                .string()
                .openapi({
                  description:
                    'Either hex encoded public key (any bytes48 with 0x prefix) or validator index',
                }),
            )
            .max(64)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            }),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            description:
              'Either hex encoded public key (any bytes48 with 0x prefix) or validator index',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              maxItems: 64,
              uniqueItems: true,
              items: {
                description:
                  'Either hex encoded public key (any bytes48 with 0x prefix) or validator index',
                type: 'string',
              },
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: z.array(ValidatorBalanceResponseSchema),
            })
            .openapi({
              title: 'GetStateValidatorBalancesResponse',
              required: ['execution_optimistic', 'finalized', 'data'],
            }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `List[Container{index: uint64, balance: uint64}, VALIDATOR_REGISTRY_LIMIT]` bytes. Use Accept header to choose this response type',
            }),
        },
      },
    },
    400: {
      description: 'Invalid state or validator ID',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid state ID: current' },
        },
      },
    },
    404: {
      description: 'State not found',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'State not found' },
        },
      },
    },
    406: NotAcceptableResponse,
    414: {
      description: 'Too many validator IDs',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 414, message: 'Too many validator IDs in request' },
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const postEthV1BeaconStatesStateIdValidatorBalancesRoute = createRoute({
  method: 'post',
  path: '/eth/v1/beacon/states/{state_id}/validator_balances',
  tags: ['Beacon'],
  summary: 'Get validator balances from state',
  description:
    'Returns filterable list of validators balances.\n\nBalances will be returned for all indices or public keys that match known validators. If an index or public key does not\nmatch any known validator, no balance will be returned but this will not cause an error. There are no guarantees for the\nreturned data in terms of ordering; the index is returned for each balance, and can be used to confirm for which inputs a\nresponse has been returned.\n\nDepending on `Accept` header data can be returned either as JSON or as bytes serialized by SSZ.\n',
  operationId: 'postStateValidatorBalances',
  request: {
    params: z.object({ state_id: StateIdParamsSchema }),
    body: {
      description:
        'An array of values, with each value either a hex encoded public key (any bytes48 with 0x prefix) or a validator index.\n\nIf the supplied list is empty (i.e. the body is `[]`) or no body is supplied then balances will be returned for all validators.\n',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .string()
                .openapi({
                  description:
                    'Either hex encoded public key (any bytes48 with 0x prefix) or validator index',
                }),
            )
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: z.array(ValidatorBalanceResponseSchema),
            })
            .openapi({
              title: 'GetStateValidatorBalancesResponse',
              required: ['execution_optimistic', 'finalized', 'data'],
            }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `List[Container{index: uint64, balance: uint64}, VALIDATOR_REGISTRY_LIMIT]` bytes. Use Accept header to choose this response type',
            }),
        },
      },
    },
    400: {
      description: 'Invalid state ID or malformed request',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid state ID: current' },
        },
      },
    },
    404: {
      description: 'State not found',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'State not found' },
        },
      },
    },
    406: NotAcceptableResponse,
    500: InternalErrorResponse,
  },
})

export const postEthV1BeaconStatesStateIdValidatorIdentitiesRoute = createRoute({
  method: 'post',
  path: '/eth/v1/beacon/states/{state_id}/validator_identities',
  tags: ['Beacon'],
  summary: 'Get validator identities from state',
  description:
    'Returns filterable list of validators identities.\n\nIdentities will be returned for all indices or public keys that match known validators. If an index or public key does not\nmatch any known validator, no identity will be returned but this will not cause an error. There are no guarantees for the\nreturned data in terms of ordering.\n\n Depending on `Accept` header data can be returned either as JSON or as bytes serialized by SSZ.\n',
  operationId: 'postStateValidatorIdentities',
  request: {
    params: z.object({ state_id: StateIdParamsSchema }),
    body: {
      description:
        'An array of values, with each value either a hex encoded public key (any bytes48 with 0x prefix) or a validator index.\n\nIf the supplied list is empty (i.e. the body is `[]`) or no body is supplied then all validators will be returned.\n',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .string()
                .openapi({
                  description:
                    'Either hex encoded public key (any bytes48 with 0x prefix) or validator index',
                }),
            )
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: z.array(ValidatorIdentityResponseSchema),
            })
            .openapi({
              title: 'PostStateValidatorIdentitiesResponse',
              required: ['execution_optimistic', 'finalized', 'data'],
            }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description: 'SSZ serialized results. Use Accept header to choose this response type',
            }),
        },
      },
    },
    400: {
      description: 'Invalid state ID or malformed request',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid state ID: current' },
        },
      },
    },
    404: {
      description: 'State not found',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'State not found' },
        },
      },
    },
    406: NotAcceptableResponse,
    500: InternalErrorResponse,
  },
})

export const postEthV1BeaconStatesStateIdBuildersRoute = createRoute({
  method: 'post',
  path: '/eth/v1/beacon/states/{state_id}/builders',
  tags: ['Beacon'],
  summary: 'Get builders from state',
  description:
    'Returns filterable list of builders with their status and index.\n\nInformation will be returned for all indices or public keys that match known builders. If an index or public key does not\nmatch any known builder, no information will be returned but this will not cause an error. There are no guarantees for the\nreturned data in terms of ordering; both the index and public key are returned for each builder, and can be used to confirm\nfor which inputs a response has been returned.\n\nReturns 400 if the requested state is prior to Gloas.\n',
  operationId: 'getStateBuilders',
  request: {
    params: z.object({ state_id: StateIdParamsSchema }),
    body: {
      description:
        'The lists of builder IDs and statuses to filter on.\nIf no body is supplied then all builders will be returned. To return all active builders, omit `ids` and set `statuses` to `["active"]`.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              ids: z
                .array(z.string())
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional()
                .openapi({
                  description:
                    'An array of values, with each value either a hex encoded public key (any bytes48 with 0x prefix) or a builder index.\n\nIf the supplied list is empty (i.e. the value is `[]`) or the property is omitted then all builders will be returned.\n',
                }),
              statuses: z
                .array(BuilderStatusSchema)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional()
                .openapi({
                  description:
                    'An array of builder statuses to filter on.\n\nIf the supplied list is empty (i.e. the value is `[]`) or the property is omitted then builders with all statuses will be returned.\n',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: z.array(BuilderResponseSchema),
            })
            .openapi({
              title: 'GetStateBuildersResponse',
              required: ['execution_optimistic', 'finalized', 'data'],
            }),
        },
      },
    },
    400: {
      description: 'Invalid state ID, builder ID, or malformed request',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid state ID: current' },
        },
      },
    },
    404: {
      description: 'State not found',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'State not found' },
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconStatesStateIdCommitteesRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/states/{state_id}/committees',
  tags: ['Beacon'],
  summary: 'Get all committees for a state.',
  description: 'Retrieves the committees for the given state.',
  operationId: 'getEpochCommittees',
  request: {
    params: z.object({ state_id: StateIdParamsSchema }),
    query: z.object({
      epoch: Uint64Schema.openapi({
        param: {
          name: 'epoch',
          description:
            'Fetch committees for the given epoch.  If not present then the committees for the epoch of the state will be obtained.',
          in: 'query',
          required: false,
          allowEmptyValue: false,
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }).exactOptional(),
      index: Uint64Schema.openapi({
        param: {
          name: 'index',
          description: 'Restrict returned values to those matching the supplied committee index.',
          in: 'query',
          required: false,
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }).exactOptional(),
      slot: Uint64Schema.openapi({
        param: {
          name: 'slot',
          description: 'Restrict returned values to those matching the supplied slot.',
          in: 'query',
          required: false,
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: z.array(CommitteeSchema),
            })
            .openapi({
              title: 'GetEpochCommitteesResponse',
              required: ['execution_optimistic', 'finalized', 'data'],
            }),
        },
      },
    },
    400: {
      description: 'Invalid state ID, index, epoch, slot, or combination thereof',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Slot does not belong in epoch' },
        },
      },
    },
    404: {
      description: 'State not found',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'State not found' },
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconStatesStateIdSyncCommitteesRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/states/{state_id}/sync_committees',
  tags: ['Beacon'],
  summary: 'Get sync committees for a state.',
  description:
    'Retrieves the current sync committee for the given state. Also returns the subcommittee assignments.',
  operationId: 'getEpochSyncCommittees',
  request: {
    params: z.object({ state_id: StateIdParamsSchema }),
    query: z.object({
      epoch: Uint64Schema.openapi({
        param: {
          name: 'epoch',
          description:
            'Fetch sync committees for the given epoch.  If not present then the sync committees for the epoch of the state will be obtained.',
          in: 'query',
          required: false,
          allowEmptyValue: false,
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: AltairSyncCommitteeSchema,
            })
            .openapi({
              title: 'GetEpochSyncCommitteesResponse',
              required: ['execution_optimistic', 'finalized', 'data'],
            }),
        },
      },
    },
    400: {
      description: 'Invalid state ID or epoch',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: {
            code: 400,
            message: 'Epoch is outside the sync committee period of the state',
          },
        },
      },
    },
    404: {
      description: 'State not found',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'State not found' },
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconStatesStateIdPtcRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/states/{state_id}/ptc',
  tags: ['Beacon'],
  summary: 'Get the payload timeliness committee for a slot.',
  description:
    'Returns the [payload timeliness committee](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/beacon-chain.md#new-get_ptc) for the requested slot from the state with the given `state_id`.\nShould return 400 if the state retrieved or the requested slot is prior to Gloas.\n',
  operationId: 'getStatePtc',
  request: {
    params: z.object({ state_id: StateIdParamsSchema }),
    query: z.object({
      slot: Uint64Schema.openapi({
        param: {
          name: 'slot',
          description:
            "Slot for which to retrieve the committee. Defaults to the state's slot.\nThe slot's epoch must be between `get_current_epoch(state) - 1`\n(or the genesis epoch in the case of underflow) and\n`get_current_epoch(state) + MIN_SEED_LOOKAHEAD`, inclusive.\n",
          in: 'query',
          required: false,
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: z
                .object({ slot: Uint64Schema, validators: GloasPayloadTimelinessCommitteeSchema })
                .openapi({ required: ['slot', 'validators'] }),
            })
            .openapi({
              title: 'GetStatePtcResponse',
              required: ['execution_optimistic', 'finalized', 'data'],
            }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `Container{slot: Slot, validators: Vector[ValidatorIndex, PTC_SIZE]}` bytes. Use Accept header to choose this response type',
            }),
        },
      },
    },
    400: {
      description:
        'Invalid state ID or slot, pre-Gloas state or slot, or slot outside the PTC window',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Slot is outside the PTC window of the state' },
        },
      },
    },
    404: NotFoundResponse,
    406: NotAcceptableResponse,
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconStatesStateIdRandaoRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/states/{state_id}/randao',
  tags: ['Beacon'],
  summary: 'Get the RANDAO mix for some epoch in a specified state.',
  description:
    "Fetch the RANDAO mix for the requested epoch from the state identified by `state_id`.\n\nIf an epoch is not specified then the RANDAO mix for the state's current epoch will be returned.\n\nBy adjusting the `state_id` parameter you can query for any historic value of the RANDAO mix.\nOrdinarily states from the same epoch will mutate the RANDAO mix for that epoch as blocks are\napplied.\n",
  operationId: 'getStateRandao',
  request: {
    params: z.object({ state_id: StateIdParamsSchema }),
    query: z.object({
      epoch: Uint64Schema.openapi({
        param: {
          name: 'epoch',
          description: "Epoch to fetch the RANDAO mix for. Default: state's current epoch.",
          in: 'query',
          required: false,
          allowEmptyValue: false,
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: z
                .object({
                  randao: RootSchema.openapi({
                    description: 'RANDAO mix for requested epoch in state.',
                  }),
                })
                .openapi({ required: ['randao'] }),
            })
            .openapi({
              title: 'GetStateRandaoResponse',
              required: ['execution_optimistic', 'finalized', 'data'],
            }),
        },
      },
    },
    400: {
      description: 'Invalid state ID or epoch',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: {
            code: 400,
            message: 'Epoch is out of range for the `randao_mixes` of the state',
          },
        },
      },
    },
    404: {
      description: 'State not found',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'State not found' },
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconStatesStateIdPendingConsolidationsRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/states/{state_id}/pending_consolidations',
  tags: ['Beacon'],
  summary: 'Get State Pending Consolidations',
  description:
    "Returns pending consolidations for state with given 'stateId'. Should return 400 if the state retrieved is prior to Electra.\n",
  operationId: 'getPendingConsolidations',
  request: { params: z.object({ state_id: StateIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              version: ConsensusVersionSchema.openapi({ example: 'gloas' }),
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: z.union([GloasPendingConsolidationsSchema, ElectraPendingConsolidationsSchema]),
            })
            .openapi({
              title: 'GetPendingConsolidationsResponse',
              required: ['version', 'execution_optimistic', 'finalized', 'data'],
            }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `List[PendingConsolidation, PENDING_CONSOLIDATIONS_LIMIT]` bytes before Gloas or `ProgressiveList[PendingConsolidation]` bytes from Gloas onwards.',
            }),
        },
      },
      headers: z.object({ 'Eth-Consensus-Version': EthConsensusVersionHeaderSchema }),
    },
    400: InvalidRequestResponse,
    404: NotFoundResponse,
    406: NotAcceptableResponse,
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconStatesStateIdPendingDepositsRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/states/{state_id}/pending_deposits',
  tags: ['Beacon'],
  summary: 'Get State Pending Deposits',
  description:
    "Returns pending deposits for state with given 'stateId'. Should return 400 if the state retrieved is prior to Electra.\n",
  operationId: 'getPendingDeposits',
  request: { params: z.object({ state_id: StateIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              version: ConsensusVersionSchema.openapi({ example: 'gloas' }),
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: z.union([GloasPendingDepositsSchema, ElectraPendingDepositsSchema]),
            })
            .openapi({
              title: 'GetPendingDepositsResponse',
              required: ['version', 'execution_optimistic', 'finalized', 'data'],
            }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `List[PendingDeposit, PENDING_DEPOSITS_LIMIT]` bytes before Gloas or `ProgressiveList[PendingDeposit]` bytes from Gloas onwards.',
            }),
        },
      },
      headers: z.object({ 'Eth-Consensus-Version': EthConsensusVersionHeaderSchema }),
    },
    400: InvalidRequestResponse,
    404: NotFoundResponse,
    406: NotAcceptableResponse,
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconStatesStateIdPendingPartialWithdrawalsRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/states/{state_id}/pending_partial_withdrawals',
  tags: ['Beacon'],
  summary: 'Get State Pending Partial Withdrawals',
  description:
    "Returns pending partial withdrawals for state with given 'stateId'. Should return 400 if the state retrieved is prior to Electra.\n",
  operationId: 'getPendingPartialWithdrawals',
  request: { params: z.object({ state_id: StateIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              version: ConsensusVersionSchema.openapi({ example: 'gloas' }),
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: z.union([
                GloasPendingPartialWithdrawalsSchema,
                ElectraPendingPartialWithdrawalsSchema,
              ]),
            })
            .openapi({
              title: 'GetPendingPartialWithdrawalsResponse',
              required: ['version', 'execution_optimistic', 'finalized', 'data'],
            }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `List[PendingPartialWithdrawal, PENDING_PARTIAL_WITHDRAWALS_LIMIT]` bytes before Gloas or `ProgressiveList[PendingPartialWithdrawal]` bytes from Gloas onwards.',
            }),
        },
      },
      headers: z.object({ 'Eth-Consensus-Version': EthConsensusVersionHeaderSchema }),
    },
    400: InvalidRequestResponse,
    404: NotFoundResponse,
    406: NotAcceptableResponse,
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconStatesStateIdProposerLookaheadRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/states/{state_id}/proposer_lookahead',
  tags: ['Beacon'],
  summary: 'Get State Proposer Lookahead',
  description:
    'Returns [proposer lookahead](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/fulu/beacon-chain.md#new-proposerlookahead) for the state with the given `state_id`.\nShould return 400 if the state retrieved is prior to Fulu.\n',
  operationId: 'getProposerLookahead',
  request: { params: z.object({ state_id: StateIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              version: ConsensusVersionSchema.openapi({ example: 'gloas' }),
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: z.array(Uint64Schema).length(64),
            })
            .openapi({
              title: 'GetProposerLookaheadResponse',
              required: ['version', 'execution_optimistic', 'finalized', 'data'],
            }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `Vector[ValidatorIndex, (MIN_SEED_LOOKAHEAD + 1) * SLOTS_PER_EPOCH]` bytes. Use Accept header to choose this response type',
            }),
        },
      },
      headers: z.object({ 'Eth-Consensus-Version': EthConsensusVersionHeaderSchema }),
    },
    400: InvalidRequestResponse,
    404: NotFoundResponse,
    406: NotAcceptableResponse,
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconStatesStateIdBuilderPendingWithdrawalsRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/states/{state_id}/builder_pending_withdrawals',
  tags: ['Beacon'],
  summary: 'Get State Builder Pending Withdrawals',
  description:
    "Returns pending builder withdrawals for state with given 'stateId'. Should return 400 if the state retrieved is prior to Gloas.\n",
  operationId: 'getBuilderPendingWithdrawals',
  request: { params: z.object({ state_id: StateIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              version: ConsensusVersionSchema.openapi({ example: 'gloas' }),
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: GloasBuilderPendingWithdrawalsSchema,
            })
            .openapi({
              title: 'GetBuilderPendingWithdrawalsResponse',
              required: ['version', 'execution_optimistic', 'finalized', 'data'],
            }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `ProgressiveList[BuilderPendingWithdrawal]` bytes. Use Accept header to choose this response type',
            }),
        },
      },
      headers: z.object({ 'Eth-Consensus-Version': EthConsensusVersionHeaderSchema }),
    },
    400: InvalidRequestResponse,
    404: NotFoundResponse,
    406: NotAcceptableResponse,
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconStatesStateIdBuilderPendingPaymentsRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/states/{state_id}/builder_pending_payments',
  tags: ['Beacon'],
  summary: 'Get State Builder Pending Payments',
  description:
    "Returns pending builder payments for state with given 'stateId'. Should return 400 if the state retrieved is prior to Gloas.\n",
  operationId: 'getBuilderPendingPayments',
  request: { params: z.object({ state_id: StateIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              version: ConsensusVersionSchema.openapi({ example: 'gloas' }),
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: GloasBuilderPendingPaymentsSchema,
            })
            .openapi({
              title: 'GetBuilderPendingPaymentsResponse',
              required: ['version', 'execution_optimistic', 'finalized', 'data'],
            }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `Vector[BuilderPendingPayment, 2 * SLOTS_PER_EPOCH]` bytes. Use Accept header to choose this response type',
            }),
        },
      },
      headers: z.object({ 'Eth-Consensus-Version': EthConsensusVersionHeaderSchema }),
    },
    400: InvalidRequestResponse,
    404: NotFoundResponse,
    406: NotAcceptableResponse,
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconHeadersRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/headers',
  tags: ['Beacon'],
  summary: 'Get block headers',
  description:
    'Retrieves block headers matching given query. By default it will fetch current head slot blocks.',
  operationId: 'getBlockHeaders',
  request: {
    query: z.object({
      slot: Uint64Schema.openapi({
        param: {
          name: 'slot',
          in: 'query',
          required: false,
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }).exactOptional(),
      parent_root: RootSchema.openapi({
        param: {
          name: 'parent_root',
          in: 'query',
          required: false,
          schema: { $ref: '#/components/schemas/Root' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: z.array(
                z
                  .object({
                    root: RootSchema,
                    canonical: z.boolean(),
                    header: Phase0SignedBeaconBlockHeaderSchema,
                  })
                  .openapi({ required: ['root', 'canonical', 'header'] }),
              ),
            })
            .openapi({
              title: 'GetBlockHeadersResponse',
              required: ['execution_optimistic', 'finalized', 'data'],
            }),
        },
      },
    },
    400: {
      description: 'The slot or parent root supplied could not be parsed',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid slot: current' },
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconHeadersBlockIdRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/headers/{block_id}',
  tags: ['Beacon'],
  summary: 'Get block header',
  description: 'Retrieves block header for given block id.',
  operationId: 'getBlockHeader',
  request: { params: z.object({ block_id: BlockIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: z
                .object({
                  root: RootSchema,
                  canonical: z.boolean(),
                  header: Phase0SignedBeaconBlockHeaderSchema,
                })
                .openapi({ required: ['root', 'canonical', 'header'] }),
            })
            .openapi({
              title: 'GetBlockHeaderResponse',
              required: ['execution_optimistic', 'finalized', 'data'],
            }),
        },
      },
    },
    400: {
      description: 'The block ID supplied could not be parsed',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid block ID: current' },
        },
      },
    },
    404: {
      description: 'Block not found',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'Block not found' },
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const postEthV2BeaconBlindedBlocksRoute = createRoute({
  method: 'post',
  path: '/eth/v2/beacon/blinded_blocks',
  tags: ['Beacon', 'ValidatorRequiredApi'],
  summary: 'Publish a signed block.',
  description:
    'Instructs the beacon node to use the components of the `SignedBlindedBeaconBlock` to construct and publish a \n`SignedBeaconBlock` by swapping out the `transactions_root` for the corresponding full list of `transactions`.\nThe beacon node should broadcast a newly constructed `SignedBeaconBlock` to the beacon network,\nto be included in the beacon chain. The beacon node is not required to validate the signed\n`BeaconBlock`, and a successful response (20X) only indicates that the broadcast has been\nsuccessful. The beacon node is expected to integrate the new block into its state, and\ntherefore validate the block internally, however blocks which fail the validation are still\nbroadcast but a different status code is returned (202). Before Bellatrix, this endpoint will accept \na `SignedBeaconBlock`. The broadcast behaviour may be adjusted via the `broadcast_validation`\nquery parameter.\n\nThis endpoint only supports forks through Fulu. Gloas blocks do not have a blinded form and\nMUST be published through `POST /eth/v2/beacon/blocks`.\n',
  operationId: 'publishBlindedBlockV2',
  request: {
    query: z.object({
      broadcast_validation: BroadcastValidationSchema.openapi({
        param: {
          name: 'broadcast_validation',
          in: 'query',
          required: false,
          description:
            'Level of validation that must be applied to a block before it is broadcast.\n\nPossible values:\n- **`gossip`** (default): lightweight gossip checks only\n- **`consensus`**: full consensus checks, including validation of all signatures and\n  blocks fields _except_ for the execution payload transactions.\n- **`consensus_and_equivocation`**: the same as `consensus`, with an extra equivocation\n  check immediately before the block is broadcast. If the block is found to be an\n  equivocation it fails validation.\n\nIf the block fails the requested level of a validation a 400 status MUST be returned\nimmediately and the block MUST NOT be broadcast to the network.\n\nIf validation succeeds, the block must still be fully verified before it is\nincorporated into the state and a 20x status is returned to the caller.\n',
          schema: { $ref: '#/components/schemas/BroadcastValidation' },
        },
      }).exactOptional(),
    }),
    headers: z.object({
      'Eth-Consensus-Version': z
        .enum(['phase0', 'altair', 'bellatrix', 'capella', 'deneb', 'electra', 'fulu'])
        .openapi({
          param: {
            in: 'header',
            schema: {
              type: 'string',
              enum: ['phase0', 'altair', 'bellatrix', 'capella', 'deneb', 'electra', 'fulu'],
              example: 'fulu',
            },
            required: true,
            name: 'Eth-Consensus-Version',
            description: 'The active consensus version to which the block being submitted belongs.',
          },
          example: 'fulu',
        }),
    }),
    body: {
      description:
        'The `SignedBlindedBeaconBlock` object composed of `BlindedBeaconBlock` object (produced by beacon node) and validator signature.',
      content: {
        'application/json': {
          schema: z.union([
            ElectraSignedBlindedBeaconBlockSchema,
            DenebSignedBlindedBeaconBlockSchema,
            CapellaSignedBlindedBeaconBlockSchema,
            BellatrixSignedBlindedBeaconBlockSchema,
            AltairSignedBeaconBlockSchema,
            Phase0SignedBeaconBlockSchema,
          ]),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized block bytes. Use content type header to indicate that SSZ data is contained in the request body.',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        "The block was validated successfully and has been broadcast. It has also been integrated into the beacon node's database.",
    },
    202: {
      description:
        "The block failed validation, but was successfully broadcast anyway. It was not integrated into the beacon node's database.",
    },
    400: {
      description:
        'The `SignedBlindedBeaconBlock` object is invalid or broadcast validation failed',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid block: missing signature' },
        },
      },
    },
    415: UnsupportedMediaTypeResponse,
    500: InternalErrorResponse,
    503: CurrentlySyncingResponse,
  },
  deprecated: true,
})

export const postEthV2BeaconBlocksRoute = createRoute({
  method: 'post',
  path: '/eth/v2/beacon/blocks',
  tags: ['Beacon', 'ValidatorRequiredApi'],
  summary: 'Publish a signed block.',
  description:
    'Instructs the beacon node to broadcast a newly signed beacon block to the beacon network,\nto be included in the beacon chain. A success response (20x) indicates that the block\npassed gossip validation and was successfully broadcast onto the network.\nThe beacon node is also expected to integrate the block into the state, but may broadcast it\nbefore doing so, so as to aid timely delivery of the block. Should the block fail full\nvalidation, a separate success response code (202) is used to indicate that the block was\nsuccessfully broadcast but failed integration. For Deneb/Electra/Fulu, this additionally instructs\nthe beacon node to broadcast all given blobs. For Gloas and later, blobs are broadcast as part\nof the `ExecutionPayloadEnvelope` and are not submitted with the block. The broadcast behaviour\nmay be adjusted via the `broadcast_validation` query parameter.\n',
  operationId: 'publishBlockV2',
  request: {
    query: z.object({
      broadcast_validation: BroadcastValidationSchema.openapi({
        param: {
          name: 'broadcast_validation',
          in: 'query',
          required: false,
          description:
            'Level of validation that must be applied to a block before it is broadcast.\n\nPossible values:\n- **`gossip`** (default): lightweight gossip checks only\n- **`consensus`**: full consensus checks, including validation of all signatures and\n  blocks fields _except_ for the execution payload transactions.\n- **`consensus_and_equivocation`**: the same as `consensus`, with an extra equivocation\n  check immediately before the block is broadcast. If the block is found to be an\n  equivocation it fails validation.\n\nIf the block fails the requested level of a validation a 400 status MUST be returned\nimmediately and the block MUST NOT be broadcast to the network.\n\nIf validation succeeds, the block must still be fully verified before it is\nincorporated into the state and a 20x status is returned to the caller.\n',
          schema: { $ref: '#/components/schemas/BroadcastValidation' },
        },
      }).exactOptional(),
    }),
    headers: z.object({
      'Eth-Consensus-Version': ConsensusVersionSchema.openapi({
        param: {
          in: 'header',
          schema: { $ref: '#/components/schemas/ConsensusVersion' },
          required: true,
          name: 'Eth-Consensus-Version',
          description: 'The active consensus version to which the block being submitted belongs.',
        },
      }),
      'Eth-Builder-Url': z
        .url()
        .exactOptional()
        .openapi({
          param: {
            name: 'Eth-Builder-Url',
            in: 'header',
            required: false,
            description:
              'The `url` of the winning builder, as returned by `POST /eth/v4/validator/blocks/{slot}`.\nWhen that endpoint returns this header the validator client MUST echo it here, so the beacon\nnode can forward the signed block to the same builder and the builder can release the\npayload without waiting for gossip. The echo is what lets a beacon node that did not serve\nthe block-production request still forward it. Omitted for a self-built block or a block won\nby a p2p bid.\n\nThe URL is untrusted input and a server-side request forgery (SSRF) risk: the beacon\nnode issues only the builder-API `submitSignedBeaconBlock` request to it, over http(s),\nand MUST NOT follow redirects. Deployments serving callers beyond their own validator\nclients SHOULD also reject URLs that resolve to private address space, since a caller\ncan otherwise use the forwarded request to reach internal endpoints.\n',
            schema: { type: 'string', format: 'uri', example: 'https://builder.example.com' },
          },
          example: 'https://builder.example.com',
        }),
    }),
    body: {
      description:
        'The `SignedBeaconBlock` object composed of `BeaconBlock` object (produced by beacon node) and validator signature.',
      content: {
        'application/json': {
          schema: z.union([
            GloasSignedBeaconBlockSchema,
            FuluSignedBlockContentsSchema,
            ElectraSignedBlockContentsSchema,
            DenebSignedBlockContentsSchema,
            CapellaSignedBeaconBlockSchema,
            BellatrixSignedBeaconBlockSchema,
            AltairSignedBeaconBlockSchema,
            Phase0SignedBeaconBlockSchema,
          ]),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized block bytes. Use content type header to indicate that SSZ data is contained in the request body.',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        "The block was validated successfully and has been broadcast. It has also been integrated into the beacon node's database.",
    },
    202: {
      description:
        "The block could not be integrated into the beacon node's database as it failed validation, but was successfully broadcast.",
    },
    400: {
      description: 'The `SignedBeaconBlock` object is invalid or broadcast validation failed',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid block: missing signature' },
        },
      },
    },
    415: UnsupportedMediaTypeResponse,
    500: InternalErrorResponse,
    503: CurrentlySyncingResponse,
  },
})

export const postEthV1BeaconExecutionPayloadBidsRoute = createRoute({
  method: 'post',
  path: '/eth/v1/beacon/execution_payload_bids',
  tags: ['Beacon'],
  summary: 'Publish signed execution payload bid',
  description:
    'Instructs the beacon node to broadcast a signed execution payload bid to the network,\nto be gossiped for potential inclusion in block building. The beacon node SHOULD run gossip\nvalidation on the bid before broadcasting it, but MAY skip validation for bids submitted by a\nlocally configured builder to reduce publishing latency. A success response (20x) indicates\nthat the bid was successfully broadcast onto the network.\n',
  operationId: 'publishExecutionPayloadBid',
  request: {
    headers: z.object({
      'Eth-Consensus-Version': ConsensusVersionSchema.openapi({
        param: {
          in: 'header',
          schema: { $ref: '#/components/schemas/ConsensusVersion' },
          required: true,
          name: 'Eth-Consensus-Version',
          description:
            'The active consensus version to which the execution payload bid being submitted belongs.',
        },
      }),
    }),
    body: {
      description: 'The `SignedExecutionPayloadBid` object to be broadcast.',
      content: {
        'application/json': { schema: GloasSignedExecutionPayloadBidSchema },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `SignedExecutionPayloadBid` bytes. Use Content-Type header to specify this format',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'The bid has been broadcast.' },
    400: {
      description: 'The `SignedExecutionPayloadBid` object is invalid or failed gossip validation',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid signed execution payload bid' },
        },
      },
    },
    415: UnsupportedMediaTypeResponse,
    500: InternalErrorResponse,
  },
})

export const postEthV1BeaconExecutionPayloadEnvelopesRoute = createRoute({
  method: 'post',
  path: '/eth/v1/beacon/execution_payload_envelopes',
  tags: ['Beacon', 'ValidatorRequiredApi'],
  summary: 'Publish signed execution payload envelope',
  description:
    'Instructs the beacon node to broadcast a signed execution payload envelope to the network,\nto be gossiped for payload validation. A success response (20x) indicates\nthat the envelope passed gossip validation and was successfully broadcast onto the network.\nThe beacon node is also expected to integrate the envelope into the state, but may broadcast it\nbefore doing so, so as to aid timely delivery of the envelope. Should the envelope fail full\nvalidation, a separate success response code (202) is used to indicate that the envelope was\nsuccessfully broadcast but failed integration. The broadcast behaviour may be adjusted via\nthe `broadcast_validation` query parameter.\n\nThe request body can be either form, distinguished by the `Eth-Blob-Data-Included`\nheader:\n- A `SignedExecutionPayloadEnvelopeContents` object (header `true`) containing the signed\n  envelope along with blobs and KZG proofs. This is used in stateless operation (multi-BN\n  setups, distributed validators, failover) where the receiving beacon node does not have\n  the blobs cached.\n- A `SignedExecutionPayloadEnvelope` object (header `false`) containing only the signed\n  envelope. This is used in stateful operation where the beacon node has the blobs and\n  KZG proofs cached from block production and attaches them before broadcasting.\n',
  operationId: 'publishExecutionPayloadEnvelope',
  request: {
    query: z.object({
      broadcast_validation: BroadcastValidationSchema.openapi({
        param: {
          name: 'broadcast_validation',
          in: 'query',
          required: false,
          description:
            "Level of validation that must be applied to an envelope before it is broadcast.\n\nPossible values:\n- **`gossip`** (default): lightweight gossip checks only\n- **`consensus`**: full consensus checks, including validation of all signatures and\n  envelope fields.\n- **`consensus_and_equivocation`**: the same as `consensus`, with an extra check that\n  the envelope's beacon block is not an equivocation. If the block is found to be an\n  equivocation, validation fails. This is recommended for builders to protect against\n  unbundling attacks where a malicious proposer publishes equivocating blocks to extract\n  payload contents from honest builders.\n\nIf the envelope fails the requested level of validation, a 400 status MUST be returned\nimmediately and the envelope MUST NOT be broadcast to the network.\n\nIf validation succeeds, the envelope must still be fully verified before it is\nincorporated into the state and a 20x status is returned to the caller.\n",
          schema: { $ref: '#/components/schemas/BroadcastValidation' },
        },
      }).exactOptional(),
    }),
    headers: z.object({
      'Eth-Consensus-Version': ConsensusVersionSchema.openapi({
        param: {
          in: 'header',
          schema: { $ref: '#/components/schemas/ConsensusVersion' },
          required: true,
          name: 'Eth-Consensus-Version',
          description:
            'The active consensus version to which the execution payload envelope being submitted belongs.',
        },
      }),
      'Eth-Blob-Data-Included': z
        .stringbool()
        .openapi({
          param: {
            in: 'header',
            name: 'Eth-Blob-Data-Included',
            required: true,
            schema: { type: 'boolean' },
            description:
              'Indicates which body schema is submitted. When `true`, the body is a\n`SignedExecutionPayloadEnvelopeContents` (signed envelope plus blobs and KZG proofs,\nstateless flow). When `false`, the body is a `SignedExecutionPayloadEnvelope`\n(signed envelope only, stateful flow; the beacon node must have cached the blobs\nand KZG proofs from block production).\n',
          },
        }),
    }),
    body: {
      description:
        'The `SignedExecutionPayloadEnvelopeContents` or `SignedExecutionPayloadEnvelope` object to be broadcast, selected via the `Eth-Blob-Data-Included` header.',
      content: {
        'application/json': {
          schema: z.union([
            GloasSignedExecutionPayloadEnvelopeContentsSchema,
            GloasSignedExecutionPayloadEnvelopeSchema,
          ]),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `SignedExecutionPayloadEnvelopeContents` or `SignedExecutionPayloadEnvelope` bytes. Use the `Eth-Blob-Data-Included` header to select the schema.',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        "The envelope was validated successfully and has been broadcast. It has also been integrated into the beacon node's database.",
    },
    202: {
      description:
        "The envelope could not be integrated into the beacon node's database as it failed validation, but was successfully broadcast.",
    },
    400: {
      description:
        'The signed envelope object is invalid, broadcast validation failed, or an envelope\nwithout blob data was submitted but the beacon node has no cached blobs and KZG\nproofs to attach (e.g. because block production happened on a different beacon node).\n',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid signed execution payload envelope' },
        },
      },
    },
    415: UnsupportedMediaTypeResponse,
    500: InternalErrorResponse,
    503: CurrentlySyncingResponse,
  },
})

export const getEthV1BeaconExecutionPayloadEnvelopesBlockIdRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/execution_payload_envelopes/{block_id}',
  tags: ['Beacon'],
  summary: 'Get signed execution payload envelope',
  description:
    'Retrieves signed execution payload envelope for a given block id.\nDepending on `Accept` header it can be returned either as json or as bytes serialized by SSZ.\n',
  operationId: 'getSignedExecutionPayloadEnvelope',
  request: { params: z.object({ block_id: BlockIdParamsSchema }) },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z.literal('gloas').openapi({ example: 'gloas' }),
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: GloasSignedExecutionPayloadEnvelopeSchema,
            })
            .openapi({
              title: 'GetExecutionPayloadEnvelopeResponse',
              required: ['version', 'execution_optimistic', 'finalized', 'data'],
            }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `SignedExecutionPayloadEnvelope` bytes. Use Accept header to choose this response type',
            }),
        },
      },
      headers: z.object({ 'Eth-Consensus-Version': EthConsensusVersionHeaderSchema }),
    },
    400: {
      description: 'The block ID supplied could not be parsed',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid block ID: current' },
        },
      },
    },
    404: {
      description: 'Execution payload envelope not found',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'Execution payload envelope not found' },
        },
      },
    },
    406: NotAcceptableResponse,
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconProposerPreferencesRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/proposer_preferences',
  tags: ['Beacon'],
  summary: 'Get signed proposer preferences',
  description:
    'Retrieves signed proposer preferences known by the node for upcoming proposal slots.\n\nSigned proposer preferences are only broadcast once per proposal slot and dependent root.\nThis allows builders to retrieve the ones that were broadcast before they subscribed to the\n`proposer_preferences` event.\n',
  operationId: 'getProposerPreferences',
  request: {
    query: z.object({
      slot: Uint64Schema.openapi({
        param: {
          name: 'slot',
          in: 'query',
          required: false,
          description: 'Only return signed proposer preferences for this proposal slot.',
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }).exactOptional(),
      dependent_root: RootSchema.openapi({
        param: {
          name: 'dependent_root',
          in: 'query',
          required: false,
          description: 'Only return signed proposer preferences with this dependent root.',
          schema: { $ref: '#/components/schemas/Root' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z.literal('gloas').openapi({ example: 'gloas' }),
              data: z.array(GloasSignedProposerPreferencesSchema),
            })
            .openapi({ title: 'GetProposerPreferencesResponse', required: ['version', 'data'] }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `ProgressiveList[SignedProposerPreferences]` bytes. Use Accept header to choose this response type',
            }),
        },
      },
      headers: z.object({ 'Eth-Consensus-Version': EthConsensusVersionHeaderSchema }),
    },
    400: {
      description: 'The slot or dependent root could not be parsed',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid slot parameter' },
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV2BeaconBlocksBlockIdRoute = createRoute({
  method: 'get',
  path: '/eth/v2/beacon/blocks/{block_id}',
  tags: ['Beacon'],
  summary: 'Get block',
  description:
    'Retrieves block details for given block id.\nDepending on `Accept` header it can be returned either as json or as bytes serialized by SSZ\n',
  operationId: 'getBlockV2',
  request: { params: z.object({ block_id: BlockIdParamsSchema }) },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z
                .enum([
                  'phase0',
                  'altair',
                  'bellatrix',
                  'capella',
                  'deneb',
                  'electra',
                  'fulu',
                  'gloas',
                ])
                .openapi({ example: 'gloas' }),
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: z.union([
                GloasSignedBeaconBlockSchema,
                ElectraSignedBeaconBlockSchema,
                DenebSignedBeaconBlockSchema,
                CapellaSignedBeaconBlockSchema,
                BellatrixSignedBeaconBlockSchema,
                AltairSignedBeaconBlockSchema,
                Phase0SignedBeaconBlockSchema,
              ]),
            })
            .openapi({
              title: 'GetBlockV2Response',
              required: ['version', 'execution_optimistic', 'finalized', 'data'],
            }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized block bytes. Use Accept header to choose this response type',
            }),
        },
      },
      headers: z.object({ 'Eth-Consensus-Version': EthConsensusVersionHeaderSchema }),
    },
    400: {
      description: 'The block ID supplied could not be parsed',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid block ID: current' },
        },
      },
    },
    404: {
      description: 'Block not found',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'Block not found' },
        },
      },
    },
    406: NotAcceptableResponse,
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconBlocksBlockIdRootRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/blocks/{block_id}/root',
  tags: ['Beacon'],
  summary: 'Get block root',
  description: 'Retrieves hashTreeRoot of BeaconBlock/BeaconBlockHeader',
  operationId: 'getBlockRoot',
  request: {
    params: z.object({
      block_id: z
        .string()
        .openapi({
          param: {
            name: 'block_id',
            in: 'path',
            required: true,
            example: 'head',
            schema: { type: 'string' },
            description:
              'Block identifier.\nCan be one of: "head" (canonical head in node\'s view), "genesis", "finalized", \\<slot\\>, \\<hex encoded blockRoot with 0x prefix\\>.\n',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: z
                .object({
                  root: RootSchema.openapi({
                    description: 'HashTreeRoot of BeaconBlock/BeaconBlockHeader object',
                  }),
                })
                .openapi({ required: ['root'] }),
            })
            .openapi({
              title: 'GetBlockRootResponse',
              required: ['execution_optimistic', 'finalized', 'data'],
            }),
        },
      },
    },
    400: {
      description: 'The block ID supplied could not be parsed',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid block ID: current' },
        },
      },
    },
    404: {
      description: 'Block not found',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'Block not found' },
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV2BeaconBlocksBlockIdAttestationsRoute = createRoute({
  method: 'get',
  path: '/eth/v2/beacon/blocks/{block_id}/attestations',
  tags: ['Beacon'],
  summary: 'Get block attestations',
  description: 'Retrieves attestation included in requested block.',
  operationId: 'getBlockAttestationsV2',
  request: { params: z.object({ block_id: BlockIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z
                .enum([
                  'phase0',
                  'altair',
                  'bellatrix',
                  'capella',
                  'deneb',
                  'electra',
                  'fulu',
                  'gloas',
                ])
                .openapi({ example: 'gloas' }),
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: z.union([
                z.array(GloasAttestationSchema),
                z.array(ElectraAttestationSchema),
                z.array(Phase0AttestationSchema),
              ]),
            })
            .openapi({
              title: 'GetBlockAttestationsV2Response',
              required: ['version', 'execution_optimistic', 'finalized', 'data'],
            }),
        },
      },
      headers: z.object({ 'Eth-Consensus-Version': EthConsensusVersionHeaderSchema }),
    },
    400: {
      description: 'The block ID supplied could not be parsed',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid block ID: current' },
        },
      },
    },
    404: {
      description: 'Block not found',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'Block not found' },
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconBlobsBlockIdRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/blobs/{block_id}',
  tags: ['Beacon'],
  summary: 'Get blobs',
  description:
    'Retrieves blobs for a given block id.\nDepending on `Accept` header it can be returned either as json or as bytes serialized by SSZ.\n\nIf the `versioned_hashes` parameter is specified, only the blobs for the specified versioned hashes will be returned. Blobs are \nreturned as an ordered list matching the order of their corresponding KZG commitments in the block.\n\nAfter the Fulu fork, only supernodes (which custody all data columns) are required to return blobs. Clients may implement\nblob reconstruction logic for non-super nodes.\n',
  operationId: 'getBlobs',
  request: {
    params: z.object({ block_id: BlockIdParamsSchema }),
    query: z.object({
      versioned_hashes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(VersionedHashSchema).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'versioned_hashes',
            in: 'query',
            description:
              'Array of versioned hashes for blobs to request for in the specified block. Returns all blobs in the block if not specified.',
            required: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: { $ref: '#/components/schemas/VersionedHash' },
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: BlobsSchema,
            })
            .openapi({
              title: 'GetBlobsResponse',
              required: ['execution_optimistic', 'finalized', 'data'],
            }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `List[Blob, MAX_BLOB_COMMITMENTS_PER_BLOCK]` bytes. Use Accept header to choose this response type',
            }),
        },
      },
    },
    400: {
      description: 'The block ID supplied could not be parsed',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid block ID: current' },
        },
      },
    },
    404: {
      description: 'Block not found',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'Block not found' },
        },
      },
    },
    406: NotAcceptableResponse,
    500: InternalErrorResponse,
  },
})

export const getEthV1DebugBeaconDataColumnSidecarsBlockIdRoute = createRoute({
  method: 'get',
  path: '/eth/v1/debug/beacon/data_column_sidecars/{block_id}',
  tags: ['Debug'],
  summary: 'Get data column sidecars',
  description:
    'Retrieves data column sidecars for a given block id.\nDepending on `Accept` header it can be returned either as json or as bytes serialized by SSZ.\n\nIf the `indices` parameter is specified, only the data column sidecars with the specified indices will be returned. There are no guarantees\nfor the returned data column sidecars in terms of ordering.\n',
  operationId: 'getDebugDataColumnSidecars',
  request: {
    params: z.object({ block_id: BlockIdParamsSchema }),
    query: z.object({
      indices: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(Uint64Schema).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'indices',
            in: 'query',
            description:
              'Array of indices for data column sidecars to request for in the specified block. This endpoint will only return columns that the node is actually custodying. If not specified, returns all data column sidecars that this node is custodying in the block.',
            required: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: { $ref: '#/components/schemas/Uint64' },
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z.enum(['fulu', 'gloas']).openapi({ example: 'gloas' }),
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: z.union([GloasDataColumnSidecarsSchema, FuluDataColumnSidecarsSchema]),
            })
            .openapi({
              title: 'GetDebugDataColumnSidecarsResponse',
              required: ['version', 'execution_optimistic', 'finalized', 'data'],
            }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `List[DataColumnSidecar, NUMBER_OF_COLUMNS]` bytes. Use Accept header to choose this response type',
            }),
        },
      },
      headers: z.object({ 'Eth-Consensus-Version': EthConsensusVersionHeaderSchema }),
    },
    400: {
      description: 'The block ID supplied could not be parsed',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid block ID: current' },
        },
      },
    },
    404: {
      description: 'Block not found',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'Block not found' },
        },
      },
    },
    406: NotAcceptableResponse,
    500: InternalErrorResponse,
  },
})

export const postEthV1BeaconRewardsSyncCommitteeBlockIdRoute = createRoute({
  method: 'post',
  path: '/eth/v1/beacon/rewards/sync_committee/{block_id}',
  tags: ['Beacon', 'Rewards'],
  summary: 'Get sync committee rewards',
  description:
    'Retrieves rewards info for sync committee members specified by array of public keys or validator index. If no array is provided, return reward info for every committee member.',
  operationId: 'getSyncCommitteeRewards',
  request: {
    params: z.object({ block_id: BlockIdParamsSchema }),
    body: {
      description:
        'An array of either hex encoded public key (any bytes48 with 0x prefix) or validator index',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .string()
                .openapi({
                  description:
                    'Either hex encoded public key (any bytes48 with 0x prefix) or validator index',
                }),
            )
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: SyncCommitteeRewardsSchema,
            })
            .openapi({
              title: 'GetSyncCommitteeRewardsResponse',
              required: ['execution_optimistic', 'finalized', 'data'],
            }),
        },
      },
    },
    400: {
      description: 'Invalid get sync committee rewards request',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          examples: {
            InvalidRequest: {
              value: {
                code: 400,
                message: 'Invalid request to retrieve sync committee rewards info',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Block not found',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'Block not found' },
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconRewardsBlocksBlockIdRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/rewards/blocks/{block_id}',
  tags: ['Beacon', 'Rewards'],
  summary: 'Get block rewards',
  description:
    'Retrieve block reward info for a single block. The rewards value is the sum\nof values of the proposer rewards from attestations, sync committees and\nslashings included in the proposal.\n',
  operationId: 'getBlockRewards',
  request: { params: z.object({ block_id: BlockIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: BlockRewardsSchema,
            })
            .openapi({
              title: 'GetBlockRewardsResponse',
              required: ['execution_optimistic', 'finalized', 'data'],
            }),
        },
      },
    },
    400: {
      description: 'Invalid get block rewards request',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          examples: {
            InvalidRequest: {
              value: { code: 400, message: 'Invalid request to retrieve block rewards info' },
            },
          },
        },
      },
    },
    404: {
      description: 'Block or required state not found',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          examples: {
            InvalidRequest: { value: { code: 404, message: 'Block or required state not found' } },
          },
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const postEthV1BeaconRewardsAttestationsEpochRoute = createRoute({
  method: 'post',
  path: '/eth/v1/beacon/rewards/attestations/{epoch}',
  tags: ['Beacon', 'Rewards'],
  summary: 'Get attestations rewards',
  description:
    'Retrieve attestation reward info for validators specified by array of public keys or validator index. If no array is provided, return reward info for every validator.',
  operationId: 'getAttestationsRewards',
  request: {
    params: z.object({
      epoch: Uint64Schema.openapi({
        param: {
          name: 'epoch',
          in: 'path',
          required: true,
          description: 'The epoch to get rewards info from',
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }),
    }),
    body: {
      description:
        'An array of either hex encoded public key (any bytes48 with 0x prefix) or validator index',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .string()
                .openapi({
                  description:
                    'Either hex encoded public key (any bytes48 with 0x prefix) or validator index',
                }),
            )
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: AttestationsRewardsSchema,
            })
            .openapi({
              title: 'GetAttestationsRewardsResponse',
              required: ['execution_optimistic', 'finalized', 'data'],
            }),
        },
      },
    },
    400: {
      description: 'Invalid get attestations rewards request',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          examples: {
            InvalidRequest: {
              value: {
                code: 400,
                message: 'Invalid request to retrieve attestations rewards info',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Epoch not known or required data not available',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          examples: {
            InvalidRequest: {
              value: { code: 404, message: 'Epoch not known or required data not available' },
            },
          },
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconBlindedBlocksBlockIdRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/blinded_blocks/{block_id}',
  tags: ['Beacon'],
  summary: 'Get blinded block',
  description:
    'Retrieves blinded block for given block ID.\nDepending on `Accept` header it can be returned either as JSON or as bytes serialized by SSZ.\n\nThis endpoint only supports forks through Fulu. Gloas blocks do not have a blinded form.\nUse `GET /eth/v2/beacon/blocks/{block_id}` instead.\n',
  operationId: 'getBlindedBlock',
  request: { params: z.object({ block_id: BlockIdParamsSchema }) },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z
                .enum(['phase0', 'altair', 'bellatrix', 'capella', 'deneb', 'electra', 'fulu'])
                .openapi({ example: 'fulu' }),
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: z.union([
                ElectraSignedBlindedBeaconBlockSchema,
                DenebSignedBlindedBeaconBlockSchema,
                CapellaSignedBlindedBeaconBlockSchema,
                BellatrixSignedBlindedBeaconBlockSchema,
                AltairSignedBeaconBlockSchema,
                Phase0SignedBeaconBlockSchema,
              ]),
            })
            .openapi({
              title: 'GetBlindedBlockResponse',
              required: ['version', 'execution_optimistic', 'finalized', 'data'],
            }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized block bytes. Use Accept header to choose this response type',
            }),
        },
      },
      headers: z.object({ 'Eth-Consensus-Version': EthConsensusVersionHeaderSchema }),
    },
    400: {
      description: 'The block ID supplied could not be parsed',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid block ID: current' },
        },
      },
    },
    404: {
      description: 'Block not found',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'Block not found' },
        },
      },
    },
    406: NotAcceptableResponse,
    500: InternalErrorResponse,
  },
  deprecated: true,
})

export const getEthV1BeaconLightClientBootstrapBlockRootRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/light_client/bootstrap/{block_root}',
  tags: ['Beacon'],
  summary: 'Get `LightClientBootstrap` structure for a requested block root',
  description:
    "Requests the [`LightClientBootstrap`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/altair/light-client/sync-protocol.md#lightclientbootstrap) structure corresponding to a given post-Altair beacon block root.\nDepending on the `Accept` header it can be returned either as JSON or SSZ-serialized bytes.\n\nServers SHOULD provide results as defined in [`create_light_client_bootstrap`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/altair/light-client/full-node.md#create_light_client_bootstrap). To fulfill a request, the requested block's post state needs to be known.\n",
  operationId: 'getLightClientBootstrap',
  request: { params: z.object({ block_root: BlockRootParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              version: ConsensusVersionSchema,
              data: z.union([
                GloasLightClientBootstrapSchema,
                ElectraLightClientBootstrapSchema,
                DenebLightClientBootstrapSchema,
                CapellaLightClientBootstrapSchema,
                AltairLightClientBootstrapSchema,
              ]),
            })
            .openapi({ title: 'GetLightClientBootstrapResponse', required: ['version', 'data'] }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `LightClientBootstrap` bytes. Use Accept header to choose this response type',
            }),
        },
      },
      headers: z.object({ 'Eth-Consensus-Version': EthConsensusVersionHeaderSchema }),
    },
    400: {
      description: 'Malformed request parameter',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid block root value' },
        },
      },
    },
    404: {
      description: '`LightClientBootstrap` instance cannot be produced for the given block root',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'LC bootstrap unavailable' },
        },
      },
    },
    406: NotAcceptableResponse,
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconLightClientUpdatesRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/light_client/updates',
  tags: ['Beacon'],
  summary: 'Get `LightClientUpdate` instances in a requested sync committee period range',
  description:
    'Requests the [`LightClientUpdate`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/altair/light-client/sync-protocol.md#lightclientupdate) instances in the sync committee period range `[start_period, start_period + count)`, leading up to the current head sync committee period as selected by fork choice.\nDepending on the `Accept` header they can be returned either as JSON or SSZ-serialized bytes.\n\nServers SHOULD provide results as defined in [`create_light_client_update`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/altair/light-client/full-node.md#create_light_client_update). They MUST respond with at least the earliest known result within the requested range, and MUST send results in consecutive order (by period). The response MUST NOT contain more than [`min(MAX_REQUEST_LIGHT_CLIENT_UPDATES, count)`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/altair/light-client/p2p-interface.md#configuration) results.\n',
  operationId: 'getLightClientUpdatesByRange',
  request: {
    query: z.object({
      start_period: Uint64Schema.openapi({
        param: {
          name: 'start_period',
          in: 'query',
          required: true,
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }),
      count: Uint64Schema.openapi({
        param: {
          name: 'count',
          in: 'query',
          required: true,
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  version: ConsensusVersionSchema,
                  data: z.union([
                    GloasLightClientUpdateSchema,
                    ElectraLightClientUpdateSchema,
                    DenebLightClientUpdateSchema,
                    CapellaLightClientUpdateSchema,
                    AltairLightClientUpdateSchema,
                  ]),
                })
                .openapi({ required: ['version', 'data'] }),
            )
            .openapi({ title: 'GetLightClientUpdatesByRangeResponse' }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'Sequence of zero or more `response_chunk`. Each _successful_ `response_chunk` MUST contain a single `LightClientUpdate` payload:\n```\n(\n  response_chunk_len: Little-endian Uint64 byte length of `response_chunk`\n  response_chunk: (\n    context: 4 byte `ForkDigest`\n    payload: SSZ serialized payload bytes\n  )\n)\n```\nUse Accept header to choose this response type\n\nFor each `response_chunk`, a `ForkDigest`-context based on `compute_fork_version(compute_epoch_at_slot(update.attested_header.beacon.slot))` is used to select the fork namespace of the Response type. Note that this `fork_version` may be different from the one used to verify the `update.sync_aggregate`, which is based on `update.signature_slot`.\n\nPer `context = compute_fork_digest(fork_version, genesis_validators_root)`:\n\n| `fork_version`                                                      | Response chunk SSZ type               |\n| ------------------------------------------------------------------- | ------------------------------------- |\n| `GENESIS_FORK_VERSION`                                              | n/a                                   |\n| <nobr>`ALTAIR_FORK_VERSION` through `BELLATRIX_FORK_VERSION`</nobr> | `altair.LightClientUpdate`            |\n| <nobr>`CAPELLA_FORK_VERSION` </nobr>                                | `capella.LightClientUpdate`           |\n| <nobr>`DENEB_FORK_VERSION` </nobr>                                  | `deneb.LightClientUpdate`             |\n| <nobr>`ELECTRA_FORK_VERSION` through `FULU_FORK_VERSION`</nobr>     | `electra.LightClientUpdate`           |\n| <nobr>`GLOAS_FORK_VERSION` and later</nobr>                         | `gloas.LightClientUpdate`             |\n',
            }),
        },
      },
    },
    400: {
      description: 'Malformed or missing request parameter',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          examples: {
            InvalidSyncPeriod: {
              value: { code: 400, message: 'Invalid sync committee period requested' },
            },
            InvalidCount: { value: { code: 400, message: 'Invalid count requested' } },
            MissingStartPeriodValue: {
              value: { code: 400, message: 'Missing `start_period` value' },
            },
            MissingCountValue: { value: { code: 400, message: 'Missing `count` value' } },
          },
        },
      },
    },
    406: NotAcceptableResponse,
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconLightClientFinalityUpdateRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/light_client/finality_update',
  tags: ['Beacon'],
  summary: 'Get the latest known `LightClientFinalityUpdate`',
  description:
    'Requests the latest [`LightClientFinalityUpdate`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/altair/light-client/sync-protocol.md#lightclientfinalityupdate) known by the server.\nDepending on the `Accept` header it can be returned either as JSON or SSZ-serialized bytes.\n\nServers SHOULD provide results as defined in [`create_light_client_finality_update`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/altair/light-client/full-node.md#create_light_client_finality_update).\n',
  operationId: 'getLightClientFinalityUpdate',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              version: ConsensusVersionSchema,
              data: z.union([
                GloasLightClientFinalityUpdateSchema,
                ElectraLightClientFinalityUpdateSchema,
                DenebLightClientFinalityUpdateSchema,
                CapellaLightClientFinalityUpdateSchema,
                AltairLightClientFinalityUpdateSchema,
              ]),
            })
            .openapi({
              title: 'GetLightClientFinalityUpdateResponse',
              required: ['version', 'data'],
            }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `LightClientFinalityUpdate` bytes. Use Accept header to choose this response type',
            }),
        },
      },
      headers: z.object({ 'Eth-Consensus-Version': EthConsensusVersionHeaderSchema }),
    },
    404: {
      description: 'No `LightClientFinalityUpdate` is available',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'LC finality update unavailable' },
        },
      },
    },
    406: NotAcceptableResponse,
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconLightClientOptimisticUpdateRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/light_client/optimistic_update',
  tags: ['Beacon'],
  summary: 'Get the latest known `LightClientOptimisticUpdate`',
  description:
    'Requests the latest [`LightClientOptimisticUpdate`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/altair/light-client/sync-protocol.md#lightclientoptimisticupdate) known by the server.\nDepending on the `Accept` header it can be returned either as JSON or SSZ-serialized bytes.\n\nServers SHOULD provide results as defined in [`create_light_client_optimistic_update`](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/altair/light-client/full-node.md#create_light_client_optimistic_update).\n',
  operationId: 'getLightClientOptimisticUpdate',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              version: ConsensusVersionSchema,
              data: z.union([
                GloasLightClientOptimisticUpdateSchema,
                ElectraLightClientOptimisticUpdateSchema,
                DenebLightClientOptimisticUpdateSchema,
                CapellaLightClientOptimisticUpdateSchema,
                AltairLightClientOptimisticUpdateSchema,
              ]),
            })
            .openapi({
              title: 'GetLightClientOptimisticUpdateResponse',
              required: ['version', 'data'],
            }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `LightClientOptimisticUpdate` bytes. Use Accept header to choose this response type',
            }),
        },
      },
      headers: z.object({ 'Eth-Consensus-Version': EthConsensusVersionHeaderSchema }),
    },
    404: {
      description: 'No `LightClientOptimisticUpdate` is available',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'LC optimistic update unavailable' },
        },
      },
    },
    406: NotAcceptableResponse,
    500: InternalErrorResponse,
  },
})

export const getEthV2BeaconPoolAttestationsRoute = createRoute({
  method: 'get',
  path: '/eth/v2/beacon/pool/attestations',
  tags: ['Beacon'],
  summary: 'Get attestations from operations pool',
  description:
    'Retrieves attestations known by the node but not necessarily incorporated into any block',
  operationId: 'getPoolAttestationsV2',
  request: {
    query: z.object({
      slot: Uint64Schema.openapi({
        param: {
          name: 'slot',
          in: 'query',
          required: false,
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }).exactOptional(),
      committee_index: Uint64Schema.openapi({
        param: {
          name: 'committee_index',
          in: 'query',
          required: false,
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z
                .enum([
                  'phase0',
                  'altair',
                  'bellatrix',
                  'capella',
                  'deneb',
                  'electra',
                  'fulu',
                  'gloas',
                ])
                .openapi({ example: 'gloas' }),
              data: z.union([
                z.array(GloasAttestationSchema),
                z.array(ElectraAttestationSchema),
                z.array(Phase0AttestationSchema),
              ]),
            })
            .openapi({ title: 'GetPoolAttestationsV2Response', required: ['version', 'data'] }),
        },
      },
      headers: z.object({ 'Eth-Consensus-Version': EthConsensusVersionHeaderSchema }),
    },
    400: {
      description: 'The slot or committee index could not be parsed',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid slot: current' },
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const postEthV2BeaconPoolAttestationsRoute = createRoute({
  method: 'post',
  path: '/eth/v2/beacon/pool/attestations',
  tags: ['Beacon', 'ValidatorRequiredApi'],
  summary: 'Submit Attestation objects to node',
  description:
    'Submits attestations to the node. Each attestation in the request body is processed individually.\n\nIf an attestation is validated successfully, the node MUST publish that attestation on the appropriate subnet.\n\nIf one or more attestations fail validation, the node MUST return a 400 error with details of which attestations have failed, and why.\n\nPrior to the Electra hard fork, this endpoint MUST be sent Attestation objects only.  At and after the Electra hard fork, this endpoint MUST be sent SingleAttestation objects only.\n',
  operationId: 'submitPoolAttestationsV2',
  request: {
    headers: z.object({
      'Eth-Consensus-Version': ConsensusVersionSchema.openapi({
        param: {
          in: 'header',
          schema: { $ref: '#/components/schemas/ConsensusVersion' },
          required: true,
          name: 'Eth-Consensus-Version',
          description: 'The consensus version to which the attestations being submitted belong.',
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z.array(ElectraSingleAttestationSchema),
            z.array(Phase0AttestationSchema),
          ]),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `List[Attestation, MAX_VALIDATORS_PER_COMMITTEE * MAX_COMMITTEES_PER_SLOT]` or `List[SingleAttestation, MAX_VALIDATORS_PER_COMMITTEE * MAX_COMMITTEES_PER_SLOT]` bytes. Use content type header to indicate that SSZ data is contained in the request body.',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Attestations are stored in pool and broadcast on the appropriate subnet' },
    400: {
      description: 'Errors with one or more attestations',
      content: { 'application/json': { schema: IndexedErrorMessageSchema } },
    },
    415: UnsupportedMediaTypeResponse,
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconPoolPayloadAttestationsRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/pool/payload_attestations',
  tags: ['Beacon'],
  summary: 'Get payload attestations from operations pool',
  description:
    'Retrieves payload attestations known by the node but not necessarily incorporated into any block',
  operationId: 'getPoolPayloadAttestations',
  request: {
    query: z.object({
      slot: Uint64Schema.openapi({
        param: {
          name: 'slot',
          in: 'query',
          required: false,
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z.literal('gloas').openapi({ example: 'gloas' }),
              data: z.array(GloasPayloadAttestationSchema),
            })
            .openapi({
              title: 'GetPoolPayloadAttestationsResponse',
              required: ['version', 'data'],
            }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `ProgressiveList[PayloadAttestation]` bytes. Use Accept header to choose this response type',
            }),
        },
      },
      headers: z.object({ 'Eth-Consensus-Version': EthConsensusVersionHeaderSchema }),
    },
    400: {
      description: 'The slot could not be parsed',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid slot parameter' },
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const postEthV1BeaconPoolPayloadAttestationsRoute = createRoute({
  method: 'post',
  path: '/eth/v1/beacon/pool/payload_attestations',
  tags: ['Beacon', 'ValidatorRequiredApi'],
  summary: 'Submit payload attestation messages',
  description:
    'Submits payload attestation messages to the beacon node.\n\nThe beacon node will validate each payload attestation message according to the gossip validation rules\nand, if valid, store it in the pool and broadcast it globally to the network.\n\nA success response indicates that the payload attestation message passed validation and was\nsuccessfully stored and broadcast.\n\nIf one or more payload attestation messages fail validation, the node MUST return a 400 error with details of which messages have failed, and why.\n',
  operationId: 'submitPayloadAttestationMessages',
  request: {
    headers: z.object({
      'Eth-Consensus-Version': ConsensusVersionSchema.openapi({
        param: {
          in: 'header',
          schema: { $ref: '#/components/schemas/ConsensusVersion' },
          required: true,
          name: 'Eth-Consensus-Version',
          description:
            'The active consensus version to which the payload attestation message being submitted belongs.',
        },
      }),
    }),
    body: {
      description: 'Array of `PayloadAttestationMessage` objects to be submitted.',
      content: {
        'application/json': { schema: z.array(GloasPayloadAttestationMessageSchema) },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `List[PayloadAttestationMessage, PTC_SIZE]` bytes. Use Content-Type header to indicate that SSZ data is contained in the request body.',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Payload attestation messages are stored in pool and broadcasted to the network',
    },
    400: {
      description: 'Errors with one or more payload attestation messages',
      content: { 'application/json': { schema: IndexedErrorMessageSchema } },
    },
    415: UnsupportedMediaTypeResponse,
    500: InternalErrorResponse,
  },
})

export const getEthV2BeaconPoolAttesterSlashingsRoute = createRoute({
  method: 'get',
  path: '/eth/v2/beacon/pool/attester_slashings',
  tags: ['Beacon'],
  summary: 'Get attester slashings from operations pool',
  description:
    'Retrieves attester slashings known by the node but not necessarily incorporated into any block',
  operationId: 'getPoolAttesterSlashingsV2',
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z
                .enum([
                  'phase0',
                  'altair',
                  'bellatrix',
                  'capella',
                  'deneb',
                  'electra',
                  'fulu',
                  'gloas',
                ])
                .openapi({ example: 'gloas' }),
              data: z.union([
                z.array(GloasAttesterSlashingSchema),
                z.array(ElectraAttesterSlashingSchema),
                z.array(Phase0AttesterSlashingSchema),
              ]),
            })
            .openapi({
              title: 'GetPoolAttesterSlashingsV2Response',
              required: ['version', 'data'],
            }),
        },
      },
      headers: z.object({ 'Eth-Consensus-Version': EthConsensusVersionHeaderSchema }),
    },
    500: InternalErrorResponse,
  },
})

export const postEthV2BeaconPoolAttesterSlashingsRoute = createRoute({
  method: 'post',
  path: '/eth/v2/beacon/pool/attester_slashings',
  tags: ['Beacon'],
  summary: "Submit AttesterSlashing object to node's pool",
  description:
    "Submits AttesterSlashing object to node's pool. Upon successful validation the node MUST broadcast it to network.",
  operationId: 'submitPoolAttesterSlashingsV2',
  request: {
    headers: z.object({
      'Eth-Consensus-Version': ConsensusVersionSchema.openapi({
        param: {
          in: 'header',
          schema: { $ref: '#/components/schemas/ConsensusVersion' },
          required: true,
          name: 'Eth-Consensus-Version',
          description:
            'The active consensus version to which the attester slashing being submitted belongs.',
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.union([
            GloasAttesterSlashingSchema,
            ElectraAttesterSlashingSchema,
            Phase0AttesterSlashingSchema,
          ]),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Invalid attester slashing',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: {
            code: 400,
            message: "Invalid attester slashing, it will never pass validation so it's rejected",
          },
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconPoolProposerSlashingsRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/pool/proposer_slashings',
  tags: ['Beacon'],
  summary: 'Get ProposerSlashings from operations pool',
  description:
    'Retrieves proposer slashings known by the node but not necessarily incorporated into any block',
  operationId: 'getPoolProposerSlashings',
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(Phase0ProposerSlashingSchema) })
            .openapi({ title: 'GetPoolProposerSlashingsResponse', required: ['data'] }),
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const postEthV1BeaconPoolProposerSlashingsRoute = createRoute({
  method: 'post',
  path: '/eth/v1/beacon/pool/proposer_slashings',
  tags: ['Beacon'],
  summary: "Submit ProposerSlashing object to node's pool",
  description:
    "Submits ProposerSlashing object to node's pool and if passes validation  node MUST broadcast it to network.",
  operationId: 'submitPoolProposerSlashings',
  request: {
    body: {
      content: { 'application/json': { schema: Phase0ProposerSlashingSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Invalid proposer slashing',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: {
            code: 400,
            message: "Invalid proposer slashing, it will never pass validation so it's rejected",
          },
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const postEthV1BeaconPoolSyncCommitteesRoute = createRoute({
  method: 'post',
  path: '/eth/v1/beacon/pool/sync_committees',
  tags: ['Beacon', 'ValidatorRequiredApi'],
  summary: 'Submit sync committee signatures to node',
  description:
    'Submits sync committee signature objects to the node.\n\nSync committee signatures are not present in phase0, but are required for Altair networks.\n\nIf a sync committee signature is validated successfully the node MUST publish that sync committee signature on all applicable subnets.\n\nIf one or more sync committee signatures fail validation the node MUST return a 400 error with details of which sync committee signatures have failed, and why.\n',
  operationId: 'submitPoolSyncCommitteeSignatures',
  request: {
    body: {
      content: { 'application/json': { schema: z.array(AltairSyncCommitteeSignatureSchema) } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Sync committee signatures are stored in pool and broadcast on appropriate subnet',
    },
    400: {
      description: 'Errors with one or more sync committee signatures',
      content: { 'application/json': { schema: IndexedErrorMessageSchema } },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconPoolVoluntaryExitsRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/pool/voluntary_exits',
  tags: ['Beacon'],
  summary: 'Get SignedVoluntaryExit from operations pool',
  description:
    'Retrieves voluntary exits known by the node but not necessarily incorporated into any block',
  operationId: 'getPoolVoluntaryExits',
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(Phase0SignedVoluntaryExitSchema) })
            .openapi({ title: 'GetPoolVoluntaryExitsResponse', required: ['data'] }),
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const postEthV1BeaconPoolVoluntaryExitsRoute = createRoute({
  method: 'post',
  path: '/eth/v1/beacon/pool/voluntary_exits',
  tags: ['Beacon'],
  summary: "Submit SignedVoluntaryExit object to node's pool",
  description:
    "Submits SignedVoluntaryExit object to node's pool and if passes validation node MUST broadcast it to network.",
  operationId: 'submitPoolVoluntaryExit',
  request: {
    body: {
      content: { 'application/json': { schema: Phase0SignedVoluntaryExitSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Voluntary exit is stored in node and broadcasted to network' },
    400: {
      description: 'Invalid voluntary exit',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: {
            code: 400,
            message: "Invalid voluntary exit, it will never pass validation so it's rejected",
          },
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV1BeaconPoolBlsToExecutionChangesRoute = createRoute({
  method: 'get',
  path: '/eth/v1/beacon/pool/bls_to_execution_changes',
  tags: ['Beacon'],
  summary: 'Get SignedBLSToExecutionChange from operations pool',
  description:
    'Retrieves BLS to execution changes known by the node but not necessarily incorporated into any block',
  operationId: 'getPoolBLSToExecutionChanges',
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(CapellaSignedBLSToExecutionChangeSchema) })
            .openapi({ title: 'GetPoolBLSToExecutionChangesResponse', required: ['data'] }),
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const postEthV1BeaconPoolBlsToExecutionChangesRoute = createRoute({
  method: 'post',
  path: '/eth/v1/beacon/pool/bls_to_execution_changes',
  tags: ['Beacon'],
  summary: "Submit SignedBLSToExecutionChange object to node's pool",
  description:
    "Submits a list of SignedBLSToExecutionChange objects to node's pool. Any that pass validation MUST be broadcast to the network.",
  operationId: 'submitPoolBLSToExecutionChange',
  request: {
    body: {
      content: { 'application/json': { schema: z.array(CapellaSignedBLSToExecutionChangeSchema) } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'BLS to execution changes were all stored to the pool and broadcast on the appropriate subnet.',
    },
    400: {
      description: 'Errors in one or more BLS to execution changes',
      content: { 'application/json': { schema: IndexedErrorMessageSchema } },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV2DebugBeaconStatesStateIdRoute = createRoute({
  method: 'get',
  path: '/eth/v2/debug/beacon/states/{state_id}',
  tags: ['Debug'],
  summary: 'Get full BeaconState object',
  description:
    'Returns full BeaconState object for given stateId.\nDepending on `Accept` header it can be returned either as json or as bytes serialized by SSZ\n',
  operationId: 'getStateV2',
  request: { params: z.object({ state_id: StateIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z
                .enum([
                  'phase0',
                  'altair',
                  'bellatrix',
                  'capella',
                  'deneb',
                  'electra',
                  'fulu',
                  'gloas',
                ])
                .openapi({ example: 'gloas' }),
              execution_optimistic: ExecutionOptimisticSchema,
              finalized: FinalizedSchema,
              data: z.union([
                GloasBeaconStateSchema,
                FuluBeaconStateSchema,
                ElectraBeaconStateSchema,
                DenebBeaconStateSchema,
                CapellaBeaconStateSchema,
                BellatrixBeaconStateSchema,
                AltairBeaconStateSchema,
                Phase0BeaconStateSchema,
              ]),
            })
            .openapi({
              title: 'GetStateV2Response',
              required: ['version', 'execution_optimistic', 'finalized', 'data'],
            }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized state bytes. Use Accept header to choose this response type',
            }),
        },
      },
      headers: z.object({ 'Eth-Consensus-Version': EthConsensusVersionHeaderSchema }),
    },
    400: {
      description: 'Invalid state ID',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid state ID: current' },
        },
      },
    },
    404: {
      description: 'State not found',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'State not found' },
        },
      },
    },
    406: NotAcceptableResponse,
    500: InternalErrorResponse,
  },
})

export const getEthV2DebugBeaconHeadsRoute = createRoute({
  method: 'get',
  path: '/eth/v2/debug/beacon/heads',
  tags: ['Debug'],
  summary: 'Get fork choice leaves',
  description: 'Retrieves all possible chain heads (leaves of fork choice tree).',
  operationId: 'getDebugChainHeadsV2',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(
                z
                  .object({
                    root: RootSchema,
                    slot: Uint64Schema,
                    execution_optimistic: ExecutionOptimisticSchema,
                  })
                  .openapi({ required: ['root', 'slot', 'execution_optimistic'] }),
              ),
            })
            .openapi({ title: 'GetDebugChainHeadsResponse', required: ['data'] }),
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV1DebugForkChoiceRoute = createRoute({
  method: 'get',
  path: '/eth/v1/debug/fork_choice',
  tags: ['Debug'],
  summary: 'Get fork choice array',
  description:
    'Retrieves all current fork choice context.\n\nUse `GET /eth/v2/debug/fork_choice` for Gloas and later forks.\n',
  operationId: 'getDebugForkChoice',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              justified_checkpoint: CheckpointSchema,
              finalized_checkpoint: CheckpointSchema,
              fork_choice_nodes: z
                .array(NodeSchema)
                .min(1)
                .openapi({ description: 'Fork choice nodes' }),
              extra_data: ExtraDataSchema.exactOptional(),
            })
            .openapi({
              title: 'GetForkChoiceResponse',
              description: 'Debugging context of fork choice',
              required: ['justified_checkpoint', 'finalized_checkpoint', 'fork_choice_nodes'],
            }),
        },
      },
    },
    500: InternalErrorResponse,
  },
  deprecated: true,
})

export const getEthV2DebugForkChoiceRoute = createRoute({
  method: 'get',
  path: '/eth/v2/debug/fork_choice',
  tags: ['Debug'],
  summary: 'Get fork choice array',
  description:
    'Retrieves all current fork choice context, with one node per `(block_root, payload_status)` pair.\nParent links follow the [fork choice tree](https://github.com/ethereum/consensus-specs/blob/v1.7.0-beta.3/specs/gloas/fork-choice.md#modified-get_node_children).\nEach pre-Gloas block has a single `full` node.\n\nPayload Timeliness Committee (PTC) counts are per committee position, including repeated validator\nindices, and are the same for all nodes of a block. They are zero for pre-Gloas blocks.\n',
  operationId: 'getDebugForkChoiceV2',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  justified_checkpoint: CheckpointSchema,
                  finalized_checkpoint: CheckpointSchema,
                  fork_choice_nodes: z.array(NodeV2Schema).min(1),
                  extra_data: ExtraDataSchema,
                })
                .openapi({
                  required: [
                    'justified_checkpoint',
                    'finalized_checkpoint',
                    'fork_choice_nodes',
                    'extra_data',
                  ],
                }),
            })
            .openapi({ title: 'GetForkChoiceResponseV2', required: ['data'] }),
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV1NodeIdentityRoute = createRoute({
  method: 'get',
  path: '/eth/v1/node/identity',
  tags: ['Node'],
  summary: 'Get node network identity',
  description: "Retrieves data about the node's network presence",
  operationId: 'getNetworkIdentity',
  responses: {
    200: {
      description: 'Request successful',
      content: {
        'application/json': {
          schema: z
            .object({ data: NetworkIdentitySchema })
            .openapi({ title: 'GetNetworkIdentityResponse', required: ['data'] }),
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV1NodePeersRoute = createRoute({
  method: 'get',
  path: '/eth/v1/node/peers',
  tags: ['Node'],
  summary: 'Get node network peers',
  description:
    "Retrieves data about the node's network peers. By default this returns all peers. Multiple query params are combined using AND conditions",
  operationId: 'getPeers',
  request: {
    query: z.object({
      state: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(PeerConnectionStateSchema).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: { $ref: '#/components/schemas/PeerConnectionState' },
            },
          },
        }),
      direction: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(PeerConnectionDirectionSchema).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'direction',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: { $ref: '#/components/schemas/PeerConnectionDirection' },
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request successful',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(PeerSchema),
              meta: z
                .object({
                  count: z.number().openapi({ description: 'Total number of items', example: 1 }),
                })
                .openapi({ required: ['count'] }),
            })
            .openapi({ title: 'GetPeersResponse', required: ['data', 'meta'] }),
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV1NodePeersPeerIdRoute = createRoute({
  method: 'get',
  path: '/eth/v1/node/peers/{peer_id}',
  tags: ['Node'],
  summary: 'Get peer',
  description: 'Retrieves data about the given peer',
  operationId: 'getPeer',
  request: {
    params: z.object({
      peer_id: PeerIdSchema.openapi({
        param: {
          name: 'peer_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/PeerId' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Request successful',
      content: {
        'application/json': {
          schema: z
            .object({ data: PeerSchema })
            .openapi({ title: 'GetPeerResponse', required: ['data'] }),
        },
      },
    },
    400: {
      description: 'The peer ID supplied could not be parsed',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid peer ID: localhost' },
        },
      },
    },
    404: {
      description: 'Peer not found',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'Peer not found' },
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV1NodePeerCountRoute = createRoute({
  method: 'get',
  path: '/eth/v1/node/peer_count',
  tags: ['Node'],
  summary: 'Get peer count',
  description: 'Retrieves number of known peers.',
  operationId: 'getPeerCount',
  responses: {
    200: {
      description: 'Request successful',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  disconnected: Uint64Schema.openapi({ example: '12' }),
                  connecting: Uint64Schema.openapi({ example: '34' }),
                  connected: Uint64Schema.openapi({ example: '56' }),
                  disconnecting: Uint64Schema.openapi({ example: '5' }),
                })
                .openapi({
                  required: ['disconnected', 'connecting', 'connected', 'disconnecting'],
                }),
            })
            .openapi({ title: 'GetPeerCountResponse', required: ['data'] }),
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV1NodeVersionRoute = createRoute({
  method: 'get',
  path: '/eth/v1/node/version',
  tags: ['Node'],
  summary: 'Get version string of the running beacon node.',
  description:
    'Requests that the beacon node identify information about its implementation in a format similar to a  [HTTP User-Agent](https://tools.ietf.org/html/rfc7231#section-5.5.3) field.',
  operationId: 'getNodeVersion',
  responses: {
    200: {
      description: 'Request successful',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.object({ version: VersionSchema }).openapi({ required: ['version'] }),
            })
            .openapi({ title: 'GetVersionResponse', required: ['data'] }),
        },
      },
    },
    500: InternalErrorResponse,
  },
  deprecated: true,
})

export const getEthV2NodeVersionRoute = createRoute({
  method: 'get',
  path: '/eth/v2/node/version',
  tags: ['Node'],
  summary: 'Get version information for the beacon node and execution client.',
  description:
    'Retrieves structured information about the version of the beacon node\nand its attached execution client in the same format as used on the\n[Engine API](https://github.com/ethereum/execution-apis/blob/dc4dbca37ef8697d782f431af19120beaf5517f5/src/engine/identification.md).\n\nVersion information about the execution client may not be available\nat all times and is therefore optional.\n\nIf the beacon node receives multiple values from `engine_getClientVersionV1`, the\nfirst value should be returned on this endpoint.\n',
  operationId: 'getNodeVersionV2',
  responses: {
    200: {
      description: 'Request successful',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  beacon_node: ClientVersionV1Schema,
                  execution_client: ClientVersionV1Schema.exactOptional(),
                })
                .openapi({ required: ['beacon_node'] }),
            })
            .openapi({ title: 'GetVersionV2Response', required: ['data'] }),
          examples: {
            'Full response': {
              value: {
                data: {
                  beacon_node: {
                    code: 'LH',
                    name: 'Lighthouse',
                    version: 'v8.0.1',
                    commit: '0xced49dd2',
                  },
                  execution_client: {
                    code: 'NM',
                    name: 'Nethermind',
                    version: 'v1.35.8',
                    commit: '0xc066aee2',
                  },
                },
              },
            },
            'Execution client unknown': {
              value: {
                data: {
                  beacon_node: {
                    code: 'LH',
                    name: 'Lighthouse',
                    version: 'v8.0.1',
                    commit: '0xced49dd2',
                  },
                },
              },
            },
          },
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV1NodeSyncingRoute = createRoute({
  method: 'get',
  path: '/eth/v1/node/syncing',
  tags: ['Node', 'ValidatorRequiredApi'],
  summary: 'Get node syncing status',
  description:
    "Requests the beacon node to describe if it's currently syncing or not, and if it is, what block it is up to.",
  operationId: 'getSyncingStatus',
  responses: {
    200: {
      description: 'Request successful',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  head_slot: Uint64Schema.openapi({
                    description: 'Head slot node is trying to reach',
                  }),
                  sync_distance: Uint64Schema.openapi({
                    description: 'How many slots node needs to process to reach head. 0 if synced.',
                  }),
                  is_syncing: z
                    .boolean()
                    .openapi({
                      description:
                        'Set to true if the node is syncing, false if the node is synced.',
                    }),
                  is_optimistic: z
                    .boolean()
                    .openapi({
                      description: 'Set to true if the node is optimistically tracking head.',
                    }),
                  el_offline: z
                    .boolean()
                    .openapi({ description: 'Set to true if the execution client is offline.' }),
                })
                .openapi({
                  required: [
                    'head_slot',
                    'sync_distance',
                    'is_syncing',
                    'is_optimistic',
                    'el_offline',
                  ],
                }),
            })
            .openapi({ title: 'GetSyncingStatusResponse', required: ['data'] }),
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV1NodeHealthRoute = createRoute({
  method: 'get',
  path: '/eth/v1/node/health',
  tags: ['Node'],
  summary: 'Get health check',
  description: 'Returns node health status in http status codes. Useful for load balancers.',
  operationId: 'getHealth',
  request: {
    query: z.object({
      syncing_status: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(100).max(599),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'syncing_status',
            in: 'query',
            required: false,
            description: 'Customize syncing status instead of default status code (206)',
            schema: { type: 'integer', minimum: 100, maximum: 599 },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Node is ready' },
    206: {
      description:
        'Either the beacon node is syncing, or its execution node is optimistic or offline, so data served may be incorrect',
    },
    400: { description: 'Invalid syncing status code' },
    503: { description: 'Node not initialized or having issues' },
  },
})

export const getEthV1ConfigForkScheduleRoute = createRoute({
  method: 'get',
  path: '/eth/v1/config/fork_schedule',
  tags: ['Config'],
  summary: 'Get scheduled upcoming forks.',
  description: 'Retrieve all forks, past present and future, of which this node is aware.',
  operationId: 'getForkSchedule',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(ForkSchema) })
            .openapi({ title: 'GetForkScheduleResponse', required: ['data'] }),
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV1ConfigSpecRoute = createRoute({
  method: 'get',
  path: '/eth/v1/config/spec',
  tags: ['Config', 'ValidatorRequiredApi'],
  summary: 'Get spec params.',
  description:
    'Retrieve specification configuration used on this node.  The configuration should include:\n  - Constants for all hard forks known by the beacon node, for example the [phase 0](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/phase0/beacon-chain.md#constants) and [altair](https://github.com/ethereum/consensus-specs/blob/v1.3.0/specs/altair/beacon-chain.md#constants) values\n  - Presets for all hard forks supplied to the beacon node, for example the [phase 0](https://github.com/ethereum/consensus-specs/blob/v1.3.0/presets/mainnet/phase0.yaml) and [altair](https://github.com/ethereum/consensus-specs/blob/v1.3.0/presets/mainnet/altair.yaml) values\n  - Configuration for the beacon node, for example the [mainnet](https://github.com/ethereum/consensus-specs/blob/v1.3.0/configs/mainnet.yaml) values\n\nValues are returned with following format:\n  - any value starting with 0x in the spec is returned as a hex string\n  - numeric values are returned as a quoted integer\n  - array values are returned as a JSON array\n',
  operationId: 'getSpec',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.looseObject({}).openapi({
                description:
                  'Key value mapping of all constants, presets and configuration values for all known hard forks\nValues are returned with following format:\n  - any value starting with 0x in the spec is returned as a hex string\n  - numeric values are returned as a quoted integer\n',
                example: {
                  DEPOSIT_CONTRACT_ADDRESS: '0x00000000219ab540356cBB839Cbe05303d7705Fa',
                  DEPOSIT_NETWORK_ID: '1',
                  DOMAIN_AGGREGATE_AND_PROOF: '0x06000000',
                  INACTIVITY_PENALTY_QUOTIENT: '67108864',
                  INACTIVITY_PENALTY_QUOTIENT_ALTAIR: '50331648',
                  BLOB_SCHEDULE: [
                    { EPOCH: '269568', MAX_BLOBS_PER_BLOCK: '6' },
                    { EPOCH: '364032', MAX_BLOBS_PER_BLOCK: '9' },
                  ],
                },
              }),
            })
            .openapi({ title: 'GetSpecResponse', required: ['data'] }),
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const getEthV1ConfigDepositContractRoute = createRoute({
  method: 'get',
  path: '/eth/v1/config/deposit_contract',
  tags: ['Config'],
  summary: 'Get deposit contract address.',
  description: 'Retrieve Eth1 deposit contract address and chain ID.',
  operationId: 'getDepositContract',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  chain_id: Uint64Schema.openapi({
                    description: 'Id of Eth1 chain on which contract is deployed.',
                    example: '1',
                  }),
                  address: ExecutionAddressSchema.openapi({
                    description: 'Hex encoded deposit contract address with 0x prefix',
                    example: '0x00000000219ab540356cBB839Cbe05303d7705Fa',
                  }),
                })
                .openapi({ required: ['chain_id', 'address'] }),
            })
            .openapi({ title: 'GetDepositContractResponse', required: ['data'] }),
        },
      },
    },
    500: InternalErrorResponse,
  },
})

export const postEthV1ValidatorDutiesAttesterEpochRoute = createRoute({
  method: 'post',
  path: '/eth/v1/validator/duties/attester/{epoch}',
  tags: ['ValidatorRequiredApi', 'Validator'],
  summary: 'Get attester duties',
  description:
    'Requests the beacon node to provide a set of attestation duties, which should be performed by validators, for a particular epoch.\nDuties should only need to be checked once per epoch, however a chain reorganization (of > MIN_SEED_LOOKAHEAD epochs) could occur, resulting in a change of duties. For full safety, you should monitor head_v2 events and confirm the dependent root in this response matches:\n- event.current_epoch_dependent_root when `compute_epoch_at_slot(event.slot) == epoch`\n- event.next_epoch_dependent_root when `compute_epoch_at_slot(event.slot) + 1 == epoch`\n\nThe dependent_root value is `get_block_root_at_slot(state, compute_start_slot_at_epoch(epoch - 1) - 1)` or the genesis block root in the case of underflow.',
  operationId: 'getAttesterDuties',
  request: {
    params: z.object({
      epoch: Uint64Schema.openapi({
        param: {
          name: 'epoch',
          description: 'Should only be allowed 1 epoch ahead',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }),
    }),
    body: {
      description: 'An array of the validator indices for which to obtain the duties.',
      content: {
        'application/json': {
          schema: z.array(Uint64Schema).min(1).openapi({ title: 'GetAttesterDutiesBody' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success response',
      content: {
        'application/json': {
          schema: z
            .object({
              dependent_root: DependentRootSchema,
              execution_optimistic: ExecutionOptimisticSchema,
              data: z.array(AttesterDutySchema),
            })
            .openapi({
              title: 'GetAttesterDutiesResponse',
              required: ['dependent_root', 'execution_optimistic', 'data'],
            }),
        },
      },
    },
    400: {
      description: 'Invalid epoch or index',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid epoch: -2' },
        },
      },
    },
    500: InternalErrorResponse,
    503: CurrentlySyncingResponse,
  },
})

export const getEthV1ValidatorDutiesProposerEpochRoute = createRoute({
  method: 'get',
  path: '/eth/v1/validator/duties/proposer/{epoch}',
  tags: ['ValidatorRequiredApi', 'Validator'],
  summary: 'Get block proposers duties',
  description:
    'Request beacon node to provide all validators that are scheduled to propose a block in the given epoch.\nDuties should only need to be checked once per epoch, however a chain reorganization could occur that results in a change of duties. For full safety, you should monitor head events and confirm the dependent root in this response matches:\n- event.current_duty_dependent_root when `compute_epoch_at_slot(event.slot) == epoch`\n- event.block otherwise\n\nThe dependent_root value is `get_block_root_at_slot(state, compute_start_slot_at_epoch(epoch) - 1)` or the genesis block root in the case of underflow.',
  operationId: 'getProposerDuties',
  request: {
    params: z.object({
      epoch: Uint64Schema.openapi({
        param: {
          name: 'epoch',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success response',
      content: {
        'application/json': {
          schema: z
            .object({
              dependent_root: DependentRootSchema,
              execution_optimistic: ExecutionOptimisticSchema,
              data: z.array(ProposerDutySchema),
            })
            .openapi({
              title: 'GetProposerDutiesResponse',
              required: ['dependent_root', 'execution_optimistic', 'data'],
            }),
        },
      },
    },
    400: {
      description: 'Invalid epoch',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid epoch: -2' },
        },
      },
    },
    500: InternalErrorResponse,
    503: CurrentlySyncingResponse,
  },
  deprecated: true,
})

export const getEthV2ValidatorDutiesProposerEpochRoute = createRoute({
  method: 'get',
  path: '/eth/v2/validator/duties/proposer/{epoch}',
  tags: ['ValidatorRequiredApi', 'Validator'],
  summary: 'Get block proposers duties',
  description:
    'Request beacon node to provide all validators that are scheduled to propose a block in the given epoch.\nDuties should only need to be checked once per epoch, however a chain reorganization could occur that results in a change of duties. For full safety, you should monitor head_v2 events and confirm the dependent root in this response matches:\n- event.current_epoch_dependent_root when `compute_epoch_at_slot(event.slot) == epoch`\n- event.next_epoch_dependent_root when `compute_epoch_at_slot(event.slot) + 1 == epoch`\n\nThe dependent_root value is `get_block_root_at_slot(state, compute_start_slot_at_epoch(epoch - 1) - 1)` or the genesis block root in the case of underflow.',
  operationId: 'getProposerDutiesV2',
  request: {
    params: z.object({
      epoch: Uint64Schema.openapi({
        param: {
          name: 'epoch',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success response',
      content: {
        'application/json': {
          schema: z
            .object({
              dependent_root: DependentRootSchema,
              execution_optimistic: ExecutionOptimisticSchema,
              data: z.array(ProposerDutySchema),
            })
            .openapi({
              title: 'GetProposerDutiesResponse',
              required: ['dependent_root', 'execution_optimistic', 'data'],
            }),
        },
      },
    },
    400: {
      description: 'Invalid epoch',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid epoch: -2' },
        },
      },
    },
    500: InternalErrorResponse,
    503: CurrentlySyncingResponse,
  },
})

export const postEthV1ValidatorDutiesSyncEpochRoute = createRoute({
  method: 'post',
  path: '/eth/v1/validator/duties/sync/{epoch}',
  tags: ['ValidatorRequiredApi', 'Validator'],
  summary: 'Get sync committee duties',
  description:
    'Requests the beacon node to provide a set of sync committee duties for a particular epoch.',
  operationId: 'getSyncCommitteeDuties',
  request: {
    params: z.object({
      epoch: Uint64Schema.openapi({
        param: {
          name: 'epoch',
          description:
            'epoch // EPOCHS_PER_SYNC_COMMITTEE_PERIOD <= current_epoch // EPOCHS_PER_SYNC_COMMITTEE_PERIOD + 1',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }),
    }),
    body: {
      description: 'An array of the validator indices for which to obtain the duties.',
      content: {
        'application/json': {
          schema: z.array(Uint64Schema).min(1).openapi({ title: 'GetSyncCommitteeDutiesBody' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success response',
      content: {
        'application/json': {
          schema: z
            .object({
              execution_optimistic: ExecutionOptimisticSchema,
              data: z.array(AltairSyncDutySchema),
            })
            .openapi({
              title: 'GetSyncCommitteeDutiesResponse',
              required: ['execution_optimistic', 'data'],
            }),
        },
      },
    },
    400: {
      description: 'Invalid epoch or index',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid epoch: -2' },
        },
      },
    },
    500: InternalErrorResponse,
    503: CurrentlySyncingResponse,
  },
})

export const postEthV1ValidatorDutiesPtcEpochRoute = createRoute({
  method: 'post',
  path: '/eth/v1/validator/duties/ptc/{epoch}',
  tags: ['Validator', 'ValidatorRequiredApi'],
  summary: 'Get PTC duties',
  description:
    'Requests the beacon node to provide a set of Payload Timeliness Committee (PTC) duties, which should be performed by validators, for a particular epoch.\nDuties should only need to be checked once per epoch, however a chain reorganization (of > MIN_SEED_LOOKAHEAD epochs) could occur, resulting in a change of duties. For full safety, you should monitor head_v2 events and confirm the dependent root in this response matches:\n- event.current_epoch_dependent_root when `compute_epoch_at_slot(event.slot) == epoch`\n- event.next_epoch_dependent_root when `compute_epoch_at_slot(event.slot) + 1 == epoch`\n\nThe dependent_root value is `get_block_root_at_slot(state, compute_start_slot_at_epoch(epoch - 1) - 1)` or the genesis block root in the case of underflow.\n\nThe PTC of `GLOAS_FORK_EPOCH` is computed at the fork from effective balances that are updated at the end of the previous epoch, so its duties can change until the last slot before the fork. For `epoch == GLOAS_FORK_EPOCH`, the dependent_root value is `get_block_root_at_slot(state, compute_start_slot_at_epoch(epoch) - 1)` or the genesis block root in the case of underflow, and matches event.next_epoch_dependent_root when `compute_epoch_at_slot(event.slot) == epoch`. Duties for this epoch are not available before the fork.',
  operationId: 'getPtcDuties',
  request: {
    params: z.object({
      epoch: Uint64Schema.openapi({
        param: {
          name: 'epoch',
          description:
            'Epoch for which to obtain PTC duties. Must not be greater than the next epoch',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }),
    }),
    body: {
      description: 'An array of the validator indices for which to obtain the duties.',
      content: {
        'application/json': {
          schema: z
            .array(Uint64Schema)
            .min(1)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            })
            .openapi({ title: 'GetPtcDutiesBody' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success response',
      content: {
        'application/json': {
          schema: z
            .object({
              dependent_root: DependentRootSchema,
              execution_optimistic: ExecutionOptimisticSchema,
              data: z.array(PtcDutySchema),
            })
            .openapi({
              title: 'GetPtcDutiesResponse',
              required: ['dependent_root', 'execution_optimistic', 'data'],
            }),
        },
      },
    },
    400: {
      description: 'Invalid epoch or index',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid epoch: -2' },
        },
      },
    },
    500: InternalErrorResponse,
    503: CurrentlySyncingResponse,
  },
})

export const getEthV3ValidatorBlocksSlotRoute = createRoute({
  method: 'get',
  path: '/eth/v3/validator/blocks/{slot}',
  tags: ['ValidatorRequiredApi', 'Validator'],
  summary: 'Produce a new block, without signature.',
  description:
    'Requests a beacon node to produce a valid block, which can then be signed by a validator. The\nreturned block may be blinded or unblinded, depending on the current state of the network as\ndecided by the execution and beacon nodes.\n\nThe beacon node must return an unblinded block if it obtains the execution payload from its\npaired execution node. It must only return a blinded block if it obtains the execution payload\nheader from an MEV relay.\n\nMetadata in the response indicates the type of block produced.\n\nThis endpoint only supports forks through Fulu. Use `POST /eth/v4/validator/blocks/{slot}`\nfor Gloas and later forks.\n',
  operationId: 'produceBlockV3',
  request: {
    params: z.object({
      slot: Uint64Schema.openapi({
        param: {
          name: 'slot',
          in: 'path',
          required: true,
          description: 'The slot for which the block should be proposed.',
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }),
    }),
    query: z.object({
      randao_reveal: SignatureSchema.openapi({
        param: {
          name: 'randao_reveal',
          in: 'query',
          required: true,
          description: "The validator's randao reveal value.",
          schema: { $ref: '#/components/schemas/Signature' },
        },
      }),
      graffiti: GraffitiSchema.openapi({
        param: {
          name: 'graffiti',
          in: 'query',
          required: false,
          description: 'Arbitrary data validator wants to include in block.',
          schema: { $ref: '#/components/schemas/Graffiti' },
        },
      }).exactOptional(),
      skip_randao_verification: SkipRandaoVerificationParamsSchema,
      builder_boost_factor: Uint64Schema.openapi({
        param: {
          name: 'builder_boost_factor',
          in: 'query',
          required: false,
          description:
            "Percentage multiplier to apply to the builder's payload value when choosing between a\nbuilder payload header and payload from the paired execution node. This parameter is only\nrelevant if the beacon node is connected to a builder, deems it safe to produce a builder\npayload, and receives valid responses from both the builder endpoint _and_ the paired\nexecution node. When these preconditions are met, the server MUST act as follows:\n\n* if `exec_node_payload_value >= builder_boost_factor * (builder_payload_value // 100)`,\n  then return a full (unblinded) block containing the execution node payload.\n* otherwise, return a blinded block containing the builder payload header.\n\nServers must support the following values of the boost factor which encode common\npreferences:\n\n* `builder_boost_factor=0`: prefer the local execution node payload unless an error makes it\n  unviable.\n* `builder_boost_factor=100`: profit maximization mode; choose whichever\n  payload pays more.\n* `builder_boost_factor=2**64 - 1`: prefer the external builder payload unless an error or\n  beacon node health check makes it unviable.\n\nServers should use saturating arithmetic or another technique to ensure that large values of\nthe `builder_boost_factor` do not trigger overflows or errors. If this parameter is\nprovided and the beacon node is not configured with a builder then the beacon node MUST\nrespond with a full block, which the caller can choose to reject if it wishes.\nIf the value is provided but out of range for a 64-bit unsigned integer, then an error\nresponse with status code 400 MUST be returned.\n",
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success response',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z
                .enum(['phase0', 'altair', 'bellatrix', 'capella', 'deneb', 'electra', 'fulu'])
                .openapi({ example: 'fulu' }),
              execution_payload_blinded: z.boolean().openapi({ example: false }),
              execution_payload_value: z.string().openapi({ example: '12345' }),
              consensus_block_value: z.string().openapi({ example: '12345' }),
              data: z.union([
                FuluBlockContentsSchema,
                ElectraBlockContentsSchema,
                ElectraBlindedBeaconBlockSchema,
                DenebBlockContentsSchema,
                DenebBlindedBeaconBlockSchema,
                CapellaBeaconBlockSchema,
                CapellaBlindedBeaconBlockSchema,
                BellatrixBeaconBlockSchema,
                BellatrixBlindedBeaconBlockSchema,
                AltairBeaconBlockSchema,
                Phase0BeaconBlockSchema,
              ]),
            })
            .openapi({
              title: 'ProduceBlockV3Response',
              required: [
                'version',
                'execution_payload_blinded',
                'execution_payload_value',
                'consensus_block_value',
                'data',
              ],
            }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized block or blinded block bytes. Use Accept header to choose this response type, version string is sent in header `Eth-Consensus-Version` and block type in `Eth-Execution-Payload-Blinded`.',
            }),
        },
      },
      headers: z.object({
        'Eth-Consensus-Version': EthConsensusVersionHeaderSchema,
        'Eth-Execution-Payload-Blinded': EthExecutionPayloadBlindedHeaderSchema,
        'Eth-Execution-Payload-Value': EthExecutionPayloadValueHeaderSchema,
        'Eth-Consensus-Block-Value': EthConsensusBlockValueHeaderSchema,
      }),
    },
    400: {
      description: 'Invalid block production request',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          examples: {
            InvalidRequest: { value: { code: 400, message: 'Invalid request to produce a block' } },
          },
        },
      },
    },
    406: NotAcceptableResponse,
    500: InternalErrorResponse,
    503: CurrentlySyncingResponse,
  },
  deprecated: true,
})

export const postEthV4ValidatorBlocksSlotRoute = createRoute({
  method: 'post',
  path: '/eth/v4/validator/blocks/{slot}',
  tags: ['Validator', 'ValidatorRequiredApi'],
  summary: 'Produce a new block, without signature.',
  description:
    "Requests a beacon node to produce a valid block, which the validator then signs.\n\nThe beacon node always builds a local payload and MAY consider a p2p bid, so a block is returned\neven when no builder bid is available. The validator client supplies a `BuilderConfig` in the\nrequest body: a list of `BuilderEntry` objects in its `builders` field, one per bid request,\nplus a top-level `min_bid` and `builder_boost_factor` that apply to p2p bids. Each entry\nrequests a bid from its `url`, and the entry applies to the bid that request returns; an empty\n`builder_pubkeys` list accepts any builder, and a bid MUST NOT be accepted unless signed by\none of a non-empty list.\n\nA bid's total payment counts its `execution_payment` at most at the `max_execution_payment`\nthat applies to it; payment above that cap adds nothing to the bid's chances, though the\nproposer still receives it if the builder honors the bid. A builder bid, over the builder API\nor p2p, is rejected if its total payment falls below the `min_bid` that applies to it. Every\nsurviving bid is then weighted by the `builder_boost_factor` that applies to it, and the\nhighest weighted value competes with the local build's value weighted by `100`. The local\nbuild wins a tie.\n\nThe response carries the full block contents only when the beacon node self-built the block and\n`include_payload` is `true`; in every other case, including any builder bid win, it carries\nonly the `BeaconBlock`.\n\nEvery block is published via `POST /eth/v2/beacon/blocks`. A self-built block carries\n`BUILDER_INDEX_SELF_BUILD` as its `builder_index`, and the validator client publishes its\nexecution payload envelope via `POST /eth/v1/beacon/execution_payload_envelopes`. When a\nbuilder bid won, the winning builder releases the envelope instead, and the validator client\nechoes `Eth-Builder-Url` if one was returned.\n\nThis endpoint is specific to the post-Gloas forks and is not backwards compatible with previous\nforks.\n",
  operationId: 'produceBlockV4',
  request: {
    params: z.object({
      slot: Uint64Schema.openapi({
        param: {
          name: 'slot',
          in: 'path',
          required: true,
          description: 'The slot for which the block should be proposed.',
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }),
    }),
    query: z.object({
      randao_reveal: SignatureSchema.openapi({
        param: {
          name: 'randao_reveal',
          in: 'query',
          required: true,
          description: "The validator's randao reveal value.",
          schema: { $ref: '#/components/schemas/Signature' },
        },
      }),
      graffiti: GraffitiSchema.openapi({
        param: {
          name: 'graffiti',
          in: 'query',
          required: false,
          description: 'Arbitrary data validator wants to include in block.',
          schema: { $ref: '#/components/schemas/Graffiti' },
        },
      }).exactOptional(),
      skip_randao_verification: SkipRandaoVerificationParamsSchema,
      include_payload: z
        .stringbool()
        .openapi({
          param: {
            name: 'include_payload',
            in: 'query',
            required: true,
            description:
              'Controls whether the execution payload envelope and blobs are included in the response\nwhen self-building (using local execution payload).\n\nWhen `true`, the response includes the full block contents: beacon block,\nexecution payload envelope, blobs, and KZG proofs. This enables stateless operation\nwhere the validator client can use multiple beacon nodes (multi-BN setups, distributed validators, failover).\n\nWhen `false`, only the beacon block is returned and the beacon node caches the execution\npayload envelope and blobs internally. The validator client must then fetch them separately\nvia `GET /eth/v1/validator/execution_payload_envelopes/{slot}/{beacon_block_root}`. This saves\nbandwidth but requires the validator client to publish via the same beacon node that\nproduced the block (stateful operation).\n\nThis parameter affects the self-built case only. When a builder bid wins, the beacon node\ndoes not hold that payload, so it returns only the beacon block regardless of this\nparameter.\n',
            schema: { type: 'boolean' },
          },
        }),
    }),
    headers: z.object({
      'Eth-Consensus-Version': ConsensusVersionSchema.openapi({
        param: {
          in: 'header',
          schema: { $ref: '#/components/schemas/ConsensusVersion' },
          required: true,
          name: 'Eth-Consensus-Version',
          description: 'The active consensus version to which the request belongs.',
        },
      }),
    }),
    body: {
      description:
        "A `BuilderConfig` for this request: the builder entries to solicit bids from, plus the\ntop-level `min_bid` and `builder_boost_factor` that apply to p2p bids.\nEach entry's `auth.message.slot` is the `slot` this request is for;\nthe builder rejects a mismatch, so an entry naming a different slot is one the beacon node\ndoes not use for a bid request. A missing body, or one that cannot be decoded, is invalid and\nMUST fail with a 400. Every other failure is per entry: an entry the beacon node rejects, or\nwhose builder does not answer, yields no bid and MUST NOT fail the request, so one bad entry\nnever costs the proposer its slot. A local-preferred build is requested with an empty\n`builders` list and a `builder_boost_factor` of `0`, which prefers the local payload unless\nan error makes it unviable.\n",
      content: {
        'application/json': { schema: GloasBuilderConfigSchema },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `BuilderConfig` bytes (see the `BuilderConfig` type description for the container and constants). Use Content-Type header to indicate that SSZ data is contained in the request body.',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success response',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z.literal('gloas').openapi({ example: 'gloas' }),
              consensus_block_value: z
                .string()
                .openapi({
                  example: '12345',
                  description: 'Consensus rewards for this block in Wei',
                }),
              execution_payload_value: z
                .string()
                .openapi({
                  example: '12345',
                  description:
                    'Execution payload value in Wei. The value of the local execution payload when\nself-building, or the total value of the builder bid when committing to one.\n',
                }),
              execution_payload_included: z
                .boolean()
                .openapi({
                  description:
                    'Indicates whether the execution payload envelope is included in the response.\nWhen `true`, the `data` field contains a `BlockContents` object with the\nbeacon block, execution payload envelope, KZG proofs, and blobs. When `false`,\nthe `data` field contains only a `BeaconBlock`.\n',
                  example: false,
                }),
              data: z.union([GloasBeaconBlockSchema, GloasBlockContentsSchema]),
            })
            .openapi({
              title: 'ProduceBlockV4Response',
              required: [
                'version',
                'consensus_block_value',
                'execution_payload_value',
                'execution_payload_included',
                'data',
              ],
            }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `BeaconBlock` or `BlockContents` bytes. Use Accept header to choose this response type, version string is sent in header `Eth-Consensus-Version` and payload inclusion indicated by `Eth-Execution-Payload-Included` header.',
            }),
        },
      },
      headers: z.object({
        'Eth-Consensus-Version': EthConsensusVersionHeaderSchema,
        'Eth-Consensus-Block-Value': EthConsensusBlockValueHeaderSchema,
        'Eth-Execution-Payload-Value': EthExecutionPayloadValueHeaderSchema,
        'Eth-Execution-Payload-Included': EthExecutionPayloadIncludedHeaderSchema,
        'Eth-Builder-Url': z
          .url()
          .exactOptional()
          .openapi({
            description:
              'The `url` of a winning builder when the bid was retrieved via the builder-API.\nThe validator client MUST echo this value in the `Eth-Builder-Url` request header when\npublishing the signed block, so the beacon node can forward the block to the same builder\nvia `submitSignedBeaconBlock`. Absent for a self-built block or a bid won over p2p.\n',
            param: { required: false },
            example: 'https://builder.example.com',
          }),
      }),
    },
    400: {
      description: 'Invalid block production request',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          examples: {
            InvalidRequest: { value: { code: 400, message: 'Invalid request to produce a block' } },
          },
        },
      },
    },
    406: NotAcceptableResponse,
    415: UnsupportedMediaTypeResponse,
    500: InternalErrorResponse,
    503: CurrentlySyncingResponse,
  },
})

export const getEthV1ValidatorAttestationDataRoute = createRoute({
  method: 'get',
  path: '/eth/v1/validator/attestation_data',
  tags: ['ValidatorRequiredApi', 'Validator'],
  summary: 'Produce an attestation data',
  description:
    'Requests that the beacon node produce an `AttestationData`.\n\nFor `slot`s in Electra and Fulu, this `AttestationData` must have an `index` of `0`.\n\nFor `slot`s in Gloas and later, the `index` in `AttestationData` is used to signal\npayload availability which is determined and set by the beacon node.\n\nA 503 error must be returned if the block identified by the response\n`beacon_block_root` is optimistic (i.e. the attestation attests to a block\nthat has not been fully verified by an execution engine).\n',
  operationId: 'produceAttestationData',
  request: {
    query: z.object({
      slot: Uint64Schema.openapi({
        param: {
          name: 'slot',
          in: 'query',
          required: true,
          description: 'The slot for which an attestation data should be created.',
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }),
      committee_index: Uint64Schema.openapi({
        param: {
          name: 'committee_index',
          in: 'query',
          deprecated: true,
          description:
            'The committee index for which an attestation data should be created. For `slot`s in\nElectra and later, this parameter MAY always be set to 0.\nFor `slot`s in Gloas and later, this parameter SHOULD be omitted, as the Beacon node\nSHOULD be setting the index based on network rules.\n',
          required: false,
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success response',
      content: {
        'application/json': {
          schema: z
            .object({ data: Phase0AttestationDataSchema })
            .openapi({ title: 'ProduceAttestationDataResponse', required: ['data'] }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `AttestationData` bytes. Use Accept header to choose this response type',
            }),
        },
      },
    },
    400: InvalidRequestResponse,
    406: NotAcceptableResponse,
    500: InternalErrorResponse,
    503: CurrentlySyncingResponse,
  },
})

export const getEthV1ValidatorPayloadAttestationDataRoute = createRoute({
  method: 'get',
  path: '/eth/v1/validator/payload_attestation_data',
  tags: ['ValidatorRequiredApi', 'Validator'],
  summary: 'Produce payload attestation data',
  description:
    'Requests that the beacon node produce a `PayloadAttestationData`.\n\nThis endpoint is used by PTC validators to obtain the data structure they need to attest to\nregarding payload presence and blob data availability for a specific slot.\n\nA 503 error must be returned if the beacon node is currently syncing.\n',
  operationId: 'producePayloadAttestationData',
  request: {
    query: z.object({
      slot: Uint64Schema.openapi({
        param: {
          name: 'slot',
          in: 'query',
          required: true,
          description: 'The slot for which payload attestation data should be created.',
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success response',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z.literal('gloas').openapi({ example: 'gloas' }),
              data: GloasPayloadAttestationDataSchema,
            })
            .openapi({
              title: 'ProducePayloadAttestationDataResponse',
              required: ['version', 'data'],
            }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `PayloadAttestationData` bytes. Use Accept header to choose this response type',
            }),
        },
      },
      headers: z.object({ 'Eth-Consensus-Version': EthConsensusVersionHeaderSchema }),
    },
    204: {
      description:
        'No block has been seen for the requested slot. Used to signal validator to not cast any payload attestation.',
    },
    400: InvalidRequestResponse,
    406: NotAcceptableResponse,
    500: InternalErrorResponse,
    503: CurrentlySyncingResponse,
  },
})

export const getEthV2ValidatorAggregateAttestationRoute = createRoute({
  method: 'get',
  path: '/eth/v2/validator/aggregate_attestation',
  tags: ['ValidatorRequiredApi', 'Validator'],
  summary: 'Get aggregated attestation',
  description:
    'Aggregates all attestations matching given attestation data root, slot and committee index.\n\nA 503 error must be returned if the block identified by the response\n`beacon_block_root` is optimistic (i.e. the aggregated attestation attests\nto a block that has not been fully verified by an execution engine).\n\nA 404 error must be returned if no attestation is available for the requested\n`attestation_data_root`.\n',
  operationId: 'getAggregatedAttestationV2',
  request: {
    query: z.object({
      attestation_data_root: RootSchema.openapi({
        param: {
          name: 'attestation_data_root',
          in: 'query',
          required: true,
          description: 'HashTreeRoot of AttestationData that validator wants aggregated',
          schema: { $ref: '#/components/schemas/Root' },
        },
      }),
      slot: Uint64Schema.openapi({
        param: {
          name: 'slot',
          in: 'query',
          required: true,
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }),
      committee_index: Uint64Schema.openapi({
        param: {
          name: 'committee_index',
          in: 'query',
          required: true,
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description:
        'Returns aggregated `Attestation` object with same `AttestationData` root, slot and committee index.',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z
                .enum([
                  'phase0',
                  'altair',
                  'bellatrix',
                  'capella',
                  'deneb',
                  'electra',
                  'fulu',
                  'gloas',
                ])
                .openapi({ example: 'gloas' }),
              data: z.union([
                GloasAttestationSchema,
                ElectraAttestationSchema,
                Phase0AttestationSchema,
              ]),
            })
            .openapi({
              title: 'GetAggregatedAttestationV2Response',
              required: ['version', 'data'],
            }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `Attestation` bytes. Use Accept header to choose this response type',
            }),
        },
      },
      headers: z.object({ 'Eth-Consensus-Version': EthConsensusVersionHeaderSchema }),
    },
    400: InvalidRequestResponse,
    404: NotFoundResponse,
    406: NotAcceptableResponse,
    500: InternalErrorResponse,
    503: CurrentlySyncingResponse,
  },
})

export const postEthV2ValidatorAggregateAndProofsRoute = createRoute({
  method: 'post',
  path: '/eth/v2/validator/aggregate_and_proofs',
  tags: ['ValidatorRequiredApi', 'Validator'],
  summary: 'Publish multiple aggregate and proofs',
  description:
    'Verifies given aggregate and proofs and publishes them on appropriate gossipsub topic.',
  operationId: 'publishAggregateAndProofsV2',
  request: {
    headers: z.object({
      'Eth-Consensus-Version': ConsensusVersionSchema.openapi({
        param: {
          in: 'header',
          schema: { $ref: '#/components/schemas/ConsensusVersion' },
          required: true,
          name: 'Eth-Consensus-Version',
          description:
            'The active consensus version to which the aggregate and proofs being submitted belong.',
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.union([
            z.array(GloasSignedAggregateAndProofSchema),
            z.array(ElectraSignedAggregateAndProofSchema),
            z.array(Phase0SignedAggregateAndProofSchema),
          ]),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `List[SignedAggregateAndProof, MAX_COMMITTEES_PER_SLOT * TARGET_AGGREGATORS_PER_COMMITTEE]` bytes. Use content type header to indicate that SSZ data is contained in the request body.',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Successful response' },
    400: {
      description: 'Errors with one or more aggregate and proofs',
      content: { 'application/json': { schema: IndexedErrorMessageSchema } },
    },
    415: UnsupportedMediaTypeResponse,
    500: InternalErrorResponse,
  },
})

export const postEthV1ValidatorBeaconCommitteeSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/eth/v1/validator/beacon_committee_subscriptions',
  tags: ['ValidatorRequiredApi', 'Validator'],
  summary: 'Signal beacon node to prepare for a committee subnet',
  description:
    "After beacon node receives this request,\nsearch using discv5 for peers related to this subnet\nand replace current peers with those ones if necessary\nIf validator `is_aggregator`, beacon node must:\n- announce subnet topic subscription on gossipsub\n- aggregate attestations received on that subnet\n\nBeacon nodes SHOULD use the set of validators that have submitted subscriptions via this\nendpoint to determine which validators are using the node for duties and to calculate the\nnode's required custody group count (CGC). Validator clients SHOULD submit one entry per\nattached active validator per attestation duty, including when multiple validators share\nthe same `(slot, committee_index)`, so the beacon node tracks every attached validator\nrather than only one per subnet.\n",
  operationId: 'prepareBeaconCommitteeSubnet',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  validator_index: Uint64Schema,
                  committee_index: Uint64Schema,
                  committees_at_slot: Uint64Schema.openapi({
                    description: 'Number of committees at the returned slot',
                  }),
                  slot: Uint64Schema.openapi({
                    description: 'Should be slot at which validator is assigned to attest',
                  }),
                  is_aggregator: z
                    .boolean()
                    .openapi({
                      description:
                        'Signals to BN that a validator on the VC has been chosen for aggregator role.',
                    }),
                })
                .openapi({
                  required: [
                    'validator_index',
                    'committee_index',
                    'committees_at_slot',
                    'slot',
                    'is_aggregator',
                  ],
                }),
            )
            .openapi({ title: 'SubscribeToBeaconCommitteeSubnetRequestBody' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Slot signature is valid and beacon node has prepared the attestation subnet.\n\nNote that we cannot be certain the Beacon node will find peers for that subnet for various reasons.\n',
    },
    400: InvalidRequestResponse,
    500: InternalErrorResponse,
    503: CurrentlySyncingResponse,
  },
})

export const postEthV1ValidatorSyncCommitteeSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/eth/v1/validator/sync_committee_subscriptions',
  tags: ['ValidatorRequiredApi', 'Validator'],
  summary: 'Subscribe to sync committee subnets',
  description:
    'Subscribe to a number of sync committee subnets\n\nSync committees are not present in phase0, but are required for Altair networks.\n\nSubscribing to sync committee subnets is an action performed by VC to enable network participation in Altair networks, and only required if the VC has an active validator in an active sync committee.\n',
  operationId: 'prepareSyncCommitteeSubnets',
  request: {
    body: {
      content: { 'application/json': { schema: z.array(AltairSyncCommitteeSubscriptionSchema) } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Successful response' },
    400: InvalidRequestResponse,
    500: InternalErrorResponse,
  },
})

export const postEthV1ValidatorBeaconCommitteeSelectionsRoute = createRoute({
  method: 'post',
  path: '/eth/v1/validator/beacon_committee_selections',
  tags: ['Validator'],
  summary: 'Determine if a distributed validator has been selected to aggregate attestations',
  description:
    'This endpoint should be used by a validator client running as part of a distributed validator cluster, and is \nimplemented by a distributed validator middleware client. This endpoint is used to exchange partial \nselection proofs for combined/aggregated selection proofs to allow a validator client \nto correctly determine if any of its validators has been selected to perform an attestation aggregation duty in a slot. \nValidator clients running in a distributed validator cluster must query this endpoint at the start of an epoch either for all slots of \nthe current epoch or for all slots of the current and all slots of the next epoch in two separate requests. In both cases it should be for \nall validators that have attester duties in the respective epoch. Consensus clients need not support this endpoint and may return a 501.\n',
  operationId: 'submitBeaconCommitteeSelections',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .array(BeaconCommitteeSelectionSchema)
            .openapi({ title: 'BeaconCommitteeSelectionRequest' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the threshold aggregated beacon committee selection proofs.\n',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(BeaconCommitteeSelectionSchema) })
            .openapi({ title: 'BeaconCommitteeSelectionResponse', required: ['data'] }),
        },
      },
    },
    400: InvalidRequestResponse,
    500: InternalErrorResponse,
    501: NotImplementedErrorResponse,
    503: CurrentlySyncingResponse,
  },
})

export const getEthV1ValidatorSyncCommitteeContributionRoute = createRoute({
  method: 'get',
  path: '/eth/v1/validator/sync_committee_contribution',
  tags: ['ValidatorRequiredApi', 'Validator'],
  summary: 'Produce a sync committee contribution',
  description:
    'Requests that the beacon node produce a sync committee contribution.\n\nA 503 error must be returned if the block identified by the response\n`beacon_block_root` is optimistic (i.e. the sync committee contribution\nrefers to a block that has not been fully verified by an execution engine).\n\nA 404 error must be returned if no sync committee contribution is available\nfor the requested `beacon_block_root`.\n',
  operationId: 'produceSyncCommitteeContribution',
  request: {
    query: z.object({
      slot: Uint64Schema.openapi({
        param: {
          name: 'slot',
          in: 'query',
          required: true,
          description: 'The slot for which a sync committee contribution should be created.',
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }),
      subcommittee_index: Uint64Schema.openapi({
        param: {
          name: 'subcommittee_index',
          in: 'query',
          description: 'the subcommittee index for which to produce the contribution.',
          required: true,
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }),
      beacon_block_root: RootSchema.openapi({
        param: {
          name: 'beacon_block_root',
          in: 'query',
          description: 'the block root for which to produce the contribution.',
          required: true,
          schema: { $ref: '#/components/schemas/Root' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success response',
      content: {
        'application/json': {
          schema: z
            .object({ data: AltairSyncCommitteeContributionSchema })
            .openapi({ title: 'produceSyncCommitteeContributionResponse', required: ['data'] }),
        },
      },
    },
    400: InvalidRequestResponse,
    404: NotFoundResponse,
    500: InternalErrorResponse,
    503: CurrentlySyncingResponse,
  },
})

export const postEthV1ValidatorSyncCommitteeSelectionsRoute = createRoute({
  method: 'post',
  path: '/eth/v1/validator/sync_committee_selections',
  tags: ['Validator'],
  summary:
    'Determine if a distributed validator has been selected to make a sync committee contribution',
  description:
    'Submit sync committee selections to a DVT middleware client. It returns the threshold aggregated sync \ncommittee selection. This endpoint should be used by a validator client running as part of a distributed \nvalidator cluster, and is implemented by a distributed validator middleware client. This endpoint is \nused to exchange partial selection proofs (slot signatures) for combined/aggregated selection proofs to \nallow a validator client to correctly determine if any of its validators has been selected to perform a \nsync committee contribution (sync aggregation) duty in a slot. Validator clients running in a distributed validator cluster must query this endpoint\nat the start of each slot for all validators that are included in the current sync committee. Consensus\nclients need not support this endpoint and may return a 501.\n',
  operationId: 'submitSyncCommitteeSelections',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .array(SyncCommitteeSelectionSchema)
            .openapi({ title: 'SyncCommitteeSelectionRequest' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the threshold aggregated sync committee selection proofs.\n',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(SyncCommitteeSelectionSchema) })
            .openapi({ title: 'SyncCommitteeSelectionResponse', required: ['data'] }),
        },
      },
    },
    400: InvalidRequestResponse,
    500: InternalErrorResponse,
    501: NotImplementedErrorResponse,
    503: CurrentlySyncingResponse,
  },
})

export const postEthV1ValidatorContributionAndProofsRoute = createRoute({
  method: 'post',
  path: '/eth/v1/validator/contribution_and_proofs',
  tags: ['ValidatorRequiredApi', 'Validator'],
  summary: 'Publish multiple contribution and proofs',
  description: 'Publish multiple signed sync committee contribution and proofs',
  operationId: 'publishContributionAndProofs',
  request: {
    body: {
      content: { 'application/json': { schema: z.array(AltairSignedContributionAndProofSchema) } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Successful response' },
    400: {
      description: 'Errors with one or more contribution and proofs',
      content: { 'application/json': { schema: IndexedErrorMessageSchema } },
    },
    500: InternalErrorResponse,
  },
})

export const postEthV1ValidatorPrepareBeaconProposerRoute = createRoute({
  method: 'post',
  path: '/eth/v1/validator/prepare_beacon_proposer',
  tags: ['ValidatorRequiredApi', 'Validator'],
  summary: 'Provide beacon node with proposals for the given validators.',
  description:
    'Deprecated from Gloas onwards in favor of\n`POST /eth/v1/validator/proposer_preferences`, which supersedes both fee recipient and\ngas limit preferences. Beacon node support for this endpoint pre-Gloas is REQUIRED;\npost-Gloas support is OPTIONAL and the endpoint MAY be removed.\n\nPrepares the beacon node for potential proposers by supplying information\nrequired when proposing blocks for the given validators.  The information\nsupplied for each validator index will persist through the epoch in which\nthe call is submitted and for a further two epochs after that, or until the\nbeacon node restarts.  It is expected that validator clients will send this\ninformation periodically, for example each epoch, to ensure beacon nodes have\ncorrect and timely fee recipient information.\n\nNote that there is no guarantee that the beacon node will use the supplied fee\nrecipient when creating a block proposal, so on receipt of a proposed block the\nvalidator should confirm that it finds the fee recipient within the block\nacceptable before signing it.\n\nAlso note that requests containing currently inactive or unknown validator\nindices will be accepted, as they may become active at a later epoch.\n',
  operationId: 'prepareBeaconProposer',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({ validator_index: Uint64Schema, fee_recipient: ExecutionAddressSchema })
              .openapi({ required: ['validator_index', 'fee_recipient'] }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Preparation information has been received.\n' },
    400: InvalidRequestResponse,
    500: InternalErrorResponse,
  },
  deprecated: true,
})

export const postEthV1ValidatorRegisterValidatorRoute = createRoute({
  method: 'post',
  path: '/eth/v1/validator/register_validator',
  tags: ['Validator'],
  summary:
    'Provide beacon node with registrations for the given validators to the external builder network.',
  description:
    'Deprecated from Gloas onwards. Under Gloas, proposer fee recipient and gas limit preferences\nare expressed via `POST /eth/v1/validator/proposer_preferences` instead. Beacon node support\nfor this endpoint pre-Gloas is REQUIRED; post-Gloas support is OPTIONAL and the endpoint\nMAY be removed.\n\nPrepares the beacon node for engaging with external builders. The\ninformation must be sent by the beacon node to the builder network. It is\nexpected that the validator client will send this information periodically\nto ensure the beacon node has correct and timely registration information\nto provide to builders.\n\nNote that only registrations for active or pending validators must be sent to the builder network.\nRegistrations for unknown or exited validators must be filtered out and not sent to the builder network.\n',
  operationId: 'registerValidator',
  request: {
    body: {
      content: {
        'application/json': { schema: z.array(SignedValidatorRegistrationSchema) },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `List[SignedValidatorRegistrationV1, VALIDATOR_REGISTRY_LIMIT]` bytes. Use content type header to indicate that SSZ data is contained in the request body.',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Registration information has been received.' },
    400: InvalidRequestResponse,
    415: UnsupportedMediaTypeResponse,
    500: InternalErrorResponse,
  },
  deprecated: true,
})

export const postEthV1ValidatorProposerPreferencesRoute = createRoute({
  method: 'post',
  path: '/eth/v1/validator/proposer_preferences',
  tags: ['Validator', 'ValidatorRequiredApi'],
  summary: 'Submit signed proposer preferences',
  description:
    "Verifies given signed proposer preferences and publishes them on the `proposer_preferences`\ngossipsub topic.\n\nNotes:\n- Validator clients SHOULD begin submitting signed proposer preferences one epoch before the\n  Gloas fork activates, so the proposer preference caches kept by both beacon nodes and\n  builders are warm at the fork boundary, letting builders prepare valid bids for the first\n  Gloas slots.\n- Until the Gloas fork activates, beacon nodes MUST continue to honor fee recipient and gas\n  limit information supplied via `POST /eth/v1/validator/prepare_beacon_proposer` and\n  `POST /eth/v1/validator/register_validator`. From the Gloas fork onwards, signed proposer\n  preferences supersede both endpoints as the source of proposer fee recipient and gas\n  limit preferences.\n- For validators served by the beacon node, if no signed proposer preferences are available\n  for a given proposal slot, the beacon node SHOULD fall back to the parent block's gas limit\n  when preparing the local payload or accepting bids for that validator. On the p2p network,\n  bids whose fee recipient or gas limit do not match a validator's preferences are rejected at\n  gossip validation, while bids for a slot with no available preferences are ignored; applying\n  sensible defaults reduces missed proposals during the transition.\n",
  operationId: 'submitProposerPreferences',
  request: {
    headers: z.object({
      'Eth-Consensus-Version': ConsensusVersionSchema.openapi({
        param: {
          in: 'header',
          schema: { $ref: '#/components/schemas/ConsensusVersion' },
          required: true,
          name: 'Eth-Consensus-Version',
          description:
            'The active consensus version to which the signed proposer preferences being submitted belongs.',
        },
      }),
    }),
    body: {
      description: 'Array of `SignedProposerPreferences` objects to be submitted.',
      content: {
        'application/json': { schema: z.array(GloasSignedProposerPreferencesSchema) },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `List[SignedProposerPreferences, (MIN_SEED_LOOKAHEAD + 1) * SLOTS_PER_EPOCH]` bytes. Use Content-Type header to indicate that SSZ data is contained in the request body.',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Signed proposer preferences are stored in pool and broadcasted to the network',
    },
    400: {
      description: 'Errors with one or more signed proposer preferences',
      content: { 'application/json': { schema: IndexedErrorMessageSchema } },
    },
    415: UnsupportedMediaTypeResponse,
    500: InternalErrorResponse,
  },
})

export const postEthV1ValidatorBuilderPreferencesRoute = createRoute({
  method: 'post',
  path: '/eth/v1/validator/builder_preferences',
  tags: ['Validator'],
  summary: 'Submit builder preferences',
  description:
    "Submits per-builder preferences for one or more proposers. The request body is a flat list of\n`BuilderPreferencesEntry` objects, each naming the proposer in `proposer_pubkey`; the beacon\nnode submits each to the builder-API `submitBuilderPreferences` endpoint at the entry's `url`.\nApplicable from the Gloas fork onwards.\n\nNotes:\n- Each entry targets one builder `url`, to which the beacon node makes one submission.\n- Entries are identified by `proposer_pubkey`, so several proposers MAY submit to the same `url`.\n- The beacon node routes each entry by its `url` and submits to that builder's\n  `submitBuilderPreferences` for the entry's `proposer_pubkey`, forwarding the `auth` and\n  `max_execution_payment`.\n- Validators MAY submit in the epoch prior to proposing (from `state.proposer_lookahead`), so\n  builders hold the preferences before the bid request arrives.\n",
  operationId: 'submitBuilderPreferences',
  request: {
    headers: z.object({
      'Eth-Consensus-Version': ConsensusVersionSchema.openapi({
        param: {
          in: 'header',
          schema: { $ref: '#/components/schemas/ConsensusVersion' },
          required: true,
          name: 'Eth-Consensus-Version',
          description:
            'The active consensus version to which the submitted builder preferences belong.',
        },
      }),
    }),
    body: {
      description:
        'Array of `BuilderPreferencesEntry` objects to submit, one per builder per proposer.',
      content: {
        'application/json': { schema: z.array(GloasBuilderPreferencesEntrySchema).max(4096) },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `List[BuilderPreferencesEntry, MAX_BUILDER_ENTRIES * (MIN_SEED_LOOKAHEAD + 1) * SLOTS_PER_EPOCH]` bytes. Use Content-Type header to indicate that SSZ data is contained in the request body.',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Every entry was submitted and its builder accepted it' },
    400: {
      description:
        "One or more entries failed; the others were still submitted. Each failure is reported by the\nentry's index via `IndexedErrorMessage`, proxying the builder's error for that entry.\n",
      content: { 'application/json': { schema: IndexedErrorMessageSchema } },
    },
    415: UnsupportedMediaTypeResponse,
    500: InternalErrorResponse,
    503: CurrentlySyncingResponse,
  },
})

export const postEthV1ValidatorLivenessEpochRoute = createRoute({
  method: 'post',
  path: '/eth/v1/validator/liveness/{epoch}',
  tags: ['Validator'],
  summary: 'Indicates if a validator has been observed on the network',
  description:
    'Requests the beacon node to indicate if a validator has been observed to be live in a given epoch. The beacon node might detect liveness by observing messages from the validator on the network, in the beacon chain, from its API or from any other source. A beacon node SHOULD support the current and previous epoch, however it MAY support earlier epoch. It is important to note that the values returned by the beacon node are not canonical; they are best-effort and based upon a subjective view of the network. A beacon node that was recently started or suffered a network partition may indicate that a validator is not live when it actually is.',
  operationId: 'getLiveness',
  request: {
    params: z.object({
      epoch: Uint64Schema.openapi({
        param: {
          name: 'epoch',
          description: 'The epoch for which liveness is being queried',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }),
    }),
    body: {
      description: 'An array of the validator indices for which to detect liveness.',
      content: {
        'application/json': {
          schema: z.array(Uint64Schema).min(1).openapi({ title: 'PostLivenessRequestBody' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success response',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(
                z
                  .object({ index: Uint64Schema, is_live: z.boolean() })
                  .openapi({ required: ['index', 'is_live'] }),
              ),
            })
            .openapi({ title: 'PostLivenessResponseBody', required: ['data'] }),
        },
      },
    },
    400: {
      description: 'Invalid epoch or index',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid epoch: -2' },
        },
      },
    },
    500: InternalErrorResponse,
    503: CurrentlySyncingResponse,
  },
})

export const getEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRootRoute = createRoute({
  method: 'get',
  path: '/eth/v1/validator/execution_payload_envelopes/{slot}/{beacon_block_root}',
  tags: ['Validator', 'ValidatorRequiredApi'],
  summary: 'Get execution payload envelope',
  description:
    "Retrieves the cached execution payload envelope for the current proposer's slot, to be\nsigned and published via `publishExecutionPayloadEnvelope`.\n\nThe beacon node only caches the envelope for the current slot's locally built payload.\nRequests for older slots or slots where no envelope has been cached will return a 404\nerror. This endpoint does not fetch payloads from the execution layer.\n\nDepending on `Accept` header, the response can be returned either as JSON or as bytes serialized by SSZ.\n",
  operationId: 'getExecutionPayloadEnvelope',
  request: {
    params: z.object({
      slot: Uint64Schema.openapi({
        param: {
          name: 'slot',
          in: 'path',
          required: true,
          description: 'Slot for which the execution payload envelope is requested.',
          schema: { $ref: '#/components/schemas/Uint64' },
        },
      }),
      beacon_block_root: RootSchema.openapi({
        param: {
          name: 'beacon_block_root',
          in: 'path',
          required: true,
          description:
            'Root of the beacon block associated with this execution payload envelope. The beacon\nnode will verify that the cached envelope matches the given block root, returning a\n404 if there is no match. Requiring the block root makes the lookup re-org resistant:\nif a re-org occurs between block production and envelope retrieval, the validator client\nwill receive a 404 rather than an envelope committed to a stale block.\n',
          schema: { $ref: '#/components/schemas/Root' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z.literal('gloas').openapi({ example: 'gloas' }),
              data: GloasExecutionPayloadEnvelopeSchema,
            })
            .openapi({
              title: 'GetExecutionPayloadEnvelopeResponse',
              required: ['version', 'data'],
            }),
        },
        'application/octet-stream': {
          schema: z
            .any()
            .openapi({
              description:
                'SSZ serialized `ExecutionPayloadEnvelope` bytes. Use Accept header to choose this response type',
            }),
        },
      },
      headers: z.object({ 'Eth-Consensus-Version': EthConsensusVersionHeaderSchema }),
    },
    400: {
      description: 'Invalid execution payload envelope request',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid slot parameter' },
        },
      },
    },
    404: {
      description:
        "No cached execution payload envelope available for the requested slot. The beacon node only caches the envelope for the current slot's locally built payload.",
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 404, message: 'Execution payload envelope not available for slot' },
        },
      },
    },
    406: NotAcceptableResponse,
    500: InternalErrorResponse,
  },
})

export const getEthV1EventsRoute = createRoute({
  method: 'get',
  path: '/eth/v1/events',
  tags: ['Events', 'ValidatorRequiredApi'],
  summary: 'Subscribe to beacon node events',
  description:
    'Provides endpoint to subscribe to beacon node Server-Sent-Events stream.\nConsumers should use [eventsource](https://html.spec.whatwg.org/multipage/server-sent-events.html#the-eventsource-interface)\nimplementation to listen on those events.\n\nServers _may_ send SSE comments beginning with `:` for any purpose, including to keep the\nevent stream connection alive in the presence of proxy servers.\n',
  operationId: 'eventstream',
  request: {
    query: z.object({
      topics: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z
            .array(
              z.enum([
                'head',
                'head_v2',
                'block',
                'block_gossip',
                'attestation',
                'single_attestation',
                'voluntary_exit',
                'bls_to_execution_change',
                'proposer_slashing',
                'attester_slashing',
                'finalized_checkpoint',
                'chain_reorg',
                'contribution_and_proof',
                'light_client_finality_update',
                'light_client_optimistic_update',
                'payload_attributes',
                'data_column_sidecar',
                'execution_payload',
                'execution_payload_gossip',
                'execution_payload_available',
                'execution_payload_bid',
                'payload_attestation_message',
                'fast_confirmation',
                'proposer_preferences',
              ]),
            )
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            }),
        )
        .openapi({
          param: {
            name: 'topics',
            in: 'query',
            required: true,
            description: 'Event types to subscribe to',
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'head',
                  'head_v2',
                  'block',
                  'block_gossip',
                  'attestation',
                  'single_attestation',
                  'voluntary_exit',
                  'bls_to_execution_change',
                  'proposer_slashing',
                  'attester_slashing',
                  'finalized_checkpoint',
                  'chain_reorg',
                  'contribution_and_proof',
                  'light_client_finality_update',
                  'light_client_optimistic_update',
                  'payload_attributes',
                  'data_column_sidecar',
                  'execution_payload',
                  'execution_payload_gossip',
                  'execution_payload_available',
                  'execution_payload_bid',
                  'payload_attestation_message',
                  'fast_confirmation',
                  'proposer_preferences',
                ],
              },
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Opened SSE stream.',
      content: {
        'text/event-stream': {
          schema: z
            .string()
            .openapi({
              description:
                'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format',
            }),
          examples: {
            head: {
              description: 'Deprecated, use `head_v2` instead.',
              value:
                'event: head\ndata: {"slot":"10", "block":"0x9a2fefd2fdb57f74993c7780ea5b9030d2897b615b89f808011ca5aebed54eaf", "state":"0x600e852a08c1200654ddf11025f1ceacb3c2e74bdd5c630cde0838b2591b69f9", "epoch_transition":false, "previous_duty_dependent_root":"0x5e0043f107cb57913498fbf2f99ff55e730bf1e151f02f221e977c91a90a0e91", "current_duty_dependent_root":"0x5e0043f107cb57913498fbf2f99ff55e730bf1e151f02f221e977c91a90a0e91", "execution_optimistic": false}\n',
            },
            head_v2: {
              description:
                "The node's fork choice has selected a new head consisting of a beacon block and its `payload_status`.\nThis event must be emitted both before and after Gloas. For pre-Gloas head blocks, `payload_status` must be `full`.\n\nThe node should emit a second head event for the same beacon block and slot when there is an update in the `payload_status` from empty to full.\nEmission on other payload_status transitions (e.g. full to empty) is optional and implementation-defined.\n\n`slot` is the slot of the head block. `current_epoch_dependent_root` is `get_block_root_at_slot(state, compute_start_slot_at_epoch(epoch - 1) - 1)` and `next_epoch_dependent_root` is `get_block_root_at_slot(state, compute_start_slot_at_epoch(epoch) - 1)`, where `epoch` is obtained by `compute_epoch_at_slot(slot)`.\nAll dependent roots use the genesis block root in the case of underflow.\n",
              value:
                'event: head_v2\ndata: {"version": "gloas", "data":{"slot":"10", "block":"0x9a2fefd2fdb57f74993c7780ea5b9030d2897b615b89f808011ca5aebed54eaf", "state":"0x600e852a08c1200654ddf11025f1ceacb3c2e74bdd5c630cde0838b2591b69f9", "payload_status": "empty", "epoch_transition":false, "current_epoch_dependent_root":"0x5e0043f107cb57913498fbf2f99ff55e730bf1e151f02f221e977c91a90a0e91", "next_epoch_dependent_root":"0x5e0043f107cb57913498fbf2f99ff55e730bf1e151f02f221e977c91a90a0e91", "execution_optimistic": false}}\n',
            },
            block: {
              description:
                "The node has received a block (from P2P or API) that is successfully imported on the fork-choice `on_block` handler.\nFrom Gloas onwards, the event includes `builder_index` and `block_hash` from the block's `signed_execution_payload_bid.message`.\n",
              value:
                'event: block\ndata: {"slot":"10", "block":"0x9a2fefd2fdb57f74993c7780ea5b9030d2897b615b89f808011ca5aebed54eaf", "execution_optimistic": false, "builder_index":"42", "block_hash":"0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"}\n',
            },
            block_gossip: {
              description:
                'The node has received a block (from P2P or API) that passes validation rules of the `beacon_block` topic',
              value:
                'event: block_gossip\ndata: {"slot":"10", "block":"0x9a2fefd2fdb57f74993c7780ea5b9030d2897b615b89f808011ca5aebed54eaf"}\n',
            },
            attestation: {
              description:
                'The node has received an Attestation (from P2P or API) that passes validation rules of the `beacon_attestation_{subnet_id}` topic',
              value:
                'event: attestation\ndata: {"aggregation_bits":"0x01", "data":{"slot":"1", "index":"1", "beacon_block_root":"0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "source":{"epoch":"1", "root":"0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2"}, "target":{"epoch":"1", "root":"0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2"}}, "signature":"0x1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505cc411d61252fb6cb3fa0017b679f8bb2305b26a285fa2737f175668d0dff91cc1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505", "committee_bits":"0x0000000000000001"}\n',
            },
            single_attestation: {
              description:
                'The node has received a SingleAttestation (from P2P or API) that passes validation rules of the `beacon_attestation_{subnet_id}` topic',
              value:
                'event: single_attestation\ndata: {"committee_index":"1", "attester_index": "1", "data":{"slot":"1", "index":"1", "beacon_block_root":"0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "source":{"epoch":"1", "root":"0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2"}, "target":{"epoch":"1", "root":"0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2"}}, "signature":"0x1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505cc411d61252fb6cb3fa0017b679f8bb2305b26a285fa2737f175668d0dff91cc1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505"}\n',
            },
            voluntary_exit: {
              description:
                'The node has received a SignedVoluntaryExit (from P2P or API) that passes validation rules of `voluntary_exit` topic',
              value:
                'event: voluntary_exit\ndata: {"message":{"epoch":"1", "validator_index":"1"}, "signature":"0x1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505cc411d61252fb6cb3fa0017b679f8bb2305b26a285fa2737f175668d0dff91cc1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505"}\n',
            },
            proposer_slashing: {
              description:
                'The node has received a ProposerSlashing (from P2P or API) that passes validation rules of the `proposer_slashing` topic',
              value:
                'event: proposer_slashing\ndata: {"signed_header_1":{"message":{"slot":"0","proposer_index":"0","parent_root":"0x0000000000000000000000000000000000000000000000000000000000000000","state_root":"0x0000000000000000000000000000000000000000000000000000000000000000","body_root":"0x0000000000000000000000000000000000000000000000000000000000000000"},"signature":"0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"},"signed_header_2":{"message":{"slot":"0","proposer_index":"0","parent_root":"0x0000000000000000000000000000000000000000000000000000000000000000","state_root":"0x0000000000000000000000000000000000000000000000000000000000000000","body_root":"0x0000000000000000000000000000000000000000000000000000000000000000"},"signature":"0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"}}\n',
            },
            attester_slashing: {
              description:
                'The node has received an AttesterSlashing (from P2P or API) that passes validation rules of the `attester_slashing` topic',
              value:
                'event: attester_slashing\ndata: {"attestation_1":{"attesting_indices":["0", "1"],"data":{"slot":"0","index":"0","beacon_block_root":"0x0000000000000000000000000000000000000000000000000000000000000000","source":{"epoch":"0","root":"0x0000000000000000000000000000000000000000000000000000000000000000"},"target":{"epoch":"0","root":"0x0000000000000000000000000000000000000000000000000000000000000000"}},"signature":"0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"},"attestation_2":{"attesting_indices":["0", "1"],"data":{"slot":"0","index":"0","beacon_block_root":"0x0000000000000000000000000000000000000000000000000000000000000000","source":{"epoch":"0","root":"0x0000000000000000000000000000000000000000000000000000000000000000"},"target":{"epoch":"0","root":"0x0000000000000000000000000000000000000000000000000000000000000000"}},"signature":"0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"}}\n',
            },
            bls_to_execution_change: {
              description:
                'The node has received a SignedBLSToExecutionChange (from P2P or API) that passes validation rules of the `bls_to_execution_change` topic',
              value:
                'event: bls_to_execution_change\ndata: {"message":{"validator_index":"1", "from_bls_pubkey":"0x933ad9491b62059dd065b560d256d8957a8c402cc6e8d8ee7290ae11e8f7329267a8811c397529dac52ae1342ba58c95", "to_execution_address":"0x9Be8d619c56699667c1feDCD15f6b14D8B067F72"}, "signature":"0x1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505cc411d61252fb6cb3fa0017b679f8bb2305b26a285fa2737f175668d0dff91cc1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505"}\n',
            },
            finalized_checkpoint: {
              description: 'Finalized checkpoint has been updated',
              value:
                'event: finalized_checkpoint\ndata: {"block":"0x9a2fefd2fdb57f74993c7780ea5b9030d2897b615b89f808011ca5aebed54eaf", "state":"0x600e852a08c1200654ddf11025f1ceacb3c2e74bdd5c630cde0838b2591b69f9", "epoch":"2", "execution_optimistic": false }\n',
            },
            chain_reorg: {
              description: 'The node has reorganized its chain',
              value:
                'event: chain_reorg\ndata: {"slot":"200", "depth":"50", "old_head_block":"0x9a2fefd2fdb57f74993c7780ea5b9030d2897b615b89f808011ca5aebed54eaf", "new_head_block":"0x76262e91970d375a19bfe8a867288d7b9cde43c8635f598d93d39d041706fc76", "old_head_state":"0x9a2fefd2fdb57f74993c7780ea5b9030d2897b615b89f808011ca5aebed54eaf", "new_head_state":"0x600e852a08c1200654ddf11025f1ceacb3c2e74bdd5c630cde0838b2591b69f9", "epoch":"2", "execution_optimistic": false}\n',
            },
            contribution_and_proof: {
              description:
                'The node has received a SignedContributionAndProof (from P2P or API) that passes validation rules of the `sync_committee_contribution_and_proof` topic',
              value:
                'event: contribution_and_proof\ndata: {"message": {"aggregator_index": "997", "contribution": {"slot": "168097", "beacon_block_root": "0x56f1fd4262c08fa81e27621c370e187e621a67fc80fe42340b07519f84b42ea1", "subcommittee_index": "0", "aggregation_bits": "0xffffffffffffffffffffffffffffffff", "signature": "0x85ab9018e14963026476fdf784cc674da144b3dbdb47516185438768774f077d882087b90ad642469902e782a8b43eed0cfc1b862aa9a473b54c98d860424a702297b4b648f3f30bdaae8a8b7627d10d04cb96a2cc8376af3e54a9aa0c8145e3"}, "selection_proof": "0x87c305f04bfe5db27c2b19fc23e00d7ac496ec7d3e759cbfdd1035cb8cf6caaa17a36a95a08ba78c282725e7b66a76820ca4eb333822bd399ceeb9807a0f2926c67ce67cfe06a0b0006838203b493505a8457eb79913ce1a3bcd1cc8e4ef30ed"}, "signature": "0xac118511474a94f857300b315c50585c32a713e4452e26a6bb98cdb619936370f126ed3b6bb64469259ee92e69791d9e12d324ce6fd90081680ce72f39d85d50b0ff977260a8667465e613362c6d6e6e745e1f9323ec1d6f16041c4e358839ac"}\n',
            },
            light_client_finality_update: {
              description: "The node's latest known `LightClientFinalityUpdate` has been updated",
              value:
                'event: light_client_finality_update\ndata: {"version":"gloas", "data":{"attested_header":{"beacon":{"slot":"1", "proposer_index":"1", "parent_root":"0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "state_root":"0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "body_root":"0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2"}, "execution_block_hash":"0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "execution_branch":["0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2"]}, "finalized_header":{"beacon":{"slot":"1", "proposer_index":"1", "parent_root":"0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "state_root":"0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "body_root":"0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2"}, "execution_block_hash":"0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "execution_branch":["0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2"]}, "finality_branch":["0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2"], "sync_aggregate":{"sync_committee_bits":"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffbffffffffffffffffffffbffffffffffffff", "sync_committee_signature":"0x1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505cc411d61252fb6cb3fa0017b679f8bb2305b26a285fa2737f175668d0dff91cc1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505"}, "signature_slot":"1"}}\n',
            },
            light_client_optimistic_update: {
              description: "The node's latest known `LightClientOptimisticUpdate` has been updated",
              value:
                'event: light_client_optimistic_update\ndata: {"version":"gloas", "data":{"attested_header":{"beacon":{"slot":"1", "proposer_index":"1", "parent_root":"0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "state_root":"0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "body_root":"0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2"}, "execution_block_hash":"0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "execution_branch":["0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2"]}, "sync_aggregate":{"sync_committee_bits":"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffbffffffffffffffffffffbffffffffffffff", "sync_committee_signature":"0x1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505cc411d61252fb6cb3fa0017b679f8bb2305b26a285fa2737f175668d0dff91cc1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505"}, "signature_slot":"1"}}\n',
            },
            payload_attributes: {
              description:
                'The node has computed new payload attributes for execution payload building.\n\nThis event gives block builders and relays sufficient information to construct or\nverify a block at `proposal_slot`. The meanings of the fields are:\n\n- `version`: the identifier of the beacon hard fork at `proposal_slot`, e.g.\n  `"bellatrix"`, `"capella"`.\n- `proposal_slot`: the slot at which a block using these payload attributes may be\n   built.\n- `parent_block_root`: the beacon block root of the parent block to be built upon.\n- `parent_block_number`: the execution block number of the parent block. Removed from `gloas` onwards.\n- `parent_block_hash`: the execution block hash of the parent block.\n- `safe_block_hash`, `finalized_block_hash`: the execution block hashes the node would pass\n   as `safeBlockHash` and `finalizedBlockHash` in `engine_forkchoiceUpdated` when building\n   on `parent_block_hash`. Added from `gloas` onwards.\n- `proposer_index`: the validator index of the proposer at `proposal_slot` on\n   the chain identified by `parent_block_root`.\n- `payload_attributes`: beacon API encoding of `PayloadAttributesV<N>` as\n   defined by the `execution-apis` specification. The version `N` must match the\n   payload attributes for the hard fork matching `version`.\n   The beacon API encoded object must have equivalent fields to its counterpart in\n   `execution-apis` with two differences: 1) `snake_case` identifiers must be used\n   rather than `camelCase`; 2) integers must be encoded as quoted decimals rather\n   than big-endian hex.\n\nThe frequency at which this event is sent may depend on beacon node configuration.\nThe fee recipient may also be set via beacon node config, but should likely be\nignored by block builders and most other API consumers.\n',
              value:
                'event: payload_attributes\ndata: {"version": "gloas", "data": {"proposer_index": "123", "proposal_slot": "10", "parent_block_root": "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "parent_block_hash": "0x9a2fefd2fdb57f74993c7780ea5b9030d2897b615b89f808011ca5aebed54eaf", "safe_block_hash": "0x9a2fefd2fdb57f74993c7780ea5b9030d2897b615b89f808011ca5aebed54eaf", "finalized_block_hash": "0x9a2fefd2fdb57f74993c7780ea5b9030d2897b615b89f808011ca5aebed54eaf", "payload_attributes": {"timestamp": "123456", "prev_randao": "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "suggested_fee_recipient": "0x0000000000000000000000000000000000000000", "withdrawals": [{"index": "5", "validator_index": "10", "address": "0x0000000000000000000000000000000000000000", "amount": "15640"}], "parent_beacon_block_root": "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "slot_number": "10", "target_gas_limit": "60000000"}}}\n',
            },
            data_column_sidecar: {
              description:
                'The node has received a DataColumnSidecar (from P2P or API) that passes all gossip validations on the data_column_sidecar_{subnet_id} topic',
              value:
                'event: data_column_sidecar\ndata: {"block_root": "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "index": "1", "slot": "1"}\n',
            },
            execution_payload: {
              description:
                'The node has received a `SignedExecutionPayloadEnvelope` (from P2P or API) that is successfully imported on the fork-choice `on_execution_payload_envelope` handler',
              value:
                'event: execution_payload\ndata: {"slot":"10", "builder_index":"42", "block_hash":"0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef", "block_root":"0x9a2fefd2fdb57f74993c7780ea5b9030d2897b615b89f808011ca5aebed54eaf", "execution_optimistic": false}\n',
            },
            execution_payload_gossip: {
              description:
                'The node has received a `SignedExecutionPayloadEnvelope` (from P2P or API) that passes validation rules of the `execution_payload` topic',
              value:
                'event: execution_payload_gossip\ndata: {"slot":"10", "builder_index":"42", "block_hash":"0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef", "block_root":"0x9a2fefd2fdb57f74993c7780ea5b9030d2897b615b89f808011ca5aebed54eaf"}\n',
            },
            execution_payload_available: {
              description:
                'The node has verified that the execution payload and blobs for a block are available and ready for payload attestation',
              value:
                'event: execution_payload_available\ndata: {"slot": "10", "block_root": "0x9a2fefd2fdb57f74993c7780ea5b9030d2897b615b89f808011ca5aebed54eaf"}\n',
            },
            execution_payload_bid: {
              description:
                'The node has received a `SignedExecutionPayloadBid` (from P2P or API) that passes gossip validation on the `execution_payload_bid` topic',
              value:
                'event: execution_payload_bid\ndata: {"version":"gloas", "data":{"message": {"parent_block_hash": "0x9a2fefd2fdb57f74993c7780ea5b9030d2897b615b89f808011ca5aebed54eaf", "parent_block_root": "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "block_hash": "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef", "prev_randao": "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "fee_recipient": "0x0000000000000000000000000000000000000000", "gas_limit": "30000000", "builder_index": "42", "slot": "10", "value": "1000000000", "execution_payment": "0", "blob_kzg_commitments": ["0x1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505cc411d61252fb6cb3fa0017b679f8bb2"], "execution_requests_root": "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2"}, "signature": "0x1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505cc411d61252fb6cb3fa0017b679f8bb2305b26a285fa2737f175668d0dff91cc1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505"}}\n',
            },
            payload_attestation_message: {
              description:
                'The node has received a `PayloadAttestationMessage` that passes validation rules of the `payload_attestation_message` topic',
              value:
                'event: payload_attestation_message\ndata: {"version":"gloas", "data":{"validator_index": "123", "data": {"beacon_block_root": "0x9a2fefd2fdb57f74993c7780ea5b9030d2897b615b89f808011ca5aebed54eaf", "slot": "10", "payload_present": true, "blob_data_available": true}, "signature": "0x1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505cc411d61252fb6cb3fa0017b679f8bb2305b26a285fa2737f175668d0dff91cc1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505"}}\n',
            },
            fast_confirmation: {
              description:
                'The node has executed the fast confirmation algorithm. This event should be emitted every time the algorithm is run, regardless of whether the most recent confirmed block has changed since the previous run. `block` is the root and `slot` is the slot of the most recent confirmed block, and `current_slot` is the wall-clock slot at which the algorithm was executed.',
              value:
                'event: fast_confirmation\ndata: {"block": "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "slot": "1", "current_slot": "2"}\n',
            },
            proposer_preferences: {
              description:
                'The node has received a `SignedProposerPreferences` (from P2P or API) that passes gossip validation on the `proposer_preferences` topic',
              value:
                'event: proposer_preferences\ndata: {"version":"gloas", "data":{"message": {"dependent_root": "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2", "proposal_slot": "32", "validator_index": "123", "fee_recipient": "0x0000000000000000000000000000000000000000", "target_gas_limit": "60000000"}, "signature": "0x1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505cc411d61252fb6cb3fa0017b679f8bb2305b26a285fa2737f175668d0dff91cc1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505"}}\n',
            },
          },
        },
      },
    },
    400: {
      description: 'The topics supplied could not be parsed',
      content: {
        'application/json': {
          schema: ErrorMessageSchema,
          example: { code: 400, message: 'Invalid topic: weather_forecast' },
        },
      },
    },
    500: InternalErrorResponse,
  },
})
