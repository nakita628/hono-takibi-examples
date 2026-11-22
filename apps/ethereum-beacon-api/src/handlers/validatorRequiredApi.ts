import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEthV1ValidatorAttestationDataRoute,
  getEthV1ValidatorDutiesProposerEpochRoute,
  getEthV1ValidatorPayloadAttestationDataRoute,
  getEthV1ValidatorSyncCommitteeContributionRoute,
  getEthV2ValidatorAggregateAttestationRoute,
  getEthV2ValidatorDutiesProposerEpochRoute,
  getEthV3ValidatorBlocksSlotRoute,
  postEthV1ValidatorBeaconCommitteeSubscriptionsRoute,
  postEthV1ValidatorContributionAndProofsRoute,
  postEthV1ValidatorDutiesAttesterEpochRoute,
  postEthV1ValidatorDutiesSyncEpochRoute,
  postEthV1ValidatorPrepareBeaconProposerRoute,
  postEthV1ValidatorSyncCommitteeSubscriptionsRoute,
  postEthV2ValidatorAggregateAndProofsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const validatorRequiredApiHandler = app
  .openapi(postEthV1ValidatorDutiesAttesterEpochRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1ValidatorDutiesProposerEpochRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV2ValidatorDutiesProposerEpochRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV1ValidatorDutiesSyncEpochRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV3ValidatorBlocksSlotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1ValidatorAttestationDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1ValidatorPayloadAttestationDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV2ValidatorAggregateAttestationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV2ValidatorAggregateAndProofsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV1ValidatorBeaconCommitteeSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV1ValidatorSyncCommitteeSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1ValidatorSyncCommitteeContributionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV1ValidatorContributionAndProofsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV1ValidatorPrepareBeaconProposerRoute, (c) => {
    throw new Error('Not implemented')
  })
