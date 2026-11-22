import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRootRoute,
  postEthV1ValidatorBeaconCommitteeSelectionsRoute,
  postEthV1ValidatorBuilderPreferencesRoute,
  postEthV1ValidatorDutiesPtcEpochRoute,
  postEthV1ValidatorLivenessEpochRoute,
  postEthV1ValidatorProposerPreferencesRoute,
  postEthV1ValidatorRegisterValidatorRoute,
  postEthV1ValidatorSyncCommitteeSelectionsRoute,
  postEthV4ValidatorBlocksSlotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const validatorHandler = app
  .openapi(postEthV1ValidatorDutiesPtcEpochRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV4ValidatorBlocksSlotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV1ValidatorBeaconCommitteeSelectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV1ValidatorSyncCommitteeSelectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV1ValidatorRegisterValidatorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV1ValidatorProposerPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV1ValidatorBuilderPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV1ValidatorLivenessEpochRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRootRoute, (c) => {
    throw new Error('Not implemented')
  })
